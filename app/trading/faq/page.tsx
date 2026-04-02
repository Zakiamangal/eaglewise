import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does Eaglewise do under trading and e-commerce?",
    answer:
      "Eaglewise Business Consultancy LLC-FZ operates in general trading—import, export, and wholesale distribution of consumer goods—and runs e-commerce on Amazon, Noon, and Shopify, with both wholesale and retail sales for selected products.",
  },
  {
    question: "Which suppliers and product lines are referenced in your profile?",
    answer:
      "We have purchased and traded products from Beauty Vision (Kera Look cosmetics), My Perfume, and Efolia. Exports to Afghanistan are supported through Khan Naseri Trading Company.",
  },
  {
    question: "How does distribution work in Afghanistan?",
    answer:
      "Khan Naseri Trading Company manages wholesale distribution across all 34 provinces of Afghanistan, supporting logistics and nationwide coverage for exported goods.",
  },
  {
    question: "What is your e-commerce focus?",
    answer:
      "We work to expand product availability online, develop private brands, strengthen digital presence, and improve customer satisfaction—alongside wholesale routes.",
  },
  {
    question: "How do we start a partnership discussion?",
    answer:
      "Use the trading contact page with your company profile, product categories, and target markets. We will reply with clear next steps for sourcing or distribution discussions.",
  },
];

export default function TradingFaqPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/hero-handshake-style.jpg"
          imageAlt="Business partnership discussion"
          imagePositionClassName="object-[center_30%] sm:object-[center_25%]"
          eyebrow="FAQ · Trading & Partnership"
          title="Trading & partnerships"
          subtitle="Answers aligned with our corporate profile: sourcing, exports, marketplaces, and regional partners."
        />
        <Section
          id="faq-list"
          className="bg-white"
          eyebrow="Topics"
          title="Common questions"
          description="For scenarios not covered here, contact us with specifics and we will respond directly."
        >
          <div className="space-y-4 md:space-y-5">
            {faqs.map((item) => (
              <article key={item.question} className="eagle-card p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 shrink-0 text-[#EB8B2E]" />
                  <h3 className="text-lg font-bold tracking-tight">{item.question}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <CtaStrip
          id="faq-cta"
          title="Talk to the trading team"
          description="Share your supply chain, volumes, or marketplace goals and we will route you to the right conversation."
          primaryLabel="Contact us"
          primaryHref="/trading/contact"
          secondaryLabel="Products & channels"
          secondaryHref="/trading/products"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Business discussion"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
