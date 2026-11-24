/**
 * Path helper to ensure asset paths and internal links work seamlessly across:
 * 1. Root domains (e.g. https://cigar-in-whitefish.com/ or localhost)
 * 2. GitHub Pages subpaths (e.g. https://anibabbar.github.io/cigar-in-whitefish.com/)
 */
export function path(p: string = ''): string {
  if (!p) return import.meta.env.BASE_URL;
  if (
    p.startsWith('http://') ||
    p.startsWith('https://') ||
    p.startsWith('tel:') ||
    p.startsWith('mailto:') ||
    p.startsWith('#')
  ) {
    return p;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const cleanPath = p.startsWith('/') ? p.slice(1) : p;
  return `${base}${cleanPath}`;
}

export default path;
