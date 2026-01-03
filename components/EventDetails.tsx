
import React from 'react';

export const EventDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-2">
        <svg className="w-6 h-6 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Data</span>
        <span className="text-slate-100 font-semibold text-lg">8 de fevereiro, 2026</span>
      </div>

      <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-2">
        <svg className="w-6 h-6 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Horário</span>
        <span className="text-slate-100 font-semibold text-lg">19h (Horário de Brasília)</span>
      </div>

      <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-2">
        <svg className="w-6 h-6 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Formato</span>
        <span className="text-slate-100 font-semibold text-lg">Online e Ao Vivo via Zoom</span>
      </div>
    </div>
  );
};
