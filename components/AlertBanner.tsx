
import React from 'react';

export const AlertBanner: React.FC = () => {
  return (
    <div className="w-full bg-red-950/30 border-b border-red-500/20 py-3 px-4 flex justify-center items-center gap-3 animate-pulse">
      <span className="flex h-2 w-2 rounded-full bg-red-500"></span>
      <p className="text-red-200 text-sm font-medium tracking-wide uppercase text-center">
        ⚠️ ATENÇÃO: Esta página é exibida apenas uma vez. Não feche antes do passo final.
      </p>
    </div>
  );
};
