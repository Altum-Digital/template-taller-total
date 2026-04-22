import { siteConfig } from "@/site.config";
import { useCounter } from "@/hooks/useCounter";

function StatCard({ value, label, prefix, suffix, delay }: {
  value: number; label: string; prefix?: string; suffix?: string; delay: number;
}) {
  const { ref, value: animated } = useCounter(value, 1400 + delay);
  const hasDecimals = value % 1 !== 0;
  const formatted = animated.toLocaleString("es-MX", hasDecimals ? { minimumFractionDigits: 1, maximumFractionDigits: 1 } : undefined);
  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
    >
      <p className="font-display font-extrabold text-4xl md:text-5xl text-brand tracking-tightest tabular-nums">
        {prefix}{formatted}{suffix}
      </p>
      <p className="mt-2 text-sm text-ink-muted uppercase tracking-wider font-medium">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 bg-surface border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-4">
          {siteConfig.stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
