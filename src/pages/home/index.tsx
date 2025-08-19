import SubTitle from '@/components/subTitle';
import logo from '@/assets/img/logo.svg';
import Card from '@/components/Card';

function HomePage() {
  return (
    <>
      <section className="space-y-2">
        <div className="w-full h-[12.5rem] rounded-lg">
          <img src={logo} alt="" />
        </div>
        <SubTitle>오늘의 추천 와인</SubTitle>
        <p className="text-subtext">Chateau Margaux, France</p>
        <p className="text-subtext">4.5 • 2015</p>
      </section>
      <section>
        <SubTitle>최근 기록</SubTitle>
        <Card name="Catena Malbec" type="Malbec" date="2025-08-15" />
      </section>
    </>
  );
}

export default HomePage;
