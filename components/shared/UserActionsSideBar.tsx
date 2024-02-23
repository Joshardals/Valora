"use client";
import { TfiClose } from "react-icons/tfi";
import {
  useIsMobile,
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import UserActions from "../ui/Header/UserActions";
import UserActionsLogin from "../ui/UserActionSideBar/UserActionsLogin";
import UserActionsCart from "../ui/UserActionSideBar/UserActionsCart";
import UserActionsWishList from "../ui/UserActionSideBar/UserActionsWishList";
import UserActionsCurrency from "../ui/UserActionSideBar/UserActionsCurrency";
import { useEffect } from "react";

export default function UserActionsSideBar() {
  const { setInitialRender } = userActionInitialRender();
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const { mobile } = useIsMobile();

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.toggle("overflow-hidden", isOpen);
  //   }

  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [isOpen]);

  return (
    <aside
      className={`fixed text-secondary top-0 right-0 bg-primary/50 backdrop-blur-lg
      min-h-[100svh] w-full md:w-[28rem] transition-transform duration-700 space-y-8
      ${isOpen ? "-translate-x-0" : "translate-x-full"}
      `}
      onClick={(e) => {
        e.stopPropagation(); // Trying to prevent the onClick from the parent element in the layout.tsx.
      }}
    >
      <section className="flex items-center justify-between max-md:justify-end p-8">
        <div className="max-md:hidden">
          <UserActions />
        </div>

        <TfiClose
          size={mobile ? 21 : 20}
          aria-label="Close Sidebar"
          className="cursor-pointer"
          onClick={() => {
            setInitialRender(true);
            setIsOpen(false);
          }}
        />
      </section>

      <section>
        <UserActionsCurrency />
        <UserActionsLogin />
        <UserActionsWishList />
        <UserActionsCart />
      </section>
    </aside>
  );
}
