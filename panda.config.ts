import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./app/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  globalCss: {
    "html, body": {
      bg: "background.page",
      color: "text.primary",
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          audit: {
            navy: {
              value: "#0B192F",
              description: "Deep navy used for primary text, outlines, and icons.",
            },
            blue: {
              value: "#0A60FB",
              description: "Bright blue used for active accents and focus treatment.",
            },
            green: {
              value: "#10C777",
              description: "Green accent used for success, checkmarks, and accessibility cues.",
            },
            grayBlue: {
              value: "#AFBCCE",
              description: "Cool light gray-blue used for lighter UI lines.",
            },
            softGrayBlue: {
              value: "#B5C4D0",
              description: "Soft gray-blue used for subtle supporting lines.",
            },
            slate: {
              value: "#57606F",
              description: "Muted slate used for secondary text and supporting details.",
            },
            offWhite: {
              value: "#FEFDFE",
              description: "Off-white used for the page background.",
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          background: {
            page: { value: "{colors.audit.offWhite}" },
          },
          text: {
            primary: { value: "{colors.audit.navy}" },
            secondary: { value: "{colors.audit.slate}" },
          },
          border: {
            default: { value: "{colors.audit.grayBlue}" },
            subtle: { value: "{colors.audit.softGrayBlue}" },
          },
          accent: {
            blue: { value: "{colors.audit.blue}" },
            green: { value: "{colors.audit.green}" },
          },
        },
      },
    },
  },
  outdir: "styled-system",
});
