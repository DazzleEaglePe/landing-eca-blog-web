"use client";

import React from 'react';
import Image from 'next/image';
import { Contact } from '../Contact';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const ServiceDetail = ({ title, subtitle, description, image, features }: ServiceDetailProps) => {
  return (
    <main className="pt-32 bg-[#f8faff]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Content */}
            <div className="lg:w-1/2 z-10">
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#011F44] leading-[1.1] mb-8 tracking-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                {description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-[#0049B2] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Image
                        src="/icons/icono-check-azul-eca.svg"
                        alt="check"
                        width={12}
                        height={12}
                      />
                    </div>
                    <span className="text-gray-700 font-light text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Visual */}
            <div className="lg:w-1/2 relative">
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-4 bg-[#0049B2]/5 blur-3xl rounded-full"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl bg-white p-2">
                <div className="rounded-[2rem] overflow-hidden">
                  <Image 
                    src={image} 
                    alt={title} 
                    width={800} 
                    height={600} 
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process or Details Section - Placeholder for more specific content if needed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-[#011F44] font-medium mb-16 tracking-tight">
            ¿Por qué elegir nuestro servicio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-[#f8faff] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto">
                 <Image src="/icons/icono-empresa-servicios-eca.svg" alt="" width={24} height={24} />
              </div>
              <h3 className="text-xl font-medium text-[#011F44] mb-4">Experiencia Real</h3>
              <p className="text-gray-500 font-light">Contamos con un equipo de profesionales con amplia trayectoria en el sector.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-[#f8faff] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto">
                 <Image src="/icons/icono-formulario-contacto-eca.svg" alt="" width={24} height={24} />
              </div>
              <h3 className="text-xl font-medium text-[#011F44] mb-4">Soluciones a Medida</h3>
              <p className="text-gray-500 font-light">Adaptamos nuestros procesos a las necesidades específicas de tu empresa.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-[#f8faff] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto">
                 <Image src="/icons/icono-cuadro-decorativo-eca.svg" alt="" width={24} height={24} />
              </div>
              <h3 className="text-xl font-medium text-[#011F44] mb-4">Tecnología Avanzada</h3>
              <p className="text-gray-500 font-light">Utilizamos las mejores herramientas para garantizar eficiencia y precisión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Contact Component with the Map grid */}
      <Contact variant="page" />
    </main>
  );
};
