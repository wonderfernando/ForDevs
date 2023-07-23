/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      'primary': '#D0BCFF',
      'onPrimary': '#381E72',
      'secondary': '#CCC2DC',
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

