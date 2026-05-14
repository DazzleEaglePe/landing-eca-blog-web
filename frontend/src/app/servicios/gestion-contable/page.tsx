import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión Contable",
  description: "Optimice sus finanzas con nuestra gestión contable experta en Perú. Reportes claros, cumplimiento tributario ante SUNAT y asesoría estratégica para Mypes.",
};

import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gestión Contable",
  description: "Optimice sus finanzas con nuestra gestión contable experta en Perú. Reportes claros, cumplimiento tributario ante SUNAT y asesoría estratégica para Mypes.",
};

export default function GestionContablePage() {
  return (
    <ServiceDetail 
      title="Gestión Contable"
      subtitle="Servicio Contable"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Brindamos soluciones contables personalizadas."
      image="/images/servicio-gestion-contable-eca.png"
    >
      {/* Sección Informativa Rica */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image 
                src="/images/servicio-gestion-contable-eca.png" 
                alt="Gestión contable estratégica" 
                width={600} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-medium text-[#011F44] mb-8 leading-tight">
                Aliado estratégico en su <br />
                <span className="text-[#0049B2]">crecimiento empresarial.</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Brindamos soluciones contables personalizadas para empresas grandes, medianas, pequeñas y emprendimientos. Nuestra revisión rigurosa asegura el cumplimiento de requisitos contables y tributarios.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Provisión de gastos",
                  "Preparación de Libros Contables",
                  "Estados Financieros",
                  "Registro de ingresos",
                  "Libros electrónicos SIRE y PLE",
                  "Registro de cobranzas",
                  "Gestión de Activos Fijos",
                  "Liquidación de IGV",
                  "Registro de pagos",
                  "Asesoría contable continua"
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
          </div>

          {/* Sección de Valor Diferencial - Cumplimiento y Revisión */}
          <div className="bg-[#f8faff] rounded-[3rem] p-12 lg:p-20 border border-[#0049B2]/5">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-2/3">
                <h3 className="text-2xl md:text-4xl font-medium text-[#011F44] mb-6">
                  Revisión Integral de Cumplimiento
                </h3>
                <p className="text-gray-600 font-light text-lg mb-8 italic">
                  "Revisión de la información recibida (comprobantes de pago) para el cumplimiento de los requisitos contables y tributarios."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium text-[#0049B2] mb-3">Seguridad Financiera</h4>
                    <p className="text-gray-500 font-light">Validamos cada transacción para garantizar que sus estados financieros reflejen fielmente la realidad de su empresa.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#0049B2] mb-3">Asesoría Preventiva</h4>
                    <p className="text-gray-500 font-light">No solo registramos, analizamos sus detracciones, percepciones y retenciones para evitar contingencias.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#0049B2] rounded-2xl flex items-center justify-center mb-6">
                    <Image src="/icons/icono-check-azul-eca.svg" alt="" width={24} height={24} className="invert" />
                  </div>
                  <p className="text-[#011F44] font-medium text-lg leading-snug">
                    Garantizamos la emisión oportuna de reportes para una toma de decisiones informada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
