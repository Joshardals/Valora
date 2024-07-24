"use client";
import { fetchUserInfo, promoteToAdmin } from "@/lib/actions/users/user.action";
import Header from "@/components/shared/Header";
import { logout } from "@/lib/actions/auth/auth.action";
import { useEffect, useState } from "react";
import {
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import { useRouter } from "next/navigation";

export function AccountPage({ userId }: { userId: string }) {
  const [firstName, setFirstName] = useState<String>();
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { setInitialRender } = userActionInitialRender();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error: any) {
      console.error(`Error Logging Out: ${error.message}`);
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const user = await fetchUserInfo(userId);
        setFirstName(user?.name.split(" ")[0]);
      } catch (error: any) {
        console.log(`Failed to fetch User Data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    getUserInfo();
  }, [userId]);

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
        {loading ? (
          "Loading..."
        ) : (
          <div className="w-full">
            <div className="space-y-4">
              <h2 className=" font-playfair">Hello {firstName}</h2>
              <div className="flex md:space-x-[10rem] max-md:justify-between">
                <p className="uppercase">Welcome to your account</p>
                <p className="underline cursor-pointer" onClick={handleLogout}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        )}
        {/* <div className="flex-1">2</div> */}
      </div>
    </div>
  );
}
