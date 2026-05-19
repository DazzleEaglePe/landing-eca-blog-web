import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Brands } from '@/components/organisms/Brands/Brands';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce a ECA Soluciones Empresariales. Somos un equipo de profesionales especializados en ofrecer soluciones contables, financieras y tributarias para el crecimiento de tu empresa.",
};

const team = [
  { name: "Edith Álvarez", role: "Contadora General", initials: "EA", color: "from-[#0049B2] to-[#011F44]" },
  { name: "Michael Mendoza", role: "Administrador y Asesor Contable", initials: "MM", color: "from-[#094893] to-[#011F44]" },
  { name: "Marleny Arteaga", role: "Asistente Contable", initials: "MA", color: "from-[#0049B2] to-[#094893]" },
  { name: "Gianmarco Villalbac", role: "Asesor Contable", initials: "GV", color: "from-[#094893] to-[#011F44]" },
];

const values = [
  {
    title: "Compromiso",
    desc: "Nos dedicamos a ofrecer un servicio de alta calidad y confiabilidad a cada uno de nuestros clientes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Innovación",
    desc: "Incorporamos herramientas tecnológicas y mejores prácticas para mejorar la eficiencia en la gestión contable.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Ética",
    desc: "Actuamos con integridad y transparencia en todos nuestros procesos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Responsabilidad",
    desc: "Aseguramos el cumplimiento de las normativas legales vigentes para proteger los intereses de nuestros clientes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

const stats = [
  { number: "200+", label: "Proyectos completados" },
  { number: "20+", label: "Años de experiencia" },
  { number: "98%", label: "Clientes satisfechos" },
  { number: "4", label: "Líneas de servicio" },
];

const milestones = [
  { year: "2005", title: "Fundación", desc: "Se funda ECA Soluciones Empresariales SAC con la visión de democratizar la asesoría contable de calidad para las Mypes en Lima." },
  { year: "2012", title: "Consolidación", desc: "Ampliamos nuestro portafolio de servicios para incluir outsourcing tributario completo y representación ante la SUNAT." },
  { year: "2018", title: "Transformación Digital", desc: "Incorporamos herramientas tecnológicas para digitalizar procesos contables y ofrecer un servicio más eficiente a nuestros clientes." },
  { year: "2024", title: "Crecimiento Nacional", desc: "Expandimos nuestro alcance con asesoría remota para empresas en todo el Perú, superando los 200 proyectos exitosos." },
];

export default function NosotrosPage() {
  return (
    <main className="pt-24 lg:pt-32 bg-white">

      {/* ═══════════════════════════════════════════════════════
          HERO — Split layout: headline left, team image right
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Soft decorative orb */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#0049B2]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="lg:w-1/2 relative z-10">
              <p className="text-[#0049B2] text-sm md:text-base mb-6 flex items-center gap-3 font-semibold tracking-widest uppercase">
                <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
                Sobre nosotros
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0a0a0a] leading-[1.05] tracking-tight mb-8">
                <span className="font-light">Con una administración</span>
                <br />
                <span className="font-light">eficiente </span>
                <span className="font-medium text-[#011F44]">podrás dedicar más energía a tu empresa.</span>
              </h1>

              <p className="text-[rgba(0,0,0,0.57)] text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
                Somos ECA Soluciones Empresariales, un equipo de profesionales apasionados por transformar la gestión contable de las Mypes en el Perú.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactanos"
                  className="inline-flex items-center gap-3 bg-[#094893] text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-[#073a78] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#094893]/20"
                >
                  Agenda tu cita
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/servicios/gestion-contable"
                  className="inline-flex items-center gap-3 bg-transparent text-[#094893] border border-[#094893]/25 px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-blue-50/50 hover:border-[#094893]/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Right — Team Photo with overlay */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#011F44]/10">
                <Image
                  src="/images/equipo-eca-soluciones-empresariales.png"
                  alt="Equipo profesional de ECA Soluciones Empresariales"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle gradient overlay on the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011F44]/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl shadow-black/10 p-5 border border-gray-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0049B2]/10 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0049B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                      <polyline points="16 7 22 7 22 13"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#011F44]">200+</p>
                    <p className="text-xs text-[rgba(0,0,0,0.5)] font-medium">Proyectos completados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BAR — Full-width, bold metrics row
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f8fafb] border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#011F44] tracking-tight leading-none mb-2">
                  {stat.number}
                </p>
                <p className="text-[rgba(0,0,0,0.5)] text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUIÉNES SOMOS — Split text with accent line
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left Heading */}
            <div className="lg:w-5/12 lg:sticky lg:top-40">
              <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
                <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
                Quiénes somos
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a0a0a] leading-[1.08] tracking-tight">
                <span className="font-light">Trabajamos en tus</span>
                <br />
                <span className="font-medium">objetivos empresariales.</span>
              </h2>

              {/* Decorative accent */}
              <div className="hidden lg:flex items-center gap-3 mt-12">
                <div className="w-16 h-16 rounded-2xl bg-[#0049B2]/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0049B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#011F44]">+15 años de experiencia</p>
                  <p className="text-xs text-[rgba(0,0,0,0.5)]">Creciendo junto a nuestros clientes</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-7/12 flex flex-col gap-8">
              <p className="text-[rgba(0,0,0,0.57)] text-xl md:text-2xl font-light leading-relaxed">
                Somos un equipo de profesionales especializados en ofrecer soluciones contables, financieras y tributarias. Nos enfocamos en brindar asesoría personalizada en contabilidad, impuestos, gestión de planillas, finanzas, costos y auditoría.
              </p>
              <p className="text-[rgba(0,0,0,0.57)] text-xl md:text-2xl font-light leading-relaxed">
                Además, gestionamos trámites relacionados con la devolución de impuestos, restitución de derechos arancelarios como Drawback, y representamos a nuestros clientes ante entidades como la SUNAT y SUNAFIL en procesos de fiscalización y auditoría.
              </p>
              <div className="bg-[#f8fafb] rounded-2xl p-8 border border-gray-100 mt-2">
                <p className="text-[#011F44] text-lg md:text-xl font-normal leading-relaxed">
                  &ldquo;Nuestro compromiso es proporcionar un servicio de alta calidad, asegurando el cumplimiento normativo y la optimización de los recursos financieros de nuestros clientes.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0049B2] to-[#011F44] flex items-center justify-center">
                    <span className="text-sm font-medium text-white">EA</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0a0a0a]">Edith Álvarez</p>
                    <p className="text-xs text-[rgba(0,0,0,0.5)]">Contadora General — Fundadora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TIMELINE — Company milestones
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#f8fafb] border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0049B2] text-sm md:text-base mb-4 font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
              Nuestra trayectoria
              <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl text-[#0a0a0a] leading-[1.08] tracking-tight">
              <span className="font-light">Más de una década</span>{" "}
              <span className="font-medium">creciendo contigo.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0049B2]/20 via-[#0049B2]/40 to-[#0049B2]/10 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0049B2]/20 via-[#0049B2]/40 to-[#0049B2]/10 md:hidden" />

            <div className="flex flex-col gap-12">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-8 md:gap-12 relative ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#0049B2] border-4 border-white shadow-md -translate-x-1/2 z-10 mt-2" />

                  {/* Content Card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                    <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <span className="inline-block text-xs font-bold text-[#0049B2] bg-[#0049B2]/10 px-3 py-1 rounded-full mb-3 tracking-wider">
                        {m.year}
                      </span>
                      <h3 className="text-xl font-medium text-[#011F44] mb-2">{m.title}</h3>
                      <p className="text-[rgba(0,0,0,0.57)] text-base font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for the opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MISIÓN & VISIÓN — Dark immersive panel
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#011F44] py-20 lg:py-28 relative overflow-hidden">
        {/* Background accent orbs */}
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#0049B2]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#0049B2]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-white/50 text-sm md:text-base mb-4 font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
              Lo que nos guía
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl text-white leading-[1.08] tracking-tight">
              <span className="font-light">Nuestra</span>{" "}
              <span className="font-medium">razón de ser.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Misión */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-[#0049B2]/30 transition-colors duration-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">Nuestra misión</p>
              <h3 className="text-2xl md:text-3xl text-white font-medium leading-[1.2] tracking-tight mb-5">
                ¿Por qué existimos?
              </h3>
              <p className="text-white/55 text-base md:text-lg font-light leading-relaxed">
                Brindar soluciones contables integrales y personalizadas que permitan a las micro y pequeñas empresas en Perú gestionar de manera eficiente sus recursos financieros y cumplir con sus obligaciones fiscales, laborales y tributarias, contribuyendo así a su crecimiento y sostenibilidad.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-[#0049B2]/30 transition-colors duration-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">Nuestra visión</p>
              <h3 className="text-2xl md:text-3xl text-white font-medium leading-[1.2] tracking-tight mb-5">
                ¿Hacia dónde vamos?
              </h3>
              <p className="text-white/55 text-base md:text-lg font-light leading-relaxed">
                Ser el estudio contable de referencia para micro y pequeñas empresas en Perú, reconocido por nuestra calidad de servicio, innovación y compromiso con el desarrollo económico de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VALORES — Modern card grid with icons
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
                <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
                Lo que nos define
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a0a0a] leading-[1.08] tracking-tight">
                <span className="font-light">Nuestros</span>{" "}
                <span className="font-medium">valores.</span>
              </h2>
            </div>
            <p className="text-[rgba(0,0,0,0.5)] text-base md:text-lg font-light max-w-md leading-relaxed">
              Cada decisión que tomamos y cada servicio que brindamos refleja estos principios fundamentales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-[#0049B2]/5 hover:-translate-y-1 hover:border-[#0049B2]/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0049B2]/10 text-[#0049B2] flex items-center justify-center mb-6 group-hover:bg-[#0049B2] group-hover:text-white transition-all duration-500">
                  {val.icon}
                </div>
                <h3 className="text-[#0a0a0a] text-xl md:text-2xl font-medium mb-3">{val.title}</h3>
                <p className="text-[rgba(0,0,0,0.57)] text-base md:text-lg font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          EQUIPO — Premium team grid with gradient avatars
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#f8fafb] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0049B2] text-sm md:text-base mb-4 font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
              Conoce nuestro equipo
              <span className="w-8 h-[2px] bg-[#0049B2] inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl text-[#0a0a0a] leading-[1.08] tracking-tight">
              <span className="font-light">Más que contadores,</span>
              <br />
              <span className="font-medium">somos tus aliados estratégicos.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className={`w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 shadow-lg shadow-[#011F44]/10 group-hover:shadow-xl group-hover:shadow-[#0049B2]/20 group-hover:scale-[1.05] transition-all duration-500`}>
                  <span className="text-3xl md:text-4xl font-light text-white/90">{member.initials}</span>
                </div>
                <h3 className="text-lg md:text-xl text-[#0a0a0a] font-medium mb-1">{member.name}</h3>
                <p className="text-[rgba(0,0,0,0.5)] text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER — Premium dark call-to-action
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#011F44] rounded-[2.5rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center relative overflow-hidden max-w-6xl mx-auto">
            {/* Background accent */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#0049B2]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Left */}
            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                ¡Constituye tu empresa{" "}
                <span className="font-medium text-blue-200">rápida, digital y segura!</span>
              </h2>
              <p className="text-white/55 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                Simplifica tu contabilidad y asegura el cumplimiento tributario hoy mismo.
              </p>
            </div>

            {/* Right */}
            <Link
              href="/contactanos"
              className="inline-flex items-center gap-4 bg-white text-[#011F44] px-10 py-4 rounded-full font-medium text-base transition-all hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] flex-shrink-0 z-10 shadow-lg shadow-black/20"
            >
              ¡Contáctanos YA!
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Brands ───── */}
      <Brands />

    </main>
  );
}
