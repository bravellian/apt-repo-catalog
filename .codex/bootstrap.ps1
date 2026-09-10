#!/usr/bin/env pwsh
[CmdletBinding()]
param(
    [string]$WorkerUser = 'samuel',
    [switch]$RunTests,
    [switch]$VerifyOnly,
    [switch]$SkipCodexUpdate
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$CodexInstallerUrl = 'https://chatgpt.com/codex/install.sh'
$DotNetInstallerUrl = 'https://dot.net/v1/dotnet-install.sh'
$DotNetInstallDir = '/usr/local/share/dotnet'
$DotNetSymlink = '/usr/local/bin/dotnet'

function Write-Step {
    param([Parameter(Mandatory)][string]$Message)
    Write-Host "==> $Message" -ForegroundColor Cyan
}

function Invoke-Native {
    param(
        [Parameter(Mandatory)][string]$File,
        [string[]]$Arguments = @(),
        [string]$WorkingDirectory,
        [switch]$AllowFailure
    )

    $oldLocation = $null
    try {
        if (-not [string]::IsNullOrWhiteSpace($WorkingDirectory)) {
            $oldLocation = Get-Location
            Set-Location -LiteralPath $WorkingDirectory
        }

        & $File @Arguments
        $exitCode = $LASTEXITCODE
        if ($exitCode -ne 0 -and -not $AllowFailure) {
            throw "Command failed with exit code $exitCode`: $File $($Arguments -join ' ')"
        }

        return $exitCode
    }
    finally {
        if ($null -ne $oldLocation) {
            Set-Location -LiteralPath $oldLocation
        }
    }
}

function Get-EffectiveUid {
    $uidText = (& id -u 2>$null | Out-String).Trim()
    $uid = 0
    if (-not [int]::TryParse($uidText, [ref]$uid)) {
        throw 'Unable to determine the effective Linux user ID.'
    }

    return $uid
}

function Test-IsRoot {
    return (Get-EffectiveUid) -eq 0
}

function Get-UserHome {
    param([Parameter(Mandatory)][string]$UserName)

    $entry = (& getent passwd $UserName 2>$null | Out-String).Trim()
    if ([string]::IsNullOrWhiteSpace($entry)) {
        throw "Linux user '$UserName' does not exist."
    }

    $parts = $entry.Split(':')
    if ($parts.Count -lt 6 -or [string]::IsNullOrWhiteSpace($parts[5])) {
        throw "Unable to determine the home directory for '$UserName'."
    }

    return $parts[5]
}

function Invoke-Root {
    param(
        [Parameter(Mandatory)][string]$File,
        [string[]]$Arguments = @()
    )

    if (Test-IsRoot) {
        Invoke-Native -File $File -Arguments $Arguments | Out-Null
        return
    }

    if (-not (Get-Command sudo -ErrorAction SilentlyContinue)) {
        throw 'This bootstrap needs root privileges to install system packages. Run it as root or install sudo.'
    }

    Invoke-Native -File 'sudo' -Arguments (@($File) + $Arguments) | Out-Null
}

function Invoke-AsWorker {
    param(
        [Parameter(Mandatory)][string]$File,
        [string[]]$Arguments = @(),
        [string]$WorkingDirectory
    )

    $currentUser = (& id -un | Out-String).Trim()
    if ($currentUser -eq $WorkerUser) {
        Invoke-Native -File $File -Arguments $Arguments -WorkingDirectory $WorkingDirectory | Out-Null
        return
    }

    if (-not (Test-IsRoot)) {
        throw "Bootstrap is running as '$currentUser' but worker commands must run as '$WorkerUser'."
    }

    $workerHome = Get-UserHome -UserName $WorkerUser
    $workerPath = "$workerHome/.local/bin:$workerHome/bin:/usr/local/bin:/usr/bin:/bin"
    $runArgs = @('-u', $WorkerUser, '--', 'env', "HOME=$workerHome", "PATH=$workerPath", $File) + $Arguments
    Invoke-Native -File 'runuser' -Arguments $runArgs -WorkingDirectory $WorkingDirectory | Out-Null
}

function Invoke-AsWorkerShell {
    param(
        [Parameter(Mandatory)][string]$Command,
        [switch]$CaptureOutput
    )

    $currentUser = (& id -un | Out-String).Trim()
    $workerHome = Get-UserHome -UserName $WorkerUser
    $workerPath = "$workerHome/.local/bin:$workerHome/bin:/usr/local/bin:/usr/bin:/bin"

    if ($currentUser -eq $WorkerUser) {
        $result = & env "HOME=$workerHome" "PATH=$workerPath" bash -lc $Command 2>&1
    }
    elseif (Test-IsRoot) {
        $result = & runuser -u $WorkerUser -- env "HOME=$workerHome" "PATH=$workerPath" bash -lc $Command 2>&1
    }
    else {
        throw "Cannot execute a command as '$WorkerUser' from '$currentUser'."
    }

    if ($LASTEXITCODE -ne 0) {
        if ($CaptureOutput) {
            return $null
        }

        throw "Worker command failed: $Command"
    }

    if ($CaptureOutput) {
        return ($result | Out-String).Trim()
    }
}

function Read-OsRelease {
    $path = '/etc/os-release'
    if (-not (Test-Path -LiteralPath $path)) {
        throw 'This bootstrap supports Linux workers and requires /etc/os-release.'
    }

    $values = @{}
    foreach ($line in Get-Content -LiteralPath $path) {
        if ($line -match '^(?<key>[A-Z0-9_]+)=(?<value>.*)$') {
            $value = $Matches.value.Trim()
            if ($value.Length -ge 2 -and (($value.StartsWith('"') -and $value.EndsWith('"')) -or ($value.StartsWith("'") -and $value.EndsWith("'")))) {
                $value = $value.Substring(1, $value.Length - 2)
            }
            $values[$Matches.key] = $value
        }
    }

    return $values
}

function Ensure-AptPackages {
    param([string[]]$Packages)

    if ($null -eq $Packages -or $Packages.Count -eq 0) {
        return
    }

    Write-Step "Ensuring Debian packages: $($Packages -join ', ')"
    Invoke-Root -File 'apt-get' -Arguments @('update')
    Invoke-Root -File 'apt-get' -Arguments (@('install', '-y') + $Packages)
}

function Ensure-ExactDotNetSdk {
    param([Parameter(Mandatory)][string]$GlobalJsonPath)

    if (-not (Test-Path -LiteralPath $GlobalJsonPath)) {
        throw "Configured global.json was not found: $GlobalJsonPath"
    }

    $globalJson = Get-Content -LiteralPath $GlobalJsonPath -Raw | ConvertFrom-Json
    $requiredSdk = [string]$globalJson.sdk.version
    if ([string]::IsNullOrWhiteSpace($requiredSdk)) {
        throw "No sdk.version was found in $GlobalJsonPath."
    }

    $installed = @()
    if (Get-Command dotnet -ErrorAction SilentlyContinue) {
        $installed = @((& dotnet --list-sdks 2>$null) | ForEach-Object { if ($_ -match '^(?<version>\S+)\s') { $Matches.version } })
    }

    if ($installed -contains $requiredSdk) {
        return $requiredSdk
    }

    if ($VerifyOnly) {
        throw ".NET SDK $requiredSdk is required but is not installed."
    }

    Write-Step "Installing exact .NET SDK $requiredSdk"
    $installer = Join-Path ([System.IO.Path]::GetTempPath()) "dotnet-install-$([Guid]::NewGuid().ToString('N')).sh"
    try {
        Invoke-Native -File 'curl' -Arguments @('-fsSL', $DotNetInstallerUrl, '-o', $installer) | Out-Null
        Invoke-Root -File 'mkdir' -Arguments @('-p', $DotNetInstallDir)
        Invoke-Root -File 'bash' -Arguments @($installer, '--version', $requiredSdk, '--install-dir', $DotNetInstallDir, '--no-path')
        Invoke-Root -File 'ln' -Arguments @('-sfn', "$DotNetInstallDir/dotnet", $DotNetSymlink)
    }
    finally {
        Remove-Item -LiteralPath $installer -Force -ErrorAction SilentlyContinue
    }

    $verified = @((& $DotNetSymlink --list-sdks 2>$null) | ForEach-Object { if ($_ -match '^(?<version>\S+)\s') { $Matches.version } })
    if ($verified -notcontains $requiredSdk) {
        throw ".NET SDK $requiredSdk was installed but could not be verified."
    }

    return $requiredSdk
}

function Assert-NodeVersion {
    param([Parameter(Mandatory)][int]$MinimumMajor)

    $versionText = Invoke-AsWorkerShell -Command 'node --version' -CaptureOutput
    if ([string]::IsNullOrWhiteSpace($versionText) -or $versionText -notmatch '^v(?<major>\d+)') {
        throw "Node.js $MinimumMajor or newer is required but could not be verified."
    }

    if ([int]$Matches.major -lt $MinimumMajor) {
        throw "Node.js $MinimumMajor or newer is required; found $versionText."
    }

    return $versionText
}

function Ensure-CodexCli {
    $codexVersion = Invoke-AsWorkerShell -Command 'codex --version' -CaptureOutput
    if ($VerifyOnly) {
        if ([string]::IsNullOrWhiteSpace($codexVersion)) {
            throw "Codex CLI is required but is not installed for '$WorkerUser'."
        }
        return $codexVersion
    }

    $shouldInstall = [string]::IsNullOrWhiteSpace($codexVersion) -or (-not $SkipCodexUpdate -and [bool]$config.dependencies.codexCli.updateOnBootstrap)
    if ($shouldInstall) {
        Write-Step $(if ($codexVersion) { 'Updating Codex CLI' } else { 'Installing Codex CLI' })
        $installer = Join-Path ([System.IO.Path]::GetTempPath()) "codex-install-$([Guid]::NewGuid().ToString('N')).sh"
        try {
            Invoke-Native -File 'curl' -Arguments @('-fsSL', $CodexInstallerUrl, '-o', $installer) | Out-Null
            Invoke-Root -File 'chmod' -Arguments @('0755', $installer)
            Invoke-AsWorker -File 'sh' -Arguments @($installer)
        }
        finally {
            Remove-Item -LiteralPath $installer -Force -ErrorAction SilentlyContinue
        }
        $codexVersion = Invoke-AsWorkerShell -Command 'codex --version' -CaptureOutput
    }

    if ([string]::IsNullOrWhiteSpace($codexVersion)) {
        throw "Codex CLI could not be verified for '$WorkerUser'."
    }
    return $codexVersion
}

function Invoke-ConfiguredCommands {
    param(
        [Parameter(Mandatory)]$Commands,
        [Parameter(Mandatory)][string]$RepositoryRoot
    )

    foreach ($command in @($Commands)) {
        $arguments = if ($null -eq $command.args) { @() } else { @($command.args | ForEach-Object { [string]$_ }) }
        Write-Step "$($command.file) $($arguments -join ' ')"
        Invoke-AsWorker -File ([string]$command.file) -Arguments $arguments -WorkingDirectory $RepositoryRoot
    }
}

$repositoryRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$configPath = Join-Path $PSScriptRoot 'worker.json'
if (-not (Test-Path -LiteralPath $configPath)) {
    throw "Worker configuration not found: $configPath"
}

$config = Get-Content -LiteralPath $configPath -Raw | ConvertFrom-Json
if ([int]$config.schemaVersion -ne 1) {
    throw "Unsupported worker.json schemaVersion '$($config.schemaVersion)'."
}

$os = Read-OsRelease
if ($os['ID'] -ne [string]$config.platform.os) {
    throw "This worker expects '$($config.platform.os)', but /etc/os-release reports '$($os['ID'])'."
}
$actualMajor = ([string]$os['VERSION_ID']).Split('.')[0]
if ($actualMajor -ne [string]$config.platform.majorVersion) {
    throw "This worker expects $($config.platform.os) $($config.platform.majorVersion), but VERSION_ID is '$($os['VERSION_ID'])'."
}

$null = Get-UserHome -UserName $WorkerUser
Write-Host "`nCodex worker bootstrap" -ForegroundColor Green
Write-Host "  Repository : $repositoryRoot"
Write-Host "  Worker user: $WorkerUser"
Write-Host "  OS         : $($os['PRETTY_NAME'])"
Write-Host "  Mode       : $(if ($VerifyOnly) { 'verify only' } else { 'ensure desired state' })`n"

if (-not $VerifyOnly) {
    Ensure-AptPackages -Packages @($config.dependencies.aptPackages | ForEach-Object { [string]$_ })
}

$dotnetVersion = $null
if ($null -ne $config.dependencies.dotnet) {
    $globalJsonPath = Join-Path $repositoryRoot ([string]$config.dependencies.dotnet.globalJson)
    $dotnetVersion = Ensure-ExactDotNetSdk -GlobalJsonPath $globalJsonPath
}

$nodeVersion = $null
if ($null -ne $config.dependencies.node) {
    $nodeVersion = Assert-NodeVersion -MinimumMajor ([int]$config.dependencies.node.minimumMajor)
}

$codexVersion = Ensure-CodexCli
Write-Host 'Verified toolchain:' -ForegroundColor Green
if ($dotnetVersion) { Write-Host "  .NET  : $dotnetVersion" }
if ($nodeVersion) { Write-Host "  Node  : $nodeVersion" }
Write-Host "  Codex : $codexVersion"

if (-not $VerifyOnly) {
    Invoke-ConfiguredCommands -Commands $config.commands.bootstrap -RepositoryRoot $repositoryRoot
    if ($RunTests) {
        Invoke-ConfiguredCommands -Commands $config.commands.test -RepositoryRoot $repositoryRoot
    }
}

$codexAuthenticated = $null -ne (Invoke-AsWorkerShell -Command 'codex login status >/dev/null 2>&1 && printf ready' -CaptureOutput)
Write-Host ''
if ($codexAuthenticated) {
    Write-Host 'Codex authentication: ready.' -ForegroundColor Green
    Write-Host 'CODEX_WORKER_STATUS=ready'
}
else {
    Write-Host 'Codex authentication: ACTION REQUIRED.' -ForegroundColor Yellow
    Write-Host "Run this once as '$WorkerUser': codex login --device-auth"
    Write-Host 'CODEX_WORKER_STATUS=ready-needs-codex-auth'
}

if (-not $VerifyOnly -and -not $RunTests) {
    Write-Host 'Tests were not run. Use -RunTests to include the configured test suite.'
}

