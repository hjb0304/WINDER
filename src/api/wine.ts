import { auth, db } from '@/lib/firebase';
import type { MyWineInfo } from '@/type/wine';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';

const wineCollection = collection(db, 'wines');

// 등록
export async function recordWine(data: MyWineInfo) {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');
  const docRef = await addDoc(wineCollection, {
    ...data,
    userId: auth.currentUser?.uid,
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id };
}

// 전체 조회
export async function getWineList(): Promise<MyWineInfo[]> {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');
  // id가 일치하는 사용자의 기록 목록만 가져오기
  const q = query(
    collection(db, 'wines'),
    orderBy('createdAt', 'asc'),
    where('userId', '==', auth.currentUser.uid),
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as MyWineInfo) }));
}
