import Card from '@/components/Card';
import Input from '@/components/Input';
import Select from '@/components/Select';
import type { APIWineInfo, WineInfo } from '@/type/wine';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

function WineListPage() {
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
  const observer = useRef<IntersectionObserver | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const PER_PAGE = 10;
  const wineTypes = ['reds', 'whites', 'rose', 'sparkling'];

  const [allData, setAllData] = useState<WineInfo[]>([]);
  const [data, setData] = useState<WineInfo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [wineOption, setWineOption] = useState(wineOptions[0].value);
  const [sortOption, setSortOption] = useState(sortOptions[0].value);
  const [search, setSearch] = useState('');

  // 와인 데이터 불러오기

  const getWineData = async () => {
    try {
      setLoading(true);
      const res = await Promise.all(
        wineTypes.map((type) =>
          axios.get<APIWineInfo[]>(`https://api.sampleapis.com/wines/${type}`),
        ),
      );
      const newData = res.flatMap((res, i) =>
        res.data.map(
          (data: APIWineInfo): WineInfo => ({
            id: `${wineTypes[i]}-${data.id}`,
            name: data.wine,
            country: data.location.split('\n')[0],
            imgURL: data.image,
            rating: data.rating.average,
            type: wineTypes[i],
          }),
        ),
      );
      setAllData(newData.sort((a, b) => a.name.localeCompare(b.name)));
      // 첫 10개 데이터만 보여주기
      setData(newData.slice(0, PER_PAGE));
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWineData();
  }, []);

  // 마지막 요소 감지
  useEffect(() => {
    // 데이터 업데이트 시 기존 observer 해제
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) observer.current.observe(observerRef.current);

    // 컴포넌트 언마운트 시 observer 해제
    return () => observer.current?.disconnect();
  }, [data]);

  // 다음 데이터 목록 불러오기
  useEffect(() => {
    // 조건 설정 시 전체 데이터 변경

    // 필터링
    let resultData =
      wineOption !== 'all' ? allData.filter((item) => item.type === wineOption) : allData;

    // 정렬
    resultData =
      sortOption === 'rating'
        ? [...resultData].sort((a, b) => Number(b.rating) - Number(a.rating))
        : resultData;

    // 검색
    resultData =
      search.trim() !== ''
        ? resultData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
        : resultData;

    setData(resultData.slice(0, page * PER_PAGE));
  }, [page, wineOption, sortOption, search]);

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
              ref={i === data.length - 1 ? observerRef : null}
              imgURL={item.imgURL}
              name={item.name}
              rating={item.rating}
            ></Card>
          ))}
          <div></div>
        </section>
      )}
    </div>
  );
}

export default WineListPage;
