"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { khanNaseriProductHighlights } from "@/lib/khan-naseri-trading";
import { Sparkles, Store, Globe } from "lucide-react";

const heroSlides = [
  { src: "/products/kera-look-range.jpg", alt: "Kera Look — full Hair Repair System product range" },
  { src: "/products/kera-look-shampoo.jpg", alt: "Kera Look Shampoo — professional care at home" },
  { src: "/products/kera-look-mask.jpg", alt: "Kera Look Hair Mask — deep repair treatment" },
  { src: "/products/kera-look-serum.jpg", alt: "Kera Look Nano Retinol Face Serum" },
  { src: "/products/efolia-guardian.jpg", alt: "Efolia Guardian Intense — Eau de Parfum" },
  { src: "/products/bakhoor-hayati.jpg", alt: "Bakhoor Hayati — premium incense" },
  { src: "/products/perfume-collection.jpg", alt: "Premium perfume collection — Oud and fragrances" },
  { src: "/products/al-faris-perfume.jpg", alt: "Al Faris — luxury perfume by Khan Naseri Trading" },
];

const supplierLines = [
  {
    name: "Beauty Vision",
    detail: "Supplier of Kera Look cosmetic products.",
  },
  {
    name: "My Perfume",
    detail: "Fragrance and perfume products.",
  },
  {
    name: "Efolia",
    detail: "Beauty and cosmetic products.",
  },
];

const channels = [
  {
    name: "Amazon",
    detail: "Marketplace listings for wholesale and retail sales.",
  },
  {
    name: "Noon",
    detail: "Regional e-commerce presence in line with our digital growth strategy.",
  },
  {
    name: "Shopify",
    detail: "Brand-controlled storefront and direct digital trading.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function TradingProductsPage() {
  const [slideIdx, setSlideIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setSlideIdx((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        {/* ─── Hero with sliding product images ─── */}
        <section className="bg-white pb-0 pt-0 text-white">
          <div className="relative min-h-[min(70vh,640px)] w-full min-w-0 overflow-hidden rounded-b-[2rem] md:min-h-[min(65vh,680px)] md:rounded-b-[3rem]">
            {/* Sliding background images */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={slideIdx}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[slideIdx].src}
                  alt={heroSlides[slideIdx].alt}
                  fill
                  priority={slideIdx === 0}
                  className="object-contain object-center"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay gradients — lighter to show product images */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/55 to-secondary/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/15 to-transparent md:hidden" />

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="container-shell w-full pb-16 pt-32 md:pb-20 md:pt-28">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
                >
                  <motion.p
                    variants={fadeInUp}
                    className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9873B]"
                  >
                    Products &amp; channels
                  </motion.p>
                  <motion.h1
                    variants={fadeInUp}
                    className="mt-4 text-[2rem] font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.75rem]"
                  >
                    Sourcing, exports, trade and partnership
                  </motion.h1>
                  <motion.p
                    variants={fadeInUp}
                    className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-xl"
                  >
                    Consumer goods from named UAE supplier lines, sold through major marketplaces and supported by regional distribution partners.
                  </motion.p>
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Colorful divider ── */}
        <div className="container-shell py-4">
          <div className="section-divider-gradient" />
        </div>

        <Section
          id="supplier-lines"
          className="bg-white"
          eyebrow="Supplier lines"
          title="Products we have sourced and traded"
          description="The corporate profile lists suppliers we have purchased from and traded with. Export to Afghanistan is supported through Khan Naseri Trading Company."
        >
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {supplierLines.map((line) => (
              <article key={line.name} className="eagle-card p-6 md:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#C9873B]" />
                  <h3 className="text-lg font-bold tracking-tight">{line.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{line.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-neutral-300/90 bg-neutral-50/80 p-5 text-sm leading-relaxed text-muted-foreground md:p-6 md:text-base">
            These products are exported to Afghanistan through Khan Naseri Trading Company, which manages wholesale
            distribution across all 34 provinces.
          </p>
        </Section>

        <Section
          id="afghanistan-partner-snapshot"
          className="bg-white"
          eyebrow="Regional distribution"
          title="Afghanistan — partner brands in market"
          description="Reference visuals from Khan Naseri Trading Company's public LinkedIn activity: KERA LOOK hair care, Efolia fragrances, Shavele skincare, and My Perfume / Arabiyat lines — wholesale and retail, with nationwide reach."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {khanNaseriProductHighlights.map((item) => (
              <figure
                key={item.src}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(7,13,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,13,26,0.1)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="px-3 py-2.5 text-xs font-medium text-muted-foreground">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Full gallery and partner context:{" "}
            <Link href="/trading/partners#khan-naseri-showcase" className="font-semibold text-[#C9873B] underline-offset-2 hover:underline">
              Khan Naseri Trading Company showcase
            </Link>
          </p>
        </Section>

        <Section
          id="shavele"
          className="bg-neutral-50/80"
          eyebrow="Own brand"
          title="Shavele SkinCare"
          description="Private brand development is part of our strategy: we develop and promote registered brands alongside marketplace and wholesale routes."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/trading/3.jpg" alt="Shavele SkinCare brand" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/trading/4.jpg" alt="Shavele serum bottle" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/trading/5.jpg" alt="Shavele moisturizer cream" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src="/trading/2.jpg" alt="Shavele branding and packaging" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/trading/IMG_0354.jpg"
                alt="Shavele Face Moisturizer product"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-neutral-300/90 bg-white p-5 text-sm leading-relaxed text-muted-foreground md:p-6 md:text-base">
            Shavele is Eaglewise&apos;s skincare line, positioned for the UAE climate and available through our
            e-commerce channels and wholesale distribution network.
          </p>
        </Section>

        <Section
          id="ecommerce-channels"
          className="bg-neutral-50/80"
          eyebrow="E-commerce channels"
          title="Amazon, Noon, and Shopify"
          description="Our e-commerce strategy focuses on expanding online availability, developing private brands, building digital presence, and improving customer satisfaction."
        >
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {channels.map((ch) => (
              <article key={ch.name} className="eagle-card p-6 md:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <Store className="h-5 w-5 text-[#C9873B]" />
                  <h3 className="text-lg font-bold tracking-tight">{ch.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{ch.detail}</p>
              </article>
            ))}
          </div>
          <div className="eagle-card mt-8 flex items-start gap-4 p-6 md:p-7">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#C9873B]" />
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Strategic expansion includes international trade partnerships, stronger marketplace presence, private label
              brands, wider regional distribution, and enhanced consultancy for cross-border businesses—aligned with
              our stated growth plan.
            </p>
          </div>
        </Section>

        <CtaStrip
          id="products-cta"
          title="Discuss products or channels"
          description="Share your categories, volumes, and regions. We will confirm fit against our supplier lines, export routes, and marketplace operations."
          primaryLabel="Contact trading team"
          primaryHref="/trading/contact"
          secondaryLabel="Markets overview"
          secondaryHref="/trading/markets"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Partners collaborating"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
