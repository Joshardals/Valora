import {
  userActionActiveIndex,
  userActionsSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsCart() {
  const { isOpen } = userActionsSideBarToggle();
  const { activeIndex } = userActionActiveIndex();
  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    cartRef.current?.classList.remove("fadeIn");
    console.log("Cart Ref Now Active");
  }, [activeIndex]);

  return (
    <div
      className={`px-8 space-y-12 ${
        isOpen ? "fadeIn" : isOpen !== null && "fadeOut"
      } ${activeIndex === 4 ? "block" : "hidden"}`}
      ref={cartRef}
    >
      <div className="space-y-4">
        <h2>Shopping bag is empty</h2>
        <Link href="/register" className="flex w-full">
          <p className="uppercase linkHover font-thin">continue shopping</p>
        </Link>
      </div>
    </div>
  );
}
