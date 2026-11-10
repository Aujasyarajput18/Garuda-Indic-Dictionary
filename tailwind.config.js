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
        nalanda: {
          50: '#FAF6ED',   // Fresh bhojpatra parchment
          100: '#F4ECE0',  // Aged palm leaf
          200: '#EBDDC7',  // Vintage manuscript paper
          300: '#DFCFAF',  // Deep parchment tone
          400: '#CEBC95',  // Aged deckled edge
          700: '#524332',  // Sepia secondary ink
          800: '#342A1F',  // Antique manuscript ink
          900: '#221B13',  // Deep soot woodblock ink
          950: '#14100B',  // Deepest soot black
        },
        forest: {
          50: '#F1F7F2',
          100: '#E0EFE3',
          200: '#C2DFC7',
          300: '#99C7A2',
          600: '#296A42',
          700: '#1F5333',
          800: '#174228',
          900: '#10301D',
          950: '#0A2013',
        },
        kumkum: {
          50: '#FAF0ED',
          100: '#F5DDD5',
          200: '#EBBCAD',
          600: '#A34125',
          700: '#8B331B',
          800: '#722814',
          900: '#5A1E0D',
        },
        swarna: {
          100: '#FBF2DD',
          200: '#F6E3B3',
          600: '#B8860B',
          700: '#9A6E08',
          800: '#7B5606',
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
