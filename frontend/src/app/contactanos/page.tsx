import { Contact } from "@/components/organisms/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos",
  description: "¿Tienes dudas sobre tu contabilidad o impuestos? Ponte en contacto con los expertos de ECA Soluciones Empresariales SAC. Estamos listos para asesorarte y potenciar tu negocio.",
};

export default function ContactanosPage() {
  return (
    <div className="pt-24 lg:pt-32 bg-white min-h-screen">
      <Contact variant="page" />
    </div>
  );
}
