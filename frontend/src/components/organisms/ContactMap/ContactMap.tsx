"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MapMarker,
  MapPopup,
  MapZoomControl,
  MapTileLayer 
} from "@/components/ui/map";

gsap.registerPlugin(ScrollTrigger);

// Dynamically import the Map container with no SSR to prevent Leaflet window errors
const Map = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.Map),
  { ssr: false, loading: () => <div className="w-full h-96 bg-[#011F44]/5 animate-pulse rounded-[2.5rem]" /> }
);

export const ContactMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-wrapper", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mapContainerRef.current,
          start: "top 80%",
        }
      });
      
      gsap.from(".map-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapContainerRef.current,
          start: "top 85%",
        }
      });
    }, mapContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mapContainerRef} className="container mx-auto px-4 lg:px-8 py-20 pb-32">
      <div className="map-header mb-12 text-center">
        <h3 className="text-3xl md:text-4xl text-[#011F44] font-medium tracking-tight mb-4">
          Visítanos en nuestra oficina principal
        </h3>
        <p className="text-[#0a0a0a]/60 text-lg max-w-2xl mx-auto font-light">
          Estamos ubicados estratégicamente para brindarte el mejor servicio. Ven y conversemos sobre el futuro de tu empresa.
        </p>
      </div>

      <div className="map-wrapper relative w-full h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
        <Map center={[-12.0258, -76.9205]} zoom={15} className="w-full h-full">
          <MapTileLayer 
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <MapZoomControl position="bottom-right" />
          
          <MapMarker position={[-12.0258, -76.9205]}>
            <MapPopup>
              <div className="p-1">
                <h4 className="font-medium text-[#011F44] mb-1">ECA Soluciones</h4>
                <p className="text-sm text-gray-600 font-light">Jirón Cosme Bueno 222<br/>Ate, Lima - Perú</p>
              </div>
            </MapPopup>
          </MapMarker>
        </Map>
      </div>
    </div>
  );
};
