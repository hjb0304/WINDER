import { ChevronDown } from 'lucide-react';
import type { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  id: string;
  name: string;
  label: string;
}

function Select({ options, id, name, label, className }: SelectProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={`min-w-[100px] appearance-none px-4 rounded-lg outline-1 outline-lightgray h-10 bg-white ${className}`}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown color="var(--color-subtext)" className="absolute top-[10px] right-4" size={20} />
    </div>
  );
}

export default Select;
