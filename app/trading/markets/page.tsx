import Image from "next/image";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { Package, ShoppingBag, Truck, ClipboardList } from "lucide-react";

const suppliers = ["Beauty Vision", "My Perfume", "Efolia"];
const channels = ["Amazon", "Noon", "Shopify"];

export default function TradingMarketsPage() {
  return (
    <SiteShell>
      <div className="bg-white">
        <div className="container-shell pt-6 md:pt-8">
          <div className="relative h-[220px] overflow-hidden rounded-[2rem] md:h-[300px] md:rounded-[2.5rem]">
            <Image
              src="/trading/split-logistics.jpg"
              alt="Logistics and distribution operations"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1240px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
      <Section
        id="markets-overview"
        eyebrow="Markets & distribution"
        title="Connecting suppliers, channels, and regional demand"
        description="Eaglewise operates across international sourcing, wholesale distribution, and digital marketplace sales."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Package className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-2xl font-semibold">General trading & wholesale</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We source products from reputable UAE suppliers and export to regional markets through a
              trusted partner network.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {suppliers.map((supplier) => (
                <li key={supplier}>- {supplier}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-2xl font-semibold">E-commerce & digital trading</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Our digital growth model expands product reach through major online channels, serving both
              wholesale and retail demand.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {channels.map((channel) => (
                <li key={channel}>- {channel}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        id="regional-network"
        title="Regional network"
        description="Our business network supports reliable logistics, market coverage, and operational continuity."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Truck className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-xl font-semibold">Khan Naseri Trading Company</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Handles wholesale distribution across all 34 provinces of Afghanistan for consistent market
              coverage and logistics execution.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <ClipboardList className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-xl font-semibold">UAE corridor</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Eaglewise bridges UAE suppliers with regional demand, with emphasis on transparent
              coordination and dependable fulfilment partners.
            </p>
          </article>
        </div>
      </Section>

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
    </SiteShell>
  );
}
