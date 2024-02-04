/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#536DFE",
      },
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
