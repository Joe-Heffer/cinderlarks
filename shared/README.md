# Shared static resources

Vendored, self-hosted copies of third-party assets that more than one sketch
is likely to want — so each sketch can link to a local file instead of
everyone pulling the same thing from a different CDN. Using anything here is
optional: sketches are still self-contained and free to use their own CDN
links, fonts, or nothing at all.

No build step is involved in *using* these files — they're plain static
assets, copied here as-is from their upstream npm package. The npm package
is only used to fetch the files; the repo itself still has no package.json
and no install step.

## What's here

### `tailwind/tailwind.js`

The official Tailwind CSS v4 browser build
([`@tailwindcss/browser`](https://www.npmjs.com/package/@tailwindcss/browser)),
vendored so sketches don't depend on `cdn.tailwindcss.com` being reachable.
Drop-in replacement for the Play CDN `<script>` tag — same runtime,
JIT-compiles utility classes from whatever's in the page, no build step:

```html
<script src="../../shared/tailwind/tailwind.js"></script>
<script>
  tailwind.config = {
    theme: { extend: { /* per-sketch palette, fonts, etc. */ } }
  };
</script>
```

Version: 4.3.2. License: MIT (see `LICENSE` in this folder).

### `icons/material-icons.css` + `icons/material-icons.woff2`

Google's classic "Material Icons" font, self-hosted
(via [`material-icons`](https://www.npmjs.com/package/material-icons) on npm)
instead of loading from `fonts.googleapis.com`. Only the filled/default
variant and woff2 format are included to keep this lightweight — see the npm
package if a sketch needs outlined/round/sharp/two-tone variants or broader
format fallback.

```html
<link rel="stylesheet" href="../../shared/icons/material-icons.css">
...
<span class="material-icons">favorite</span>
```

Icon names/search: https://fonts.google.com/icons?icon.set=Material+Icons

Version: 1.13.14. License: Apache-2.0 (see `LICENSE` in this folder).

### `logo/logo-wordmark.png` + `logo/wild-honey.ttf`

The Cinderlarks logo wordmark image and the "Wild Honey" display font used to
set it, so any sketch can reuse the same brand mark instead of redrawing it.

```html
<style>
  @font-face {
    font-family: "Wild Honey";
    src: url('../../shared/logo/wild-honey.ttf') format('truetype');
    font-display: swap;
  }
</style>
...
<img src="../../shared/logo/logo-wordmark.png" alt="The Cinderlarks">
```

## Updating

These are point-in-time copies, not a live dependency. To pull a newer
version:

```sh
npm pack @tailwindcss/browser@latest   # then copy dist/index.global.js over tailwind/tailwind.js
npm pack material-icons@latest         # then copy iconfont/material-icons.woff2 over icons/material-icons.woff2
```

Update the version numbers above after re-vendoring.
