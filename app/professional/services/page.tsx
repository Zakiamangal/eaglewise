import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Financial & Tax Advisory",
    description: "Rigorous accounting, audit, and tax frameworks that keep your business compliant, transparent, and financially optimized.",
    services: [
      { title: "Financial Accounts & Audit", desc: "Accurate statements and audit-ready files for stakeholders and regulators.", Icon: FileText },
      { title: "Accounting & Bookkeeping", desc: "Reliable monthly bookkeeping, reconciliations, and structured reporting.", Icon: Calculator },
      { title: "Internal Audit Services", desc: "Risk-focused control reviews to improve operational integrity and confidence.", Icon: ShieldCheck },
      { title: "Tax & Compliance Advisory", desc: "Clear tax planning and compliance guidance aligned with UAE obligations.", Icon: Percent },
      { title: "Investment & Financial Planning", desc: "Data-backed financial planning frameworks for capital allocation and growth.", Icon: BarChart3 },
    ]
  },
  {
    category: "Strategy & Operations",
    description: "Practical advisory services that bridge the gap between high-level strategy and ground-level execution.",
    services: [
      { title: "Business Advisory Services", desc: "Practical guidance for operations, governance, and market execution.", Icon: Briefcase },
      { title: "Project Management", desc: "Structured planning, timeline control, and delivery oversight for complex initiatives.", Icon: ClipboardList },
      { title: "Business Development", desc: "Market-entry and expansion support with measurable commercial milestones.", Icon: Rocket },
    ]
  },
  {
    category: "Corporate Communications",
    description: "Positioning and communication systems that align your brand with your business objectives and stakeholders.",
    services: [
      { title: "Marketing & PR Consultancy", desc: "Positioning, communications planning, and brand visibility strategies.", Icon: Megaphone },
      { title: "Corporate Communication", desc: "Communication systems that align internal teams, partners, and external audiences.", Icon: Users },
    ]
  }
];

export default function ProfessionalServicesPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/professional-conference.jpg"
        imageAlt="Advisory and consultancy workspace"
        imagePositionClassName="object-[center_30%]"
        eyebrow="Professional Services"
        title="Professional services built for real operations"
        subtitle="Accounting, audit, tax, and advisory services for businesses in the UAE and international markets."
      />

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <Section
        id="professional-services"
        className="bg-white pb-20 pt-16 md:pb-32 md:pt-24"
        eyebrow="Service catalogue"
        title="Professional services by category"
        description="Browse the full scope of consultancy lines we deliver for UAE and international clients."
      >
        <div className="space-y-20 md:space-y-32">
          {serviceCategories.map((cat, i) => (
            <div key={i} className="grid items-start gap-8 md:grid-cols-12 md:gap-12 lg:gap-16">
              <div className="md:sticky md:top-32 md:col-span-5 lg:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{cat.category}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {cat.description}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:col-span-7 lg:col-span-8 md:gap-6">
                {cat.services.map((srv) => (
                  <article
                    key={srv.title}
                    className="glass-card-light card-3d-hover group rounded-3xl p-6 transition-all md:p-8"
                  >
                    <srv.Icon className="mb-5 h-6 w-6 text-[#C9873B] transition-transform group-hover:scale-110" />
                    <h3 className="text-lg font-semibold leading-snug">{srv.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {srv.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <section className="border-t border-border/40 bg-neutral-50/50 py-16 md:py-24">
        <div className="container-shell">
          <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:sticky md:top-32 md:col-span-5 lg:col-span-4">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C9873B]">Our Methodology</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A disciplined approach to engagement</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Our engagements are structured to provide clarity from day one, with practical deliverables and measurable progress checkpoints.
              </p>
              <Link
                href="/professional/contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="space-y-5 md:col-span-7 lg:col-span-8">
              {[
                { step: "01", title: "Discovery & Alignment", desc: "We begin by mapping your current operational reality, immediate pain points, and long-term objectives to ensure our scope is perfectly aligned." },
                { step: "02", title: "Service Scope & Plan", desc: "We define scope, responsibilities, and timelines across accounting, compliance, and advisory workstreams." },
                { step: "03", title: "Implementation Support", desc: "We support execution with regular follow-up, clear reporting, and practical adjustments when needed." }
              ].map((item, i) => (
                <div key={i} className="glass-card-light card-3d-hover flex flex-col gap-5 rounded-3xl p-7 sm:flex-row md:p-9">
                  <div className="text-3xl font-light text-muted-foreground/30 md:text-4xl">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Divider */}
        <div className="container-shell py-2"><div className="section-divider-gradient" /></div>

      <CtaStrip
        id="request-consultation"
        title="Need support on finance, tax, or business advisory?"
        description="Share your business context and priorities. Our team will propose a practical service scope."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="About Eaglewise"
        secondaryHref="/professional/about"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Consultants discussing strategy with clients"
      />
    </SiteShell>
  );
}
