import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
