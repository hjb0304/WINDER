export interface APIWineInfo {
  id: number;
  wine: string;
  location: string;
  image: string;
  rating: { average: string; reviews: string };
}

export interface WineInfo {
  id: string;
  name: string;
  country: string;
  imgURL: string;
  rating: string;
  type: string;
}

export interface myWineInfo extends WineInfo {}
