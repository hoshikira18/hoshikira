/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c4fe00',
        'secondary': ''
      }
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    }
  },
  plugins: [],
}