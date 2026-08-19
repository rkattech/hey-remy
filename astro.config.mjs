// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hey-remy.com',
  integrations: [sitemap({ customPages: ['https://www.hey-remy.com/'] })],
  markdown: { shikiConfig: { theme: 'github-light' } },
  vite: {
    plugins: [tailwindcss()]
  }
});
