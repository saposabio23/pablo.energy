/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "special-white": "#fffafa",
      },
    },
  },
  plugins: [],
};
