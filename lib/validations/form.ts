import { SignUpValidationType } from "@/typings/form";
import * as z from "zod";

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
  email: z.string().email().min(10).max(100),
  password: z.string().min(6).max(20),
});
