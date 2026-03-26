import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { Package, ShoppingBag, Truck, ClipboardList } from "lucide-react";

const suppliers = ["Beauty Vision", "My Perfume", "Efolia"];
const channels = ["Amazon", "Noon", "Shopify"];

export default function MarketsPage() {
  return (
    <SiteShell>
      <Section
        eyebrow="Markets & Distribution"
        title="Connecting suppliers, channels, and regional demand"
        description="Eaglewise operates across international sourcing, wholesale distribution, and digital marketplace sales."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Package className="h-5 w-5 text-[#EB8B2E]" />
            <h3 className="text-2xl font-semibold">General Trading & Wholesale</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We source products from reputable UAE suppliers and export to regional
              markets through a trusted partner network.
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
            <h3 className="text-2xl font-semibold">E-Commerce & Digital Trading</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Our digital growth model expands product reach through major online
              channels, serving both wholesale and retail demand.
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
        title="Regional Network"
        description="Our business network supports reliable logistics, market coverage, and operational continuity."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Truck className="h-5 w-5 text-[#EB8B2E]" />
            <h3 className="text-xl font-semibold">Khan Naseri Trading Company</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Handles wholesale distribution across all 34 provinces of Afghanistan for
              consistent market coverage.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <ClipboardList className="h-5 w-5 text-[#EB8B2E]" />
            <h3 className="text-xl font-semibold">Eaglewise Chartered Accountants Company</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Supports professional service operations and financial process continuity in
              the Afghan market.
            </p>
          </article>
        </div>
      </Section>

      <CtaStrip
        title="Expand your distribution footprint"
        description="Work with Eaglewise to strengthen sourcing, market access, and channel execution."
        primaryLabel="Start Partnership Discussion"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}
