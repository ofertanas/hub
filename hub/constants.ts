
import { DeviceCondition, Product } from './types';

export const WHATSAPP_NUMBER = "5511999999999"; 

// Imagens otimizadas com parâmetros de largura (w), altura (h), fit (crop) e qualidade (q=80)
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    storage: '256GB',
    condition: DeviceCondition.NOVO,
    price: 8490,
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=400&h=500&q=80',
    features: ['Lacrado', '1 ano Apple', 'USB-C'],
    series: '15 Pro Max',
    isStockLimited: true
  },
  {
    id: '2',
    name: 'iPhone 14 Pro',
    storage: '128GB',
    condition: DeviceCondition.VITRINE,
    batteryHealth: 100,
    price: 5490,
    imageUrl: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=400&h=500&q=80',
    features: ['Face ID OK', 'True Tone OK', 'Impecável'],
    series: '14 Pro'
  },
  {
    id: '3',
    name: 'iPhone 13',
    storage: '128GB',
    condition: DeviceCondition.SEMINOVO,
    batteryHealth: 89,
    price: 3290,
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=400&h=500&q=80',
    features: ['Nunca aberto', 'Garantia 90 dias', 'Original'],
    series: '13'
  },
  {
    id: '4',
    name: 'iPhone 15',
    storage: '128GB',
    condition: DeviceCondition.NOVO,
    price: 4890,
    imageUrl: 'https://images.unsplash.com/photo-1696423602352-75d8263fca6a?auto=format&fit=crop&w=400&h=500&q=80',
    features: ['Lacrado', 'Original Apple'],
    series: '15'
  },
  {
    id: '5',
    name: 'iPhone 14',
    storage: '128GB',
    condition: DeviceCondition.SEMINOVO,
    batteryHealth: 94,
    price: 3890,
    imageUrl: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=400&h=500&q=80',
    features: ['Bateria excelente', 'Original'],
    series: '14'
  }
];

export const FEEDBACKS = [
  {
    id: 'f1',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&w=300&h=533&q=80',
    client: 'Pedro - São Paulo',
    text: 'Aparelho impecável!'
  },
  {
    id: 'f2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=300&h=533&q=80',
    client: 'Mariana - RJ',
    text: 'Chegou em 24h!'
  },
  {
    id: 'f3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=300&h=533&q=80',
    client: 'Lucas - BH',
    text: 'Recomendo demais.'
  },
  {
    id: 'f4',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=300&h=533&q=80',
    client: 'Bia - Curitiba',
    text: 'Bateria 100% como prometido.'
  }
];
