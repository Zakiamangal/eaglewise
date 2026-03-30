import Image from "next/image";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
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
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {supplierLines.map((line) => (
              <article key={line.name} className="eagle-card p-6 md:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#EB8B2E]" />
                  <h3 className="text-lg font-bold tracking-tight">{line.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{line.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-neutral-300/90 bg-neutral-50/80 p-5 text-sm leading-relaxed text-muted-foreground md:p-6 md:text-base">
            Exports to Afghanistan are supported through Khan Naseri Trading Company for nationwide wholesale
            distribution.
          </p>
        </Section>

        <Section
          id="shavele"
          className="bg-neutral-50/80"
          eyebrow="Own brand"
          title="Shavele SkinCare"
          description="High-performance hair and skincare designed for modern lifestyles and desert climates. Developed by Eaglewise, estd 2025."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/trading/3.jpg" alt="Shavele SkinCare brand" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/trading/4.jpg" alt="Shavele serum bottle" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/trading/5.jpg" alt="Shavele moisturizer cream" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src="/trading/2.jpg" alt="Shavele branding and packaging" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src="/trading/IMG_0354.jpg" alt="Shavele Face Moisturizer — Pure comfort in harmony with summer radiance" fill className="object-cover" />
            </div>
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-neutral-300/90 bg-white p-5 text-sm leading-relaxed text-muted-foreground md:p-6 md:text-base">
            Shavele is Eaglewise&apos;s own skincare line — formulated for the UAE climate, available through our e-commerce channels and wholesale distribution network.
          </p>
        </Section>

        <Section
          id="ecommerce-channels"
          className="bg-neutral-50/80"
          eyebrow="E-commerce channels"
          title="Digital trading on major marketplaces"
          description="Our e-commerce strategy focuses on availability, private brands, digital presence, and customer satisfaction."
        >
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {channels.map((ch) => (
              <article key={ch.name} className="eagle-card p-6 md:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <Store className="h-5 w-5 text-[#EB8B2E]" />
                  <h3 className="text-lg font-bold tracking-tight">{ch.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{ch.detail}</p>
              </article>
            ))}
          </div>
          <div className="eagle-card mt-8 flex items-start gap-4 p-6 md:p-7">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#EB8B2E]" />
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
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
      </div>
    </SiteShell>
  );
}
