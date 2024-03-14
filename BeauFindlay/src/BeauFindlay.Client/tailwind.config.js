/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {
      fontFamily: {
        cascadia: ["Cascadia Code", "mono-space"]
      }
    },
  },
  plugins: [],
}