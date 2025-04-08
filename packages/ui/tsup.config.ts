import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/*.tsx", "src/components/**/*.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
