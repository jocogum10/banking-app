/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        '12': 'repeat(12, 1fr)'
      },
      gridTemplateRows: {
        '12': 'repeat(12, 1fr)'
      },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      }
    },
  },
  plugins: [],
}
