import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { siteConfig } from "./site.config";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceLandingPage } from "./pages/ServiceLandingPage";
import { FleetsPage } from "./pages/FleetsPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  useEffect(() => {
    const { theme, business } = siteConfig;
    const root = document.documentElement;
    root.style.setProperty("--brand", theme.brand);
    root.style.setProperty("--brand-dark", theme.brandDark);
    root.style.setProperty("--brand-light", theme.brandLight);
    root.style.setProperty("--accent", theme.accent);
    document.title = `${business.name} — ${business.tagline}`;

    setMeta("description", business.shortDescription);
    setMeta("og:title", `${business.name} — ${business.tagline}`, true);
    setMeta("og:description", business.shortDescription, true);
    setMeta("og:type", "website", true);
    setMeta("theme-color", theme.brand);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServiceLandingPage />} />
          <Route path="/flotillas" element={<FleetsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
