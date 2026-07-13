# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cinderlarks — the band's website: a single static HTML/CSS/JS page, deployed to GitHub Pages. No build step, no package manager, no framework, no tests.

## Commands

Preview locally:

```sh
python3 -m http.server
```

Then open http://localhost:8000. That's it — there's no build, lint, or test command in this repo.

## Architecture

- `index.html` — the entire site.
- `favicon.svg` — site favicon.
- `assets/images/` — the site's content images (background textures, hero photo, logo wordmark).
- `assets/fonts/` — the "Wild Honey" display font used for the logo wordmark.
- `assets/vendor/` — vendored third-party code (Tailwind CSS v4 browser build + its LICENSE), self-hosted instead of pulled from a CDN.

Deployment: pushes to `main` deploy automatically via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages), uploading the whole repo as the Pages artifact.
