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
    question: "What trading activities does Eaglewise focus on?",
    answer:
      "We focus on general trading and wholesale distribution, plus e-commerce operations across Amazon, Noon, and Shopify for selected consumer categories.",
  },
  {
    question: "Which suppliers and product lines do you work with?",
    answer:
      "We have sourced and traded products from suppliers including Beauty Vision (Kera Look cosmetics), My Perfume, and Efolia, exporting to Afghanistan through our distribution partner.",
  },
  {
    question: "How does distribution work in Afghanistan?",
    answer:
      "Khan Naseri Trading Company manages wholesale distribution across all 34 provinces, supporting logistics and market coverage.",
  },
  {
    question: "Can Eaglewise support marketplace growth?",
    answer:
      "Yes. We focus on expanding product availability online, developing private brands, and strengthening digital presence alongside wholesale routes.",
  },
  {
    question: "How do we start a partnership discussion?",
    answer:
      "Use the trading contact page with your company profile, categories, and target markets. Our team will respond with practical next steps.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article variants={fadeInUp} className="eagle-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 p-6 text-left transition hover:bg-surface-alt/50 md:p-7"
        aria-expanded={open}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
          <HelpCircle className="h-4 w-4" />
        </span>
        <h3 className="flex-1 text-lg font-bold tracking-tight">{question}</h3>
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
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

export default function TradingFaqPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/hero-handshake-style.jpg"
          imageAlt="Business partnership discussion"
          imagePositionClassName="object-[center_30%] sm:object-[center_25%]"
          eyebrow="FAQ · Trading & Partners"
          title="Trading questions, answered"
          subtitle="Suppliers, distribution, and marketplaces—quick context before you get in touch."
        />

        <section id="faq-list" className="scroll-mt-36 bg-white py-14 md:py-20">
          <div className="container-shell">
            <div className="grid items-start gap-10 lg:grid-cols-5">
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
                    Common questions from suppliers and distributors
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    Need something specific? Contact us and we will tailor the answer to your scenario.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={stagger}
                  className="space-y-4 md:space-y-5"
                >
                  {faqs.map((item) => (
                    <FaqItem key={item.question} question={item.question} answer={item.answer} />
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="hidden lg:col-span-2 lg:block"
              >
                <div className="sticky top-36 overflow-hidden rounded-3xl">
                  <Image
                    src="/trading/split-team.jpg"
                    alt="Trading team discussion"
                    width={600}
                    height={800}
                    className="h-[480px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB8B2E]">Have a question?</p>
                    <p className="mt-1 text-sm font-medium text-white">Our trading team is ready to help.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CtaStrip
          id="faq-cta"
          title="Still exploring fit?"
          description="Tell us about your supply chain, volumes, or marketplace goals and we will guide you to the right conversation."
          primaryLabel="Contact us"
          primaryHref="/trading/contact"
          secondaryLabel="Product catalogue"
          secondaryHref="/trading/products"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Business discussion"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
