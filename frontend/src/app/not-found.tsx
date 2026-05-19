import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-28 lg:pt-36 pb-16">

      {/* ───── Decorative Background Elements (Light Theme) ───── */}

      {/* Soft glowing orb in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0049B2]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating geometric shapes in soft blue/accent */}
      {/* Top-right diamond */}
      <svg className="absolute top-[18%] right-[18%] w-5 h-5 text-[#0049B2]/10 animate-pulse" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="10" y="0" width="7" height="7" transform="rotate(45 10 0)" stroke="currentColor" strokeWidth="1.5"/>
      </svg>

      {/* Top-left cross */}
      <svg className="absolute top-[24%] left-[15%] w-4 h-4 text-[#0049B2]/10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>

      {/* Bottom-right small square */}
      <svg className="absolute bottom-[28%] right-[12%] w-4 h-4 text-[#0049B2]/10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>

      {/* Left diamond */}
      <svg className="absolute top-[58%] left-[10%] w-5 h-5 text-[#0049B2]/10 animate-pulse" style={{animationDelay: '1s'}} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L18 10L10 18L2 10L10 2Z" stroke="currentColor" strokeWidth="1.2"/>
      </svg>

      {/* Floating dots */}
      <div className="absolute top-[32%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#0049B2]/20 animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-[20%] left-[30%] w-1 h-1 rounded-full bg-[#0049B2]/15 animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute bottom-[32%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#0049B2]/15 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-[22%] right-[30%] w-1 h-1 rounded-full bg-[#0049B2]/15 animate-pulse" style={{animationDelay: '0.8s'}} />

      {/* Bottom-left cross */}
      <svg className="absolute bottom-[18%] left-[25%] w-3 h-3 text-[#0049B2]/10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>

      {/* ───── Main Content ───── */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">

        {/* The big 404 */}
        <div className="relative mb-6">
          {/* Soft shadow effect behind numbers */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[150px] bg-[#0049B2]/5 rounded-full blur-[60px]" />
          </div>
          <h1 className="relative text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#011F44] to-[#0049B2] select-none filter drop-shadow-sm">
            404
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl text-[#011F44] font-medium leading-[1.15] tracking-tight mb-5">
          Página no encontrada
        </h2>

        {/* Description */}
        <p className="text-[rgba(0,0,0,0.57)] text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-md mb-10">
          Lo sentimos, la página que buscas no existe, ha sido movida o está temporalmente fuera de servicio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#094893] text-white hover:bg-[#073a78] px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-[#094893]/15"
          >
            Volver al inicio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/contactanos"
            className="inline-flex items-center gap-3 bg-transparent text-[#094893] border border-[#094893]/30 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:bg-blue-50/50 hover:border-[#094893]/60 hover:scale-[1.03] active:scale-[0.97]"
          >
            Contáctanos
          </Link>
        </div>

        {/* Quick navigation links */}
        <div className="mt-14 pt-8 border-t border-gray-100 w-full max-w-lg">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-semibold">También podrías buscar</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link href="/servicios/gestion-contable" className="text-[#456693] text-sm hover:text-[#0049B2] transition-colors font-medium">
              Gestión Contable
            </Link>
            <span className="text-gray-200 hidden sm:inline">·</span>
            <Link href="/servicios/outsourcing-tributario" className="text-[#456693] text-sm hover:text-[#0049B2] transition-colors font-medium">
              Outsourcing Tributario
            </Link>
            <span className="text-gray-200 hidden sm:inline">·</span>
            <Link href="/servicios/gestion-de-planillas" className="text-[#456693] text-sm hover:text-[#0049B2] transition-colors font-medium">
              Gestión de Planillas
            </Link>
            <span className="text-gray-200 hidden sm:inline">·</span>
            <Link href="/nosotros" className="text-[#456693] text-sm hover:text-[#0049B2] transition-colors font-medium">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
