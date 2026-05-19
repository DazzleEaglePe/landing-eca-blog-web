import { ServiceDetail } from "@/components/organisms/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constitución de Empresas, Drawback y Soporte Legal en Perú",
  description: "Servicios adicionales: constitución de empresas (SAC, EIRL, SRL), trámites SUNARP, devolución de Drawback, soporte administrativo y asesoría legal corporativa. Tu aliado integral en Lima, Perú.",
  alternates: { canonical: "/servicios/servicios-adicionales" },
};

export default function ServiciosAdicionalesPage() {
  return (
    <ServiceDetail 
      title="Servicios Adicionales"
      subtitle="Servicios Corporativos"
      description="Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio. Brindamos un enfoque integral para la creación, gestión y optimización de negocios."
      image="/images/servicios-asesoria-negocios-eca.png"
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
                <span className="font-light">Soporte integral y</span><br />
                <span className="font-medium text-[#0049B2]">servicios personalizados.</span>
              </h2>
              <p className="text-[rgba(0,0,0,0.57)] text-lg font-light leading-relaxed">
                Entendemos que cada negocio tiene necesidades únicas. Ofrecemos un portafolio de servicios adicionales diseñados para acompañarlo en cada etapa de su crecimiento empresarial.
              </p>
            </div>

            {/* Right - Service Items */}
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { title: "Constitución de Empresas", desc: "Asesoría completa para formalizar su negocio ante SUNARP y notarías." },
                  { title: "Trámites Gubernamentales", desc: "Gestiones ágiles ante SUNAT, SUNARP y Registros Públicos." },
                  { title: "Planificación Tributaria", desc: "Soporte experto para optimizar sus obligaciones fiscales." },
                  { title: "Soporte Legal y Contractual", desc: "Asesoría en la elaboración y revisión de contratos comerciales." },
                  { title: "Devolución de Drawback", desc: "Restitución de derechos arancelarios para importadores y exportadores." },
                  { title: "Acompañamiento Permanente", desc: "Consultoría continua para la toma de decisiones estratégicas." },
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

      {/* ═══ Why ECA - Dark Panel ═══ */}
      <section className="bg-[#011F44] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#0049B2]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-[#0049B2]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-white/50 text-sm mb-4 font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
              Enfoque 360°
              <span className="w-8 h-[2px] bg-white/30 inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl text-white leading-[1.08] tracking-tight">
              <span className="font-light">Soluciones que impulsan</span>{" "}
              <span className="font-medium">el crecimiento de su negocio.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Formalización Ágil", desc: "Le guiamos paso a paso en la constitución de su empresa, eligiendo la estructura societaria más conveniente (SAC, EIRL, etc).", icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" },
              { title: "Representación Especializada", desc: "Actuamos como sus representantes ante entidades públicas, ahorrándole tiempo en trámites burocráticos.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
              { title: "Seguridad Jurídica", desc: "Redactamos y revisamos sus contratos comerciales para blindar legalmente sus operaciones.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { title: "Visión a Futuro", desc: "Nuestra consultoría continua le permite anticiparse a escenarios económicos y tributarios para tomar mejores decisiones.", icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#0049B2]/30 transition-colors duration-500">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon}/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl text-white font-medium mb-3">{item.title}</h3>
                <p className="text-white/55 text-base font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
