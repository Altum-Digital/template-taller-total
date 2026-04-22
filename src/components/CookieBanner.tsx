import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent-v1";

export function CookieBanner({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!saved) {
      // Mostrar banner tras pequeño delay para no interferir con LCP
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function accept(all: boolean) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: all, at: Date.now() }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-5 pointer-events-none">
      <div className="max-w-3xl mx-auto pointer-events-auto bg-white border border-slate-200 shadow-xl shadow-black/10 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            <p className="font-display font-semibold text-ink mb-1">
              Usamos cookies esenciales
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Usamos cookies para que el sitio funcione correctamente y para analítica básica.
              Al continuar aceptas nuestro uso.{" "}
              <button onClick={onOpenPrivacy} className="text-accent hover:underline font-medium">
                Aviso de privacidad
              </button>
              .
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => accept(false)}
              className="px-4 py-2 text-sm text-ink-muted hover:text-ink font-medium rounded-lg transition-colors"
            >
              Solo esenciales
            </button>
            <button
              onClick={() => accept(true)}
              className="px-5 py-2 bg-accent hover:brightness-110 text-white text-sm font-semibold rounded-lg transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
