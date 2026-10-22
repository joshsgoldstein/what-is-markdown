import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joshsgoldstein.github.io',
  base: '/what-is-markdown',
  output: 'static',
  integrations: [sitemap({ filter: (url) => !url.includes('/concepts/') })],
});
