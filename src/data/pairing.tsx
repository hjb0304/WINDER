import { Apple, Beef, CakeSlice, Drumstick, Fish, Salad } from 'lucide-react';
import cheese from '@/assets/img/icon/cheese.svg';
import spicy from '@/assets/img/icon/spicy.svg';
import wine from '@/assets/img/icon/wine.svg';
import type { PairingData, PairingResultItem, PairingResultKey } from '@/type/pairing';
import { wineImg } from '@/assets/img';

export const pairingData: PairingData = {
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

export const pairingResultData: Record<PairingResultKey, PairingResultItem> = {
  redmeat: {
    name: '붉은 육류',
    desc: '진한 풍미와 지방이 많은 붉은 육류는 탄닌이 풍부하고 바디감 있는 레드 와인과 잘 어울려요. 고기의 육즙과 와인의 떫은 맛이 균형을 이루어 풍미가 극대화됩니다.',
    imgURL: wineImg.redmeat,
    pairing: [
      {
        name: '까베르네 소비뇽',
        desc: '스테이크나 양고기와 함께하면 와인의 진한 탄닌과 고기의 풍미가 서로를 살려 입안 가득 깊은 맛을 느낄 수 있어요.',
        imgURL: wineImg.cabernetSauvignon,
      },
      {
        name: '시라',
        desc: '향신료가 가미된 붉은 육류 요리와 함께하면 와인의 스파이시한 향과 과일 풍미가 요리의 맛을 한층 살려줘요.',
        imgURL: '',
      },
      {
        name: '말벡',
        desc: '부드러운 탄닌과 진한 과일향이 고기의 풍미와 잘 어울려 조화로운 맛을 즐길 수 있어요.',
        imgURL: '',
      },
    ],
  },
  whitemeat: {
    name: '흰 육류',
    desc: '닭고기나 칠면조 같은 흰 육류는 가볍고 담백한 맛이 특징이라 산미와 적당한 바디감이 있는 화이트 또는 라이트 레드 와인과 잘 맞아요.',
    imgURL: wineImg.chicken,
    pairing: [
      {
        name: '샤도네이',
        desc: '오크 숙성된 스타일의 샤도네이는 버터리하고 고소한 맛이 흰 육류 요리와 잘 어울려 풍미를 극대화해요.',
        imgURL: '',
      },
      {
        name: '피노 누아',
        desc: '라이트 바디의 레드 와인으로 흰 육류와 함께하면 고기의 담백함과 와인의 섬세한 맛이 자연스럽게 조화를 이루어요.',
        imgURL: '',
      },
      {
        name: '소비뇽 블랑',
        desc: '상큼한 산미가 흰 육류 요리와 함께하면 입안을 깔끔하게 정리해주면서 음식의 맛을 돋워줘요.',
        imgURL: '',
      },
    ],
  },
  seafood: {
    name: '해산물',
    desc: '해산물은 신선함과 미네랄 감이 중요한데, 산미가 높고 상큼한 화이트 와인이나 스파클링 와인과 함께하면 맛이 한층 살아나요.',
    imgURL: wineImg.shrimp,
    pairing: [
      {
        name: '소비뇽 블랑',
        desc: '허브향과 산미가 굴이나 새우 등 해산물의 담백함을 살려주어 상큼하게 즐길 수 있어요.',
        imgURL: '',
      },
      {
        name: '알바리뇨',
        desc: '산미와 과일향이 해산물 요리와 잘 어울려 맛의 균형을 느낄 수 있어요.',
        imgURL: '',
      },
      {
        name: '샴페인 / 스파클링 와인',
        desc: '청량감과 산미가 굴, 새우 같은 해산물과 만나 입안을 깔끔하게 정리해줘요.',
        imgURL: '',
      },
    ],
  },
  veg: {
    name: '야채',
    desc: '야채 요리는 조리법과 식감에 따라 다르지만, 가벼운 화이트나 로제 와인과 함께하면 요리의 신선함이 살아나요.',
    imgURL: wineImg.salad,
    pairing: [
      {
        name: '피노 그리',
        desc: '상큼하고 깔끔한 맛이 신선한 야채 요리와 잘 어울려 입안을 산뜻하게 해줘요.',
        imgURL: '',
      },
      {
        name: '로제 와인',
        desc: '적당한 과일향과 산미가 야채 요리와 조화를 이루어 맛의 균형을 살려줘요.',
        imgURL: '',
      },
      {
        name: '베르멘티노',
        desc: '허브와 시트러스 향이 야채 요리와 만나 풍미를 한층 살려줘요.',
        imgURL: '',
      },
    ],
  },
  cheese: {
    name: '치즈',
    desc: '치즈는 종류가 다양하지만, 강한 풍미의 치즈에는 바디감 있는 레드 와인이, 부드러운 치즈에는 화이트 와인이 잘 어울려요.',
    imgURL: wineImg.cheese,
    pairing: [
      {
        name: '포트 와인',
        desc: '진하고 달콤한 포트 와인은 블루 치즈와 함께하면 맛의 깊이가 풍부하게 살아나요.',
        imgURL: '',
      },
      {
        name: '카베르네 소비뇽',
        desc: '체다 치즈 같은 진한 치즈와 함께하면 와인의 바디감이 치즈 풍미를 부드럽게 감싸줘요.',
        imgURL: '',
      },
      {
        name: '리슬링',
        desc: '부드러운 브리나 고다 치즈와 함께하면 와인의 산미와 단맛이 치즈 맛을 한층 살려줘요.',
        imgURL: '',
      },
    ],
  },
  dessert: {
    name: '디저트',
    desc: '달콤한 디저트에는 당도 높은 디저트 와인이나 스파클링 와인이 잘 어울려요.',
    imgURL: wineImg.dessert,
    pairing: [
      {
        name: '소테른',
        desc: '꿀과 복숭아 향이 나는 달콤한 와인은 디저트와 함께하면 풍미가 한층 풍부해져요.',
        imgURL: '',
      },
      {
        name: '모스카토 다스티',
        desc: '약간의 스파클링과 상큼한 단맛이 가벼운 디저트와 조화를 이루어 즐거운 맛을 느낄 수 있어요.',
        imgURL: '',
      },
      {
        name: '토카이',
        desc: '복합적인 단맛과 산미가 조화를 이루어 디저트와 함께하면 맛의 균형이 잘 맞아요.',
        imgURL: '',
      },
    ],
  },
  fruits: {
    name: '과일',
    desc: '과일의 상큼함과 당도를 살리려면 가볍고 과일향이 풍부한 화이트나 로제 와인이 좋아요.',
    imgURL: wineImg.fruits,
    pairing: [
      {
        name: '모스카토',
        desc: '과일향과 단맛이 과일과 잘 어우러져 상큼하게 즐길 수 있어요.',
        imgURL: '',
      },
      {
        name: '피노 누아 로제',
        desc: '과일 향이 풍부한 로제로 과일의 신선함을 한층 살려줘요.',
        imgURL: '',
      },
      {
        name: '게뷔르츠트라미너',
        desc: '열대 과일 향과 향신료가 과일과 조화를 이루어 맛의 풍미가 살아나요.',
        imgURL: '',
      },
    ],
  },
  spicy: {
    name: '매운 음식',
    desc: '매운 음식은 알코올 도수가 낮고 당도가 약간 있는 와인이 매운맛을 부드럽게 해주어 좋아요.',
    imgURL: wineImg.spicyAsia,
    pairing: [
      {
        name: '리슬링',
        desc: '와인의 당도와 산미가 매운맛을 부드럽게 완화시켜 맛의 균형을 느낄 수 있어요.',
        imgURL: '',
      },
      {
        name: '게뷔르츠트라미너',
        desc: '향신료 향이 매운 음식과 함께하면 조화롭게 맛을 즐길 수 있어요.',
        imgURL: '',
      },
      {
        name: '로제 와인',
        desc: '라이트한 바디감과 상큼한 맛이 매운 요리와 만나 입안을 깔끔하게 정리해줘요.',
        imgURL: '',
      },
    ],
  },
  'cabernet-sauvignon': {
    name: '까베르네 소비뇽',
    desc: '진하고 탄닌이 풍부한 풀바디 레드 와인으로, 육류와 풍미가 강한 음식과 가장 잘 어울려요.',
    imgURL: wineImg.cabernetSauvignon,
    pairing: [
      {
        name: '스테이크 / 양고기',
        desc: '육즙이 풍부한 스테이크나 양고기와 함께하면 와인의 진한 탄닌과 고기의 풍미가 조화를 이루어 입안 가득 깊은 맛을 느낄 수 있어요.',
        imgURL: wineImg.redmeat,
      },
      {
        name: '체다 치즈',
        desc: '강한 풍미를 가진 체다 치즈와 함께하면 와인의 바디감이 치즈 맛을 부드럽게 감싸주어 조화롭게 즐길 수 있어요.',
        imgURL: wineImg.cheddar,
      },
      {
        name: '버섯 요리',
        desc: '진한 향과 육즙이 풍부한 버섯 요리와 함께하면 와인의 풍미가 더욱 돋보여 풍미가 깊어져요.',
        imgURL: wineImg.mushroom,
      },
    ],
  },
  merlot: {
    name: '멜롯',
    desc: '부드럽고 과일 향이 풍부한 레드 와인으로, 비교적 가벼운 육류나 치즈와 잘 어울려요.',
    imgURL: '',
    pairing: [
      {
        name: '로스트 치킨 / 흰 육류',
        desc: '부드러운 닭고기나 흰 육류와 함께하면 와인의 과일 향이 고기의 담백한 맛을 살려주어 부드럽게 즐길 수 있어요.',
        imgURL: wineImg.chicken,
      },
      {
        name: '햄 / 델리 미트',
        desc: '고기 풍미가 풍부한 햄과 함께하면 와인의 라이트한 바디가 고기 맛을 조화롭게 감싸줘요.',
        imgURL: wineImg.ham,
      },
      {
        name: '부드러운 치즈 (브리, 고다)',
        desc: '부드러운 치즈와 함께하면 치즈의 고소함과 와인의 과일 향이 서로 잘 어우러져 맛이 한층 풍부해져요.',
        imgURL: wineImg.cheese,
      },
    ],
  },
  'pinot-noir': {
    name: '피노누아',
    desc: '라이트~미디엄 바디의 레드 와인으로, 섬세한 풍미의 음식과 함께하면 와인의 우아한 맛을 즐기기 좋아요.',
    imgURL: '',
    pairing: [
      {
        name: '닭고기 / 흰 육류',
        desc: '라이트 바디의 피노 누아는 가벼운 닭고기나 흰 육류와 함께하면 자연스럽게 조화를 이루어 담백함과 풍미를 동시에 느낄 수 있어요.',
        imgURL: wineImg.chicken,
      },
      {
        name: '연어 / 기름진 생선',
        desc: '기름진 생선과 함께하면 와인의 산미가 생선의 풍미를 살려주어 상큼하게 즐길 수 있어요.',
        imgURL: wineImg.fish,
      },
      {
        name: '버섯 요리',
        desc: '흙내음과 우아한 풍미가 있는 버섯 요리와 함께하면 와인의 부드러운 맛이 요리의 풍미를 더욱 돋보이게 해줘요.',
        imgURL: wineImg.mushroom,
      },
    ],
  },
  riesling: {
    name: '리슬링',
    desc: '달콤하거나 드라이한 화이트 와인으로, 산미가 풍부해서 매운 음식이나 디저트와 잘 어울려요.',
    imgURL: '',
    pairing: [
      {
        name: '매운 아시아 음식 (태국, 인도 요리)',
        desc: '매운 음식과 함께하면 와인의 당도와 산미가 매운맛을 부드럽게 중화시켜주어 맛의 균형을 느낄 수 있어요.',
        imgURL: wineImg.spicyAsia,
      },
      {
        name: '스파이시 돼지고기 / 바비큐',
        desc: '향신료가 들어간 돼지고기 요리와 함께하면 와인의 달콤함이 음식의 강한 맛을 부드럽게 감싸줘요.',
        imgURL: wineImg.spicyPork,
      },
      {
        name: '과일 디저트',
        desc: '과일 디저트와 함께하면 와인의 상큼한 산미와 단맛이 디저트의 풍미를 한층 살려줘요.',
        imgURL: wineImg.fruits,
      },
    ],
  },
  'sauvignon-blanc': {
    name: '쇼비뇽 블랑',
    desc: '상큼한 산미와 허브 향이 특징인 화이트 와인으로, 해산물이나 가벼운 음식과 즐기면 좋습니다.',
    imgURL: '',
    pairing: [
      {
        name: '굴 / 조개 / 해산물',
        desc: '신선한 해산물과 함께하면 와인의 산미와 허브 향이 해산물의 담백함과 조화를 이루어 상큼하게 즐길 수 있어요.',
        imgURL: wineImg.oyster,
      },
      {
        name: '야채 샐러드',
        desc: '다양한 채소와 함께하면 와인의 상큼함이 야채의 맛을 한층 돋보이게 해줘요.',
        imgURL: wineImg.salad,
      },
      {
        name: '치즈 (고다, 브리)',
        desc: '부드러운 치즈와 함께하면 치즈의 고소함과 와인의 상큼한 향이 균형을 이루어 풍미를 살려줘요.',
        imgURL: wineImg.cheese,
      },
    ],
  },
  chardonnay: {
    name: '샤도네이',
    desc: '오크 숙성 시 버터리한 풍미가 나는 화이트 와인으로, 풍미가 풍부한 음식과 함께 즐기면 좋아요.',
    imgURL: '',
    pairing: [
      {
        name: '버터 소스의 닭고기 / 흰 육류',
        desc: '부드러운 닭고기 요리와 함께하면 와인의 오크 향과 풍미가 음식의 크리미함을 살려주어 맛있게 즐길 수 있어요.',
        imgURL: wineImg.chicken,
      },
      {
        name: '크림 파스타 / 리조또',
        desc: '크리미한 파스타와 함께하면 와인의 풍부한 바디감이 음식과 조화를 이루어 풍미가 한층 깊어져요.',
        imgURL: wineImg.creamPasta,
      },
      {
        name: '연어 구이 / 훈제 연어',
        desc: '기름진 생선과 함께하면 와인의 바디감이 생선의 풍미를 살려주어 부드럽게 즐길 수 있어요.',
        imgURL: wineImg.fish,
      },
    ],
  },
  sparkling: {
    name: '스파클링',
    desc: '산미와 청량감이 특징인 와인으로, 다양한 음식과 함께 즐기면 입맛을 돋워줘요.',
    imgURL: wineImg.sparkling,
    pairing: [
      {
        name: '새우 / 조개',
        desc: '신선한 해산물과 함께하면 와인의 청량감과 산미가 해산물의 맛을 살려 상큼하게 즐길 수 있어요.',
        imgURL: wineImg.shrimp,
      },
      {
        name: '프라이드 치킨 / 튀김 요리',
        desc: '기름진 음식과 함께하면 와인의 탄산과 산미가 느끼함을 잡아주어 맛의 균형을 느낄 수 있어요.',
        imgURL: wineImg.friedChicken,
      },
      {
        name: '과일 디저트',
        desc: '과일 디저트와 함께하면 와인의 상큼함이 디저트의 달콤함과 조화를 이루어 입안을 깔끔하게 마무리해줘요.',
        imgURL: wineImg.fruits,
      },
    ],
  },
  rose: {
    name: '로제',
    desc: '라이트~미디엄 바디에 상큼한 과일향과 산미가 있어 다양한 음식과 즐기기 좋아요.',
    imgURL: '',
    pairing: [
      {
        name: '샐러드 / 야채 요리',
        desc: '신선한 채소와 함께하면 와인의 상큼함이 채소 맛을 살려주어 깔끔하게 즐길 수 있어요.',
        imgURL: wineImg.salad,
      },
      {
        name: '가벼운 흰 육류 (닭고기, 칠면조)',
        desc: '담백한 흰 육류와 함께하면 와인의 과일 향과 산미가 음식의 맛을 한층 돋보이게 해줘요.',
        imgURL: wineImg.chicken,
      },
      {
        name: '매운 요리 (스파이시)',
        desc: '매운 음식과 함께하면 와인의 라이트한 바디감과 상큼함이 매운맛을 부드럽게 중화해주어 맛의 균형을 맞출 수 있어요.',
        imgURL: wineImg.spicyAsia,
      },
    ],
  },
};
