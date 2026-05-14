import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión Contable",
  description: "Optimice sus finanzas con nuestra gestión contable experta en Perú. Reportes claros, cumplimiento tributario ante SUNAT y asesoría estratégica para Mypes.",
};

export default function GestionContablePage() {
  return (
    <ServiceDetail 
      title="Gestión Contable"
      subtitle="Optimización Financiera"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Brindamos soluciones contables personalizadas para empresas grandes, medianas, pequeñas, y emprendimientos."
      image="/images/servicio-gestion-contable-eca.png"
      features={[
        "Provisión de gastos incurridos por el cliente",
        "Provisión de gastos remitidos por el cliente",
        "Preparación de Libros Contables",
        "Preparación de Estados Financieros",
        "Registro de ingresos al Sistema Contable",
        "Emisión y Presentación de libros electrónicos SIRE y PLE",
        "Registro de cobranzas al Sistema Contable",
        "Reconocimiento inicial y final en cada período de los Activos Fijos",
        "Revisión de las detracciones, percepciones y retenciones, de aplicar",
        "Registro de comprobantes de compras y ventas",
        "Liquidación de IGV",
        "Registro de pagos en Sistema Contable",
        "Asesoría contable"
      ]}
      conclusion="Revisión de la información recibida (comprobantes de pago) para el cumplimiento de los requisitos contables y tributarios."
    />
  );
}
