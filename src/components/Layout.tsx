import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppBot } from "./WhatsAppBot";
import { CookieBanner } from "./CookieBanner";
import { LegalModal } from "./LegalModal";
import { SchemaOrg } from "./SchemaOrg";

export function Layout() {
  const [legal, setLegal] = useState<{ open: boolean; tab: "privacy" | "terms" }>({
    open: false,
    tab: "privacy",
  });
  const { pathname } = useLocation();

  // Scroll al top en cada cambio de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  const openPrivacy = () => setLegal({ open: true, tab: "privacy" });
  const openTerms = () => setLegal({ open: true, tab: "terms" });

  return (
    <>
      <SchemaOrg />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />
      <WhatsAppBot />
      <CookieBanner onOpenPrivacy={openPrivacy} />
      <LegalModal
        open={legal.open}
        tab={legal.tab}
        onClose={() => setLegal((s) => ({ ...s, open: false }))}
        onChangeTab={(tab) => setLegal({ open: true, tab })}
      />
    </>
  );
}
