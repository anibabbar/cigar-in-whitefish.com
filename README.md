# Single-Keyword SEO Microsite Starter Template

A high-performance, production-ready, reusable starter template for single-keyword SEO microsites built with **Astro v5**, **Tailwind CSS**, **TypeScript**, and **Pages CMS**.

## Features

- ⚡ **Astro v5 Content Layer**: Powered by `astro/loaders` (`glob()`) with strict Zod validation.
- 🎨 **Tailwind CSS & Typography**: Styled using `@tailwindcss/typography` with brand palette.
- 📝 **Pages CMS Integration (`.pages.yml`)**: Full CRUD collections for `blog`, `pages`, and `siteSettings` with image uploads and SEO components.
- 🔍 **Turnkey SEO & JSON-LD**: Automatic structured data (`WebSite`, `LocalBusiness`, `FAQPage`, `WebPage`, `BlogPosting`, `BreadcrumbList`), OpenGraph, Twitter Cards, Sitemap, and RSS.
- 🚀 **100/100 Lighthouse Performance**: Zero unnecessary client JavaScript for maximum PageSpeed scores.
- 📨 **Serverless Contact Form**: Web3Forms integration with anti-spam honeypot botcheck.

## Quick Start

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run TypeScript and Astro template check
npm run check

# Build static production site
npm run build
```

See [RUN_LOCALLY.md](file:///RUN_LOCALLY.md) for step-by-step local development commands, and [SETUP.md](file:///SETUP.md) for the complete guide on configuring `src/data/site.json`, deploying to Cloudflare Pages, and connecting Pages CMS.
