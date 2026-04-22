import { siteConfig } from "@/site.config";
import { useReveal } from "@/hooks/useReveal";

export function Process() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Cómo trabajamos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3 tracking-tightest">
            Así de fácil es el proceso
          </h2>
          <p className="text-slate-300">Cuatro pasos y tu auto funcionando como nuevo.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* connecting line desktop */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />

          {siteConfig.process.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent text-white flex items-center justify-center font-display font-bold text-2xl shadow-lg shadow-accent/30 mb-4 relative z-10">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
