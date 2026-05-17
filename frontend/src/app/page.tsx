import { Metadata } from "next";
import { HeroSlider } from "@/components/organisms/HeroSlider";
import { ServiceMarquee } from "@/components/molecules/ServiceMarquee";
import { ServiceAction } from "@/components/organisms/ServiceAction";
import { ServicesTabs } from "@/components/organisms/ServicesTabs";
import { Testimonials } from "@/components/organisms/Testimonials";
import { Brands } from "@/components/organisms/Brands";
import { Contact } from "@/components/organisms/Contact";
import { JsonLd, ecaLocalBusinessSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Estudio Contable Álvarez | Gestión Contable, Tributaria y Laboral en Lima",
  description:
    "Deja tu contabilidad en manos expertas. Estudio Contable Álvarez (ECA) ofrece gestión contable, outsourcing tributario, planillas y constitución de empresas para Mypes y corporativos en Lima, Perú.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={ecaLocalBusinessSchema} />
      <HeroSlider />
      <ServiceMarquee />
      <ServiceAction />
      <ServicesTabs />
      <Testimonials />
      <Brands />
      <Contact />
    </>
  );
}
