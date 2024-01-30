"use client";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import HeaderInfo from "../ui/Header/HeaderInfo";
import { userActionsSideBarToggle } from "@/lib/store/store";

export default function Header() {
  const { isOpen } = userActionsSideBarToggle();
  return (
    <header
      className={`fixed top-0 w-full grid grid-flow-row
      duration-300`}
      id="header"
      data-testid="header"
    >
      {/* <HeaderInfo /> I might later need to put it in the future.*/}
      <div
        className={`grid grid-cols-3 items-center bg-secondary text-primary  
        py-5 px-8 max-md:px-5 select-none justify-start transition-[background] duration-200  
        ${isOpen && "bg-transparent text-secondary"}`}
        id="headerChild"
        data-testid="headerChild"
      >
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
    </header>
  );
}
