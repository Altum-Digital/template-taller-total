import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icon";

export function ContactPage() {
  const { contact, hours } = siteConfig;

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full border border-accent/30 mb-5 uppercase tracking-wider">
            Contacto
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4 tracking-tightest">
            Agenda tu cita
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Respondemos en minutos por WhatsApp. También puedes llamarnos o pasar directamente.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/30"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl backdrop-blur"
            >
              <Icon name="phone" className="w-4 h-4" />
              {contact.phone}
            </a>
          </div>
        </div>
      </section>

      <Contact variant="light" />

      <section className="pt-16 pb-12 bg-surface relative overflow-hidden">
        {/* Decoración de fondo */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1a1d21 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              Toda la info
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3 tracking-tightest">
              Visítanos o contáctanos
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Estamos en Lomas de Tecamachalco, con estacionamiento para clientes y sala de espera con café.
            </p>
          </div>

          {/* 3 cards más ricas */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dirección */}
            <div className="card-lift bg-white border border-slate-200 rounded-2xl p-7 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="map" className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                Nuestra ubicación
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">
                {contact.address}
              </p>
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <p className="text-xs text-ink-muted flex items-center gap-2">
                  <Icon name="check" className="w-3.5 h-3.5 text-green-600" />
                  Estacionamiento disponible
                </p>
                <p className="text-xs text-ink-muted flex items-center gap-2">
                  <Icon name="check" className="w-3.5 h-3.5 text-green-600" />
                  Sala de espera con café
                </p>
              </div>
              <a
                href={contact.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-accent font-semibold text-sm link-underline"
              >
                Cómo llegar
                <Icon name="arrow" className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Horarios */}
            <div className="card-lift bg-white border border-slate-200 rounded-2xl p-7 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="clock" className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display font-semibold text-lg text-ink">
                  Horarios de atención
                </h3>
              </div>
              <ul className="space-y-2 text-sm flex-1 mt-2">
                {hours.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-ink">{h.label}</span>
                    <span className="text-ink-muted">{h.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-muted mt-4 pt-4 border-t border-slate-100">
                Recomendamos agendar cita previa para reducir tiempo de espera.
              </p>
            </div>

            {/* Reseñas */}
            <div className="card-lift bg-white border border-slate-200 rounded-2xl p-7 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="star" className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-4">
                Lo que dicen nuestros clientes
              </h3>
              <div className="mb-4">
                <GoogleReviewsBadge />
              </div>
              <blockquote className="text-sm text-ink-muted leading-relaxed italic border-l-2 border-accent/40 pl-4 mb-5 flex-1">
                "Servicio honesto y profesional. Me explicaron todo antes de empezar y el precio fue justo."
              </blockquote>
              <a
                href={siteConfig.googleReviews.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm link-underline"
              >
                Ver todas las reseñas
                <Icon name="arrow" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
