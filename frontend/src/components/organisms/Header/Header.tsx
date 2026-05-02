"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { ChevronDown, X, Menu } from 'lucide-react';

export const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Verificar el estado inicial por si el usuario recarga la página a mitad del scroll
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: "Gestión Contable", href: "/servicios/gestion-contable" },
    { title: "Gestión de Planillas", href: "/servicios/gestion-de-planillas" },
    { title: "Outsourcing Tributario", href: "/servicios/outsourcing-tributario" },
    { title: "Servicios Adicionales", href: "/servicios/servicios-adicionales" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none ${isScrolled ? 'pt-4 px-4 lg:px-8' : 'pt-0 px-0'}`}>
      <div className={`mx-auto w-full transition-all duration-500 pointer-events-auto flex flex-col ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl border border-white/50 max-w-7xl' 
          : 'bg-white shadow-sm rounded-none border-transparent max-w-full'
      }`}>
        {/* Main Navigation */}
        <div className={`container mx-auto flex items-center justify-between transition-all duration-500 ${isScrolled ? 'px-6 py-2 lg:px-8' : 'px-4 py-3 lg:px-8'}`}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/images/logo-eca.png" 
            alt="ECA Soluciones Empresariales SAC Logo" 
            width={180} 
            height={60} 
            className="h-12 w-auto md:h-14 lg:h-16 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-nav">
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              className="flex items-center gap-1 hover:text-primary transition-colors outline-none"
            >
              Servicios 
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <>
                <div 
                  className="fixed inset-0 z-[-1]" 
                  onMouseEnter={() => setIsServicesOpen(false)}
                />
                <div 
                  className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 py-4 px-2 animate-in fade-in slide-in-from-top-2 duration-300"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((service) => (
                      <Link 
                        key={service.title}
                        href={service.href}
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#0049B2] hover:text-white transition-all group"
                      >
                        <span className="text-sm font-normal">{service.title}</span>
                        <ChevronDown size={14} className="rotate-[-90deg] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <Link href="/nosotros" className="hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button className="flex items-center gap-2 font-normal">
            CONTACTANOS
            <Image 
              src="/icons/ICON WHATSAPP BLUE.svg" 
              alt="WhatsApp" 
              width={20} 
              height={20} 
              className="brightness-0 invert" 
            />
          </Button>
          <Link href="/contactanos">
            <Button variant="outline" className="font-normal px-6">
              AGENDA TU CITA
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-primary hover:bg-primary-50 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          <Link href="/" className="text-primary-700 font-medium py-2 border-b border-gray-50">Inicio</Link>
          
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-primary-700 font-medium py-2 border-b border-gray-50 flex items-center justify-between w-full"
            >
              Servicios <ChevronDown size={16} className={isServicesOpen ? 'rotate-180' : ''} />
            </button>
            
            {isServicesOpen && (
              <div className="pl-4 flex flex-col gap-3 py-2 bg-gray-50 rounded-xl mt-1">
                {services.map((s) => (
                  <Link key={s.title} href={s.href} className="text-sm text-gray-600 py-1 hover:text-primary">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/nosotros" className="text-primary-700 font-medium py-2 border-b border-gray-50">Nosotros</Link>
          <Link href="/blog" className="text-primary-700 font-medium py-2 border-b border-gray-50">Blog</Link>
          <div className="flex flex-col gap-3 mt-4">
            <Button className="w-full justify-center">
              CONTACTANOS
              <Image 
                src="/icons/ICON WHATSAPP BLUE.svg" 
                alt="WhatsApp" 
                width={20} 
                height={20} 
                className="brightness-0 invert ml-2" 
              />
            </Button>
            <Link href="/contactanos" className="w-full">
              <Button variant="outline" className="w-full justify-center">
                AGENDA TU CITA
              </Button>
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};
