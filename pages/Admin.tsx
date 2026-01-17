import React from "react";

export const Admin = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Panel de administración
        </h1>
        <p className="mt-4 text-white/70">
          Sección preparada para gestión interna (IAzti). Próximamente: leads,
          emails y automatizaciones.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            Si estás viendo esto en producción, el deploy ya compila correctamente.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Admin;
