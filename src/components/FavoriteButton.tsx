import { Heart } from 'lucide-react';

function FavoriteButton({ onClick, isFavorite }: { onClick: () => void; isFavorite: boolean }) {
  return (
    <button
      className={`absolute flex items-center justify-center w-10 rounded-full cursor-pointer aspect-square ${isFavorite ? 'bg-primary' : 'bg-white border-1 border-lightgray'} bottom-2 right-2`}
      type="button"
      onClick={onClick}
      aria-label={isFavorite ? '찜하기 해제' : '찜하기'}
    >
      <Heart color="transparent" fill={isFavorite ? 'white' : 'var(--color-lightgray)'} />
    </button>
  );
}

export default FavoriteButton;
