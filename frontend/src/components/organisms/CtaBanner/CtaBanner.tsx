import React from 'react';
import Link from 'next/link';

export const CtaBanner = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/servicio-gestion-contable-eca.png)' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-[#011F44]/80 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto border border-white/20 bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
            ¡CONSTITUYE TU EMPRESA RÁPIDA, DIGITAL Y SEGURA!
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Simplifica tu contabilidad y asegura el cumplimiento tributario hoy mismo.
          </p>
          <Link 
            href="/contactanos"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#011F44] transition-colors duration-300 rounded-full px-8 md:px-12 py-3 md:py-4 font-medium text-base md:text-lg"
          >
            ¡Contáctanos YA!
          </Link>
        </div>
      </div>
    </section>
  );
};
