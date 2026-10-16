# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Pablo Moreno's portfolio site (pablo.energy), hand-coded with plain HTML + JS + Tailwind CSS v4 and hosted on Netlify. There is no framework, bundler, test suite or linter.

## Scope: what is the live site

Only `index.html` plus `assets/` (and the `media/` files it references) make up the live site. Everything else at the root — `404.html`, `sites/` (dozens of old standalone mini-sites served as subpaths like `pablo.energy/thewebwewant`), `downloads/`, `todo.txt` — is not part of the main page. Keep edits and searches to `index.html` and `assets/` unless the user names another file.

## Commands

Rebuild the CSS after changing Tailwind classes in `index.html` or `assets/js/index.js`:

```sh
npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch
```

- `assets/css/output.css` is generated and committed. Never edit it by hand; rebuild it.
- Tailwind v4 is configured CSS-first in `assets/css/input.css` (`@theme` sets the custom tokens `shadow-big`, `text-grey`, `grad-black`). `tailwind.config.js` is a leftover v3 file that v4 ignores. v4 auto-detects class sources, so classes built as strings in `index.js` get picked up as long as they are written out in full.
- To preview, open `index.html` in a browser. Nothing needs to be built apart from the CSS.

## Architecture

- **index.html**: one long page made of numbered sections (`#pablo` intro, `#today`, `#work`, `#websites`, `#resume`, `#contact`, `#thanks`). Each section uses the same layout: a 6-column grid with a colored label pill (`col-span-2`, `data-section-label`) and content (`col-span-4`), `scroll-mt-3`, and `mb-[40vh]` between sections. New sections should copy that pattern.
- **CSS load order**: `output.css` (Tailwind), then `more.css` (hand-written: carousel and section-label styles), then `flickity.min.css`.
- **Work carousels**: Flickity, configured with the inline `data-flickity` JSON on each `.main-carousel`. `index.js` adds click-to-advance, so `flickity.pkgd.min.js` loads *after* `index.js` and that handler runs on `DOMContentLoaded`.
- **Websites list (`#projects-grid`) is data-driven**: `index.js` fetches a Google Sheet through `opensheet.elk.sh` (`ADDRESS` holds the sheet ID/tab). Columns: `Title`, `Description`, `Date`, `URL`, `Preview` (Google Drive share link, shown as a tiny thumbnail next to the title), `Nature`. Rows are grouped under one heading per `Nature` value listed in `CATEGORIES` in `index.js` (`for people` / `for friends` / `for me`); any other value, like `hidden`, never shows. To add or change a listed website, edit the sheet, not the HTML.
- **Section labels (desktop)**: the `[data-section-label]` pills are all fixed in a stack at the top left by `index.js`; the current section's pill keeps its color, the others get `.is-idle` (white, styled in `more.css`).
- **Resume**: two columns (Experience / Education); each row is a link to the agency or school page.
- **Small JS extras** in `index.js`: an animated SVG favicon (`#dynamic-favicon`), the Amsterdam clock, the visit timer and the intro fade-in.
- Images are served as `.webp` and videos as muted autoplay `.mp4` from `media/`.
- You don't need to take attention to commit or push to the branchs.
