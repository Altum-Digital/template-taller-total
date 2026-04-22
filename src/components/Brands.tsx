import { useState } from "react";
import { siteConfig } from "@/site.config";

function BrandLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <span className="font-display font-bold text-ink/60 text-xl md:text-2xl tracking-tight whitespace-nowrap">
        {name}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
      loading="lazy"
    />
  );
}

/**
 * Marquee infinito de marcas atendidas. Duplicamos el array para loop sin saltos.
 */
export function Brands() {
  const { brands } = siteConfig;
  if (!brands.length) return null;

  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-wider text-ink-muted font-semibold mb-6">
          Marcas que atendemos
        </p>
      </div>
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="flex gap-12 pr-12 animate-marquee whitespace-nowrap w-max">
          {[...brands, ...brands].map((b, i) => (
            <div key={`${b.name}-${i}`} className="shrink-0 flex items-center">
              <BrandLogo src={b.logoUrl} name={b.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
