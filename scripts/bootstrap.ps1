$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw "node not found on PATH. Install Node 20+ and re-run."
}
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "npm not found on PATH. Install npm and re-run."
}

if (Test-Path ".\package-lock.json") {
  npm ci
} else {
  npm install
}

Write-Host "Bootstrap complete."
