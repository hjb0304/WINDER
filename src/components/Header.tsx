import { ChevronLeft, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center h-[72px] px-4 sticky bg-white">
      <button
        className="cursor-pointer"
        onClick={() => navigate(-1)}
        type="button"
        aria-label="뒤로 가기"
      >
        <ChevronLeft />
      </button>
      <h1 className="title">Header</h1>
      <Link to="/my" title="마이 페이지">
        <User />
      </Link>
    </header>
  );
}

export default Header;
