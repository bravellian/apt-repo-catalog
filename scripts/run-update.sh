#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -d node_modules ]; then
  ./scripts/bootstrap.sh
fi

node scripts/update-keys.mjs

echo "Keys updated. Review 'git status' and commit via PR."
