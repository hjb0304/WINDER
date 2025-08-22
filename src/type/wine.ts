export interface APIWineInfo {
  id: number;
  wine: string;
  location: string;
  image: string;
  rating: { average: string; reviews: string };
}

export interface WineInfo {
  id: number;
  name: string;
  country: string;
  imgURL: string;
  rating: string;
}

export interface myWineInfo extends WineInfo {}
