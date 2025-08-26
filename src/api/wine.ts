import { auth, db } from '@/lib/firebase';
import type { MyWineInfo } from '@/type/wine';
import { addDoc, collection } from 'firebase/firestore';

const wineCollection = collection(db, 'wines');

// 등록
export async function recordWine(data: MyWineInfo) {
  if (!auth.currentUser) throw new Error('로그인이 필요합니다.');
  const docRef = await addDoc(wineCollection, { ...data, userId: auth.currentUser?.uid });
  return { id: docRef.id };
}
