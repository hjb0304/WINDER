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
  rating: number;
  type: string;
}

export interface MyWineInfo extends Omit<WineInfo, 'id' | 'country' | 'imgURL'> {
  id: number;
  country?: string;
  grape?: string;
  year?: number;
  notes: {
    sweetness: number;
    acidity: number;
    tannin: number;
    body: number;
    finish: number;
  };
  date: string;
  memo?: string;
  imgURL?: string[];
}
