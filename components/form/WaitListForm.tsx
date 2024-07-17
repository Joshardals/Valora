import { FaArrowRight } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { WaitListValidationType } from "@/typings/form";
import { WaitListValidation } from "@/lib/validations/form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function WaitListForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<WaitListValidationType>({
    resolver: zodResolver(WaitListValidation),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: WaitListValidationType) => {};

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
            <FormItem className="relative">
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  className="border-primary text-primary placeholder:text-primary"
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
              <button
                title="Submit the form"
                type="submit"
                className="absolute top-0 right-0 bg-secondary py-2 cursor-pointer"
              >
                <FaArrowRight />
              </button>
              <FormMessage className="text-red-500 text-xs" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
