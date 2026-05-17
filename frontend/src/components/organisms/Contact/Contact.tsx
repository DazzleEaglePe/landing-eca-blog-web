"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactApi, CreateContactPayload } from '@/lib/api/contact.api';

// Dynamically import Map component to prevent SSR window errors
const Map = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.Map),
  { ssr: false, loading: () => <div className="w-full h-full min-h-[400px] bg-white/5 animate-pulse rounded-[2rem]" /> }
);
import { MapMarker, MapPopup, MapZoomControl, MapTileLayer } from "@/components/ui/map";

interface ContactProps {
  variant?: 'landing' | 'page';
}

export const Contact = ({ variant = 'landing' }: ContactProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateContactPayload>();
  const mapRef = useRef<HTMLDivElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    if (variant === 'page') {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from(".contact-map-reveal", {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%",
          }
        });
      }, mapRef);
      return () => ctx.revert();
    }
  }, [variant]);

  const onSubmit = async (data: CreateContactPayload) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await contactApi.create(data);
      setSubmitStatus({ type: 'success', message: '¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.' });
      reset(); // Limpia el formulario
    } catch (error: any) {
      setSubmitStatus({ type: 'error', message: error.message || 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPage = variant === 'page';

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Blue Container */}
        <div className="bg-[#011F44] rounded-[2.5rem] p-6 sm:p-10 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-stretch relative overflow-hidden shadow-2xl">
          
          {/* Left Column: Info OR Map */}
          <div 
            ref={mapRef}
            className={`flex flex-col z-10 w-full ${isPage ? 'lg:w-[40%] order-2 lg:order-1 contact-map-reveal min-h-[400px]' : 'lg:w-[45%]'}`}
          >
            {!isPage ? (
              <>
                <div className="flex items-center gap-3 text-white/80 mb-8">
                  <Image 
                    src="/icons/icono-cabecera-carrusel-eca.svg" 
                    alt="Servicios de consultoría ECA" 
                    width={24} 
                    height={24}
                    className="filter brightness-0 invert"
                  />
                  <span className="text-sm md:text-base font-light tracking-wide">
                    Hablemos y escalemos tu empresa
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.1] mb-6 md:mb-10 tracking-tight">
                  Nos encontramos listos,<br />
                  <span className="font-light">para pertenecer a tu equipo.</span>
                </h2>

                <p className="text-white/60 text-base sm:text-lg md:text-xl font-normal max-w-md mb-8 md:mb-12">
                  Más del 30% de las empresas no saben gestionar correctamente sus temas contables
                </p>

                <a 
                  href="#contact"
                  className="inline-flex items-center gap-4 bg-white text-[#011F44] px-8 sm:px-10 py-4 rounded-full font-semibold text-sm sm:text-base transition-colors hover:bg-gray-100 self-start w-full sm:w-auto justify-center sm:justify-start"
                >
                  CONTÁCTANOS
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </>
            ) : (
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden shadow-inner border border-white/10 flex-1 min-h-[400px] lg:min-h-[auto]">
                <Map center={[-12.0797, -76.9839]} zoom={16} className="w-full h-full z-10 absolute inset-0">
                  <MapTileLayer 
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                  />
                  <MapZoomControl position="bottom-right" />
                  <MapMarker position={[-12.0797, -76.9839]}>
                    <MapPopup>
                      <div className="p-1">
                        <h4 className="font-medium text-[#011F44] mb-1">ECA Soluciones</h4>
                        <p className="text-sm text-gray-600 font-light">Calle Cosme y Bueno 222<br/>Urb. Salamanca de Monterrico - Ate</p>
                      </div>
                    </MapPopup>
                  </MapMarker>
                </Map>
              </div>
            )}
          </div>

          {/* Right Column: Form */}
          <div className={`w-full z-10 flex flex-col justify-center ${isPage ? 'lg:w-[60%] order-1 lg:order-2' : 'lg:w-[55%]'}`}>
            
            {isPage && (
               <div className="mb-8 md:mb-10 text-white text-center lg:text-left">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2 md:mb-3">Envíanos un mensaje</h2>
                 <p className="text-white/60 font-light text-base sm:text-lg">Nos pondremos en contacto contigo lo más pronto posible para asesorarte.</p>
               </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/90 text-sm font-light ml-2">
                    <Image src="/icons/icono-formulario-identificacion-eca.svg" alt="Identificación" width={16} height={16} className="filter brightness-0 invert" />
                    Nombre Completo*
                  </label>
                  <input 
                    {...register("name", { required: true })}
                    placeholder="Ingrese sus nombres y apellidos"
                    className="w-full bg-white rounded-full px-8 py-4 text-[#011F44] placeholder:text-[#011F44]/30 focus:outline-none focus:ring-2 focus:ring-[#0049B2] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/90 text-sm font-light ml-2">
                    <Image src="/icons/icono-empresa-servicios-eca.svg" alt="Empresa" width={16} height={16} className="filter brightness-0 invert" />
                    Empresa*
                  </label>
                  <input 
                    {...register("company", { required: true })}
                    placeholder="Ingrese el nombre de su empresa"
                    className="w-full bg-white rounded-full px-8 py-4 text-[#011F44] placeholder:text-[#011F44]/30 focus:outline-none focus:ring-2 focus:ring-[#0049B2] transition-all"
                  />
                </div>
              </div>

              {/* Row 1.5: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/90 text-sm font-light ml-2">
                    <Image src="/icons/icono-formulario-contacto-eca.svg" alt="Correo" width={16} height={16} className="filter brightness-0 invert" />
                    Correo Electrónico*
                  </label>
                  <input 
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Ingrese su correo electrónico"
                    className="w-full bg-white rounded-full px-8 py-4 text-[#011F44] placeholder:text-[#011F44]/30 focus:outline-none focus:ring-2 focus:ring-[#0049B2] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white/90 text-sm font-light ml-2">
                    <Image src="/icons/icono-whatsapp-azul-eca.svg" alt="Teléfono" width={16} height={16} className="filter brightness-0 invert" />
                    Teléfono Celular*
                  </label>
                  <input 
                    type="tel"
                    {...register("phone", { required: true, minLength: 7 })}
                    placeholder="Ingrese su número de celular"
                    className="w-full bg-white rounded-full px-8 py-4 text-[#011F44] placeholder:text-[#011F44]/30 focus:outline-none focus:ring-2 focus:ring-[#0049B2] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: RUC */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/90 text-sm font-light ml-2">
                  <Image src="/icons/icono-formulario-contacto-eca.svg" alt="Formulario" width={16} height={16} className="filter brightness-0 invert" />
                  Ruc (11 digitos)*
                </label>
                <input 
                  {...register("ruc", { required: true, minLength: 11, maxLength: 11 })}
                  placeholder="Ingrese su número de RUC válido"
                  className="w-full bg-white rounded-full px-8 py-4 text-[#011F44] placeholder:text-[#011F44]/30 focus:outline-none focus:ring-2 focus:ring-[#0049B2] transition-all"
                />
              </div>

              {/* Row 3: Comment */}
              <div className="space-y-2">
                <label htmlFor="contact-comment" className="flex items-center gap-2 text-white/90 text-sm font-light ml-2">
                  <Image src="/icons/icono-formulario-mensaje-eca.svg" alt="Mensaje" width={16} height={16} className="filter brightness-0 invert" />
                  Comentario (opcional)*
                </label>
                <textarea 
                  {...register("comment")}
                  id="contact-comment"
                  aria-label="Comentario"
                  placeholder=""
                  rows={4}
                  className="w-full bg-white rounded-[2rem] px-8 py-6 text-[#011F44] placeholder:text-[#011F44]/30 focus:outline-none focus:ring-2 focus:ring-[#0049B2] transition-all resize-none"
                />
              </div>

              {/* Submit Button & Status Message */}
              <div className="flex flex-col items-center lg:items-end gap-4 pt-4 w-full">
                {submitStatus && (
                  <div className={`w-full lg:w-auto px-6 py-3 rounded-xl text-sm font-medium text-center ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {submitStatus.message}
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 sm:px-12 py-4 rounded-full font-medium transition-colors w-full lg:w-auto ${isSubmitting ? 'bg-[#0049B2]/50 cursor-not-allowed' : 'bg-[#0049B2] hover:bg-[#003d99]'} text-white`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
