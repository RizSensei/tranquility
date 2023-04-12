/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        "footer-color": "#929fba",
        "svg-color": "#2252C5",
      },

      screens: {
        mde: "850px",
      },

      
    },
  },
  plugins: [],
};
