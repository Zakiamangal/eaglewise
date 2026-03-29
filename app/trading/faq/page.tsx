import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What trading activities does Eaglewise focus on?",
    answer:
      "We focus on general trading and wholesale distribution, plus e-commerce operations across Amazon, Noon, and Shopify for selected consumer categories.",
  },
  {
    question: "Which suppliers and product lines do you work with?",
    answer:
      "We have sourced and traded products from suppliers including Beauty Vision (Kera Look cosmetics), My Perfume, and Efolia, exporting to Afghanistan through our distribution partner.",
  },
  {
    question: "How does distribution work in Afghanistan?",
    answer:
      "Khan Naseri Trading Company manages wholesale distribution across all 34 provinces, supporting logistics and market coverage.",
  },
  {
    question: "Can Eaglewise support marketplace growth?",
    answer:
      "Yes. We focus on expanding product availability online, developing private brands, and strengthening digital presence alongside wholesale routes.",
  },
  {
    question: "How do we start a partnership discussion?",
    answer:
      "Use the trading contact page with your company profile, categories, and target markets. Our team will respond with practical next steps.",
  },
];

export default function TradingFaqPage() {
  return (
    <SiteShell>
      <Section
        id="faq-list"
        eyebrow="FAQ · Trading & Partners"
        title="Common questions from suppliers and distributors"
        description="Need something specific? Contact us and we will tailor the answer to your scenario."
      >
        <div className="space-y-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-lg font-semibold">{item.question}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaStrip
        id="faq-cta"
        title="Still exploring fit?"
        description="Tell us about your supply chain, volumes, or marketplace goals and we will guide you to the right conversation."
        primaryLabel="Contact us"
        primaryHref="/trading/contact"
        secondaryLabel="Product catalogue"
        secondaryHref="/trading/products"
        imageSrc="/trading/cta-partners.jpg"
        imageAlt="Business discussion"
        fullWidth
        bottomRoundedOnly
      />
    </SiteShell>
  );
}
