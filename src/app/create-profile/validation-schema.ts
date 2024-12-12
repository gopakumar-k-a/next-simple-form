import * as z from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine(
      (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()]/.test(password);

        return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
      },
      { 
        message: "Password must include uppercase, lowercase, number, and special character" 
      }
    )
});

export type ProfileFormData = z.infer<typeof profileSchema>;