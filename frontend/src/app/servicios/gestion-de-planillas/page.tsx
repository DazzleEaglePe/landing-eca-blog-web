import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gestión de Planilla",
  description: "Administración eficiente de recursos humanos y nóminas en Perú. Garantizamos el cálculo preciso de remuneraciones, beneficios sociales y cumplimiento laboral.",
};

export default function GestionPlanillasPage() {
  return (
    <ServiceDetail 
      title="Gestión de Planilla"
      subtitle="Servicio Contable"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Simplificamos y automatizamos la gestión de planillas."
      image="/images/servicio-gestion-planillas-eca.png"
    >
      {/* Sección Informativa Rica */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium text-[#011F44] mb-8 leading-tight">
                Gestión eficiente y <br />
                <span className="text-[#0049B2]">automatización de nóminas.</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Adaptamos nuestros procesos a las necesidades de cualquier negocio, desde pequeñas empresas hasta corporativos, asegurando precisión en cada cálculo laboral.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Cálculo de Sueldos y CTS",
                  "AFP-net y Previsionales",
                  "PDT 601 PLAME",
                  "Honorarios Electrónicos",
                  "Boletas de Pago",
                  "T-REGISTRO",
                  "Impuestos ONP y Renta",
                  "Liquidación de Beneficios",
                  "Contratos Ministerio Trabajo",
                  "Resumen en Sistema Contable"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0049B2] flex items-center justify-center flex-shrink-0">
                       <Image src="/icons/icono-check-azul-eca.svg" alt="" width={10} height={10} />
                    </div>
                    <p className="text-gray-700 font-light text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/servicio-gestion-planillas-eca.png" 
                alt="Gestión de planillas eficiente" 
                width={600} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Sección de Especialidad - Beneficios y Liquidación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-[#f8faff] border border-[#0049B2]/5">
              <h4 className="text-xl font-medium text-[#011F44] mb-4">Cumplimiento Legal</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Aseguramos que todos los procesos de su nómina cumplan estrictamente con la legislación laboral peruana vigente.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-[#f8faff] border border-[#0049B2]/5">
              <h4 className="text-xl font-medium text-[#011F44] mb-4">Liquidación de Beneficios</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Cálculo preciso de gratificaciones, vacaciones truncas y CTS, diferenciando correctamente días computables.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-[#f8faff] border border-[#0049B2]/5">
              <h4 className="text-xl font-medium text-[#011F44] mb-4">Digitalización</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Emisión y archivo digital mensual de reportes y boletas, facilitando el acceso y la organización de su información.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
