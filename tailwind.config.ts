import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C231D",
        secondary: "#F7F1EC",
      },
      fontFamily: {
        kanit: ["var(--font-kanit)"],
        nunito: ["var(--font-nunito)"],
      },
      screens: {
        xs: "321px",
      },
    },
  },
  plugins: [],
};
export default config;
