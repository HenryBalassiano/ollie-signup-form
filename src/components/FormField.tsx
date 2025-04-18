type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-md font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="border border-gray-300 rounded p-2"
      />
      <p className="text-sm min-h-[1.25rem] text-red-500">
        {error || "\u00A0"}
      </p>{" "}
    </div>
  );
}
