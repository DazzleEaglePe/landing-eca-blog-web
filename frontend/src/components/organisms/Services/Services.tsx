"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const servicesList = [
  {
    title: "Gestión Contable",
    description: "Transformamos su contabilidad en una herramienta estratégica. Brindamos soporte completo en registros, estados financieros y cumplimiento normativo.",
    href: "/servicios/gestion-contable"
  },
  {
    title: "Gestión de Planillas",
    description: "Administración eficiente de nóminas y beneficios. Garantizamos el cálculo preciso de remuneraciones y cumplimiento de la legislación laboral.",
    href: "/servicios/gestion-de-planillas"
  },
  {
    title: "Outsourcing Tributario",
    description: "Seguridad fiscal y planificación preventiva. Maximizamos sus recursos y aseguramos el cumplimiento de obligaciones ante la SUNAT.",
    href: "/servicios/outsourcing-tributario"
  },
  {
    title: "Servicios Adicionales",
    description: "Consultoría integral para su negocio. Desde la constitución de empresas hasta trámites administrativos y soporte en gestión comercial.",
    href: "/servicios/servicios-adicionales"
  }
];

export const Services = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);

  return (
    <section className="relative w-full pb-20 lg:pb-32 pt-4">
      {/* Force swiper wrapper height */}
      <style jsx global>{`
        .services-swiper .swiper-wrapper {
          height: 100% !important;
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <p className="text-white text-base md:text-lg mb-4 flex items-center gap-3 font-light tracking-wide">
            <span className="w-6 h-[1.5px] bg-white/50 inline-block"></span>
            Nuestros servicios
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.1] max-w-4xl tracking-tight">
            Conoce nuestros servicios<br/>
            para ayudar a tu empresa
          </h2>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          {/* Custom Prev Button */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 text-white p-2 hover:opacity-70 transition-opacity hidden md:block ${isBeginning ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
            disabled={isBeginning}
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M2 2L20 20L2 38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setIsBeginning(swiper.isBeginning)}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="services-swiper w-full h-[520px]"
          >
            {servicesList.map((service, index) => (
              <SwiperSlide key={index} className="!h-full !flex !items-end pb-4">
                <Link 
                  href={service.href}
                  className="rounded-3xl flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 w-full"
                  style={{ 
                    backgroundColor: (isBeginning && index === 1) ? '#011F44' : '#000000',
                    height: (isBeginning && index === 1) ? '480px' : '420px',
                    alignSelf: 'flex-end'
                  }}
                >
                  
                  {/* Top Content */}
                  <div className="p-8 lg:p-10 z-10 relative">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-white text-2xl lg:text-3xl font-regular pr-8 tracking-tight">{service.title}</h3>
                      <div className="w-10 h-10 flex items-center justify-center -mt-2 -mr-2">
                        <Image
                          src="/icons/ARROW ICON.svg"
                          alt="Arrow"
                          width={28}
                          height={28}
                          className="opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </div>
                    </div>
                    <p className="text-white text-sm lg:text-base leading-relaxed font-light opacity-80">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Blue Area */}
                  <div className="w-[85%] h-[160px] bg-[#0049B2] rounded-tr-[3.5rem] mt-auto z-0 relative transition-all duration-500 group-hover:h-[180px] group-hover:w-[90%] ml-0"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Next Button */}
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 text-white p-2 hover:opacity-70 transition-opacity hidden md:block"
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L20 20L2 38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
