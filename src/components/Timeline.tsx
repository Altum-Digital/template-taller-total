import { useRef } from "react";
import { siteConfig } from "@/site.config";
import { useReveal } from "@/hooks/useReveal";
import { Icon } from "@/components/Icon";

export function Timeline() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { timeline } = siteConfig;
  if (!timeline.length) return null;

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth >= 768 ? 440 : 320;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="pt-4 pb-20 bg-white overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${inView ? "reveal-in" : ""}`}
      >
        {/* Header */}
        <div className="px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              Nuestra historia
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest leading-tight">
              Dos décadas construyendo confianza
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Desliza para recorrer los hitos que nos trajeron hasta aquí.
            </p>
          </div>

          {/* Flechas */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-ink hover:border-accent hover:text-accent transition-colors flex items-center justify-center shadow-sm"
              aria-label="Anterior"
            >
              <Icon name="arrow" className="w-4 h-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="w-11 h-11 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors flex items-center justify-center shadow-md shadow-accent/30"
              aria-label="Siguiente"
            >
              <Icon name="arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-6 -mx-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.timeline-scroll::-webkit-scrollbar { display: none; }`}</style>
          {timeline.map((ev, i) => (
            <article
              key={ev.year}
              className="snap-start flex-shrink-0 w-[300px] md:w-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Imagen con año overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {ev.image && (
                  <img
                    src={ev.image}
                    alt={ev.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Número de paso */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur text-accent text-xs font-display font-bold flex items-center justify-center shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Año grande sobre la imagen */}
                <div className="absolute bottom-4 left-5">
                  <p className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-semibold mb-1">
                    Hito {i + 1} de {timeline.length}
                  </p>
                  <p className="font-display font-extrabold text-white text-5xl tracking-tightest leading-none drop-shadow-lg">
                    {ev.year}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-ink mb-2">
                  {ev.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {ev.description}
                </p>
              </div>
            </article>
          ))}

          {/* Card final "La historia continúa" */}
          <article className="snap-start flex-shrink-0 w-[300px] md:w-[420px] rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-br from-accent/10 via-white to-accent/5 flex flex-col items-center justify-center p-10 text-center min-h-[420px]">
            <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center mb-4 shadow-lg shadow-accent/30">
              <Icon name="arrow" className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-ink mb-2 tracking-tightest">
              La historia continúa
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Cada auto que entra a nuestro taller es el próximo capítulo.
            </p>
          </article>
        </div>

        {/* Barra de progreso (indicadores) */}
        <div className="px-6 flex items-center gap-1.5 mt-2">
          {timeline.map((ev) => (
            <div
              key={ev.year}
              className="h-1 flex-1 max-w-[60px] bg-slate-200 rounded-full overflow-hidden"
            >
              <div className="h-full bg-accent/40 w-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
