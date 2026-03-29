import Image from "next/image";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { Handshake, MapPinned, Truck } from "lucide-react";

export default function TradingPartnersPage() {
  return (
    <SiteShell>
      <div className="bg-white">
        <div className="container-shell pt-6 md:pt-8">
          <div className="relative h-[220px] overflow-hidden rounded-[2rem] md:h-[300px] md:rounded-[2.5rem]">
            <Image
              src="/trading/split-team.jpg"
              alt="Partners meeting in a professional setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1240px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          </div>
        </div>
      </div>
      <Section
        id="partner-overview"
        eyebrow="Partnerships"
        title="A partner model built for coverage and reliability"
        description="Eaglewise collaborates with distributors and service partners to connect UAE supply with regional demand."
      >
        <div className="rounded-3xl border border-border bg-surface p-7 md:p-10">
          <p className="text-base leading-8 text-muted-foreground">
            Our partnerships emphasize long-term coordination: transparent communication, disciplined logistics
            planning, and shared accountability for market execution. Whether you are a supplier, distributor,
            or marketplace operator, we focus on practical outcomes.
          </p>
        </div>
      </Section>

      <Section
        id="key-partners"
        title="Key partners"
        description="Organizations that extend Eaglewise reach across wholesale and professional continuity."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Truck className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-xl font-semibold">Khan Naseri Trading Company (Afghanistan)</h3>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Manages wholesale distribution and product supply across all 34 provinces of Afghanistan,
              supporting efficient logistics and strong market reach for exported goods.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <MapPinned className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-xl font-semibold">Eaglewise Chartered Accountants Company (Afghanistan)</h3>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Supports professional services continuity for businesses that need aligned financial and
              operational support across markets.
            </p>
          </article>
        </div>
      </Section>

      <Section title="What we look for in partners">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <Handshake className="mb-3 h-5 w-5 text-[#EB8B2E]" />
            <h3 className="text-lg font-semibold">Operational readiness</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Clear fulfilment capability, compliance awareness, and realistic volume planning.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <Truck className="mb-3 h-5 w-5 text-[#EB8B2E]" />
            <h3 className="text-lg font-semibold">Market access</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Distribution strength in target provinces or digital channels that match the product strategy.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <MapPinned className="mb-3 h-5 w-5 text-[#EB8B2E]" />
            <h3 className="text-lg font-semibold">Transparent collaboration</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Shared reporting rhythms and problem-solving—so issues are resolved quickly on the ground.
            </p>
          </article>
        </div>
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
    </SiteShell>
  );
}
