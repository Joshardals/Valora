import {
  ProductValidationType,
  RegisterValidationType,
  SignInValidationType,
  WaitListValidationType,
} from "@/typings/form";
import * as z from "zod";

// Product Validation
export const ProductValidation: z.ZodType<ProductValidationType> = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be a positive number"),
  description: z.string().optional(),
  imageUrl: z.string().url("Image URL must be a valid URL").optional(),
});

// Auth Validations
export const RegisterValidation: z.ZodType<RegisterValidationType> = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters long")
    .min(1, "First name is required")
    .max(100, "First name cannot exceed 100 characters"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters long")
    .max(100, "Last name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Invalid email format")
    .min(10, "Email must be at least 10 characters long")
    .max(100, "Email cannot exceed 100 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot exceed 20 characters"),
});

export const SignInValidation: z.ZodType<SignInValidationType> = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").max(20),
});

export const WaitListValidation: z.ZodType<WaitListValidationType> = z.object({
  email: z
    .string()
    .email("This field is required")
    .min(10, "Email must be at least 10 characters long")
    .max(100, "Email cannot exceed 100 characters"),
});
