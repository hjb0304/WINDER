import Card from '@/components/Card';
import Input from '@/components/Input';
import Select from '@/components/Select';

function WineListPage() {
  const wineOptions = ['전체', '레드', '화이트', '로제', '스파클링'];
  const sortOptions = ['최신순', '이름순'];

  return (
    <>
      <section>
        <div className="flex gap-2 mb-2">
          <Select options={wineOptions} id="wine" name="wine" label="와인 종류" />
          <Select options={sortOptions} id="sort" name="sort" label="정렬 기준" />
        </div>
        <Input
          id="search"
          name="search"
          placeholder="검색어를 입력해주세요."
          label="검색"
          labelClassName="sr-only"
        />
      </section>
      <section>
        <Card name="Catena Malbec" type="Malbec" date="2025-08-15" showCloseButton></Card>
      </section>
    </>
  );
}

export default WineListPage;
