"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: 0,
    label: "Restitución de Derechos y Arancelarios",
    badge: "Tributario",
    description:
      "Nos encargamos de la revisión y preparación de la documentación necesaria para solicitar la devolución de Drawback.",
  },
  {
    id: 1,
    label: "Trámites ante SUNAT",
    badge: "Tributario",
    description:
      "Gestionamos todos tus trámites ante la SUNAT con eficiencia y precisión, desde declaraciones hasta recursos de reclamación.",
  },
  {
    id: 2,
    label: "Trámites ante SUNAFIL",
    badge: "Laboral",
    description:
      "Te acompañamos en los procesos ante la SUNAFIL, asegurando el cumplimiento laboral de tu empresa y minimizando riesgos.",
  },
  {
    id: 3,
    label: "Solicitud de Devolución de Impuestos",
    badge: "Tributario",
    description:
      "Identificamos y gestionamos las oportunidades de devolución de impuestos que le corresponden a tu empresa, maximizando tus recursos.",
  },
  {
    id: 4,
    label: "Devolución de otros impuestos",
    badge: "Tributario",
    description:
      "La devolución de tributos se produce por un pago indebido del contribuyente o por un pago en exceso del mismo.",
  },
  {
    id: 5,
    label: "Trámites en SUNARP",
    badge: "Legal",
    description:
      "Gestión ágil de copia literal, vigencia de poder, inscripciones y demás trámites registrales necesarios para tu negocio.",
  },
  {
    id: 6,
    label: "Constitución de empresas",
    badge: "Legal",
    description:
      "Nos encargamos de la revisión y preparación de toda la documentación necesaria para constituir y formalizar tu empresa de manera exitosa.",
  },
  {
    id: 7,
    label: "Declara y Paga tu DDJJ Impuestos",
    badge: "Contable",
    description:
      "Nos encargamos de la revisión, preparación y presentación oportuna de tus Declaraciones Juradas de impuestos para evitar multas.",
  },
  {
    id: 8,
    label: "Atención a Fiscalizaciones y Reclamos",
    badge: "Auditoría",
    description:
      "Brindando apoyo en auditorías de IGV, Impuesto a la Renta y otras obligaciones tributarias.",
  },
];

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const active = services[activeTab];

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  // Mouse handlers for drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    // Remove smooth scroll temporarily during drag to avoid lag
    scrollContainerRef.current.classList.remove('scroll-smooth');
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.add('scroll-smooth');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
            <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
            Nuestros servicios
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#0a0a0a] font-medium leading-[1.1] tracking-tight">
            <span className="font-light">Trabajamos en tus</span>
            <br />
            objetivos{" "}
            <span className="inline-block bg-[#0049B2] text-white rounded-full px-6 py-1.5 font-medium leading-tight text-[0.85em]">
              empresariales.
            </span>
          </h2>
        </div>

        {/* Tabs Row Wrapper */}
        <div className="flex items-center w-full mb-12">
          
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`flex items-center gap-[0.90rem] overflow-x-auto pb-4 pt-6 scrollbar-hide scroll-smooth flex-1 pr-6 md:pr-12 ${isDragging ? 'cursor-grabbing select-none snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
          >
            {services.map((service, i) => (
              <div key={service.id} className="relative flex-shrink-0 snap-start">
                {/* Black Badge */}
                {service.badge && (
                  <span className="absolute -top-4 right-0 bg-[#000000] text-white/57 text-[11px] font-normal px-5 py-1 rounded-full z-10 whitespace-nowrap shadow-sm">
                    {service.badge}
                  </span>
                )}

                {/* Tab button */}
                <button
                  onClick={() => setActiveTab(i)}
                  className={`rounded-full px-6 py-2.5 text-sm md:text-base font-normal transition-all duration-300 border-2 whitespace-nowrap ${
                    activeTab === i
                      ? "bg-[#0049B2] text-white border-[#0049B2] shadow-md"
                      : "bg-white text-[#0049B2] border-[#0049B2] hover:bg-[#0049B2]/5"
                  }`}
                >
                  {service.label}
                </button>
              </div>
            ))}
          </div>
          
          {/* Fixed Arrow Next */}
          <div className="flex-shrink-0 pb-4 pt-6">
            <button 
              onClick={scrollNext}
              className="flex items-center justify-center text-[#0049B2] hover:text-[#0049B2]/70 transition-colors cursor-pointer p-2"
              aria-label="Ver más servicios"
            >
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transition-transform hover:translate-x-1">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </button>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* Left: Text & Arrow Block */}
          <div className="w-full lg:w-[52%] flex flex-col items-start">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-10 w-full">
              <p className="text-[#0a0a0a] text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.2] tracking-tight flex-1">
                {active.description}
              </p>
              
              {/* Arrow icon circle - Reverted circle size to w-16, kept arrow at 36px */}
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-[#1a1a1a] transition-colors">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7v8" stroke="rgba(255, 255, 255, 0.57)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* CTA Button - Direct use of the original icon */}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? "51923341098"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-[#0049B2] hover:bg-[#003d99] text-white text-base md:text-lg font-normal pl-10 pr-6 py-4 rounded-full transition-colors group self-start"
            >
              Recibir más información
              <Image
                src="/icons/icono-whatsapp-verde-eca.svg"
                alt="Solicitar información por WhatsApp ECA"
                width={28}
                height={28}
                className="transition-transform"
              />
            </a>
          </div>

          {/* Right: Grafico Informativo */}
          <div className="flex-shrink-0 w-full lg:w-[40%] aspect-[4/3] lg:aspect-square relative rounded-[2.5rem] overflow-hidden shadow-xl mt-4 lg:mt-0">
            <Image
              src="/images/grafico-servicios-blue-eca.png"
              alt="Servicios Contables y Empresariales de ECA Asesores"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};
