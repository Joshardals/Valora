import type { Metadata } from "next";
import { kanit, playfair, nunito } from "./fonts";
import "animate.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "VALORA | Official Store - Shop Online Now",
  description:
    "Valora, a personal e-commerce project focusing on clothing, accessories, and gadgets.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${playfair.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
