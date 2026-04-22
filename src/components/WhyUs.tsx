import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";
import { useReveal } from "@/hooks/useReveal";

export function WhyUs() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            La tranquilidad de un taller honesto
          </h2>
          <p className="text-ink-muted">
            Llevamos años construyendo confianza con nuestros clientes. Esta es nuestra diferencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {siteConfig.whyUs.map((item) => (
            <div
              key={item.title}
              className="card-lift flex gap-5 p-6 rounded-2xl bg-surface border border-slate-200 hover:border-brand hover:shadow-md"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-brand text-white flex items-center justify-center">
                <Icon name={item.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-ink mb-1">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
