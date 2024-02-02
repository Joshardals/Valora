import LoginForm from "@/components/form/LoginForm";
import {
  userActionActiveIndex,
  userActionsSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsLogin() {
  const { isOpen } = userActionsSideBarToggle();
  const { activeIndex } = userActionActiveIndex();
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    profileRef.current?.classList.remove("fadeIn");
    console.log("Profile Ref Active.");
  }, [activeIndex]);

  return (
    <div
      className={`px-8 space-y-12 ${
        isOpen ? "fadeIn" : isOpen !== null && "fadeOut"
      } ${activeIndex === 0 ? "block" : "hidden"}`}
      ref={profileRef}
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
