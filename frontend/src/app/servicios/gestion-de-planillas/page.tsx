import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de Planillas",
  description: "Administración eficiente de recursos humanos y nóminas en Perú. Garantizamos el cálculo preciso de remuneraciones, beneficios sociales y cumplimiento laboral.",
};

export default function GestionPlanillasPage() {
  return (
    <ServiceDetail 
      title="Gestión Eficiente de Planillas"
      subtitle="Recursos Humanos"
      description="Externalice su nómina con total seguridad. Nos encargamos del cálculo preciso de remuneraciones, beneficios sociales y el cumplimiento estricto de la legislación laboral vigente."
      image="/images/servicio-gestion-planillas-eca.png"
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
