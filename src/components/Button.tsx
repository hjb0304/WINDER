import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: 'sm' | 'lg';
  outlined?: boolean;
  full?: boolean;
  submit?: boolean;
  to?: string;
}

function Button({
  children,
  size,
  outlined,
  full,
  submit,
  disabled,
  className,
  onClick,
  to,
  ...props
}: ButtonProps) {
  const cursor = !disabled ? 'cursor-pointer' : '';
  const width = full ? 'w-full' : '';
  const color = outlined
    ? 'bg-white text-primary border-primary hover:bg-light'
    : disabled
      ? 'bg-lightgray text-subtext border-lightgray'
      : 'bg-primary text-white border-primary hover:bg-hover';

  const height = size === 'sm' ? 'h-10' : 'h-12';

  return (
    <>
      {to ? (
        <Link
          className={`content-center font-medium border-1 px-4 rounded-lg transition ease-in-out duration-200 ${cursor} ${width} ${color} ${height} ${className}`}
          to={to}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`font-medium border-1 px-4 rounded-lg transition ease-in-out duration-200 ${cursor} ${width} ${color} ${height} ${className}`}
          type={submit ? 'submit' : 'button'}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
