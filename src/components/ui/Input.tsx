import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({
  className = '',
  label,
  error,
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label &&
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-1">

          {label}
        </label>
      }
      <input
        id={inputId}
        className={`
          flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nkp-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
          ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
          ${className}
        `}
        {...props} />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>);

}