import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog & Actualidad Empresarial | ECA Estudio Contable Álvarez",
  description: "Próximamente nuestro portal de actualidad empresarial. Mantente al día con las últimas normativas tributarias, laborales y contables de la mano de ECA Estudio Contable Álvarez.",
};

const upcomingCategories = [
  {
    title: "Actualización Tributaria",
    description: "Análisis y alertas sobre resoluciones de SUNAT, regímenes tributarios y plazos de declaración obligatorios en el Perú.",
    tag: "Tributario",
    color: "from-blue-50 to-indigo-50 border-blue-100 text-blue-700 bg-blue-50/50"
  },
  {
    title: "Gestión de Planillas y Laboral",
    description: "Guías prácticas sobre beneficios sociales, normativas de SUNAFIL, contratos de trabajo y liquidaciones paso a paso.",
    tag: "Laboral",
    color: "from-emerald-50 to-teal-50 border-emerald-100 text-emerald-700 bg-emerald-50/50"
  },
  {
    title: "Finanzas para Mypes",
    description: "Estrategias de control de costos, flujo de caja, acceso a financiamiento y planeación financiera para crecer de forma sostenible.",
    tag: "Financiero",
    color: "from-amber-50 to-orange-50 border-amber-100 text-amber-700 bg-amber-50/50"
  },
  {
    title: "Constitución y Formalización",
    description: "El paso a paso definitivo ante SUNARP y notarías para crear tu empresa de manera digital, rápida y 100% formalizada.",
    tag: "Corporativo",
    color: "from-purple-50 to-fuchsia-50 border-purple-100 text-purple-700 bg-purple-50/50"
  }
];

export default function BlogComingSoonPage() {
  return (
    <main className="pt-24 lg:pt-32 bg-white">
      {/* ───── Hero Section ───── */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle background gradient elements for a premium feel */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0049B2]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <p className="text-[#0049B2] text-sm md:text-base mb-6 flex items-center justify-center gap-3 font-semibold tracking-widest uppercase">
            <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
            Portal de Noticias
            <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#0a0a0a] leading-[1.1] tracking-tight mb-8">
            <span className="font-light text-[#0a0a0a]">Nuestro Blog está</span>
            <br />
            <span className="font-medium text-[#011F44]">en camino.</span>
          </h1>

          <p className="text-[rgba(0,0,0,0.57)] text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Estamos diseñando un espacio de alto valor donde compartiremos análisis, normativas de la SUNAT, SUNAFIL y estrategias financieras para impulsar el crecimiento seguro de tu empresa.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0049B2] text-sm font-medium border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-[#0049B2] animate-pulse" />
            Próximamente disponible
          </div>
        </div>
      </section>

      {/* ───── Categories Sneak Peek ───── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0a0a0a] font-medium leading-[1.2] tracking-tight mb-4">
              ¿Qué encontrarás aquí?
            </h2>
            <p className="text-[rgba(0,0,0,0.57)] text-base md:text-lg font-light">
              Nuestros especialistas están preparando contenido de valor enfocado en las principales áreas que importan a tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border ${cat.color}`}>
                    {cat.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl text-[#0a0a0a] font-medium mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-[rgba(0,0,0,0.57)] text-base md:text-lg font-light leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-[#0049B2] text-sm font-medium gap-2 opacity-60">
                  <span>Ver artículos</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Newsletter / Action ───── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#011F44] rounded-[2.5rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center relative overflow-hidden max-w-6xl mx-auto">
            {/* Background design accents */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                ¿Necesitas asesoría contable <span className="font-medium text-blue-200">ahora mismo?</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                No esperes a que salga el blog. Nuestro equipo de asesores está listo para ayudarte con tu contabilidad hoy.
              </p>
            </div>

            <Link
              href="/contactanos"
              className="inline-flex items-center gap-4 bg-white text-[#011F44] px-10 py-4 rounded-full font-medium text-base transition-all hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] flex-shrink-0 z-10"
            >
              Conversa con nosotros
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
