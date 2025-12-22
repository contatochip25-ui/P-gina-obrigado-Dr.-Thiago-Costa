
import React from 'react';

export const ActionCard: React.FC = () => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-24 -top-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-slate-950 text-base font-bold italic">!</span>
            O Grupo de Avisos é Indispensável
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Este é um evento restrito para médicos e formandos. Não enviamos links via e-mail marketing tradicional para evitar spam. O <strong>Grupo Oficial de Avisos</strong> é o único canal seguro para receber seu link de acesso, materiais complementares e atualizações cruciais em tempo real.
          </p>
        </div>

        <div className="space-y-6">
          <a 
            href="https://wa.me/seulinkoficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white text-xl font-bold rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all hover:-translate-y-1 active:scale-95 group"
          >
            <span className="mr-3">Entrar no Grupo Oficial de Avisos Agora</span>
            <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl">
            <p className="text-amber-200/80 text-sm md:text-base text-center font-medium">
              ⚠️ <strong>Risco de exclusão:</strong> Sem o acesso ao grupo, você não receberá o link da transmissão e ficará tecnicamente impossibilitado de participar do Workshop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
