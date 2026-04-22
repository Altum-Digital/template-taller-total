import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { Insurances } from "@/components/Insurances";
import { Testimonials } from "@/components/Testimonials";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <WhyUs />
      <Services preview />
      <Insurances />
      <section className="pt-14 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-4">
          <p className="text-ink-muted text-sm uppercase tracking-wider font-semibold">
            Respaldados por nuestros clientes
          </p>
          <GoogleReviewsBadge />
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
