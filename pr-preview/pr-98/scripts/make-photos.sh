#!/usr/bin/env bash
# Build web-sized album images from the hi-res originals (which live on Google Drive, not in git).
# Usage: scripts/make-photos.sh [source-dir]
set -euo pipefail

src="${1:-$HOME/Pictures/cinderlarks-photos}"
out="$(dirname "$0")/../assets/images/album"
mkdir -p "$out"

n=0
for f in "$src"/*.jpg; do
  n=$((n + 1))
  id=$(printf '%02d' "$n")
  magick "$f" -auto-orient -strip -resize '2000x2000>' -quality 78 "$out/$id-large.webp"
  magick "$f" -auto-orient -strip -resize '600x600>' -quality 72 "$out/$id-thumb.webp"
done
echo "Wrote $n photos to $out"
