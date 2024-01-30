import NavToggle from "./NavToggle";
import { userActionsSideBarToggle } from "@/lib/store/store";
import { items } from "@/lib/data";

export default function UserActions() {
  const { isOpen, setIsOpen } = userActionsSideBarToggle();
  return (
    <ul
      className={`flex items-center max-xs:space-x-3 space-x-4 *:cursor-pointer 
      ${isOpen ? "activeList" : "linkList"}`}
    >
      {items.map((item, index) => (
        <li
          className={`active 
          ${item.label === "currency" && "max-md:hidden"}
          ${item.label === "profile" && "max-md:hidden"}
          ${item.label === "wishlist" && "max-md:hidden"}
          ${item.label === "search" && "md:hidden"}
        `}
          key={index}
        >
          {item.icon}
        </li>
      ))}
      {/* <li className="max-md:hidden " onClick={() => setIsOpen(true)}>
        <PiCurrencyGbpLight size={20} aria-label="Currency" />
      </li>
      <li className="max-md:hidden active">
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
      </li> */}
      <li className="md:hidden max-h-5 pt-1">
        <NavToggle />
      </li>
    </ul>
  );
}
