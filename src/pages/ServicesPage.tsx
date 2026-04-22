import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icon";
import { Process } from "@/components/Process";
import { Insurances } from "@/components/Insurances";
import { useReveal } from "@/hooks/useReveal";

const HERO_MAIN = "https://images.pexels.com/photos/8478265/pexels-photo-8478265.jpeg?auto=compress&cs=tinysrgb&w=1200";
const HERO_SECONDARY = "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800";

export function ServicesPage() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const { services, business } = siteConfig;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white pt-28 pb-24">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full border border-accent/30 mb-5 uppercase tracking-wider">
              Nuestros servicios
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-5 tracking-tightest leading-[1.05]">
              Todo lo que tu auto necesita
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              {services.length} servicios especializados con técnicos certificados,
              refacciones originales y garantía por escrito de {business.warrantyDays ?? 90} días.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="btn-magnetic px-6 py-3.5 bg-accent text-white font-semibold rounded-xl inline-flex items-center gap-2 shadow-lg shadow-accent/30"
              >
                Pedir cotización
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <a
                href="#catalogo"
                className="btn-magnetic px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl inline-flex items-center gap-2 backdrop-blur"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          {/* Image collage */}
          <div
            className="relative hidden md:block animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src={HERO_MAIN}
                alt="Mecánico trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-44 aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-slate-950 hidden lg:block">
              <img
                src={HERO_SECONDARY}
                alt="Herramientas profesionales"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-brand rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-display font-bold">
                {services.length}
              </div>
              <div>
                <p className="font-display font-bold text-sm leading-none">Servicios</p>
                <p className="text-[11px] text-ink-muted uppercase tracking-wider mt-1">
                  Certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATÁLOGO ===== */}
      <section id="catalogo" className="py-20 bg-white">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/servicios/${s.slug}`}
                className="card-lift group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl hover:shadow-black/5 block"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-white/95 text-accent flex items-center justify-center shadow-lg backdrop-blur">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  {s.priceFrom && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-accent text-[11px] font-bold shadow-md backdrop-blur uppercase tracking-wider">
                      Desde {s.priceFrom}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-ink mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                    {s.durationEstimate ? (
                      <span className="text-ink-muted inline-flex items-center gap-1.5">
                        <Icon name="clock" className="w-3.5 h-3.5" />
                        {s.durationEstimate}
                      </span>
                    ) : <span />}
                    <span className="text-accent font-semibold inline-flex items-center gap-1 link-underline">
                      Ver detalles
                      <Icon name="arrow" className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Insurances />
      <div className="h-8 bg-surface" />

      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 tracking-tightest">
            ¿No encuentras tu servicio?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Atendemos prácticamente cualquier falla mecánica. Escríbenos y te cotizamos gratis.
          </p>
          <Link
            to="/contacto"
            className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/30"
          >
            Solicitar cotización
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
