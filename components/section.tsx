"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Section wrapper — e.g. bg-white for stripe under hero */
  className?: string;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24, rotateX: 6 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerHeader: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-36 py-16 md:py-24 ${className ?? ""}`}>
      <div className="container-shell" style={{ perspective: "1000px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerHeader}
          className="mb-10 md:mb-14"
          style={{ transformStyle: "preserve-3d" }}
        >
          {eyebrow ? (
            <motion.p
              variants={fadeInUp}
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-[13px]"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-foreground md:text-[2.75rem] lg:text-5xl"
          >
            {title}
          </motion.h2>
          {description ? (
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-xl"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 4 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
