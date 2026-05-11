"use client";

import React from 'react';
import Image from 'next/image';

const services = [
  "Outsourcing Contable",
  "Gestión de Planillas",
  "Servicios adicionales",
  "Consultoría Tributaria",
  "Asesoría Financiera",
  "Auditoría Externa",
];

export const ServiceMarquee = () => {
  // Duplicate the list to ensure smooth infinite scroll
  const items = [...services, ...services, ...services];

  return (
    <div className="bg-[#0049B2] py-4 lg:py-6 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {items.map((service, index) => (
          <div key={index} className="flex items-center mx-6 lg:mx-10">
            <span className="text-[#4C95FF] text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
              {service}
            </span>
            <div className="ml-6 lg:ml-10 flex-shrink-0">
              <Image
                src="/icons/icono-cabecera-carrusel-eca.svg"
                alt="separator"
                width={60}
                height={60}
                className="w-10 h-10 lg:w-14 lg:h-14 opacity-100"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
};
