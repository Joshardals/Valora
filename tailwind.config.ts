import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-source-serif-bold)"],
        sans: ["var(--font-open_sans)"],
        logo: ["var(--font-source-italic)"],
      },
    },
  },
  plugins: [],
};
export default config;
