import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

type PhoneFieldProps = {
  control: any;
  name: string;
  label: string;
  required?: boolean;
  errors: any;
  className?: string;
  defaultCountry?: string;
};

export const PhoneField = ({
  control,
  name,
  label,
  required = false,
  errors,
  className = '',
  defaultCountry = 'in',
}: PhoneFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={required ? { required: 'This field is required' } : {}}
      render={({ field }) => (
        <div className={`flex flex-col ${className}`}>
          <label className={`text-sm font-medium text-gray-700 mb-1 ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>
            {label}
          </label>
          <PhoneInput
            {...field}
            country={defaultCountry}
            onChange={field.onChange}
            inputProps={{
              name: String(name),
              required: required,
            }}
            inputClass="!w-full !px-4 !py-2 !border !border-gray-300 !rounded-lg !text-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-blue-300 focus:!border-blue-400 transition"
            containerClass="!w-full"
            buttonClass="!border-gray-300 !bg-gray-50 !rounded-l-lg"
            dropdownClass="!border-gray-300 !rounded-lg !shadow-lg"
          />
          {errors[name] && <span className="text-red-500 text-xs mt-1 animate-pulse">{errors[name].message}</span>}
        </div>
      )}
    />
  );
};