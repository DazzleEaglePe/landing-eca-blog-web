"use client";

import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/images/logos/logo-prinsupe-aliado-eca.svg', alt: 'Prinsupe - Cliente de ECA Asesores', width: 220, height: 80 },
  { src: '/images/logos/logo-ojeda-aliado-eca.svg', alt: 'Ojeda Market - Cliente de ECA Asesores', width: 180, height: 80 },
  { src: '/images/logos/logo-acfrup-aliado-eca.svg', alt: 'ACFRUP - Cliente de ECA Asesores', width: 220, height: 80 },
  { src: '/images/logos/logo-summit-aliado-eca.svg', alt: 'Summit - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-aadhira-aliado-eca.png', alt: 'Aadhira - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-allsaeoul-aliado-eca.png', alt: 'AllSaeoul - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-ecohielo-aliado-eca.png', alt: 'Eco Hielo - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-latata-aliado-eca.png', alt: 'La Tata - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-vha-inversiones-aliado-eca.png', alt: 'Inversiones VHA - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-newseol-aliado-eca.png', alt: 'New Seol - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-rdg-capital-aliado-eca.png', alt: 'RDG Capital - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-vidreria-navarro-aliado-eca.png', alt: 'Vidrería Navarro - Cliente de ECA Asesores', width: 200, height: 80 },
  { src: '/images/logos/logo-leadsnack-aliado-eca.png', alt: 'Leadsnack - Cliente de ECA Asesores', width: 200, height: 80 },
];

export const Brands = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-12 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] font-medium leading-[1.1] max-w-4xl mx-auto tracking-tight mb-4">
          Marcas con las que crecemos
        </h2>
        <p className="text-[#666666] text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto">
          Más que clientes, son aliados que nos permiten ser parte de su historia
        </p>
      </div>

      <div className="w-full overflow-hidden pause-on-hover">
        {/* Row 1: Scrolling Left */}
        <div className="flex mb-8 md:mb-16">
          <div className="flex gap-x-12 md:gap-x-32 pr-12 md:pr-32 w-max animate-marquee-left">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex-shrink-0"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={logo.width} 
                  height={logo.height} 
                  className="object-contain w-20 md:w-48 lg:w-64 h-auto max-h-12 md:max-h-20 lg:max-h-28"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex">
          <div className="flex gap-x-12 md:gap-x-32 pr-12 md:pr-32 w-max animate-marquee-right">
            {[...logos, ...logos, ...logos].reverse().map((logo, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex-shrink-0"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={logo.width} 
                  height={logo.height} 
                  className="object-contain w-20 md:w-48 lg:w-64 h-auto max-h-12 md:max-h-20 lg:max-h-28"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
