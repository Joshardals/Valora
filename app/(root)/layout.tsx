import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        <div>{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
