// components/CountrySelect.tsx
import { Controller } from 'react-hook-form';
import { countries } from '@/lib/countryList';

type Props = {
  control: any;
  name: string;
  label: string;
  required?: boolean;
  errors: any;
};

export const CountrySelect = ({ control, name, label, required, errors }: Props) => {
  return (
    <div className="flex flex-col">
      <label className={`text-xs font-semibold text-gray-600 ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-200"
          >
            <option value="">Select {label}</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        )}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};
