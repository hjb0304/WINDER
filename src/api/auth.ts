import { auth } from '@/lib/firebase';
import type { ApiError } from '@/type/api';
import type { UserInfo } from '@/type/user';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updatePassword,
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
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}

// 회원 탈퇴
export async function deleteAccount(user: typeof auth.currentUser) {
  try {
    if (user) await deleteUser(user);
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}

// 프로필 이미지 변경
export async function editProfileImg(user: typeof auth.currentUser, newImgURL: string) {
  try {
    if (user) await updateProfile(user, { photoURL: newImgURL });
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}

// 비밀번호 변경
export async function editPassword(user: typeof auth.currentUser, newPassword: string) {
  try {
    if (user) await updatePassword(user, newPassword);
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}

// 닉네임 변경
export async function editNickname(user: typeof auth.currentUser, newNickname: string) {
  try {
    if (user) await updateProfile(user, { displayName: newNickname });
  } catch (error) {
    const e = error as ApiError;
    throw e;
  }
}
