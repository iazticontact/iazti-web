
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
  language: 'es' | 'en';
  // Added t prop to satisfy component usage in App.tsx
  t: any;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ language }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[150] p-4">
      <div className="max-w-4xl mx-auto glass border border-slate-800 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-6 animate-in slide-in-from-bottom-full duration-500">
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-white font-bold mb-2">Cookies & Privacidad</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            {language === 'es' 
              ? 'Usamos cookies para mejorar tu experiencia y analizar el tráfico. Al navegar, aceptas su uso.' 
              : 'We use cookies to improve your experience and analyze traffic. By browsing, you accept their use.'}
            {' '}
            <Link to="/cookies" className="text-cyan-400 hover:underline">{language === 'es' ? 'Leer más' : 'Read more'}</Link>
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={handleDecline}
            className="px-6 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-bold hover:bg-slate-800 transition-colors"
          >
            {language === 'es' ? 'Rechazar' : 'Decline'}
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-500 transition-colors"
          >
            {language === 'es' ? 'Aceptar todas' : 'Accept all'}
          </button>
        </div>
      </div>
    </div>
  );
};
