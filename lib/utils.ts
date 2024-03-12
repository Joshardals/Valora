import { type ClassValue, clsx } from "clsx";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const valueWithoutSpaces = (
  e: ChangeEvent<HTMLInputElement>
): string => {
  return e.target.value.replace(/\s/g, "");
};

export const firstCaseUpper = (e: ChangeEvent<HTMLInputElement>): string => {
  const capitalizedValue =
    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
  return capitalizedValue;
};
