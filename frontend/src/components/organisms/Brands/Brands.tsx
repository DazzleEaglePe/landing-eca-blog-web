"use client";

import React from 'react';
import Image from 'next/image';

const topLogos = [
  { src: '/images/logos/prinsupe.svg', alt: 'Prinsupe', width: 220, height: 80 },
  { src: '/images/logos/ojeda.svg', alt: 'Ojeda Market', width: 180, height: 80 },
  { src: '/images/logos/acfrup.svg', alt: 'ACFRUP', width: 220, height: 80 },
  { src: '/images/logos/summit.svg', alt: 'Summit', width: 200, height: 80 },
];

const bottomLogos = [
  { src: '/images/logos/prinsupe.svg', alt: 'Prinsupe', width: 220, height: 80 },
  { src: '/images/logos/summit.svg', alt: 'Summit', width: 200, height: 80 },
  { src: '/images/logos/acfrup.svg', alt: 'ACFRUP', width: 220, height: 80 },
];

export const Brands = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-[#0a0a0a] mb-4 tracking-tight">
          Marcas con las que crecemos
        </h2>
        <p className="text-[#808080] text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Más que clientes, son aliados que nos permiten ser parte de su historia
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Top Row (4 logos) */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20 mb-10">
          {topLogos.map((logo, index) => (
            <div 
              key={`top-${index}`} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width} 
                height={logo.height} 
                className="object-contain w-32 md:w-40 lg:w-48 h-auto"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row (3 logos) */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {bottomLogos.map((logo, index) => (
            <div 
              key={`bottom-${index}`} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width} 
                height={logo.height} 
                className="object-contain w-32 md:w-40 lg:w-48 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
