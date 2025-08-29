import Button from '@/components/Button';
import SubTitle from '@/components/SubTitle';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import ProfileImgUpload from '@/components/ProfileImgUpload';
import { deleteAccount, logout, reauthenticate } from '@/api/auth';
import { useAuthStore } from '@/store/authStore';
import Input from '@/components/Input';
import type { ApiError } from '@/type/api';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<keyof typeof modalTypes | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmType, setPasswordConfirmType] = useState<'withdraw' | 'editInfo' | null>(
    null,
  );

  const modalTypes = {
    logoutConfirm: {
      message: '로그아웃하시겠습니까?',
      confirm: () => {
        handleLogout();
      },
    },
    logoutFail: {
      message: '로그아웃에 실패했습니다.',
      confirm: () => {
        setIsModalOpen(false);
      },
    },
    withdrawConfirm: {
      message: '정말 탈퇴하시겠습니까?',
      confirm: () => {
        setModalType('passwordConfirm');
        setPasswordConfirmType('withdraw');
      },
    },
    withdrawFail: {
      message: '회원 탈퇴에 실패했습니다.',
      confirm: () => {
        setIsModalOpen(false);
      },
    },
    passwordConfirm: {
      message: '비밀번호를 입력해주세요.',
      contents: (
        <div className="w-full">
          <label htmlFor="password" className="sr-only">
            비밀번호
          </label>
          <Input
            id="password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            full
          />
        </div>
      ),
      confirm:
        passwordConfirmType === 'withdraw' ? () => handleWithdraw() : () => handleReauthenticate(),
    },
    wrongPassword: {
      message: '비밀번호가 일치하지 않습니다.',
      confirm: () => setIsModalOpen(false),
    },
  };

  // 로그아웃
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
      setModalType('logoutFail');
    }
  };

  // 회원 탈퇴
  const handleWithdraw = async () => {
    try {
      await deleteAccount(user, password);
    } catch (error) {
      const e = error as ApiError;

      console.error(error);
      if (e.code === 'missing-password' || 'invalid-credential') {
        setModalType('wrongPassword');
      } else {
        setModalType('withdrawFail');
      }
    }
  };

  // 사용자 재인증
  const handleReauthenticate = async () => {
    try {
      await reauthenticate(user, password);
      navigate('info');
    } catch (error) {
      const e = error as ApiError;

      console.error(error);
      if (e.code === 'missing-password' || 'invalid-credential') {
        setModalType('wrongPassword');
      } else {
        setModalType('withdrawFail');
      }
    }
  };

  return (
    <>
      <section className="flex flex-col items-center gap-2">
        <ProfileImgUpload />
        <SubTitle>{user?.displayName ? user.displayName : ''}</SubTitle>
        <span>{user?.email}</span>
      </section>
      <section>
        <div className="py-4 border-b border-lightgray">
          <h3 className="mb-4 sub-title">환경 설정</h3>
          <div className="flex items-center justify-between">
            <span>다크 모드</span>
            <button
              type="button"
              className={`flex items-center w-10 h-6 p-1 rounded-2xl cursor-pointer transition transform ${isDarkMode ? 'bg-primary' : 'bg-gray'}`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <span
                className={`inline-block w-4 h-4 bg-white rounded-full transition transform ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`}
              ></span>
            </button>
          </div>
        </div>
        <div className="py-4">
          <h3 className="mb-4 sub-title">계정 관리</h3>
          <div className="flex items-center justify-between">
            <span>내 정보 수정</span>
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                setModalType('passwordConfirm');
                setIsModalOpen(true);
                setPasswordConfirmType('editInfo');
              }}
            >
              <ChevronRight color="var(--color-gray)" />
            </button>
          </div>
        </div>
        <div>
          <Button
            full
            className="mb-4"
            onClick={() => {
              setModalType('logoutConfirm');
              setIsModalOpen(true);
            }}
          >
            로그아웃
          </Button>
          <button
            className="block mx-auto cursor-pointer"
            type="button"
            onClick={() => {
              setModalType('withdrawConfirm');
              setIsModalOpen(true);
            }}
          >
            회원 탈퇴
          </button>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        handleCancel={() => setIsModalOpen(false)}
        handleConfirm={modalType ? modalTypes[modalType].confirm : () => {}}
        message={modalType ? modalTypes[modalType].message : ''}
        hideCancelButton={modalType === 'passwordConfirm'}
      >
        {modalType === 'passwordConfirm' && modalTypes[modalType]?.contents}
      </Modal>
    </>
  );
}

export default MyPage;
