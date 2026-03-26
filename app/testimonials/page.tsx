import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Eaglewise helped us streamline reporting and improve financial visibility within a short timeframe.",
    author: "Regional Trading Client",
  },
  {
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support has been valuable for planning.",
    author: "UAE Consultancy Client",
  },
  {
    quote:
      "From product sourcing to market distribution guidance, Eaglewise provided reliable support at each stage.",
    author: "Consumer Goods Partner",
  },
];

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <Section
        eyebrow="Client Feedback"
        title="Built on trust and long-term relationships"
        description="Sample testimonials are included in this version and can be replaced with verified client testimonials once approved."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.author} className="rounded-2xl border border-border bg-surface p-6">
              <Quote className="h-6 w-6 text-[#EB8B2E]" />
              <p className="text-base leading-7 text-muted-foreground">
                &quot;{item.quote}&quot;
              </p>
              <p className="mt-4 text-sm font-semibold">{item.author}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Trusted by businesses in the UAE and beyond">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-3xl font-semibold text-primary">2025</h3>
            <p className="mt-2 text-sm text-muted-foreground">Company established in UAE</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-3xl font-semibold text-primary">34 Provinces</h3>
            <p className="mt-2 text-sm text-muted-foreground">Distribution reach via partner network</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-3xl font-semibold text-primary">3 Divisions</h3>
            <p className="mt-2 text-sm text-muted-foreground">Trading, e-commerce, and consultancy</p>
          </article>
        </div>
      </Section>

      <CtaStrip
        title="Want your success story featured here?"
        description="Start working with us and we can build measurable outcomes for your business."
        primaryLabel="Contact Eaglewise"
        primaryHref="/contact"
        secondaryLabel="See Our Markets"
        secondaryHref="/markets"
      />
    </SiteShell>
  );
}
