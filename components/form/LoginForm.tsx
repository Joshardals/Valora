import Link from "next/link";
import Button from "../ui/Elements/Button";
import Input from "../ui/Elements/Input";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { SignUpValidationType } from "@/typings/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidation } from "@/lib/validations/form";
// import { FormEvent } from "react";

export default function LoginForm() {
  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpValidationType) => {};
 
  return (
    // <form onSubmit={handleSubmit} className="space-y-12" autoComplete="off">
    //   <Input placeholder="EMAIL*" type="email" />
    //   <Input placeholder="PASSWORD*" type="password" />

    //   <Button />
    //   <Link href="/register" className="flex justify-center w-full">
    //     <p className="uppercase linkHover font-thin">forgotten password</p>
    //   </Link>
    // </form>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}></form>
    </Form>
  );
}
