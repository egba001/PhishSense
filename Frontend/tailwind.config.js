/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#04A6BC",
        "dark": "#0F0F0F"
      }
    },
  },
  plugins: [],
}

