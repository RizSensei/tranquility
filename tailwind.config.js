/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
    divideStyle: true,
  },
  theme: {
    extend: {
      colors: {
        "primary":"#305A30",
        "secondary":"#006460",
        "heading":"#121F38",
        "paragraph":"#616161",
        "light-blue":"#E6F0EA"
        }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
