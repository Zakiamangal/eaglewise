"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { Star } from "lucide-react";

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

const stripeClasses = ["card-stripe-teal-purple", "card-stripe-amber-rose", "card-stripe-emerald-teal"];

// Triple the cards for seamless infinite scroll
const marqueeCards = [...testimonials, ...testimonials, ...testimonials];

export default function ProfessionalTestimonialsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Auto-scroll marquee
  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused) return;

    let raf: number;
    const step = () => {
      track.scrollLeft += 0.2;
      // Reset to middle when reaching end of first set
      const oneThird = track.scrollWidth / 3;
      if (track.scrollLeft >= oneThird * 2) {
        track.scrollLeft -= oneThird;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // Start scrolled to the middle set
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = track.scrollWidth / 3;
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    setPaused(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    trackRef.current.scrollLeft = scrollStartX.current - dx;
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
    setPaused(false);
  }, []);

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

      <section id="client-feedback" className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50/90 py-14 md:py-20">
        <div className="orb orb-teal w-[350px] h-[350px] -top-24 -right-20 z-0" />
        <div className="orb orb-purple w-[280px] h-[280px] bottom-0 -left-16 z-0" style={{ animationDelay: "4s" }} />

        <div className="container-shell relative z-10">
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

          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-hidden select-none"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { if (!isDragging) setPaused(false); }}
          >
            {marqueeCards.map((item, i) => (
              <article
                key={`${item.author}-${i}`}
                className={`glass-card-light card-3d-hover ${stripeClasses[i % 3]} shrink-0 w-[320px] p-6 md:w-[380px] md:p-7`}
                style={{ borderRadius: '1.5rem', overflow: 'hidden' }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={`${item.author}-${i}-star-${idx}`}
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
          <p className="mt-6 text-center text-xs text-muted-foreground">Drag to browse or hover to pause</p>
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
          <article className="glass-card-light card-3d-hover card-stripe-teal-purple p-6 md:p-7" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
            <h3 className="text-3xl font-bold text-[#C9873B]">Skylink &amp; Shanzer</h3>
            <p className="mt-2 text-sm text-muted-foreground">Companies referenced in our UAE consultancy portfolio</p>
          </article>
          <article className="glass-card-light card-3d-hover card-stripe-amber-rose p-6 md:p-7" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
            <h3 className="text-3xl font-bold text-[#C9873B]">10+ Lines</h3>
            <p className="mt-2 text-sm text-muted-foreground">Professional service lines from accounting to business development</p>
          </article>
          <article className="glass-card-light card-3d-hover card-stripe-emerald-teal p-6 md:p-7" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
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
