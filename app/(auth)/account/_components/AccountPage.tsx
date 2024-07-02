"use client";
import Header from "@/components/shared/Header";
import Link from "next/link";
import {
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import { logoutUser } from "@/lib/actions/auth/auth.action";

export function AccountPage() {
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const { setInitialRender } = userActionInitialRender();

  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <div
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

      <div className="bg-primary w-screen h-screen flex items-center pt-[4.7rem] px-12 max-md:px-5">
        <div className="w-full">
          <div className="space-y-4">
            <h2 className=" font-playfair">Hello Anon</h2>
            <div className="flex md:space-x-[10rem] max-md:justify-between">
              <p className="uppercase">Welcome to your account</p>
              <p className="underline cursor-pointer" onClick={handleLogout}>
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex-1">2</div> */}
      </div>
    </div>
  );
}
