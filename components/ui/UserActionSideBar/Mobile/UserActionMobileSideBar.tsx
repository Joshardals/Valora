import { userActionMobileSideBarToggle } from "@/lib/store/store";
import Logo from "../../Header/Logo";
import UserActions from "../../Header/UserActions";

export default function UserActionMobileSideBar() {
  const { isMobileOpen } = userActionMobileSideBarToggle();
  return (
    <section
      className={`fixed text-secondary top-0 right-0 bg-primary
    min-h-[100svh] w-full transition-transform duration-700 space-y-8 max-md:p-5 md:hidden
    ${isMobileOpen ? "-translate-x-0" : "translate-x-full"}
    `}
    ></section>
  );
}
