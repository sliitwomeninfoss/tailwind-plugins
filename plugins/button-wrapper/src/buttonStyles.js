// tailwind-plugin.js
const plugin = require("tailwindcss/plugin");

const ButtonPlugin = plugin(function ({ addComponents, theme }) {
  const components = {
    ".btn-wrapper": {
      "@apply flex items-center justify-center rounded-full cursor-pointer transition-all duration-300":
        {},
      padding: `${theme("spacing.4")} ${theme("spacing.4")}`,
      backgroundColor: theme("colors.primary.light-translucent"),
      color: theme("colors.charcoal"),
      fontSize: theme("fontSize.base"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme("borderRadius.lg"),
      fontWeight: theme("fontWeight.bold"),
      cursor: "pointer",
      transitionProperty:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      transitionDuration: "150ms",
      outline: "2px solid transparent",
      "&:hover": {
        backgroundColor: theme("colors.blue.700"),
        outline: `2px solid ${theme("colors.gray.300")}`,
      },
    },
    ".btn-arrow": {
      paddingRight: theme("spacing.8"),
    },
    ".btn-text": {
      "@apply font-semibold transition-all duration-200": {},
      background:
        "linear-gradient(45deg, var(--primary-dark), var(--primary-light))",
      backgroundClip: "text",
      textFillColor: "transparent",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    ".btn-arrow-icon": {
      marginLeft: theme("spacing.2"),
      transition: "transform 250ms ease-in-out",
      "&:hover": {
        transform: "translateX(1rem)",
      },
    },
    ".animated-chevron": {
      transition: "transform 0.6s ease-in-out",
      "&:hover": {
        transform: "translateX(10px)",
      },
      ".btn-chevron": {
        "@apply transition-transform duration-300 ease-in-out": {},
        transform: "translateX(0)",
        "&::before": {
          content: '""',
          width: "1rem",
          height: "1px",
          backgroundColor: "currentColor",
          display: "none",
          marginRight: "0.25rem",
        },
      },
      ".group:hover .btn-chevron": {
        transform: "translateX(0.5rem)",
        "&::before": {
          "@apply block transition-all duration-300 ease-in-out": {},
          display: "block", // This ensures the tail appears with a transition.
        },
      },
    },
  };

  addComponents(components);
});

module.exports = ButtonPlugin;
