import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

function FavoriteButton({ onClick, isFavorite }: { onClick: () => void; isFavorite: boolean }) {
  return (
    <motion.button
      className={`absolute flex items-center justify-center w-10 rounded-full cursor-pointer aspect-square ${isFavorite ? 'bg-primary' : 'bg-white border-1 border-lightgray'} bottom-2 right-2`}
      type="button"
      onClick={onClick}
      aria-label={isFavorite ? '찜하기 해제' : '찜하기'}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Heart color="transparent" fill={isFavorite ? 'white' : 'var(--color-lightgray)'} />
    </motion.button>
  );
}

export default FavoriteButton;
