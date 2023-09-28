/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
      neonBlue: "#2272FF",
      black: "#1D1D1",
      }
    },
  },
  plugins: [],
}

