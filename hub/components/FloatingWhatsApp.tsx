
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site e gostaria de falar com um consultor.`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-400/40 flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110 active:scale-90 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
        Falar com consultor
      </span>
    </button>
  );
};

export default FloatingWhatsApp;
