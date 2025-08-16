import { ChevronLeft, User } from 'lucide-react';

function Header() {
  return (
    <header className="flex justify-between items-center h-[72px] px-4 sticky bg-white">
      <button>
        <ChevronLeft />
      </button>
      <h1 className="title">Header</h1>
      <button>
        <User />
      </button>
    </header>
  );
}

export default Header;
