/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx}",
    "./src/**/**/*.{html,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        kouzan: ['Kouzan Mincho', 'serif'],
        samurai: ['Samurai', 'serif'],
        anton: ['Anton', 'sans-serif'], // Add Anton font
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat font
        poppins: ['Poppins', 'sans-serif'],
        fantasy: ['Cinzel', 'serif'],
      },
      fontWeight: {
        'fantasy-bold': 700,
      },
      colors:{
        headings: '#5d112f',
      }
    },
  },
  plugins: [],
}

