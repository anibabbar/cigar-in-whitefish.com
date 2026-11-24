import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Dynamic base path for GitHub Actions vs Local Development
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubActions ? 'https://anibabbar.github.io' : 'https://cigar-in-whitefish.com',
  base: isGitHubActions ? '/cigar-in-whitefish.com' : '/',
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
