"use client";

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
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
          title="From UAE supply to regional markets"
          subtitle="General trading, import and export, wholesale distribution, and e-commerce—aligned with our partner network for coverage and execution."
        />
        {/* ── Colorful divider ── */}
        <div className="container-shell py-4">
          <div className="section-divider-gradient" />
        </div>

        <div className="relative overflow-hidden">
          <div className="orb orb-amber w-[500px] h-[500px] -top-40 -right-40 z-0" />
          <div className="orb orb-teal w-[400px] h-[400px] bottom-0 -left-40 z-0" style={{ animationDelay: "6s" }} />
        <Section
          id="markets-overview"
          className="relative z-10"
          eyebrow="Overview"
          title="How Eaglewise connects supply and demand"
          description="Eaglewise operates in international trading and wholesale distribution of consumer goods, sources from reputable UAE suppliers, and uses digital channels to reach customers."
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-2 md:gap-6"
          >
            <motion.article variants={fadeInUp} className="glass-card-light card-3d-hover overflow-hidden relative card-stripe-teal-purple p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <Package className="h-5 w-5 text-accent-teal" />
                <h3 className="text-2xl font-bold tracking-tight">General trading &amp; wholesale</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                We source high-quality products from suppliers in the UAE and distribute to regional markets. We have
                purchased and traded products from suppliers including Beauty Vision (Kera Look cosmetics), My Perfume,
                and Efolia.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground md:text-base">
                {suppliers.map((supplier) => (
                  <li key={supplier}>{supplier}</li>
                ))}
              </ul>
            </motion.article>
            <motion.article variants={fadeInUp} className="glass-card-light card-3d-hover overflow-hidden relative card-stripe-amber-rose p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-accent-amber" />
                <h3 className="text-2xl font-bold tracking-tight">E-commerce &amp; digital trading</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                We operate on major online marketplaces and run both wholesale and retail sales for selected consumer
                products.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground md:text-base">
                {channels.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </Section>
        </div>

        {/* ── Colorful divider ── */}
        <div className="container-shell py-2">
          <div className="section-divider-gradient" />
        </div>

        <Section
          id="regional-network"
          eyebrow="Network"
          title="Regional business network"
          description="Eaglewise connects UAE suppliers with Afghan markets through established partner organisations."
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-2 md:gap-6"
          >
            <motion.article variants={fadeInUp} className="glass-card-light card-3d-hover overflow-hidden relative card-stripe-emerald-teal p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <Truck className="h-5 w-5 text-accent-emerald" />
                <h3 className="text-xl font-bold tracking-tight">Khan Naseri Trading Company (Afghanistan)</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Exports to Afghanistan are routed through this partner, which manages wholesale distribution across all
                34 provinces. In market, they also trade as import/export agents for brands such as Forvil Cosmetics and
                Herbal Bio Amla, alongside the Beauty Vision, My Perfume, and Efolia lines referenced in our profile.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <a href="/trading/partners#khan-naseri-showcase" className="font-semibold text-[#C9873B] underline-offset-2 hover:underline">
                  View photo showcase
                </a>
              </p>
            </motion.article>
            <motion.article variants={fadeInUp} className="glass-card-light card-3d-hover overflow-hidden relative card-stripe-teal-purple p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-accent-teal" />
                <h3 className="text-xl font-bold tracking-tight">UAE corridor</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Eaglewise bridges international suppliers and regional demand with coordinated sourcing, transparent
                handoffs, and fulfilment aligned to the product strategy.
              </p>
            </motion.article>
          </motion.div>
        </Section>

        <CtaStrip
          id="markets-cta"
          title="Discuss sourcing or distribution"
          description="Share your categories, volumes, and target regions. We will outline how Eaglewise can support trade and channel execution."
          primaryLabel="Contact trading team"
          primaryHref="/trading/contact"
          secondaryLabel="Products & channels"
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
