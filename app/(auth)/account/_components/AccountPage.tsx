"use client";
import Header from "@/components/shared/Header";
import { signOutUser } from "@/lib/actions/auth/auth.action";
import {
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import Link from "next/link";

export function AccountPage(data: any) {
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const { setInitialRender } = userActionInitialRender();
  const name = data?.name.split(" ")[0];

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error: any) {
      console.error(`Error Logging Out: ${error.message}`);
    }
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
          <div className="space-y-4 mb-10">
            <h2 className=" font-playfair">Hello {name}</h2>
            <div className="flex md:space-x-[10rem] max-md:justify-between">
              <p className="uppercase">Welcome to your account</p>
              <p className="underline cursor-pointer" onClick={handleLogout}>
                Logout
              </p>
            </div>
          </div>

          <Link
            href="/admin"
            className="bg-secondary text-primary px-5 py-2 rounded-md"
          >
            Admin
          </Link>
        </div>

        {/* <div className="flex-1">2</div> */}
      </div>
    </div>
  );
}
