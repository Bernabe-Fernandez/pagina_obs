/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./indez.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
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
          900: '#1C398E',

        },
      }
    },
  },
  plugins: [],
}

