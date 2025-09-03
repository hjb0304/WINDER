import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import AppRoutes from '@/routes';
import { useLocation } from 'react-router-dom';
import RecordButton from '@/components/RecordButton';
import { Suspense } from 'react';

function App() {
  const { pathname } = useLocation();

  return (
    <Suspense>
      <div
        className={`min-h-screen ${pathname === '/login' || pathname === '/signup' ? 'bg-[#F9F5F1]' : 'bg-white'}`}
      >
        {pathname !== '/login' && pathname !== '/signup' && <Header />}
        <main
          className={`flex flex-col px-4 pb-[72px] ${pathname === '/login' || pathname === '/signup' ? 'gap-8' : 'gap-6'}`}
        >
          <AppRoutes />
        </main>
        {pathname !== '/login' && pathname !== '/signup' && <Navigation />}
        {pathname !== '/login' && pathname !== '/signup' && !pathname.startsWith('/records/') && (
          <RecordButton />
        )}
      </div>
    </Suspense>
  );
}

export default App;
