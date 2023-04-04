/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'bg-color': '#11011e',
      },
      animation:{
        'spin-slow': 'spin 5s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'scroll': 'scrollCard 20s linear infinite',
      },
      keyframes:{
        scrollCard: {
          '0%':{transform: 'translateX(0)'},
          '100%': {transform:'translateX(calc(-250px *5))'}
        }
      }
    },
    fontFamily:{
      lato: ['Lato', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },

  },
  plugins: [],
}
