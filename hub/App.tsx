
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import FilterSection from './components/FilterSection';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import { Package, ShoppingBag, Laptop, Smartphone, MessageSquare, ArrowRight, ShieldCheck, Zap, Calendar } from 'lucide-react';

const App: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState("Todos");
  const [selectedCondition, setSelectedCondition] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const seriesMatch = selectedSeries === "Todos" || p.series.toLowerCase().includes(selectedSeries.toLowerCase());
      const conditionMatch = selectedCondition === "Todos" || p.condition === selectedCondition;
      return seriesMatch && conditionMatch;
    });
  }, [selectedSeries, selectedCondition]);

  const handleCustomOrder = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda personalizada com o Personal Shopper DeHub Catalogo.`, '_blank');
  };

  // Pega a data atual formatada para passar credibilidade de atualização
  const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

  return (
    <div className="min-h-screen bg-black text-white bg-grid relative overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 h-[800px] glow-bg pointer-events-none opacity-60"></div>
      
      <Header />
      
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border-red-600/20 mb-8 float-animation">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Catálogo Atualizado Hoje ({today})</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
              CONFIRA AS <br/>OFERTAS DA <span className="text-red-600">SEMANA.</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-medium">
              Os melhores iPhones do mercado com preços exclusivos de catálogo. 
              Aparelhos selecionados um a um para garantir sua total satisfação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#catalogo" className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2">
                Ver Catálogo do Dia
                <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                className="glass-dark border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Falar com Atendente
              </button>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalogo" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <FilterSection 
              selectedSeries={selectedSeries} 
              setSelectedSeries={setSelectedSeries}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
            />

            <div className="mb-12 flex items-end justify-between border-b border-white/5 pb-8">
              <div className="flex flex-col">
                <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Disponíveis para Entrega</p>
                <h3 className="text-4xl font-black text-white tracking-tighter">IPhones da Semana</h3>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <Calendar className="w-3 h-3 text-red-600" />
                Atualizado em tempo real
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 glass-dark rounded-[3rem]">
                <p className="text-slate-500 font-bold mb-6">Nenhum aparelho encontrado com esses filtros.</p>
                <button 
                  onClick={() => {setSelectedSeries("Todos"); setSelectedCondition("Todos");}}
                  className="px-8 py-4 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all"
                >
                  Resetar Filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="py-24 bg-white/2">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                 <div className="glass-dark p-10 rounded-[2.5rem] border-red-600/20">
                    <ShieldCheck className="w-12 h-12 text-red-600 mb-6" />
                    <h4 className="text-xl font-black mb-3">Procedência Real</h4>
                    <p className="text-slate-400 text-sm">Apenas aparelhos com histórico limpo e originalidade garantida sob contrato.</p>
                 </div>
                 <div className="glass-dark p-10 rounded-[2.5rem]">
                    <Zap className="w-12 h-12 text-red-600 mb-6" />
                    <h4 className="text-xl font-black mb-3">Velocidade Máxima</h4>
                    <p className="text-slate-400 text-sm">Processamento de pedido e envio no mesmo dia para todo o Brasil.</p>
                 </div>
                 <div className="glass-dark p-10 rounded-[2.5rem]">
                    <Smartphone className="w-12 h-12 text-red-600 mb-6" />
                    <h4 className="text-xl font-black mb-3">Suporte Expert</h4>
                    <p className="text-slate-400 text-sm">Não falamos com robôs. Consultores especialistas prontos para te ajudar.</p>
                 </div>
              </div>
           </div>
        </section>

        <Testimonials />

        {/* Encomendas Premium */}
        <section id="encomendas" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600/5 blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="glass-dark rounded-[3.5rem] p-10 md:p-20 overflow-hidden border-white/10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">VIP Personal Shopper</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[0.95] tracking-tighter">SUA ENCOMENDA, <br/>NOSSO <span className="text-red-600">MUNDO.</span></h2>
                  <p className="text-slate-400 text-base mb-12 leading-relaxed">
                    Não limitamos seu desejo ao nosso estoque. Através da nossa rede internacional, localizamos o produto exato que você procura — de eletrônicos raros a vestuário premium.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-12">
                    <div className="flex items-center gap-3">
                       <Laptop className="w-5 h-5 text-red-600" />
                       <span className="text-xs font-bold uppercase tracking-widest">Tech Goods</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <ShoppingBag className="w-5 h-5 text-red-600" />
                       <span className="text-xs font-bold uppercase tracking-widest">Luxury Brands</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleCustomOrder}
                    className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-white/10 flex items-center justify-center gap-3"
                  >
                    FALAR COM PERSONAL SHOPPER
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6">
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <p className="text-[10px] font-black text-red-600 uppercase mb-2">Segurança</p>
                      <p className="font-bold text-lg">Cotação Completa</p>
                      <p className="text-slate-400 text-sm mt-2">Você recebe o valor final com todas as taxas e frete inclusos, sem surpresas na entrega.</p>
                   </div>
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <p className="text-[10px] font-black text-red-600 uppercase mb-2">Rastreio</p>
                      <p className="font-bold text-lg">Logística Privada</p>
                      <p className="text-slate-400 text-sm mt-2">Acompanhamos sua encomenda desde a origem até o toque na sua porta.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-32 text-center relative">
           <div className="max-w-4xl mx-auto px-6">
             <div className="w-20 h-[1px] bg-red-600 mx-auto mb-10" />
             <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">O PRÓXIMO NÍVEL É DEHUB CATALOGO.</h3>
             <p className="text-slate-400 text-base mb-12 max-w-xl mx-auto leading-relaxed">
               Junte-se à comunidade de clientes que não aceitam nada menos que a perfeição em tecnologia.
             </p>
             <button 
               onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
               className="bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-[0.2em] transition-all hover:scale-110 shadow-2xl shadow-green-900/40"
             >
               INICIAR EXPERIÊNCIA NO WHATSAPP
             </button>
           </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
