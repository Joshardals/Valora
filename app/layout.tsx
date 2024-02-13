import type { Metadata } from "next";
import { kanit, nunito } from "./fonts";
import "animate.css";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
