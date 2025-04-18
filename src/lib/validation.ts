import { z } from "zod"

export const signupFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Enter a valid email address"),

    password: z
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
        "Password must be at least 8 characters and include a letter, number, and special character"
      ),

    confirmPassword: z
      .string()
      .nonempty("Please confirm your password"),

    petName: z.string().nonempty("Pet name is required"),

    petWeight: z
      .string()
      .nonempty("Pet weight is required")
      .refine((val) => {
        const weight = parseFloat(val)
        return !isNaN(weight) && weight >= 3 && weight <= 180
      }, {
        message: "Weight must be between 3 and 180 lbs"
      }),

    petIdealWeight: z
      .string()
      .optional()
      .refine((val) => {
        if (!val) return true
        const weight = parseFloat(val)
        return !isNaN(weight) && weight >= 3 && weight <= 180
      }, {
        message: "Ideal weight must be between 3 and 180 lbs"
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  })

  export type SignupFormValues = z.infer<typeof signupFormSchema>
  export type SignupFormErrors = Partial<Record<keyof SignupFormValues, string>>
  
export function validateForm(values: SignupFormValues) {
  const result = signupFormSchema.safeParse(values)

  if (!result.success) {
    const errors: Partial<Record<keyof SignupFormValues, string>> = {}

    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof SignupFormValues
      errors[field] = issue.message
    }

    return errors
  }

  return {}
}
