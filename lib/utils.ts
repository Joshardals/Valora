import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const valueWithoutSpaces = (value: string) => {
  return value.replace(/\s/g, "");
};

export const firstCaseUpper = (value: string) => {
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
  return capitalizedValue;
};
