import { Button } from "../ui/button";
import { firstCaseUpper, valueWithoutSpaces } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import { loginUser } from "@/lib/actions/auth/auth.action";
import { SignInValidation } from "@/lib/validations/form";
import { SignInValidationType } from "@/typings/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(true);
  const form = useForm<SignInValidationType>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInValidationType) => {
    try {
      setLoading(true);
      await loginUser({
        email: values.email,
        password: values.password,
      });
    } catch (error: any) {
      console.log(`Invalid Email or Password: ${error}`);
    }

    form.setValue("email", "");
    form.setValue("password", "");

    setLoading(false);
  };

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
                    form.setValue("email", e.target.value);
                  }}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs" />
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
                    const processedValue = valueWithoutSpaces(e.target.value);
                    form.setValue("password", processedValue);
                  }}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs" />
            </FormItem>
          )}
        />

        <Button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Link href="/register" className="flex justify-center w-full">
          <p className="uppercase md:linkHoverDark linkUnderline decoration-secondar font-light">
            forgotten password
          </p>
        </Link>
      </form>
    </Form>
  );
}
