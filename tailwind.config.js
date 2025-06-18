/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#faf7ff',
          100: '#f3ecff',
          200: '#e9dcff',
          300: '#d7c0ff',
          400: '#c198ff',
          500: '#a770ff',
          600: '#9147ff',
          700: '#7c2ae8',
          800: '#6923c4',
          900: '#571ea2',
          950: '#37106e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a1aea1',
          400: '#7a8a7a',
          500: '#5f705f',
          600: '#4a5a4a',
          700: '#3d4a3d',
          800: '#333e33',
          900: '#2b342b',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 