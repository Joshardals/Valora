import { InputProps } from "@/typings";

export default function Input({ placeholder, type }: InputProps) {
  return (
    <div className="relative">
      <input
        aria-label="input"
        autoComplete={type === "password" ? "new-password" : "false"}
        className={`
        bg-transparent outline-none border-b border-secondary py-2 w-full
      placeholder:text-secondary placeholder:select-none placeholder:text-[14px] ${
        type === "password" && "text-[0.6rem]"
      }
        `}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
