import esbuild from "esbuild";

(async () => {
await esbuild.build({
    entryPoints: [
    "src/index.ts"
    ],
    bundle: true,
    minify: false,
    format: "iife",
    sourcemap: false,
    logLevel: "info",
    target: ["es6"],
    watch: false,
    outfile: "dist/test.min.js",
});
})();
