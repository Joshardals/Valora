import { currentUser } from "@/lib/actions/auth/auth.action";
import { IconItems } from "@/lib/data";
import {
  mobileNavToggle,
  userActionActiveIndex,
  userActionMobileSideBarToggle,
  userActionSideBarToggle,
} from "@/lib/store/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SecondSection() {
  const items = IconItems();
  const router = useRouter();
  const { setActiveIndex } = userActionActiveIndex();
  const { setIsMobileNavOpen } = mobileNavToggle();
  const { setIsMobileOpen } = userActionMobileSideBarToggle();
  const { setIsOpen } = userActionSideBarToggle();
  const [userId, setUserId] = useState<string>();

  // Trying to get the current Logged In user
  useEffect(() => {
    const getUser = async () => {
      const user = await currentUser();
      setUserId(user);
    };

    getUser();
  }, [router]);

  const handleClick = (index: number) => {
    setIsMobileOpen(false);
    setIsMobileNavOpen(false);

    setTimeout(() => {
      if (index === 1 && userId) {
        null;
      } else {
        setIsOpen(true);
        setIsOpen(true);
        setActiveIndex(index);
      }
    }, 700);
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
