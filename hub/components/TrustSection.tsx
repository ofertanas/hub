
import React from 'react';
import { ShieldCheck, Truck, Smartphone, Headphones } from 'lucide-react';

const TrustSection: React.FC = () => {
  const benefits = [
    {
      icon: <Smartphone className="w-7 h-7 text-red-600" />,
      title: "Laboratório",
      desc: "Checklist de 40 itens."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-red-600" />,
      title: "Garantia VIP",
      desc: "Até 1 ano de proteção."
    },
    {
      icon: <Truck className="w-7 h-7 text-red-600" />,
      title: "Express",
      desc: "Logística rastreada."
    },
    {
      icon: <Headphones className="w-7 h-7 text-red-600" />,
      title: "Consierge",
      desc: "Suporte especializado."
    }
  ];

  return (
    <section className="py-20 border-y border-white/5 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {benefits.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="mb-5 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-red-600/10 group-hover:border-red-600/30 transition-all duration-500">
              {b.icon}
            </div>
            <h3 className="font-black text-white text-[11px] mb-1 uppercase tracking-widest">{b.title}</h3>
            <p className="text-[10px] text-slate-500 font-bold leading-tight">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
