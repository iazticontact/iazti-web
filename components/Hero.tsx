
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'es' | 'en';
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ language, t }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[15%] w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[15%] w-[30rem] h-[30rem] bg-blue-600/5 rounded-full blur-[120px] animate-pulse [animation-delay:3s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-black uppercase tracking-[0.25em] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="w-4 h-4 fill-cyan-400" />
          {t.hero.badge}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-[1.15] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-white max-w-4xl mx-auto uppercase">
          <span className="gradient-text text-glow">{t.hero.title}</span>
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-xl text-slate-400 mb-16 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 font-medium">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
          <Link
            to="/contact"
            className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-[#020617] font-black uppercase tracking-widest text-sm hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all flex items-center justify-center gap-4"
          >
            {t.hero.ctaMain}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 text-slate-200 font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </div>
  );
};
