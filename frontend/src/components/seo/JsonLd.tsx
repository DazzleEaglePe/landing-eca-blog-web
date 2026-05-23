import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Inyecta datos estructurados JSON-LD (Schema.org) en el <head> de la página.
 * Esto permite que Google muestre rich snippets (dirección, teléfono, horarios, servicios)
 * en los resultados de búsqueda.
 */
export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/**
 * Schema.org LocalBusiness para la página principal.
 * Incluye datos de la empresa, dirección, teléfono, horarios y servicios.
 */
export const ecaLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "ECA SOLUCIONES EMPRESARIALES S.A.C.",
  "alternateName": ["Estudio Contable Álvarez", "ECA Soluciones", "ECA Estudio Contable"],
  "url": "https://estudiocontablealvarez.com",
  "logo": "https://estudiocontablealvarez.com/images/logo-eca-asesores-blanco.svg",
  "description": "Estudio contable con +15 años de experiencia en gestión contable, outsourcing tributario, administración de planillas y constitución de empresas en Lima, Perú.",
  "telephone": "+51923341098",
  "email": "consultores.solucioneseca1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Cosme y Bueno 222, Urb. Salamanca de Monterrico",
    "addressLocality": "Ate",
    "addressRegion": "Lima",
    "postalCode": "15023",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.0766,
    "longitude": -76.9722
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Perú"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.tiktok.com/@eca.contabilidad",
    "https://www.instagram.com/cpcedithalvarez/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Contables y Empresariales",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestión Contable",
          "description": "Revisión integral de cumplimiento contable, preparación de estados financieros e implementación de sistemas contables."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outsourcing Tributario",
          "description": "Liquidación de impuestos mensuales, declaración jurada anual y asistencia en fiscalizaciones SUNAT."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestión de Planillas",
          "description": "Liquidación de beneficios sociales, cálculo de quinta categoría, aportes AFP y ESSALUD."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Constitución de Empresas",
          "description": "Asesoría en estructura societaria (SAC, EIRL, SRL) y trámites ante SUNARP."
        }
      }
    ]
  }
};

/**
 * Schema.org BreadcrumbList para mejorar la navegación en resultados de Google.
 */
export const buildBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url,
  })),
});
