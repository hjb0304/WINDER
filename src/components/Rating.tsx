import { Star, StarHalf } from 'lucide-react';

function Rating({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  // 각 별점 아이콘
  const star = (idx: number) =>
    value >= idx + 1 ? (
      <Star fill="var(--color-primary)" color="var(--color-primary)" />
    ) : value >= idx + 0.5 ? (
      <div className="relative">
        <StarHalf fill="var(--color-primary)" color="var(--color-primary)" />
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <Star color="var(--color-lightgray)" className="absolute right-0" />
        </div>
      </div>
    ) : (
      <Star color="var(--color-lightgray)" />
    );

  // 별점 반환
  const stars = Array.from({ length: 5 }, (_, i) => (
    <div key={i} className="relative">
      <button
        className="absolute left-0 w-1/2 h-full cursor-pointer"
        type="button"
        onClick={() => onChange(i + 0.5)}
        aria-label={i + '점'}
      ></button>
      <button
        className="absolute right-0 w-1/2 h-full cursor-pointer"
        type="button"
        onClick={() => onChange(i + 1)}
        aria-label={i + 0.5 + '점'}
      ></button>
      <div className="pointer-events-none">{star(i)}</div>
    </div>
  ));

  return (
    <div className="flex gap-1" aria-label={`별점 ${value}/5점`}>
      {stars}
    </div>
  );
}

export default Rating;
