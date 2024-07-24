"use client";
import { Button } from "../ui/button";
import { ChangeEvent, useState } from "react";
import { createUser, loginUser } from "@/lib/actions/auth/auth.action";
import { firstCaseUpper, valueWithoutSpaces } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { RegisterValidation } from "@/lib/validations/form";
import { RegisterValidationType } from "@/typings/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<RegisterValidationType>({
    resolver: zodResolver(RegisterValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name }: any = e.target;
    const processedValue = valueWithoutSpaces(firstCaseUpper(e.target.value));
    form.setValue(name, processedValue);
  };

  const onSubmit = async (values: RegisterValidationType) => {
    try {
      setLoading(true);

      // User Registration
      await createUser({
        email: values.email,
        password: values.password,
        name: `${values.firstName} ${values.lastName}`,
      });

      // Create a User Document in the DB

      // Login the User
      await loginUser({
        email: values.email,
        password: values.password,
      });

      router.push("/account");
    } catch (error: any) {
      console.error(`Error Creating User: ${error.message}`);
    } finally {
      form.setValue("firstName", "");
      form.setValue("lastName", "");
      form.setValue("email", "");
      form.setValue("password", "");

      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 max-w-[1200px] mx-auto"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="firstName"
                  placeholder="FIRST NAME*"
                  type="text"
                  {...field}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="lastName"
                  placeholder="LAST NAME*"
                  type="text"
                  {...field}
                  onChange={handleFormChange}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs" />
            </FormItem>
          )}
        />

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

        <Button variant={"register"} size={"lg"} disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </Button>
      </form>
    </Form>
  );
}
