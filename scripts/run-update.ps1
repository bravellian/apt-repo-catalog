$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

if (-not (Test-Path ".\node_modules")) {
  & .\scripts\bootstrap.ps1
}

node .\scripts\update-keys.mjs

Write-Host "Keys updated. Review 'git status' and commit via PR."
