"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { Package, ShoppingBag, Truck, ClipboardList } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const suppliers = ["Beauty Vision", "My Perfume", "Efolia"];
const channels = ["Amazon", "Noon", "Shopify"];

export default function TradingMarketsPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/split-logistics.jpg"
          imageAlt="Logistics and distribution operations"
          imagePositionClassName="object-[center_40%] sm:object-[center_35%]"
          eyebrow="Markets & distribution"
          title="Channels & coverage"
          subtitle="Wholesale, e-commerce, and regional distribution—aligned from UAE supply to partner-led fulfilment."
        />

        {/* Overview with images */}
        <Section
          id="markets-overview"
          className="bg-white"
          eyebrow="Overview"
          title="Connecting suppliers, channels, and regional demand"
          description="Eaglewise operates across international sourcing, wholesale distribution, and digital marketplace sales."
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-2 md:gap-6"
          >
            <motion.article variants={fadeInUp} className="eagle-card group relative overflow-hidden p-6 md:p-7">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2]" />
              <div className="relative">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="/trading/split-team.jpg"
                    alt="Business professionals collaborating"
                    width={600}
                    height={300}
                    className="h-[160px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                    <Package className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">General trading & wholesale</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  We source products from reputable UAE suppliers and export to regional markets through a trusted
                  partner network.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground md:text-base">
                  {suppliers.map((supplier) => (
                    <li key={supplier} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EB8B2E]" />
                      {supplier}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            <motion.article variants={fadeInUp} className="eagle-card group relative overflow-hidden p-6 md:p-7">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2]" />
              <div className="relative">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="/trading/split-ecommerce.jpg"
                    alt="E-commerce operations"
                    width={600}
                    height={300}
                    className="h-[160px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">E-commerce & digital trading</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Our digital growth model expands product reach through major online channels, serving both wholesale
                  and retail demand.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground md:text-base">
                  {channels.map((channel) => (
                    <li key={channel} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EB8B2E]" />
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </Section>

        {/* Regional network with image */}
        <section id="regional-network" className="scroll-mt-36 animated-bg py-14 md:py-20">
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-11"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">Network</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Regional network</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our business network supports reliable logistics, market coverage, and operational continuity.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid gap-5 md:grid-cols-2 md:gap-6"
            >
              <motion.article variants={fadeInUp} className="eagle-card group relative overflow-hidden p-6 md:p-7">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <Truck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Khan Naseri Trading Company</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Handles wholesale distribution across all 34 provinces of Afghanistan for consistent market coverage
                    and logistics execution.
                  </p>
                </div>
              </motion.article>

              <motion.article variants={fadeInUp} className="eagle-card group relative overflow-hidden p-6 md:p-7">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <ClipboardList className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">UAE corridor</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Eaglewise bridges UAE suppliers with regional demand, with emphasis on transparent coordination and
                    dependable fulfilment partners.
                  </p>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>

        <CtaStrip
          id="markets-cta"
          title="Expand your distribution footprint"
          description="Work with Eaglewise to strengthen sourcing, market access, and channel execution."
          primaryLabel="Start partnership discussion"
          primaryHref="/trading/contact"
          secondaryLabel="View products"
          secondaryHref="/trading/products"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Business partnership meeting"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
