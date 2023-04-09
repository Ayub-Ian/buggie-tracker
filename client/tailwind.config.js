/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height:{
        '778': '778px',
        
      },
      width: {
        '456': '456px'
      },
      colors: {
        'accent-gray': "#9b9b9b",
        'accent-smoke': '#F4F6F7',
        'accent-primary': '#E5EDEA',
        'accent-green': '#1ABC9C',
        'accent-orange': '#FF7A50'
      }
    },
  },
  plugins: [],
}