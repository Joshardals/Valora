import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account - VALORA",
  description:
    "Manage your VALORA account effortlessly with our comprehensive account overview, featuring secure login, registration, and personalized user information.",
};

export default async function AccountLayout({
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
