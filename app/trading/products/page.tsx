import Image from "next/image";
import Link from "next/link";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { khanNaseriProductHighlights } from "@/lib/khan-naseri-trading";
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
    detail: "Marketplace listings for wholesale and retail sales.",
  },
  {
    name: "Noon",
    detail: "Regional e-commerce presence in line with our digital growth strategy.",
  },
  {
    name: "Shopify",
    detail: "Brand-controlled storefront and direct digital trading.",
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
          title="Sourcing, exports, trade and partnership"
          subtitle="Consumer goods from named UAE supplier lines, sold through major marketplaces and supported by regional distribution partners."
        />
        <Section
          id="supplier-lines"
          className="bg-white"
          eyebrow="Supplier lines"
          title="Products we have sourced and traded"
          description="The corporate profile lists suppliers we have purchased from and traded with. Export to Afghanistan is supported through Khan Naseri Trading Company."
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
            These products are exported to Afghanistan through Khan Naseri Trading Company, which manages wholesale
            distribution across all 34 provinces.
          </p>
        </Section>

        <Section
          id="afghanistan-partner-snapshot"
          className="bg-white"
          eyebrow="Regional distribution"
          title="Afghanistan — partner brands in market"
          description="Reference visuals from Khan Naseri Trading Company’s public LinkedIn activity: KERA LOOK hair care, Efolia fragrances, Shavele skincare, and My Perfume / Arabiyat lines — wholesale and retail, with nationwide reach."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {khanNaseriProductHighlights.map((item) => (
              <figure
                key={item.src}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(7,13,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,13,26,0.1)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="px-3 py-2.5 text-xs font-medium text-muted-foreground">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Full gallery and partner context:{" "}
            <Link href="/trading/partners#khan-naseri-showcase" className="font-semibold text-[#EB8B2E] underline-offset-2 hover:underline">
              Khan Naseri Trading Company showcase
            </Link>
          </p>
        </Section>

        <Section
          id="shavele"
          className="bg-neutral-50/80"
          eyebrow="Own brand"
          title="Shavele SkinCare"
          description="Private brand development is part of our strategy: we develop and promote registered brands alongside marketplace and wholesale routes."
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
              <Image
                src="/trading/IMG_0354.jpg"
                alt="Shavele Face Moisturizer product"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-neutral-300/90 bg-white p-5 text-sm leading-relaxed text-muted-foreground md:p-6 md:text-base">
            Shavele is Eaglewise&apos;s skincare line, positioned for the UAE climate and available through our
            e-commerce channels and wholesale distribution network.
          </p>
        </Section>

        <Section
          id="ecommerce-channels"
          className="bg-neutral-50/80"
          eyebrow="E-commerce channels"
          title="Amazon, Noon, and Shopify"
          description="Our e-commerce strategy focuses on expanding online availability, developing private brands, building digital presence, and improving customer satisfaction."
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
              Strategic expansion includes international trade partnerships, stronger marketplace presence, private label
              brands, wider regional distribution, and enhanced consultancy for cross-border businesses—aligned with
              our stated growth plan.
            </p>
          </div>
        </Section>

        <CtaStrip
          id="products-cta"
          title="Discuss products or channels"
          description="Share your categories, volumes, and regions. We will confirm fit against our supplier lines, export routes, and marketplace operations."
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
