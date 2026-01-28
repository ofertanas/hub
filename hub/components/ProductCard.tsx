
import React from 'react';
import { Battery, CheckCircle2, MessageSquare } from 'lucide-react';
import { Product, DeviceCondition } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleInterest = () => {
    const message = `Olá! Gostaria de falar com um atendente sobre o ${product.name} ${product.storage} (${product.condition}) que vi no catálogo.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="premium-card rounded-[2.5rem] overflow-hidden flex flex-col h-full group">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-5 left-5 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl backdrop-blur-md ${
            product.condition === DeviceCondition.NOVO ? 'bg-red-600/90 text-white' : 
            product.condition === DeviceCondition.VITRINE ? 'bg-white/10 text-white border border-white/20' : 'bg-black/60 text-white border border-white/10'
          }`}>
            {product.condition}
          </span>
          {product.isStockLimited && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase animate-pulse">
              Last units
            </span>
          )}
        </div>
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-black text-white tracking-tighter leading-none mb-1">{product.name}</h3>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{product.storage}</span>
        </div>

        <div className="space-y-3 mb-8 flex-grow">
          {product.batteryHealth && (
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <Battery className="w-4 h-4 text-green-500" />
              Saúde: <span className="text-white">{product.batteryHealth}%</span>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg text-[9px] text-slate-300 font-bold uppercase tracking-tighter border border-white/5">
                <CheckCircle2 className="w-3 h-3 text-red-600" />
                {feat}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Pix Especial</p>
              <p className="text-2xl font-black text-white">{formatPrice(product.price)}</p>
            </div>
          </div>
          
          <button 
            onClick={handleInterest}
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-900/20"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            FALAR COM ATENDENTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
