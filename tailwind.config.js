/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: 'hsl(0, 0%, 20%)',
          2: 'hsl(0, 0%, 12%)',
          3: 'hsl(0, 0%, 8%)'
        },
        green: {
          1: 'hsl(75, 94%, 57%)'
        }
      }
    },
  },
  plugins: [],
}
