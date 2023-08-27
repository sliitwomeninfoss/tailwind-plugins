const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  // const components = {
  //   ':root': {
  //     "@property --angle": {
  //       "syntax": '<angle>',
  //       "initial-value": "0deg",
  //       "inherits": "false"
  //     },
  //     "@keyframes rotate": {
  //       "to": {
  //         "--angle": "360deg"
  //       }
  //     },
  //   },
  // }
  const utilities = {
    ".animated-border": {
      "@apply relative": {},
      "&:before, &:after": {
        "-webkit-mask":
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        "-webkit-mask-composite": "xor",
        "mask-composite": "exclude",
        "@apply content-[''] absolute inset-0 rounded-[20px] border-[1.5px] border-transparent filter contrast-[6] bg-current pointer-events-none transition-all duration-1000":
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
  // addComponents(components);
  addUtilities(utilities);
});
