import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
  preset: "node-server",
  srcDir: "src",
  rootDir: ".",
  outDir: "dist",
  minify: false,
  middleware: [],
});
