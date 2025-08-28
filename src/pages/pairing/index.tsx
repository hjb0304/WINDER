import Button from '@/components/Button';
import { Apple, Beef, CakeSlice, Drumstick, Fish, Salad } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cheese from '@/assets/img/icon/cheese.svg';
import spicy from '@/assets/img/icon/spicy.svg';
import wine from '@/assets/img/icon/wine.svg';

interface PairingDataInfo {
  name: string;
  color: string;
  icon: ReactNode;
  link: string;
}

interface PairingData {
  food: PairingDataInfo[];
  wine: PairingDataInfo[];
}

const data: PairingData = {
  food: [
    { name: '붉은 육류', color: '#B22222', icon: <Beef color="white" />, link: 'redmeat' },
    { name: '흰 육류', color: '#DEB887', icon: <Drumstick color="white" />, link: 'whitemeat' },
    { name: '해산물', color: '#5DAED1', icon: <Fish color="white" />, link: 'seafood' },
    { name: '야채', color: '#3AA23F', icon: <Salad color="white" />, link: 'veg' },
    {
      name: '치즈',
      color: '#FFC107',
      icon: <img src={cheese} alt="" className="w-6 h-6" />,
      link: 'cheese',
    },
    { name: '디저트', color: '#FF9EAD', icon: <CakeSlice color="white" />, link: 'dessert' },
    { name: '과일', color: '#FFA07A', icon: <Apple color="white" />, link: 'fruits' },
    {
      name: '매운 음식',
      color: '#CC3700',
      icon: <img src={spicy} alt="" className="w-6 h-6" />,
      link: 'spicy',
    },
  ],
  wine: [
    {
      name: '까베르네 쇼비뇽',
      color: '#8B0000',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'cabernet-sauvignon',
    },
    {
      name: '멜롯',
      color: '#B22222',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'merlot',
    },
    {
      name: '피노누아',
      color: '#CD5C5C',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'pinot-noir',
    },
    {
      name: '리슬링',
      color: '#FFF176',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'riesling',
    },
    {
      name: '쇼비뇽 블랑',
      color: '#66D6AA',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'sauvignon-blanc',
    },
    {
      name: '샤도네이',
      color: '#FFD54F',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'chardonnay',
    },
    {
      name: '스파클링',
      color: '#E6C77F',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'sparkling',
    },
    {
      name: '로제',
      color: '#FFC0CB',
      icon: <img src={wine} alt="" className="w-6 h-6" />,
      link: 'rose',
    },
  ],
};

function PairingPage() {
  const [tab, setTab] = useState<keyof PairingData>('food');

  return (
    <section>
      <div className="flex mb-4">
        <Button
          full
          outlined={tab === 'wine'}
          onClick={() => setTab('food')}
          className="rounded-tr-none rounded-br-none"
        >
          음식 선택
        </Button>
        <Button
          full
          outlined={tab === 'food'}
          onClick={() => setTab('wine')}
          className="rounded-tl-none rounded-bl-none"
        >
          와인 선택
        </Button>
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {data[tab].map((item: PairingDataInfo, i) => (
          <li key={i}>
            <Link
              to={`results/${item.link}`}
              className={
                'border-1 border-lightgray rounded-lg px-2 py-5 flex items-center gap-2 group transition hover:bg-stone-100 label'
              }
            >
              <span
                className={`rounded-full w-10 h-10 flex justify-center items-center transition group-hover:scale-110 group-hover:rotate-6}`}
                style={{ background: item.color }}
              >
                {item.icon}
              </span>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PairingPage;
