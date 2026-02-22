import React from 'react';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}
export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nkp-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    primary: 'bg-nkp-blue text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-nkp-dark text-white hover:bg-nkp-navy shadow-sm',
    outline: 'border-2 border-nkp-blue text-nkp-blue hover:bg-nkp-light',
    ghost: 'text-nkp-dark hover:bg-gray-100',
    white: 'bg-white text-nkp-blue hover:bg-gray-100 shadow-md font-semibold',
    'outline-white':
    'border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm'
  };
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}>

      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>);

}