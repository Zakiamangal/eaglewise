"use client";

import { useRef } from "react";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support helped us align reporting with decision-making.",
    author: "UAE Consultancy Client",
    context: "Finance and reporting advisory",
  },
  {
    quote:
      "Communication was clear from day one, and the engagement remained focused on practical execution across teams.",
    author: "Business Advisory Client",
    context: "Operational advisory",
  },
  {
    quote:
      "Eaglewise helped us improve financial visibility and structure our internal processes with clear checkpoints.",
    author: "Finance Leadership Team",
    context: "Accounting and controls support",
  },
];

export default function ProfessionalTestimonialsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = 360;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Executive advisory discussion"
        eyebrow="Testimonials"
        title="Client feedback highlights"
        subtitle="Selected feedback from advisory engagements across finance, compliance, and operations."
      />

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <section id="client-feedback" className="bg-gradient-to-b from-white to-neutral-50/90 py-14 md:py-20">
        <div className="container-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9873B] md:text-xs">
              Client feedback
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Advisory clients on working with Eaglewise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Feedback from companies we have supported through professional consultancy services.
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollTestimonials("left")}
              className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:bg-[#C9873B] hover:text-white md:inline-flex"
              aria-label="Scroll testimonials left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTestimonials("right")}
              className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:bg-[#C9873B] hover:text-white md:inline-flex"
              aria-label="Scroll testimonials right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="glass-card-light card-3d-hover min-w-[310px] snap-start rounded-2xl p-6 md:min-w-[360px] md:p-7"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={`${item.author}-star-${idx}`}
                          className="h-4 w-4 fill-[#C9873B] text-[#C9873B]"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.context}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{item.quote}</p>
                  <p className="mt-6 text-sm font-semibold text-foreground">Advisory engagement</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section
        id="trusted-metrics"
        className="bg-white"
        eyebrow="At a glance"
        title="Trusted by businesses in the UAE and beyond"
      >
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          <article className="glass-card-light card-3d-hover card-stripe-teal-purple p-6 md:p-7">
            <h3 className="text-3xl font-bold text-[#C9873B]">Skylink &amp; Shanzer</h3>
            <p className="mt-2 text-sm text-muted-foreground">Companies referenced in our UAE consultancy portfolio</p>
          </article>
          <article className="glass-card-light card-3d-hover card-stripe-amber-rose p-6 md:p-7">
            <h3 className="text-3xl font-bold text-[#C9873B]">10+ Lines</h3>
            <p className="mt-2 text-sm text-muted-foreground">Professional service lines from accounting to business development</p>
          </article>
          <article className="glass-card-light card-3d-hover card-stripe-emerald-teal p-6 md:p-7">
            <h3 className="text-3xl font-bold text-[#C9873B]">2025</h3>
            <p className="mt-2 text-sm text-muted-foreground">Year Eaglewise was established in the UAE</p>
          </article>
        </div>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <CtaStrip
        id="testimonials-cta"
        title="Discuss your consultancy requirements"
        description="Share your business objectives and we will propose a clear engagement path."
        primaryLabel="Contact Eaglewise"
        primaryHref="/professional/contact"
        secondaryLabel="View Services"
        secondaryHref="/professional/services"
      />
    </SiteShell>
  );
}
