import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

export function Location() {
  const { contact, hours } = siteConfig;
  return (
    <section id="ubicacion" className="pt-12 pb-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand/5 text-brand text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Ubicación
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
            Visítanos
          </h2>
          <p className="text-ink-muted">Estamos listos para atenderte.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden aspect-video md:aspect-auto">
            <iframe
              src={contact.googleMapsEmbed}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del taller"
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-5">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon name="map" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-wider mb-1">Dirección</p>
                <p className="text-ink">{contact.address}</p>
                <a
                  href={contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Cómo llegar <Icon name="arrow" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon name="clock" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-ink-muted uppercase tracking-wider mb-2">Horario</p>
                <ul className="space-y-1 text-sm">
                  {hours.map((h) => (
                    <li key={h.label} className="flex justify-between">
                      <span className="text-ink-muted">{h.label}</span>
                      <span className="text-ink font-medium">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon name="phone" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-wider mb-1">Teléfono</p>
                <a href={`tel:${contact.phone}`} className="text-ink hover:text-accent">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon name="mail" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${contact.email}`} className="text-ink hover:text-accent">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
