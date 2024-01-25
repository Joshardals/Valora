import type { Metadata } from "next";
import "./globals.css";
import { open_sans, source_serif_bold, source_serif_italic } from "./fonts";

export const metadata: Metadata = {
  title: "Accentify",
  description:
    "Accentify, a personal e-commerce project focusing on clothing, accessories, and gadgets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${open_sans.variable} ${source_serif_italic.variable} ${source_serif_bold}`}
    >
      <body>{children}</body>
    </html>
  );
}
