import React from 'react';
import { ChevronDown } from 'lucide-react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
}
export function Select({
  className = '',
  label,
  error,
  id,
  options,
  ...props
}: SelectProps) {
  const selectId = id || props.name;
  return (
    <div className="w-full">
      {label &&
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-gray-700 mb-1">

          {label}
        </label>
      }
      <div className="relative">
        <select
          id={selectId}
          className={`
            flex h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nkp-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
            ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
            ${className}
          `}
          {...props}>

          {options.map((option) =>
          <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )}
        </select>
        <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>);

}