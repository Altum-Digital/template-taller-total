import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icon";
import { useReveal } from "@/hooks/useReveal";

export function ServiceLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = siteConfig.services.find((s) => s.slug === slug);
  const contact = siteConfig.contact;
  const { ref: revealRef, inView } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (!service) return;
    document.title = service.metaTitle;
    setMeta("description", service.metaDescription);
    setMeta("og:title", service.metaTitle, true);
    setMeta("og:description", service.metaDescription, true);

    // Inject JSON-LD Service schema
    const scriptId = "service-ld-json";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      provider: {
        "@type": "AutoRepair",
        name: siteConfig.business.name,
        telephone: siteConfig.contact.phone,
        address: siteConfig.contact.address,
      },
      areaServed: "Mérida, Yucatán",
      offers: service.priceFrom
        ? { "@type": "Offer", priceCurrency: "MXN", price: service.priceFrom.replace(/\D/g, "") }
        : undefined,
    });

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [service]);

  if (!service) return <Navigate to="/servicios" replace />;

  const related = (service.relatedSlugs || [])
    .map((s) => siteConfig.services.find((srv) => srv.slug === s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  const waHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Hola, me interesa el servicio de ${service.title}. ¿Me podrían cotizar?`,
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand to-slate-900 text-white pt-32 pb-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 animate-fade-up">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white mb-5 uppercase tracking-wider"
            >
              <Icon name="arrow" className="w-3 h-3 rotate-180" />
              Todos los servicios
            </Link>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                <Icon name={service.icon} className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/15 uppercase tracking-wider">
                Servicio certificado
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tightest mb-5">
              {service.heroHeadline}
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{service.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic px-6 py-3.5 bg-accent text-white font-semibold rounded-xl inline-flex items-center gap-2 shadow-lg shadow-accent/30"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="btn-magnetic px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl inline-flex items-center gap-2 backdrop-blur"
              >
                <Icon name="phone" className="w-4 h-4" />
                {contact.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              {service.priceFrom && (
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Desde</p>
                  <p className="text-2xl font-display font-bold text-white">{service.priceFrom}</p>
                </div>
              )}
              {service.durationEstimate && (
                <>
                  <div className="h-10 w-px bg-white/15 self-center" />
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Tiempo estimado</p>
                    <p className="text-2xl font-display font-bold text-white">{service.durationEstimate}</p>
                  </div>
                </>
              )}
              <div className="h-10 w-px bg-white/15 self-center" />
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Garantía</p>
                <p className="text-2xl font-display font-bold text-white">
                  {siteConfig.business.warrantyDays ?? 90} días
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 hidden md:block animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src={service.image ?? "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Incluye + Contenido SEO */}
      <section className="pt-20 pb-28 bg-white">
        <div ref={revealRef} className={`max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 reveal ${inView ? "reveal-in" : ""}`}>
          <aside className="md:col-span-1">
            <div className="sticky top-24 bg-surface rounded-2xl p-7 border border-slate-200">
              <h3 className="font-display font-semibold text-lg text-ink mb-4">¿Qué incluye?</h3>
              <ul className="space-y-3">
                {(service.includes || []).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="check" className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-xl"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                Agendar ahora
              </a>
            </div>
          </aside>

          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-3xl text-ink mb-6 tracking-tightest">
              Todo lo que debes saber sobre {service.title.toLowerCase()}
            </h2>
            <div className="prose prose-slate max-w-none">
              {service.seoContent.split("\n\n").map((p, i) => (
                <p key={i} className="text-ink-muted leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios relacionados */}
      {related.length > 0 && (
        <section className="pt-20 pb-28 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-8 tracking-tightest">
              También te puede interesar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/servicios/${r.slug}`}
                  className="card-lift group bg-white border border-slate-200 rounded-2xl p-6 hover:border-accent"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon name={r.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-ink mb-1">{r.title}</h3>
                  <p className="text-xs text-ink-muted">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 tracking-tightest">
            Listos para atender tu auto
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Cotización gratis sin compromiso. Respondemos en minutos por WhatsApp.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/30"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            Hablar con un asesor
          </a>
        </div>
      </section>
    </>
  );
}

function setMeta(name: string, content: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (isProperty) el.setAttribute("property", name);
    else el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
