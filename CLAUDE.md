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

- **index.html**: one long page made of numbered sections (`#pablo` intro, `#today`, `#work`, `#websites`, `#resume`, `#contact`, `#thanks`). Each section uses the same layout: a 6-column grid with a sticky colored label pill (`col-span-2`) and content (`col-span-4`), anchored with `scroll-mt-[calc(50vh-30px)]` on desktop. New sections should copy that pattern.
- **CSS load order**: `output.css` (Tailwind), then `more.css` (hand-written: slider and resume-popup styles), then `flickity.min.css`.
- **Work carousels**: Flickity, configured with the inline `data-flickity` JSON on each `.main-carousel`. `index.js` adds click-to-advance, so `flickity.pkgd.min.js` loads *after* `index.js` and that handler runs on `DOMContentLoaded`.
- **Websites list (`#projects-grid`) is data-driven**: `index.js` fetches a Google Sheet through `opensheet.elk.sh` (`ADDRESS` holds the sheet ID/tab). Columns: `Title`, `Description`, `Date`, `URL`, `Preview` (Google Drive share link, turned into a thumbnail URL), `Nature`. `Nature` drives the range slider filter (`for people` / `for friends` / `for me`, matching `CATEGORIES` in `index.js`), and `hidden` rows never show. To add or change a listed website, edit the sheet, not the HTML.
- **Resume popups**: each `.listStack` row has `data-popup-image="<file>"`, which loads from `media/resume/`.
- **Small JS extras** in `index.js`: an animated SVG favicon (`#dynamic-favicon`), the Amsterdam clock, the visit timer, the intro fade-in and the up/down arrow (`#fleche`).
- Images are served as `.webp` and videos as muted autoplay `.mp4` from `media/`.
