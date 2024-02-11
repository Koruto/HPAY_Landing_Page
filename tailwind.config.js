/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      background: '#001312',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
