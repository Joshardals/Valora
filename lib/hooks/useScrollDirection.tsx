import { useEffect } from "react";

// An Hook that changes the header dynamically whenever the scroll changes.

export default function useScrollDirection() {
  useEffect(() => {
    let lastScrollTop = 0;

    const updateScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.getElementById("header");
      const headerChild = document.getElementById("headerChild");

      if (scrollTop > lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          header.style.top = "-20%";

          headerChild.style.backgroundColor = "#F7F1EC";
          headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop < lastScrollTop && scrollTop !== 0) {
        if (header && headerChild) {
          header.style.top = "0";

          headerChild.style.backgroundColor = "#F7F1EC";
          headerChild.style.color = "#2C231D";
        }
      } else if (scrollTop === 0) {
        if (header && headerChild) {
          header.style.top = "0";
          headerChild.style.backgroundColor = "transparent";
          headerChild.style.color = "white";
        }
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  return null;
}
