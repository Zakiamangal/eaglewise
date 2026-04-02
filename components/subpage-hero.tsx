"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export type SubpageHeroProps = {
  variant: "professional" | "trading";
  imageSrc: string;
  imageAlt: string;
  /** Tailwind object-position helpers, e.g. `object-[center_25%]` */
  imagePositionClassName?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/**
 * Inner-page hero aligned with Professional / Trading home heroes: tall image band,
 * secondary scrim, optional mobile bottom gradient (trading), readable overlay title.
 */
export function SubpageHero({
  variant,
  imageSrc,
  imageAlt,
  imagePositionClassName = "object-[center_35%] sm:object-[center_30%]",
  eyebrow,
  title,
  subtitle,
}: SubpageHeroProps) {
  return (
    <section className="bg-white pb-0 pt-0 text-white">
      <div className="relative min-h-[min(52vh,460px)] w-full min-w-0 overflow-hidden rounded-b-[2rem] md:min-h-[min(48vh,520px)] md:rounded-b-[3rem]">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className={`object-cover ${imagePositionClassName}`}
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        {variant === "trading" ? (
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent md:hidden" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 via-transparent to-transparent md:hidden" />
        )}
        <div
          className={
            variant === "professional"
              ? "absolute inset-0 flex items-start"
              : "absolute inset-0 flex items-end md:items-center"
          }
        >
          <div
            className={
              variant === "professional"
                ? "container-shell w-full pb-10 pt-28 md:pb-16 md:pt-20"
                : "container-shell w-full pb-12 pt-28 md:pb-16 md:pt-24"
            }
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
            >
              <motion.p
                variants={fadeInUp}
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EB8B2E]"
              >
                {eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
              >
                {title}
              </motion.h1>
              {subtitle ? (
                <motion.p
                  variants={fadeInUp}
                  className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
                >
                  {subtitle}
                </motion.p>
              ) : null}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
