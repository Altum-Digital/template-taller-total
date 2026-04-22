import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import { Icon } from "./Icon";

type BotMessage = {
  from: "bot" | "user";
  text: string;
};

/**
 * Bot conversacional: simula conversación local, al elegir opción abre
 * WhatsApp real con mensaje pre-cargado. Cero dependencias externas.
 */
export function WhatsAppBot() {
  const { whatsappBot, contact, business, hours } = siteConfig;
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<BotMessage[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLButtonElement>(null);

  // Primer mensaje al abrir
  useEffect(() => {
    if (!open || messages.length > 0) return;
    setTyping(true);
    const t = setTimeout(() => {
      setMessages([{ from: "bot", text: whatsappBot.welcomeMessage }]);
      setTyping(false);
    }, 600);
    return () => clearTimeout(t);
  }, [open, messages.length, whatsappBot.welcomeMessage]);

  // Auto-scroll al final
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  // Reveal la burbuja después de 2s
  useEffect(() => {
    const t = setTimeout(() => bubbleRef.current?.classList.add("animate-pulse-soft"), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!whatsappBot.enabled) return null;

  function handleReply(label: string, message: string) {
    setMessages((prev) => [...prev, { from: "user", text: label }]);
    setTyping(true);
    setTimeout(() => {
      const reply = `¡Perfecto! Te llevamos a WhatsApp con tu mensaje listo para enviar a ${business.name}. 🛠️`;
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
      setTimeout(() => {
        window.open(
          `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`,
          "_blank",
        );
      }, 500);
    }, 700);
  }

  return (
    <>
      {/* Panel */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-[#128C7E] text-white px-4 py-3 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white text-[#128C7E] flex items-center justify-center font-bold">
                <Icon name="whatsapp" className="w-6 h-6" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#128C7E]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{business.name}</p>
              <p className="text-xs opacity-80">En línea ahora</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="text-white/80 hover:text-white p-1"
            >
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>

          {/* Chat */}
          <div
            ref={listRef}
            className="bg-[#ECE5DD] h-80 overflow-y-auto p-4 space-y-2"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><path d=%22M30 10 L50 30 L30 50 L10 30 Z%22 fill=%22none%22 stroke=%22%23d9cfc5%22 stroke-width=%220.3%22/></svg>')",
            }}
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.from === "user"
                      ? "bg-[#DCF8C6] text-ink rounded-br-sm"
                      : "bg-white text-ink rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-2xl rounded-bl-sm shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="bg-white p-3 border-t border-slate-100">
            <p className="text-[10px] uppercase tracking-wider text-ink-muted mb-2 font-semibold">
              Selecciona una opción
            </p>
            <div className="flex flex-wrap gap-1.5">
              {whatsappBot.quickReplies.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleReply(q.label, q.message)}
                  className="px-3 py-1.5 bg-[#128C7E]/10 hover:bg-[#128C7E]/20 text-[#128C7E] text-xs font-semibold rounded-full transition-colors"
                >
                  {q.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-ink-muted mt-3 text-center">
              {hours[0]?.label}: {hours[0]?.hours}
            </p>
          </div>
        </div>
      </div>

      {/* Burbuja */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="relative">
          {/* Pulsing ring — afuera del botón, no interfiere con el ícono */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          )}

          <button
            ref={bubbleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar chat" : "Abrir chat de WhatsApp"}
            className="relative group w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#2EE670] hover:to-[#149B8B] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <span className="transition-transform duration-300 group-hover:rotate-[8deg]">
              <Icon name={open ? "x" : "whatsapp"} className="w-8 h-8" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
