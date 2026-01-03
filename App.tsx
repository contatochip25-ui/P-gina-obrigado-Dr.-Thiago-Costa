import React, { useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { AlertBanner } from './components/AlertBanner.tsx';
import { VideoPlayer } from './components/VideoPlayer.tsx';
import { ActionCard } from './components/ActionCard.tsx';
import { EventDetails } from './components/EventDetails.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center selection:bg-blue-500/30">
      <AlertBanner />
      
      <main className="w-full max-w-4xl px-4 py-8 md:py-16 space-y-12">
        <Header 
          headline="Obrigado! Sua inscrição foi confirmada ✅"
          subheadline="Sua vaga está garantida para o Workshop ao Vivo no dia 8 de fevereiro de 2026, às 19h, via Zoom."
        />

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <section className="space-y-8">
            <VideoPlayer />
            <ActionCard />
            <EventDetails />
          </section>
        </div>
      </main>

      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-md border-t border-slate-800 md:hidden z-50">
        <a 
          href="https://chat.whatsapp.com/JC1ut2SVR3g2CRvPjskHYd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95"
        >
          Entrar no Grupo Oficial Agora
        </a>
      </div>
    </div>
  );
};

export default App;