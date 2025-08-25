import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  messageClassName?: string;
}

function Textarea({
  id,
  name,
  className,
  label,
  labelClassName,
  errorMessage,
  messageClassName,
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={`w-full h-28 p-4 rounded-lg outline-1 outline-lightgray bg-white ${className}`}
        {...props}
      ></textarea>
      {<p className={`text-xs text-error ${messageClassName}`}>{errorMessage}</p>}
    </div>
  );
}

export default Textarea;
