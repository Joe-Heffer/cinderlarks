# The Kid Who Drowned — image prompts

This page currently uses moody gradient blocks as photo placeholders and a
hand-drawn SVG for its favicon/hero motif — no generated imagery yet. When
real photography is ready, create an `images/` folder here and wire it in the
same way `cinderlarks-quiet-pages` does: swap each `.photo-placeholder-block`
`<div>` for an `<img class="song-photo" src="images/…jpg" alt="…">` inside
the existing `<figure class="photo-placeholder">`. Prompts below are written
for Midjourney / DALL·E / Stable Diffusion — adjust aspect ratio flags per
tool.

Shared style notes for every prompt below: dark, underexposed, dusk or
near-night light; the page's own palette — deep muted ink-navy (`#2E3440`),
warm cream only as a sliver of highlight, faded slate-pink and deep sage as
desaturated accents, faded gold used sparingly as the one warm note;
documentary/still-life photography or fine pencil-line illustration, never
glossy, never lit like a product shot; slow shutter/long exposure calm rather
than drama. Negative prompt for all: `no text, no logos, no watermark, not
oversaturated, no daylight, no bright highlights, no studio strobe, no
AI-art sheen, no people unless specified`.

## Photo 1 — "the line between the water and the trees, underexposed"

A dusk reservoir shoreline, treeline reflected in glass-still water, the
horizon line barely visible between the two darknesses, almost
monochrome ink-navy and deep sage, one faint warm streak of dying light low
on the horizon, long exposure smoothing the water to a mirror, grain visible,
35mm documentary film photography, underexposed by a stop or more. Wide
aspect ratio (4:3 or 3:2) to match the page's photo-placeholder framing.

## Photo 2 — "a single object breaking still water"

A single dark stone mid-fall just above still water at dusk, or the instant
ripple it leaves behind (choose one), shallow depth of field, everything else
out of focus and nearly black, one small point of faded gold or pink catching
the last light on the water's surface, minimal, quiet, documentary
still-life photography. Same 4:3 framing as Photo 1.

## Background texture (optional, low-opacity full-page texture)

**"Dark water surface, macro"** — Close-up macro photograph of still dark
water at night or dusk, faint concentric ripples barely visible, ink-navy and
near-black tones with the faintest warm highlight, no reflections of
identifiable objects, evenly dark, tileable/seamless. Square or small aspect
ratio, meant to sit as a full-page background at very low opacity (5–10%)
behind `--color-bg`, never competing with body text contrast.

## Icon motifs (optional illustrated variants)

The hero/divider/footer motifs on this page are currently plain inline-SVG
line drawings (still water, a stone breaking the surface, a crescent moon)
matching the site's existing icon style. If replacing them with illustrated
variants, use: **"Single-object fine ink line drawing with a light watercolor
wash in faded gold, slate-pink or deep sage, on a dark ink-navy ground, no
shading gradients, no background texture, centered composition, moody and
restrained rather than decorative"** — applied individually to: still water
(the existing wave motif), a stone or ripple, a crescent moon.

## Favicon

No image generation needed — `favicon.svg` is a small hand-drawn vector
(rounded ink-navy square, gold and slate-pink ripple lines) built directly
from the page's own motif paths, so it stays crisp at any size and needs no
photographic asset.
