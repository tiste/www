#!/bin/sh
# Rend les visuels LinkedIn en PNG @2x avec un Chromium headless.
# Usage : ./linkedin/render.sh [BROWSER="/chemin/vers/chrome"]
set -e
cd "$(dirname "$0")"

if [ -z "$BROWSER" ]; then
  for candidate in \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
    "/Applications/Chromium.app/Contents/MacOS/Chromium"; do
    if [ -x "$candidate" ]; then
      BROWSER="$candidate"
      break
    fi
  done
fi

# render <nom> <largeur> <hauteur> : la fenêtre headless est plus haute que le visuel
# (sinon le bas est rogné), puis le PNG est recadré à la taille exacte.
render() {
  "$BROWSER" --headless --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=2 --window-size="$2,$(($3 + 200))" \
    --screenshot="$PWD/$1.png" "file://$PWD/$1.html" 2>/dev/null
  node -e "
    const sharp = require('sharp');
    sharp('$1.png')
      .extract({ left: 0, top: 0, width: $2 * 2, height: $3 * 2 })
      .toBuffer()
      .then((buffer) => sharp(buffer).toFile('$1.png'));
  "
  echo "$1.png"
}

render header 1584 396
