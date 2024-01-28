import { useEffect, useState } from "react";
import { useNoScroll } from "../store/store";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("");
  const { setNoScroll } = useNoScroll();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      if (lastScrollY === 0) {
        setNoScroll(true);
      } else {
        setNoScroll(false);
      }
    };

    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
