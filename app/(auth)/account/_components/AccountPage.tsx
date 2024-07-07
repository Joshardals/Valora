"use client";
import { auth, db } from "@/lib/firebase/clientFirebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import Header from "@/components/shared/Header";
import Link from "next/link";
import { signOut } from "firebase/auth";
import {
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import { useEffect, useState } from "react";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import { useRouter } from "next/navigation";
// import { logoutUser } from "@/lib/actions/auth/auth.action";

export function AccountPage() {
  const [firstName, setFirstName] = useState<String>();
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const router = useRouter();
  const { setInitialRender } = userActionInitialRender();
  const userId = auth.currentUser?.uid || "";

  console.log(userId);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User Sign-Out Successful");
      router.push("/");
    } catch (error: any) {
      console.error(`Error Logging Out: ${error.message}`);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setFirstName(userData.firstName);
        } else {
          console.log("no-data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUser();
  }, []);
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
            <h2 className=" font-playfair">Hello {firstName}</h2>
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
