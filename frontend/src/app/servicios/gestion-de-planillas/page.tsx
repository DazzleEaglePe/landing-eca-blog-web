import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de Planillas",
  description: "Administración eficiente de recursos humanos y nóminas en Perú. Garantizamos el cálculo preciso de remuneraciones, beneficios sociales y cumplimiento laboral.",
};

export default function GestionPlanillasPage() {
  return (
    <ServiceDetail 
      title="Gestión de Planilla"
      subtitle="Servicio Contable"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Simplificamos y automatizamos la gestión de planillas de la empresa, adaptándonos a las necesidades de cualquier negocio, desde pequeñas empresas hasta corporativos."
      image="/images/servicio-gestion-planillas-eca.png"
      features={[
        "Cálculo de Planilla de Sueldos (aportaciones, deducciones, CTS, Gratificaciones, Vacaciones)",
        "Declaración y pago de aportes previsionales (AFP-net)",
        "Elaboración, declaración y pago mensual del PDT 601 PLAME - planilla electrónica",
        "Registro mensual de efectivos por Honorarios Electrónicos",
        "Revisión y archivo digital mensual reportes PDT 601 PLAME (Formatos R01, R02, R03, R04, R12, R14)",
        "Presentación de contratos laborales al Ministerio de Trabajo para personal extranjero",
        "Preparación e impresión de boletas de pago a trabajadores",
        "Registro de trabajadores y sus respectivos familiares en el T-REGISTRO",
        "Preparación y presentación de impuestos de planillas - ONP, Rta de 5ta, Rta de 4ta (PDT PLAME)",
        "Liquidación de Beneficios (Gratificación trunca, Vacaciones truncas, CTS, diferenciando los días computables y no computables)",
        "Registro resumen de planillas en Sistema Contable"
      ]}
    />
  );
}
