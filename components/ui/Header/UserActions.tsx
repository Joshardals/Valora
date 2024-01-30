import { CiUser, CiBookmark, CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import NavToggle from "./NavToggle";
import { PiCurrencyGbpLight } from "react-icons/pi";
import { userActionsSideBarToggle } from "@/lib/store/store";

export default function UserActions() {
  const { setIsOpen } = userActionsSideBarToggle();
  return (
    <ul className="flex items-center max-xs:space-x-3 space-x-4 *:cursor-pointer linkList">
      <li className="max-md:hidden" onClick={() => setIsOpen(true)}>
        <PiCurrencyGbpLight size={20} aria-label="Currency" />
      </li>
      <li className="max-md:hidden">
        <CiUser size={20} aria-label="Profile Icon" />
      </li>
      <li className="max-md:hidden">
        <CiBookmark size={20} aria-label="Wishlist" />
      </li>
      <li className="md:hidden">
        <CiSearch size={20} aria-label="Search" className="max-md:size-7" />
      </li>
      <li>
        <CiShoppingCart
          size={20}
          aria-label="Shopping Cart"
          className="max-md:size-7"
        />
      </li>
      <li className="md:hidden max-h-5 pt-1">
        <NavToggle />
      </li>
    </ul>
  );
}
