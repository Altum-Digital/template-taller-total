import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

export function Footer({
  onOpenPrivacy,
  onOpenTerms,
}: {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}) {
  const { business, contact, social } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-400 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {year} {business.name}. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Icon name="facebook" className="w-5 h-5" />
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Icon name="instagram" className="w-5 h-5" />
            </a>
          )}
          {social.tiktok && (
            <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Icon name="tiktok" className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-xs">
          Sitio web por <a href="https://altumdigital.mx" className="text-slate-300 hover:text-white transition-colors">Altum Digital</a>
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>
          {contact.address} · {contact.whatsappDisplay}
        </p>
        <div className="flex items-center gap-4">
          <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">
            Aviso de privacidad
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={onOpenTerms} className="hover:text-white transition-colors">
            Términos y condiciones
          </button>
        </div>
      </div>
    </footer>
  );
}
