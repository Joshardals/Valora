import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

// An Hook that changes the header dynamically whenever the scroll changes.

export default function useScrollDirection() {
  const [noScroll, setNoScroll] = useState(false);
  const [scrollNumber, setScrollNumber] = useState<number>(0);
  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const updateScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.getElementById("header");
      const headerChild = document.getElementById("headerChild");

      setScrollNumber(scrollTop);

      if (scrollTop > lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          setNoScroll(false);
          // header.style.top = "-20vh";

          // headerChild.style.backgroundColor = "transparent";
          headerChild.style.backgroundColor = "yellow";
          headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop < lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          // setNoScroll(false);
          // header.style.top = "0";

          headerChild.style.backgroundColor = "#F7F1EC";
          // headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop < 0) {
        setNoScroll(true);
        if (headerChild) {
          headerChild.style.backgroundColor = "red";
        }
      }
      // else if (scrollTop === 0) {
      //   setNoScroll(true);
      //   if (headerChild) {
      //     headerChild.style.backgroundColor = "red";
      //   }
      // }

      lastScrollTop = scrollTop;
    };

    // const throttledUpdate = throttle(updateScrollPosition, 100);

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  return { noScroll, scrollNumber };
}
