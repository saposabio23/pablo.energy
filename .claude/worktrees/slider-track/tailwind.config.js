/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./works.html", "./assets/js/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
