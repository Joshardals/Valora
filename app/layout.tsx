import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { kanit, nunito } from "./fonts";

export const metadata: Metadata = {
  title: "VALORA | Official Store - Shop Online Now",
  description:
    "Valora, a personal e-commerce project focusing on clothing, accessories, and gadgets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} ${nunito.variable}`}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
