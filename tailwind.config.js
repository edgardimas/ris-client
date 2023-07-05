/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'wheather-primary': '#00668A',
      'weather-seconry': '#004E71'
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
