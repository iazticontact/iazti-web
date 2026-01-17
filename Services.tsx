
import React from 'react';
import { Globe, MousePointer2, Settings, BarChart3, Rocket, Zap, CheckCircle2, Layout, Smartphone, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ServicesProps {
  language: 'es' | 'en';
  t: any;
}

export const Services: React.FC<ServicesProps> = ({ language, t }) => {
  const categories = [
    {
      id: 'web',
      title: language === 'es' ? 'Diseño Web Pro' : 'Pro Web Design',
      icon: <Globe className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
      color: 'cyan',
      items: [
        { name: 'Landing Pages', desc: language === 'es' ? 'Estructuras enfocadas en conversión y llamadas a la acción imposibles de ignorar.' : 'Structures focused on conversion and calls to action impossible to ignore.' },
        { name: 'Web Corporativa', desc: language === 'es' ? 'Páginas modernas y visuales que proyectan una imagen de marca premium.' : 'Modern and visual pages that project a premium brand image.' },
        { name: 'Rendimiento Extremo', desc: language === 'es' ? 'Carga instantánea en cualquier dispositivo y conexión.' : 'Instant loading on any device and connection.' }
      ]
    },
    {
      id: 'shops',
      title: language === 'es' ? 'Tiendas Online' : 'Online Stores',
      icon: <Smartphone className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
      color: 'blue',
      items: [
        { name: 'Ecommerce Práctico', desc: language === 'es' ? 'Vende tus productos sin complicaciones técnicas para ti ni para el cliente.' : 'Sell your products without technical complications for you or the client.' },
        { name: 'Mobile Checkout', desc: language === 'es' ? 'Proceso de pago optimizado para cerrar ventas en el móvil en segundos.' : 'Optimized checkout process to close sales on mobile in seconds.' },
        { name: 'Catálogos Digitales', desc: language === 'es' ? 'Tu oferta siempre disponible de forma visual y atractiva.' : 'Your offer always available visually and attractively.' }
      ]
    },
    {
      id: 'auto',
      title: language === 'es' ? 'Digitalización' : 'Digitalization',
      icon: <Settings className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
      color: 'purple',
      items: [
        { name: 'Automatizaciones', desc: language === 'es' ? 'Flujos de trabajo que ahorran tiempo y eliminan tareas repetitivas.' : 'Workflows that save time and eliminate repetitive tasks.' },
        { name: 'Sistemas de Reservas', desc: language === 'es' ? 'Tus citas gestionadas 24/7 sin que tengas que descolgar el teléfono.' : 'Your appointments managed 24/7 without having to pick up the phone.' },
        { name: 'Asistentes Web', desc: language === 'es' ? 'Resolución de dudas frecuentes y captura de leads automática.' : 'Frequent doubt resolution and automatic lead capture.' }
      ]
    }
  ];

  return (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-40 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black uppercase tracking-widest mb-12 shadow-lg shadow-cyan-500/10">
            <Zap className="w-5 h-5 fill-cyan-400" />
            SOLUCIONES REALES
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-tight uppercase max-w-5xl mx-auto">
            Nuestras <br />
            <span className="gradient-text">Especialidades</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Fusionamos diseño de alta gama con tecnología inteligente para que tu negocio lidere su sector.
          </p>
        </div>

        <div className="space-y-64 md:space-y-80">
          {categories.map((cat, idx) => (
            <div key={cat.id} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full animate-in fade-in slide-in-from-left duration-1000">
                <div className="flex items-center gap-6 mb-12">
                  <div className={`w-16 h-16 rounded-2xl bg-${cat.color}-500/10 flex items-center justify-center text-${cat.color}-400 border border-${cat.color}-500/20`}>
                    {cat.icon}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">{cat.title}</h2>
                </div>
                <div className="space-y-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group p-8 glass rounded-[2.5rem] border-white/5 hover:border-cyan-500/30 transition-all duration-700 hover:bg-white/[0.03]">
                      <div className="flex items-start gap-5">
                        <CheckCircle2 className="w-6 h-6 text-cyan-500 mt-1 shrink-0" />
                        <div>
                          <h4 className="text-white font-black text-xl mb-3 tracking-tight uppercase leading-none group-hover:text-cyan-400 transition-colors">{item.name}</h4>
                          <p className="text-slate-400 text-base leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16">
                   <Link to="/contact" className="inline-flex items-center gap-4 text-cyan-400 font-black uppercase tracking-widest text-sm hover:text-white transition-all group">
                     {t.nav.trial}
                     <Rocket className="w-5 h-5 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                   </Link>
                </div>
              </div>
              <div className="flex-1 w-full aspect-square relative group animate-in fade-in slide-in-from-right duration-1000">
                <div className="relative w-full h-full bg-slate-900 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-1000 group-hover:shadow-cyan-500/10">
                  <ImageWithFallback 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Grid */}
        <div className="mt-80 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-40">
          {[
            { i: <Layout />, t: 'Diseño a medida', d: 'Arquitectura única y profesional.' },
            { i: <Shield />, t: 'Seguridad base', d: 'Protección de datos garantizada.' },
            { i: <BarChart3 />, t: 'Foco en Ventas', d: 'Webs optimizadas para vender.' },
            { i: <Zap />, t: 'Máxima Velocidad', d: 'Carga instantánea asegurada.' }
          ].map((benefit, i) => (
            <div key={i} className="text-center group">
               <div className="w-20 h-20 glass rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border-white/5 group-hover:border-cyan-500/40 transition-all duration-500">
                 {React.cloneElement(benefit.i as React.ReactElement<any>, { className: "w-8 h-8 text-cyan-400" })}
               </div>
               <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4 leading-none">{benefit.t}</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">{benefit.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
