import { getWineList } from '@/api/wine';
import Card from '@/components/Card';
import SubTitle from '@/components/SubTitle';
import { wineTypes } from '@/pages/wineList';
import type { APIWineInfo, MyWineInfo, WineInfo } from '@/type/wine';
import axios from 'axios';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [wine, setWine] = useState<WineInfo | null>();
  const [recordList, setRecordList] = useState<MyWineInfo[] | null>();
  const [loading, setLoading] = useState(false);

  const name: string[] | null = wine?.name ? wine?.name.split(' ') : null;
  const last = name?.[name.length - 1];

  // 와인 목록 불러오기
  const getWineDataList = async () => {
    const wineType = wineTypes[Math.floor(Math.random() * wineTypes.length)];

    try {
      setLoading(true);
      const res = await axios.get<APIWineInfo[]>(`https://api.sampleapis.com/wines/${wineType}`);

      const wineList = res.data;
      const wineId = Math.floor(Math.random() * wineList.length);
      const selectedWine = wineList[wineId];

      const newData: WineInfo | null = selectedWine
        ? {
            id: `${wineType}-${selectedWine.id}`,
            name: selectedWine?.wine,
            country: selectedWine.location.split('\n')[0],
            imgURL: selectedWine.image,
            rating: Number(selectedWine.rating.average),
            type: wineType,
          }
        : null;

      setWine(newData);
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 와인 기록 목록 불러오기
  const getRecordList = async () => {
    try {
      // setLoading(true);
      const data: MyWineInfo[] = await getWineList();
      setRecordList(data.slice(0, 3));
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.', error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getWineDataList();
    getRecordList();
  }, []);

  return (
    <>
      {loading ? (
        <p>데이터를 불러오는 중입니다...</p>
      ) : (
        <>
          <section className="space-y-1">
            <Link
              className="w-full h-[12.5rem] rounded-lg inline-block"
              to={`/winelist/${wine?.id}`}
            >
              <img src={wine?.imgURL} alt="" className="object-contain" />
            </Link>
            <SubTitle>오늘의 추천 와인</SubTitle>
            <p>{wine?.name}</p>
            <p>
              {!isNaN(Number(last)) && (
                <span className="after:content-['-'] after:mx-0.5">{Number(last)}</span>
              )}
              <span>{wine?.type}</span>
              {wine?.country && (
                <span className="before:content-['-'] before:mx-0.5">{wine.country}</span>
              )}
            </p>
            <div className="flex items-center gap-1">
              <Star size={15} fill="var(--color-primary)" color="transparent" />
              <span>{wine?.rating}</span>
            </div>
          </section>
          <section>
            <SubTitle>최근 기록</SubTitle>
            {recordList?.map((item) => (
              <Card
                name={item.name}
                type={item.type}
                date={item.date}
                imgURL={item.imgURL ? item.imgURL[0] : ''}
                url={`/winelist/${item?.id}`}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default HomePage;
