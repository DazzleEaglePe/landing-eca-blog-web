import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de Planillas | ECA Soluciones Empresariales",
  description: "Administración eficiente de recursos humanos y nóminas. Garantizamos el cumplimiento laboral y la puntualidad en sus pagos.",
};

export default function GestionPlanillasPage() {
  return (
    <ServiceDetail 
      title="Gestión Eficiente de Planillas"
      subtitle="Recursos Humanos"
      description="Externalice su nómina con total seguridad. Nos encargamos del cálculo preciso de remuneraciones, beneficios sociales y el cumplimiento estricto de la legislación laboral vigente."
      image="/images/service-planillas.png"
      features={[
        "Elaboración de planillas mensuales",
        "Cálculo de CTS, Gratificaciones y Vacaciones",
        "Declaración de PLAME (PDT)",
        "Liquidaciones de beneficios sociales",
        "Asesoría en legislación laboral",
        "Trámites ante ESSALUD y AFP"
      ]}
    />
  );
}
