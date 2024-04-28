const esbuild = require("esbuild");

try {
  esbuild
    .build({
      entryPoints: ["src/Button.js"],
      bundle: true,
      minify: true,
      platform: "browser",
      target: "es2020",
      outfile: "dist/Button.js",
      loader: { ".js": "jsx" },
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
    })
    .then(() => {
      console.log("Build completed successfully.");
    })
    .catch((error) => {
      console.error("Error during build:", error);
      process.exit(1);
    });
} catch (error) {
  console.error("Unhandled error:", error);
}
