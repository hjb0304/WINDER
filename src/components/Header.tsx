import { ChevronLeft, User } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/img/logo.svg';

function Header() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const pageTitles: { [key: string]: string | ReactNode } = {
    '/my': '마이 페이지',
    '/my/info': '내 정보 수정',
    '/records': '나의 와인 기록',
    '/winelist': '전체 와인 목록',
    '/favorite': '찜 목록',
    '/pairing': '음식 페어링',
  };

  const getPageTitle = (path: string) => {
    if (pageTitles[path]) return pageTitles[path];
    if (path.includes('/records')) return pageTitles['/records'];
    if (path.includes('/winelist')) return pageTitles['/winelist'];
    if (path.includes('/pairing')) return pageTitles['/pairing'];
    return (
      <div className="w-32 mx-auto">
        <img src={logo} alt="WINDER 로고" />
      </div>
    );
  };

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
      <h1 className="title">{getPageTitle(pathname)}</h1>
      <Link to="/my" title="마이 페이지">
        <User />
      </Link>
    </header>
  );
}

export default Header;
