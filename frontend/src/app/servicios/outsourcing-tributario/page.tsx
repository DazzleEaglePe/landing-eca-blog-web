import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Outsourcing Tributario",
  description: "Nos encargamos de la gestión tributaria integral, garantizando el cumplimiento normativo y optimizando la carga fiscal de su empresa.",
};

export default function OutsourcingTributarioPage() {
  return (
    <ServiceDetail 
      title="Outsourcing Tributario"
      subtitle="Servicio Contable"
      description="Brindamos seguridad fiscal a su empresa. Realizamos una gestión tributaria preventiva para optimizar sus recursos y asegurar el cumplimiento de todas las obligaciones ante la SUNAT."
      image="/images/servicio-outsourcing-tributario-eca.png"
    >
      {/* Sección Informativa Rica */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#011F44] leading-[1.1] mb-8">
                <span className="font-light block">Cumplimiento normativo y</span>
                <span className="font-medium text-[#0049B2]">eficiencia fiscal.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
                En un entorno tributario en constante cambio, nuestro equipo se encarga de que su empresa no solo cumpla con la normativa legal, sino que también aproveche los beneficios fiscales vigentes.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Declaraciones mensuales", desc: "Preparación y presentación de renta e IGV." },
                  { title: "Impuestos no domiciliados", desc: "Gestión completa y cumplimiento normativo." },
                  { title: "Custodia documental", desc: "Archivamiento y preparación de impuestos mensuales." },
                  { title: "Declaraciones anuales", desc: "Preparación de juradas de Impuesto a la Renta." }
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
                    src="/images/grafico-servicios-blue-eca.png" 
                    alt="Gestión tributaria" 
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
                  Valor Añadido
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#011F44] mb-6">
                  ¿Por qué confiar su gestión <br className="hidden md:block" /> tributaria a <span className="text-[#0049B2]">ECA?</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Prevención de Multas",
                    desc: "Nuestro riguroso proceso de revisión asegura que sus declaraciones estén libres de errores que puedan generar contingencias ante SUNAT.",
                    icon: "/icons/icono-check-azul-eca.svg"
                  },
                  {
                    title: "Soporte Técnico Especializado",
                    desc: "Acceso a consultoría permanente sobre cambios en la normativa y su impacto directo en su modelo de negocio.",
                    icon: "/icons/icono-check-azul-eca.svg"
                  },
                  {
                    title: "Declaración DAOT",
                    desc: "Gestionamos la declaración anual de Operaciones con Terceros, asegurando la consistencia de su información comercial.",
                    icon: "/icons/icono-check-azul-eca.svg"
                  },
                  {
                    title: "Enfoque Estratégico",
                    desc: "No solo liquidamos impuestos; analizamos su estructura financiera para proponer mejoras en la eficiencia fiscal.",
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
