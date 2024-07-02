import { RegisterValidationType, SignInValidationType } from "@/typings/form";
import * as z from "zod";

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
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password cannot exceed 20 characters"),
});

export const SignInValidation: z.ZodType<SignInValidationType> = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").max(20),
});
