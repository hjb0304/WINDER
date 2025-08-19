import logo from '@/assets/img/logo.svg';
import { X } from 'lucide-react';

interface CardProps {
  name: string;
  type: string;
  date: string;
  showCloseButton?: boolean;
}

function Card({ name, type, date, showCloseButton }: CardProps) {
  return (
    <div className="flex items-center px-3 py-2 bg-white border-b-1 border-lightgray">
      <div className="rounded-lg me-2 w-14 aspect-square">
        <img src={logo} alt="" />
      </div>
      <div className="me-auto">
        <p className="mb-0.5">{name}</p>
        <p className="text-xs text-subtext">{type}</p>
      </div>
      <p className="text-xs text-subtext">{date}</p>
      {showCloseButton && (
        <button type="button" className="ms-2">
          <X color="var(--color-gray)" />
        </button>
      )}
    </div>
  );
}

export default Card;
