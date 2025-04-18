"use client";

import {useState} from "react";
import FormField from "./FormField";
import {validateForm} from "@/lib/validation";
import {type SignupFormValues, type SignupFormErrors} from "@/lib/validation";

export default function SignupForm() {
  const [values, setValues] = useState<SignupFormValues>({
    email: "",
    password: "",
    confirmPassword: "",
    petName: "",
    petWeight: "",
    petIdealWeight: "",
  });

  const [errors, setErrors] = useState<SignupFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues((prev) => ({...prev, [name]: value}));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name} = e.target;
    const fieldErrors = validateForm(values);
    setErrors((prev) => ({
      ...prev,
      [name as keyof SignupFormValues]:
        fieldErrors[name as keyof SignupFormValues],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(values);
    const hasErrors = Object.keys(validationErrors).length > 0;
    setErrors(validationErrors);

    if (!hasErrors) {
      console.log("✅ Form submitted:", values);
    } else {
      console.log("❌ Validation errors:", validationErrors);
    }
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />
        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
        />
        <FormField
          label="Pet Name"
          name="petName"
          type="text"
          value={values.petName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.petName}
        />
        <FormField
          label="Pet Weight (lbs)"
          name="petWeight"
          type="number"
          value={values.petWeight}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.petWeight}
        />
        <FormField
          label="Ideal Pet Weight (lbs)"
          name="petIdealWeight"
          type="number"
          value={values.petIdealWeight ?? ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.petIdealWeight}
        />
        <button
          type="submit"
          className="cursor-pointer w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
