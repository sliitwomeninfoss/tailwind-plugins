const esbuild = require("esbuild");

try {
  esbuild
    .build({
      entryPoints: ["src/index.js"],
      bundle: true,
      minify: true,
      platform: "node",
      target: "node14",
      outfile: "dist/index.js",
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
