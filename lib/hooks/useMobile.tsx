import { useEffect } from "react";
import { useIsMobile } from "../store/store";

export default function useMobile() {
  const { mobile, setMobile } = useIsMobile();

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
}
