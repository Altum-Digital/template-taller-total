import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icon";
import { useReveal } from "@/hooks/useReveal";

export function FleetsPage() {
  const { fleets, contact, business } = siteConfig;
  const { ref, inView } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ company: "", name: "", phone: "", email: "", vehicles: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = `Planes de Mantenimiento para Flotillas | ${business.name}`;
    const el = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    const desc = fleets.subheadline;
    if (el) el.setAttribute("content", desc);
  }, [fleets.subheadline, business.name]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hola, me interesa un plan para flotilla.%0A%0AEmpresa: ${form.company}%0AContacto: ${form.name}%0ATel: ${form.phone}%0AEmail: ${form.email}%0AUnidades: ${form.vehicles}%0AMensaje: ${form.message}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }

  if (!fleets.enabled) return null;

  return (
    <>
      {/* Hero B2B */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white pt-32 pb-24">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full border border-accent/30 mb-5 uppercase tracking-wider">
              Planes B2B / Empresas
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest mb-5">
              {fleets.headline}
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">{fleets.subheadline}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto-flotillas"
                className="btn-magnetic px-6 py-3.5 bg-accent text-white font-semibold rounded-xl inline-flex items-center gap-2 shadow-lg shadow-accent/30"
              >
                Solicitar propuesta
                <Icon name="arrow" className="w-4 h-4" />
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="btn-magnetic px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl inline-flex items-center gap-2 backdrop-blur"
              >
                <Icon name="phone" className="w-4 h-4" />
                Hablar con ventas
              </a>
            </div>

            {/* Clientes */}
            {fleets.clients.length > 0 && (
              <div className="mt-12">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Empresas que confían en nosotros</p>
                <div className="flex flex-wrap gap-5 items-center text-slate-300">
                  {fleets.clients.map((c) => (
                    <span key={c.name} className="font-display font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative hidden md:block animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src="https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Flotilla empresarial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white text-brand rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-display font-bold">
                20%
              </div>
              <div>
                <p className="font-semibold text-sm">Descuento por volumen</p>
                <p className="text-xs text-ink-muted">en flotillas +40 unidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
              Todo lo que tu empresa necesita
            </h2>
            <p className="text-ink-muted">
              Un solo proveedor para todas tus unidades. Simplifica tu operación.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fleets.benefits.map((b) => (
              <div
                key={b.title}
                className="card-lift bg-white border border-slate-200 rounded-2xl p-6 hover:border-accent hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Icon name={b.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink mb-1.5">{b.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers / Planes */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 bg-brand/5 text-brand text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              Planes
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
              Elige el plan ideal para tu flotilla
            </h2>
            <p className="text-ink-muted">
              Descuentos progresivos según número de unidades. Negociamos contratos anuales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {fleets.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`card-lift rounded-2xl p-8 flex flex-col ${
                  i === 1
                    ? "bg-brand text-white border-2 border-accent shadow-xl shadow-brand/20 md:-translate-y-4"
                    : "bg-white border border-slate-200"
                }`}
              >
                {i === 1 && (
                  <span className="self-start px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
                    Más popular
                  </span>
                )}
                <h3 className={`font-display font-bold text-2xl mb-1 ${i === 1 ? "text-white" : "text-ink"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${i === 1 ? "text-slate-300" : "text-ink-muted"}`}>
                  {tier.vehicleRange}
                </p>
                <div className="mb-6">
                  <span className={`font-display font-extrabold text-5xl tracking-tightest ${i === 1 ? "text-accent" : "text-brand"}`}>
                    {tier.discount}
                  </span>
                  <span className={`text-sm ml-2 ${i === 1 ? "text-slate-300" : "text-ink-muted"}`}>
                    de descuento
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        i === 1 ? "bg-accent text-white" : "bg-green-100 text-green-600"
                      }`}>
                        <Icon name="check" className="w-3 h-3" />
                      </span>
                      <span className={i === 1 ? "text-slate-200" : "text-ink-muted"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto-flotillas"
                  className={`btn-magnetic text-center w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-xl text-sm ${
                    i === 1
                      ? "bg-accent text-white"
                      : "bg-brand text-white hover:bg-brand-light"
                  }`}
                >
                  Solicitar este plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario B2B */}
      <section id="contacto-flotillas" className="pt-20 pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
              Solicita una propuesta
            </h2>
            <p className="text-ink-muted">
              Llena el formulario y te contactamos en menos de 24 horas.
            </p>
          </div>

          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <Icon name="check" className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">¡Solicitud enviada!</h3>
              <p className="text-ink-muted text-sm">
                Acabamos de abrirte WhatsApp con los datos prellenados. Nuestro equipo de ventas te responderá a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-surface rounded-2xl p-8 border border-slate-200 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">Empresa *</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">Contacto *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">Teléfono *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">Número de unidades *</label>
                <select
                  required
                  value={form.vehicles}
                  onChange={(e) => setForm({ ...form, vehicles: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Selecciona…</option>
                  <option value="5-15">5-15 unidades</option>
                  <option value="16-40">16-40 unidades</option>
                  <option value="40+">40+ unidades</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">Mensaje</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                  placeholder="Tipo de unidades, condiciones especiales, etc."
                />
              </div>
              <button
                type="submit"
                className="btn-magnetic w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/20"
              >
                Enviar solicitud por WhatsApp
                <Icon name="whatsapp" className="w-5 h-5" />
              </button>
            </form>
          )}

          <p className="text-xs text-ink-muted text-center mt-6">
            Al enviar aceptas que tus datos sean tratados según nuestro{" "}
            <Link to="/#" className="text-accent hover:underline">
              aviso de privacidad
            </Link>.
          </p>
        </div>
      </section>
    </>
  );
}
