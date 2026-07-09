# cinderlarks

Website concept sketches — plain static HTML/CSS/JS prototypes, deployed to GitHub Pages.

## Structure

- `index.html` — landing page linking to every sketch.
- `sketches/` — one folder per concept sketch. Each is a self-contained static site.
- `sketches/template/` — starting point to copy for a new sketch, not a real design.

## Adding a new sketch

```sh
cp -r sketches/template sketches/my-idea
```

Then edit `sketches/my-idea/`, and add a link to it from the root `index.html`.

## Previewing locally

No build step or install required:

```sh
python3 -m http.server
```

Then open http://localhost:8000 in a browser.

## Deployment

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`.

**One-time setup:** in the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
