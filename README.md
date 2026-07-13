# cinderlarks

The Cinderlarks' website — a plain static HTML/CSS/JS page, deployed to GitHub Pages.

## Structure

- `index.html` — the entire site.
- `favicon.svg` — site favicon.
- `assets/images/`, `assets/fonts/` — the site's own images and the "Wild Honey" logo font.
- `assets/vendor/` — vendored Tailwind CSS v4 browser build (`@tailwindcss/browser`, MIT license, see `assets/vendor/LICENSE`), self-hosted instead of pulled from `cdn.tailwindcss.com`.

## Previewing locally

No build step or install required:

```sh
python3 -m http.server
```

Then open http://localhost:8000 in a browser.

## Updating vendored Tailwind

```sh
npm pack @tailwindcss/browser@latest   # then copy dist/index.global.js over assets/vendor/tailwind.js
```

## Deployment

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

**One-time setup:** in the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
