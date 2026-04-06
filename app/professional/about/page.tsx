import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { ShieldCheck, Trophy, Handshake, Lightbulb, Users, Compass, ClipboardList } from "lucide-react";

const values = [
  {
    title: "Integrity",
    Icon: ShieldCheck,
    description: "We conduct our business with honesty, transparency, and accountability.",
  },
  {
    title: "Quality",
    Icon: Trophy,
    description: "We ensure that products and services meet high professional standards.",
  },
  {
    title: "Partnership",
    Icon: Handshake,
    description: "We build long-term relationships with clients, partners, and suppliers.",
  },
  {
    title: "Innovation",
    Icon: Lightbulb,
    description: "We explore new opportunities and technologies to improve how we operate.",
  },
  {
    title: "Customer Focus",
    Icon: Users,
    description: "Customer satisfaction is at the center of everything we do.",
  },
];

const missionPoints = [
  "Provide high-quality goods and professional services",
  "Build long-term strategic partnerships with global companies",
  "Expand trading operations across regional and international markets",
  "Support businesses through reliable consultancy and advisory services",
  "Develop and promote our own registered brands",
];

export default function ProfessionalAboutPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/professional-team.jpg"
        imageAlt="Professional team collaboration in the UAE"
        eyebrow="About · Professional Services"
        title="Who we are"
        subtitle="Eaglewise Business Consultancy LLC-FZ provides professional services to businesses in the UAE and international markets, with integrity, transparency, and a focus on sustainable growth."
      />

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section
        id="about-overview"
        className="bg-white"
        eyebrow="Overview"
        title="UAE-based consultancy with a clear mandate"
        description="Established in March 2025, Eaglewise Business Consultancy LLC-FZ combines general trading, e-commerce, and professional consultancy under one UAE-registered group."
      >
        <div className="glass-card-light rounded-3xl p-7 md:p-10">
          <p className="text-base leading-8 text-muted-foreground">
            The company was formed to bridge opportunities between international suppliers and regional markets,
            particularly across the Middle East and Central Asia. Through strategic partnerships and professional
            expertise, we aim to deliver value-driven solutions. Our consultancy services include preparation and
            auditing of financial accounts, accounting and bookkeeping, internal audit, tax and compliance advisory,
            investment analysis and financial planning, marketing and PR, corporate communication, business advisory,
            project management, and business development. We have supported UAE companies including Skylink and
            Shanzer, with an approach centred on efficient solutions, financial transparency, and sustainable growth.
          </p>
        </div>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section id="vision-mission" className="bg-neutral-50/80" title="Vision & Mission">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <article className="glass-card-light card-3d-hover card-stripe-teal-purple p-6 md:p-7">
            <div className="mb-3 flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#C9873B]" />
              <h3 className="text-2xl font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To become a trusted international trading and consultancy company, recognized for delivering quality
              products and professional services across global markets.
            </p>
          </article>

          <article className="glass-card-light card-3d-hover card-stripe-amber-rose p-6 md:p-7">
            <div className="mb-3 flex items-center gap-3">
              <ClipboardList className="h-5 w-5 text-[#C9873B]" />
              <h3 className="text-2xl font-semibold">Mission</h3>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              {missionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section id="ceo-message" className="bg-white" title="CEO Message">
        <article className="eagle-card gradient-border p-6 md:p-8">
          <p className="text-base leading-8 text-muted-foreground">
            At Eaglewise Business Consultancy LLC-FZ, our vision is to create a company that delivers both high-quality
            products and professional business services while building strong and lasting partnerships across
            international markets.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Since our establishment in March 2025, we have focused on a diversified business model that combines
            international trading, digital commerce, and professional consultancy. Our goal is not only to conduct
            business but also to contribute to the growth and development of the markets in which we operate.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            We are committed to the highest standards of integrity, transparency, and professionalism. As we grow, we
            aim to expand our network, develop our own brands, and strengthen our presence in regional and international
            markets.
          </p>
          <p className="mt-5 text-sm font-semibold text-foreground">Mr. Nauroz Khan Naseri</p>
        </article>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section id="company-values" className="relative overflow-hidden bg-neutral-50/80" title="Company Values">
        <div className="pointer-events-none absolute -top-20 -right-20 z-0">
          <div className="orb orb-teal w-[300px] h-[300px]" />
        </div>
        <div className="pointer-events-none absolute bottom-0 -left-20 z-0">
          <div className="orb orb-purple w-[250px] h-[250px]" style={{ animationDelay: "4s" }} />
        </div>
        <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(({ title, Icon, description }, idx) => (
            <article key={title} className={`glass-card-light card-3d-hover ${["card-stripe-teal-purple","card-stripe-amber-rose","card-stripe-emerald-teal"][idx % 3]} p-5 md:p-6`}>
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-[#C9873B]" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <CtaStrip
        id="about-cta"
        title="Discuss professional services with Eaglewise"
        description="Share your objectives for accounting, tax, audit, or advisory support. We will respond with a practical next step."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="View Services"
        secondaryHref="/professional/services"
      />
    </SiteShell>
  );
}
