import { IconItems } from "@/lib/data";
import NavToggle from "./NavToggle";
import {
  mobileNavToggle,
  userActionActiveIndex,
  userActionMobileSideBarToggle,
  userActionSideBarToggle,
} from "@/lib/store/store";
import { getCurrentUser } from "@/lib/actions/auth/auth.action";

export default function UserActions() {
  const { activeIndex, setActiveIndex } = userActionActiveIndex();
  const { isMobileOpen, setIsMobileOpen } = userActionMobileSideBarToggle();
  const { isOpen, setIsOpen } = userActionSideBarToggle();
  const items = IconItems();
  const { isMobileNavOpen, setIsMobileNavOpen } = mobileNavToggle();

  const handleClick = async (index: number) => {
    try {
      const user = await getCurrentUser();
      if (index === 3) {
        setIsMobileOpen(!isMobileOpen);
        setIsMobileNavOpen(!isMobileNavOpen);
      } else if (index === 1 && user) {
        return null;
      } else {
        setIsOpen(true);
        setActiveIndex(index);
      }
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
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
