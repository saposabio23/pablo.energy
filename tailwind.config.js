/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "special-white": "#fffafa",
        grey: "#E9E4E4",
      },
      boxShadow: {
        video: "0 0 30px hsla(0, 0%, 0%, 0.4)",
      },
    },
  },
  plugins: [],
};
