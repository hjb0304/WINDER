import Input from '@/components/Input';
import RangeSlider from '@/components/RangeSlider';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';
import type { MyWineInfo } from '@/type/wine';
import { Camera, Star, StarHalf } from 'lucide-react';
import { useState } from 'react';

function RecordsNewPage() {
  const wineOptions = [
    { text: '레드', value: 'reds' },
    { text: '화이트', value: 'whites' },
    { text: '로제', value: 'rose' },
    { text: '스파클링', value: 'sparkling' },
  ];

  const [data, setdata] = useState<MyWineInfo | null>();
  const [values, setValues] = useState([0]);
  const [rating, setRating] = useState(0);

  // 각 별점 아이콘
  const star = (idx: number) =>
    rating >= idx + 1 ? (
      <Star fill="var(--color-primary)" color="var(--color-primary)" />
    ) : rating >= idx + 0.5 ? (
      <div className="relative">
        <StarHalf fill="var(--color-primary)" color="var(--color-primary)" />
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <Star color="var(--color-lightgray)" className="absolute right-0" />
        </div>
      </div>
    ) : (
      <Star color="var(--color-lightgray)" />
    );

  // 별점 반환
  const stars = Array.from({ length: 5 }, (_, i) => (
    <div className="relative">
      <button
        className="absolute left-0 w-1/2 h-full cursor-pointer"
        type="button"
        onClick={() => setRating(i + 0.5)}
      ></button>
      <button
        className="absolute right-0 w-1/2 h-full cursor-pointer"
        type="button"
        onClick={() => setRating(i + 1)}
      ></button>
      <div className="pointer-events-none">{star(i)}</div>
    </div>
  ));

  return (
    <form className="flex flex-col gap-6">
      <section>
        <Input
          id="name"
          name="name"
          label="와인 이름"
          labelClassName="label after:content-['*'] after:text-error after:ms-1"
          placeholder="와인 이름"
        ></Input>
      </section>
      <section>
        <Input
          id="country"
          name="country"
          label="원산지"
          labelClassName="label"
          placeholder="원산지"
        ></Input>
      </section>
      <section>
        <span className="inline-block mb-2 label after:content-['*'] after:text-error after:ms-1">
          종류
        </span>
        <Select id="type" name="type" options={wineOptions} label="종류" className="w-full" />
      </section>
      <section>
        <Input
          id="grape"
          name="grape"
          label="품종"
          labelClassName="label"
          placeholder="품종"
        ></Input>
      </section>
      <section>
        <Input
          id="year"
          name="year"
          label="생산년도"
          labelClassName="label"
          placeholder="생산년도"
        ></Input>
      </section>
      <section>
        <span className="inline-block mb-6 label after:content-['*'] after:text-error after:ms-1">
          단맛
        </span>
        <RangeSlider values={values} onChange={(values) => setValues(values)} />
      </section>
      <section>
        <span className="inline-block mb-6 label after:content-['*'] after:text-error after:ms-1">
          산미
        </span>
        <RangeSlider values={values} onChange={(values) => setValues(values)} />
      </section>
      <section>
        <span className="inline-block mb-6 label after:content-['*'] after:text-error after:ms-1">
          탄닌
        </span>
        <RangeSlider values={values} onChange={(values) => setValues(values)} />
      </section>
      <section>
        <span className="inline-block mb-6 label after:content-['*'] after:text-error after:ms-1">
          바디
        </span>
        <RangeSlider values={values} onChange={(values) => setValues(values)} />
      </section>
      <section>
        <span className="inline-block mb-6 label after:content-['*'] after:text-error after:ms-1">
          여운
        </span>
        <RangeSlider values={values} onChange={(values) => setValues(values)} />
      </section>
      <section>
        <span className="inline-block mb-2 label after:content-['*'] after:text-error after:ms-1">
          별점
        </span>
        <div className="flex gap-1">{stars}</div>
      </section>
      <section>
        <span className="inline-block mb-2 label after:content-['*'] after:text-error after:ms-1">
          마신 날짜
        </span>
        <Input id="" name=""></Input>
      </section>
      <section>
        <Textarea
          id="memo"
          name="memo"
          label="메모"
          labelClassName="label"
          placeholder="와인에 대한 메모를 남겨주세요."
        />
      </section>
      <section>
        <span className="inline-block mb-2 label">사진</span>
        <div className="flex gap-2">
          <div className="overflow-hidden rounded-lg aspect-square grow-1">
            {data?.imgURL ? (
              <img src={data?.imgURL[0]} alt="와인 이미지1" />
            ) : (
              <div className="flex items-center justify-center h-full bg-lightgray">
                <Camera color="var(--color-subtext)" size={36} />
              </div>
            )}
          </div>
          <div className="overflow-hidden rounded-lg aspect-square grow-1">
            {data?.imgURL ? (
              <img src={data?.imgURL[1]} alt="와인 이미지2" />
            ) : (
              <div className="flex items-center justify-center h-full bg-lightgray">
                <Camera color="var(--color-subtext)" size={36} />
              </div>
            )}
          </div>
          <div className="overflow-hidden rounded-lg aspect-square grow-1">
            {data?.imgURL ? (
              <img src={data?.imgURL[2]} alt="와인 이미지3" />
            ) : (
              <div className="flex items-center justify-center h-full bg-lightgray">
                <Camera color="var(--color-subtext)" size={36} />
              </div>
            )}
          </div>
        </div>
      </section>
    </form>
  );
}

export default RecordsNewPage;
