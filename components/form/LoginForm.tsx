import Link from "next/link";
import Button from "../ui/Elements/Button";
import Input from "../ui/Elements/Input";

export default function LoginForm() {
  return (
    <form className="space-y-12">
      <Input placeholder="EMAIL*" type="text" />
      <Input placeholder="PASSWORD*" type="text" />
      <Button />
      <Link href="#" className=" flex justify-center">
        <p className="uppercase linkHover font-thin">forgotten password</p>
      </Link>
    </form>
  );
}
