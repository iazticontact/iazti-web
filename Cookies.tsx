
import React from 'react';

export const Cookies: React.FC<{ language: 'es' | 'en' }> = ({ language }) => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl text-slate-300">
        <h1 className="text-4xl font-bold text-white mb-10">Política de Cookies</h1>
        <div className="space-y-6">
          <p>Utilizamos cookies para mejorar la navegación y analizar el uso de nuestra web de forma totalmente anónima.</p>
          <h2 className="text-xl font-bold text-white">¿Qué son las cookies?</h2>
          <p>Pequeños archivos de texto que se almacenan en tu dispositivo para recordar tus preferencias y ofrecerte una mejor experiencia.</p>
          <h2 className="text-xl font-bold text-white">Tipos de cookies que usamos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Técnicas:</strong> Necesarias para el funcionamiento del sitio.</li>
            <li><strong>Analíticas:</strong> Nos ayudan a entender cuántas visitas recibimos y qué secciones interesan más.</li>
            <li><strong>Personalización:</strong> Guardan tus preferencias de idioma.</li>
          </ul>
          <h2 className="text-xl font-bold text-white">¿Cómo desactivarlas?</h2>
          <p>Puedes configurar tu navegador para bloquear las cookies, aunque esto podría afectar al correcto funcionamiento de algunas funciones de la web.</p>
        </div>
      </div>
    </div>
  );
};
