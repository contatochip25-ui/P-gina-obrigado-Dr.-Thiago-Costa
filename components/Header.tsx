
import React from 'react';

interface HeaderProps {
  headline: string;
  subheadline: string;
}

export const Header: React.FC<HeaderProps> = ({ headline, subheadline }) => {
  return (
    <header className="text-center space-y-6">
      <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
          Confirmação de Pagamento Recebida
        </span>
      </div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-slate-50 max-w-4xl mx-auto">
        {headline}
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
        {subheadline}
      </p>
    </header>
  );
};
