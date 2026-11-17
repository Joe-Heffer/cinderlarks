#!/usr/bin/env bash
# Compiles assets/src/tailwind.css to assets/tailwind.css (committed; CI checks it is current).
set -euo pipefail
cd "$(dirname "$0")/.."
npm install --no-save --no-package-lock tailwindcss@4.3.2 @tailwindcss/cli@4.3.2
npx tailwindcss -i assets/src/tailwind.css -o assets/tailwind.css --minify
echo >> assets/tailwind.css
