/** @type {import('tailwindcss').Config} */
const config = {
  // Your Tailwind CSS configuration goes here

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@sliit-wif/button-wrapper/src/buttonStyles")],
};

export default config;
