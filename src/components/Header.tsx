import { ChevronLeft, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center h-[72px] px-4 sticky bg-white">
      <button onClick={() => navigate(-1)}>
        <ChevronLeft />
      </button>
      <h1 className="title">Header</h1>
      <Link to="/my">
        <User />
      </Link>
    </header>
  );
}

export default Header;
