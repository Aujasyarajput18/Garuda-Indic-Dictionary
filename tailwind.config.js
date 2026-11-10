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
        forest: {
          50: '#f0f9f3',
          100: '#dcf0e3',
          200: '#bae2cb',
          300: '#8dccaa',
          400: '#5ab083',
          500: '#389463',
          600: '#27774d',
          700: '#1e5f3e',
          800: '#1a4c33',
          900: '#163f2b',
          950: '#0a2318',
        },
        sage: {
          50: '#f6f8f5',
          100: '#ebf0e9',
          200: '#d7e2d4',
          300: '#b8cbb4',
          400: '#95b090',
          500: '#769470',
          600: '#5c7657',
          700: '#4a5e46',
          800: '#3d4d3a',
          900: '#334031',
        },
        stonepaper: {
          50: '#ffffff',
          100: '#fafbf9',
          200: '#f3f5f1',
          300: '#e7ebe3',
          400: '#d4dbcd',
          800: '#212620',
          900: '#141813',
          950: '#0c0f0c',
        }
      },
      fontFamily: {
        devanagari: ['"Noto Serif Devanagari"', 'Georgia', 'serif'],
        sanskrit: ['"Yatra One"', '"Noto Serif Devanagari"', 'serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
