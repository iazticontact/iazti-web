
import React from 'react';

export const Privacy: React.FC<{ language: 'es' | 'en' }> = ({ language }) => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl text-slate-300">
        <h1 className="text-4xl font-bold text-white mb-10">Política de Privacidad</h1>
        <div className="space-y-6">
          <p>En IAzti, nos tomamos muy en serio tu privacidad. Esta política describe cómo recopilamos y tratamos tus datos personales al utilizar nuestra web.</p>
          <h2 className="text-xl font-bold text-white">1. Recopilación de datos</h2>
          <p>Recopilamos datos básicos a través de nuestros formularios (nombre, email, teléfono) únicamente para responder a tus solicitudes de información o preparar tu web de prueba gratis.</p>
          <h2 className="text-xl font-bold text-white">2. Uso de la información</h2>
          <p>Tus datos son tratados para gestionar nuestra relación comercial, enviarte comunicaciones relacionadas con tu interés y mejorar nuestros servicios a través de análisis anónimos.</p>
          <h2 className="text-xl font-bold text-white">3. Terceros</h2>
          <p>No vendemos tus datos a terceros. Utilizamos herramientas de confianza como Supabase para almacenamiento y n8n para automatizaciones internas, garantizando que tu información se trate con seguridad.</p>
          <p className="pt-8 text-sm text-slate-500 italic">Última actualización: Mayo 2024</p>
        </div>
      </div>
    </div>
  );
};
