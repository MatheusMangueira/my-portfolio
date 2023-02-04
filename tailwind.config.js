/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {

        'primary': '#1C1C1C',
        'secondary': '#565656',
        'accent': '#FFC700',
        'page-2': '#D8D8D8',
        'page-3': '#e9e6e6',
        'gray-2': '#D9D9D9',
      }

    },
    fontFamily: {
      arial: ["Arial"],
    }
  },
  plugins: [],
}
