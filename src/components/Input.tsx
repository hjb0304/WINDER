import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  messageClassName?: string;
}

function Input({
  id,
  name,
  className,
  label,
  labelClassName,
  errorMessage,
  messageClassName,
  type,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={`w-full px-4 rounded-lg outline-1 outline-lightgray h-11 bg-white ${className}`}
        type={type}
        {...props}
      ></input>
      {<p className={`text-xs text-error ${messageClassName}`}>{errorMessage}</p>}
    </div>
  );
}

export default Input;
