import { BottleWine, Star, X } from 'lucide-react';
import type { RefObject } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  imgURL: string;
  name: string;
  type?: string;
  rating?: number;
  date?: string;
  showCloseButton?: boolean;
  ref?: RefObject<HTMLAnchorElement | null> | null;
  url: string;
}

function Card({ imgURL, name, type, rating, date, showCloseButton, ref, url }: CardProps) {
  return (
    <Link
      to={url}
      className="flex items-center px-3 py-2 bg-white border-b-1 border-lightgray"
      ref={ref}
    >
      <div className="rounded-lg me-2 w-14 aspect-square shrink-0 overflow-hidden">
        {imgURL ? (
          <img
            src={imgURL}
            alt={name}
            className={imgURL.includes('vivino') ? 'object-contain' : ''}
            loading="lazy"
            width={56}
            height={56}
          />
        ) : (
          <div className="bg-lightgray h-full flex justify-center items-center">
            <BottleWine color="var(--color-subtext)" />
          </div>
        )}
      </div>
      <div className="me-auto">
        <p className="mb-0.5">{name}</p>
        <div className="text-xs text-subtext">
          {type ? (
            type
          ) : rating ? (
            <div className="flex items-center gap-1">
              <Star size={15} fill="var(--color-primary)" color="transparent" />
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
    </Link>
  );
}

export default Card;
