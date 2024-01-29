import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className=" bg-orange-950 pt-[4.7rem] px-5">
        {children}
        <SpeedInsights />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
