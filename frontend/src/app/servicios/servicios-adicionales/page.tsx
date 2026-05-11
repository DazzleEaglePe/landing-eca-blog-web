import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Adicionales",
  description: "Consultoría integral para el crecimiento de su negocio en Perú. Especialistas en constitución de empresas, trámites administrativos y soporte 360°.",
};

export default function ServiciosAdicionalesPage() {
  return (
    <ServiceDetail 
      title="Constitución de Empresas y Soporte 360°"
      subtitle="Aliados Estratégicos"
      description="¡Constituye tu empresa rápida, digital y segura! Te acompañamos en cada etapa de tu negocio, simplificando tu contabilidad y asegurando el cumplimiento tributario desde el primer día."
      image="/images/servicios-asesoria-negocios-eca.png"
      features={[
        "Constitución de empresas (E.I.R.L, S.A.C, S.R.L)",
        "Trámites ante SUNARP, SUNAT y Municipalidades",
        "Implementación de sistemas contables y factura electrónica",
        "Inventario de activos fijos y existencias",
        "Asesoría administrativa y de gestión comercial",
        "Capacitación en procesos internos"
      ]}
    />
  );
}
