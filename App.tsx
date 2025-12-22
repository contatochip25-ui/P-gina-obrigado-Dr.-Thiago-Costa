
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { AlertBanner } from './components/AlertBanner';
import { VideoPlayer } from './components/VideoPlayer';
import { ActionCard } from './components/ActionCard';
import { EventDetails } from './components/EventDetails';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Analytics or scroll behavior could go here
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center selection:bg-blue-500/30">
      <AlertBanner />
      
      <main className="w-full max-w-4xl px-4 py-8 md:py-16 space-y-12">
        <Header 
          headline="Inscrição Confirmada. Sua jornada para a Medicina de Elite começa agora."
          subheadline="Sua vaga está garantida para o dia 18/01, mas para receber o acesso oficial, você precisa concluir o passo final abaixo."
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
          href="https://wa.me/seulinkaqui" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95"
        >
          Entrar no Grupo de Avisos Agora
        </a>
      </div>
    </div>
  );
};

export default App;
