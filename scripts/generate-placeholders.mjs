import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/uploads');
fs.mkdirSync(outputDir, { recursive: true });

const images = [
  {
    name: 'default-og.jpg',
    width: 1200,
    height: 630,
    title: '555 Smoke Shop & Humidor',
    subtitle: 'Premium Cigars and Humidor in Whitefish, Montana',
    bg1: '#3d251c',
    bg2: '#1a0e0a',
  },
  {
    name: 'shop-interior.jpg',
    width: 1200,
    height: 800,
    title: 'Downtown Whitefish Smoke Shop',
    subtitle: 'Montana premier cigar selection and walk-in humidor',
    bg1: '#523327',
    bg2: '#23140e',
  },
  {
    name: 'humidor-collection.jpg',
    width: 1200,
    height: 800,
    title: 'Walk-In Spanish Cedar Humidor',
    subtitle: 'Over 300 rare vitolas and boutique cigars aged to perfection',
    bg1: '#694132',
    bg2: '#1a0e0a',
  },
  {
    name: 'about-hero.jpg',
    width: 1200,
    height: 800,
    title: 'About Our Whitefish Sanctuary',
    subtitle: 'Craftsmanship, community, and curated tobaccos',
    bg1: '#4a2f23',
    bg2: '#1f120c',
  },
  {
    name: 'services-hero.jpg',
    width: 1200,
    height: 800,
    title: 'Smoke Shop Selections and Humidor Allocations',
    subtitle: 'Special box orders, wedding packages, and curbside pickup',
    bg1: '#5a382b',
    bg2: '#281710',
  },
];

for (const img of images) {
  const svg = `
    <svg width="${img.width}" height="${img.height}" viewBox="0 0 ${img.width} ${img.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${img.bg1}" />
          <stop offset="100%" stop-color="${img.bg2}" />
        </linearGradient>
        <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#d2bab0" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <rect width="100%" height="100%" fill="url(#pattern)" />
      <rect x="40" y="40" width="${img.width - 80}" height="${img.height - 80}" rx="16" fill="none" stroke="#d2bab0" stroke-opacity="0.25" stroke-width="2" />
      
      <!-- Tobacco Leaf / Crown decorative icon -->
      <g transform="translate(${img.width / 2 - 24}, ${img.height / 2 - 120})" fill="#d2bab0" opacity="0.75">
        <path d="M24 0 C15 12 10 24 10 36 C10 44 16 50 24 50 C32 50 38 44 38 36 C38 24 33 12 24 0 Z" />
        <path d="M24 10 L24 45 M20 20 L24 24 M28 26 L24 30 M18 32 L24 36" stroke="#1a0e0a" stroke-width="1.5" fill="none"/>
      </g>

      <text x="${img.width / 2}" y="${img.height / 2 - 20}" text-anchor="middle" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#fdf8f6" letter-spacing="1">
        ${img.title}
      </text>
      <text x="${img.width / 2}" y="${img.height / 2 + 40}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#d2bab0" letter-spacing="0.5">
        ${img.subtitle}
      </text>
      <text x="${img.width / 2}" y="${img.height - 80}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#f59e0b" letter-spacing="2">
        WHITEFISH, MONTANA • PREMIUM SMOKE SHOP AND HUMIDOR
      </text>
    </svg>
  `;

  const dest = path.join(outputDir, img.name);
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(dest);
  console.log(`Generated ${dest}`);
}
