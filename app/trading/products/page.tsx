"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { Sparkles, Store, Globe } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

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
    detail: "Marketplace listings supporting wholesale and retail visibility.",
  },
  {
    name: "Noon",
    detail: "Regional e-commerce reach across the UAE and wider GCC footprint.",
  },
  {
    name: "Shopify",
    detail: "Owned storefront and brand-controlled digital trading.",
  },
];

export default function TradingProductsPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/split-ecommerce.jpg"
          imageAlt="E-commerce and digital retail"
          imagePositionClassName="object-[center_45%]"
          eyebrow="Products & channels"
          title="Sourcing & listings"
          subtitle="Trusted UAE supplier lines and marketplace execution across Amazon, Noon, and Shopify."
        />

        <Section
          id="supplier-lines"
          className="bg-white"
          eyebrow="Supplier lines"
          title="Curated sourcing from trusted UAE partners"
          description="We trade products sourced from established suppliers, with export routes supported through our partner distribution network."
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-3 md:gap-6"
          >
            {supplierLines.map((line) => (
              <motion.article
                key={line.name}
                variants={fadeInUp}
                className="group eagle-card relative overflow-hidden p-6 md:p-7"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EB8B2E]/15 to-[#EB8B2E]/5 text-[#EB8B2E] ring-1 ring-[#EB8B2E]/10 transition-all group-hover:bg-[#EB8B2E] group-hover:text-white group-hover:ring-[#EB8B2E]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{line.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{line.detail}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 grid items-center gap-5 md:grid-cols-5"
          >
            <div className="overflow-hidden rounded-2xl md:col-span-2">
              <Image
                src="/trading/split-logistics.jpg"
                alt="Export logistics"
                width={600}
                height={400}
                className="h-[200px] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <p className="rounded-2xl border border-dashed border-[#EB8B2E]/20 bg-[#EB8B2E]/5 p-5 text-sm leading-relaxed text-muted-foreground md:col-span-3 md:p-6 md:text-base">
              Exports to Afghanistan are supported through Khan Naseri Trading Company for nationwide wholesale
              distribution.
            </p>
          </motion.div>
        </Section>

        <section id="ecommerce-channels" className="scroll-mt-36 animated-bg py-14 md:py-20">
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-11"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">E-commerce channels</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Digital trading on major marketplaces</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our e-commerce strategy focuses on availability, private brands, digital presence, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid gap-5 md:grid-cols-3 md:gap-6"
            >
              {channels.map((ch) => (
                <motion.article
                  key={ch.name}
                  variants={fadeInUp}
                  className="group eagle-card relative overflow-hidden p-6 md:p-7"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EB8B2E]/15 to-[#EB8B2E]/5 text-[#EB8B2E] ring-1 ring-[#EB8B2E]/10 transition-all group-hover:bg-[#EB8B2E] group-hover:text-white group-hover:ring-[#EB8B2E]">
                      <Store className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{ch.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{ch.detail}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="eagle-card mt-8 flex items-start gap-4 p-6 md:p-7"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                <Globe className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                We are developing private label brands and strengthening digital marketplace execution alongside
                wholesale distribution—aligned to Eaglewise strategic expansion priorities.
              </p>
            </motion.div>
          </div>
        </section>

        <CtaStrip
          id="products-cta"
          title="Want to list or distribute with Eaglewise?"
          description="Share your SKU strategy, volumes, and target regions—we will advise on fit and partnership structure."
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
