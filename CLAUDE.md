# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cinderlarks — plain static HTML/CSS/JS website concept sketches, deployed to GitHub Pages. No build step, no package manager, no framework, no tests.

## Commands

Preview locally:

```sh
python3 -m http.server
```

Then open http://localhost:8000. That's it — there's no build, lint, or test command in this repo.

## Architecture

- `index.html` — landing page linking to every sketch.
- `sketches/` — one folder per concept sketch, each a self-contained static site (its own HTML pages + `style.css`). Sketches do not share code or styles with each other.
- `sketches/template/` — starting point to copy for a new sketch; not a real design.

To add a new sketch: `cp -r sketches/template sketches/my-idea`, then edit it and add a link from the root `index.html`.

Deployment: pushes to `main` deploy automatically via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages), uploading the whole repo as the Pages artifact.
