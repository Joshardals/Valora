"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import {
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const { setInitialRender } = userActionInitialRender();

  return (
    <div
      className=""
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
          setInitialRender(true);
        }
      }}
    >
      <Header />
      <UserActionsSideBar />
      <UserActionMobileSideBar />

      <main className=" bg-gray-950 pt-[4.7rem] px-5 min-h-[100svh]">
        {children}
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}
