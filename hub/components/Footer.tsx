
import React from 'react';
import { MessageCircle, CreditCard, Landmark, Banknote } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-red-600">DeHub Catalogo</span>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Especialistas em ecossistema Apple. iPhones novos, seminovos e encomendas exclusivas com procedência verificada.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <CreditCard className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-[9px] font-black uppercase text-slate-500">Cartão 12x</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <Landmark className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-[9px] font-black uppercase text-slate-500">Pix 10% Off</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <Banknote className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-[9px] font-black uppercase text-slate-500">Boleto</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            © 2024 DEHUB CATALOGO - TODOS OS DIREITOS RESERVADOS
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-red-600 uppercase">Instagram</a>
            <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-red-600 uppercase">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;