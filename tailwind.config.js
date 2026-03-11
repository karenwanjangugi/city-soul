/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  safelist: [
    'md:grid-cols-2',
    'lg:grid-cols-3',
    'lg:flex-row',
    'md:flex-row',
    'md:text-6xl',
    'lg:text-8xl',
    'xl:text-7xl',
  ],
  plugins: [],
}
