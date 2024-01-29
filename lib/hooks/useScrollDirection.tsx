import { useEffect, useState } from "react";
import { useScroll } from "../store/store";

export default function useScrollDirection() {
  const { scroll, setScroll } = useScroll();

  // useEffect(() => {
  //   let lastScrollY = 0;

  //   const updateScrollPosition = () => {
  //     const scrollY = window.scrollY;
  //     const direction = scrollY > lastScrollY ? "down" : "up";

  //     if (
  //       direction !== scrollDirection &&
  //       (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
  //     ) {
  //       setScrollDirection(direction);
  //     }

  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     if (lastScrollY === 0) {
  //       setNoScroll(true);
  //     } else {
  //       setNoScroll(false);
  //     }
  //   };

  //   window.addEventListener("scroll", updateScrollPosition);
  //   return () => {
  //     window.removeEventListener("scroll", updateScrollPosition);
  //   };
  // }, [scrollDirection]);

  useEffect(() => {
    let lastScrollTop = 0;

    const updateScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return scroll;
}
