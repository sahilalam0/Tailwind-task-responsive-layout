/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "container-1/2": "calc(50% - 0.5rem)",
        "container-1/3": "calc(33.333333% - 0.6666666667rem)",
      },
    },
  },
  plugins: [],
};
