import { siteConfig } from "@/site.config";
import { useReveal } from "@/hooks/useReveal";

export function Gallery() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  if (!siteConfig.gallery.length) return null;
  return (
    <section id="galeria" className="py-24 bg-surface">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand/5 text-brand text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Nuestro trabajo
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            Conoce nuestro taller
          </h2>
          <p className="text-ink-muted">Instalaciones limpias, equipo profesional y atención de calidad.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {siteConfig.gallery.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200"
            >
              <img
                src={src}
                loading="lazy"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/20 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
