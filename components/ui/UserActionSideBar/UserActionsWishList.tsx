import {
  userActionActiveIndex,
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsWishList() {
  const { activeIndex } = userActionActiveIndex();
  const { initialRender, setInitialRender } = userActionInitialRender();
  const { isOpen } = userActionSideBarToggle();
  const wishlistRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (activeIndex === 2 && initialRender) {
        wishlistRef.current?.classList.add("fadeIn");
        setInitialRender(false);
      } else {
        wishlistRef.current?.classList.remove("fadeIn");
      }
    }
  }, [isOpen, activeIndex]);
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
