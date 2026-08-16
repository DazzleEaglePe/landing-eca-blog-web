"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Services } from '../Services';
import { trackWhatsAppClick } from '@/lib/gtag';

const features = [
  { text: "Cumplimiento de la", bold: "normativa legal y tributaria." },
  { text: "Servicio personalizado que genera", bold: "valor agregado." },
  { text: "Trabajamos con", bold: "integridad y profesionalismo." },
];

const socialIcons = [
  { src: "/icons/icono-tiktok-blanco-eca.svg", alt: "TikTok", href: "https://www.tiktok.com/@eca.contabilidad?_t=ZM-8unOwfwtmPX&_r=1" },
  { src: "/icons/icono-facebook-blanco-eca.svg", alt: "Facebook", href: "#" },
  { src: "/icons/icono-instagram-blanco-eca.svg", alt: "Instagram", href: "https://www.instagram.com/cpcedithalvarez/" },
  { src: "/icons/icono-linkedin-blanco-eca.svg", alt: "LinkedIn", href: "#" },
];

export const ServiceAction = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Forzar reproducción y muteado para navegadores estrictos (Safari/Chrome)
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative bg-white">

      {/* BG Blue – anclado al fondo, sin recorte */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/fondo-azul-moderno-eca-consultores.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-[30px] left-0 w-full pointer-events-none hidden lg:block"
        style={{ zIndex: 0, transform: 'scaleY(0.75)', transformOrigin: 'bottom center' }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-12 pb-6 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex-1 max-w-xl">
            {/* Subtitle */}
            <p className="text-[#456693] text-base md:text-lg mb-4 flex items-center gap-3 font-light tracking-wide uppercase">
              <span className="w-6 h-[1.5px] bg-[#456693]/50 inline-block"></span>
              Sobre nosotros
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#0a0a0a] leading-[1.1] mb-4 md:mb-6">
              <span className="font-light">Trabajamos en tus</span>
              <br />
              <span className="font-medium text-[#0049B2]">objetivos empresariales.</span>
            </h2>

            {/* Subheading */}
            <p className="text-[rgba(0,0,0,0.57)] text-lg sm:text-xl md:text-xl font-light leading-relaxed mb-8">
              Somos ECA, un equipo de profesionales dedicados a brindar soluciones contables y financieras adaptadas a las necesidades de su negocio.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#0049B2] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icons/icono-check-azul-eca.svg"
                      alt="check"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-[#1a1a1a] text-base md:text-lg lg:text-xl font-light">
                    {feature.text} <span className="font-bold">{feature.bold}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-end mt-4 lg:mt-0">
            {/* Social Media Header */}
            <div className="mb-8 w-full max-w-[400px]">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/icons/icono-enlace-externo-eca.svg"
                  alt="link"
                  width={24}
                  height={24}
                />
                <span className="text-[#0a0a0a] font-bold text-base md:text-xl">Síguenos en nuestras redes</span>
              </div>
              <p className="text-[#456693] text-sm md:text-base font-light leading-snug ml-9">
                Consejos contables, novedades
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>tributarias y casos de éxito
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4 ml-9">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0049B2] rounded-full flex items-center justify-center hover:bg-[#003d99] transition-colors"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Video Player */}
            <div className="relative bg-[#0a0a0a] rounded-[2rem] overflow-hidden aspect-[3/4] w-full max-w-[380px] lg:max-w-[400px] shadow-2xl group">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                src="/videos/preview.mp4"
              >
                Tu navegador no soporta el formato de video.
              </video>

              {/* Gradient Overlay for better text/button visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Mute/Unmute Toggle */}
              <button 
                onClick={toggleMute}
                className="absolute top-6 right-6 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                aria-label={isMuted ? "Quitar silencio" : "Silenciar video"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              {/* CTA Button at bottom-right */}
              <div className="absolute bottom-6 right-6 z-10">
                <a
                  href="https://wa.me/51923341098"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('video_action')}
                  className="bg-white hover:bg-white/90 text-[#0049B2] flex items-center justify-center gap-2 font-medium text-xs md:text-sm px-5 py-3 rounded-full shadow-lg transition-all whitespace-nowrap"
                >
                  CONOCE MÁS AQUÍ
                  <Image
                    src="/icons/icono-whatsapp-azul-eca.svg"
                    alt="whatsapp"
                    width={18}
                    height={18}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section sits on top of the blue wave */}
      <div className="relative z-10 w-full">
        <Services />
      </div>
    </section>
  );
};
