# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Marketing website for **AI Data Collect** — the flagship product of ZetaCore Dynamics. Served at `aidatacollect.com` via GitHub Pages (`CNAME` pins the apex domain). Repo: `github.com/bbradford1/aidatacollect.com`.

## Architecture

**Static site, no build step.** As of the 2026-05-10 refactor:

- `index.html` — single landing page
- `css/main.css` — all styles (reset, tokens, sections, tablet/mobile breakpoints, print)
- `js/main.js` — mobile hamburger nav, POC-form submit handler, nav scroll-shadow
- `img/`, `fonts/` — empty, ready when needed
- `CNAME`, `README.md`, `PLAN.md`

No build step, no test suite, no package manager. Pure static.

Responsive breakpoints: tablet ≤1024px, mobile ≤768px (hamburger nav kicks in here), small phone ≤480px. Fluid typography via `clamp()`. Cross-browser prefixes (`-webkit-backdrop-filter`, `-webkit-appearance`, `-webkit-text-size-adjust`), 16px form inputs (no iOS focus zoom), `100dvh` hero, `env(safe-area-inset-*)`, `prefers-reduced-motion`, print stylesheet.

## Deployment

GitHub Pages serves `main` directly — pushing to `origin/main` is the deploy. There is no CI, no preview environment, no staging.

**Deploy workflow the user expects:** after a batch of changes is approved, run `git add` + `git commit` + `git push` to publish live. Do not push after every small edit — wait for the user to signal a milestone is ready, then ship the batch in one logical commit.

## Local preview

```
python3 -m http.server 8000   # then visit http://localhost:8000
```

(If 8000 is in use, pick another port like 8765.) No install step required.

## Sister site

The sister site is **ZetaCore Dynamics** at `/home/bradford/websites/zetacoredynamics.com` (live: `zetacoredynamics.com`). Both repos got the same responsive + cross-browser pass on 2026-05-10 and share design tokens. If you change a token or a cross-cutting pattern here, consider whether the sister site needs the same change.

## Next-session entry point

Read **`PLAN.md`** at the repo root first — it has the full done/pending picture. Likely next items: form backend, self-hosted fonts, OG image, robots/sitemap, analytics.
