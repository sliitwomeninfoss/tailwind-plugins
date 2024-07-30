/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          800: "#2d3748",
          700: "#4a5568",
          600: "#718096",
        },
        white: "#ffffff",
        "primary-light": "#3490dc",
        "primary-dark": "#1d4ed8",
      },
      boxShadow: {
        "card-dark": "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        card: "0.5rem",
      },
      transitionProperty: {
        theme: "background-color, color, border-color, box-shadow",
      },
    },
  },
  darkMode: "class", // Enable dark mode with 'class'
  plugins: [
    require("./src/Mode.js"), // Ensure the path to your plugin is correct
  ],
};

module.exports = config;
