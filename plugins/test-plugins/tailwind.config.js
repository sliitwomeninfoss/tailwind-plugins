/** @type {import('tailwindcss').Config} */
const config = {
  // Your Tailwind CSS configuration goes here

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@sliit-wif/animated-borders/src/customButtonPlugin.js")],
};

export default config;
