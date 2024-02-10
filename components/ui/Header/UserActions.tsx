import { IconItems } from "@/lib/data";
import NavToggle from "./NavToggle";
import {
  userActionActiveIndex,
  userActionMobileSideBarToggle,
  userActionSideBarToggle,
} from "@/lib/store/store";

export default function UserActions() {
  const { activeIndex, setActiveIndex } = userActionActiveIndex();
  const { isMobileOpen } = userActionMobileSideBarToggle();
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const items = IconItems();

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
          ${label === "cart" && isOpen && "max-md:hidden"}
          ${label === "currency" && "max-md:hidden"}
          ${label === "profile" && "max-md:hidden"}
          ${label === "wishlist" && "max-md:hidden"}
          ${label === "search" && "hidden"} 
          ${index === activeIndex && "active"}
        `}
            onClick={() => handleClick(index)}
          >
            {icon}
          </li>
        );
      })}
      <li className="md:hidden max-h-5 pt-1">
        <NavToggle background={isMobileOpen ? "bg-secondary" : "bg-primary"} />
      </li>
    </ul>
  );
}
