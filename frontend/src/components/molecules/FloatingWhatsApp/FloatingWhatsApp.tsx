"use client";

import React from 'react';
import Image from 'next/image';
import { trackWhatsAppClick } from '@/lib/gtag';

export const FloatingWhatsApp = () => {
  // Número de WhatsApp (puedes cambiarlo aquí)
  const phoneNumber = "51923341098"; 
  const message = "Hola, me gustaría recibir asesoría contable para mi empresa.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('flotante')}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[90] flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] hover:bg-[#1ebd5b] rounded-full shadow-lg transition-transform hover:-translate-y-1 group"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/icons/icono-whatsapp-verde-eca.svg"
        alt="WhatsApp"
        width={32}
        height={32}
        className="w-8 h-8 lg:w-10 lg:h-10 filter brightness-0 invert"
      />
      {/* Tooltip opcional en hover */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-[#0a0a0a] text-sm font-normal rounded-2xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Escríbenos al WhatsApp
      </span>
    </a>
  );
};
