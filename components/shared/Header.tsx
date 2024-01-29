"use client";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import HeaderInfo from "../ui/Header/HeaderInfo";
import useScrollDirection from "@/lib/hooks/useScrollDirection";
import { useScroll } from "@/lib/store/store";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const { scroll } = useScroll();

  // return (
  //   <header
  //     className={`sticky grid grid-flow-row ${
  //       scrollDirection === "down" ? " -top-24" : "top-0"
  //     } transition-all duration-200 z-10`}
  //   >
  //     {/* <HeaderInfo /> */}
  //     <div
  //       className={`grid grid-cols-3 items-center max-md:bg-secondary max-md:text-primary py-5 px-8 max-md:px-5 select-none
  //       justify-start headerHover ${
  //         scrollDirection === "up" && !scroll
  //           ? "text-primary bg-secondary"
  //           : "text-secondary"
  //       } `}
  //     >
  //       <Logo />
  //       <div className="justify-self-center max-md:hidden">
  //         <NavLinks />
  //       </div>
  //       <div className="justify-self-end max-md:col-span-2">
  //         <UserActions />
  //       </div>
  //     </div>
  //   </header>
  // );

  return (
    <header
      className={`fixed top-0 w-full grid grid-flow-row
    ${scroll ? "-top-[100%]" : "top-0"}`}
    >
      <HeaderInfo />
      <div
        className={`grid grid-cols-3 items-center max-md:bg-secondary max-md:text-primary py-5 px-8 max-md:px-5 select-none
        justify-start headerHover  ${
          scroll ? "bg-secondary text-primary" : "text-secondary"
        } `}
      >
        <Logo />
        <div className="justify-self-center max-md:hidden">
          <NavLinks />
        </div>
        <div className="justify-self-end max-md:col-span-2">
          <UserActions />
        </div>
      </div>
    </header>
  );
}
