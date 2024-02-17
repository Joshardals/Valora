import { RegisterValidationType, SignUpValidationType } from "@/typings/form";
import * as z from "zod";

export const RegisterValidation: z.ZodType<RegisterValidationType> = z.object({
  firstName: z.string().min(3).max(100),
  lastName: z.string().min(3).max(100),
  email: z.string().email().min(10).max(100),
  password: z.string().min(6).max(20),
});

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
  email: z.string().email().min(10).max(100),
  password: z.string().min(6).max(20),
});
