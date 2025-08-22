import Card from '@/components/Card';
import Input from '@/components/Input';
import Select from '@/components/Select';
import type { APIWineInfo, WineInfo } from '@/type/wine';
import axios from 'axios';
import { useEffect, useState } from 'react';

function WineListPage() {
  const [data, setData] = useState<WineInfo[] | null>();

  const wineOptions = ['전체', '레드', '화이트', '로제', '스파클링'];
  const sortOptions = ['최신순', '이름순'];

  const getWineData = async (type: string) => {
    try {
      const res = await axios.get<APIWineInfo[]>(`https://api.sampleapis.com/wines/${type}`);
      const newData = res.data?.map(
        (data: APIWineInfo): WineInfo => ({
          id: data.id,
          name: data.wine,
          country: data.location.split('')[0],
          imgURL: data.image,
          rating: data.rating.average,
        }),
      );

      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWineData('reds');
  }, []);

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
        {data?.map((item) => (
          <Card key={item.id} imgURL={item.imgURL} name={item.name} rating={item.rating}></Card>
        ))}
      </section>
    </>
  );
}

export default WineListPage;
