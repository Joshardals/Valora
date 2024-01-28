import { useEffect, useState } from "react";
import { useScrolledDown } from "../store/store";

export default function useScrollPos() {
  const [scrollDirection, setScrollDirection] = useState("");
  const { scrolledDown, setScrolledDown } = useScrolledDown();

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
    };

    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [scrollDirection]);
}
