import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";

export default function Header() {
  return (
    <header
      className="grid grid-cols-3 items-center bg-secondary text-primary py-5 px-8 select-none
    justify-start"
    >
      <Logo />
      <div className="justify-self-center">
        <NavLinks />
      </div>
      <div className="justify-self-end">
        <UserActions />
      </div>
    </header>
  );
}
