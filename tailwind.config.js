/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './property/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

