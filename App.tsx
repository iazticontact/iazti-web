import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import Admin from './pages/Admin';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { translations } from './translations';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-[#020617] text-white">
        <ScrollToTop />
        <Navbar language={lang} toggleLanguage={toggleLanguage} t={t} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={lang} t={t} />} />
            <Route path="/services" element={<Services language={lang} t={t} />} />
            <Route path="/process" element={<Process language={lang} t={t} />} />
            <Route path="/projects" element={<Projects language={lang} t={t} />} />
            <Route path="/contact" element={<Contact language={lang} t={t} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<Privacy language={lang} />} />
            <Route path="/cookies" element={<Cookies language={lang} />} />
          </Routes>
        </main>

        <Footer language={lang} t={t} />
        <Chatbot language={lang} t={t} />
        <CookieBanner language={lang} t={t} />
      </div>
    </HashRouter>
  );
};

export default App;
