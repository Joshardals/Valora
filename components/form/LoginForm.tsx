import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
import { valueWithoutSpaces } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

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
                  onChange={(e) => {
                    form.setValue("email", valueWithoutSpaces(e));
                  }}
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
                  onChange={(e) => {
                    form.setValue("password", valueWithoutSpaces(e));
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button>Login</Button>

        <Link href="/register" className="flex justify-center w-full">
          <p className="uppercase linkHoverDark font-light">
            forgotten password
          </p>
        </Link>
      </form>
    </Form>
  );
}
