import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // REPLACE WITH YOUR PRODUCTION DOMAIN (e.g., https://cigar-in-whitefish.com)
  site: 'https://example.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      filter: (page) => !page.includes('/drafts/'),
    }),
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
