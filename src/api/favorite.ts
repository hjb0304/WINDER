import type { WineInfo } from './../type/wine';
import { auth, db } from '@/lib/firebase';
import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';

// 찜 목록에 와인 추가
export async function addFavorite(data: WineInfo) {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');

  const favRef = doc(db, 'users', auth.currentUser.uid, 'favorites', data.id);
  await setDoc(favRef, { ...data, createdAt: serverTimestamp() });
}

// 찜한 와인 목록 조회
export async function getFavoriteList(): Promise<WineInfo[]> {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');

  // id가 일치하는 사용자의 기록 목록만 가져오기
  const favCol = collection(db, 'users', auth.currentUser.uid, 'favorites');
  const snapshot = await getDocs(favCol);

  return snapshot.docs.map((doc) => ({ docId: doc.id, ...(doc.data() as WineInfo) }));
}

// 찜 목록에서 와인 삭제
export async function deleteFavorite(wineId: string) {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');

  const favRef = doc(db, 'users', auth.currentUser.uid, 'favorites', wineId);
  await deleteDoc(favRef);
}
