# Single-Keyword SEO Microsite Starter Template

A high-performance, production-ready, reusable starter template engineered for single-keyword affiliate, local business, and lead-generation microsites. Built with **Astro v5**, **Tailwind CSS**, **TypeScript**, and **Pages CMS**.

---

## ⚡ Key Highlights
- **100/100 Google Lighthouse Performance**: Zero unnecessary client-side JavaScript. Everything compiles to static HTML with utility CSS.
- **Git-Based Headless CMS Ready**: Pre-configured `.pages.yml` for [Pages CMS](https://pagescms.org) with full CRUD collections, media uploading, and custom SEO components.
- **Astro v5 Content Layer**: Powered by `astro/loaders` (`glob()`) with strict Zod validation and draft filtering in production.
- **Turnkey Schema & SEO**: Automatic JSON-LD injection (`WebSite`, `LocalBusiness`, `FAQPage`, `WebPage`, `BlogPosting`, `BreadcrumbList`), OpenGraph, Twitter Cards, dynamic XML Sitemap, RSS feed, and canonical URL handling.
- **Zero-Backend Forms**: Serverless contact forms powered by Web3Forms directly from `src/data/site.json`.

---

## 🚀 The 10-Minute "$200 Site" Deployment Blueprint

Follow this step-by-step checklist to launch a new high-ranking niche microsite in under 10 minutes:

### Step 1: Duplicate / Clone the Template
Clone this repository for your new client or keyword project:
```bash
git clone https://github.com/your-username/cigar-in-whitefish.com.git my-new-microsite
cd my-new-microsite
npm install
```

### Step 2: Configure `src/data/site.json`
Open `src/data/site.json` and replace the placeholder fields with your target keyword and business information:
```json
{
  "siteName": "555 Smoke Shop",
  "primaryKeyword": "Cigar in Whitefish",
  "defaultMetaDescription": "Discover Montana's premier selection of premium hand-rolled cigars, boutique walk-in humidor, and everyday classics at 555 Smoke Shop in Whitefish, MT.",
  "phone": "(406) 555-0199",
  "email": "concierge@whitefishcigars.com",
  "cityOrRegion": "Whitefish, Montana",
  "web3formsAccessKey": "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
  "defaultOgImage": "/images/uploads/default-og.jpg"
}
```

### Step 3: Set Your Production URL
1. In `astro.config.mjs`, update `site`:
   ```javascript
   site: 'https://cigar-in-whitefish.com',
   ```
2. In `public/robots.txt`, update the sitemap URL:
   ```txt
   User-agent: *
   Allow: /

   Sitemap: https://cigar-in-whitefish.com/sitemap-index.xml
   ```

### Step 4: Web3Forms Contact Key (Free)
1. Go to [https://web3forms.com](https://web3forms.com) and enter the client's email address to receive a free Access Key.
2. Paste the key into `src/data/site.json` under `web3formsAccessKey`.
3. Inquiries from `/contact` will now route directly to your inbox with anti-spam protection enabled.

---

## 🖥️ Pages CMS Integration (`app.pagescms.org`)

[Pages CMS](https://pagescms.org) is a free, open-source, Git-based CMS that allows non-technical content writers or clients to manage content without touching code or GitHub.

### How to Connect Pages CMS:
1. Push your repository to your GitHub account.
2. Visit **[app.pagescms.org](https://app.pagescms.org)** and log in with your GitHub account.
3. Grant access to your repository.
4. Pages CMS automatically detects the `.pages.yml` file in the root directory!

### What Clients Can Edit:
- **Site Settings (`siteSettings`)**: Instantly update phone numbers, business email, city/region, primary target keyword, and default meta description.
- **Custom Pages (`pages`)**: Add new landing pages (e.g. `/curbside-pickup`, `/pricing`). Set navigation visibility (`showInNav`), navigation order (`navOrder`), hero subtitle, and complete SEO overrides.
- **Blog Posts (`blog`)**: Write articles with rich text editing, upload images directly into `public/images/uploads`, set publication dates, drafts, and custom SEO metadata.

### Media Uploads
Images uploaded via Pages CMS are automatically saved to `public/images/uploads/` and referenced cleanly in frontmatter as `/images/uploads/your-image.jpg`.

---

## ☁️ Deploying to Cloudflare Pages (Free & Instant)

Cloudflare Pages provides global CDN edge delivery with zero maintenance, infinite scale, and free SSL.

1. Push your repository to GitHub.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com) and navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Set the build configuration:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. In **Environment variables**, set:
   - `NODE_VERSION`: `20` (or `22`)
6. Click **Save and Deploy**.
7. Connect your custom domain in the **Custom domains** tab. Cloudflare issues and manages your SSL certificates automatically.

---

## 🛠️ Local Development & Quality Commands

```bash
# Start local development server with hot reload
npm run dev

# Run strict TypeScript and Astro template type-checking
npm run check

# Compile production static build (output: dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Repository Structure

```text
├── .pages.yml              # Pages CMS configuration (collections, components, media)
├── astro.config.mjs        # Astro v5 config with static output, Tailwind, Sitemap
├── package.json            # Scripts and dependencies
├── tailwind.config.mjs     # Tailwind configuration with @tailwindcss/typography
├── tsconfig.json           # Strict TypeScript configuration
├── public/
│   ├── _redirects          # Cloudflare Pages / Netlify 301 redirects
│   ├── favicon.svg         # SVG favicon
│   ├── robots.txt          # Crawler instructions pointing to /sitemap-index.xml
│   └── images/
│       └── uploads/        # Upload destination for Pages CMS media
├── src/
│   ├── content.config.ts   # Astro v5 Content Layer (glob loader + Zod schemas)
│   ├── components/
│   │   ├── BlogCard.astro  # Reusable card for articles and guides
│   │   ├── Footer.astro    # Dynamic footer with NAP data and copyright
│   │   ├── Navbar.astro    # Responsive navbar with dynamic CMS page links
│   │   └── SEOHead.astro   # Complete SEO meta tags + JSON-LD injection
│   ├── content/
│   │   ├── blog/           # Markdown SEO blog posts
│   │   └── pages/          # Markdown CMS landing pages (e.g. about, services)
│   ├── data/
│   │   └── site.json       # Central site settings (keyword, brand, contact info)
│   ├── layouts/
│   │   └── BaseLayout.astro# Master layout shell
│   ├── pages/
│   │   ├── [slug].astro    # Dynamic CMS pages route
│   │   ├── contact.astro   # Web3Forms contact page
│   │   ├── index.astro     # High-converting primary keyword landing page
│   │   ├── privacy-policy.astro # Privacy policy & age verification terms
│   │   ├── rss.xml.ts      # Automated RSS feed endpoint
│   │   └── blog/
│   │       ├── index.astro # Blog directory & featured post
│   │       └── [slug].astro# Blog post template with reading time & related posts
│   └── utils/
│       ├── content.ts      # Content collection helpers & draft filter
│       └── readingTime.ts  # Reading time and word count calculations
└── SETUP.md                # This setup and deployment guide
```

---

## 📈 SEO & Performance Checklist

| Feature | Implementation | Verified |
| :--- | :--- | :---: |
| **Output Type** | `output: 'static'` (Zero runtime server cost) | ✅ |
| **Client JavaScript** | 0 KB unnecessary JS (Pure CSS interactive elements) | ✅ |
| **PageSpeed Score** | 99–100 Google Lighthouse ready | ✅ |
| **JSON-LD Schema** | `WebSite`, `LocalBusiness`, `FAQPage`, `WebPage`, `BlogPosting`, `BreadcrumbList` | ✅ |
| **Open Graph & Twitter** | Dynamic title, description, and fallback OG image | ✅ |
| **Dynamic Navigation** | Reads published pages with `showInNav: true` sorted by `navOrder` | ✅ |
| **Sitemap & RSS** | `@astrojs/sitemap` (`/sitemap-index.xml`) + `@astrojs/rss` (`/rss.xml`) | ✅ |
| **Form Processing** | Web3Forms (`https://api.web3forms.com/submit`) with honeypot protection | ✅ |
