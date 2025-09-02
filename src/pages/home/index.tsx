import { getWineList } from '@/api/wine';
import Card from '@/components/Card';
import SubTitle from '@/components/SubTitle';
import { wineTypes } from '@/pages/wineList';
import type { APIWineInfo, MyWineInfo, WineInfo } from '@/type/wine';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// 와인 목록 불러오기
const getWineDataList = async (): Promise<WineInfo | null> => {
  const wineType = wineTypes[Math.floor(Math.random() * wineTypes.length)];

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

  return newData;
};

// 와인 기록 목록 불러오기
const getRecordList = async (): Promise<MyWineInfo[]> => {
  try {
    const data: MyWineInfo[] = await getWineList();
    return data?.slice(0, 3);
  } catch (error) {
    return [];
  }
};

function HomePage() {
  const {
    data: todayWine,
    isLoading: isLoadingWine,
    isError: isErrorWine,
  } = useQuery<WineInfo | null, Error>({
    queryKey: ['todayWine'],
    queryFn: getWineDataList,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  const {
    data: recordList,
    isLoading: isLoadingRecords,
    isError: isErrorRecords,
  } = useQuery<MyWineInfo[], Error>({
    queryKey: ['recentRecords'],
    queryFn: getRecordList,
    staleTime: 1000 * 60 * 5,
  });

  const name: string[] | null = todayWine?.name ? todayWine?.name.split(' ') : null;
  const last = name?.[name.length - 1];

  return (
    <>
      {isLoadingWine || isLoadingRecords ? (
        <p>데이터를 불러오는 중입니다...</p>
      ) : isErrorWine || isErrorRecords ? (
        <p>데이터를 불러올 수 없습니다.</p>
      ) : (
        <>
          <section className="space-y-1">
            <Link
              className="w-full h-[12.5rem] rounded-lg inline-block"
              to={`/winelist/${todayWine?.id}`}
            >
              <img src={todayWine?.imgURL} alt="" className="object-contain" />
            </Link>
            <SubTitle>오늘의 추천 와인</SubTitle>
            <p>{todayWine?.name}</p>
            <p>
              {!isNaN(Number(last)) && (
                <span className="after:content-['-'] after:mx-0.5">{Number(last)}</span>
              )}
              <span>{todayWine?.type}</span>
              {todayWine?.country && (
                <span className="before:content-['-'] before:mx-0.5">{todayWine.country}</span>
              )}
            </p>
            <div className="flex items-center gap-1">
              <Star size={15} fill="var(--color-primary)" color="transparent" />
              <span>{todayWine?.rating}</span>
            </div>
          </section>
          <section>
            <SubTitle>최근 기록</SubTitle>
            {recordList?.length ? (
              recordList?.map((item) => (
                <Card
                  key={item.id}
                  name={item.name}
                  type={item.type}
                  date={item.date}
                  imgURL={item.imgURL ? item.imgURL[0] : ''}
                  url={`/winelist/${item?.id}`}
                />
              ))
            ) : (
              <p>최근 기록한 와인이 없습니다.</p>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default HomePage;
