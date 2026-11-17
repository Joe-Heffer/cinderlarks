# Releasing

There's no versioning or release process — the site deploys continuously. Merging to `main` is the release.

## How a push to `main` reaches production

1. `.github/workflows/checks.yml` runs on every push and PR: link check (lychee), spell check (codespell), HTML lint (htmlhint), CSS lint (stylelint), `.editorconfig` formatting, and an unused-assets check.
2. `.github/workflows/deploy.yml` runs on every push to `main` (and can be triggered manually via `workflow_dispatch`). It pushes the entire repo to the `gh-pages` branch using `peaceiris/actions-gh-pages`, with `keep_files: true` so it doesn't delete anything else living on that branch (see PR previews, below).
3. GitHub Pages serves the live site (`https://thecinderlarks.co.uk/`) from the `gh-pages` branch.

## PR previews

`.github/workflows/pr-preview.yml` (`rossjrw/pr-preview-action`) deploys a preview of each open PR to `gh-pages` under `pr-preview/pr-<number>/`, and posts/updates a comment on the PR linking to it (`https://thecinderlarks.co.uk/pr-preview/pr-<number>/`). It's torn down automatically when the PR closes.

## The one-time setting this all depends on

**Settings → Pages → Source must be set to the `gh-pages` branch**, not `main` and not "GitHub Actions" (build type). If it's ever pointed elsewhere:

- The root site can keep working anyway, because GitHub also auto-builds pushes to whatever branch *is* configured — so a misconfiguration here is easy to miss.
- Everything pushed to `gh-pages`, including every PR preview, silently stops being served. This is what broke in [#77](https://github.com/Joe-Heffer/cinderlarks/issues/77): Pages was pointed at `main`, so `gh-pages` (and all preview links) went dark while the main site kept working.

Check the current setting without opening the UI:

```sh
gh api repos/Joe-Heffer/cinderlarks/pages
```

`source.branch` should read `gh-pages`.

## Custom domain

The domain (`thecinderlarks.co.uk`) is set via the `CNAME` file at the repo root, which `deploy.yml` carries over to `gh-pages` on every deploy. `pr-preview-action` also copies it into each `pr-preview/pr-<number>/` directory so previews resolve under the same custom domain rather than `*.github.io`.

## Rolling back

There's no separate release artifact to roll back to. To undo a bad deploy, revert the offending commit(s) on `main` and push — `deploy.yml` will redeploy `gh-pages` from the reverted `main`. To redeploy the current `main` without a new commit, run `deploy.yml` manually (Actions tab → Deploy to GitHub Pages → Run workflow).
