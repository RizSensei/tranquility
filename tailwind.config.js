/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "primary":"#305A30",
        "secondary":"#006460",
        "heading":"#121F38",
        "paragraph":"#616161"
        }
    },
  },
  plugins: [
  ],
};
