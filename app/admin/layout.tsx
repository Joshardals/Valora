import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - VALORA",
  description:
    "Admin dashboard for VALORA. Efficiently manage products, users, and orders with a streamlined interface designed for administrators.",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="bg-gray-950 min-h-[100svh]">{children}</main>
    </>
  );
}
