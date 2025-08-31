import { editInfo, editPassword } from '@/api/auth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import ProfileImgUpload from '@/components/ProfileImgUpload';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface InfoEditForm {
  photoURL: string;
  password: string;
  passwordConfirm?: string;
  nickname: string;
}

function MyInfoPage() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailModalOpen, setIsFailModalOpen] = useState(false);
  const [preview, setPreview] = useState('');

  const navigate = useNavigate();
  const { user } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<InfoEditForm>();

  const onSubmit = async (data: InfoEditForm) => {
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
      await editInfo(user, data.nickname, url);
      if (data.password !== '') {
        await editPassword(user, data.password);
      }
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      setIsFailModalOpen(true);
    }
  };

  useEffect(() => {
    reset({
      photoURL: user?.photoURL ?? '',
      password: '',
      passwordConfirm: '',
      nickname: user?.displayName ?? '',
    });
    if (user?.photoURL) setPreview(user?.photoURL);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
        <Input
          id="password"
          label="비밀번호"
          labelClassName="min-w-[82px] label"
          placeholder="비밀번호"
          {...register('password', {
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
            validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
          errorMessage={errors.passwordConfirm?.message}
          type="password"
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
        <div className="flex justify-end">
          <Button submit size="sm">
            저장
          </Button>
        </div>
      </form>
      <Modal
        isOpen={isSuccessModalOpen}
        message="회원 정보가 저장되었습니다."
        handleCancel={() => setIsSuccessModalOpen(false)}
        handleConfirm={() => {
          setIsSuccessModalOpen(false);
          navigate('/my');
        }}
        hideCancelButton
      ></Modal>
      <Modal
        isOpen={isFailModalOpen}
        message="회원 정보 저장에 실패했습니다."
        handleCancel={() => setIsFailModalOpen(false)}
        handleConfirm={() => {
          setIsFailModalOpen(false);
        }}
        hideCancelButton
      ></Modal>
    </div>
  );
}

export default MyInfoPage;
