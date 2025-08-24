import Card from '@/components/Card';
import Input from '@/components/Input';
import Select from '@/components/Select';
import type { WineInfo } from '@/type/wine';
import { useEffect, useState } from 'react';

function RecordsPage() {
  const wineOptions = [
    { text: '전체', value: 'all' },
    { text: '레드', value: 'reds' },
    { text: '화이트', value: 'whites' },
    { text: '로제', value: 'rose' },
    { text: '스파클링', value: 'sparkling' },
  ];
  const sortOptions = [
    { text: '이름순', value: 'name' },
    { text: '별점순', value: 'rating' },
  ];

  const [data, setData] = useState<WineInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [wineOption, setWineOption] = useState(wineOptions[0].value);
  const [sortOption, setSortOption] = useState(sortOptions[0].value);
  const [search, setSearch] = useState('');

  // 와인 데이터 불러오기
  const getWineData = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWineData();
  }, []);

  return (
    <div>
      <section>
        <div className="flex gap-2 mb-2">
          <Select
            options={wineOptions}
            id="wine"
            name="wine"
            label="와인 종류"
            onChange={(e) => setWineOption(e.target.value)}
          />
          <Select
            options={sortOptions}
            id="sort"
            name="sort"
            label="정렬 기준"
            onChange={(e) => setSortOption(e.target.value)}
          />
        </div>
        <Input
          id="search"
          name="search"
          placeholder="검색어를 입력해주세요."
          label="검색"
          labelClassName="sr-only"
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      {loading ? (
        <p>데이터를 불러오는 중입니다.</p>
      ) : (
        <section>
          {data?.map((item, i) => (
            <Card
              key={item.id}
              imgURL={item.imgURL}
              name={item.name}
              rating={item.rating}
              url={`${item.id}`}
            ></Card>
          ))}
          <div></div>
        </section>
      )}
    </div>
  );
}

export default RecordsPage;
