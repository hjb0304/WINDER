import wine from '@/assets/img/icon/wine.svg';
import { Camera } from 'lucide-react';

function ProfileImgUpload({
  url,
  onChange,
  canUpload = true,
}: {
  url: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canUpload?: boolean;
}) {
  return (
    <div className="rounded-full bg-lightgray w-[100px] aspect-square mx-auto relative">
      <div className=" w-[100px] aspect-square overflow-hidden rounded-full flex justify-center items-center">
        <img src={url ? url : wine} alt="와인" className={url ? '' : 'w-12 h-auto'} />
      </div>
      {canUpload && (
        <>
          <label
            htmlFor="photoURL"
            className="absolute right-0 flex items-center justify-center rounded-full w-9 bottom-1.5 aspect-square bg-gray cursor-pointer"
          >
            <Camera color="white" size={18} />
          </label>
          <input
            type="file"
            accept="image/*"
            id="photoURL"
            className="hidden"
            onChange={onChange}
          />
        </>
      )}
    </div>
  );
}

export default ProfileImgUpload;
