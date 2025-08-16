import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import FavoritePage from './pages/favorite';
import MyPage from './pages/my';
import PairingPage from './pages/pairing';
import WineListPage from './pages/wineList';
import RecordsPage from './pages/records';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/my" element={<MyPage />}></Route>
      <Route path="/records" element={<RecordsPage />}></Route>
      <Route path="/favorite" element={<FavoritePage />}></Route>
      <Route path="/winelist" element={<WineListPage />}></Route>
      <Route path="/pairing" element={<PairingPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
