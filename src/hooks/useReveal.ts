import { useEffect, useRef, useState } from "react";

/**
 * Hook para animaciones scroll-triggered con IntersectionObserver.
 * Devuelve un ref y un booleano que pasa a `true` cuando el elemento entra en viewport.
 * Uso: <div ref={ref} className={`reveal ${inView ? "reveal-in" : ""}`}>...</div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // una vez visible, dejar de observar
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}
