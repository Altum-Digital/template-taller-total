import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

type ContactProps = { variant?: "dark" | "light" };

export function Contact({ variant = "dark" }: ContactProps) {
  const { contact, business } = siteConfig;
  const [form, setForm] = useState({ name: "", phone: "", car: "", problem: "" });
  const isLight = variant === "light";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Hola ${business.name}, quiero cotización.%0A%0A` +
      `Nombre: ${form.name}%0A` +
      `Teléfono: ${form.phone}%0A` +
      `Auto: ${form.car}%0A` +
      `Problema: ${form.problem}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${msg}`, "_blank");
  }

  const input = "w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition";

  return (
    <section
      id="contacto"
      className={
        isLight
          ? "relative pt-24 pb-16 bg-gradient-to-br from-surface via-white to-surface text-ink overflow-hidden"
          : "py-24 bg-gradient-to-br from-brand via-slate-900 to-brand-dark text-white"
      }
    >
      {isLight && (
        <>
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #1a1d21 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        </>
      )}
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className={`inline-block px-3 py-1 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider ${isLight ? "bg-accent/10" : "bg-accent/20"}`}>
              Cotización gratuita
            </span>
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 tracking-tightest ${isLight ? "text-ink" : ""}`}>
              Platícanos de tu auto
            </h2>
            <p className={`leading-relaxed mb-8 ${isLight ? "text-ink-muted" : "text-slate-300"}`}>
              Llena el formulario y recibirás una respuesta por WhatsApp en minutos.
              Sin costo, sin compromiso.
            </p>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl transition ${
                  isLight
                    ? "bg-surface hover:bg-slate-100 border border-slate-200"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                <div className="w-11 h-11 rounded-lg bg-accent text-white flex items-center justify-center">
                  <Icon name="whatsapp" className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider ${isLight ? "text-ink-muted" : "text-slate-400"}`}>WhatsApp directo</p>
                  <p className="font-semibold">{contact.whatsappDisplay}</p>
                </div>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className={`flex items-center gap-4 p-4 rounded-xl transition ${
                  isLight
                    ? "bg-surface hover:bg-slate-100 border border-slate-200"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${isLight ? "bg-slate-200 text-ink" : "bg-white/10 text-white"}`}>
                  <Icon name="phone" className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider ${isLight ? "text-ink-muted" : "text-slate-400"}`}>Llámanos</p>
                  <p className="font-semibold">{contact.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={
              isLight
                ? "relative bg-white text-ink rounded-2xl p-7 border border-slate-200 shadow-2xl shadow-accent/10 ring-1 ring-accent/10"
                : "bg-white text-ink rounded-2xl p-7 shadow-2xl shadow-black/30"
            }
          >
            <h3 className="font-display font-bold text-xl mb-5">Solicita cotización</h3>
            <div className="space-y-3">
              <input
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={input}
              />
              <input
                required
                placeholder="Teléfono / WhatsApp"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={input}
              />
              <input
                required
                placeholder="Marca, modelo y año (ej: Nissan March 2019)"
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className={input}
              />
              <textarea
                required
                placeholder="¿Qué le está pasando a tu auto?"
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                rows={4}
                className={input + " resize-none"}
              />
              <button
                type="submit"
                className="w-full px-5 py-3.5 bg-accent hover:brightness-110 text-white font-semibold rounded-lg transition inline-flex items-center justify-center gap-2 shadow-lg shadow-accent/30"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
              <p className="text-xs text-ink-muted text-center">
                Te contactamos en minutos durante horario hábil.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
