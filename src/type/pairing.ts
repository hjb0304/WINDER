import type { ReactNode } from 'react';

export interface PairingDataInfo {
  name: string;
  color: string;
  icon: ReactNode;
  link: string;
}

export interface PairingData {
  food: PairingDataInfo[];
  wine: PairingDataInfo[];
}

export type PairingResultKey =
  | 'redmeat'
  | 'whitemeat'
  | 'seafood'
  | 'veg'
  | 'cheese'
  | 'dessert'
  | 'fruits'
  | 'spicy'
  | 'cabernet-sauvignon'
  | 'merlot'
  | 'pinot-noir'
  | 'riesling'
  | 'sauvignon-blanc'
  | 'chardonnay'
  | 'sparkling'
  | 'rose';

export interface PairingResultItem {
  name: string;
  desc: string;
  imgURL: string;
  pairing: { name: string; desc: string; imgURL: string }[];
}
