import { type ClassValue, clsx } from "clsx"
import { ChangeEvent } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const valueWithoutSpaces = (e: ChangeEvent<HTMLInputElement>): string => {
  return e.target.value.replace(/\s/g, "");
};