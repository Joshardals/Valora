"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps {
  form?: any;
  name?: string;
  type?: string;
  placeholder?: string;
  loading?: boolean;
  textarea?: boolean;
}

export function FormInput({
  form,
  name,
  type,
  placeholder,
  loading,
  textarea,
}: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={name!}
      render={({ field }) => (
        <FormItem>
          {textarea ? (
            <FormControl>
              <Textarea
                className="border border-primary"
                placeholder={placeholder}
                {...field}
                name="description"
              />
            </FormControl>
          ) : (
            <FormControl>
              <Input
                autoCapitalize="none"
                autoCorrect="off"
                className={`w-full text-primary ${
                  type !== "file" &&
                  "rounded-lg bg-white placeholder:text-primary/50 px-5 py-2 border border-primary"
                }`}
                id={name}
                placeholder={placeholder}
                type={type}
                {...field}
                onChange={(e: any) => {
                  const value =
                    type === "number" ? Number(e.target.value) : e.target.value;
                  form.setValue(name, value);
                }}
                disabled={loading}
                min={1}
              />
            </FormControl>
          )}
          <FormMessage className="text-red-500 text-xs" />
        </FormItem>
      )}
    />
  );
}
