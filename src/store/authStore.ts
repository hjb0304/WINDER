import { auth } from '@/lib/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { create } from 'zustand';

interface AuthStore {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
}));

// firebase 로그인 상태 감지 -> store에 반영
onAuthStateChanged(auth, (firebaseUser) => {
  useAuthStore.getState().setUser(firebaseUser);
});
