export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main className="bg-gray-950 min-h-[100svh]">{children}</main>
    </div>
  );
}
