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
      colors: {
        primary: '#1B73E8',
      },
    },
  },
  plugins: [],
};
