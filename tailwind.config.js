/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        green: "#00A74F",
        yellow: "#109100",
        greenShade: "rgba(20, 153, 48, 0.7)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}