module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    inset: {
      0: 0,
      10: '10px',
      25: '25px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
