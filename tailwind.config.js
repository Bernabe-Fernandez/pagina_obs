/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./indez.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        azulobs: {
          50: '#eef2fa',
          100: '#d6def0',
          200: '#adc0e4',
          300: '#84a2d7',
          400: '#5c85cb',
          500: '#2f55a1',
          600: '#284a8c',
          700: '#203d74',
          800: '#19315d',
          900: '#112445',
        },
      }
    },
  },
  plugins: [],
}

