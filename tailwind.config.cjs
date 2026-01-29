/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        "kofi-wiggle": "kofi-wiggle 3s infinite",
      },
      colors: {
        "pwhl-purple": {
          50: "#33058d",
        },
        "pwhl-light-purple": {
          50: "#845bd4",
        },
        blue: {
          1000: "#5963b3",
        },
        red: {
          750: "#AF1E2D",
        },
      },
      dropShadow: {
        "lg-dark": "0 10px 18px rgba(255, 255, 255, 0.1)",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(320px, 1fr))",
      },
      keyframes: {
        "kofi-wiggle": {
          "0%": { transform: "rotate(0) scale(1)" },
          "60%": { transform: "rotate(0) scale(1)" },
          "75%": { transform: "rotate(0) scale(1.12)" },
          "80%": { transform: "rotate(0) scale(1.1)" },
          "84%": { transform: "rotate(-10deg) scale(1.1)" },
          "88%": { transform: "rotate(10deg) scale(1.1)" },
          "92%": { transform: "rotate(-10deg) scale(1.1)" },
          "100%": { transform: "rotate(0) scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
