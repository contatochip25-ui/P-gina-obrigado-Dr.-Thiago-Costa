import React from 'react';

export const VideoPlayer: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-2">
        <p className="text-slate-300 font-medium md:text-lg">Assista à orientação rápida (60s)</p>
      </div>
      <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="aspect-video bg-slate-800 relative">
          <iframe 
            id="panda-392a3a9a-8d70-4a4e-8f18-13e5bec20bde" 
            src="https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=392a3a9a-8d70-4a4e-8f18-13e5bec20bde&iosFakeFullscreen=true" 
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen={true}
            // @ts-ignore
            fetchPriority="high"
            // @ts-ignore
            poster="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg"
            title="Panda Video Player"
          ></iframe>
        </div>
      </div>
      <p className="text-slate-400 text-center font-light leading-relaxed">
        Essa breve mensagem explica como garantir seu acesso completo e aproveitar o Workshop ao máximo.
      </p>
    </div>
  );
};