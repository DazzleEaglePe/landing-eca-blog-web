import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión Contable | ECA Soluciones Empresariales",
  description: "Optimice sus finanzas con nuestra gestión contable experta. Reportes claros, cumplimiento tributario y asesoría estratégica para su empresa.",
};

export default function GestionContablePage() {
  return (
    <ServiceDetail 
      title="Gestión Contable Integral"
      subtitle="Optimización Financiera"
      description="Transformamos su contabilidad en una herramienta estratégica para la toma de decisiones. Brindamos soporte completo en registros contables, estados financieros y cumplimiento normativo."
      image="/images/service-contable.png"
      features={[
        "Contabilidad externa y asesoría",
        "Estados financieros mensuales",
        "Registro de compras y ventas",
        "Conciliaciones bancarias",
        "Reportes gerenciales a medida",
        "Cumplimiento de NIIF"
      ]}
    />
  );
}
