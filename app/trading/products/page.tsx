import Image from "next/image";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { Sparkles, Store, Globe } from "lucide-react";

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
      <div className="bg-white">
        <div className="container-shell pt-6 md:pt-8">
          <div className="relative h-[220px] overflow-hidden rounded-[2rem] md:h-[300px] md:rounded-[2.5rem]">
            <Image
              src="/trading/split-ecommerce.jpg"
              alt="E-commerce and digital retail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1240px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent" />
          </div>
        </div>
      </div>
      <Section
        id="supplier-lines"
        eyebrow="Supplier lines"
        title="Curated sourcing from trusted UAE partners"
        description="We trade products sourced from established suppliers, with export routes supported through our partner distribution network."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {supplierLines.map((line) => (
            <article key={line.name} className="rounded-2xl border border-border bg-surface p-6">
              <div className="mb-3 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-lg font-semibold">{line.name}</h3>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">{line.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-dashed border-border/80 bg-surface-alt/60 p-4 text-sm text-muted-foreground">
          Exports to Afghanistan are supported through Khan Naseri Trading Company for nationwide wholesale
          distribution.
        </p>
      </Section>

      <Section
        id="ecommerce-channels"
        eyebrow="E-commerce channels"
        title="Digital trading on major marketplaces"
        description="Our e-commerce strategy focuses on availability, private brands, digital presence, and customer satisfaction."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((ch) => (
            <article key={ch.name} className="rounded-2xl border border-border bg-surface p-6">
              <div className="mb-3 flex items-center gap-3">
                <Store className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-lg font-semibold">{ch.name}</h3>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">{ch.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
          <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#EB8B2E]" />
          <p className="text-sm leading-7 text-muted-foreground">
            We are developing private label brands and strengthening digital marketplace execution alongside
            wholesale distribution—aligned to Eaglewise strategic expansion priorities.
          </p>
        </div>
      </Section>

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
    </SiteShell>
  );
}
