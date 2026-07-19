# AGENTS.md

Guidance for AI coding agents (Claude Code, Copilot, Cursor, etc.) working in
this repository. Read this before making changes — the goal is to keep the
framework consistent and avoid re-breaking things that have already been
fixed once.

## What this is

The website for **IENN — the Irish ESFRI Node Network** (a grassroots,
cross-domain forum, not an official body), deployed to GitHub Pages. See
`src/pages/about.astro` for the full description of what IENN is.

- **Repo**: `ELIXIR-IE/esfri-ireland` on GitHub.
- **Domain**: `ienn.ie` (custom domain), currently **not attached** —
  registration hasn't resolved yet, so the site is temporarily deployed at
  the plain GitHub Pages project URL. See the note at the top of
  `astro.config.mjs` for exactly what to change (site/base, `public/CNAME`,
  and the `gh api ... pages` custom-domain call) once DNS is ready. Don't
  "fix" this back and forth without checking whether the domain has
  actually resolved yet.

## Stack

Plain **Astro** (static output, no React/Vue/etc. — nothing on this site
needs client-side framework interactivity; the mobile nav toggle and the
Members page filters are vanilla `<script>` blocks). Node >= 22.12. No test
suite exists.

- `src/layouts/BaseLayout.astro` — the single shared header/nav/footer
  shell every page wraps in. The nav tabs are defined in the `nav` array at
  the top of this file — keep it in sync if pages are added/removed/renamed.
- `src/styles/tokens.css` — the **only** stylesheet. CSS custom properties
  (Irish green + white palette, Inter font) plus shared utility classes
  (`.container`, `.section`, `.card`, `.grid`/`.grid-2/3/4`, `.btn`/
  `.btn-primary`/`.btn-outline`, `.eyebrow`, `.badge*`, `.divider`). Reuse
  these instead of inventing new one-off styles; page-specific CSS lives in
  a `<style>` block at the bottom of that page's `.astro` file.
- `src/data/esfris.yaml` — structured data behind the Members registry
  (`src/pages/members.astro`). One entry per ESFRI Research Infrastructure
  or EIRO. See the comment block at the top of that file for the field
  schema and the `tier` enum. **Never fabricate a `website`, `logo`, or
  `email` value** — leave it `null` if it hasn't been confidently verified
  (this project has a hard rule against guessed/hallucinated URLs). Logo
  files live in `public/img/logos/<id>.<ext>`.
- `public/` — static assets, copied as-is to the site root at build time.

## Deployment

`.github/workflows/deploy.yml` builds with `npm run build` and deploys via
the official GitHub Actions Pages flow (`actions/upload-pages-artifact` +
`actions/deploy-pages`) — not the legacy `gh-pages` branch approach.

**Known footgun**: don't read data files at build time with
`fs.readFileSync(new URL("../data/x.yaml", import.meta.url))`. It resolves
correctly in `astro dev` but breaks in production builds, because Astro
relocates compiled server chunks into `dist/.prerender/` and the relative
path no longer points at the real source file — this shipped once and
broke the GitHub Actions build silently (dev server showed nothing wrong).
Use Vite's `?raw` import instead (see `src/pages/members.astro`):
```js
import rawYaml from "../data/esfris.yaml?raw";
```
**Always verify with a real `npm run build`** before considering a change
to a data-loading page done — `astro dev` alone is not sufficient proof.

## Local dev

Docker is the **preferred** path (see README) — `sudo docker compose up
--build`, then `http://localhost:4321/`. `npm run dev` also works (Node
>= 22.12 required) but Docker is what's documented/expected.

If host-side commands (`npm run build`, etc.) start failing with `EACCES`
on `.astro/` or `dist/`, it's because the Docker container runs as root
and bind-mounts the same directory — its writes leave root-owned files
behind. Clean up with a throwaway root container rather than `sudo`:
```
docker run --rm -v "$(pwd):/app" -w /app node:22-slim rm -rf .astro dist
```

## Guardrails

- Don't remove or restructure existing pages/nav items without being
  asked — this is a small, deliberately-scoped site (Home, About, Members,
  Mailing List, News & Events).
- Don't wholesale-regenerate `src/data/esfris.yaml` — it holds
  hand-verified `website`/`logo`/`email` values gathered via real research;
  edit specific entries, don't overwrite the file from scratch.
- Don't drop the Docker setup or revert instructions to npm-first — this
  was an explicit preference, not a default.
- Keep governance minimal (README + LICENSE + CONTRIBUTING + one issue
  template) — this isn't a community-contribution registry like the
  BioComputingUP `nto-registry` project this site's framework was
  originally modeled on; don't reintroduce CODE_OF_CONDUCT/CITATION.cff/
  AGENTS-for-Claude-skills-style tooling from that project by analogy.
- No orange. Ever. Irish green + white, clean/modern, Inter typeface.

## Contact

Repo/site maintained under the ELIXIR-IE GitHub org. Support contact:
`gavin.farrell@ul.ie`.
