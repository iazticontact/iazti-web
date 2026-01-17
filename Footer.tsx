
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Zap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface FooterProps {
  language: 'es' | 'en';
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ language, t }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-10 group">
              <span className="text-2xl font-black tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors">IAZTI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
            </Link>
            <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed font-medium">
              {language === 'es' 
                ? 'Construimos el futuro digital de tu negocio con tecnología inteligente y diseño premium.' 
                : 'We build your business digital future with smart technology and premium design.'}
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/iazti.web/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-widest mb-8">{language === 'es' ? 'Navegación' : 'Navigation'}</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 text-base font-medium transition-colors">{language === 'es' ? 'Servicios' : 'Services'}</Link></li>
              <li><Link to="/process" className="text-slate-400 hover:text-cyan-400 text-base font-medium transition-colors">{language === 'es' ? 'Proceso' : 'Process'}</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-cyan-400 text-base font-medium transition-colors">{language === 'es' ? 'Proyectos' : 'Projects'}</Link></li>
              <li className="pt-2"><Link to="/contact" className="text-cyan-400 hover:text-cyan-300 text-sm font-black uppercase tracking-widest">{t.nav.trial}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-widest mb-8">{language === 'es' ? 'Legal' : 'Legal'}</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">{language === 'es' ? 'Privacidad' : 'Privacy'}</Link></li>
              <li><Link to="/cookies" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">{language === 'es' ? 'Cookies' : 'Cookies'}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-sm font-black uppercase tracking-widest">
            © {new Date().getFullYear()} IAZTI. SMART TECH SOLUTIONS.
          </p>
          <div className="flex items-center gap-3 text-slate-700">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">High Performance Digital Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
