"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import {
  Building2,
  Handshake,
  ShieldCheck,
  CalendarDays,
  Layers,
  Globe,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Award,
} from "lucide-react";

const divisions = [
  {
    title: "General Trading & Wholesale",
    desc: "Reliable sourcing and distribution across regional markets.",
    icon: Building2,
  },
  {
    title: "E-Commerce & Digital Trading",
    desc: "Scalable digital presence on major marketplaces like Amazon and Noon.",
    icon: Globe,
  },
  {
    title: "Professional Consultancy",
    desc: "Expert advisory for financial, tax, and strategic business growth.",
    icon: Handshake,
  },
];

const highlights = [
  {
    title: "Established Presence",
    desc: "UAE-based company established in March 2025.",
    icon: ShieldCheck,
  },
  {
    title: "Regional Network",
    desc: "Connecting UAE suppliers to Afghan markets seamlessly.",
    icon: TrendingUp,
  },
  {
    title: "Diversified Operations",
    desc: "Wholesale, digital commerce, and advisory services.",
    icon: BarChart3,
  },
];

// Reusable animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <SiteShell>
      <section className="pb-8 pt-0">
        <div className="relative h-[620px] overflow-hidden bg-secondary md:h-[680px]">
          {/* Hero Image */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-dubai.jpg"
              alt="Business hero background"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-start">
            <div className="container-shell pt-12 md:pt-16">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
              >
                <motion.p
                  variants={fadeInUp}
                  className="mb-4 inline-flex rounded-full border border-white/5 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#EB8B2E] backdrop-blur-md"
                >
                  Eaglewise Business Consultancy LLC-FZ
                </motion.p>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-[2.35rem] font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[4rem]"
                >
                  Award-winning business support, <br />
                  <span className="text-white/70">here in the UAE.</span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="mt-5 max-w-xl text-xl leading-relaxed text-white/80 md:mt-6 md:text-lg"
                >
                  Trade confidently with a partner focused on general trading, e-commerce,
                  and professional consultancy execution for regional expansion.
                </motion.p>
                
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:justify-start md:gap-4"
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#EB8B2E] px-6 text-base font-semibold text-white transition-all hover:bg-[#d97a22] md:h-14 md:px-8"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 text-base font-semibold !text-gray-300 backdrop-blur-md transition-all hover:bg-white/20 hover:!text-white md:h-14 md:px-8"
                  >
                    View Services
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-5 flex items-center gap-2 text-sm text-gray-200 md:hidden"
                >
                  <Award className="h-4 w-4 text-[#EB8B2E]" />
                  <span>Authorized and registered in the UAE</span>
                </motion.div>
                
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="pointer-events-none absolute inset-x-0 bottom-24 z-20 hidden w-full flex-col items-center justify-center gap-2 text-center text-sm font-medium text-white/70 md:flex md:bottom-28"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB8B2E]">
              Eaglewise Business Consultancy LLC-FZ
            </p>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-[#EB8B2E]" />
              <span className="!text-gray-200">Authorized and registered in the UAE</span>
            </div>
          </motion.div>
        </div>

        {/* Trust Metrics Strip */}
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative z-10 -mt-10 mx-auto max-w-5xl rounded-[2.5rem] border border-border/40 bg-surface px-6 py-8 shadow-none md:-mt-16 md:px-10 md:py-8"
          >
            <div className="grid grid-cols-1 gap-6 divide-y divide-border/40 md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
              <article className="flex flex-col items-center pt-4 first:pt-0 md:items-start md:px-8 md:py-0 md:first:pl-0">
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Established
                  </p>
                </div>
                <p className="mt-2.5 text-2xl font-bold text-foreground md:text-3xl tracking-tight">March 2025</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Core Divisions
                  </p>
                </div>
                <p className="mt-2.5 text-2xl font-bold text-foreground md:text-3xl tracking-tight">3 Business Units</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0 md:last:pr-0">
                <div className="flex items-center gap-2.5">
                  <Globe className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Regional Reach
                  </p>
                </div>
                <p className="mt-2.5 text-2xl font-bold text-foreground md:text-3xl tracking-tight">34 Provinces</p>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid items-center gap-6 rounded-[2rem] border border-border/60 bg-surface p-5 md:grid-cols-2 md:gap-8 md:p-8"
          >
            <div className="h-[250px] overflow-hidden rounded-[1.5rem] md:h-[310px]">
              <Image
                src="/uae-presence-regional.jpg"
                alt="Business professional presence in UAE setting"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-1 md:px-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EB8B2E]">
                UAE Presence
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                Built in the UAE for practical growth
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Established in March 2025, Eaglewise combines general trading, e-commerce,
                and consultancy into one execution-focused model for regional expansion.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-foreground transition hover:text-[#EB8B2E]"
              >
                Explore services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-14">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-12"
          >
            <motion.article
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[2rem] lg:col-span-7"
            >
              <Image
                src="/professional-team.jpg"
                alt="Professional business team discussion"
                width={1600}
                height={1000}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB8B2E]">
                  Professional Consultancy
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Introducing strategic growth support
                </h3>
              </div>
            </motion.article>

            <motion.article
              variants={fadeInUp}
              className="rounded-[2rem] border border-border/60 bg-surface p-6 lg:col-span-5 md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EB8B2E]/12 text-[#EB8B2E]">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Built for partnerships
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We help businesses connect supply chains, e-commerce channels, and
                consultancy strategy in one execution-focused model.
              </p>
              <p className="mt-6 text-sm font-medium text-foreground/70">
                Reach us at{" "}
                <span className="font-semibold text-foreground">partnership@eaglewise.ae</span>{" "}
                or contact our UAE office.
              </p>
            </motion.article>

            <motion.article
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[2rem] lg:col-span-5"
            >
              <Image
                src="/professional-conference.jpg"
                alt="Corporate boardroom planning session"
                width={1600}
                height={1000}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[330px]"
              />
            </motion.article>

            <motion.article
              variants={fadeInUp}
              className="rounded-[2rem] border border-border/60 bg-surface p-6 lg:col-span-7 md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EB8B2E]/12 text-[#EB8B2E]">
                <Handshake className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Local expertise, international outlook
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Our approach combines market knowledge, transparent operations, and
                disciplined execution to help partners grow with confidence.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <div className="relative overflow-hidden pb-10">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#EB8B2E]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#070d1a]/5 blur-[100px]" />

        <div className="relative z-10 pt-10">
          <Section
            eyebrow="Why Choose Eaglewise?"
            title="Built for long-term partnerships"
            description="Eaglewise bridges opportunities between international suppliers and regional markets, with a focus on quality, transparency, and reliable delivery."
          >
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article 
                    variants={fadeInUp}
                    key={item.title} 
                    className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-surface-alt transition-transform duration-500 group-hover:scale-150" />
                    
                    <div className="relative z-10">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-[#EB8B2E] transition-colors group-hover:bg-[#EB8B2E] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </Section>

          <Section
            eyebrow="Our Expertise"
            title="How we create business value"
            description="Our business model combines distribution capabilities, online marketplace expansion, and expert consultancy support."
          >
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {divisions.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article 
                    variants={fadeInUp}
                    key={item.title} 
                    className="group flex flex-col rounded-[2rem] border border-border/50 bg-surface p-8 shadow-sm transition-all hover:shadow-md hover:border-[#EB8B2E]/30"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-8 flex items-center text-sm font-semibold text-[#EB8B2E] opacity-0 transition-opacity group-hover:opacity-100">
                      Explore division <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </Section>
        </div>
      </div>

      <section className="border-t border-border/30 bg-transparent py-8 md:py-12">
        <div className="container-shell">
          <div className="flex flex-col items-center justify-between gap-6 overflow-hidden md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EB8B2E]">
                Company mark
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Registered UAE business identity
              </p>
            </div>
            <span className="shrink-0 leading-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ebc-mark.png"
                alt="EBC monogram logo"
                className="block h-[56px] w-auto object-contain md:h-[64px]"
              />
            </span>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to build your next business move?"
        description="Let us support your expansion goals with reliable trading networks and professional consultancy services."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="Read Company Profile"
        secondaryHref="/about"
      />
    </SiteShell>
  );
}
