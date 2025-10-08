import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#001F3F",
          accent: "#0084C7",
          light: "#F5FAFF"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(0, 31, 63, 0.45)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(0,31,63,0.95) 0%, rgba(0,174,239,0.8) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
