// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transitionDuration: {
          600: "600ms",
        },
        charcoal: "#222222",
        primary: {
          dark: "rgba(0, 41, 156, 1)",
          medium: "rgba(0, 115, 230, 1)",
          light: "rgba(17, 239, 227, 1)",
          "light-translucent": "rgba(17, 239, 227, 0.24)",
        },
        gray: {
          medium: "rgba(0, 0, 0, 0.4)",
          light: "rgba(0, 0, 0, 0.16)",
          "extra-light": "rgba(0, 0, 0, 0.1)",
          "extra-lighter": "rgba(0, 0, 0, 0.05)",
          borders: "rgba(0, 0, 0, 0.085)",
          "ultra-light": "rgba(0, 0, 0, 0.03)",
        },
      },
      fontFamily: {
        sf: ["San Francisco", "Arial", "sans-serif"], // Ensure 'San Francisco' is correctly defined
      },
    },
  },
  plugins: [
    require("./src/buttonStyles"), // Adjust the path accordingly
  ],
};
