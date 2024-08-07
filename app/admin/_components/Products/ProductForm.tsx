"use client";
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa6";
import { Form } from "@/components/ui/form";
import { FormInput } from "./FormInput";
import { ProductValidation } from "@/lib/validations/form";
import { ProductValidationType } from "@/typings/form";
import {
  createProducts,
  getProductImage,
  uploadProductImage,
} from "../../_actions/admin.actions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ProductForm() {
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"]; // Allowed MIME types
  const [error, setError] = useState<string | null>();
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const MAX_FILE_SIZE_MB = 2; // Maximum file size in MB
  const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024; // Convert MB to bytes

  const form = useForm<ProductValidationType>({
    resolver: zodResolver(ProductValidation),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      image: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError(
          `File size exceeds ${MAX_FILE_SIZE_MB} MB. Please select a smaller file.`
        );
        e.target.value = "";
        setImage(null);
        return;
      }

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setError("Invalid file type. Please select a JPEG or PNG image.");
        e.target.value = "";
        setImage(null);
        return;
      }

      setError(null);
      setImage(file);
    }
  };

  const onSubmit = async (values: ProductValidationType) => {
    if (image) {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", image);

      try {
        const result = await uploadProductImage(formData);

        if (result.success) {
          await createProducts({
            name: values.name,
            price: values.price,
            description: values.description,
            image: result.fileId,
          });
        }
      } catch (error: any) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          autoComplete="off"
        >
          <FormInput
            form={form}
            name="name"
            type="text"
            placeholder="Product Name"
            loading={loading}
          />
          <FormInput
            form={form}
            name="price"
            type="number"
            placeholder="Price in $"
            loading={loading}
          />
          <FormInput
            form={form}
            name="description"
            placeholder="Add Product Description"
            loading={loading}
            textarea={true}
          />
          <input
            type="file"
            title="Upload Product Image"
            onChange={handleFileChange}
            accept="image/jpeg, image/png" // Restrict to JPEG and PNG
          />

          {error && <div className="text-red-500">{error}</div>}
          <Button className="bg-primary px-5 py-2 text-secondary rounded-lg hover:bg-primary">
            {loading ? <FaSpinner className="animate-spin" /> : "Add Product"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
