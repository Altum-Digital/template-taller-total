import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";
import { useCounter } from "@/hooks/useCounter";

export function Hero() {
  const { business, contact, stats } = siteConfig;
  const rating = stats.find((s) => s.label === "Calificación promedio");
  const reviews = stats.find((s) => s.label === "Reseñas en Google");
  const servicios = stats.find((s) => s.label === "Servicios disponibles");
  const ratingCount = useCounter(rating?.value ?? 0, 1400);
  const reviewsCount = useCounter(reviews?.value ?? 0, 1500);
  const warranty = useCounter(business.warrantyDays ?? 90, 1600);
  const serviciosCount = useCounter(servicios?.value ?? 0, 1700);
  const ratingHasDecimals = (rating?.value ?? 0) % 1 !== 0;
  const ratingFormatted = ratingCount.value.toLocaleString("es-MX", ratingHasDecimals ? { minimumFractionDigits: 1, maximumFractionDigits: 1 } : undefined);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white pt-28 pb-20">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full border border-accent/30 mb-5 uppercase tracking-wider">
              Taller mecánico profesional
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tightest mb-5">
              {business.tagline}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              {business.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hola,%20quiero%20agendar%20una%20cita`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic px-6 py-3.5 bg-accent text-white font-semibold rounded-xl inline-flex items-center gap-2 shadow-lg shadow-accent/30"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Agendar por WhatsApp
              </a>
              <Link
                to="/contacto"
                className="btn-magnetic px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl inline-flex items-center gap-2 backdrop-blur"
              >
                Pedir cotización
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80"
                alt="Taller mecánico"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white text-brand rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Icon name="check" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">Cotización gratis</p>
                <p className="text-xs text-ink-muted">Respuesta en minutos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          <div ref={ratingCount.ref}>
            <p className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">{ratingFormatted}{rating?.suffix ?? "/5"}</p>
            <p className="text-slate-400 text-[11px] sm:text-xs uppercase tracking-wider mt-1">Calificación Google</p>
          </div>
          <div ref={reviewsCount.ref}>
            <p className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">{reviewsCount.value.toLocaleString("es-MX")}{reviews?.suffix ?? "+"}</p>
            <p className="text-slate-400 text-[11px] sm:text-xs uppercase tracking-wider mt-1">Reseñas en Google</p>
          </div>
          <div ref={warranty.ref}>
            <p className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">{warranty.value} días</p>
            <p className="text-slate-400 text-[11px] sm:text-xs uppercase tracking-wider mt-1">Garantía por escrito</p>
          </div>
          <div ref={serviciosCount.ref}>
            <p className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">{serviciosCount.value}</p>
            <p className="text-slate-400 text-[11px] sm:text-xs uppercase tracking-wider mt-1">Servicios disponibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
