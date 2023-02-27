/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '5': '5rem',
        '6': '6rem',
        '10': '10rem',
        '12': '12rem',
        '14': '14rem',
        '16': '16rem',
        '20': '20rem',
        '24': '24rem',
        '26': '26rem',
        '30': '30rem',
        '60': '60rem',
      },
      minHeight: {
        '1/3': '33%',
        '2/3': '67%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      }
    },
  },
  plugins: [],
}
