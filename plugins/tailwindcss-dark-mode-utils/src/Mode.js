// src/Mode.js

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".dark\\:bg-gray-800": {
      "background-color": theme("colors.gray.800"),
    },
    ".dark\\:text-white": {
      color: theme("colors.white"),
    },
    ".dark\\:border-gray-700": {
      "border-color": theme("colors.gray.700"),
    },
    ".dark\\:shadow-md": {
      "box-shadow": `0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)`,
    },
    ".dark\\:hover\\:bg-gray-700:hover": {
      "background-color": theme("colors.gray.700"),
    },
  };

  addUtilities(newUtilities, ["dark"]);
});
