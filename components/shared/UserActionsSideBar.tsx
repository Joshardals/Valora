"use client";
import { TfiClose } from "react-icons/tfi";
import { userActionsSideBarToggle } from "@/lib/store/store";
import UserActions from "../ui/Header/UserActions";
import UserActionsLogin from "../ui/UserActionSideBar/UserActionsLogin";
import UserActionsCart from "../ui/UserActionSideBar/UserActionsCart";
import UserActionsWishList from "../ui/UserActionSideBar/UserActionsWishList";

export default function UserActionsSideBar() {
  const { isOpen, setIsOpen } = userActionsSideBarToggle();
  return (
    <aside
      className={`fixed text-secondary top-0 right-0 bg-primary/50 backdrop-blur-lg
      min-h-[100svh] w-[28rem] transition-transform duration-700 space-y-8
      ${isOpen ? "-translate-x-0" : "translate-x-full"}
      `}
      onClick={(e) => {
        e.stopPropagation(); // Trying to prevent the onClick from the parent element in the layout.tsx.
      }}
    >
      <section className="flex items-center justify-between p-8">
        <UserActions />
        <TfiClose
          aria-label="Close Sidebar"
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </section>

      <section>
        <UserActionsLogin />
        <UserActionsCart />
        <UserActionsWishList />
      </section>
    </aside>
  );
}
