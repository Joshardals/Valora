import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import NavToggle from "../ui/Header/NavToggle";
import UserActions from "../ui/Header/UserActions";

export default function Header() {
  return (
    <header
      className="grid grid-cols-3 items-center bg-secondary text-primary py-5 px-8 max-md:px-5 select-none
    justify-start"
    >
      <Logo />
      <div className="justify-self-center max-md:hidden">
        <NavLinks />
      </div>
      <div className="justify-self-end max-md:col-span-2 flex space-x-4 items-center">
        <UserActions />
        <NavToggle />
      </div>
    </header>
  );
}
