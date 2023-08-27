/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "750",
      md: "1060px",
      lg: "1390",
      xl: "1700",
    },
  },
  plugins: [],
};
