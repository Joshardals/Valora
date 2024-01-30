import { TfiClose } from "react-icons/tfi";
import { userActionsSideBarToggle } from "@/lib/store/store";
import UserActions from "./UserActions";

export default function UserActionsSideBar() {
  const { isOpen, setIsOpen } = userActionsSideBarToggle();
  return (
    <aside
      className={`fixed text-secondary top-0 right-0 bg-primary/50 backdrop-blur-lg p-5
      min-h-[100svh] w-[28rem] transition-transform duration-700
      ${isOpen ? "-translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between">
        <UserActions />
        <TfiClose
          aria-label="Close Sidebar"
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </aside>
  );
}
