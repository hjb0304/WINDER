import { useAuthStore } from '@/store/authStore';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/home'));
const FavoritePage = lazy(() => import('@/pages/favorite'));
const MyPage = lazy(() => import('@/pages/my'));
const PairingPage = lazy(() => import('@/pages/pairing'));
const WineListPage = lazy(() => import('@/pages/wineList'));
const RecordsPage = lazy(() => import('@/pages/records'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const SignUpPage = lazy(() => import('@/pages/auth/SignUpPage'));
const WineDetail = lazy(() => import('@/pages/wineList/Detail'));
const RecordsNewPage = lazy(() => import('@/pages/records/New'));
const RecordsDetailPage = lazy(() => import('@/pages/records/Detail'));
const MyInfoPage = lazy(() => import('@/pages/my/Info'));
const PairingResultsPage = lazy(() => import('@/pages/pairing/Results'));
const EmptyPage = lazy(() => import('@/pages/empty'));

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
