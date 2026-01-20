$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

if (-not (Test-Path ".\node_modules")) {
  & .\scripts\bootstrap.ps1
}

node .\scripts\validate-repos.mjs
node .\scripts\validate-keys.mjs

Write-Host "Validation OK."
