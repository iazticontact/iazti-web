
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Instagram } from 'lucide-react';

interface NavbarProps {
  language: 'es' | 'en';
  toggleLanguage: () => void;
  t: any;
}

export const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.process, path: '/process' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-2">
              <span className="text-xl font-black tracking-[0.3em] text-white uppercase group-hover:text-cyan-400 transition-all duration-500">
                IAZTI
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all"></div>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-white ${
                    location.pathname === item.path ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 border-l border-white/10 pl-8">
              <a 
                href="https://www.instagram.com/iazti.web/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm uppercase font-black">{language}</span>
              </button>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white text-[#020617] text-sm font-black uppercase tracking-wider hover:bg-cyan-50 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-white/5"
              >
                {t.nav.trial}
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 pb-12">
          <div className="px-6 pt-8 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-sm font-black uppercase tracking-widest text-slate-300 border-b border-white/5"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-between items-center py-6">
              <a href="https://www.instagram.com/iazti.web/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400">
                <Instagram className="w-6 h-6" />
                <span className="text-sm font-black uppercase tracking-widest text-slate-300">Instagram</span>
              </a>
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase">
                <Globe className="w-5 h-5" />
                {language}
              </button>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-5 rounded-2xl bg-white text-[#020617] font-black uppercase tracking-widest text-sm"
            >
              {t.nav.trial}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
