import { useEffect } from "react";
import { siteConfig } from "@/site.config";

type Tab = "privacy" | "terms";

export function LegalModal({
  open,
  tab,
  onClose,
  onChangeTab,
}: {
  open: boolean;
  tab: Tab;
  onClose: () => void;
  onChangeTab: (t: Tab) => void;
}) {
  const { business, legal, contact } = siteConfig;

  // Cerrar con ESC + bloquear scroll del body
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-1">
            <button
              onClick={() => onChangeTab("privacy")}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                tab === "privacy" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"
              }`}
            >
              Aviso de privacidad
            </button>
            <button
              onClick={() => onChangeTab("terms")}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                tab === "terms" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"
              }`}
            >
              Términos y condiciones
            </button>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm text-ink leading-relaxed space-y-4">
          {tab === "privacy" ? (
            <>
              <h2 className="font-display font-bold text-xl text-ink">Aviso de privacidad</h2>
              <p className="text-xs text-ink-muted">Última actualización: {new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}</p>

              <p>
                <strong>{legal.companyLegalName}</strong>{legal.rfc ? ` (RFC ${legal.rfc})` : ""},
                con domicilio en {contact.address}, es el responsable del tratamiento de sus datos personales
                conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
              </p>

              <h3 className="font-display font-semibold text-base mt-4">Datos que recabamos</h3>
              <p>
                Nombre, teléfono, correo electrónico y datos de su vehículo (marca, modelo, placas) con la única
                finalidad de brindar los servicios solicitados, cotizar reparaciones y contactarle sobre el estatus
                del servicio.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">Finalidades del tratamiento</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prestación del servicio mecánico y emisión de cotizaciones.</li>
                <li>Contacto vía WhatsApp, teléfono o correo electrónico sobre el estatus del servicio.</li>
                <li>Emisión de facturas y cumplimiento de obligaciones fiscales.</li>
                <li>Envío ocasional de promociones (puede oponerse en cualquier momento).</li>
              </ul>

              <h3 className="font-display font-semibold text-base mt-4">Derechos ARCO</h3>
              <p>
                Usted tiene derecho a <strong>acceder, rectificar, cancelar u oponerse</strong> al tratamiento
                de sus datos personales, así como a revocar el consentimiento otorgado. Para ejercer estos derechos,
                envíe su solicitud a{" "}
                <a href={`mailto:${legal.privacyContactEmail}`} className="text-accent hover:underline font-medium">
                  {legal.privacyContactEmail}
                </a>
                {" "}indicando su nombre completo, documento que acredite su identidad y la descripción clara del derecho que desea ejercer.
                Le responderemos en un plazo máximo de 20 días hábiles.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">Transferencias</h3>
              <p>
                Sus datos no serán compartidos con terceros salvo obligación legal o con proveedores de refacciones
                estrictamente para completar el servicio contratado.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">Cambios al aviso</h3>
              <p>
                Cualquier modificación a este aviso será publicada en esta misma página. Recomendamos revisarlo periódicamente.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">Cookies</h3>
              <p>
                Este sitio utiliza cookies esenciales para su funcionamiento y, si usted lo acepta, cookies analíticas para
                entender cómo se usa el sitio. Puede gestionar su preferencia desde el banner inferior.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-display font-bold text-xl text-ink">Términos y condiciones</h2>
              <p className="text-xs text-ink-muted">Última actualización: {new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}</p>

              <h3 className="font-display font-semibold text-base mt-4">1. Aceptación</h3>
              <p>
                Al contratar nuestros servicios, usted acepta los presentes términos y condiciones. Le recomendamos leerlos
                detenidamente antes de autorizar cualquier trabajo.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">2. Cotización y autorización</h3>
              <p>
                Toda reparación es cotizada por escrito antes de iniciar. Iniciamos trabajos solo con su autorización expresa
                (por WhatsApp, correo o firma). Cualquier trabajo adicional detectado durante la reparación será consultado antes de ejecutarse.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">3. Garantía</h3>
              <p>
                Otorgamos {business.warrantyDays ?? 90} días de garantía por escrito en mano de obra y refacciones instaladas por nosotros,
                siempre que la falla corresponda al servicio realizado y no se deba a mal uso, accidente o intervención de terceros.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">4. Pagos</h3>
              <p>
                El pago se realiza al momento de la entrega del vehículo. Aceptamos efectivo, transferencia y tarjeta. Requerimos
                anticipo en trabajos que involucren compra de refacciones específicas.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">5. Entrega y resguardo</h3>
              <p>
                El vehículo debe recogerse en el plazo acordado. Vehículos no recogidos después de 30 días generan una cuota de
                resguardo diaria. Después de 90 días podremos proceder conforme a derecho para liberar el espacio.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">6. Limitación de responsabilidad</h3>
              <p>
                No nos responsabilizamos por objetos personales dejados dentro del vehículo. Le recomendamos retirarlos antes
                de entregarlo. Cualquier daño accidental imputable al taller será reparado sin costo.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">7. Legislación aplicable</h3>
              <p>
                Estos términos se rigen por la legislación mexicana. Cualquier controversia se resolverá ante los tribunales
                competentes de la ciudad donde se presta el servicio.
              </p>

              <h3 className="font-display font-semibold text-base mt-4">8. Contacto</h3>
              <p>
                Para cualquier duda sobre estos términos escríbanos a{" "}
                <a href={`mailto:${contact.email}`} className="text-accent hover:underline font-medium">{contact.email}</a>{" "}
                o al WhatsApp {contact.whatsappDisplay}.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 px-6 py-3 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand hover:bg-brand-light text-white text-sm font-semibold rounded-lg transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
