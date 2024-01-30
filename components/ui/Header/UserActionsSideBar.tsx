import { userActionsSideBarToggle } from "@/lib/store/store";
import UserActions from "./UserActions";

export default function UserActionsSideBar() {
  const { isOpen } = userActionsSideBarToggle();
  return (
    <aside
      className={`fixed text-secondary top-0 right-0 bg-transparent min-h-[100svh] w-full ${
        !isOpen
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <section
        className={` bg-primary/50 backdrop-blur-lg w-[28rem] p-5 absolute right-0 min-h-[100svh]
         transition-transform duration-500 translate-x-full
      ${isOpen && "-translate-x-0"}`}
      >
        <UserActions />
      </section>
    </aside>
  );
}
