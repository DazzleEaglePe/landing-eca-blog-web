"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const phrases = [
  { top: "Deja tu contabilidad con", bottom: "Los expertos." },
  { top: "El primer estudio contable", bottom: "remoto del Perú." },
  { top: "Innovación y tecnología", bottom: "para tus finanzas." },
  { top: "Tus aliados estratégicos", bottom: "en crecimiento." }
];

export const HeroSlider = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Referencias para los contadores
  const count1Ref = useRef<HTMLSpanElement>(null);
  const count2Ref = useRef<HTMLSpanElement>(null);
  const count3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animación de texto cambiante (reloj/flip effect)
    const interval = setInterval(() => {
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
            gsap.fromTo(titleRef.current, 
              { y: 20, opacity: 0 }, 
              { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
            );
          }
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animación de los números al cargar la página
    const ctx = gsap.context(() => {
      gsap.to(count1Ref.current, {
        innerText: 200,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power3.out",
      });
      gsap.to(count2Ref.current, {
        innerText: 20,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power3.out",
      });
      gsap.to(count3Ref.current, {
        innerText: 240,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 pt-32 lg:pt-48 pb-12 lg:pb-20">
        {/* Top Text Content */}
        <div className="mb-8 lg:mb-12">
          <p className="text-white/60 text-xs md:text-sm lg:text-base mb-4 flex items-center gap-3 font-light tracking-wide">
            <span className="w-5 h-[1.5px] bg-white/40 inline-block"></span>
            Ofrecemos asesoría personalizada y soluciones a medida.
          </p>
          <div className="min-h-[100px] md:min-h-[140px] lg:min-h-[160px] flex items-start">
            <h1 
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1]"
            >
              {phrases[phraseIndex].top}
              <br />
              <span className="text-[#0066FF]">{phrases[phraseIndex].bottom}</span>
            </h1>
          </div>
          <div className="mt-8 flex items-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-4 bg-[#0066FF] text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-sm sm:text-base transition-colors hover:bg-[#0049B2] shadow-lg shadow-[#0066FF]/20"
            >
              Agenda una asesoría
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Content: Image + Stats */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* Left: Image with overlay - Hidden on mobile, shown on lg */}
          <div className="hidden lg:relative lg:flex-1 lg:min-h-[400px] lg:block">
            {/* Sparkle Stars - Decorative */}
            <div className="absolute -left-6 top-[30%] z-10">
              <Image
                src="/icons/icono-estrellas-decorativas-eca.svg"
                alt="Estrellas decorativas ECA Asesores"
                width={70}
                height={64}
                className="w-[70px] h-auto"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/equipo-eca-soluciones-empresariales.png"
                alt="Equipo de ECA Asesores - Expertos en Contabilidad y Tributación"
                fill
                className="object-cover grayscale"
                priority
              />

              {/* Bottom Overlay Badge */}
              <div className="absolute bottom-1 left-[57.8%] -translate-x-1/2 z-10">
                <div className="bg-[#0049B2] rounded-lg px-12 py-9 flex flex-row items-center gap-8 shadow-2xl justify-center min-w-[610px]">
                  {/* Circle Icons */}
                  <div className="flex -space-x-4">
                    <div className="w-14 h-14 rounded-full bg-[#1a2d4d] border-[3px] border-[#0049B2]"></div>
                    <div className="w-14 h-14 rounded-full bg-[#2e4a7a] border-[3px] border-[#0049B2]"></div>
                    <div className="w-14 h-14 rounded-full bg-[#0066FF] border-[3px] border-[#0049B2]"></div>
                  </div>
                  <p className="text-xl lg:text-2xl text-white font-light leading-snug">
                    Más de <span className="font-bold">1,000</span> comercios
                    <br className="hidden sm:block" />
                    confían en nosotros
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="w-full lg:w-[320px] xl:w-[360px] bg-[#003D99] rounded-2xl p-3 mt-4 lg:mt-0">
            <div className="bg-[#0049B2] rounded-xl px-6 py-6 md:px-8 md:py-8 lg:px-9 lg:py-10 flex flex-row lg:flex-col justify-around lg:justify-center items-center lg:items-start gap-4 lg:gap-7 h-full text-center lg:text-left">
              <div className="flex-1 lg:flex-none">
                <p className="text-[#7EB3FF] text-3xl sm:text-4xl lg:text-5xl font-normal">
                  <span ref={count1Ref}>0</span>+
                </p>
                <p className="text-[#7EB3FF]/70 text-xs sm:text-sm mt-1 font-light">Proyectos completados</p>
              </div>
              {/* Divider for mobile */}
              <div className="w-[1px] h-12 bg-white/20 lg:hidden"></div>
              <div className="flex-1 lg:flex-none">
                <p className="text-[#7EB3FF] text-3xl sm:text-4xl lg:text-5xl font-normal">
                  <span ref={count2Ref}>0</span>+
                </p>
                <p className="text-[#7EB3FF]/70 text-xs sm:text-sm mt-1 font-light">Años de experiencia</p>
              </div>
              {/* Divider for mobile */}
              <div className="w-[1px] h-12 bg-white/20 hidden sm:block lg:hidden"></div>
              <div className="hidden sm:block flex-1 lg:flex-none">
                <p className="text-[#7EB3FF] text-3xl sm:text-4xl lg:text-5xl font-normal">
                  <span ref={count3Ref}>0</span>
                </p>
                <p className="text-[#7EB3FF]/70 text-xs sm:text-sm mt-1 font-light">Clientes satisfechos</p>
              </div>
            </div>
            {/* Mobile separate row for 3rd stat if needed, but handled with hidden/block to avoid crowding */}
          </div>
        </div>
      </div>
    </section>
  );
};
