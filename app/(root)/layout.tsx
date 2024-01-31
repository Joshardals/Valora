import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <UserActionsSideBar />
      <div className=" bg-gray-950 pt-[4.7rem] px-5 min-h-[100svh]">
        {children}
        <SpeedInsights />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
