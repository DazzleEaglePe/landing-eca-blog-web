"use client";

import React, { useState, useEffect } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-4 lg:left-8 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-black/5 max-w-[360px] flex flex-col gap-6">
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#0049B2]/5 flex items-center justify-center flex-shrink-0 text-2xl">
             🍪
          </div>
          <div>
            <h4 className="text-[#0a0a0a] font-bold text-base mb-1">Usamos cookies</h4>
            <p className="text-[#0a0a0a]/60 text-sm leading-relaxed">
              Para mejorar tu experiencia. <a href="#" className="text-[#0049B2] font-medium underline underline-offset-4">Política de Cookies.</a>
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-[#0049B2] hover:bg-[#003d99] text-white py-3 rounded-full text-sm font-semibold transition-all active:scale-95"
          >
            Aceptar
          </button>
          <button 
            onClick={handleDecline}
            className="flex-1 bg-[#4a6b8a] hover:bg-[#3a5b7a] text-white py-3 rounded-full text-sm font-semibold transition-all active:scale-95"
          >
            Rechazar
          </button>
        </div>

      </div>
    </div>
  );
};
