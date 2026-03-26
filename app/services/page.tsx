import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import {
  FileText,
  Calculator,
  ShieldCheck,
  Percent,
  BarChart3,
  Megaphone,
  Users,
  Briefcase,
  ClipboardList,
  Rocket,
} from "lucide-react";

const serviceCards = [
  { title: "Preparation and auditing of financial accounts", Icon: FileText },
  { title: "Accounting and bookkeeping services", Icon: Calculator },
  { title: "Internal audit services", Icon: ShieldCheck },
  { title: "Tax consultancy and compliance advisory", Icon: Percent },
  { title: "Investment analysis and financial planning", Icon: BarChart3 },
  { title: "Marketing and public relations consultancy", Icon: Megaphone },
  { title: "Corporate communication consultancy", Icon: Users },
  { title: "Business advisory services", Icon: Briefcase },
  { title: "Project management", Icon: ClipboardList },
  { title: "Business development consultancy", Icon: Rocket },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <Section
        eyebrow="Professional Services"
        title="Consultancy support built for results"
        description="We provide practical services for companies in the UAE and international markets, focused on efficiency, compliance, and sustainable growth."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {serviceCards.map(({ title, Icon }) => (
            <article key={title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#EB8B2E]" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="How we work"
        description="Our engagements are structured to provide clarity from day one while remaining flexible to your operating context."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-xl font-semibold">1. Discovery</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We understand your business needs, market constraints, and growth targets.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-xl font-semibold">2. Structured Plan</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We define practical, measurable steps and support implementation with your
              team.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-xl font-semibold">3. Ongoing Support</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We help maintain progress with follow-up advisory and performance reviews.
            </p>
          </article>
        </div>
      </Section>

      <CtaStrip
        title="Need a tailored consultancy package?"
        description="Share your current challenge and we will recommend the right service scope."
        primaryLabel="Request Consultation"
        primaryHref="/contact"
        secondaryLabel="Learn About Eaglewise"
        secondaryHref="/about"
      />
    </SiteShell>
  );
}
