/** @type {import('tailwindcss').Config} */

module.exports = {
  // prefix: 'tw-',
  darkMode: 'class',
  // darkMode: ['class', '[class="dark"]'],
  // darkMode: 'media',
  // content: ['./src/**/*.{html,ts,tsx}'],
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  // Disabling Preflight
  // corePlugins: {
  //   preflight: false,
  // },
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
