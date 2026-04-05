"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SiteShell } from "@/components/site-shell";
import {
  ArrowRight,
  Award,
  Building2,
  Handshake,
  Play,
  Star,
  TrendingUp,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const models = [
  {
    title: "Wholesale & sourcing",
    description:
      "Import, export, and distribution of consumer goods from reputable UAE suppliers—Beauty Vision (Kera Look), My Perfume, and Efolia—with export routes into regional markets.",
    href: "/trading/products",
    cta: "Learn more",
    image: "/trading/1.jpg",
    imageAlt: "Business professionals collaborating on partnership",
    imageRounded:
      "rounded-2xl rounded-bl-[3rem] md:rounded-3xl md:rounded-bl-[4rem]",
    reverse: false,
  },
  {
    title: "Distribution network",
    description:
      "Khan Naseri Trading Company manages wholesale distribution across all 34 provinces of Afghanistan—KERA LOOK, Efolia, My Perfume, Forvil, Herbal Bio Amla, and more. See the partner showcase for photos.",
    href: "/trading/partners#khan-naseri-showcase",
    cta: "Partner showcase",
    image: "/khan-naseri-trading-co/1774289130721.jpeg",
    imageAlt: "Khan Naseri Trading — KERA LOOK hair care distribution creative",
    imageRounded:
      "rounded-2xl rounded-br-[3rem] md:rounded-3xl md:rounded-br-[4rem]",
    reverse: true,
  },
  {
    title: "E-commerce & marketplaces",
    description:
      "Amazon, Noon, and Shopify—wholesale and retail listings, private brand development, and a stronger digital presence focused on availability and customer satisfaction.",
    href: "/trading/markets",
    cta: "Explore channels",
    image: "/trading/4.jpg",
    imageAlt: "Digital commerce and online retail",
    imageRounded:
      "rounded-2xl rounded-tl-[3rem] md:rounded-3xl md:rounded-tl-[4rem]",
    reverse: false,
  },
];

const partnerHighlights = [
  {
    title: "Established",
    description:
      "March 2025 — UAE-registered operations with clear governance and supplier relationships.",
    image: "/trading/partner-highlight-established.jpg",
    imageAlt: "Urban skyline representing an established trading presence",
  },
  {
    title: "Reach",
    description:
      "34 provinces via Khan Naseri Trading Company — coordinated wholesale distribution across Afghanistan.",
    image: "/trading/partner-highlight-reach.jpg",
    imageAlt:
      "Air travel view suggesting regional and cross-border distribution reach",
  },
  {
    title: "Channels",
    description:
      "Amazon · Noon · Shopify — marketplace listings and e-commerce built for scale.",
    image: "/trading/partner-highlight-channels.jpg",
    imageAlt:
      "Laptop with business analytics representing digital marketplace channels",
  },
];

const partnerExpectItems = [
  {
    icon: Handshake,
    title: "Transparent coordination",
    description:
      "Clear alignment with suppliers and distributors—expectations stay visible from sourcing through delivery.",
  },
  {
    icon: Building2,
    title: "UAE-registered foundation",
    description:
      "Operations established March 2025 under UAE registration, with governance suited to B2B trade.",
  },
  {
    icon: TrendingUp,
    title: "Growth across channels",
    description:
      "Strategic expansion through trade partnerships and e-commerce—marketplaces and wholesale in one network.",
  },
];

const landingTestimonials = [
  {
    author: "Consumer Goods Partner",
    date: "Partner feedback",
    quote:
      "From product sourcing to market distribution guidance, Eaglewise provided reliable support at each stage.",
  },
  {
    author: "Regional Trading Client",
    date: "Client feedback",
    quote:
      "Clear communication and practical execution—we improved visibility across our trading operations.",
  },
  {
    author: "Channel Partner",
    date: "Marketplace feedback",
    quote:
      "Helpful as we scaled marketplace listings and aligned logistics with their partner network.",
  },
];

export default function TradingHomePage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        {/* Hero — Capital partners style: full-bleed image, overlay, rounded bottom */}
        <section className="relative w-full pb-0 pt-0">
          <div className="relative h-[min(85vh,640px)] w-full min-w-0 overflow-hidden rounded-b-[2rem] md:h-[min(90vh,720px)] md:rounded-b-[3rem]">
            <Image
              src="/trading/hero-handshake-style.jpg"
              alt="Team collaborating at a workstation in a modern open-plan office"
              fill
              className="object-cover object-[center_30%] sm:object-[center_25%]"
              priority
              sizes="100vw"
            />
            {/* Same left-to-right scrim as Professional tab for readable hero copy */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/85 to-secondary/30" />
            {/* Extra bottom weight on small screens where copy is centered lower */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/35 to-transparent md:hidden" />
            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="container-shell w-full pb-16 pt-28 md:pb-20 md:pt-24">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="max-w-xl text-center md:text-left"
                >
                  <motion.p
                    variants={fadeInUp}
                    className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9873B]"
                  >
                    Trading &amp; Partnership
                  </motion.p>
                  <motion.h1
                    variants={fadeInUp}
                    className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.75rem]"
                  >
                    Trading and partnership operations from the UAE
                  </motion.h1>
                  <motion.p
                    variants={fadeInUp}
                    className="mt-5 text-base leading-relaxed text-white/85 md:text-lg"
                  >
                    We connect supplier sourcing, marketplace operations, and regional
                    distribution across the Middle East and Central Asia.
                  </motion.p>
                  <motion.div
                    variants={fadeInUp}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
                  >
                    <Link
                      href="/trading/contact"
                      className="btn-3d-primary inline-flex items-center justify-center px-8 py-3.5 text-sm text-white"
                    >
                      Partner with us
                    </Link>
                    <Link
                      href="/trading/markets"
                      className="btn-3d-white inline-flex items-center justify-center border border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#070d1a]"
                    >
                      View markets
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="pointer-events-none mt-8 flex flex-col items-center gap-2 px-4 text-center md:absolute md:bottom-8 md:left-0 md:right-0 md:mt-0"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9873B]">
              Eaglewise Business Consultancy LLC-FZ
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 md:text-white/80">
              <Award className="h-4 w-4 text-[#C9873B]" />
              <span>Authorized and registered in the UAE</span>
            </div>
          </motion.div>
        </section>

        {/* Centered intro — partnerships page pattern */}
        <section className="bg-white px-4 py-16 text-center md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              Our trading &amp; partnership models
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Our model combines general trading, e-commerce channels, and partner-led
              distribution to move products from UAE supply to regional markets.
            </p>
          </motion.div>
        </section>

        {/* Alternating split sections */}
        {models.map((block, index) => (
          <section
            key={block.title}
            className={`${index % 2 === 1 ? "bg-neutral-50/80" : "bg-white"}`}
          >
            <div className="container-shell py-14 md:py-20">
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  className={block.reverse ? "md:order-2" : "md:order-1"}
                >
                  <div className="mb-5 h-px w-10 bg-foreground" aria-hidden />
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                    {block.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {block.description}
                  </p>
                  <Link
                    href={block.href}
                    className="btn-3d-primary mt-8 inline-flex items-center justify-center px-8 py-3 text-sm text-white"
                  >
                    {block.cta}
                  </Link>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  className={`relative aspect-[4/3] w-full overflow-hidden shadow-[0_24px_60px_rgba(7,13,26,0.08)] ${block.imageRounded} ${
                    block.reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Partner highlights — above “What partners can expect” */}
        <section className="bg-white px-4 py-14 md:py-20">
          <div className="container-shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                Why partners work with Eaglewise
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                A concise snapshot of how we are set up—registration, regional
                distribution, and the channels we operate on—so you can align
                quickly with our trading network.
              </p>
            </motion.div>
            <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10">
              {partnerHighlights.map((item) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  className="flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f0f0f0] md:rounded-3xl">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Video Showcase — Kera Look ─── */}
        <section className="relative overflow-hidden bg-neutral-50/60 py-16 md:py-24">
          {/* Floating orbs behind video section */}
          <div className="orb orb-purple w-[400px] h-[400px] -top-32 -right-20 z-0" />
          <div className="orb orb-teal w-[300px] h-[300px] bottom-0 -left-20 z-0" style={{ animationDelay: "5s" }} />

          <div className="container-shell relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-teal">
                Product showcase
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                Kera Look — See our products
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Watch product showcases from our distribution partners — Kera Look
                hair care, Efolia fragrances, and more from the Khan Naseri Trading
                network.
              </p>
            </motion.div>

            {/* Featured video */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl gradient-border shadow-[0_20px_60px_rgba(7,13,26,0.1)] md:rounded-3xl"
            >
              <video
                controls
                preload="metadata"
                poster="/videos/keralook-poster.png"
                className="aspect-video w-full bg-black"
              >
                <source src="/videos/keralook.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pointer-events-none md:p-6">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-white/80" />
                  <p className="text-sm font-semibold text-white">
                    Kera Look — Product Showcase by Khan Naseri Trading
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What partners can expect — icon cards, gradient band */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/90 to-neutral-50 py-16 md:py-24">
          <div
            className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[#C9873B]/[0.07] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9873B]/30 to-transparent"
            aria-hidden
          />
          <div className="container-shell relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9873B]">
                Partnership standards
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What partners can expect
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Straightforward collaboration built on the same values as our
                company profile: integrity, quality, and long-term
                relationships.
              </p>
            </motion.div>
            <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
              {partnerExpectItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeInUp}
                    className="group relative rounded-2xl bg-white/90 p-6 shadow-[0_12px_40px_rgba(7,13,26,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(7,13,26,0.1)] md:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C9873B]/18 to-[#C9873B]/5 text-[#C9873B] ring-1 ring-[#C9873B]/15 transition group-hover:from-[#C9873B]/25 group-hover:to-[#C9873B]/8">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.65}
                        aria-hidden
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials — static grid, not marquee (distinct from professional) */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9873B]">
                Partner feedback
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">
                Hear from trading partners
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {landingTestimonials.map((item) => (
                <article
                  key={item.author}
                  className="flex flex-col rounded-2xl bg-neutral-50/50 p-6 shadow-[0_8px_30px_rgba(7,13,26,0.06)]"
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#C9873B] text-[#C9873B]"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-semibold">{item.author}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.quote}
                  </p>
                  <p className="mt-6 text-xs font-medium text-neutral-400">
                    {item.date}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/trading/partners"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:text-[#C9873B] hover:underline"
              >
                Full partnership details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Company mark — minimal */}
        <section className="bg-white py-10">
          <div className="container-shell flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9873B]">
                Eaglewise
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Registered UAE business · General trading &amp; e-commerce
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ebc-mark.png"
              alt="EBC monogram"
              className="h-12 w-auto object-contain opacity-90 md:h-14"
            />
          </div>
        </section>

        {/* Light CTA — Capital-style closing block */}
        <section className="bg-neutral-50 px-4 pb-16 pt-4 md:px-6">
          <div className="container-shell">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(7,13,26,0.08)] md:grid md:grid-cols-2 md:rounded-[2.5rem]">
              <div className="relative min-h-[240px] md:min-h-[360px]">
                <Image
                  src="/trading/cta-partners.jpg"
                  alt="Partners planning together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
                <div className="mb-4 h-px w-10 bg-foreground" />
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Ready to discuss sourcing or distribution?
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Share your product lines, volumes, and target markets. We will
                  respond with a clear next step for partnership or supply
                  discussions.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/trading/contact"
                    className="btn-3d-primary inline-flex px-8 py-3 text-sm text-white"
                  >
                    Contact trading team
                  </Link>
                  <Link
                    href="/trading/products"
                    className="btn-3d-secondary inline-flex border border-neutral-200 px-8 py-3 text-sm text-foreground hover:text-[#C9873B]"
                  >
                    Product catalogue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
