import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { Icon } from "@/components/Icon";
import { useReveal } from "@/hooks/useReveal";

const HERO_MAIN = "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200";
const HERO_WORKSHOP = "https://images.pexels.com/photos/20872015/pexels-photo-20872015.jpeg?auto=compress&cs=tinysrgb&w=1200";
const PROMISE_IMG = "https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg?auto=compress&cs=tinysrgb&w=1200";
const FOUNDER_IMG = "https://images.pexels.com/photos/7144207/pexels-photo-7144207.jpeg?auto=compress&cs=tinysrgb&w=1200";
const TOOLS_IMG = "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200";

const PROMISE_ITEMS = [
  {
    icon: "shield" as const,
    title: "Garantía por escrito",
    text: "Cada servicio incluye garantía documentada de 90 días. Si algo falla, lo resolvemos sin costo.",
  },
  {
    icon: "check" as const,
    title: "Cotización antes de empezar",
    text: "Sin sorpresas. Autorizas cada trabajo con precio cerrado antes de que la llave toque el perno.",
  },
  {
    icon: "box" as const,
    title: "Refacciones con factura",
    text: "OEM o equivalente certificado. Te mostramos la caja y te entregamos la pieza vieja si la pides.",
  },
  {
    icon: "gear" as const,
    title: "Técnicos certificados",
    text: "Formación continua en marcas europeas, japonesas y americanas. Equipo de diagnóstico profesional.",
  },
];

export function AboutPage() {
  const { business } = siteConfig;
  const promise = useReveal<HTMLDivElement>();
  const founder = useReveal<HTMLDivElement>();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white pt-28 pb-24">
        {/* Decorative grid */}
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
              Sobre nosotros
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-5 tracking-tightest leading-[1.05]">
              {business.yearsExperience ?? 15} años reparando autos con honestidad
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              {business.shortDescription}
            </p>
            <div className="mb-8">
              <GoogleReviewsBadge />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="btn-magnetic px-6 py-3.5 bg-accent text-white font-semibold rounded-xl inline-flex items-center gap-2 shadow-lg shadow-accent/30"
              >
                Agendar visita
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <a
                href="#nuestra-promesa"
                className="btn-magnetic px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl inline-flex items-center gap-2 backdrop-blur"
              >
                Nuestra promesa
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
                alt="Mecánico trabajando en el motor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Offset secondary image */}
            <div className="absolute -bottom-8 -left-8 w-48 aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-slate-950 hidden lg:block">
              <img
                src={HERO_WORKSHOP}
                alt="Nuestro taller"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -top-6 -right-6 bg-white text-brand rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <Icon name="shield" className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-none">
                  {business.warrantyDays ?? 90} días
                </p>
                <p className="text-[11px] text-ink-muted uppercase tracking-wider">
                  de garantía
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NUESTRA PROMESA ===== */}
      <section id="nuestra-promesa" className="pt-24 pb-12 bg-white">
        <div
          ref={promise.ref}
          className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center reveal ${
            promise.inView ? "reveal-in" : ""
          }`}
        >
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={PROMISE_IMG}
                alt="Diagnóstico profesional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img
                src={TOOLS_IMG}
                alt="Herramientas profesionales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              Cómo trabajamos
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4 tracking-tightest">
              Nuestra promesa en cuatro puntos
            </h2>
            <p className="text-ink-muted mb-8 leading-relaxed">
              No vendemos reparaciones, construimos confianza. Cada auto que entra a DK Motors recibe el mismo trato que les damos a los de nuestra familia.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {PROMISE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-slate-200 hover:border-accent/40 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-ink mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <Timeline />

      {/* ===== FOUNDER QUOTE ===== */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div
          ref={founder.ref}
          className={`relative max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center reveal ${
            founder.inView ? "reveal-in" : ""
          }`}
        >
          <div className="md:col-span-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src={FOUNDER_IMG}
                alt="Entrega de llaves"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full border border-accent/30 mb-5 uppercase tracking-wider">
              Palabra del fundador
            </span>
            <svg
              className="w-10 h-10 text-accent/50 mb-3"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="font-display text-2xl md:text-3xl leading-snug mb-6 text-white tracking-tight">
              "Aquí no te vendemos miedo. Si tu auto no necesita la reparación, te lo decimos. Eso es lo que nos ha mantenido 15 años en Tecamachalco."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-display font-bold text-accent text-lg">
                DK
              </div>
              <div>
                <p className="font-semibold text-white">Equipo DK Motors</p>
                <p className="text-sm text-slate-400">Fundadores · Taller familiar desde 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* ===== CTA ===== */}
      <section className="pt-20 pb-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4 tracking-tightest">
            Ven a conocernos
          </h2>
          <p className="text-ink-muted mb-8">
            Queremos ser tu taller de confianza. Agenda una cita sin compromiso.
          </p>
          <Link
            to="/contacto"
            className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/30"
          >
            Agendar visita
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
