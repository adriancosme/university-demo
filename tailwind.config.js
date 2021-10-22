module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-background': '#23B8E3',
        'btn-login': '#FDCA3D'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
