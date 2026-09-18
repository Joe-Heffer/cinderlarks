# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cinderlarks — the band's website: a single static HTML/CSS/JS page, deployed to GitHub Pages. No build step, no package manager, no framework, no tests.

## Commands

Preview locally:

```sh
python3 -m http.server
```

Then open http://localhost:8000. There's no build or test command in this repo, but CI does lint `index.html`, `epk/index.html` and `assets/style.css` (see below) — no local install/build required for that either, `npx` pulls the tools on demand.

Lint locally (same checks CI runs in `.github/workflows/checks.yml`):

```sh
npx --yes htmlhint@1 --config .htmlhintrc index.html epk/index.html
npm install --no-save stylelint@17 stylelint-config-standard@40 postcss-html@1
npx stylelint --config .stylelintrc.json index.html epk/index.html
npx stylelint --config .stylelintrc.json --customSyntax postcss assets/style.css
npx --yes editorconfig-checker
```

## Architecture

- `index.html` — the entire site markup, plus the inline `@theme` block that Tailwind's browser build compiles in-page (that part can't move to a stylesheet).
- `epk/index.html` — the electronic press kit, served at `/epk/`. Deliberately unlisted: `noindex` robots meta, no canonical/OG/JSON-LD, not linked from the other pages, and kept out of `sitemap.xml` and `robots.txt` (a `Disallow` would advertise the URL and stop crawlers seeing the `noindex`). Reuses `assets/style.css` and `assets/script.js` via `../` paths, so it keeps the `#site-nav`/`#top`/`#copyright-year`/`#lightbox` ids that the script expects. Placeholders for assets not yet delivered are marked with `TODO` comments.
- `assets/style.css` — plain hand-authored CSS (font-face, body texture, `.reveal` scroll-reveal animation, gallery lightbox, reduced-motion overrides) that doesn't need Tailwind's JIT processing.
- `assets/script.js` — the page's scroll-behavior JS (nav fade-in, `.reveal` scroll-in animation via `IntersectionObserver`), loaded from `index.html` with a plain `<script src>`.
- `favicon.svg` — site favicon.
- `assets/images/` — the site's content images (background textures, hero poster frame, logo wordmark).
- `assets/fonts/` — the "Wild Honey" display font used for the logo wordmark.
- `assets/vendor/` — vendored third-party code (Tailwind CSS v4 browser build + its LICENSE), self-hosted instead of pulled from a CDN.
- `.htmlhintrc`, `.stylelintrc.json`, `.editorconfig` — lint/format config used by CI, not part of a build step. Formatting is intentionally lint-only (no Prettier): the file's dense, hand-authored style with long single-line Tailwind class lists is deliberate, and Prettier's default reformatting is a poor fit for it.

Deployment: pushes to `main` deploy automatically via `.github/workflows/deploy.yml`, which pushes the whole repo to the `gh-pages` branch (`peaceiris/actions-gh-pages`, `keep_files: true` so it doesn't clobber PR preview directories living alongside it). `.github/workflows/pr-preview.yml` (`rossjrw/pr-preview-action`) deploys/tears down a preview of each PR to `gh-pages` under `pr-preview/pr-<number>/`, linked from the PR itself.

Both workflows assume the repo's GitHub Pages source (Settings → Pages, or `GET /repos/Joe-Heffer/cinderlarks/pages`) is set to the `gh-pages` branch, not `main`. If it's ever pointed at `main` instead, the root site still happens to work (GitHub auto-builds `main` directly), but everything pushed to `gh-pages` — including every PR preview — is silently never served (see #77).
