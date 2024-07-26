import { useEffect, useState } from "react";

export default function useTruncateLength() {
  const [length, setLength] = useState<number>(20);

  useEffect(() => {
    const updateLength = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);

      switch (true) {
        case screenWidth < 321:
          setLength(15);
          break;
        case screenWidth < 640:
          setLength(20);
      }
    };

    updateLength();
    window.addEventListener("resize", updateLength);

    return () => window.removeEventListener("resize", updateLength);
  }, []);

  return length;
}
