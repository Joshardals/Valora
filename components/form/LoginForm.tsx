import Link from "next/link";
import Button from "../ui/Elements/Button";
import Input from "../ui/Elements/Input";
import { FormEvent } from "react";

export default function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted!");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-12" autoComplete="off">
      {/* <Input placeholder="EMAIL*" type="email" />
      <Input placeholder="PASSWORD*" type="password" /> */}
      <input
        type="email"
        name=""
        id=""
        placeholder="EMAIL*"
        autoComplete="email"
        autoCorrect="off"
      />
      <input
        type="password"
        name=""
        id=""
        role="presentation"
        placeholder="PASSWORD*"
        // autoComplete="current-password"
        required
      />
      <Button />
      <Link href="/register" className="flex justify-center w-full">
        <p className="uppercase linkHover font-thin">forgotten password</p>
      </Link>
    </form>
  );
}
