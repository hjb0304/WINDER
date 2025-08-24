import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/home';
import FavoritePage from '@/pages/favorite';
import MyPage from '@/pages/my';
import PairingPage from '@/pages/pairing';
import WineListPage from '@/pages/wineList';
import RecordsPage from '@/pages/records';
import LoginPage from '@/pages/auth/LoginPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import WineDetail from '@/pages/wineList/Detail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/my" element={<MyPage />}></Route>
      <Route path="/my/info" element={<MyPage />}></Route>
      <Route path="/records" element={<RecordsPage />}></Route>
      <Route path="/records/:id" element={<RecordsPage />}></Route>
      <Route path="/records/new" element={<RecordsPage />}></Route>
      <Route path="/favorite" element={<FavoritePage />}></Route>
      <Route path="/winelist" element={<WineListPage />}></Route>
      <Route path="/winelist/:id" element={<WineDetail />}></Route>
      <Route path="/pairing" element={<PairingPage />}></Route>
      <Route path="/pairing/results" element={<PairingPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
