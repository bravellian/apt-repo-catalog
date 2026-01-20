#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v node >/dev/null 2>&1; then
  echo "node not found on PATH. Install Node 20+ and re-run."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found on PATH. Install npm (usually bundled with Node) and re-run."
  exit 1
fi

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "Bootstrap complete."
