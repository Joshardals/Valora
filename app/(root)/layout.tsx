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
        <div className=" pt-28">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
