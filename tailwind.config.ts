import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        custom: {
          // bg: "#041a18",
          primary: "rgba(30, 30, 31, 0.3)",
          secondary: "#EECC69",
          tertiary: "#D6D6D6",
          bg2: "rgba(38, 38, 38, 0.3)"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
