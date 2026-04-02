"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  {
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support has been valuable for planning.",
    author: "UAE Consultancy Client",
    date: "2026-03-01",
  },
  {
    quote:
      "Communication has been clear and professional from day one. We saw stronger execution across our regional operations.",
    author: "Business Advisory Client",
    date: "2026-02-19",
  },
  {
    quote:
      "Eaglewise helped us streamline reporting and improve financial visibility within a short timeframe.",
    author: "Finance Leadership Team",
    date: "2026-03-10",
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
        title="Client voices"
        subtitle="What partners and leadership teams say about working with Eaglewise on finance and advisory."
      />

      <section id="client-feedback" className="animated-bg py-14 md:py-20">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto mb-10 max-w-3xl text-center"
          >
            <motion.p variants={fadeInUp} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">
              Client feedback
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Advisory clients on working with Eaglewise
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Highlights from companies we have supported on finance and business advisory.
            </motion.p>
          </motion.div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollTestimonials("left")}
              className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:bg-[#EB8B2E] hover:text-white md:inline-flex"
              aria-label="Scroll testimonials left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTestimonials("right")}
              className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:bg-[#EB8B2E] hover:text-white md:inline-flex"
              aria-label="Scroll testimonials right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item) => (
                <motion.article
                  key={item.author}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="eagle-card group min-w-[310px] snap-start rounded-2xl p-6 md:min-w-[380px] md:p-8"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={`${item.author}-star-${idx}`}
                          className="h-4 w-4 fill-[#EB8B2E] text-[#EB8B2E]"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                  </div>
                  <Quote className="mb-3 h-6 w-6 text-[#EB8B2E]/30" />
                  <p className="text-base leading-7 text-muted-foreground">{item.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#EB8B2E]/20 to-[#EB8B2E]/5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.author}</p>
                      <p className="text-xs text-muted-foreground">Trustpilot</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust metrics with image strip */}
      <section id="trusted-metrics" className="scroll-mt-36 bg-white py-14 md:py-20">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-10"
          >
            <motion.p variants={fadeInUp} className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">
              At a glance
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight md:text-4xl">
              Trusted by businesses in the UAE and beyond
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: "Skylink & Shanzer", desc: "UAE companies supported with consultancy services", image: "/uae-presence-regional.jpg" },
              { stat: "10+ Lines", desc: "Professional advisory and compliance capabilities", image: "/home-office-team.jpg" },
              { stat: "2025", desc: "UAE establishment with a consultancy-first model", image: "/home-office-dubai.jpg" },
            ].map((item) => (
              <motion.article
                key={item.stat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="group eagle-card overflow-hidden"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.desc}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-gradient text-3xl font-bold">{item.stat}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        id="testimonials-cta"
        title="Want your success story featured here?"
        description="Start a consultancy engagement and we can build measurable outcomes together."
        primaryLabel="Contact Eaglewise"
        primaryHref="/professional/contact"
        secondaryLabel="View Services"
        secondaryHref="/professional/services"
        imageSrc="/professional-team.jpg"
        imageAlt="Professional team"
        fullWidth
        bottomRoundedOnly
      />
    </SiteShell>
  );
}
