// @ts-check
import { defineConfig } from 'astro/config';

// TEMPORARY: ienn.ie's domain registration hasn't resolved yet, so this is
// deployed as a plain GitHub Pages project site for now. Once DNS is ready,
// revert `site`/`base` here to 'https://ienn.ie' / '/', re-add public/CNAME
// containing `ienn.ie`, and set the custom domain again via
// `gh api -X PUT repos/ELIXIR-IE/esfri-ireland/pages -f cname=ienn.ie`.
export default defineConfig({
  site: 'https://elixir-ie.github.io',
  base: '/esfri-ireland/'
});
