/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#db6809',
        'primary-light': '#f8e7d7',
        secondary: '#815410',
        'secondary-light': '#8a7e6d',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        philosopher: ['Philosopher', 'sans-serif'],
      },
    },
  },
  plugins: [],
}