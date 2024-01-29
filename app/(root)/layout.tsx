import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        <div className=" px-5 text-wrap">
          {children}
          <SpeedInsights />
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
