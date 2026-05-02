import { HeroSlider } from "@/components/organisms/HeroSlider";
import { ServiceMarquee } from "@/components/molecules/ServiceMarquee";
import { ServiceAction } from "@/components/organisms/ServiceAction";
import { ServicesTabs } from "@/components/organisms/ServicesTabs";
import { Testimonials } from "@/components/organisms/Testimonials";
import { Brands } from "@/components/organisms/Brands";
import { Contact } from "@/components/organisms/Contact";

export default function Home() {
  return (
    <>
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
