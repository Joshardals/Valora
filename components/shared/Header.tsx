"use client";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import HeaderInfo from "../ui/Header/HeaderInfo";
import useScrollDirection from "@/lib/hooks/useScrollDirection";

export default function Header() {
  const { noScroll, scrollNumber } = useScrollDirection();

  return (
    <header
      className={`fixed top-0 w-full grid grid-flow-row
      duration-300`}
      id="header"
      data-testid="header"
    >
      <p className="text-yellow-500 font-bold text-xl">{scrollNumber}</p>
      <HeaderInfo />
      {/* ${noScroll && "headerChildScroll"} */}
      <div
        className={`grid grid-cols-3 items-center text-secondary max-md:bg-secondary max-md:text-primary  
        py-5 px-8 max-md:px-5 select-none justify-start headerHover 
       `}
        id="headerChild"
        data-testid="headerChild"
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
