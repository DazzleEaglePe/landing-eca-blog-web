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
              <h2 className="text-3xl md:text-5xl font-medium text-[#011F44] mb-8 leading-tight">
                Cumplimiento normativo y <br />
                <span className="text-[#0049B2]">eficiencia fiscal.</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                En un entorno tributario en constante cambio, nuestro equipo se encarga de que su empresa no solo cumpla con la normativa legal, sino que también aproveche los beneficios fiscales vigentes.
              </p>
              <div className="space-y-6">
                {[
                  "Preparación y presentación de declaraciones mensuales de renta e IGV.",
                  "Gestión de impuestos para no domiciliados.",
                  "Archivamiento y custodia de documentación mensual.",
                  "Declaraciones juradas anuales de Impuesto a la Renta."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0049B2] flex items-center justify-center mt-1 flex-shrink-0">
                       <Image src="/icons/icono-check-azul-eca.svg" alt="" width={12} height={12} />
                    </div>
                    <p className="text-gray-700 font-light text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/grafico-servicios-blue-eca.png" 
                alt="Gestión tributaria" 
                width={600} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Sección de Valor Diferencial */}
          <div className="bg-[#f8faff] rounded-[3rem] p-12 lg:p-20">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-4xl font-medium text-[#011F44] mb-8">
                ¿Por qué confiar su gestión tributaria a ECA?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-medium text-[#0049B2] mb-4">Prevención de Multas</h4>
                  <p className="text-gray-600 font-light">Nuestro riguroso proceso de revisión asegura que sus declaraciones estén libres de errores que puedan generar contingencias ante SUNAT.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#0049B2] mb-4">Soporte Técnico Especializado</h4>
                  <p className="text-gray-600 font-light">Acceso a consultoría permanente sobre cambios en la normativa y su impacto directo en su modelo de negocio.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#0049B2] mb-4">Declaración DAOT</h4>
                  <p className="text-gray-600 font-light">Gestionamos la declaración anual de Operaciones con Terceros, asegurando la consistencia de su información comercial.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#0049B2] mb-4">Enfoque Estratégico</h4>
                  <p className="text-gray-600 font-light">No solo liquidamos impuestos; analizamos su estructura financiera para proponer mejoras en la eficiencia fiscal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
