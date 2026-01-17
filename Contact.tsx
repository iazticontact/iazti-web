
import React, { useState } from 'react';
import { submitLead } from '../services/supabaseService';
import { SECTORS, Lead } from '../types';
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';

interface ContactProps {
  language: 'es' | 'en';
  t: any;
}

export const Contact: React.FC<ContactProps> = ({ language, t }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<Partial<Lead>>({
    urgency: 'this_month',
    sector: SECTORS[0],
    source: 'web_form',
    status: 'new',
    language: language
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const result = await submitLead(formData as Lead);
      if (result.success) setStatus('success');
      else setStatus('error');
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center glass p-16 rounded-[3rem] border-cyan-500/30 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-cyan-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-cyan-500/30">
            <CheckCircle className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
            {language === 'es' ? '¡Excelente elección!' : 'Excellent choice!'}
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
            {language === 'es' 
              ? 'Nuestro equipo de IAzti revisará tu solicitud ahora mismo. Te contactaremos en menos de 24h para empezar tu web de prueba.'
              : 'Our IAzti team will review your request right now. We will contact you in less than 24h to start your trial web.'}
          </p>
          <button 
            onClick={() => window.location.hash = '/'}
            className="px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
          >
            {t.common.backToHome}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4" />
              {language === 'es' ? 'CONVERSIÓN DIRECTA' : 'DIRECT CONVERSION'}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight tracking-tighter uppercase">
              {language === 'es' ? 'Demos el primer' : 'Let\'s take the first'} <br />
              <span className="gradient-text">{language === 'es' ? 'paso hacia el futuro' : 'step towards the future'}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-14 leading-relaxed max-w-md font-medium">
              {language === 'es' 
                ? 'Solicita tu prueba gratuita y descubre por qué los negocios eligen IAzti para liderar su sector.' 
                : 'Request your free trial and discover why businesses choose IAzti to lead their sector.'}
            </p>

            <div className="space-y-8">
              {[
                { n: '01', t: 'Analizamos tu marca', d: 'Entendemos tu esencia y tus clientes.' },
                { n: '02', t: 'Creamos tu prueba', d: 'Diseño funcional de alta gama en 72h.' },
                { n: '03', t: 'Automatizamos el éxito', d: 'Escalamos tu negocio sin que tú trabajes más.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="text-4xl font-black text-white/10 group-hover:text-cyan-500/50 transition-colors duration-500">{step.n}</span>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">{step.t}</h4>
                    <p className="text-slate-500 text-base leading-relaxed font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">{language === 'es' ? 'Nombre' : 'Name'} *</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:outline-none transition-all text-base" placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Email *</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:outline-none transition-all text-base" placeholder="john@agency.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">{language === 'es' ? 'Urgencia' : 'Urgency'} *</label>
                  <select required className="w-full bg-slate-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:outline-none appearance-none text-base" onChange={(e) => setFormData({...formData, urgency: e.target.value as any})}>
                    <option value="asap">{language === 'es' ? 'URGENTE (ASAP)' : 'URGENT (ASAP)'}</option>
                    <option value="this_month" selected>{language === 'es' ? 'ESTE MES' : 'THIS MONTH'}</option>
                    <option value="next_months">{language === 'es' ? 'A FUTURO' : 'FUTURE PROJECT'}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">{language === 'es' ? 'Sector' : 'Sector'} *</label>
                  <select required className="w-full bg-slate-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:outline-none appearance-none text-base" onChange={(e) => setFormData({...formData, sector: e.target.value})}>
                    {SECTORS.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">{language === 'es' ? 'Tu Mensaje' : 'Your Message'} *</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:outline-none transition-all resize-none text-base" placeholder={language === 'es' ? "Cuéntanos tu visión..." : "Tell us your vision..."} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-200 text-sm font-bold">
                  <AlertCircle className="w-5 h-5" />
                  <p>{language === 'es' ? 'Hubo un error. Inténtalo de nuevo.' : 'Error occurred. Please try again.'}</p>
                </div>
              )}

              <button
                disabled={status === 'loading'}
                type="submit"
                className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-cyan-500/30 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.common.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
