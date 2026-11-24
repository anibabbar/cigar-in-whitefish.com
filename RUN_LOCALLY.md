# Running the Project Locally

This guide walks you through setting up and running this Astro v5 microsite on your local development machine.

---

## 📋 Prerequisites

Before getting started, make sure you have the following installed:
- **Node.js**: `v18.20.0` or higher (Recommended: `v20.x` or `v22.x`). Check with:
  ```bash
  node -v
  ```
- **npm**: `v9.x` or higher. Check with:
  ```bash
  npm -v
  ```
- **Git**: Check with `git --version`.

---

## ⚡ Quick Start (Under 60 Seconds)

### 1. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```

### 3. Open in Browser
Once the server starts, open your browser and navigate to:
👉 **[http://localhost:4321](http://localhost:4321)**

You will see the primary keyword landing page with instant hot module reloading (HMR) enabled. Any changes you make to components or content will update in the browser immediately.

---

## 🛠️ Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server with hot module reloading at `http://localhost:4321`. |
| `npm run check` | Runs Astro and TypeScript diagnostics to catch syntax, schema, or type issues. |
| `npm run build` | Compiles the full static production build into the `dist/` folder. |
| `npm run preview` | Spins up a local web server to test the actual compiled static output from `dist/`. |

---

## 🧪 Testing Production Static Output Locally

To verify exactly how the site behaves in production (including draft filtering, static sitemaps, and minified assets):

```bash
# 1. Run the static production build
npm run build

# 2. Preview the built static files
npm run preview
```
Visit **[http://localhost:4321](http://localhost:4321)** to test the production build.

---

## 📝 Editing & Testing Content Locally

You can test content management directly on your filesystem before pushing to Git and Pages CMS:

1. **Site Settings & Branding**:
   - Edit [src/data/site.json](file:///src/data/site.json) to change phone numbers, email, site name, or target keywords.
2. **Blog Posts**:
   - Add or edit markdown files inside [src/content/blog/](file:///src/content/blog/).
   - Set `draft: true` to test draft behavior. Draft posts appear during `npm run dev`, but are automatically excluded during `npm run build`.
3. **Custom Pages**:
   - Add new `.md` files inside [src/content/pages/](file:///src/content/pages/).
   - Set `showInNav: true` and adjust `navOrder: 10` to test dynamic navigation ordering in the navbar.
4. **Media & Uploads**:
   - Place image files inside [public/images/uploads/](file:///public/images/uploads/) and reference them as `/images/uploads/your-image.jpg`.

---

## 🌐 Network Access (Testing on Mobile Phones)

To view the website on your mobile device connected to the same Wi-Fi network:
```bash
npm run dev -- --host
```
The terminal will display your network IP address (e.g., `http://192.168.1.50:4321`), which you can open on your mobile browser to test responsiveness.

---

## 🔍 Troubleshooting

- **Port `4321` Already in Use**:
  Astro will automatically try the next available port (e.g., `4322`). You can also specify a custom port:
  ```bash
  npm run dev -- --port 3000
  ```
- **Content Collection Schema Error**:
  Run `npm run check` to see the exact file and field name causing the schema mismatch.
- **Clear Cache**:
  If you ever need a clean state, delete the `.astro` cache folder and rebuild:
  ```bash
  # Windows PowerShell
  Remove-Item -Recurse -Force .astro, dist; npm run build
  ```
