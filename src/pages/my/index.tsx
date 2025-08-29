import Button from '@/components/Button';
import SubTitle from '@/components/SubTitle';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@/components/Modal';
import ProfileImgUpload from '@/components/ProfileImgUpload';
import { logout } from '@/api/auth';

function MyPage() {
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
        handleWithdraw();
      },
    },
    withdrawSuccess: {
      message: '회원 탈퇴되었습니다.',
      confirm: () => {
        setIsModalOpen(false);
      },
    },
    withdrawFail: {
      message: '회원 탈퇴에 실패했습니다.',
      confirm: () => {
        setIsModalOpen(false);
      },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<keyof typeof modalTypes | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  const handleWithdraw = () => {};

  return (
    <>
      <section className="flex flex-col items-center gap-2">
        <ProfileImgUpload />
        <SubTitle>송은지</SubTitle>
        <span>dmswl0094@naver.com</span>
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
            <Link to="info">
              <ChevronRight color="var(--color-gray)" />
            </Link>
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
          <button className="block mx-auto cursor-pointer" type="button">
            회원 탈퇴
          </button>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        handleCancel={() => setIsModalOpen(false)}
        handleConfirm={modalType ? modalTypes[modalType].confirm : () => {}}
        message={modalType ? modalTypes[modalType].message : ''}
      ></Modal>
    </>
  );
}

export default MyPage;
