import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import logo from '@/assets/img/logo.svg';
import Input from '@/components/Input';
import kakaoLogo from '@/assets/img/kakao_logo.svg';
import naverLogo from '@/assets/img/naver_logo.svg';
import { useAuthStore } from '@/store/authStore';
import { login } from '@/api/auth';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { UserInfo } from '@/type/user';
import type { ApiError } from '@/type/api';
import { useState } from 'react';
import Modal from '@/components/Modal';

function LoginPage() {
  // 아이디/비밀번호 오류
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  // 로그인
  const onSubmit: SubmitHandler<UserInfo> = async (data) => {
    try {
      const user = await login(data);
      if (user) {
        setUser(user);
        navigate('/home');
      }
    } catch (error) {
      const e = error as ApiError;

      if (e.code === 'user-not-found' || e.code === 'invalid-credential') {
        setError('이메일 또는 비밀번호가 올바르지 않습니다.');
      } else {
        setError('로그인에 실패했습니다.');
      }

      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="w-[220px] mx-auto mt-14">
        <img src={logo} alt="WINDER 로고" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          className="mb-4 mt-[1px]"
          placeholder="이메일"
          errorMessage={errors.email?.message}
          messageClassName="mt-[-16px] mb-2"
          {...register('email', { required: '이메일을 입력해주세요.' })}
        />
        <Input
          id="password"
          label="비밀번호"
          className="mb-4"
          placeholder="비밀번호"
          labelClassName="sr-only"
          errorMessage={errors.password?.message}
          messageClassName="mt-[-16px] mb-2"
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
          type="password"
        />
        <Button full submit>
          로그인
        </Button>
      </form>
      <div>
        <Link to="/signup" className="inline-block w-full mb-4 text-center text-subtext">
          계정이 없으신가요? 회원가입
        </Link>
        <div className="flex justify-center gap-2">
          <button
            className="w-12 rounded-lg aspect-square bg-[#FFE812] justify-items-center"
            aria-label="카카오 로그인"
          >
            <img src={kakaoLogo} alt="카카오 로고" />
          </button>
          <button
            className="w-12 rounded-lg aspect-square bg-[#02C75A] justify-items-center"
            aria-label="네이버 로그인"
          >
            <img src={naverLogo} alt="네이버 로고"></img>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        message={error}
        handleCancel={() => setIsModalOpen(false)}
        handleConfirm={() => setIsModalOpen(false)}
        hideCancelButton
      ></Modal>
    </>
  );
}

export default LoginPage;
