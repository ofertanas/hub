
import React from 'react';

interface FilterSectionProps {
  selectedSeries: string;
  setSelectedSeries: (series: string) => void;
  selectedCondition: string;
  setSelectedCondition: (condition: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ 
  selectedSeries, 
  setSelectedSeries, 
  selectedCondition, 
  setSelectedCondition 
}) => {
  const series = ["Todos", "13", "14", "15", "Pro", "Pro Max"];
  const conditions = ["Todos", "Novo", "Seminovo", "Vitrine"];

  return (
    <div className="mb-16 glass-dark p-8 rounded-[2.5rem]">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 block">Série / Modelo</label>
          <div className="flex flex-wrap gap-2">
            {series.map(s => (
              <button
                key={s}
                onClick={() => setSelectedSeries(s)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSeries === s 
                    ? 'bg-white text-black shadow-lg' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 block">Status do Aparelho</label>
          <div className="flex flex-wrap gap-2">
            {conditions.map(c => (
              <button
                key={c}
                onClick={() => setSelectedCondition(c)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCondition === c 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
