import SubTitle from '@/components/SubTitle';
import { pairingResultData } from '@/data/pairing';

import { Smile, ThumbsUp, Trophy } from 'lucide-react';
import { useParams } from 'react-router-dom';

function PairingResultsPage() {
  const { name } = useParams<{ name: keyof typeof pairingResultData }>();

  return (
    <>
      <section className="mb-4 space-y-2">
        <div className="overflow-hidden rounded-lg">
          <img src={name && pairingResultData[name].imgURL} alt="" />
        </div>
        <SubTitle>{name ? pairingResultData[name].name : ''}</SubTitle>
        <p>{name && pairingResultData[name].desc}</p>
      </section>
      <section>
        <ul>
          <li className="flex gap-2 py-4 border-b border-lightgray">
            <div className="space-y-1">
              <p className="flex items-center gap-1.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <Trophy color="white" size={20} />
                </span>
                <span>최고의 페어링</span>
              </p>
              <span className="inline-block">
                {name && pairingResultData[name].pairing[0].name}
              </span>
              <p className="text-subtext sub">{name && pairingResultData[name].pairing[0].desc}</p>
            </div>
            <div className="rounded-lg w-[6.25rem] aspect-square shrink-0 overflow-hidden">
              <img src={name && pairingResultData[name].pairing[0].imgURL} alt="" />
            </div>
          </li>
          <li className="flex gap-2 py-4 border-b border-lightgray">
            <div className="space-y-1">
              <p className="flex items-center gap-1.5">
                <span className="flex justify-center items-center rounded-full w-8 h-8 bg-[#C97B7B]">
                  <ThumbsUp color="white" size={20} />
                </span>
                <span>잘 어울려요</span>
              </p>
              <span className="inline-block">
                {name && pairingResultData[name].pairing[1].name}
              </span>
              <p className="text-subtext sub">{name && pairingResultData[name].pairing[1].desc}</p>
            </div>
            <div className="rounded-lg w-[6.25rem] aspect-square shrink-0 overflow-hidden">
              <img src={name && pairingResultData[name].pairing[1].imgURL} alt="" />
            </div>
          </li>
          <li className="flex gap-2 py-4 border-b border-lightgray">
            <div className="space-y-1">
              <p className="flex items-center gap-1.5">
                <span className="flex justify-center items-center rounded-full w-8 h-8 bg-[#E6CBA8]">
                  <Smile color="white" size={20} />
                </span>
                <span>무난해요</span>
              </p>
              <span className="inline-block">
                {name && pairingResultData[name].pairing[2].name}
              </span>
              <p className="text-subtext sub">{name && pairingResultData[name].pairing[2].desc}</p>
            </div>
            <div className="rounded-lg w-[6.25rem] aspect-square shrink-0 overflow-hidden">
              <img src={name && pairingResultData[name].pairing[2].imgURL} alt="" />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default PairingResultsPage;
