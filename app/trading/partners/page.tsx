"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { Handshake, MapPinned, Truck } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function TradingPartnersPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/split-team.jpg"
          imageAlt="Partners meeting in a professional setting"
          imagePositionClassName="object-[center_30%]"
          eyebrow="Partnerships"
          title="Build with Eaglewise"
          subtitle="Distribution, suppliers, and channel partners—structured for coverage, transparency, and long-term execution."
        />

        {/* Partner overview with image */}
        <section id="partner-overview" className="scroll-mt-36 bg-white py-14 md:py-20">
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-11"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">Model</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A partner model built for coverage and reliability
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Eaglewise collaborates with distributors and service partners to connect UAE supply with regional demand.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
            >
              <div className="eagle-card gradient-accent rounded-3xl p-7 md:p-10">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Our partnerships emphasize long-term coordination: transparent communication, disciplined logistics
                  planning, and shared accountability for market execution. Whether you are a supplier, distributor, or
                  marketplace operator, we focus on practical outcomes.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/trading/partner-highlight-established.jpg"
                  alt="Established trading presence"
                  width={800}
                  height={533}
                  className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[320px]"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key partners */}
        <section id="key-partners" className="scroll-mt-36 animated-bg py-14 md:py-20">
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-11"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">Ecosystem</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Key partners</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Organizations that extend Eaglewise reach across wholesale and professional continuity.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid gap-5 md:grid-cols-2 md:gap-6"
            >
              <motion.article variants={fadeInUp} className="group eagle-card relative overflow-hidden">
                <div className="h-[180px] overflow-hidden">
                  <Image
                    src="/trading/partner-highlight-reach.jpg"
                    alt="Regional distribution reach"
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                </div>
                <div className="relative p-6 md:p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <Truck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Khan Naseri Trading Company (Afghanistan)</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Manages wholesale distribution and product supply across all 34 provinces of Afghanistan, supporting
                    efficient logistics and strong market reach for exported goods.
                  </p>
                </div>
              </motion.article>

              <motion.article variants={fadeInUp} className="group eagle-card relative overflow-hidden">
                <div className="h-[180px] overflow-hidden">
                  <Image
                    src="/trading/partner-highlight-channels.jpg"
                    alt="Digital marketplace channels"
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                </div>
                <div className="relative p-6 md:p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <MapPinned className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Eaglewise Chartered Accountants Company (Afghanistan)</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Supports professional services continuity for businesses that need aligned financial and operational
                    support across markets.
                  </p>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* What we look for */}
        <Section
          className="bg-white"
          eyebrow="Fit"
          title="What we look for in partners"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-3 md:gap-6"
          >
            {[
              {
                Icon: Handshake,
                title: "Operational readiness",
                desc: "Clear fulfilment capability, compliance awareness, and realistic volume planning.",
              },
              {
                Icon: Truck,
                title: "Market access",
                desc: "Distribution strength in target provinces or digital channels that match the product strategy.",
              },
              {
                Icon: MapPinned,
                title: "Transparent collaboration",
                desc: "Shared reporting rhythms and problem-solving—so issues are resolved quickly on the ground.",
              },
            ].map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="group eagle-card relative overflow-hidden p-6 md:p-7"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EB8B2E]/15 to-[#EB8B2E]/5 text-[#EB8B2E] ring-1 ring-[#EB8B2E]/10 transition-all group-hover:bg-[#EB8B2E] group-hover:text-white group-hover:ring-[#EB8B2E]">
                    <item.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <CtaStrip
          id="partners-cta"
          title="Become a distribution or channel partner"
          description="Introduce your company profile, territories, and categories—we will assess fit and propose next steps."
          primaryLabel="Partner with us"
          primaryHref="/trading/contact"
          secondaryLabel="Explore markets"
          secondaryHref="/trading/markets"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Partners discussing strategy"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
