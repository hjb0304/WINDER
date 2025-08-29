import Button from '@/components/Button';
import SubTitle from '@/components/SubTitle';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@/components/Modal';
import ProfileImgUpload from '@/components/ProfileImgUpload';

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <Button full className="mb-4">
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
        handleConfirm={() => {}}
        message=""
      ></Modal>
    </>
  );
}

export default MyPage;
