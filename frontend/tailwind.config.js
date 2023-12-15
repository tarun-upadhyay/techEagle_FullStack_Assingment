/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM-SANS", "sans-serif"],
      },
      colors: {
        dash: "#319795",
      },
    },
  },
  plugins: [],
};
