import { InputProps } from "@/typings";

export default function Input({ placeholder, type }: InputProps) {
  return (
    <input
      aria-label="input"
      autoComplete={type === "password" ? "new-password" : "off"}
      className="
    bg-transparent outline-none border-b border-secondary py-2 w-full
     placeholder:text-secondary placeholder:select-none
  "
      placeholder={placeholder}
      type={type}
    />
  );
}
