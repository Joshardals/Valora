// Fonts for the site.

import {
  Open_Sans,
  Source_Serif_4,
  Kanit,
  Nunito_Sans,
} from "next/font/google";

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-kanit",
});

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
  variable: "--font-nunito",
});
