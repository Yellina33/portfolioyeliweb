/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          start: '#9D10A4',
          end: '#D933E1',
        },
        secondary: '#FFC821',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9D10A4 0%, #D933E1 100%)',
      },
    },
  },
  plugins: [],
};