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
  "Support businesses through reliable consultancy and advisory services",
  "Deliver efficient solutions with financial transparency and sustainable growth",
  "Strengthen professional service capabilities for UAE and international clients",
  "Build long-term relationships with companies seeking practical advisory support",
  "Enhance consultancy depth for cross-border operations where relevant",
];

export default function ProfessionalAboutPage() {
  return (
    <SiteShell>
      <Section
        id="about-overview"
        eyebrow="About · Professional Services"
        title="A UAE consultancy focused on clarity and execution"
        description="Eaglewise Business Consultancy LLC-FZ was established in March 2025 to provide professional services to businesses in the UAE and international markets."
      >
        <div className="rounded-3xl border border-border bg-surface p-7 md:p-10">
          <p className="text-base leading-8 text-muted-foreground">
            In this professional services experience, we emphasize accounting, audit, tax, investment
            planning, marketing and corporate communication advisory, project management, and business
            development—always with integrity, transparency, and a practical communication style.
          </p>
        </div>
      </Section>

      <Section id="vision-mission" title="Vision & Mission">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-2xl font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To become a trusted international consultancy partner, recognized for delivering
              professional services and dependable advisory across global markets.
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

      <Section id="ceo-message" title="CEO Message">
        <article className="rounded-2xl border border-border bg-surface p-6 md:p-8">
          <p className="text-base leading-8 text-muted-foreground">
            At Eaglewise Business Consultancy LLC-FZ, our vision is to create a company that delivers
            professional business services while building strong and lasting partnerships across
            international markets.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            We are committed to integrity, transparency, and professionalism as we expand our
            advisory network and strengthen our presence in regional and international markets.
          </p>
          <p className="mt-5 text-sm font-semibold text-foreground">Mr. Nauroz Khan Naseri</p>
        </article>
      </Section>

      <Section id="company-values" title="Company Values">
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
        id="about-cta"
        title="Let us align finance and strategy with execution"
        description="Discuss your advisory needs with a team focused on measurable outcomes and clear communication."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="View Services"
        secondaryHref="/professional/services"
      />
    </SiteShell>
  );
}
