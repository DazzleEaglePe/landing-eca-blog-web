import { Contact } from "@/components/organisms/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | ECA Soluciones Empresariales",
  description: "Ponte en contacto con nuestro equipo de profesionales en soluciones contables y empresariales.",
};

export default function ContactanosPage() {
  return (
    <div className="pt-24 lg:pt-32 bg-[#f8faff] min-h-screen">
      <Contact variant="page" />
    </div>
  );
}
