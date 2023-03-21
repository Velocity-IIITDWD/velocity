/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'bg-color': '#11011e',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
    fontFamily:{
      lato: ['Lato', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },

  },
  plugins: [],
}
