"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CtaStrip } from "@/components/cta-strip";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { ChevronDown, HelpCircle } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const faqs = [
  {
    question: "Which professional services does Eaglewise provide?",
    answer:
      "We provide preparation and auditing of financial accounts, accounting and bookkeeping, internal audit, tax consultancy, investment analysis, marketing and PR consultancy, corporate communication, business advisory, project management, and business development consultancy.",
  },
  {
    question: "Do you work with UAE companies only?",
    answer:
      "Our consultancy engagements are structured for businesses operating in the UAE and international markets, depending on scope and regulatory context.",
  },
  {
    question: "Can you support both compliance and growth advisory?",
    answer:
      "Yes. Many clients combine finance and tax compliance support with business advisory and project management for clearer execution.",
  },
  {
    question: "How do you price consultancy engagements?",
    answer:
      "Scope is agreed after discovery. Share your objectives via the contact page and we will propose a practical structure.",
  },
  {
    question: "How can we start working with Eaglewise?",
    answer:
      "Use the professional services contact form with your company profile and priority outcomes. Our team will respond with next steps.",
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      variants={fadeInUp}
      className="eagle-card overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 p-6 text-left transition hover:bg-surface-alt/50 md:p-7"
        aria-expanded={open}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
          <HelpCircle className="h-4 w-4" />
        </span>
        <h3 className="flex-1 text-lg font-semibold">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/40 px-6 pb-6 pt-4 md:px-7 md:pb-7">
              <p className="text-sm leading-7 text-muted-foreground">{answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ProfessionalFaqPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/home-office-dubai.jpg"
        imageAlt="Professional workspace in Dubai"
        eyebrow="FAQ · Professional Services"
        title="Answers before you reach out"
        subtitle="Quick clarity on how we work, who we serve, and how engagements are structured."
      />

      <section id="faq-list" className="scroll-mt-36 bg-white py-14 md:py-20">
        <div className="container-shell">
          <div className="grid items-start gap-10 lg:grid-cols-5">
            {/* FAQ column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">Topics</p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Common questions about our advisory work
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  If you need detail specific to your company, we can respond with a tailored outline.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={stagger}
                className="space-y-4 md:space-y-5"
              >
                {faqs.map((item, idx) => (
                  <FaqItem key={item.question} question={item.question} answer={item.answer} index={idx} />
                ))}
              </motion.div>
            </div>

            {/* Side image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="hidden lg:col-span-2 lg:block"
            >
              <div className="sticky top-36 overflow-hidden rounded-3xl">
                <Image
                  src="/professional-team.jpg"
                  alt="Professional advisory team"
                  width={600}
                  height={800}
                  className="h-[480px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB8B2E]">Need more detail?</p>
                  <p className="mt-1 text-sm font-medium text-white">Our team responds within 24 hours.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaStrip
        id="faq-cta"
        title="Have a specific question?"
        description="Speak with Eaglewise directly about reporting, tax, or advisory priorities for your leadership team."
        primaryLabel="Contact Us"
        primaryHref="/professional/contact"
        secondaryLabel="About Us"
        secondaryHref="/professional/about"
      />
    </SiteShell>
  );
}
