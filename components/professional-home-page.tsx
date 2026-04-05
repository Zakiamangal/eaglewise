"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import {
  Calculator,
  FileText,
  Handshake,
  ShieldCheck,
  CalendarDays,
  Layers,
  Globe,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Award,
  Star,
  Scale,
} from "lucide-react";

const pillars = [
  {
    title: "Finance & assurance",
    desc: "Preparation and auditing of financial accounts, bookkeeping, internal audit, and investment analysis as needed.",
    icon: Calculator,
    accent: "text-accent-teal",
    accentBg: "bg-accent-teal/10",
  },
  {
    title: "Tax & compliance",
    desc: "Tax consultancy and compliance advisory for businesses operating in the UAE and internationally.",
    icon: Scale,
    accent: "text-accent-purple",
    accentBg: "bg-accent-purple/10",
  },
  {
    title: "Advisory & growth",
    desc: "Business advisory, marketing and PR, corporate communication, project management, and business development.",
    icon: Handshake,
    accent: "text-accent-amber",
    accentBg: "bg-accent-amber/10",
  },
];

const stripeClasses = [
  "card-stripe-teal-purple",
  "card-stripe-amber-rose",
  "card-stripe-emerald-teal",
];

const highlightAccents = [
  { color: "text-accent-teal", bg: "bg-accent-teal/10", hoverBg: "bg-accent-teal" },
  { color: "text-accent-amber", bg: "bg-accent-amber/10", hoverBg: "bg-accent-amber" },
  { color: "text-accent-emerald", bg: "bg-accent-emerald/10", hoverBg: "bg-accent-emerald" },
];

const highlights = [
  {
    title: "UAE establishment",
    desc: "Eaglewise Business Consultancy LLC-FZ, established March 2025 in the United Arab Emirates.",
    icon: ShieldCheck,
  },
  {
    title: "UAE references",
    desc: "Consultancy services provided to UAE companies including Skylink and Shanzer, per our corporate profile.",
    icon: TrendingUp,
  },
  {
    title: "Regional network",
    desc: "Partner network including Eaglewise Chartered Accountants Company (Afghanistan) for cross-border continuity.",
    icon: BarChart3,
  },
];

const landingTestimonials = [
  {
    author: "UAE Consultancy Client",
    date: "Client feedback",
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support helped us align reporting with decision-making.",
  },
  {
    author: "Business Advisory Client",
    date: "Client feedback",
    quote:
      "Communication was clear from day one, and the engagement remained focused on practical execution across teams.",
  },
  {
    author: "Finance Leadership Team",
    date: "Client feedback",
    quote:
      "Eaglewise helped us improve financial visibility and structure our internal processes with clear checkpoints.",
  },
];

const marqueeTestimonials = [...landingTestimonials, ...landingTestimonials];

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

/** Professional mode landing — rendered at `/` and (via redirect) replaces legacy `/professional`. */
export default function ProfessionalHomePage() {
  return (
    <SiteShell>
      {/* ─── HERO ─── */}
      <section className="pb-0 pt-0">
        <div className="relative overflow-hidden hero-mesh-bg">
          {/* Floating orbs behind hero content */}
          <div className="orb orb-teal w-[400px] h-[400px] -top-32 -left-20 z-0" />
          <div className="orb orb-purple w-[350px] h-[350px] top-1/2 right-0 z-0" style={{ animationDelay: "4s" }} />
          <div className="orb orb-rose w-[300px] h-[300px] bottom-0 left-1/3 z-0" style={{ animationDelay: "8s" }} />

          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-dubai.jpg"
              alt="Professional consultancy in the UAE"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/85 to-secondary/30" />

          <div className="relative z-10">
            <div className="container-shell pb-24 pt-28 md:pb-28 md:pt-32">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
              >
                <motion.p
                  variants={fadeInUp}
                  className="mb-4 inline-flex rounded-full border border-white/5 bg-white/10 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-[#C9873B] backdrop-blur-md leading-normal"
                >
                  Professional Services · Eaglewise
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  className="text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.25rem] md:text-4xl lg:text-[3.25rem]"
                >
                  Professional consultancy, <br />
                  <span className="text-white/70">UAE-based, internationally relevant.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:mt-5 md:text-lg"
                >
                  Accounting, audit, tax, investment planning, marketing and communications advisory, project management,
                  and business development—for companies in the UAE and international markets.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start md:gap-4"
                >
                  <Link
                    href="/professional/contact"
                    className="btn-3d-primary group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden px-6 text-sm text-white md:h-12 md:px-8 md:text-base"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/professional/services"
                    className="btn-3d-secondary-dark glass-card inline-flex h-11 items-center justify-center px-6 text-sm !text-gray-300 hover:bg-white/15 hover:!text-white md:h-12 md:px-8 md:text-base"
                  >
                    View Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 mx-auto mt-8 max-w-4xl rounded-[2rem] glass-card-light gradient-border px-5 py-5 md:mt-10 md:px-8 md:py-6"
          >
            <div className="grid grid-cols-1 gap-6 divide-y divide-border/40 md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
              <article className="flex flex-col items-center pt-4 first:pt-0 md:items-start md:px-8 md:py-0 md:first:pl-0">
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-5 w-5 text-accent-teal" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Established
                  </p>
                </div>
                <p className="mt-2 text-lg font-bold tracking-tight text-foreground md:text-xl">March 2025</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-accent-purple" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Service lines
                  </p>
                </div>
                <p className="mt-2 text-lg font-bold tracking-tight text-foreground md:text-xl">10+ professional services</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0 md:last:pr-0">
                <div className="flex items-center gap-2.5">
                  <Globe className="h-5 w-5 text-accent-rose" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Coverage
                  </p>
                </div>
                <p className="mt-2 text-lg font-bold tracking-tight text-foreground md:text-xl">UAE &amp; International</p>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Colorful divider ─── */}
      <div className="container-shell py-4">
        <div className="section-divider-gradient" />
      </div>

      {/* ─── UAE PRESENCE ─── */}
      <section className="py-12 md:py-16">
        <div className="container-shell perspective-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            whileHover={{ rotateX: 2, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative grid items-center gap-6 rounded-[2rem] bg-surface p-5 shadow-[0_12px_40px_rgba(7,13,26,0.06)] gradient-border md:grid-cols-2 md:gap-8 md:p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="h-[250px] overflow-hidden rounded-[1.5rem] md:h-[310px]">
              <Image
                src="/uae-presence-regional.jpg"
                alt="Professional presence in the UAE"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-1 md:px-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-teal">UAE presence</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                Efficient solutions, financial transparency, sustainable growth
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Our consultancy approach matches the corporate profile: practical services for UAE and international
                businesses, with integrity and clear communication.
              </p>
              <Link
                href="/professional/services"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-foreground transition hover:text-accent-teal"
              >
                Explore services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Colorful divider ─── */}
      <div className="container-shell py-2">
        <div className="section-divider-gradient" />
      </div>

      {/* ─── BENTO GRID ─── */}
      <section className="py-12 md:py-18">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-12"
          >
            {/* Image card — large */}
            <motion.article
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[2rem] lg:col-span-7"
            >
              <Image
                src="/professional-team.jpg"
                alt="Professional advisory team"
                width={1600}
                height={1000}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f4d]/60 via-[#0EA5E9]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">
                  Client delivery
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Structured support for finance and operations
                </h3>
              </div>
            </motion.article>

            {/* Text card — FileText */}
            <motion.article
              variants={fadeInUp}
              className="rounded-[2rem] bg-surface p-6 shadow-[0_12px_40px_rgba(7,13,26,0.06)] lg:col-span-5 md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-teal/12 text-accent-teal">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Named UAE consultancy experience</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We have provided consultancy services to companies in the UAE including Skylink and Shanzer. Our focus is
                efficient solutions, financial transparency, and sustainable growth.
              </p>
              <p className="mt-6 text-sm font-medium text-foreground/70">
                For consultancy inquiries, use{" "}
                <Link href="/professional/contact" className="font-semibold text-accent-teal hover:underline">
                  the contact form
                </Link>
                .
              </p>
            </motion.article>

            {/* Image card — small */}
            <motion.article
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[2rem] lg:col-span-5"
            >
              <Image
                src="/professional-conference.jpg"
                alt="Corporate planning session"
                width={1600}
                height={1000}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[330px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f4d]/40 via-[#8B5CF6]/5 to-transparent" />
            </motion.article>

            {/* Text card — Handshake */}
            <motion.article
              variants={fadeInUp}
              className="rounded-[2rem] bg-surface p-6 shadow-[0_12px_40px_rgba(7,13,26,0.06)] lg:col-span-7 md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/12 text-accent-purple">
                <Handshake className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Regional business network</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Eaglewise Chartered Accountants Company (Afghanistan) is part of the network that supports professional
                services, wholesale distribution, and supply across markets where our clients operate.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* ─── Colorful divider ─── */}
      <div className="container-shell py-2">
        <div className="section-divider-gradient" />
      </div>

      {/* ─── HIGHLIGHTS & PILLARS ─── */}
      <div className="relative overflow-hidden pb-10">
        {/* Vibrant orbs instead of muted blurs */}
        <div className="orb orb-teal w-[600px] h-[600px] -top-40 -right-40 z-0" />
        <div className="orb orb-purple w-[500px] h-[500px] bottom-0 -left-40 z-0" style={{ animationDelay: "6s" }} />

        <div className="relative z-10 pt-10">
          <Section
            eyebrow="Why work with us"
            title="Professional services with a clear mandate"
            description="Integrity, quality, partnership, innovation, and customer focus—applied to accounting, tax, audit, and advisory work."
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                const accent = highlightAccents[idx];
                return (
                  <motion.article
                    variants={fadeInUp}
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[2rem] bg-surface p-8 shadow-[0_8px_30px_rgba(7,13,26,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,13,26,0.1)] ${stripeClasses[idx]}`}
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-surface-alt transition-transform duration-500 group-hover:scale-150" />
                    <div className="relative z-10">
                      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} ${accent.color}`}>
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
            eyebrow="Core capabilities"
            title="How we support your business"
            description="Service pillars drawn from our full catalogue: finance and assurance, tax and compliance, and broader advisory."
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    variants={fadeInUp}
                    key={item.title}
                    className="group flex flex-col rounded-[2rem] glass-card-light p-8 transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,13,26,0.1)]"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.accentBg} ${item.accent}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                    </div>
                    <p className="flex-1 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                    <div className={`mt-8 flex items-center text-sm font-semibold ${item.accent} opacity-0 transition-opacity group-hover:opacity-100`}>
                      View catalogue <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </Section>
        </div>
      </div>

      {/* ─── Colorful divider ─── */}
      <div className="container-shell py-2">
        <div className="section-divider-gradient" />
      </div>

      {/* ─── TESTIMONIALS — dark animated background with glass cards ─── */}
      <section className="hero-mesh-bg relative overflow-hidden py-16 md:py-24">
        {/* Subtle orb accents */}
        <div className="orb orb-teal w-[300px] h-[300px] top-0 left-1/4 z-0" style={{ animationDelay: "2s" }} />
        <div className="orb orb-purple w-[250px] h-[250px] bottom-0 right-1/4 z-0" style={{ animationDelay: "6s" }} />

        <div className="container-shell relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">Testimonials</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Client feedback highlights
            </h2>
            <p className="mt-4 text-base text-white/60 md:text-lg">
              Illustrative feedback from advisory-style engagements; for references, see our testimonials page and corporate profile.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070d1a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070d1a] to-transparent" />

            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 34, ease: "linear", repeat: Infinity }}
              className="flex w-max gap-4"
            >
              {marqueeTestimonials.map((item, idx) => (
                <article
                  key={`${item.author}-${item.date}-${idx}`}
                  className="w-[300px] glass-card p-6 md:w-[360px]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={`${item.author}-star-${starIdx}-${idx}`}
                          className="h-4 w-4 fill-accent-amber text-accent-amber"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-white/40">{item.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{item.author}</p>
                  <p className="mt-3 text-base leading-7 text-white/70">{item.quote}</p>
                  <p className="mt-6 text-sm font-semibold text-white/50">Advisory engagement</p>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/professional/testimonials"
              className="btn-3d-secondary-dark inline-flex items-center gap-2 border border-white/10 glass-card px-6 py-3 text-sm text-white hover:border-accent-teal/40 hover:text-accent-teal"
            >
              View all testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COMPANY MARK ─── */}
      <section className="bg-transparent py-12 md:py-16">
        <div className="container-shell">
          <div className="flex flex-col items-center justify-between gap-6 overflow-hidden md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9873B]">Company mark</p>
              <p className="mt-1.5 text-sm text-muted-foreground">Registered UAE business identity</p>
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
        title="Request a consultancy conversation"
        description="Share your business priorities. We will suggest a practical scope across accounting, tax, audit, or advisory services."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="About Eaglewise"
        secondaryHref="/professional/about"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Executive boardroom meeting"
        fullWidth
        bottomRoundedOnly
      />
    </SiteShell>
  );
}
