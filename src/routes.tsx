import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '@/pages/home';
import FavoritePage from '@/pages/favorite';
import MyPage from '@/pages/my';
import PairingPage from '@/pages/pairing';
import WineListPage from '@/pages/wineList';
import RecordsPage from '@/pages/records';
import LoginPage from '@/pages/auth/LoginPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import WineDetail from '@/pages/wineList/Detail';
import RecordsNewPage from '@/pages/records/New';
import RecordsDetailPage from '@/pages/records/Detail';
import MyInfoPage from '@/pages/my/Info';
import PairingResultsPage from '@/pages/pairing/Results';
import { useAuthStore } from '@/store/authStore';

function AppRoutes() {
  const { user } = useAuthStore();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? '/home' : '/login'} replace />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/my" element={<MyPage />}></Route>
      <Route path="/my/info" element={<MyInfoPage />}></Route>
      <Route path="/records" element={<RecordsPage />}></Route>
      <Route path="/records/:id" element={<RecordsDetailPage />}></Route>
      <Route path="/records/new" element={<RecordsNewPage />}></Route>
      <Route path="/records/edit/:id" element={<RecordsNewPage />}></Route>
      <Route path="/favorite" element={<FavoritePage />}></Route>
      <Route path="/winelist" element={<WineListPage />}></Route>
      <Route path="/winelist/:id" element={<WineDetail />}></Route>
      <Route path="/pairing" element={<PairingPage />}></Route>
      <Route path="/pairing/results/:name" element={<PairingResultsPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
