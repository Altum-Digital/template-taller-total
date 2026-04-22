import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

const links = [
  { to: "/servicios", label: "Servicios" },
  { to: "/flotillas", label: "Flotillas" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg tracking-tightest text-brand">
          {siteConfig.business.logoUrl ? (
            <img src={siteConfig.business.logoUrl} alt={siteConfig.business.name} className="h-9" />
          ) : (
            <>
              <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white text-sm">
                {siteConfig.business.name.charAt(0)}
              </span>
              {siteConfig.business.name}
            </>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-accent" : "text-ink hover:text-accent"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-accent hover:brightness-110 text-white text-sm font-semibold rounded-lg transition inline-flex items-center gap-2"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${isActive ? "text-accent" : "text-ink"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
