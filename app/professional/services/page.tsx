"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const serviceCards = [
  { title: "Preparation and auditing of financial accounts", Icon: FileText, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Accounting and bookkeeping services", Icon: Calculator, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Internal audit services", Icon: ShieldCheck, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Tax consultancy and compliance advisory", Icon: Percent, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Investment analysis and financial planning", Icon: BarChart3, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Marketing and public relations consultancy", Icon: Megaphone, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Corporate communication consultancy", Icon: Users, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Business advisory services", Icon: Briefcase, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Project management", Icon: ClipboardList, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
  { title: "Business development consultancy", Icon: Rocket, color: "from-[#EB8B2E]/15 to-[#EB8B2E]/5" },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We understand your business needs, reporting obligations, and growth targets.",
    image: "/home-office-dubai.jpg",
  },
  {
    num: "02",
    title: "Structured plan",
    desc: "We define practical, measurable steps and support implementation with your team.",
    image: "/professional-conference.jpg",
  },
  {
    num: "03",
    title: "Ongoing support",
    desc: "We help maintain progress with follow-up advisory and performance reviews.",
    image: "/uae-presence-team.jpg",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/home-office-team.jpg"
        imageAlt="Advisory and consultancy workspace"
        eyebrow="Professional Services"
        title="What we deliver"
        subtitle="Practical accounting, tax, audit, and advisory scopes—structured for UAE and cross-border operators."
      />

      <Section
        id="professional-services"
        className="bg-white"
        eyebrow="Service catalogue"
        title="Consultancy support built for results"
        description="We provide practical services for companies in the UAE and international markets, focused on efficiency, compliance, and sustainable growth."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-2 md:gap-6"
        >
          {serviceCards.map(({ title, Icon, color }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              className="group eagle-card relative overflow-hidden p-6 md:p-7"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2.5]" />
              <div className="relative flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-[#EB8B2E] ring-1 ring-[#EB8B2E]/10 transition-all group-hover:ring-[#EB8B2E]/25`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="mt-3 flex items-center text-sm font-semibold text-[#EB8B2E] opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* How we work — with images */}
      <section id="how-we-work" className="scroll-mt-36 animated-bg py-14 md:py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">Process</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">How we work</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Our engagements are structured to provide clarity from day one while remaining flexible to your operating context.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {steps.map((step) => (
              <motion.article
                key={step.num}
                variants={fadeInUp}
                className="group eagle-card relative overflow-hidden"
              >
                <div className="h-[180px] overflow-hidden md:h-[200px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                </div>
                <div className="relative p-6 md:p-7">
                  <span className="text-gradient text-3xl font-bold">{step.num}</span>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip
        id="request-consultation"
        title="Need a tailored consultancy package?"
        description="Share your current challenge and we will recommend the right service scope."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="About Eaglewise"
        secondaryHref="/professional/about"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Executive meeting"
        fullWidth
        bottomRoundedOnly
      />
    </SiteShell>
  );
}
