
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQProps {
  language: 'es' | 'en';
  // Added t prop to satisfy component usage in App.tsx
  t: any;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const faqs = [
    {
      q: '¿Qué es exactamente la "web de prueba gratis"?',
      a: 'Es un diseño conceptual funcional (aprox. el 10% del proyecto final) que preparamos para tu negocio tras una breve consultoría. Te permite ver nuestra estética y capacidad antes de contratar cualquier plan.'
    },
    {
      q: '¿Cuánto tiempo tardáis en entregar una web completa?',
      a: 'Depende de la complejidad, pero una landing page suele estar lista en 1 semana y una web corporativa completa en 2-4 semanas.'
    },
    {
      q: '¿Necesito saber de IA para usar vuestras automatizaciones?',
      a: 'En absoluto. Nosotros configuramos todo. Tú solo verás los resultados: leads en tu hoja de cálculo, borradores de email listos en tu bandeja de entrada o un chatbot respondiendo a tus clientes.'
    },
    {
      q: '¿Qué herramientas utilizáis?',
      a: 'Trabajamos con el stack más moderno: React, Tailwind CSS, Supabase para bases de datos y n8n para automatizaciones de flujos complejos.'
    },
    {
      q: '¿El chatbot puede responder a mis clientes de verdad?',
      a: 'Sí. Lo entrenamos con tu información específica (PDF, sitio web) para que responda dudas frecuentes y capture datos de potenciales clientes.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <HelpCircle className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Preguntas <span className="gradient-text">Frecuentes</span></h1>
          <p className="text-slate-400 text-lg">Resuelve tus dudas rápidas sobre cómo trabajamos en IAzti.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border border-slate-800 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-900 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-cyan-400" /> : <Plus className="w-5 h-5 text-slate-500" />}
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 glass rounded-[2.5rem] border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Aún tienes dudas?</h3>
          <p className="text-slate-400 mb-8 italic">"Nuestra IA puede resolver tus dudas en el chat, o puedes hablar con un humano."</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => (window as any).scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
              className="px-8 py-4 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors"
            >
              Chatear con IAzti
            </button>
            <span className="text-slate-600 font-bold uppercase tracking-widest text-xs">O bien</span>
            <a 
              href="mailto:iazti.contact@gmail.com"
              className="px-8 py-4 rounded-xl border border-slate-700 text-slate-200 font-bold hover:border-slate-500 transition-colors"
            >
              Escríbenos un Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
