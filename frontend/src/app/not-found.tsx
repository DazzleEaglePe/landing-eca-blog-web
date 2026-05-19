import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#011F44] flex items-center justify-center overflow-hidden">

      {/* ───── Decorative Background Elements ───── */}

      {/* Large glowing orb behind the 404 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0049B2]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating geometric shapes */}
      {/* Top-right diamond */}
      <svg className="absolute top-[15%] right-[18%] w-5 h-5 text-white/15 animate-pulse" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="10" y="0" width="7" height="7" transform="rotate(45 10 0)" stroke="currentColor" strokeWidth="1.5"/>
      </svg>

      {/* Top-left cross */}
      <svg className="absolute top-[22%] left-[15%] w-4 h-4 text-white/15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>

      {/* Bottom-right small square */}
      <svg className="absolute bottom-[25%] right-[12%] w-4 h-4 text-white/10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="2" r="2" fill="currentColor"/>
      </svg>

      {/* Left diamond */}
      <svg className="absolute top-[55%] left-[10%] w-5 h-5 text-white/10 animate-pulse" style={{animationDelay: '1s'}} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L18 10L10 18L2 10L10 2Z" stroke="currentColor" strokeWidth="1.2"/>
      </svg>

      {/* Floating dots */}
      <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#4C95FF]/30 animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-[18%] left-[30%] w-1 h-1 rounded-full bg-white/20 animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#4C95FF]/20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-[20%] right-[30%] w-1 h-1 rounded-full bg-white/15 animate-pulse" style={{animationDelay: '0.8s'}} />
      <div className="absolute top-[45%] right-[8%] w-1 h-1 rounded-full bg-white/20 animate-pulse" style={{animationDelay: '1.2s'}} />

      {/* Bottom-left cross */}
      <svg className="absolute bottom-[15%] left-[25%] w-3 h-3 text-white/10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>

      {/* ───── Main Content ───── */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">

        {/* Logo (Small, above the 404) */}
        <Link href="/" className="mb-8 opacity-80 hover:opacity-100 transition-opacity">
          <Image 
            src="/images/logo-eca-asesores-blanco.svg" 
            alt="ECA Soluciones Empresariales Logo" 
            width={160} 
            height={50} 
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* The big 404 */}
        <div className="relative mb-4">
          {/* Glow effect behind numbers */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[200px] bg-[#4C95FF]/15 rounded-full blur-[80px]" />
          </div>
          <h1 className="relative text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#4C95FF]/40 select-none">
            404
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-[1.15] tracking-tight mb-5">
          Página no encontrada
        </h2>

        {/* Description */}
        <p className="text-white/55 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-md mb-10">
          Lo sentimos, la página que buscas no existe o fue movida a otra ubicación.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-white text-[#011F44] px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-black/20"
          >
            Volver al inicio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/contactanos"
            className="inline-flex items-center gap-3 bg-transparent text-white border border-white/30 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-[1.03] active:scale-[0.97]"
          >
            Contáctanos
          </Link>
        </div>

        {/* Quick navigation links */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-semibold">También podrías buscar</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link href="/servicios/gestion-contable" className="text-white/50 text-sm hover:text-white transition-colors font-light">
              Gestión Contable
            </Link>
            <span className="text-white/15 hidden sm:inline">·</span>
            <Link href="/servicios/outsourcing-tributario" className="text-white/50 text-sm hover:text-white transition-colors font-light">
              Outsourcing Tributario
            </Link>
            <span className="text-white/15 hidden sm:inline">·</span>
            <Link href="/servicios/gestion-de-planillas" className="text-white/50 text-sm hover:text-white transition-colors font-light">
              Gestión de Planillas
            </Link>
            <span className="text-white/15 hidden sm:inline">·</span>
            <Link href="/nosotros" className="text-white/50 text-sm hover:text-white transition-colors font-light">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
