import { BookOpenText, Heart, House, List, Utensils } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navItems = [
    { idx: 1, to: '/', label: '홈', icon: <House /> },
    { idx: 2, to: '/records', label: '나의 와인 기록', icon: <List /> },
    { idx: 3, to: '/favorite', label: '찜 목록', icon: <Heart /> },
    { idx: 4, to: '/winelist', label: '전체 와인 목록', icon: <BookOpenText /> },
    { idx: 5, to: '/pairing', label: '음식 페어링', icon: <Utensils /> },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-t-lightgray">
      <ul className="flex h-14">
        {navItems.map((item) => (
          <li className="w-full" key={item.idx}>
            <NavLink
              className={({ isActive }) =>
                `h-full justify-center items-center flex ${isActive ? 'text-primary' : 'text-subtext'}`
              }
              to={item.to}
              title={item.label}
            >
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
