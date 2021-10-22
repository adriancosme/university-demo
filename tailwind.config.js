module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-background': '#23B8E3',
        'btn-login': '#FDCA3D',
        'primary': '#263238'
      },
      fontFamily: {
        body: ['Montserrat'],
      },
      textColor: {
        primary: '#23B8E3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
