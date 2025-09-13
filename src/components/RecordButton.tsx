import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecordButton() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 위로 스크롤 시 버튼 나타남
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        // 아래로 스크롤 시 버튼 숨김
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <button
      type="submit"
      className={`fixed flex items-center justify-center rounded-full bg-primary w-14 aspect-square right-4 bottom-[72px] cursor-pointer shadow-md transition duration-300
          ${!visible ? 'opacity-0 hidden' : 'opacity-100'}`}
      onClick={() => navigate('/records/new')}
      aria-label="와인 기록하기"
      aria-hidden={!visible}
    >
      <Plus color="white" />
    </button>
  );
}

export default RecordButton;
