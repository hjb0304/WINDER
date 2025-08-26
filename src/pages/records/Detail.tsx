import { getWine } from '@/api/wine';
import Button from '@/components/Button';
import FavoriteButton from '@/components/FavoriteButton';
import SubTitle from '@/components/SubTitle';
import type { MyWineInfo } from '@/type/wine';
import { Star, Wine } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecordsDetailPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<MyWineInfo | null>();
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();

  // 와인 데이터 불러오기
  const getWineData = async () => {
    try {
      setLoading(true);
      const data = id ? await getWine(id) : null;
      setData(data);
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
    <>
      {loading ? (
        <p>데이터를 불러오는 중입니다.</p>
      ) : (
        <section className="flex flex-col gap-6">
          <div className="relative h-48 overflow-hidden rounded-lg">
            {data?.imgURL ? (
              <img src={data?.imgURL[0]} alt={data?.name} />
            ) : (
              <div className="flex items-center justify-center h-full bg-lightgray">
                <Wine size={60} color="var(--color-subtext)" />
              </div>
            )}
            <FavoriteButton
              onClick={() => {
                setIsFavorite(!isFavorite);
              }}
              isFavorite={isFavorite}
            />
          </div>
          <div className="flex flex-col gap-1">
            <SubTitle>{data?.name ? data?.name : ''}</SubTitle>
            <p className="text-subtext">{`${data?.year} - ${data?.type} - ${data?.country}`}</p>
            <div className="flex items-center gap-1">
              <Star size={15} fill="var(--color-primary)" color="transparent" />
              <span>{data?.rating}</span>
            </div>
          </div>
          <div>
            <span className="inline-block mb-2 label">테이스팅 차트</span>
            <div></div>
          </div>
          <div>
            <span className="inline-block mb-2 label">마신 날짜</span>
            <p>{data?.date}</p>
          </div>
          <div>
            <span className="inline-block mb-2 label">메모</span>
            <p>{data?.memo}</p>
          </div>
          <div>
            <span className="inline-block mb-2 label">사진</span>
            <div className="flex gap-2">
              <div className="overflow-hidden rounded-lg aspect-square grow-1">
                {data?.imgURL ? (
                  <img src={data?.imgURL[0]} alt={data?.name} />
                ) : (
                  <div className="flex items-center justify-center h-full bg-lightgray">
                    <Wine color="var(--color-subtext)" size={36} />
                  </div>
                )}
              </div>
              <div className="overflow-hidden rounded-lg aspect-square grow-1">
                {data?.imgURL ? (
                  <img src={data?.imgURL[1]} alt={data?.name} />
                ) : (
                  <div className="flex items-center justify-center h-full bg-lightgray">
                    <Wine color="var(--color-subtext)" size={36} />
                  </div>
                )}
              </div>
              <div className="overflow-hidden rounded-lg aspect-square grow-1">
                {data?.imgURL ? (
                  <img src={data?.imgURL[2]} alt={data?.name} />
                ) : (
                  <div className="flex items-center justify-center h-full bg-lightgray">
                    <Wine color="var(--color-subtext)" size={36} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              to={`/records/new?name=${data?.name}&country=${data?.country}&type=${data?.type}&imgurl=${data?.imgURL}`}
              size="sm"
            >
              수정
            </Button>
            <Button
              to={`/records/new?name=${data?.name}&country=${data?.country}&type=${data?.type}&imgurl=${data?.imgURL}`}
              outlined
              size="sm"
            >
              삭제
            </Button>
          </div>
        </section>
      )}
    </>
  );
}

export default RecordsDetailPage;
