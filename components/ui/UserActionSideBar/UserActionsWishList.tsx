import {
  userActionActiveIndex,
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsWishList() {
  const { activeIndex, setActiveIndex } = userActionActiveIndex();
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
        <p className=" font-light text-pretty max-w-full">
          Save your wishlist by{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => alert("hello world!")}
          >
            login
          </span>{" "}
          or creating{" "}
          <span>
            <Link href="/account/register" className="underline">
              your account
            </Link>
          </span>
        </p>
        <Link href="/register" className="flex w-full">
          <p className="uppercase linkHoverDark linkUnderline font-light">
            continue shopping
          </p>
        </Link>
      </div>
    </div>
  );
}
