import logo from '@/assets/img/logo.svg';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import { CameraIcon } from 'lucide-react';

function SignUpPage() {
  return (
    <>
      <div className="w-[220px] mx-auto mt-14">
        <img src={logo} alt="WINDER 로고" />
      </div>
      <form>
        <div className="space-y-3">
          <div className="rounded-full bg-lightgray w-[100px] aspect-square flex justify-center items-center mx-auto">
            <CameraIcon color="var(--color-gray)" fill="white" size={48} strokeWidth={1} />
          </div>
          <label htmlFor="email" className="inline-block mb-2 label">
            이메일
          </label>
          <div className="flex gap-2">
            <Input id="email" name="email" placeholder="이메일" />
            <Button className="!h-11 shrink-0">중복 확인</Button>
          </div>
          <Input
            id="password"
            name="password"
            label="비밀번호"
            labelClassName="min-w-[82px] label"
            placeholder="비밀번호"
          />
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            label="비밀번호 확인"
            labelClassName="min-w-[82px] label"
            placeholder="비밀번호 확인"
          />
          <Input
            id="nickname"
            name="nickname"
            label="닉네임"
            labelClassName="min-w-[82px] label"
            placeholder="닉네임"
          />
        </div>
        <div className="my-4 space-y-3">
          <Checkbox id="policy" name="policy" label="개인정보처리방침에 동의합니다." checked />
          <Checkbox id="service" name="service" label="서비스 이용 약관에 동의합니다." />
        </div>
        <Button full submit>
          회원가입
        </Button>
      </form>
    </>
  );
}

export default SignUpPage;
