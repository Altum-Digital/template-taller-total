import { useEffect } from "react";
import { siteConfig } from "@/site.config";

/**
 * Inyecta JSON-LD LocalBusiness (Schema.org) en el <head> al montar.
 * Ayuda a Google a mostrar rich results (horarios, ubicación, reviews).
 */
export function SchemaOrg() {
  useEffect(() => {
    const { business, contact, hours, social, testimonials } = siteConfig;

    const avgRating =
      testimonials.reduce((s, t) => s + t.rating, 0) / Math.max(testimonials.length, 1);

    const openingHours = hours
      .filter((h) => !/cerrado/i.test(h.hours))
      .map((h) => {
        const daysMap: Record<string, string> = {
          "lun - vie": "Mo-Fr",
          "lunes - viernes": "Mo-Fr",
          "sábado": "Sa",
          "sabado": "Sa",
          "domingo": "Su",
        };
        const key = h.label.toLowerCase().trim();
        const day = daysMap[key] ?? h.label;
        // "8:00 AM – 7:00 PM" → "08:00-19:00"
        const [from, to] = h.hours.split(/[-–]/).map((s) => s.trim());
        return `${day} ${parseTime(from)}-${parseTime(to)}`;
      });

    const data = {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: business.name,
      description: business.shortDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressCountry: "MX",
      },
      telephone: contact.phone,
      email: contact.email,
      url: typeof window !== "undefined" ? window.location.origin : "",
      openingHours,
      sameAs: Object.values(social).filter(Boolean),
      aggregateRating: testimonials.length
        ? {
            "@type": "AggregateRating",
            ratingValue: avgRating.toFixed(1),
            reviewCount: testimonials.length,
          }
        : undefined,
    };

    const id = "schema-org-ld";
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }, []);

  return null;
}

function parseTime(s: string) {
  // Convierte "8:00 AM" / "7:00 PM" a "08:00" / "19:00"
  if (!s) return "";
  const m = s.match(/(\d{1,2}):?(\d{0,2})\s*(AM|PM)?/i);
  if (!m) return s;
  let h = parseInt(m[1], 10);
  const min = m[2] ? m[2].padStart(2, "0") : "00";
  const ampm = (m[3] || "").toUpperCase();
  if (ampm === "PM" && h < 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${min}`;
}
