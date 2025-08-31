import { getWineList } from '@/api/wine';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Select from '@/components/Select';
import type { MyWineInfo } from '@/type/wine';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

// 와인 데이터 불러오기
const getWineData = async (): Promise<MyWineInfo[]> => {
  return await getWineList();
};

function RecordsPage() {
  const wineOptions = [
    { text: '전체', value: 'all' },
    { text: '레드', value: 'reds' },
    { text: '화이트', value: 'whites' },
    { text: '로제', value: 'rose' },
    { text: '스파클링', value: 'sparkling' },
  ];
  const sortOptions = [
    { text: '최신순', value: 'date' },
    { text: '이름순', value: 'name' },
    { text: '별점순', value: 'rating' },
  ];

  const [wineOption, setWineOption] = useState(wineOptions[0].value);
  const [sortOption, setSortOption] = useState(sortOptions[0].value);
  const [search, setSearch] = useState('');

  const {
    data: data,
    isLoading,
    isError,
  } = useQuery<MyWineInfo[], Error>({
    queryKey: ['wineRecords'],
    queryFn: getWineData,
    staleTime: 1000 * 60 * 5,
  });

  // 필터링
  const filteredList = useMemo(() => {
    let resultData = wineOption !== 'all' ? data?.filter((item) => item.type === wineOption) : data;

    if (!resultData) return [];

    // 정렬
    resultData =
      sortOption === 'name'
        ? [...resultData].sort((a, b) => a.name.localeCompare(b.name))
        : sortOption === 'rating'
          ? [...resultData].sort((a, b) => Number(b.rating) - Number(a.rating))
          : resultData;

    // 검색
    resultData =
      search.trim() !== ''
        ? resultData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
        : resultData;

    return resultData;
  }, [data, wineOption, sortOption, search]);

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
      {isLoading ? (
        <p>데이터를 불러오는 중입니다.</p>
      ) : isError ? (
        <p>데이터를 불러올 수 없습니다.</p>
      ) : (
        <section>
          {filteredList?.map((item) => (
            <Card
              key={item.id}
              imgURL={item.imgURL?.[0] ?? ''}
              name={item.name}
              rating={item.rating}
              url={`${item.id}`}
              date={item.date}
            ></Card>
          ))}
        </section>
      )}
    </div>
  );
}

export default RecordsPage;
