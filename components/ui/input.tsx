import * as React from "react";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <input
        type={type}
        className={cn(
          "bg-red-500 capitalize outline-none border-b border-secondary py-2 w-full text-secondary placeholder:text-secondary placeholder:select-none placeholder:text-[14px]",
          pathname === "/account/register" &&
            "border-primary text-primary placeholder:text-primary",
          type === "email" && "lowercase placeholder:uppercase",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
