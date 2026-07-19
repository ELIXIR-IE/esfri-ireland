// @ts-check
import { defineConfig } from 'astro/config';

// Served at the custom domain ienn.ie via GitHub Pages, so base is the
// site root rather than a `/repo-name/` project-page path.
export default defineConfig({
  site: 'https://ienn.ie',
  base: '/'
});
