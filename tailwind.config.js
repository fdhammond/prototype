/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', "sans-serif"],
    },
    extend: {},
    colors: {
      primary: "#FAEB0C",
      secondary: "black",
      white: "#ffffff",
    },
  },
  plugins: [],
};
