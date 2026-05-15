import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios Adicionales",
  description: "Consultoría integral para el crecimiento de su negocio en Perú. Especialistas en constitución de empresas, trámites administrativos y soporte 360°.",
};

export default function ServiciosAdicionalesPage() {
  return (
    <ServiceDetail 
      title="Servicios Adicionales"
      subtitle="Servicio Contable"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Brindamos un enfoque integral para la creación, gestión y optimización de negocios."
      image="/images/servicios-asesoria-negocios-eca.png"
    >
      {/* Sección Informativa Rica */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#011F44] leading-[1.1] mb-8">
                <span className="font-light block">Soporte integral y</span>
                <span className="font-medium text-[#0049B2]">servicios personalizados.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
                Entendemos que cada negocio tiene necesidades únicas. Ofrecemos un portafolio de servicios adicionales diseñados para acompañarlo en cada etapa de su crecimiento empresarial.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Constitución de Empresas", desc: "Asesoría completa para formalizar su negocio." },
                  { title: "Trámites Gubernamentales", desc: "Gestiones ágiles ante SUNAT y Registros Públicos." },
                  { title: "Planificación Tributaria", desc: "Soporte experto para optimizar sus obligaciones." },
                  { title: "Soporte Legal y Contractual", desc: "Asesoría en la elaboración de contratos y acuerdos." },
                  { title: "Acompañamiento Permanente", desc: "Consultoría continua para la toma de decisiones." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0049B2] flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-[#0049B2]/20">
                       <Image src="/icons/icono-check-azul-eca.svg" alt="" width={14} height={14} className="invert brightness-0" />
                    </div>
                    <div>
                      <h4 className="text-[#011F44] font-medium text-lg">{item.title}</h4>
                      <p className="text-gray-600 font-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#0049B2]/5 blur-3xl rounded-full"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <div className="rounded-[2rem] overflow-hidden">
                  <Image 
                    src="/images/servicios-asesoria-negocios-eca.png" 
                    alt="Servicios adicionales y consultoría" 
                    width={600} 
                    height={500} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Valor Diferencial (Bento Box Style) */}
          <div className="relative bg-[#f8faff] rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden border border-[#0049B2]/5">
            {/* Decoraciones de fondo */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#0049B2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-[#0049B2]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#0049B2] font-medium tracking-wider uppercase text-sm mb-4 block">
                  Enfoque 360°
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#011F44] mb-6">
                  Soluciones que impulsan <br className="hidden md:block" /> el crecimiento de <span className="text-[#0049B2]">su negocio</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Formalización Ágil",
                    desc: "Le guiamos paso a paso en la constitución de su empresa, eligiendo la estructura societaria más conveniente (SAC, EIRL, etc).",
                    icon: "/icons/icono-check-azul-eca.svg"
                  },
                  {
                    title: "Representación Especializada",
                    desc: "Actuamos como sus representantes ante entidades públicas, ahorrándole tiempo en trámites burocráticos.",
                    icon: "/icons/icono-check-azul-eca.svg"
                  },
                  {
                    title: "Seguridad Jurídica",
                    desc: "Redactamos y revisamos sus contratos comerciales para blindar legalmente sus operaciones.",
                    icon: "/icons/icono-check-azul-eca.svg"
                  },
                  {
                    title: "Visión a Futuro",
                    desc: "Nuestra consultoría continua le permite anticiparse a escenarios económicos y tributarios para tomar mejores decisiones.",
                    icon: "/icons/icono-check-azul-eca.svg"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#f8faff] flex items-center justify-center mb-6 text-[#0049B2]">
                      <Image src={benefit.icon} alt="" width={24} height={24} className="opacity-80" />
                    </div>
                    <h4 className="text-xl font-medium text-[#011F44] mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
