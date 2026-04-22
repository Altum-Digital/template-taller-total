import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";
import { useReveal } from "@/hooks/useReveal";

export function Testimonials() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  if (!siteConfig.testimonials.length) return null;
  return (
    <section className="pt-16 pb-16 bg-white">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.name}
              className="card-lift bg-surface border border-slate-200 rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-slate-300"
            >
              <div className="flex gap-1 text-accent mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-ink leading-relaxed mb-5 flex-1">"{t.text}"</p>
              <div className="pt-4 border-t border-slate-200">
                <p className="font-display font-semibold text-sm text-ink">{t.name}</p>
                {t.carModel && <p className="text-xs text-ink-muted">{t.carModel}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
