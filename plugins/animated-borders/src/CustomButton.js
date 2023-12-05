const plugin = require("tailwindcss/plugin");

const CustomButton = plugin(function ({ addUtilities }) {
  const utilities = {
    ".animated-border": {
      "@apply relative": {},
      "&:before, &:after": {
        "-webkit-mask":
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        "-webkit-mask-composite": "xor",
        "mask-composite": "exclude",
        "@apply content-[''] absolute inset-0 rounded-[10px] hover:border-[3.5px] hover:border-transparent filter contrast-[8] bg-current pointer-events-none transition-all duration-1000":
          {},
      },
      "&:after": {
        background:
          "linear-gradient(var(--angle, 225deg), var(--tw-gradient-stops)) border-box",
        "@apply animate-[rotate_4s_linear_infinite] opacity-0 hover:opacity-100":
          {},
      },
    },
  };
  addUtilities(utilities);
});

module.exports = CustomButton;
