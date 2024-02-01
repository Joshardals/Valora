import {
  userActionActiveIndex,
  userActionsSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsWishList() {
  const { isOpen } = userActionsSideBarToggle();
  const { activeIndex } = userActionActiveIndex();
  const wishlistRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    wishlistRef.current?.classList.remove("fadeIn");
    console.log("wishlist Ref Now Active");
  }, [activeIndex]);
  return (
    <div
      className={`px-8 space-y-12 ${
        isOpen ? "fadeIn" : isOpen !== null && "fadeOut"
      } ${activeIndex === 2 ? "block" : "hidden"}`}
      ref={wishlistRef}
    >
      <div className="space-y-4">
        <h2>Wishlist is empty</h2>
        <p className=" font-thin text-pretty max-w-full">
          Save your wishlist by{" "}
          <span>
            <Link href="/" className="underline">
              login
            </Link>
          </span>{" "}
          or creating{" "}
          <span>
            <Link href="/" className="underline">
              your account
            </Link>
          </span>
        </p>
        <Link href="/register" className="flex w-full">
          <p className="uppercase linkHover font-thin">continue shopping</p>
        </Link>
      </div>
    </div>
  );
}
