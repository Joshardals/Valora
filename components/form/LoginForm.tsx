import Link from "next/link";
import Button from "../ui/Elements/Button";
// import Input from "../ui/Elements/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignUpValidation } from "@/lib/validations/form";
import { SignUpValidationType } from "@/typings/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
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

    // </form>

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="email"
                  placeholder="EMAIL*"
                  type="email"
                  {...field}
                  // onChange={(e) => {
                  //   // Remove spaces as the user types
                  //   const valueWithoutSpaces = e.target.value.replace(
                  //     /\s/g,
                  //     ""
                  //   );
                  //   form.setValue("email", valueWithoutSpaces);
                  // }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="new-password"
                  autoCorrect="false"
                  className="text-[0.6rem]"
                  id="password"
                  placeholder="PASSWORD*"
                  type="password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button />

        <Link href="/register" className="flex justify-center w-full">
          <p className="uppercase linkHover font-thin">forgotten password</p>
        </Link>
      </form>
    </Form>
  );
}
