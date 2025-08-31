import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function RecordButton() {
  const navigate = useNavigate();

  return (
    <button
      type="submit"
      className="fixed flex items-center justify-center rounded-full bg-primary w-14 aspect-square right-4 bottom-[72px] cursor-pointer shadow-md"
      onClick={() => navigate('/records/new')}
      aria-label="와인 기록하기"
    >
      <Plus color="white" />
    </button>
  );
}

export default RecordButton;
