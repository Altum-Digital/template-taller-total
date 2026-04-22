import { useEffect, useRef, useState } from "react";
import { useReveal } from "./useReveal";

/**
 * Anima un número de 0 a `target` cuando el elemento entra en viewport.
 * Uso: const { ref, value } = useCounter(500, 1400); → <div ref={ref}>{value}</div>
 */
export function useCounter(target: number, durationMs: number = 1400) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    let raf = 0;

    const hasDecimals = target % 1 !== 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const raw = target * eased;
      setValue(hasDecimals ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, durationMs]);

  return { ref, value };
}
