import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does Eaglewise specialize in?",
    answer:
      "Eaglewise specializes in general trading, e-commerce operations, and professional business consultancy services.",
  },
  {
    question: "Which markets do you currently operate in?",
    answer:
      "Our primary operations are based in the UAE, with distribution and professional network activity connected to Afghan markets through partner companies.",
  },
  {
    question: "Do you provide both financial and business advisory services?",
    answer:
      "Yes. We provide services such as accounting, internal audit, tax consultancy, financial planning, business advisory, and project management support.",
  },
  {
    question: "Can Eaglewise support e-commerce growth?",
    answer:
      "Yes. We operate across platforms including Amazon, Noon, and Shopify and support product availability and digital market presence.",
  },
  {
    question: "How can we start working with Eaglewise?",
    answer:
      "You can start by contacting us through the contact page with your business objective, and our team will propose a suitable engagement structure.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <Section
        eyebrow="Frequently Asked Questions"
        title="Common questions from business partners"
        description="If you need details specific to your company, our team can provide a tailored response."
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
        title="Have a specific question?"
        description="Speak with Eaglewise directly for a focused discussion on your target market and business goals."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Read About Us"
        secondaryHref="/about"
      />
    </SiteShell>
  );
}
