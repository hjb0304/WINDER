import { addFavorite, deleteFavorite } from '@/api/favorite';
import Button from '@/components/Button';
import FavoriteButton from '@/components/FavoriteButton';
import Modal from '@/components/Modal';
import SubTitle from '@/components/SubTitle';
import type { APIWineInfo, WineInfo } from '@/type/wine';
import axios from 'axios';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WineDetailPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WineInfo | null>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();
  const name: string[] | null = data?.name ? data?.name.split(' ') : null;
  const last = name?.[name.length - 1];

  // 와인 데이터 불러오기
  const getWineData = async () => {
    try {
      setLoading(true);
      const res = await axios.get<APIWineInfo[]>(
        `https://api.sampleapis.com/wines/${id?.split('-')[0]}`,
      );

      const wineData: APIWineInfo | undefined = res.data?.find(
        (item) => item.id === Number(id?.split('-')[1]),
      );

      const newData: WineInfo | null = wineData
        ? {
            id: id ? id : '',
            name: wineData?.wine,
            country: wineData.location.split('\n')[0],
            imgURL: wineData.image,
            rating: Number(wineData.rating.average),
            type: id ? id?.split('-')[0] : '',
          }
        : null;

      setData(newData);
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWineData();
  }, []);

  // 찜 목록에 와인 추가/삭제
  const handleAddFovorite = async () => {
    try {
      if (data && id) {
        if (!isFavorite) {
          await addFavorite(data);
          setIsFavorite(true);
        } else {
          await deleteFavorite(id);
          setIsFavorite(false);
        }
      }
    } catch (error) {
      console.error(error);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {loading ? (
        <p>데이터를 불러오는 중입니다.</p>
      ) : (
        <section className="flex flex-col gap-6">
          <div className="relative h-48 rounded-lg">
            <img src={data?.imgURL} alt={data?.name} className="object-contain" />
            <FavoriteButton onClick={handleAddFovorite} isFavorite={isFavorite} />
          </div>
          <div className="flex flex-col gap-1">
            <SubTitle>{data?.name ? data?.name : ''}</SubTitle>
            <p className="text-subtext">
              {' '}
              {!isNaN(Number(last)) && (
                <span className="after:content-['-'] after:mx-0.5">{Number(last)}</span>
              )}
              <span>{data?.type}</span>
              {data?.country && (
                <span className="before:content-['-'] before:mx-0.5">{data.country}</span>
              )}
            </p>
            <div className="flex items-center gap-1">
              <Star size={15} fill="var(--color-primary)" color="transparent" />
              <span>{data?.rating}</span>
            </div>
          </div>
          <div>
            <span className="inline-block mb-2 label">사진</span>
            <div className="flex gap-2">
              <div className="rounded-lg aspect-square grow-1">
                <img src={data?.imgURL} alt={data?.name} className="object-contain" />
              </div>
              <div className="rounded-lg aspect-square grow-1">
                <img src={data?.imgURL} alt={data?.name} className="object-contain" />
              </div>
              <div className="rounded-lg aspect-square grow-1">
                <img src={data?.imgURL} alt={data?.name} className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              to={`/records/new?name=${data?.name}&country=${data?.country}&type=${data?.type}&imgurl=${data?.imgURL}`}
            >
              기록하기
            </Button>
          </div>
        </section>
      )}
      <Modal
        isOpen={isModalOpen}
        message={`찜 목록 추가에 실패했습니다.`}
        handleCancel={() => setIsModalOpen(false)}
        handleConfirm={() => setIsModalOpen(false)}
        hideCancelButton
      />
    </>
  );
}

export default WineDetailPage;
