import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./app/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
});
