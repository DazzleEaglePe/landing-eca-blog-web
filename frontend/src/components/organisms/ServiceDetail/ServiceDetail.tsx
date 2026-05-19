"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Contact } from '../Contact';
import { ServicesTabs } from '../ServicesTabs';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  children?: React.ReactNode;
}

export const ServiceDetail = ({ title, subtitle, description, image, children }: ServiceDetailProps) => {
  return (
    <main className="pt-32 bg-[#f8faff]">
      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-28 overflow-hidden bg-[#f8faff]">
        {/* Decorative blue orb */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#0049B2]/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-[#0049B2]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Content */}
            <div className="lg:w-1/2 z-10">
              <p className="text-[#0049B2] text-sm md:text-base mb-5 flex items-center gap-3 font-semibold tracking-widest uppercase">
                <span className="w-8 h-[2px] bg-[#0049B2]/60 inline-block"></span>
                {subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal text-[#011F44] leading-[1.1] mb-8 tracking-tight">
                <span className="font-light block">Servicio de</span>
                <span className="font-medium">{title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#094893] hover:bg-[#0049B2] text-white font-medium text-base px-8 py-4 rounded-full shadow-lg shadow-[#094893]/25 hover:shadow-xl hover:shadow-[#0049B2]/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Solicitar Asesoría
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-[#011F44]/15 hover:border-[#0049B2]/40 text-[#011F44] font-medium text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-white/60"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#0049B2]/5 blur-3xl rounded-full"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl bg-white p-2">
                <div className="rounded-[2rem] overflow-hidden relative">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011F44]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0049B2]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#0049B2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#011F44] tracking-wide">
                    Servicio Certificado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}
      <ServicesTabs />
      <Contact variant="page" />
    </main>
  );
};
