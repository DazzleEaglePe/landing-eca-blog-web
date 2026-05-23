import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#00122B] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#0049B2] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="relative group mb-16 rounded-3xl">
          {/* Glowing Gradient Border (visible on hover) */}
          <div className="absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-r from-[#0049B2] via-[#00f2fe] to-[#0049B2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          <div className="absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-r from-[#0049B2] via-[#00f2fe] to-[#0049B2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Card Content */}
          <div className="relative bg-[#001633] border border-[#0049B2]/30 group-hover:border-transparent transition-colors rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-medium mb-4 text-white">¿Listo para potenciar el crecimiento de tu empresa?</h3>
              <p className="text-white/70 text-lg font-light">Déjanos tu contabilidad y enfócate en lo que mejor sabes hacer: liderar tu negocio.</p>
            </div>
            <Link href="/contactanos" className="flex-shrink-0 bg-[#0049B2] hover:bg-[#00388c] text-white px-8 py-4 rounded-full font-normal transition-colors flex items-center gap-2">
              Agenda tu cita gratis
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo-eca-asesores-blanco.svg" 
                alt="ECA Asesores Contables - Logo Blanco" 
                width={200} 
                height={60} 
                className="h-auto w-[200px]"
              />
            </Link>
            <p className="text-white/60 text-base leading-relaxed mb-8 font-light">
              Expertos en soluciones contables, tributarias y laborales. Transformamos la complejidad financiera en tranquilidad y crecimiento para tu empresa.
            </p>
            
            {/* Contact Info blocks */}
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span>+51 923 341 098</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span>consultores.solucioneseca1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span>Calle Cosme y Bueno 222 Urb. Salamanca de Monterrico - Ate</span>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Servicios</h4>
              <ul className="space-y-3 text-white/60 font-light text-sm">
                <li><Link href="/servicios/gestion-contable" className="hover:text-white transition-colors">Gestión Contable</Link></li>
                <li><Link href="/servicios/gestion-de-planillas" className="hover:text-white transition-colors">Gestión de Planillas</Link></li>
                <li><Link href="/servicios/outsourcing-tributario" className="hover:text-white transition-colors">Outsourcing Tributario</Link></li>
                <li><Link href="/servicios/servicios-adicionales" className="hover:text-white transition-colors">Servicios adicionales</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Soporte</h4>
              <ul className="space-y-3 text-white/60 font-light text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
                <li><Link href="/contactanos" className="hover:text-white transition-colors">Contáctanos</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">ECA</h4>
              <ul className="space-y-3 text-white/60 font-light text-sm">
                <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Únete al equipo</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar: Copyright Left, Socials Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          <p className="text-white/60 text-sm font-light text-center md:text-left">
            © {new Date().getFullYear()} ECA SOLUCIONES EMPRESARIALES S.A.C. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
             {[
               { src: '/icons/icono-tiktok-blanco-eca.svg', alt: 'TikTok ECA Asesores', href: 'https://www.tiktok.com/@eca.contabilidad?_t=ZM-8unOwfwtmPX&_r=1' },
               { src: '/icons/icono-facebook-blanco-eca.svg', alt: 'Facebook ECA Asesores', href: '#' },
               { src: '/icons/icono-instagram-blanco-eca.svg', alt: 'Instagram CPC Edith Alvarez - ECA Asesores', href: 'https://www.instagram.com/cpcedithalvarez/' },
               { src: '/icons/icono-linkedin-blanco-eca.svg', alt: 'LinkedIn ECA Asesores', href: '#' },
             ].map((social, i) => (
               <a 
                 key={i} 
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-[#0049B2] hover:border-[#0049B2] hover:-translate-y-1"
               >
                 <Image 
                   src={social.src} 
                   alt={social.alt} 
                   width={18} 
                   height={18} 
                   className="object-contain"
                 />
               </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
