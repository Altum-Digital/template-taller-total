import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";
import { useReveal } from "@/hooks/useReveal";

/**
 * Si `preview` es true, muestra solo los primeros 4 servicios + CTA a /servicios.
 */
export function Services({ preview = false }: { preview?: boolean }) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const list = preview ? siteConfig.services.slice(0, 4) : siteConfig.services;

  return (
    <section id="servicios" className="pt-24 pb-16 bg-surface">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand/5 text-brand text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Nuestros servicios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            Todo lo que tu auto necesita
          </h2>
          <p className="text-ink-muted">
            Atendemos cualquier marca y modelo con técnicos certificados y refacciones originales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((s) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="card-lift group bg-white border border-slate-200 rounded-2xl p-6 hover:border-accent hover:shadow-lg block"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <Icon name={s.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-1.5">{s.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Link
              to="/servicios"
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-semibold rounded-xl"
            >
              Ver todos los servicios
              <Icon name="arrow" className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
