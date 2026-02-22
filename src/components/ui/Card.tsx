import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}
export function Card({
  className = '',
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
      {...props}>

      {children}
    </div>);

}