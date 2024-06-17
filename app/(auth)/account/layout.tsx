"use client";
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
      <main className="bg-gray-950 min-h-[100svh]">{children}</main>
    </div>
  );
}
