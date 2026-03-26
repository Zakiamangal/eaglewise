import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

const divisions = [
  "General Trading & Wholesale",
  "E-Commerce & Digital Trading",
  "Professional Consultancy Services",
];

const highlights = [
  "UAE-based company established in March 2025",
  "Regional network connecting UAE suppliers to Afghan markets",
  "Operations across wholesale, digital commerce, and advisory services",
];

export default function Home() {
  return (
    <SiteShell>
      <section className="pb-8 pt-0">
        <div className="relative overflow-hidden">
            <Image
              src="/hero-dubai.jpg"
              alt="Business hero background"
              width={1600}
              height={900}
              className="h-[520px] w-full object-cover md:h-[620px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/86 to-transparent" />
            <div className="absolute inset-0">
              <div className="container-shell p-6 md:p-10">
                <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Eaglewise Business Consultancy LLC-FZ
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Strategic business growth support, here in the UAE.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                  Trade confidently with a partner focused on general trading, e-commerce,
                  and professional consultancy execution for regional expansion.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
                  >
                    <span className="inline-flex items-center gap-2">
                      Sign up <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-full bg-white/14 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/24"
                  >
                    Try demo
                  </Link>
                </div>
                <p className="mt-7 text-sm text-white/80">
                  Built with integrity, transparency, and market expertise.
                </p>
                </div>
              </div>
            </div>
          </div>

        <div className="container-shell">
          <div className="relative z-10 -mt-10 mx-auto max-w-5xl rounded-[2.5rem] border border-border/40 bg-surface px-6 py-8 shadow-none md:-mt-16 md:px-10 md:py-8">
            <div className="grid grid-cols-1 gap-6 divide-y divide-border/40 md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
              <article className="flex flex-col items-center pt-4 first:pt-0 md:items-start md:px-8 md:py-0 md:first:pl-0">
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Established
                  </p>
                </div>
                <p className="mt-2.5 text-xl font-bold text-foreground md:text-2xl">March 2025</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Core Divisions
                  </p>
                </div>
                <p className="mt-2.5 text-xl font-bold text-foreground md:text-2xl">3 Business Units</p>
              </article>
              <article className="flex flex-col items-center pt-6 md:items-start md:px-8 md:py-0 md:last:pr-0">
                <div className="flex items-center gap-2.5">
                  <Globe className="h-5 w-5 text-[#EB8B2E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Regional Reach
                  </p>
                </div>
                <p className="mt-2.5 text-xl font-bold text-foreground md:text-2xl">34 Provinces Network</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        {/* Warm orange glow behind content (kept subtle) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at top right,
                rgba(255, 140, 60, 0.14),
                transparent 70%
              )
            `,
            filter: "blur(60px)",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10">
          <Section
            eyebrow="Overview"
            title="Built for long-term partnerships"
            description="Eaglewise bridges opportunities between international suppliers and regional markets, with a focus on quality, transparency, and reliable delivery."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, idx) => {
                const Icon =
                  idx === 0 ? ShieldCheck : idx === 1 ? Handshake : Building2;
                return (
                  <article key={item} className="soft-card p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[#EB8B2E]" />
                    </div>
                    <p className="text-base leading-7">{item}</p>
                  </article>
                );
              })}
            </div>
          </Section>

          <Section
            eyebrow="Core Divisions"
            title="How we create business value"
            description="Our business model combines distribution capabilities, online marketplace expansion, and expert consultancy support."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {divisions.map((item, idx) => {
                const Icon =
                  idx === 0 ? Building2 : idx === 1 ? Globe : Handshake;
                return (
                  <article key={item} className="soft-card p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[#EB8B2E]" />
                    </div>
                    <h3 className="text-xl font-semibold">{item}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Practical, execution-focused support tailored for companies
                      operating in the UAE and international markets.
                    </p>
                  </article>
                );
              })}
            </div>
          </Section>
        </div>
      </div>

      <section className="border-t border-border/30 bg-transparent py-6 md:py-8">
        <div className="container-shell">
          <div className="flex flex-wrap items-center justify-between gap-6 overflow-hidden">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Company mark
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Registered UAE business identity
              </p>
            </div>
            <span className="shrink-0 leading-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ebc-mark.png"
                alt="EBC monogram logo"
                className="block h-[44px] w-auto object-contain md:h-[52px]"
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
