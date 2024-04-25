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

    ".btn-text": {
      "@apply font-semibold transition-all duration-200": {},
      background:
        "linear-gradient(45deg, var(--primary-dark), var(--primary-medium))",
      backgroundClip: "text",
      textFillColor: "transparent",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },

    ".animated-chevron": {
      ".arrow-container": {
        alignItems: "center",
        transition: "transform 300ms ease-in-out",
        ".btn-wrapper:hover &": {
          transform: "translateX(1rem)",
        },
        "& .btn-chevron-tail": {
          "@apply opacity-0 absolute": {},
          width: "15px",
          height: "3px",
          backgroundColor: theme("colors.primary.medium"),
          right: "100%",
          top: "9px",
          left: "calc(150% - 32px)",
          marginRight: "-11px",
          transition: "opacity 0.5s ease-in-out",
          ".btn-wrapper:hover &": {
            "@apply opacity-100": {},
          },
        },
      },
    },
  };

  addComponents(components);
});

module.exports = ButtonPlugin;
