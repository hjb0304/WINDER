import { BottleWine, Star, X } from 'lucide-react';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  src: string;
  name: string;
  type?: string;
  rating?: number;
  date?: string;
  showCloseButton?: boolean;
  ref?: RefObject<HTMLAnchorElement | null> | null;
  url: string;
}

function Card({ src, name, type, rating, date, showCloseButton, ref, url }: CardProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 화면에 들어오면 src 할당
          if (entry.isIntersecting) {
            setLoadedSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '72px',
        threshold: 0.1,
      },
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <Link
      to={url}
      className="flex items-center px-3 py-2 bg-white border-b-1 border-lightgray"
      ref={ref}
    >
      <div className="rounded-lg me-2 w-14 aspect-square shrink-0 overflow-hidden">
        {src ? (
          <img
            src={loadedSrc ?? ''}
            alt={name}
            className={src.includes('vivino') ? 'object-contain' : ''}
            width={56}
            height={56}
            ref={imgRef}
          />
        ) : (
          <div className="bg-lightgray h-full flex justify-center items-center">
            <BottleWine color="var(--color-subtext)" aria-label="빈 와인 병" />
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
              <Star size={15} fill="var(--color-primary)" color="transparent" aria-label="별점" />
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
