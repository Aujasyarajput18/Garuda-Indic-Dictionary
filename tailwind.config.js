/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bharat: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        parchment: {
          50: '#fdfbf7',
          100: '#fbf7ee',
          200: '#f6eedb',
          300: '#eee0bf',
          400: '#e1caa0',
          800: '#2d251e',
          900: '#1c1612',
        }
      },
      fontFamily: {
        devanagari: ['"Noto Serif Devanagari"', '"Rozha One"', 'serif'],
        sanskrit: ['"Yatra One"', '"Noto Serif Devanagari"', 'serif'],
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
