"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { ShieldCheck, Trophy, Handshake, Lightbulb, Users, Compass, ClipboardList } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const values = [
  { title: "Integrity", Icon: ShieldCheck, desc: "Transparent practices and honest counsel in every engagement." },
  { title: "Quality", Icon: Trophy, desc: "Precise, reliable delivery across every advisory scope." },
  { title: "Partnership", Icon: Handshake, desc: "Long-term relationships built on shared outcomes." },
  { title: "Innovation", Icon: Lightbulb, desc: "Modern approaches to traditional consultancy challenges." },
  { title: "Customer Focus", Icon: Users, desc: "Client needs shape every recommendation we make." },
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
      <SubpageHero
        variant="professional"
        imageSrc="/professional-team.jpg"
        imageAlt="Professional team collaboration in the UAE"
        eyebrow="About · Professional Services"
        title="Who we are"
        subtitle="A UAE consultancy focused on clarity, compliance, and execution—not generic advice."
      />

      {/* Overview with image */}
      <Section
        id="about-overview"
        className="bg-white"
        eyebrow="Overview"
        title="A UAE consultancy focused on clarity and execution"
        description="Eaglewise Business Consultancy LLC-FZ was established in March 2025 to provide professional services to businesses in the UAE and international markets."
      >
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
          <div className="eagle-card gradient-accent rounded-3xl p-7 md:p-10">
            <p className="text-base leading-8 text-muted-foreground">
              In this professional services experience, we emphasize accounting, audit, tax, investment
              planning, marketing and corporate communication advisory, project management, and business
              development—always with integrity, transparency, and a practical communication style.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/uae-presence-regional.jpg"
              alt="Professional presence in the UAE"
              width={800}
              height={533}
              className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[320px]"
            />
          </div>
        </div>
      </Section>

      {/* Vision & Mission with gradient backgrounds */}
      <section id="vision-mission" className="scroll-mt-36 bg-neutral-50/80 py-14 md:py-20">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-8 md:mb-11"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Vision & Mission
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-2 md:gap-6"
          >
            <motion.article variants={fadeInUp} className="eagle-card relative overflow-hidden p-6 md:p-7">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#EB8B2E]/8 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E] pulse-ring">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold">Vision</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  To become a trusted international consultancy partner, recognized for delivering
                  professional services and dependable advisory across global markets.
                </p>
              </div>
            </motion.article>

            <motion.article variants={fadeInUp} className="eagle-card relative overflow-hidden p-6 md:p-7">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#EB8B2E]/8 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E] pulse-ring">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold">Mission</h3>
                </div>
                <ul className="mt-3 space-y-2.5 text-sm leading-7 text-muted-foreground">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EB8B2E]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* CEO Message with image */}
      <section id="ceo-message" className="scroll-mt-36 bg-white py-14 md:py-20">
        <div className="container-shell">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-3xl font-bold tracking-tight text-foreground md:mb-11 md:text-4xl"
          >
            CEO Message
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-6 md:grid-cols-5 md:gap-10"
          >
            <div className="overflow-hidden rounded-3xl md:col-span-2">
              <Image
                src="/professional-conference.jpg"
                alt="Corporate leadership"
                width={800}
                height={600}
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-full"
              />
            </div>
            <article className="eagle-card p-6 md:col-span-3 md:p-8">
              <div className="mb-4 h-1 w-12 rounded bg-gradient-to-r from-[#EB8B2E] to-[#f5b066]" />
              <p className="text-base leading-8 text-muted-foreground">
                At Eaglewise Business Consultancy LLC-FZ, our vision is to create a company that delivers
                professional business services while building strong and lasting partnerships across
                international markets.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We are committed to integrity, transparency, and professionalism as we expand our
                advisory network and strengthen our presence in regional and international markets.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#EB8B2E] to-[#d97a22]" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Mr. Nauroz Khan Naseri</p>
                  <p className="text-xs text-muted-foreground">Chief Executive Officer</p>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* Company Values — rich cards with descriptions */}
      <section id="company-values" className="scroll-mt-36 animated-bg py-14 md:py-20">
        <div className="container-shell">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-3xl font-bold tracking-tight text-foreground md:mb-11 md:text-4xl"
          >
            Company Values
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {values.map(({ title, Icon, desc }) => (
              <motion.article
                key={title}
                variants={fadeInUp}
                className="group eagle-card relative overflow-hidden p-5 md:p-6"
              >
                <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-[#EB8B2E]/5 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E] transition-colors group-hover:bg-[#EB8B2E] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip
        id="about-cta"
        title="Let us align finance and strategy with execution"
        description="Discuss your advisory needs with a team focused on measurable outcomes and clear communication."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="View Services"
        secondaryHref="/professional/services"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Executive consultation meeting"
        fullWidth
        bottomRoundedOnly
      />
    </SiteShell>
  );
}
