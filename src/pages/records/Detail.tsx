import { deleteWine, getWine } from '@/api/wine';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import SubTitle from '@/components/SubTitle';
import type { MyWineInfo } from '@/type/wine';
import { BottleWine, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

function RecordsDetailPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<MyWineInfo | null>();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailModalOpen, setisFailModalOpen] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // 와인 기록 상세 조회
  const getWineData = async () => {
    try {
      setLoading(true);
      const data = id ? await getWine(id) : null;
      setData(data);
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWineData();
  }, []);

  // 와인 기록 삭제
  const handleDelete = async () => {
    try {
      if (id) {
        await deleteWine(id);
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      setisFailModalOpen(true);
    }
  };

  const tastingData = [
    {
      subject: '단맛',
      A: data?.notes.sweetness,
    },
    {
      subject: '산미',
      A: data?.notes.acidity,
    },
    {
      subject: '탄닌',
      A: data?.notes.tannin,
    },
    {
      subject: '바디감',
      A: data?.notes.body,
    },
    {
      subject: '여운',
      A: data?.notes.finish,
    },
  ];

  return (
    <>
      {loading ? (
        <p>와인 기록 정보를 불러오는 중입니다.</p>
      ) : (
        <section className="flex flex-col gap-6">
          <div className="relative h-48 overflow-hidden rounded-lg">
            {data?.imgURL?.[0] ? (
              data?.imgURL[0].includes('vivino') ? (
                <img
                  src={data?.imgURL[0]}
                  alt={data?.name}
                  loading="eager"
                  className="object-contain"
                />
              ) : (
                <picture>
                  <source
                    srcSet={data?.imgURL[0].replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                    type="image/webp"
                  />
                  <img src={data?.imgURL[0]} alt={data?.name} loading="eager" />
                </picture>
              )
            ) : (
              <div className="flex items-center justify-center h-full bg-lightgray">
                <BottleWine size={60} color="var(--color-subtext)" aria-label="빈 와인 병" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <SubTitle>{data?.name ? data?.name : ''}</SubTitle>
            <p className="text-subtext">
              {data?.year && <span className="after:content-['-'] after:mx-0.5">{data.year}</span>}
              <span>{data?.type}</span>
              {data?.country && (
                <span className="before:content-['-'] before:mx-0.5">{data.country}</span>
              )}
            </p>
            <div className="flex items-center gap-1">
              <Star size={15} fill="var(--color-primary)" color="transparent" aria-label="별점" />
              <span>{data?.rating}</span>
            </div>
          </div>
          <div>
            <span className="inline-block mb-2 label">테이스팅 차트</span>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={tastingData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis tick={false} axisLine={false} tickCount={4} />
                <Radar
                  name="WineTasting"
                  dataKey="A"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
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
              {Array.from({ length: 3 }, (_, i) => (
                <div className="overflow-hidden rounded-lg aspect-square flex-1" key={i}>
                  {data?.imgURL?.[i] ? (
                    <img
                      src={data?.imgURL?.[i]}
                      alt={data?.name}
                      loading="lazy"
                      className={data?.imgURL?.[i].includes('vivino') ? 'object-contain' : ''}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-lightgray">
                      <BottleWine color="var(--color-subtext)" size={36} aria-label="빈 와인 병" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button to={`/records/edit/${id}`} size="sm">
              수정
            </Button>
            <Button outlined size="sm" onClick={handleDelete}>
              삭제
            </Button>
          </div>
        </section>
      )}
      <Modal
        isOpen={isSuccessModalOpen}
        message={`와인 기록이 삭제되었습니다.`}
        handleCancel={() => setIsSuccessModalOpen(false)}
        handleConfirm={() => {
          setIsSuccessModalOpen(false);
          navigate('/records');
        }}
        hideCancelButton
      />
      <Modal
        isOpen={isFailModalOpen}
        message={`와인 기록 삭제에 실패했습니다.`}
        handleCancel={() => setisFailModalOpen(false)}
        handleConfirm={() => setisFailModalOpen(false)}
        hideCancelButton
      />
    </>
  );
}

export default RecordsDetailPage;
