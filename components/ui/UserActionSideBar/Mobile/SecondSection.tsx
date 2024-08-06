import { getCurrentUser } from "@/lib/actions/auth/auth.action";
import { IconItems } from "@/lib/data";
import {
  mobileNavToggle,
  userActionActiveIndex,
  userActionMobileSideBarToggle,
  userActionSideBarToggle,
} from "@/lib/store/store";

export default function SecondSection() {
  const items = IconItems();
  const { setActiveIndex } = userActionActiveIndex();
  const { setIsMobileNavOpen } = mobileNavToggle();
  const { setIsMobileOpen } = userActionMobileSideBarToggle();
  const { setIsOpen } = userActionSideBarToggle();

  const handleClick = async (index: number) => {
    try {
      const user = await getCurrentUser();
      setIsMobileOpen(false);
      setIsMobileNavOpen(false);

      setTimeout(() => {
        if (index === 1 && user) {
          null;
        } else {
          setIsOpen(true);
          setIsOpen(true);
          setActiveIndex(index);
        }
      }, 700);
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <section className=" py-16">
      <ul className="space-y-2 text-2xl *:cursor-pointer *:w-[fit-content] grid grid-flow-row">
        <li className="order-first">Contact us</li>
        {items.map((item, index) => {
          const { label } = item;
          return (
            <li
              key={index}
              className={`cursor-pointer
            ${label === "search" && "hidden"}
            ${label === "cart" && "hidden"}
            ${label === "currency" && "order-1"}
            ${label === "account" && " order-last"}
            capitalize
          `}
              onClick={() => handleClick(index)}
            >
              {label}
              {label === "currency" && `: Usd($)`}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
