# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cinderlarks — the band's website: a single static HTML/CSS/JS page, deployed to GitHub Pages. No build step, no package manager, no framework, no tests.

## Commands

Preview locally:

```sh
python3 -m http.server
```

Then open http://localhost:8000. There's no build or test command in this repo, but CI does lint `index.html` (see below) — no local install/build required for that either, `npx` pulls the tools on demand.

Lint locally (same checks CI runs in `.github/workflows/checks.yml`):

```sh
npx --yes htmlhint@1 --config .htmlhintrc index.html
npm install --no-save stylelint@17 stylelint-config-standard@40 postcss-html@1 && npx stylelint --config .stylelintrc.json index.html
npx --yes editorconfig-checker
```

## Architecture

- `index.html` — the entire site.
- `favicon.svg` — site favicon.
- `assets/images/` — the site's content images (background textures, hero photo, logo wordmark).
- `assets/fonts/` — the "Wild Honey" display font used for the logo wordmark.
- `assets/vendor/` — vendored third-party code (Tailwind CSS v4 browser build + its LICENSE), self-hosted instead of pulled from a CDN.
- `.htmlhintrc`, `.stylelintrc.json`, `.editorconfig` — lint/format config used by CI, not part of a build step. Formatting is intentionally lint-only (no Prettier): the file's dense, hand-authored style with long single-line Tailwind class lists is deliberate, and Prettier's default reformatting is a poor fit for it.

Deployment: pushes to `main` deploy automatically via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages), uploading the whole repo as the Pages artifact.
