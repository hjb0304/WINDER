import { auth, db } from '@/lib/firebase';
import type { MyWineInfo } from '@/type/wine';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';

const wineCollection = collection(db, 'wines');

// 와인 기록 등록
export async function recordWine(data: MyWineInfo) {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');
  const docRef = await addDoc(wineCollection, {
    ...data,
    userId: auth.currentUser?.uid,
    createdAt: serverTimestamp(),
  });

  return { id: docRef.id };
}

// 와인 기록 목록 조회
export async function getWineList(): Promise<MyWineInfo[]> {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');
  // id가 일치하는 사용자의 기록 목록만 가져오기
  const q = query(
    collection(db, 'wines'),
    orderBy('createdAt', 'desc'),
    where('userId', '==', auth.currentUser.uid),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as MyWineInfo) }));
}

// 와인 기록 상세 조회
export async function getWine(id: string): Promise<MyWineInfo | null> {
  const docRef = doc(db, 'wines', id);
  const snap = await getDoc(docRef);

  if (!snap) return null;
  return { id: snap.id, ...(snap.data() as MyWineInfo) };
}

// 와인 기록 수정
export async function editWine(id: string, data: Partial<MyWineInfo>) {
  const docRef = doc(db, 'wines', id);
  await updateDoc(docRef, data);
}

// 와인 기록 삭제
export async function deleteWine(id: string) {
  const docRef = doc(db, 'wines', id);
  await deleteDoc(docRef);
}
