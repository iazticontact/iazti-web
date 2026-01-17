
import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Globe, ShieldCheck, Zap, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  language: 'es' | 'en';
  t: any;
}

export const Home: React.FC<HomeProps> = ({ language, t }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    { icon: <ShieldCheck />, label: 'Confianza', desc: 'Presencia online profesional que transmite seguridad a tus clientes.' },
    { icon: <Globe />, label: 'Claridad', desc: 'Estructuras pensadas para que el mensaje llegue sin ruidos.' },
    { icon: <Zap />, label: 'Conversión', desc: 'Foco absoluto en captar contactos y cerrar oportunidades.' }
  ];

  const sectors = ['Clínicas', 'Restaurantes', 'Inmobiliarias', 'Abogados', 'Gimnasios', 'Ecommerce', 'Consultoras', 'Servicios Locales'];

  const faqs = [
    {
      q: language === 'es' ? '¿En qué consiste la web de prueba?' : 'What does the trial web consist of?',
      a: language === 'es' 
        ? 'Creamos un diseño funcional para tu negocio. Así puedes ver nuestra calidad y enfoque antes de decidirte por un plan completo.'
        : 'We create a functional design for your business. This way you can see our quality and approach before deciding on a full plan.'
    },
    {
      q: language === 'es' ? '¿Qué plazos de entrega tenéis?' : 'What are your delivery times?',
      a: language === 'es'
        ? 'Una landing page suele estar lista en 7 días hábiles. Proyectos más grandes entre 2 y 4 semanas.'
        : 'A landing page is usually ready in 7 business days. Larger projects between 2 and 4 weeks.'
    },
    {
      q: language === 'es' ? '¿La web será mía al 100%?' : 'Will the web be 100% mine?',
      a: language === 'es'
        ? 'Sí, por supuesto. Tras el pago final, la propiedad intelectual y el acceso total son tuyos.'
        : 'Yes, of course. After the final payment, intellectual property and full access are yours.'
    }
  ];

  return (
    <div className="space-y-32 md:space-y-48 pb-32">
      <Hero language={language} t={t} />

      {/* Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            Valor <span className="gradient-text">Real</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((s, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-cyan-500/20 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-4">{s.label}</h4>
              <p className="text-slate-400 text-base leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {sectors.concat(sectors).map((s, i) => (
            <span key={i} className="text-slate-600 font-black uppercase tracking-[0.4em] text-sm mx-12">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Integrated */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">Preguntas <span className="gradient-text">Frecuentes</span></h2>
          <p className="text-slate-500 text-base font-medium">Todo lo que necesitas saber para empezar.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-3xl border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-base md:text-lg font-bold text-white uppercase tracking-tight pr-4">{faq.q}</span>
                {openFaq === i ? <Minus className="w-4 h-4 text-cyan-400" /> : <Plus className="w-4 h-4 text-slate-500" />}
              </button>
              {openFaq === i && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-slate-400 text-base leading-relaxed font-medium">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto glass rounded-[3.5rem] p-16 md:p-24 border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase leading-[1.15]">
            Transforma tu <br />
            <span className="gradient-text">Negocio Hoy</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex px-12 py-6 rounded-2xl bg-white text-[#020617] font-black uppercase tracking-[0.3em] text-sm hover:-translate-y-1 transition-all shadow-xl shadow-white/5"
          >
            {t.nav.trial}
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
};
