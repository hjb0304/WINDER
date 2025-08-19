import { Check } from 'lucide-react';
import type { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  errorMessage?: string;
}

function Checkbox({
  id,
  name,
  label,
  className,
  checked,
  errorMessage,
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <>
      {' '}
      <div className="relative flex items-center gap-2">
        <input
          type="checkbox"
          id={id}
          name={name}
          {...props}
          className={`appearance-none outline-1 w-5 aspect-square rounded-sm bg-white ${checked ? 'outline-primary' : 'outline-lightgray'} ${className}`}
          checked={!!checked}
          onChange={onChange}
        ></input>
        {checked && (
          <Check
            color="var(--color-primary)"
            size={16}
            strokeWidth={3}
            className="absolute left-0.5"
          />
        )}
        <label htmlFor={id}>{label}</label>
      </div>
      {<p className="text-xs text-error">{errorMessage}</p>}
    </>
  );
}

export default Checkbox;
