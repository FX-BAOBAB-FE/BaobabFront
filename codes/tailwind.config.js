/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        scrollbarGutter: {
        stable: 'stable',
        'stable-always': 'stable both-edges',
    },},
  },
  plugins: [],
}

