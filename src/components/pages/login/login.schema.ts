import { z } from "zod";

export const schema = z.object({
  email: z.string().email("error_email").min(1, "error_email_required"),
  password: z
    .string()
    .min(6, "error_password_min")
    .max(20, "error_password_max")
    .min(1, "error_password_required"),
});
