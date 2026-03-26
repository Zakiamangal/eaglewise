import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { ShieldCheck, Trophy, Handshake, Lightbulb, Users, Compass, ClipboardList } from "lucide-react";

const values = [
  { title: "Integrity", Icon: ShieldCheck },
  { title: "Quality", Icon: Trophy },
  { title: "Partnership", Icon: Handshake },
  { title: "Innovation", Icon: Lightbulb },
  { title: "Customer Focus", Icon: Users },
];

const missionPoints = [
  "Provide high-quality goods and professional services",
  "Build long-term strategic partnerships with global companies",
  "Expand trading operations across regional and international markets",
  "Support businesses through reliable advisory services",
  "Develop and promote registered private brands",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <Section
        eyebrow="About Eaglewise"
        title="A diversified UAE business model for modern markets"
        description="Eaglewise Business Consultancy LLC-FZ was established in March 2025 to connect international suppliers, regional distributors, and growth-focused businesses."
      >
        <div className="rounded-3xl border border-border bg-surface p-7 md:p-10">
          <p className="text-base leading-8 text-muted-foreground">
            Since inception, we have focused on a practical model that combines
            international trading, digital commerce, and professional consultancy
            services. Our objective is not only to conduct business, but to contribute
            to market development through trusted partnerships and efficient execution.
          </p>
        </div>
      </Section>

      <Section title="Vision & Mission">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-2xl font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To become a trusted international trading and consultancy company,
              recognized for delivering quality products and professional services across
              global markets.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <ClipboardList className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-2xl font-semibold">Mission</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
              {missionPoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section title="CEO Message">
        <article className="rounded-2xl border border-border bg-surface p-6 md:p-8">
          <p className="text-base leading-8 text-muted-foreground">
            At Eaglewise Business Consultancy LLC-FZ, our vision is to create a company
            that delivers high-quality products and professional services while building
            strong and lasting partnerships across international markets.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            We are committed to integrity, transparency, and professionalism as we expand
            our network, develop our own brands, and strengthen our presence in regional
            and international markets.
          </p>
          <p className="mt-5 text-sm font-semibold text-foreground">Mr. Nauroz Khan Naseri</p>
        </article>
      </Section>

      <Section title="Company Values">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(({ title, Icon }) => (
            <article key={title} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Let us align strategy with execution"
        description="Partner with Eaglewise for disciplined operations, transparent processes, and scalable market growth."
        primaryLabel="Discuss Your Goals"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}
