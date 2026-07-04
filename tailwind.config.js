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
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        indigo: '#2A098C',
        magenta: '#C81D73',
        cyan: '#7FE4FF',
        deepcyan: '#1597B8',
        ink: '#2E2A40',
        offwhite: '#F5F3FB',
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
