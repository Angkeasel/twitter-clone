/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js",],
  theme: {
    fontFamily: {
      sans: ['"Lora"', "sans-seref"]
    },
    extend: {
      width: {
        300: "300px",
        450: "450px",
        600: "600px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

