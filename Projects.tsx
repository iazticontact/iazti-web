
import React from 'react';
import { ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ProjectsProps {
  language: 'es' | 'en';
  t: any;
}

export const Projects: React.FC<ProjectsProps> = ({ language, t }) => {
  const projects = [
    {
      title: 'AhorraAislando',
      tag: 'WEB + AUTOMATIZACIÓN',
      subtitle: 'Presencia profesional y captura de leads para el sector industrial.',
      bullets: [
        'Estructura de alta conversión',
        'Automatización de presupuestos',
        'Velocidad de carga extrema'
      ],
      quote: 'Digitalizaron nuestro negocio con una web impecable. Los resultados se notan desde el primer mes.',
      author: 'Gorka (AhorraAislando)',
      url: 'https://www.ahorraaislando.es',
      img: '/assets/projects/ahorraaislando.jpg'
    },
    {
      title: 'BeyondMuga',
      tag: 'TIENDA ONLINE',
      subtitle: 'Ecommerce minimalista y funcional para una marca de autor.',
      bullets: [
        'Experiencia de compra fluida',
        'Optimización móvil total',
        'Gestión de stock simplificada'
      ],
      quote: 'La tienda es elegante y muy fácil de usar. Transmite exactamente lo que buscábamos.',
      author: 'Urko (BeyondMuga)',
      url: 'https://beyondmuga.eu',
      img: '/assets/projects/beyondmuga.jpg'
    },
    {
      title: 'EkinZentroa',
      tag: 'CENTRO SALUD',
      subtitle: 'Web enfocada en la gestión de servicios y contacto directo.',
      bullets: [
        'Información de servicios clara',
        'Canales de reserva optimizados',
        'Diseño dinámico y moderno'
      ],
      quote: 'Nuestros pacientes ahora nos encuentran y contactan mucho más rápido gracias a la web.',
      author: '(EkinZentroa)',
      url: 'https://ekinzentroa.com',
      img: '/assets/projects/ekinzentroa.jpg'
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-40 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
            Proyectos <br />
            <span className="gradient-text">Reales</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Casos de éxito donde la tecnología inteligente ha transformado el día a día de nuestros clientes.
          </p>
        </div>

        <div className="space-y-48">
          {projects.map((p, i) => (
            <div key={i} className="group relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black uppercase tracking-widest mb-8">
                    {p.tag}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{p.title}</h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-10 font-medium leading-relaxed">{p.subtitle}</p>
                  
                  <ul className="space-y-4 mb-12">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-3 text-slate-400 font-medium text-base">
                        <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="glass p-8 rounded-[2.5rem] border-white/5 mb-10 relative group-hover:border-cyan-500/20 transition-all shadow-xl">
                    <p className="text-base md:text-lg text-white font-medium italic mb-6 leading-relaxed">"{p.quote}"</p>
                    <p className="text-cyan-400 font-black uppercase tracking-widest text-sm">
                      {p.author}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <a 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-xl bg-white text-[#020617] font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:-translate-y-1 transition-all"
                    >
                      {t.common.viewProject}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link to="/contact" className="px-8 py-4 rounded-xl glass text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                      {t.common.similar}
                    </Link>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden glass border-white/5 group-hover:border-cyan-500/30 transition-all duration-700 shadow-2xl">
                    <ImageWithFallback 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
