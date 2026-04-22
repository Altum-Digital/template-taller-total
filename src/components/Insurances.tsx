import { useState } from "react";
import { siteConfig } from "@/site.config";
import { useReveal } from "@/hooks/useReveal";

function LogoOrName({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <span className="font-display font-bold text-ink text-lg md:text-xl tracking-tight text-center">
        {name}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="max-h-16 md:max-h-20 w-auto object-contain transition-transform hover:scale-105"
      loading="lazy"
    />
  );
}

export function Insurances() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const { insurances } = siteConfig;
  if (!insurances.length) return null;

  return (
    <section className="pt-16 pb-20 bg-surface">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand/5 text-brand text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Seguros aceptados
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            Trabajamos con tu aseguradora
          </h2>
          <p className="text-ink-muted">
            Atención directa a siniestros y peritaje con las principales aseguradoras del país.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {insurances.map((ins) => (
            <div
              key={ins.name}
              className="card-lift bg-white border border-slate-200 rounded-xl p-6 flex items-center justify-center h-32 md:h-36"
            >
              <LogoOrName src={ins.logoUrl} name={ins.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
