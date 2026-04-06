import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Which professional services does Eaglewise provide?",
    answer:
      "Our services include preparation and auditing of financial accounts, accounting and bookkeeping, internal audit, tax consultancy and compliance advisory, investment analysis and financial planning, marketing and public relations consultancy, corporate communication consultancy, business advisory services, project management, and business development consultancy.",
  },
  {
    question: "Do you work only with UAE companies?",
    answer:
      "We provide services to businesses operating in the UAE and international markets. Scope depends on your needs and applicable regulations.",
  },
  {
    question: "Have you worked with named UAE clients?",
    answer:
      "Yes. Our corporate profile references consultancy support provided to companies in the UAE including Skylink and Shanzer.",
  },
  {
    question: "How do you price consultancy engagements?",
    answer:
      "We agree scope after understanding your situation. Use the contact form to describe your priorities; we will propose a clear structure and next steps.",
  },
  {
    question: "How can we start working with Eaglewise?",
    answer:
      "Send an inquiry through the professional contact page with your company profile and what you need. Our team will reply with practical follow-up.",
  },
];

export default function ProfessionalFaqPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/home-office-dubai.jpg"
        imageAlt="Professional workspace in Dubai"
        eyebrow="FAQ · Professional Services"
        title="Frequently asked questions"
        subtitle="Straight answers on services, clients, and how to engage with Eaglewise."
      />

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section
        id="faq-list"
        className="bg-white"
        eyebrow="Topics"
        title="Professional consultancy"
        description="If your question is specific to your entity or sector, contact us for a tailored response."
      >
        <div className="space-y-4 md:space-y-5">
          {faqs.map((item) => (
            <article key={item.question} className="glass-card-light card-3d-hover p-6 md:p-7">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#C9873B]" />
                <h3 className="text-lg font-semibold">{item.question}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <CtaStrip
        id="faq-cta"
        title="Need a direct answer?"
        description="Reach out about reporting, tax, audit, or advisory priorities for your team."
        primaryLabel="Contact Us"
        primaryHref="/professional/contact"
        secondaryLabel="About Us"
        secondaryHref="/professional/about"
      />
    </SiteShell>
  );
}
