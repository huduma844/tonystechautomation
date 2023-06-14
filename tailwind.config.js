/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fatface: ['Abril Fatface', 'sans-serif'],
        arvo: ["Arvo", " Geometric slab-serif"],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
