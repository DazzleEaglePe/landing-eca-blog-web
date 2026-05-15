"use client";

import React from 'react';
import Image from 'next/image';
import { Contact } from '../Contact';
import { ServicesTabs } from '../ServicesTabs';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  children?: React.ReactNode;
}

export const ServiceDetail = ({ title, subtitle, description, image, children }: ServiceDetailProps) => {
  return (
    <main className="pt-32 bg-[#f8faff]">
      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-24 overflow-hidden bg-[#f8faff]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Content */}
            <div className="lg:w-1/2 z-10">
              <p className="text-[#0049B2] text-base md:text-lg mb-4 flex items-center gap-3 font-light tracking-wide uppercase">
                <span className="w-6 h-[1.5px] bg-[#0049B2]/50 inline-block"></span>
                {subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal text-[#011F44] leading-[1.1] mb-8 tracking-tight">
                <span className="font-light block">Servicio de</span>
                <span className="font-medium">{title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl">
                {description}
              </p>
            </div>

            {/* Image/Visual */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#0049B2]/5 blur-3xl rounded-full"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl bg-white p-2">
                <div className="rounded-[2rem] overflow-hidden">
                  <Image 
                    src={image} 
                    alt={title} 
                    width={800} 
                    height={600} 
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Content Area */}
      {children}

      {/* Services Tabs (Consistent with Home Page graphic line) */}
      <ServicesTabs />

      {/* Reuse Contact Component with the Map grid */}
      <Contact variant="page" />
    </main>
  );
};
