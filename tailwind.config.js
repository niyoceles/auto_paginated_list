/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(113, 113, 113)",
        secondary: "rgb(34, 34, 34)",
      },
    },
  },
  plugins: [],
};
