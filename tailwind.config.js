/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        "dark-puple" : "#081a51",
        "light-whit" : "rgba(255, 255, 255, 0.18)"
      }
    },
  },
  plugins: [],
}

