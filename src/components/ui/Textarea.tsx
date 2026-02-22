import React from 'react';
interface TextareaProps extends
  React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export function Textarea({
  className = '',
  label,
  error,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || props.name;
  return (
    <div className="w-full">
      {label &&
      <label
        htmlFor={textareaId}
        className="block text-sm font-medium text-gray-700 mb-1">

          {label}
        </label>
      }
      <textarea
        id={textareaId}
        className={`
          flex min-h-[120px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nkp-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
          ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
          ${className}
        `}
        {...props} />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>);

}