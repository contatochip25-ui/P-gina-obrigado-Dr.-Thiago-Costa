
import React from 'react';

export const VideoPlayer: React.FC = () => {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
        {/* Placeholder image/thumbnail for a medical professional context */}
        <img 
          src="https://picsum.photos/id/119/1200/675" 
          alt="Thumbnail" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        
        <div className="z-10 text-center space-y-4 px-6">
          <button className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <p className="text-slate-300 font-medium md:text-lg">Assista a esta breve orientação (60s)</p>
        </div>

        {/* Overlay reflection for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
      </div>
    </div>
  );
};
