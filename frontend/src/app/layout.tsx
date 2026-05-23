import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { FloatingWhatsApp } from "@/components/molecules/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const madeTommy = localFont({
  src: [
    {
      path: "../../public/fonts/MADE TOMMY Thin_PERSONAL USE.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADE TOMMY Light_PERSONAL USE.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADE TOMMY Regular_PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADE TOMMY Medium_PERSONAL USE.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADE TOMMY Bold_PERSONAL USE.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADE TOMMY ExtraBold_PERSONAL USE.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/MADE TOMMY Black_PERSONAL USE.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-made-tommy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://estudiocontablealvarez.com'),
  title: {
    default: "ECA Estudio Contable Álvarez | Consultoría Contable, Tributaria y Laboral en Lima, Perú",
    template: "%s | ECA Estudio Contable Álvarez"
  },
  description: "Estudio Contable Álvarez (ECA Soluciones Empresariales SAC) ofrece servicios de gestión contable, outsourcing tributario, administración de planillas y constitución de empresas en Lima, Perú. +15 años de experiencia ante SUNAT, SUNAFIL y SUNARP.",
  keywords: [
    "estudio contable lima",
    "contabilidad para empresas perú",
    "outsourcing tributario SUNAT",
    "gestión de planillas lima",
    "constitución de empresas perú",
    "asesoría financiera mypes",
    "declaración jurada renta perú",
    "devolución de drawback",
    "liquidación de beneficios sociales",
    "consultoría contable ate lima",
    "ECA Soluciones Empresariales",
    "estudio contable álvarez"
  ],
  authors: [{ name: "ECA Soluciones Empresariales SAC" }],
  creator: "Estudio Contable Álvarez",
  publisher: "ECA Soluciones Empresariales SAC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Estudio Contable Álvarez | Tu Aliado Estratégico en Lima, Perú",
    description: "Soluciones contables, tributarias y laborales integrales para Mypes y empresas. Gestión eficiente, personalizada y con cumplimiento normativo garantizado.",
    url: "https://estudiocontablealvarez.com",
    siteName: "Estudio Contable Álvarez – ECA Soluciones",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable Álvarez | Consultoría Contable y Tributaria en Perú",
    description: "Expertos en gestión contable, planillas y outsourcing tributario. Impulsamos el crecimiento de tu negocio en Lima y todo el Perú.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${madeTommy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
