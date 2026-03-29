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
    title: "Accounting & assurance",
    desc: "Bookkeeping, financial statements, and internal audit aligned to your reporting needs.",
    icon: Calculator,
  },
  {
    title: "Tax & compliance",
    desc: "Practical tax advisory and compliance support for UAE and cross-border operations.",
    icon: Scale,
  },
  {
    title: "Advisory & growth",
    desc: "Business advisory, project management, and development planning with clear execution.",
    icon: Handshake,
  },
];

const highlights = [
  {
    title: "UAE-based team",
    desc: "Established March 2025 with a consultancy-first operating model.",
    icon: ShieldCheck,
  },
  {
    title: "Client references",
    desc: "Experience supporting companies such as Skylink and Shanzer in the UAE.",
    icon: TrendingUp,
  },
  {
    title: "Regional network",
    desc: "Connected to Eaglewise Chartered Accountants Company in Afghanistan for continuity.",
    icon: BarChart3,
  },
];

const landingTestimonials = [
  {
    author: "UAE Consultancy Client",
    date: "2026-03-01",
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support has been valuable for planning.",
  },
  {
    author: "Business Advisory Client",
    date: "2026-02-19",
    quote:
      "Communication has been clear and professional from day one. We saw stronger execution across our regional operations.",
  },
  {
    author: "Regional Trading Client",
    date: "2026-03-10",
    quote:
      "Eaglewise helped us streamline reporting and improve financial visibility within a short timeframe.",
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

export default function ProfessionalHomePage() {
  return (
    <SiteShell>
      <section className="pb-8 pt-0">
        <div className="relative h-[620px] overflow-hidden bg-secondary md:h-[680px]">
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

          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />

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
                  Professional Services · Eaglewise
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  className="text-[2.35rem] font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[4rem]"
                >
                  Trusted advisory, <br />
                  <span className="text-white/70">grounded in the UAE.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-5 max-w-xl text-xl leading-relaxed text-white/80 md:mt-6 md:text-lg"
                >
                  Financial, tax, and business consultancy for companies that need clarity,
                  compliance, and disciplined execution—not generic slides.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:justify-start md:gap-4"
                >
                  <Link
                    href="/professional/contact"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#EB8B2E] px-6 text-base font-semibold text-white transition-all hover:bg-[#d97a22] md:h-14 md:px-8"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/professional/services"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 text-base font-semibold !text-gray-300 backdrop-blur-md transition-all hover:bg-white/20 hover:!text-white md:h-14 md:px-8"
                  >
                    View Services
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-200 md:hidden"
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
                <p className="mt-2.5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">March 2025</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Service breadth
                  </p>
                </div>
                <p className="mt-2.5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">10+ Advisory Lines</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0 md:last:pr-0">
                <div className="flex items-center gap-2.5">
                  <Globe className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Coverage
                  </p>
                </div>
                <p className="mt-2.5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">UAE &amp; International</p>
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
                alt="Professional presence in the UAE"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-1 md:px-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EB8B2E]">UAE presence</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                Built for compliant, practical advisory
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                From bookkeeping to tax advisory and business development, Eaglewise focuses on
                transparent processes and outcomes you can use in day-to-day decisions.
              </p>
              <Link
                href="/professional/services"
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
                alt="Professional advisory team"
                width={1600}
                height={1000}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB8B2E]">
                  Client delivery
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Structured support for finance and operations
                </h3>
              </div>
            </motion.article>

            <motion.article
              variants={fadeInUp}
              className="rounded-[2rem] border border-border/60 bg-surface p-6 lg:col-span-5 md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EB8B2E]/12 text-[#EB8B2E]">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">References you can verify</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We have supported companies in the UAE including Skylink and Shanzer, with an
                approach centred on efficiency, transparency, and sustainable growth.
              </p>
              <p className="mt-6 text-sm font-medium text-foreground/70">
                For consultancy inquiries, use{" "}
                <Link href="/professional/contact" className="font-semibold text-[#EB8B2E] hover:underline">
                  the contact form
                </Link>
                .
              </p>
            </motion.article>

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
            </motion.article>

            <motion.article
              variants={fadeInUp}
              className="rounded-[2rem] border border-border/60 bg-surface p-6 lg:col-span-7 md:p-8"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EB8B2E]/12 text-[#EB8B2E]">
                <Handshake className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Regional continuity</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Eaglewise Chartered Accountants Company (Afghanistan) complements our network for
                professional service continuity where our clients operate across borders.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <div className="relative overflow-hidden pb-10">
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#EB8B2E]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#070d1a]/5 blur-[100px]" />

        <div className="relative z-10 pt-10">
          <Section
            eyebrow="Why work with us"
            title="Consultancy built for decisions, not decks"
            description="We combine technical depth with practical communication so leadership teams can move faster with confidence."
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
                    className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
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
            eyebrow="Core capabilities"
            title="How we support your business"
            description="A focused set of professional service pillars covering finance, tax, and growth advisory."
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
                    className="group flex flex-col rounded-[2rem] border border-border/50 bg-surface p-8 shadow-sm transition-all hover:border-[#EB8B2E]/30 hover:shadow-md"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                    </div>
                    <p className="flex-1 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                    <div className="mt-8 flex items-center text-sm font-semibold text-[#EB8B2E] opacity-0 transition-opacity group-hover:opacity-100">
                      View catalogue <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </Section>
        </div>
      </div>

      <section className="bg-surface-alt py-14 md:py-18">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EB8B2E]">Testimonials</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              What clients say about our advisory work
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Feedback from companies we have supported on finance and business advisory.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-alt to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-alt to-transparent" />

            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 34, ease: "linear", repeat: Infinity }}
              className="flex w-max gap-4"
            >
              {marqueeTestimonials.map((item, idx) => (
                <article
                  key={`${item.author}-${item.date}-${idx}`}
                  className="w-[300px] rounded-3xl border border-border/60 bg-surface p-6 md:w-[360px]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={`${item.author}-star-${starIdx}-${idx}`}
                          className="h-4 w-4 fill-[#EB8B2E] text-[#EB8B2E]"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{item.quote}</p>
                  <p className="mt-6 text-sm font-semibold text-foreground">Trustpilot</p>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/professional/testimonials"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-[#EB8B2E]/40 hover:text-[#EB8B2E]"
            >
              View all testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/30 bg-transparent py-8 md:py-12">
        <div className="container-shell">
          <div className="flex flex-col items-center justify-between gap-6 overflow-hidden md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EB8B2E]">Company mark</p>
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
        title="Ready for a structured consultancy conversation?"
        description="Share your objectives and we will recommend a practical scope—whether you need accounting support, tax clarity, or broader advisory."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="Company profile"
        secondaryHref="/professional/about"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Executive boardroom meeting"
        fullWidth
        bottomRoundedOnly
      />
    </SiteShell>
  );
}
