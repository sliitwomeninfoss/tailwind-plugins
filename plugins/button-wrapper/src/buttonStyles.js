// tailwind-plugin.js
const plugin = require("tailwindcss/plugin");

const ButtonPlugin = plugin(function ({ addComponents, theme }) {
  const components = {
    ".btn-wrapper": {
      "@apply relative flex items-center justify-center rounded-full cursor-pointer overflow-hidden":
        {},
      padding: `${theme("spacing.4")}`,
      backgroundColor: theme("colors.primary.light-translucent"),
      color: theme("colors.charcoal"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.base"),
      "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        backgroundColor: theme("colors.primary.light-translucent"),
        transform: "scale(0)",
        transition: "transform 0.5s ease-in-out",
        zIndex: "-1",
      },
      "&:hover:before": {
        transform: "scale(1.1)",
      },
    },
    ".btn-arrow": {
      paddingRight: theme("spacing.8"),
    },
    ".btn-text": {
      "@apply font-semibold transition-all duration-200": {},
      background:
        "linear-gradient(45deg, var(--primary-dark), var(--primary-medium))",
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
          display: "block",
        },
      },
      ".btn-chevron-tail": {
        "@apply absolute transition-opacity opacity-0": {},
        width: "1rem",
        height: "3px",
        backgroundColor: "currentColor",
        right: "100%",
        top: "8px",
        marginRight: "-18px",
        transitionDuration: theme("transitionDuration.300"),
        ".btn-wrapper:hover &": {
          "@apply opacity-100": {},
        },
      },
    },
  };

  addComponents(components);
});

module.exports = ButtonPlugin;
