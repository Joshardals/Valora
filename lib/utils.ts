import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertAmount = (amount: string | number) => {
  return Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const valueWithoutSpaces = (value: string) => {
  return value.replace(/\s/g, "");
};

export const firstCaseUpper = (value: string) => {
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
  return capitalizedValue;
};

// Utility function to truncate the string
export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
