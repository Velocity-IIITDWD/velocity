/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./dist/*.{html,js}'],
  purge: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#11011e',
        purplergba: '#38215F',
        primary: '#3F51B5',
        'dark-primary': '#303F9F',
        'light-primary': '#C5CAE9',
        text: '#FFFFFF',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        scroll: 'scrollCard 25s linear infinite',
        scrollOpposite: 'scrollCardOp 25s linear infinite',
      },
      keyframes: {
        scrollCard: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-314px*4))' },
        },
        scrollCardOp: {
          '0%': { transform: 'translateX(calc(-314px*4))' },
          '100%': { transform: 'translateX(calc(0))' },
        },
      },
      gridTemplateColumns: {
        xlcolminmax: 'repeat(3, minmax(200px, 1fr))',
        colminmax: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        xlrowminmax: 'repeat(auto, minmax(150px, 200px))',
        mdrowminmax: 'repeat(4, minmax(85px, 140px))',
        rowminmax: 'repeat(3, minmax(85px, 200px))',
      },
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
