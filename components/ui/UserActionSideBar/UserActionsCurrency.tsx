import {
  userActionInitialRender,
  userActionActiveIndex,
  userActionSideBarToggle,
} from "@/lib/store/store";
import { useEffect, useRef } from "react";

export default function UserActionsLogin() {
  const { activeIndex } = userActionActiveIndex();
  const currencyRef = useRef<HTMLDivElement | null>(null);
  const { initialRender, setInitialRender } = userActionInitialRender();
  const { isOpen } = userActionSideBarToggle();

  useEffect(() => {
    if (isOpen) {
      if (activeIndex === 0 && initialRender) {
        currencyRef.current?.classList.add("fadeIn");
        setInitialRender(false);
      } else {
        currencyRef.current?.classList.remove("fadeIn");
      }
    }
  }, [isOpen, activeIndex]);

  return (
    <div
      className={`px-8 space-y-12
      } ${activeIndex === 0 ? "block" : "hidden"}
      ${isOpen ? "" : isOpen !== null && "fadeOut"}
      `}
      ref={currencyRef}
    >
      <div className="space-y-4">
        <h2>Location</h2>
        <p className=" font-thin text-pretty max-w-full">
          Please select your location and currency
        </p>
      </div>
    </div>
  );
}
