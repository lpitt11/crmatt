import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090d",
        surface: "#0d1117",
        surface2: "#111720",
        border: "#1c2430",
        primary: "#3b82f6"
      }
    }
  },
  plugins: []
};

export default config;
