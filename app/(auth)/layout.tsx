"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import {
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";

export default function Layout({
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

      <main className=" bg-gray-950 pt-[4.7rem] min-h-[100svh]">
        {children}
      </main>
    </div>
  );
}
