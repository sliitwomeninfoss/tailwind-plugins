const esbuild = require("esbuild");

// Determine the environment mode
const isProduction = process.env.NODE_ENV === "production";

// Build for browser environments
esbuild
  .build({
    entryPoints: ["src/Button.js"], // The main entry point of your component
    bundle: true, // Bundle all dependencies into one file
    minify: isProduction, // Minify the output if in production mode
    sourcemap: !isProduction, // Include a source map if not in production
    platform: "browser", // Target platform is the browser
    target: ["es2018"], // Browser compatibility targets
    outfile: "dist/Button.js", // Output file path
    loader: { ".js": "jsx", ".jsx": "jsx" }, // Loader options for handling JSX
    jsxFactory: "React.createElement", // Specify the JSX factory function
    jsxFragment: "React.Fragment", // Specify the JSX fragment function
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`, // Define environment variables dynamically
    },
    external: ["react", "react-dom", "react-router-dom"], // Specify external packages that shouldn’t be bundled
  })
  .then(() => {
    console.log("Browser build completed successfully.");
  })
  .catch((error) => {
    console.error("Browser build failed:", error);
    if (isProduction) {
      process.exit(1); // Exit with a failure code in production only
    }
  });
