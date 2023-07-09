/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#00668A', // buat background
        'weather-secondary': '#004E71' //buat gak tau
      }
    }
  },
  fontFamily: {
    Roboto: ['Roboto, sans-serif']
  },
  container: {
    padding: '2rem',
    center: true
  },
  screens: {
    sm: '640px',
    md: '768px'
  },
  plugins: []
}
