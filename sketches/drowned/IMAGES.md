# The Kid Who Drowned — images

Real imagery is now in place, in `images/`:

- `images/shoreline-dusk.png` — Photo 1, "the line between the water and
  the trees, underexposed": a dusk reservoir shoreline, treeline reflected
  in glass-still water.
- `images/stone-ripple.png` — Photo 2, "a single object breaking still
  water": a dark stone resting just above still water, concentric ripples
  spreading outward.
- `images/water-texture.png` — the optional background texture: a macro
  shot of dark water, faint ripples, used as a very low-opacity (~6%)
  full-page background behind `--color-bg` (see `body` in `style.css`).
- `images/tree-illustration.png` — a fine ink line drawing of a bare tree
  with a light watercolor wash in faded gold, slate-pink and deep sage,
  used as a standalone illustrated artwork between the two photos.

The hero/divider/footer motifs remain plain inline-SVG line drawings
(still water, a stone breaking the surface, a crescent moon) — no
illustrated replacements for those exist yet. If they're produced later,
swap them in the same way the tree illustration was added: an `<img
class="song-photo">` inside a `<figure class="artwork-illustration">`,
styled per the "Icon motifs" prompt below.

Shared style notes for any future imagery on this page: dark,
underexposed, dusk or near-night light; the page's own palette — deep
muted ink-navy (`#2E3440`), warm cream only as a sliver of highlight,
faded slate-pink and deep sage as desaturated accents, faded gold used
sparingly as the one warm note; documentary/still-life photography or
fine pencil-line illustration, never glossy, never lit like a product
shot; slow shutter/long exposure calm rather than drama. Negative prompt:
`no text, no logos, no watermark, not oversaturated, no daylight, no
bright highlights, no studio strobe, no AI-art sheen, no people unless
specified`.

## Icon motifs (still to do)

**"Single-object fine ink line drawing with a light watercolor wash in
faded gold, slate-pink or deep sage, on a dark ink-navy ground, no
shading gradients, no background texture, centered composition, moody
and restrained rather than decorative"** — applied individually to: still
water (the existing wave motif), a stone or ripple, a crescent moon.

## Favicon

No image generation needed — `favicon.svg` is a small hand-drawn vector
(rounded ink-navy square, gold and slate-pink ripple lines) built directly
from the page's own motif paths, so it stays crisp at any size and needs
no photographic asset.
