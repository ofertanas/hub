
import React from 'react';
import { Play } from 'lucide-react';
import { FEEDBACKS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col">
            <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Comunidade</p>
            <h2 className="text-4xl font-black text-white tracking-tighter">Feedback Real</h2>
          </div>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Deslize para ver experiências</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x -mx-6 px-6">
          {FEEDBACKS.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[280px] snap-start glass-dark rounded-[2.5rem] overflow-hidden border-white/5 transition-all hover:border-red-600/30 group"
            >
              <div className="relative aspect-[4/5] bg-neutral-900">
                <img 
                  src={item.thumbnail} 
                  alt={item.client}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-1.5">{item.client}</p>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed italic">"{item.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
