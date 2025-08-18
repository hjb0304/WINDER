import { auth } from '@/lib/firebase';
import type { ApiError } from '@/type/api';
import type { UserInfo } from '@/type/user';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// 회원가입
export async function signUp({ email, password, nickname, photoURL }: UserInfo) {
  try {
    // 회원 생성
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // 프로필 업데이트 (닉네임, 프로필 사진)
    await updateProfile(userCredential.user, { displayName: nickname, photoURL: photoURL });
    // 회원 정보 반환
    return userCredential.user;
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}

// 로그인
export async function login({ email, password }: UserInfo) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}

// 로그아웃
export async function logout({}) {
  try {
    await signOut(auth);
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}
