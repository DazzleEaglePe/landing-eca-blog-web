import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsourcing Tributario | ECA Soluciones Empresariales",
  description: "Minimice riesgos y optimice su carga impositiva. Expertos en planificación tributaria y defensa ante auditorías.",
};

export default function OutsourcingTributarioPage() {
  return (
    <ServiceDetail 
      title="Outsourcing Tributario Estratégico"
      subtitle="Estrategia Fiscal"
      description="Brindamos seguridad fiscal a su empresa. Realizamos una planificación tributaria preventiva para optimizar sus recursos y asegurar el cumplimiento de todas las obligaciones ante la SUNAT."
      image="/images/service-tributario.png"
      features={[
        "Planificación tributaria anual",
        "Determinación de impuestos (IGV, Renta)",
        "Atención de requerimientos de SUNAT",
        "Auditorías tributarias preventivas",
        "Recuperación de impuestos (Drawback, ITAN)",
        "Asesoría en precios de transferencia"
      ]}
    />
  );
}
