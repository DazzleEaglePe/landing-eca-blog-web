import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de Planillas, Nóminas y Cumplimiento Laboral SUNAFIL",
  description: "Administración eficiente de planillas y nóminas: liquidación de CTS, gratificaciones, vacaciones, cálculo de quinta categoría, aportes AFP y ESSALUD. Soporte ante SUNAFIL en Lima, Perú.",
  alternates: { canonical: "/servicios/gestion-de-planillas" },
};

export default function GestionPlanillasPage() {
  return (
    <ServiceDetail 
      title="Gestión de Planilla"
      subtitle="Servicio Laboral"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Simplificamos y automatizamos la gestión de planillas."
      image="/images/servicio-gestion-planillas-eca.png"
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
                <span className="font-light">Gestión eficiente y</span><br />
                <span className="font-medium text-[#0049B2]">automatización de nóminas.</span>
              </h2>
              <p className="text-[rgba(0,0,0,0.57)] text-lg font-light leading-relaxed">
                Adaptamos nuestros procesos a las necesidades de cualquier negocio, desde pequeñas empresas hasta corporativos, asegurando precisión en cada cálculo laboral.
              </p>
            </div>

            {/* Right - Service Items Grid */}
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { title: "Cálculo de Sueldos y CTS", desc: "Procesamiento preciso de remuneraciones y compensaciones por tiempo de servicios." },
                  { title: "AFP-net y Previsionales", desc: "Gestión de aportes al sistema privado y público de pensiones." },
                  { title: "PDT 601 PLAME", desc: "Elaboración y envío de la planilla electrónica mensual ante SUNAT." },
                  { title: "Boletas de Pago", desc: "Emisión digital de boletas para cada colaborador de su empresa." },
                  { title: "T-REGISTRO", desc: "Alta, modificación y baja de trabajadores en el sistema de SUNAT." },
                  { title: "Impuestos ONP y Renta 5ta", desc: "Cálculo mensual de aportes obligatorios y retenciones." },
                  { title: "Liquidación de Beneficios", desc: "Cálculo de gratificaciones, vacaciones truncas y beneficios sociales." },
                  { title: "Contratos Ministerio Trabajo", desc: "Registro digital de contratos laborales ante el MTPE." },
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

      {/* ═══ Specialties - Dark Panel ═══ */}
      <section className="bg-[#011F44] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#0049B2]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-[#0049B2]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-white/50 text-sm mb-4 font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
              Especialidades
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl text-white leading-[1.08] tracking-tight">
              <span className="font-light">¿Por qué confiar sus</span>{" "}
              <span className="font-medium">planillas a ECA?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Cumplimiento Legal", desc: "Aseguramos que todos los procesos de su nómina cumplan estrictamente con la legislación laboral peruana vigente.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { title: "Liquidación de Beneficios", desc: "Cálculo preciso de gratificaciones, vacaciones truncas y CTS, diferenciando correctamente días computables.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
              { title: "Digitalización", desc: "Emisión y archivo digital mensual de reportes y boletas, facilitando el acceso y la organización de su información.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0049B2]/30 transition-colors duration-500">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon}/>
                  </svg>
                </div>
                <h3 className="text-xl text-white font-medium mb-3">{item.title}</h3>
                <p className="text-white/55 text-base font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
