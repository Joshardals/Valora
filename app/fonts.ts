// app/fonts.ts
import { Open_Sans, Source_Serif_4 } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open_sans",
});

export const source_serif_italic = Source_Serif_4({
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-italic",
});

export const source_serif_bold = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-source-serif-bold",
});
