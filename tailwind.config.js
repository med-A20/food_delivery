/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FD5D5D",
        // red: "#23FF54",
        black: "#2E2E2E",
        pink: "#FFF7BC",
        gray: "#828282",
        grayT: "#333",
        gray2: "#ffffff61",
        fr: "#ffebebd9",
        too: "#ffffff00",
      },
    },
  },
  plugins: [],
};
