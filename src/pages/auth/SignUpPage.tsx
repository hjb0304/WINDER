import { signUp } from '@/api/auth';
import logo from '@/assets/img/logo.svg';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import ProfileImgUpload from '@/components/ProfileImgUpload';
import { useAuthStore } from '@/store/authStore';
import type { ApiError } from '@/type/api';
import axios from 'axios';
import { useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SignUpForm {
  email: string;
  password: string;
  passwordConfirm?: string;
  nickname: string;
  photoURL?: string;
  policy: boolean;
  service: boolean;
}

function SignUpPage() {
  const [modalMessage, setModalMessage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preview, setPreview] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<SignUpForm>();

  // 회원가입
  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    let url = data.photoURL;

    if (!url) return '';
    // 이미 업로드된(string)인 경우 그대로 사용
    if (typeof url === 'string') return url;

    const formData = new FormData();
    formData.append('file', url);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } },
      );
      // 변환 URL 생성
      const newUrl = res.data.secure_url.replace(
        '/upload/',
        '/upload/c_fill,w_100,h_100,f_webp,q_auto:good/',
      );
      url = newUrl;
    } catch (error) {
      console.error('업로드에 실패했습니다.', error);
      url = '';
    }

    try {
      const user = await signUp({
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        photoURL: url,
      });
      if (user) {
        setUser(user);
        setModalMessage('회원가입이 완료되었습니다.');
        setIsModalOpen(true);
      }
    } catch (error) {
      const e = error as ApiError;

      if (e.code === 'auth/email-already-in-use') {
        setModalMessage('이미 가입된 이메일입니다.');
      } else {
        setModalMessage('회원가입에 실패했습니다.');
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
        <div className="space-y-3">
          <Controller
            name="photoURL"
            control={control}
            render={({ field }) => (
              <ProfileImgUpload
                url={preview}
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  // RHF에 file 객체 저장
                  field.onChange(file);

                  // 이미지 미리보기 표시
                  if (file) {
                    const newPreview = URL.createObjectURL(file);
                    setPreview(newPreview);
                  }
                }}
              />
            )}
          ></Controller>
          <label htmlFor="email" className="inline-block mb-2 label">
            이메일
          </label>
          <Input
            id="email"
            placeholder="이메일"
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
            errorMessage={errors.email?.message}
          />
          <Input
            id="password"
            label="비밀번호"
            labelClassName="min-w-[82px] label"
            placeholder="비밀번호"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: '비밀번호는 6자 이상이며, 영문과 숫자를 모두 포함해야 합니다.',
              },
            })}
            errorMessage={errors.password?.message}
            type="password"
          />
          <Input
            id="passwordConfirm"
            label="비밀번호 확인"
            labelClassName="min-w-[82px] label"
            placeholder="비밀번호 확인"
            {...register('passwordConfirm', {
              required: '비밀번호를 한 번 더 입력해주세요.',
              validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
            errorMessage={errors.passwordConfirm?.message}
          />
          <Input
            id="nickname"
            label="닉네임"
            labelClassName="min-w-[82px] label"
            placeholder="닉네임"
            {...register('nickname', {
              required: '닉네임을 입력해주세요.',
            })}
            errorMessage={errors.nickname?.message}
          />
        </div>
        <div className="my-4 space-y-3">
          <Checkbox
            id="policy"
            label="개인정보처리방침에 동의합니다."
            {...register('policy', { required: '개인정보처리방침에 동의해주세요.' })}
            errorMessage={errors.policy?.message}
            checked={watch('policy')}
            onChange={(e) => {
              setValue('policy', e.currentTarget.checked, { shouldValidate: true });
            }}
          />
          <Checkbox
            id="service"
            label="서비스 이용 약관에 동의합니다."
            {...register('service', { required: '서비스 이용 약관에 동의해주세요.' })}
            errorMessage={errors.service?.message}
            checked={watch('service')}
            onChange={(e) => {
              setValue('service', e.currentTarget.checked, { shouldValidate: true });
            }}
          />
        </div>
        <Button full submit>
          회원가입
        </Button>
      </form>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        handleCancel={() => setIsModalOpen(false)}
        handleConfirm={user ? () => navigate('/') : () => setIsModalOpen(false)}
        hideCancelButton
      ></Modal>
    </>
  );
}

export default SignUpPage;
