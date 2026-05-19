import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gestión Contable Estratégica para Mypes y Empresas en Lima",
  description: "Servicio de gestión contable integral: estados financieros, facturación electrónica, control de inventarios y cumplimiento tributario ante SUNAT. Reportes claros y asesoría estratégica para Mypes en Lima, Perú.",
  alternates: { canonical: "/servicios/gestion-contable" },
};

export default function GestionContablePage() {
  return (
    <ServiceDetail 
      title="Gestión Contable"
      subtitle="Servicio Contable"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Brindamos soluciones contables personalizadas."
      image="/images/servicio-gestion-contable-eca.png"
    >
      {/* ═══ Services Included ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left - Heading */}
            <div className="lg:w-5/12 lg:sticky lg:top-40">
              <p className="text-[#0a0a0a] text-sm md:text-base mb-4 flex items-center gap-3 font-normal tracking-wide">
                <span className="w-6 h-[1.5px] bg-[#0049B2] inline-block" />
                Lo que incluye
              </p>
              <h2 className="text-3xl md:text-5xl text-[#011F44] leading-[1.08] tracking-tight mb-6">
                <span className="font-light">Aliado estratégico en su</span><br />
                <span className="font-medium text-[#0049B2]">crecimiento empresarial.</span>
              </h2>
              <p className="text-[rgba(0,0,0,0.57)] text-lg font-light leading-relaxed">
                Brindamos soluciones contables personalizadas para empresas grandes, medianas, pequeñas y emprendimientos. Nuestra revisión rigurosa asegura el cumplimiento de requisitos contables y tributarios.
              </p>
            </div>

            {/* Right - Service Items Grid */}
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { title: "Provisión de gastos", desc: "Registro preciso y oportuno de todos los gastos operativos." },
                  { title: "Preparación de Libros Contables", desc: "Libros principales y auxiliares actualizados al día." },
                  { title: "Estados Financieros", desc: "Balance General, Estado de Resultados y flujo de efectivo." },
                  { title: "Registro de ingresos", desc: "Control detallado de todas las fuentes de ingreso." },
                  { title: "Libros electrónicos SIRE y PLE", desc: "Generación y envío según normativa SUNAT vigente." },
                  { title: "Gestión de Activos Fijos", desc: "Control patrimonial con depreciación calculada." },
                  { title: "Liquidación de IGV", desc: "Determinación y declaración mensual del impuesto." },
                  { title: "Asesoría contable continua", desc: "Soporte permanente para la toma de decisiones." },
                ].map((item, i) => (
                  <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0049B2]/5 hover:-translate-y-1 hover:border-[#0049B2]/20">
                    <div className="w-10 h-10 rounded-xl bg-[#0049B2]/10 text-[#0049B2] flex items-center justify-center mb-4 group-hover:bg-[#0049B2] group-hover:text-white transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-[#011F44] font-medium text-base mb-1">{item.title}</h3>
                    <p className="text-[rgba(0,0,0,0.5)] text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Differential Value - Dark Panel ═══ */}
      <section className="bg-[#011F44] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#0049B2]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-[#0049B2]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-white/50 text-sm mb-4 font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
              Valor Diferencial
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl text-white leading-[1.08] tracking-tight">
              <span className="font-light">Revisión integral de</span>{" "}
              <span className="font-medium">cumplimiento.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0049B2]/30 transition-colors duration-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-3">Seguridad Financiera</h3>
              <p className="text-white/55 text-base font-light leading-relaxed">Validamos cada transacción para garantizar que sus estados financieros reflejen fielmente la realidad de su empresa.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0049B2]/30 transition-colors duration-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl text-white font-medium mb-3">Asesoría Preventiva</h3>
              <p className="text-white/55 text-base font-light leading-relaxed">No solo registramos, analizamos sus detracciones, percepciones y retenciones para evitar contingencias.</p>
            </div>
          </div>

          {/* Quote card */}
          <div className="max-w-3xl mx-auto mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/70 text-lg font-light italic leading-relaxed">
              "Revisión de la información recibida (comprobantes de pago) para el cumplimiento de los requisitos contables y tributarios. Garantizamos la emisión oportuna de reportes para una toma de decisiones informada."
            </p>
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
