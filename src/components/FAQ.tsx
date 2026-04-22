import { useState } from "react";
import { siteConfig } from "@/site.config";
import { useReveal } from "@/hooks/useReveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="pt-16 pb-32 bg-white">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            Resolvemos tus dudas
          </h2>
          <p className="text-ink-muted">
            Lo que más nos preguntan antes de confiarnos su auto.
          </p>
        </div>

        <div className="space-y-3">
          {siteConfig.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "border-accent/40 bg-accent/[0.03] shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-semibold text-base md:text-lg ${isOpen ? "text-accent" : "text-ink"}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? "bg-accent text-white rotate-45" : "bg-slate-100 text-ink-muted"
                    }`}
                    aria-hidden
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-muted leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
