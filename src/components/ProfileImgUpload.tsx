import wine from '@/assets/img/icon/wine.svg';

function ProfileImgUpload() {
  return (
    <div className="rounded-full bg-lightgray w-[100px] aspect-square flex justify-center items-center mx-auto">
      <img src={wine} alt="와인" className="w-12 h-auto" />
    </div>
  );
}

export default ProfileImgUpload;
