import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Which professional services does Eaglewise provide?",
    answer:
      "We provide preparation and auditing of financial accounts, accounting and bookkeeping, internal audit, tax consultancy, investment analysis, marketing and PR consultancy, corporate communication, business advisory, project management, and business development consultancy.",
  },
  {
    question: "Do you work with UAE companies only?",
    answer:
      "Our consultancy engagements are structured for businesses operating in the UAE and international markets, depending on scope and regulatory context.",
  },
  {
    question: "Can you support both compliance and growth advisory?",
    answer:
      "Yes. Many clients combine finance and tax compliance support with business advisory and project management for clearer execution.",
  },
  {
    question: "How do you price consultancy engagements?",
    answer:
      "Scope is agreed after discovery. Share your objectives via the contact page and we will propose a practical structure.",
  },
  {
    question: "How can we start working with Eaglewise?",
    answer:
      "Use the professional services contact form with your company profile and priority outcomes. Our team will respond with next steps.",
  },
];

export default function ProfessionalFaqPage() {
  return (
    <SiteShell>
      <Section
        id="faq-list"
        eyebrow="FAQ · Professional Services"
        title="Common questions about our advisory work"
        description="If you need detail specific to your company, we can respond with a tailored outline."
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
        title="Have a specific question?"
        description="Speak with Eaglewise directly about reporting, tax, or advisory priorities for your leadership team."
        primaryLabel="Contact Us"
        primaryHref="/professional/contact"
        secondaryLabel="About Us"
        secondaryHref="/professional/about"
      />
    </SiteShell>
  );
}
