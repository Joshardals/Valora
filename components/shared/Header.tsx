import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";

export default function Header() {
  return (
    <header
      className="grid grid-cols-3 items-center bg-secondary text-primary p-5 select-none
    justify-start"
    >
      <Logo />
      <div className="justify-self-center">
        <NavLinks />
      </div>
      <div className="justify-self-end">header</div>
    </header>
  );
}
