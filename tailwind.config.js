/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      }
    },
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    letterSpacing : {
      widest: '.3rem'
    }
  },
  plugins: [],
}
