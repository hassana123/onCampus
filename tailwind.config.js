/** @type {import('tailwindcss').Config} */
//import bg from "./src/assets/section.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
        custom1: ["Salsa", "cursive"],
        custom2: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": 'url("./src/assets/section.png")',
      },
      colors: {
        gray: {
          light: "#EFEFEF",
        },
        purple: "#342199",
        dark: "#0C0435",
      },
    },
  },
  plugins: [],
};
