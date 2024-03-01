"use client";

import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const transition = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    transition.current?.classList.add("fadeOutTransition");
  }, []);
  return (
    <div>
      <div
        ref={transition}
        className="fixed top-0 left-0 w-screen h-screen bg-secondary pointer-events-none z-[99999]"
      />
      {children}
    </div>
  );
}
