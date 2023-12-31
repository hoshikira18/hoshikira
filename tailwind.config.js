/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2b81f7',
        'secondary': ''
      }
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    }
  },
  plugins: [],
}