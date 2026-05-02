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
          <p className="text-white/60 text-sm md:text-base mb-4 flex items-center gap-3 font-light tracking-wide">
            <span className="w-5 h-[1.5px] bg-white/40 inline-block"></span>
            Ofrecemos asesoría personalizada y soluciones a medida.
          </p>
          <div className="min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex items-start">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1]"
            >
              {phrases[phraseIndex].top}
              <br />
              <span className="text-[#0066FF]">{phrases[phraseIndex].bottom}</span>
            </h1>
          </div>
        </div>

        {/* Bottom Content: Image + Stats */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* Left: Image with overlay */}
          <div className="relative flex-1 min-h-[320px] lg:min-h-[400px]">
            {/* Sparkle Stars - Decorative */}
            <div className="absolute -left-2 lg:-left-6 top-[30%] z-10">
              <Image
                src="/icons/ICON STARTS.svg"
                alt="Decoración estrellas"
                width={70}
                height={64}
                className="w-12 h-auto md:w-16 lg:w-[70px]"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/HEADER IMAGE.png"
                alt="Equipo de ECA Soluciones Empresariales"
                fill
                className="object-cover grayscale"
                priority
              />

              {/* Bottom Overlay Badge */}
              <div className="absolute bottom-1 left-[57.8%] -translate-x-1/2 z-10">
                <div className="bg-[#0049B2] rounded-lg px-12 py-9 flex items-center gap-8 shadow-2xl min-w-[450px] md:min-w-[610px]">
                  {/* Circle Icons */}
                  <div className="flex -space-x-4">
                    <div className="w-14 h-14 rounded-full bg-[#1a2d4d] border-[3px] border-[#0049B2]"></div>
                    <div className="w-14 h-14 rounded-full bg-[#2e4a7a] border-[3px] border-[#0049B2]"></div>
                    <div className="w-14 h-14 rounded-full bg-[#0066FF] border-[3px] border-[#0049B2]"></div>
                  </div>
                  <p className="text-xl md:text-2xl text-white font-light leading-snug">
                    Más de <span className="font-bold">1,000</span> comercios
                    <br />
                    confían en nosotros
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="w-full lg:w-[320px] xl:w-[360px] bg-[#003D99] rounded-2xl p-3">
            <div className="bg-[#0049B2] rounded-xl px-8 py-8 lg:px-9 lg:py-10 flex flex-col justify-center gap-7 h-full">
              <div>
                <p className="text-[#7EB3FF] text-4xl lg:text-5xl font-normal">
                  <span ref={count1Ref}>0</span>+
                </p>
                <p className="text-[#7EB3FF]/70 text-sm mt-1 font-light">Proyectos completados</p>
              </div>
              <div>
                <p className="text-[#7EB3FF] text-4xl lg:text-5xl font-normal">
                  <span ref={count2Ref}>0</span>+
                </p>
                <p className="text-[#7EB3FF]/70 text-sm mt-1 font-light">Años de experiencia</p>
              </div>
              <div>
                <p className="text-[#7EB3FF] text-4xl lg:text-5xl font-normal">
                  <span ref={count3Ref}>0</span>
                </p>
                <p className="text-[#7EB3FF]/70 text-sm mt-1 font-light">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
