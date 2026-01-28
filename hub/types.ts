
export enum DeviceCondition {
  NOVO = 'Novo',
  SEMINOVO = 'Seminovo',
  VITRINE = 'Vitrine'
}

export interface Product {
  id: string;
  name: string;
  storage: string;
  condition: DeviceCondition;
  batteryHealth?: number;
  price: number;
  imageUrl: string;
  features: string[];
  isStockLimited?: boolean;
  series: string; // e.g. "13", "14", "15", "Pro", "Pro Max"
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  rating: number;
}
