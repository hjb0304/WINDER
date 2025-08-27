import { signUp } from '@/api/auth';
import logo from '@/assets/img/logo.svg';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import { useAuthStore } from '@/store/authStore';
import type { ApiError } from '@/type/api';
import { CameraIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
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
  // const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignUpForm>();

  // 이메일 중복 확인
  // const handleEmailCheck = async () => {
  //   try {
  //     console.log('체크할 이메일:', watch('email').trim());
  //     const methods = await fetchSignInMethodsForEmail(auth, watch('email'));
  //     console.log('반환값:', methods);

  //     if (methods.length > 0) {
  //       setModalMessage('이미 가입된 이메일입니다.');
  //       setIsModalOpen(true);
  //       setIsChecked(false);
  //     } else {
  //       setModalMessage('사용할 수 있는 이메일입니다.');
  //       setIsModalOpen(true);
  //       setIsChecked(true);
  //     }
  //   } catch (error) {
  //     setModalMessage('올바른 이메일 형식이 아닙니다.');
  //     setIsModalOpen(true);
  //     setIsChecked(false);
  //   }
  // };

  // 회원가입
  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    // if (!isChecked) {
    //   setModalMessage('이메일 중복 확인을 해주세요.');
    //   setIsModalOpen(true);
    //   return;
    // }

    try {
      const user = await signUp({
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        photoURL: '',
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
          <div className="rounded-full bg-lightgray w-[100px] aspect-square flex justify-center items-center mx-auto">
            <CameraIcon color="var(--color-gray)" fill="white" size={48} strokeWidth={1} />
          </div>
          <label htmlFor="email" className="inline-block mb-2 label">
            이메일
          </label>
          <div className="flex gap-2">
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
              // onChange={() => setIsChecked(false)}
            />
            {/* <Button className="!h-11 shrink-0" onClick={handleEmailCheck}>
              중복 확인
            </Button> */}
          </div>
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
        handleConfirm={user ? () => navigate('/home') : () => setIsModalOpen(false)}
        hideCancelButton
      ></Modal>
    </>
  );
}

export default SignUpPage;
