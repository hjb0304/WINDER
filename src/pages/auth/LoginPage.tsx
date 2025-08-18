import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import logo from '@/assets/img/logo.svg';
import Input from '@/components/Input';
import kakaoLogo from '@/assets/img/kakao_logo.svg';
import naverLogo from '@/assets/img/naver_logo.svg';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[220px] mx-auto mt-14">
        <img src={logo} alt="WINDER 로고" />
      </div>
      <form>
        <Input id="email" name="email" className="mb-2 mt-[1px]" placeholder="이메일" />
        <Input
          id="password"
          name="password"
          label="비밀번호"
          className="mb-4"
          placeholder="비밀번호"
          labelClassName="sr-only"
        />
        <Button full onClick={() => navigate('/')} submit>
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
    </>
  );
}

export default LoginPage;
