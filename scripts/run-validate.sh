#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Ensure deps are installed
if [ ! -d node_modules ]; then
  ./scripts/bootstrap.sh
fi

node scripts/validate-repos.mjs
node scripts/validate-keys.mjs

echo "Validation OK."
