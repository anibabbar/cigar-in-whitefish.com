import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm organic boutique palette inspired by Leaf & Cloud
        cream: {
          50: '#fdfbf9',
          100: '#f7f4ef',
          200: '#ede7df',
          300: '#ded4c7',
          400: '#c5b5a2',
        },
        tobacco: {
          50: '#faf7f5',
          100: '#f3ece7',
          200: '#e5d7cc',
          300: '#d0bba9',
          400: '#b89a81',
          500: '#9b765b',
          600: '#835f47',
          700: '#694a37',
          800: '#543b2d',
          900: '#3d2b21',
          950: '#231812',
        },
        charcoal: {
          800: '#262422',
          900: '#1c1a18',
          950: '#141211',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'Cambria', 'serif'],
        sans: ['Lato', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
