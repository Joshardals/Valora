import { auth } from "@/lib/firebase/clientFirebase";
import { IconItems } from "@/lib/data";
import NavToggle from "./NavToggle";
import {
  mobileNavToggle,
  userActionActiveIndex,
  userActionMobileSideBarToggle,
  userActionSideBarToggle,
} from "@/lib/store/store";

export default function UserActions() {
  const { activeIndex, setActiveIndex } = userActionActiveIndex();
  const { isMobileOpen, setIsMobileOpen } = userActionMobileSideBarToggle();
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const items = IconItems();
  const { isMobileNavOpen, setIsMobileNavOpen } = mobileNavToggle();
  const userId = auth.currentUser?.uid || "";

  const handleClick = (index: number) => {
    if (index === 3) {
      setIsMobileOpen(!isMobileOpen);
      setIsMobileNavOpen(!isMobileNavOpen);
    } else if (index === 1 && userId) {
      null;
    } else {
      setIsOpen(true);
      setActiveIndex(index);
    }
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
          ${label === "account" && "max-md:hidden"}
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
        <NavToggle background={isMobileOpen ? "bg-secondary" : "bg-primary"} />
      </li>
    </ul>
  );
}
