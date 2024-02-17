import {
  userActionActiveIndex,
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsCart() {
  const { activeIndex } = userActionActiveIndex();
  const cartRef = useRef<HTMLDivElement | null>(null);
  const { initialRender, setInitialRender } = userActionInitialRender();
  const { isOpen } = userActionSideBarToggle();

  useEffect(() => {
    if (isOpen) {
      if (activeIndex === 4 && initialRender) {
        cartRef.current?.classList.add("fadeIn");
        setInitialRender(false);
      } else {
        cartRef.current?.classList.remove("fadeIn");
      }
    }
  }, [isOpen, activeIndex]);

  return (
    <div
      className={`px-8 space-y-12 ${
        isOpen ? "" : isOpen !== null && "fadeOut"
      } ${activeIndex === 4 ? "block" : "hidden"}`}
      ref={cartRef}
    >
      <div className="space-y-4">
        <h2>Shopping bag is empty</h2>
        <Link href="/register" className="flex w-full">
          <p className="uppercase linkHover font-light">continue shopping</p>
        </Link>
      </div>
    </div>
  );
}
