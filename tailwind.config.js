module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#49726F',
        'theme-secondary': '#436664',
        'theme-light': '#7EB7AF',
        'theme-background': '#424242',
        'table-head': '#1A7070',
        'table-body': '#C7CACA'
      }
    },
    fontFamily: {
      Lora: ['Lora, sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px'
    }
  },
  plugins: []
}
