import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { FloatingWhatsApp } from "@/components/molecules/FloatingWhatsApp";

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
  title: {
    default: "ECA Soluciones Empresariales | Consultoría Contable y Tributaria en Perú",
    template: "%s | ECA Soluciones Empresariales"
  },
  description: "ECA Soluciones Empresariales SAC ofrece servicios de gestión contable, planillas, outsourcing tributario y consultoría financiera para Mypes y empresas en Perú. Expertos en SUNAT y cumplimiento normativo.",
  keywords: ["contabilidad perú", "estudio contable lima", "outsourcing tributario", "gestión de planillas", "asesoría financiera", "constitución de empresas", "SUNAT", "ECA Soluciones"],
  authors: [{ name: "ECA Soluciones Empresariales SAC" }],
  creator: "ECA Soluciones",
  publisher: "ECA Soluciones",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ECA Soluciones Empresariales | Tu Aliado Estratégico en Perú",
    description: "Soluciones contables y tributarias integrales para el crecimiento de tu empresa. Gestión eficiente y personalizada.",
    url: "https://ecasoluciones.pe", // Asumiendo este dominio, cambiar si es necesario
    siteName: "ECA Soluciones",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECA Soluciones Empresariales | Consultoría Contable",
    description: "Expertos en gestión contable y tributaria en Perú. Impulsamos el crecimiento de tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${madeTommy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
