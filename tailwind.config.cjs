/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        duck: '#b8d6ca',
        rubberDuck: '#fce4a1'
      },
    },
  },
  plugins: [],
}
