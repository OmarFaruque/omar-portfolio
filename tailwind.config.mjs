/** @type {import('tailwindcss').Config} */
const config = {
  // Use system preference for dark mode (prefers-color-scheme)
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        'gray-light': 'var(--color-gray-light)',
        'gray-dark': 'var(--color-gray-dark)',
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: '#9333EA', // This one wasn't in the root, can be added if needed
      },
    },
  },
  // Safelist common utilities to avoid accidental purging during production builds
  safelist: [
    'px-8', 'px-6', 'py-3', 'py-12', 'pt-20', 'rounded-full', 'rounded-2xl', 'min-w-[140px]',
    'container', 'px-4', 'px-6', 'px-8', 'bg-primary', 'bg-primary-dark', 'text-primary-dark',
    /* ensure common text color utilities are emitted during build */
    'text-white', 'text-gray-500'
  ],
  plugins: [],
};

export default config;
