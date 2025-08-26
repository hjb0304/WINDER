import Input from '@/components/Input';
import RangeSlider from '@/components/RangeSlider';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';
import type { MyWineInfo } from '@/type/wine';
import { Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { getMonth, getYear } from 'date-fns';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/Button';
import Rating from '@/components/Rating';
import { recordWine } from '@/api/wine';

function RecordsNewPage() {
  const wineOptions = [
    { text: '레드', value: 'reds' },
    { text: '화이트', value: 'whites' },
    { text: '로제', value: 'rose' },
    { text: '스파클링', value: 'sparkling' },
  ];

  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<MyWineInfo>();

  const [preview, setPreview] = useState<string[]>([]);

  const onSubmit = async (data: MyWineInfo) => {
    // 이미지 업로드
    const newURL = data.imgURL
      ? await Promise.all(
          data.imgURL.map(async (file) => {
            if (!file) return null;

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            try {
              const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } },
              );
              return res.data.secure_url;
            } catch (error) {
              console.error('업로드에 실패했습니다.', error);
              return null;
            }
          }),
        )
      : [];

    // 업로드된 url로 교체
    const newData = { ...data, imgURL: newURL.filter((url) => url !== null) };

    // 와인 기록 등록
    try {
      await recordWine(newData);
    } catch (error) {
      console.error('와인 기록 등록에 실패했습니다.', error);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Input
          id="name"
          label="와인 이름"
          labelClassName="label after:content-['*'] after:text-error after:ms-1"
          placeholder="와인 이름"
          {...register('name', { required: '와인 이름을 입력해주세요.' })}
          errorMessage={errors.name?.message}
        ></Input>
      </section>
      <section>
        <Input
          id="country"
          label="원산지"
          labelClassName="label"
          placeholder="원산지"
          {...register('country')}
        ></Input>
      </section>
      <section>
        <span className="inline-block mb-2 label after:content-['*'] after:text-error after:ms-1">
          종류
        </span>
        <Select
          id="type"
          options={wineOptions}
          label="종류"
          className="w-full"
          {...register('type')}
        />
      </section>
      <section>
        <Input
          id="grape"
          label="품종"
          labelClassName="label"
          placeholder="품종"
          {...register('grape')}
        ></Input>
      </section>
      <section>
        <Input
          id="year"
          label="생산년도"
          labelClassName="label"
          placeholder="생산년도"
          {...register('year')}
        ></Input>
      </section>
      <section>
        <span className="inline-block mb-9 label after:content-['*'] after:text-error after:ms-1">
          단맛
        </span>
        <Controller
          name="notes.sweetness"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <RangeSlider values={[field.value ?? 0]} onChange={field.onChange} />
          )}
        />
      </section>
      <section>
        <span className="inline-block mb-9 label after:content-['*'] after:text-error after:ms-1">
          산미
        </span>
        <Controller
          name="notes.acidity"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <RangeSlider values={[field.value ?? 0]} onChange={field.onChange} />
          )}
        />
      </section>
      <section>
        <span className="inline-block mb-9 label after:content-['*'] after:text-error after:ms-1">
          탄닌
        </span>
        <Controller
          name="notes.tannin"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <RangeSlider values={[field.value ?? 0]} onChange={field.onChange} />
          )}
        />
      </section>
      <section>
        <span className="inline-block mb-9 label after:content-['*'] after:text-error after:ms-1">
          바디
        </span>
        <Controller
          name="notes.body"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <RangeSlider values={[field.value ?? 0]} onChange={field.onChange} />
          )}
        />
      </section>
      <section>
        <span className="inline-block mb-9 label after:content-['*'] after:text-error after:ms-1">
          여운
        </span>
        <Controller
          name="notes.finish"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <RangeSlider values={[field.value ?? 0]} onChange={field.onChange} />
          )}
        />
      </section>
      <section>
        <span className="inline-block mb-2 label after:content-['*'] after:text-error after:ms-1">
          별점
        </span>
        <Controller
          name="rating"
          control={control}
          rules={{ required: '별점을 선택해주세요.' }}
          render={({ field }) => <Rating value={field.value ?? 0} onChange={field.onChange} />}
        />
        {errors.rating && <p className="text-xs text-error pt-1">{errors.rating.message}</p>}
      </section>
      <section>
        <label
          className="block mb-2 label after:content-['*'] after:text-error after:ms-1"
          htmlFor="date"
        >
          마신 날짜
        </label>
        <Controller
          name="date"
          control={control}
          defaultValue={new Date().toISOString().split('T')[0].replaceAll('-', '.')}
          rules={{ required: '기록한 날짜를 선택해주세요.' }}
          render={({ field }) => (
            <DatePicker
              id="date"
              locale={ko}
              showIcon
              dateFormat="yyyy.MM.dd"
              selected={field.value ? new Date(field.value) : new Date()}
              onChange={(date) =>
                field.onChange(date?.toISOString().split('T')[0].replaceAll('-', '.'))
              }
              icon={<Calendar className="mt-2" />}
              className="bg-white rounded-lg outline-1 outline-lightgray h-11"
              renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="cursor-pointer"
                    aria-label="이전 달로 이동"
                    onClick={decreaseMonth}
                  >
                    <ChevronLeft color="var(--color-subtext)" />
                  </button>
                  {`${getYear(date)}년 ${getMonth(date) + 1}월`}
                  <button
                    type="button"
                    className="cursor-pointer"
                    aria-label="다음 달로 이동"
                    onClick={increaseMonth}
                  >
                    <ChevronRight color="var(--color-subtext)" />
                  </button>
                </div>
              )}
            />
          )}
        />
        {errors.date && <p className="text-xs text-error pt-1">{errors.date.message}</p>}
      </section>
      <section>
        <Textarea
          id="memo"
          label="메모"
          labelClassName="label"
          placeholder="와인에 대한 메모를 남겨주세요."
          {...register('memo')}
        />
      </section>
      <section>
        <span className="inline-block mb-2 label">사진</span>
        <div className="flex gap-2">
          {Array.from({ length: 3 }, (_, i) => (
            <Controller
              key={i}
              name={`imgURL.${i}`}
              control={control}
              render={({ field }) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-square flex-1">
                  <label
                    htmlFor={'imgURL' + i}
                    aria-label={`이미지${i + 1} 업로드`}
                    className="contents"
                  >
                    {preview[i] ? (
                      <img
                        src={preview[i]}
                        alt={'미리보기' + (i + 1)}
                        className="h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-lightgray">
                        <Camera color="var(--color-subtext)" size={36} />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id={'imgURL' + i}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      // RHF에 file 객체 저장
                      field.onChange(file);

                      // 이미지 미리보기 표시
                      if (file) {
                        const newPreview = [...preview];
                        newPreview[i] = URL.createObjectURL(file);
                        setPreview(newPreview);
                      }
                    }}
                  ></input>
                </div>
              )}
            />
          ))}
        </div>
      </section>
      <div className="flex justify-end">
        <Button submit>기록하기</Button>
      </div>
    </form>
  );
}

export default RecordsNewPage;
