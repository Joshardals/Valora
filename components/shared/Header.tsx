"use client";
import HeaderInfo from "../ui/Header/HeaderInfo";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import { usePathname } from "next/navigation";
import UserActions from "../ui/Header/UserActions";
import {
  userActionMobileSideBarToggle,
  userActionSideBarToggle,
} from "@/lib/store/store";
import useFixedHeader from "@/lib/hooks/useFixedHeader";

export default function Header() {
  const { isOpen } = userActionSideBarToggle();
  const { isMobileOpen } = userActionMobileSideBarToggle();
  // const pathname = usePathname();
  useFixedHeader();

  return (
    <header className="relative">
      <div
        className={`fixed header top-0 w-full grid grid-flow-row
      duration-30 ${isMobileOpen && "z-10"}`}
        id="header"
        data-testid="header"
      >
        {/* <HeaderInfo /> I might later need to put it in the future.*/}
        <div
          className={`
        py-5 px-8 max-md:px-5 select-none justify-start transition-[background] ease-in-out duration-300  
        z-20 bg-secondary text-primary
        
        ${isOpen && "bg-transparent text-secondary"} 
        ${isMobileOpen && "bg-transparent text-secondary"}
       
        `}
          id="headerChild"
          data-testid="headerChild"
        >
          <div className="grid grid-cols-3 items-center max-w-[1200px] mx-auto">
            <Logo />
            <div className="justify-self-center max-md:hidden">
              <NavLinks />
            </div>
            <div
              className={`justify-self-end max-md:col-span-2 
          ${
            isOpen
              ? "animate__animated animate__fadeOutLeft"
              : isOpen !== null && "animate__animated animate__fadeInLeft"
          }
          `}
            >
              <UserActions />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
