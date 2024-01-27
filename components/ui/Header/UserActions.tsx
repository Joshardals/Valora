import { CiUser, CiBookmark, CiShoppingCart } from "react-icons/ci";
import { PiCurrencyGbpLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import NavToggle from "./NavToggle";

export default function UserActions() {
  return (
    <ul className="relative flex items-center space-x-4 *:cursor-pointer linkList">
      <li className="max-md:hidden">
        <PiCurrencyGbpLight size={20} aria-label="Currency" />
      </li>
      <li className="max-md:hidden">
        <CiUser size={20} aria-label="Profile Icon" />
      </li>
      <li className="max-md:hidden">
        <CiBookmark size={20} aria-label="Wishlist" />
      </li>
      <li className="md:hidden">
        <CiSearch size={20} aria-label="Search" />
      </li>
      <li>
        <CiShoppingCart size={20} aria-label="Shopping Cart" />
      </li>
      <li className="">
        <NavToggle />
      </li>
    </ul>
  );
}
