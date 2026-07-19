# IENN — Irish ESFRI Node Network

[![Deploy site to GitHub Pages](https://github.com/ELIXIR-IE/esfri-ireland/actions/workflows/deploy.yml/badge.svg)](https://github.com/ELIXIR-IE/esfri-ireland/actions/workflows/deploy.yml)

### 🌐 [ienn.ie](https://ienn.ie)

This repository hosts the website for the **Irish ESFRI Node Network (IENN)**.

The site is built with [Astro](https://astro.build) and deployed to GitHub
Pages at [ienn.ie](https://ienn.ie) via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Structure

- `Home`, `About`, `Mailing List`, `News & Events` — the four top-level
  pages, defined in `src/pages/`.
- `src/layouts/BaseLayout.astro` — shared header, navigation, and footer.
- `src/styles/tokens.css` — the site's design tokens (colour palette,
  typography, spacing) and shared utility classes.

Pages are currently placeholders — content is added incrementally.

## Local development

### Docker (preferred)

No local Node install required. From the repo root:

```bash
sudo docker compose up --build
```

Then open **http://localhost:4321/**. Hot reload is on — edits to files
under `src/` or `public/` are reflected live. `Ctrl+C` stops it.

If it's already running in the background and you just want to check on it:

```bash
sudo docker compose ps
sudo docker compose logs -f site
```

To stop and remove the container:

```bash
sudo docker compose down
```

`sudo` is required here because the local Docker install isn't in
passwordless/rootless mode — drop `sudo` if your Docker setup doesn't
need it.

### Node (alternative)

Requires Node.js >= 22.12.

```bash
npm install
npm run dev
```

This starts a local dev server at `http://localhost:4321/`.

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Automatic via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
on every push to `main`. GitHub Pages serves the built site at the custom
domain `ienn.ie` (see the `public/CNAME` file).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to suggest news, events, or
other content updates.

## License

Content in this repository is licensed under **CC BY 4.0** — see
[LICENSE.md](LICENSE.md).

## Contact

For questions or suggestions, please open an
[Issue](https://github.com/ELIXIR-IE/esfri-ireland/issues).
