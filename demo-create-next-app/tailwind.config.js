/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },
      colors: {
        primary: {
          DEFAULT: '#F5EA47',
          light: '#F7E8AB',
          dark: '#FF6600',
        },
        secondary: '#79858B',
      },
      spacing: {
        0.4: '0.1rem',
        0.8: '0.2rem',
        1.6: '0.4rem',
        25: '6.25rem',
        '9/10': '90%',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
