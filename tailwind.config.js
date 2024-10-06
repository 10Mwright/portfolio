/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'gr-start': '#1d546d',
        'gr-end': '#6adcdb',
        'near-black': '#454845'
      },
      fontSize: {
        'title': '2rem',
        'main': '1.5rem'
      },
      backgroundImage: {
        'main-background': "url('/resources/images/background-1920.png')"
      }
    },
  },
  plugins: [],
}

