import NavToggle from "./NavToggle";
import {
  userActionActiveIndex,
  userActionsSideBarToggle,
} from "@/lib/store/store";
import { checkWidth } from "@/lib/data";

export default function UserActions() {
  const { isOpen, setIsOpen } = userActionsSideBarToggle();
  const { activeIndex, setActiveIndex } = userActionActiveIndex();
  const items = checkWidth();

  const handleClick = (index: number) => {
    setIsOpen(true);
    setActiveIndex(index);
  };

  return (
    <ul
      className={`flex items-center max-xs:space-x-3 space-x-4 *:cursor-pointer 
      ${isOpen ? "activeList" : "linkList"}`}
    >
      {items.map((item, index) => {
        const { label, icon } = item;
        return (
          <li
            key={index}
            className={` 
          ${label === "currency" && "max-md:hidden"}
          ${label === "profile" && "max-md:hidden"}
          ${label === "wishlist" && "max-md:hidden"}
          ${label === "search" && "md:hidden"}
          ${index === activeIndex && "active"}
        `}
            onClick={() => handleClick(index)}
          >
            {icon}
          </li>
        );
      })}
      <li className="md:hidden max-h-5 pt-1">
        <NavToggle />
      </li>
    </ul>
  );
}
