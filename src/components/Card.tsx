import { Star, X } from 'lucide-react';

interface CardProps {
  imgURL: string;
  name: string;
  type?: string;
  rating?: string;
  date?: string;
  showCloseButton?: boolean;
}

function Card({ imgURL, name, type, rating, date, showCloseButton }: CardProps) {
  return (
    <div className="flex items-center px-3 py-2 bg-white border-b-1 border-lightgray">
      <div className="rounded-lg me-2 w-14 aspect-square shrink-0">
        <img src={imgURL} alt={name} />
      </div>
      <div className="me-auto">
        <p className="mb-0.5">{name}</p>
        <div className="text-xs text-subtext">
          {type ? (
            type
          ) : rating ? (
            <div className="flex items-center gap-1">
              <Star size={16} fill="var(--color-primary)" color="transparent" />
              <span>{rating}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      {date && <p className="text-xs text-subtext">{date}</p>}
      {showCloseButton && (
        <button type="button" className="ms-2">
          <X color="var(--color-gray)" />
        </button>
      )}
    </div>
  );
}

export default Card;
