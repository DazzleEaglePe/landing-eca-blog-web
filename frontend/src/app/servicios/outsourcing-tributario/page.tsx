import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsourcing Tributario",
  description: "Minimice riesgos fiscales y optimice su carga impositiva ante SUNAT. Expertos en planificación tributaria preventiva y defensa ante auditorías.",
};

export default function OutsourcingTributarioPage() {
  return (
    <ServiceDetail 
      title="Outsourcing Tributario"
      subtitle="Servicio Contable"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Ofrecemos servicios en la gestión tributaria para empresas de cualquier tamaño, garantizando el cumplimiento de las normativas locales vigentes."
      image="/images/servicio-outsourcing-tributario-eca.png"
      features={[
        "Preparación y presentación de las declaraciones tributarias mensuales de renta e IGV.",
        "Preparación y presentación de las declaraciones de impuesto a la renta de no domiciliados.",
        "Archivamiento de documentación de preparación de impuestos mensuales.",
        "Preparación y presentación de las declaraciones juradas de impuesto a la renta (anual).",
        "Preparación y presentación de la declaración anual de Operaciones con Terceros (DAOT)."
      ]}
    />
  );
}
