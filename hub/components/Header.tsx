
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo DeHub Catalogo e gostaria de falar com um atendente.`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-black uppercase tracking-[0.1em] text-white">DEHUB CATALOGO</span>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">Premium</span>
          </div>
        </div>
        
        <button 
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2 rounded-xl text-[11px] font-black flex items-center gap-2 shadow-lg shadow-green-900/20 transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          ATENDIMENTO
        </button>
      </div>
    </header>
  );
};

export default Header;