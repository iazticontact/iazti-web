
import React from 'react';
import { MessageSquare, ClipboardList, Coins, PenTool, RefreshCcw, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProcessProps {
  language: 'es' | 'en';
  t: any;
}

export const Process: React.FC<ProcessProps> = ({ language, t }) => {
  const steps = [
    { icon: <MessageSquare />, color: 'cyan' },
    { icon: <ClipboardList />, color: 'blue' },
    { icon: <Coins />, color: 'indigo' },
    { icon: <PenTool />, color: 'purple' },
    { icon: <RefreshCcw />, color: 'pink' },
    { icon: <Rocket />, color: 'emerald' }
  ];

  return (
    <div className="pt-48 pb-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-40 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
            Nuestro <br />
            <span className="gradient-text">Método</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">{t.process.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.process.steps.map((step: any, i: number) => (
            <div key={i} className="group glass p-10 rounded-[3rem] border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all transform group-hover:-translate-y-1">
                {React.cloneElement(steps[i].icon as React.ReactElement<any>, { className: "w-8 h-8 text-cyan-400" })}
              </div>
              <span className="text-sm font-black uppercase tracking-widest text-cyan-500 mb-4">Fase 0{i+1}</span>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-none">{step.t}</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-base">{step.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-48 p-16 glass rounded-[4rem] border-white/5 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] -z-10" />
           <h2 className="text-2xl md:text-4xl font-black text-white mb-10 tracking-tighter uppercase leading-tight">
             Empecemos el <br />
             <span className="gradient-text">Camino Juntos</span>
           </h2>
           <Link
            to="/contact"
            className="inline-flex px-12 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-widest text-sm hover:shadow-[0_15px_40px_rgba(6,182,212,0.4)] transition-all"
           >
            {t.nav.trial}
           </Link>
           <p className="mt-8 text-slate-600 text-sm font-black uppercase tracking-widest">Hablamos tu mismo idioma</p>
        </div>
      </div>
    </div>
  );
};
