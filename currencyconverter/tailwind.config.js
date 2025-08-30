/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
          inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },

  plugins: [],
}
