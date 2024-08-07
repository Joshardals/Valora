"use client";
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa6";
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
                className={`border border-primary ${
                  loading && "bg-white cursor-not-allowed"
                }`}
                placeholder={placeholder}
                {...field}
                name="description"
                disabled={loading}
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
                } ${loading && "cursor-not-allowed"}`}
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

export function ButtonInput({ loading }: { loading: boolean }) {
  return (
    <Button
      className={`bg-primary px-5 py-2 text-secondary rounded-lg hover:bg-primary ${
        loading && "cursor-not-allowed"
      }`}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <p>Adding Products</p>
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        "Add Product"
      )}
    </Button>
  );
}
