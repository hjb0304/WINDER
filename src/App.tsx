import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import AppRoutes from '@/routes';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <div
      className={`min-h-screen ${pathname === '/login' || pathname === '/signup' ? 'bg-[#F9F5F1]' : 'bg-white'}`}
    >
      {pathname !== '/login' && pathname !== '/signup' && <Header />}
      <main
        className={`flex flex-col p-4 pt-0 ${pathname === '/login' || pathname === '/signup' ? 'gap-8' : 'gap-6'}`}
      >
        <AppRoutes />
      </main>
      {pathname !== '/login' && pathname !== '/signup' && <Navigation />}
    </div>
  );
}

export default App;
