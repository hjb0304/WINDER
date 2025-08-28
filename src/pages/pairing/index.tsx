import Button from '@/components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { PairingData, PairingDataInfo } from '@/type/pairing';
import { pairingData } from '@/data/pairing';

function PairingPage() {
  const [tab, setTab] = useState<keyof PairingData>('food');

  return (
    <section>
      <div className="flex mb-4" role="tablist">
        <Button
          full
          outlined={tab === 'wine'}
          onClick={() => setTab('food')}
          className="rounded-tr-none rounded-br-none"
          role="tab"
          aria-selected={tab === 'food'}
        >
          음식 선택
        </Button>
        <Button
          full
          outlined={tab === 'food'}
          onClick={() => setTab('wine')}
          className="rounded-tl-none rounded-bl-none"
          role="tab"
          aria-selected={tab === 'wine'}
        >
          와인 선택
        </Button>
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {pairingData[tab].map((item: PairingDataInfo, i) => (
          <li key={i}>
            <Link
              to={`results/${item.link}`}
              className={
                'border border-lightgray rounded-lg px-2 py-5 flex items-center gap-2 group transition hover:bg-stone-100 label'
              }
            >
              <span
                className={
                  'rounded-full w-10 h-10 flex justify-center items-center transition group-hover:scale-110 group-hover:rotate-6'
                }
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
