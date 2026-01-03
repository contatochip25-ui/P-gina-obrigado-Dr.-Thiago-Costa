
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-4xl px-4 py-12 text-center space-y-6 border-t border-slate-900/50 mt-auto pb-24 md:pb-12">
      <p className="text-slate-600 text-sm font-light">
        © 2026 Workshop Carreira Médica de Elite. Todos os direitos reservados.
      </p>
      <div className="flex justify-center gap-6">
        <span className="text-xs text-slate-700 uppercase tracking-tighter">Exclusivo para Médicos</span>
      </div>
    </footer>
  );
};
