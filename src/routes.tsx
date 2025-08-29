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
import EmptyPage from '@/pages/empty';

function AppRoutes() {
  const { user } = useAuthStore();

  // 로그인되지 않은 경우
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="*" element={<Navigate to="/login" replace />}></Route>
      </Routes>
    );
  }

  // 로그인된 경우
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Navigate to="/" replace />}></Route>
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
      <Route path="*" element={<EmptyPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
