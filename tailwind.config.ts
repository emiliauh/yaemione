import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d7efff",
          200: "#b3e2ff",
          300: "#7fd0ff",
          400: "#49b8ff",
          500: "#189bff",
          600: "#0b79db",
          700: "#0a5faf",
          800: "#0b4d8d",
          900: "#0d3f73",
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [],
};

export default config;
