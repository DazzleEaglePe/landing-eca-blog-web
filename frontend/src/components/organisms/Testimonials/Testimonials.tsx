"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import gsap from 'gsap';

const testimonials = [
  {
    id: 1,
    name: "Karan Melendez",
    role: "CTO de Odeda Markey",
    mainText: "Nuestro mayor orgullo es la satisfacción de nuestros clientes. Nos enorgullece ser parte de su crecimiento y éxito financiero.",
    quote: "Trabajo muy profesional en el manejo de la contabilidad y puntual.",
    avatar: "/images/AVATAR_PLACEHOLDER.png"
  },
  {
    id: 2,
    name: "José Fernando",
    role: "CEO de Inversiones VHA",
    mainText: "Nuestro mayor orgullo es la satisfacción de nuestros clientes. Nos enorgullece ser parte de su crecimiento y éxito financiero.",
    quote: "Excelente atención, me ayudaron oportunamente y lo mejor, q fueron rápidos. 100% recomendados",
    avatar: "/images/AVATAR_PLACEHOLDER.png"
  },
  {
    id: 3,
    name: "Maria Paz",
    role: "Gerente General - EcoTrack",
    mainText: "Nuestro mayor orgullo es la satisfacción de nuestros clientes. Nos enorgullece ser parte de su crecimiento y éxito financiero.",
    quote: "Un servicio excepcional que ha transformado nuestra gestión financiera por completo.",
    avatar: "/images/AVATAR_PLACEHOLDER.png"
  },
  {
    id: 4,
    name: "Ricardo Salinas",
    role: "Director de Logística",
    mainText: "La precisión y el compromiso del equipo de ECA ha sido fundamental para nuestra expansión regional.",
    quote: "Altamente recomendados para cualquier empresa que busque seriedad.",
    avatar: "/images/AVATAR_PLACEHOLDER.png"
  }
];

export const Testimonials = () => {
  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Title - Centered */}
        <div className="testimonials-header text-center mb-12 sm:mb-20 lg:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#0a0a0a] font-light leading-[1.1] tracking-tight">
            Lo que nuestros clientes,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span><span className="font-medium">dicen de nosotros.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar: Info & Controls */}
          <div className="lg:w-1/4 flex flex-col justify-between py-4">
            <div>
              {/* Quote Icon */}
              <div className="mb-10">
                <svg width="60" height="48" viewBox="0 0 60 48" fill="none" className="opacity-20">
                  <path d="M14.4 0C22.353 0 28.8 6.447 28.8 14.4V48H0V14.4C0 6.447 6.447 0 14.4 0ZM45.6 0C53.553 0 60 6.447 60 14.4V48H31.2V14.4C31.2 6.447 37.647 0 45.6 0Z" fill="#0049B2" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#0a0a0a] leading-tight max-w-[220px]">
                Lo que dicen nuestros <span className="font-medium">clientes.</span>
              </h3>
            </div>

            {/* Custom Navigation */}
            <div className="hidden lg:flex items-center gap-8 mt-12">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all ${isBeginning ? 'opacity-20' : 'hover:bg-black hover:text-white'}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all ${isEnd ? 'opacity-20' : 'hover:bg-black hover:text-white'}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Slider */}
          <div className="lg:w-3/4">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                stopOnLastSlide: true, // Se detiene al llegar al final
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 }, // Exactamente 2 cards
              }}
              loop={false} // Desactivado para que haya un inicio y fin real
              className="testimonials-swiper"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="testimonial-card">
                  <div className="flex flex-col gap-6 h-full">
                    {/* Blue Card */}
                    <div className="bg-[#0049B2] rounded-[2.5rem] p-6 sm:p-8 lg:p-12 text-white flex-1 min-h-[280px] sm:min-h-[340px] flex flex-col justify-between shadow-lg relative group overflow-hidden">
                      <div className="absolute top-8 right-8 opacity-5 w-10 h-8 sm:w-auto sm:h-auto">
                         <svg width="60" height="48" viewBox="0 0 60 48" fill="none" className="w-full h-full">
                            <path d="M14.4 0C22.353 0 28.8 6.447 28.8 14.4V48H0V14.4C0 6.447 6.447 0 14.4 0ZM45.6 0C53.553 0 60 6.447 60 14.4V48H31.2V14.4C31.2 6.447 37.647 0 45.6 0Z" fill="white" />
                         </svg>
                      </div>

                      <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed mt-4 sm:mt-0 relative z-10">
                        {item.mainText}
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base font-light opacity-60 mt-6 border-t border-white/10 pt-6 sm:pt-8">
                        {item.quote}
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-5 px-6">
                      <div className="w-14 h-14 rounded-full bg-[#0049B2]/10 border border-[#0049B2]/20 flex items-center justify-center flex-shrink-0">
                         <span className="text-[#0049B2] font-bold">{item.name.charAt(0)}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#0a0a0a] font-medium text-lg">{item.name}</span>
                        <span className="text-[#0a0a0a]/65 text-xs tracking-[0.1em] font-normal ">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};
