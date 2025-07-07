/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-rouge': '#A0522D', // Sienna like
        'parisian-gray': '#696969', // DimGray
        'royal-velvet': '#4B0082', // Indigo
        'cobblestone-beige': '#F5F5DC', // Beige
        'marble-white': '#FFFFFF',
        'twilight-black': '#1C1C1C',
        'plum-passion': '#DDA0DD', // Plum
        'gilded-gold': '#FFD700', // Gold
        'lavender-mist': '#E6E6FA', // Lavender
        'garden-green': '#228B22', // ForestGreen
        'light-sky-blue': '#87CEFA',
        'light-sky-blue-hover': '#B0E0E6', // PowderBlue
        'purple-gemini': '#7E57C2', // Deep Purple 300
        'purple-gemini-hover': '#673AB7', // Deep Purple 500
        'disabled-gray': '#BDBDBD', // Gray 400
      }
    }
  },
  plugins: [],
}
