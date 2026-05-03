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
  { name: "Edith Álvarez", role: "Contadora General", initials: "EA" },
  { name: "Michael Mendoza", role: "Administrador y Asesor Contable", initials: "MM" },
  { name: "Marleny Arteaga", role: "Asistente Contable", initials: "MA" },
  { name: "Gianmarco Villalbac", role: "Asesor Contable", initials: "GV" },
];

const values = [
  {
    title: "Compromiso",
    desc: "Nos dedicamos a ofrecer un servicio de alta calidad y confiabilidad a cada uno de nuestros clientes.",
  },
  {
    title: "Innovación",
    desc: "Incorporamos herramientas tecnológicas y mejores prácticas para mejorar la eficiencia en la gestión contable.",
  },
  {
    title: "Ética",
    desc: "Actuamos con integridad y transparencia en todos nuestros procesos.",
  },
  {
    title: "Responsabilidad",
    desc: "Aseguramos el cumplimiento de las normativas legales vigentes para proteger los intereses de nuestros clientes.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="pt-24 lg:pt-32 bg-white">

      {/* ───── Hero ───── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-[#456693] text-base md:text-lg mb-4 flex items-center gap-3 font-light tracking-wide">
            <span className="w-6 h-[1.5px] bg-[#456693]/50 inline-block" />
            Sobre nosotros
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0a0a0a] leading-[1.1] tracking-tight max-w-5xl">
            <span className="font-light">Con una administración eficiente</span>
            <br />
            <span className="font-medium">podrás dedicar más energía a tu empresa.</span>
          </h1>
        </div>
      </section>

      {/* ───── Quiénes Somos ───── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left */}
            <div className="lg:w-5/12">
              <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
                <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
                Quiénes somos
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a0a0a] leading-[1.1] tracking-tight">
                <span className="font-light">Trabajamos en tus</span>
                <br />
                <span className="font-medium">objetivos empresariales.</span>
              </h2>
            </div>

            {/* Right */}
            <div className="lg:w-7/12 flex flex-col gap-6">
              <p className="text-[rgba(0,0,0,0.57)] text-xl md:text-2xl font-light leading-relaxed">
                Somos un equipo de profesionales especializados en ofrecer soluciones contables, financieras y tributarias. Nos enfocamos en brindar asesoría personalizada en contabilidad, impuestos, gestión de planillas, finanzas, costos y auditoría.
              </p>
              <p className="text-[rgba(0,0,0,0.57)] text-xl md:text-2xl font-light leading-relaxed">
                Además, gestionamos trámites relacionados con la devolución de impuestos, restitución de derechos arancelarios como Drawback, y representamos a nuestros clientes ante entidades como la SUNAT y SUNAFIL en procesos de fiscalización y auditoría.
              </p>
              <p className="text-[#0a0a0a] text-lg font-normal mt-4">
                Nuestro compromiso es proporcionar un servicio de alta calidad, asegurando el cumplimiento normativo y la optimización de los recursos financieros de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Misión y Visión ───── */}
      <section className="bg-[#011F44] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Misión */}
            <div className="flex-1">
              <p className="text-white/60 text-sm mb-4 flex items-center gap-3 font-light tracking-wide">
                <span className="w-6 h-[1.5px] bg-white/40 inline-block" />
                Nuestra misión
              </p>
              <h3 className="text-3xl md:text-4xl text-white font-medium leading-[1.2] tracking-tight mb-6">
                ¿Por qué existimos?
              </h3>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                Brindar soluciones contables integrales y personalizadas que permitan a las micro y pequeñas empresas en Perú gestionar de manera eficiente sus recursos financieros y cumplir con sus obligaciones fiscales, laborales y tributarias, contribuyendo así a su crecimiento y sostenibilidad.
              </p>
            </div>

            {/* Visión */}
            <div className="flex-1">
              <p className="text-white/60 text-sm mb-4 flex items-center gap-3 font-light tracking-wide">
                <span className="w-6 h-[1.5px] bg-white/40 inline-block" />
                Nuestra visión
              </p>
              <h3 className="text-3xl md:text-4xl text-white font-medium leading-[1.2] tracking-tight mb-6">
                ¿Hacia dónde vamos?
              </h3>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                Ser el estudio contable de referencia para micro y pequeñas empresas en Perú, reconocido por nuestra calidad de servicio, innovación y compromiso con el desarrollo económico de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Valores ───── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="mb-12">
            <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
              <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
              Lo que nos define
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a0a0a] leading-[1.1] tracking-tight">
              <span className="font-light">Nuestros</span>{" "}
              <span className="font-medium">valores.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((val, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#0049B2] flex items-center justify-center flex-shrink-0 mt-1">
                  <Image
                    src="/icons/CHECK ICON.svg"
                    alt="check"
                    width={16}
                    height={16}
                  />
                </div>
                <div>
                  <h3 className="text-[#0a0a0a] text-xl md:text-2xl font-medium mb-2">{val.title}</h3>
                  <p className="text-[rgba(0,0,0,0.57)] text-base md:text-lg font-light leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#011F44] rounded-[2.5rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center relative overflow-hidden">

            {/* Left */}
            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                ¡Constituye tu empresa{" "}
                <span className="font-medium">rápida, digital y segura!</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light max-w-lg">
                Simplifica tu contabilidad y asegura el cumplimiento tributario hoy mismo.
              </p>
            </div>

            {/* Right */}
            <Link
              href="/contactanos"
              className="inline-flex items-center gap-4 bg-white text-[#011F44] px-10 py-4 rounded-full font-normal text-base transition-colors hover:bg-gray-100 flex-shrink-0"
            >
              ¡Contáctanos YA!
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Equipo ───── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="mb-16">
            <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
              <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
              Conoce nuestro equipo
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a0a0a] leading-[1.1] tracking-tight">
              <span className="font-light">Más que contadores,</span>
              <br />
              <span className="font-medium">somos tus aliados estratégicos.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#f0f4fa] flex items-center justify-center mb-5">
                  <span className="text-3xl md:text-4xl font-light text-[#0049B2]">{member.initials}</span>
                </div>
                <h3 className="text-lg md:text-xl text-[#0a0a0a] font-medium mb-1">{member.name}</h3>
                <p className="text-[rgba(0,0,0,0.57)] text-sm font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Brands ───── */}
      <Brands />

    </main>
  );
}
