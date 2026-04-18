"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { companyInfo, getSiteMode, modeConfig } from "@/lib/site";
import { motion } from "framer-motion";

const columnVariants = {
  hidden: (custom: { x?: number; y?: number }) => ({
    opacity: 0,
    ...custom,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function SiteFooter() {
  const pathname = usePathname();
  const mode = getSiteMode(pathname);
  const cfg = modeConfig[mode];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated dark mesh background */}
      <div className="hero-mesh-bg absolute inset-0" />

      {/* Rainbow gradient divider at top */}
      <div className="section-divider-gradient absolute left-0 right-0 top-0" />

      {/* Floating blurred orbs */}
      <div className="orb orb-teal absolute -left-20 top-10 h-72 w-72" />
      <div className="orb orb-purple absolute -right-16 top-1/2 h-64 w-64" />
      <div className="orb orb-amber absolute bottom-10 left-1/3 h-56 w-56" />

      {/* Content */}
      <div className="container-shell relative z-10 grid gap-10 py-16 md:grid-cols-3 md:py-20">
        {/* Column 1 — Company info, slides from left — teal-purple stripe */}
        <motion.div
          className="card-stripe-teal-purple relative overflow-hidden rounded-2xl pt-2"
          custom={{ x: -60 }}
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-xl bg-white/95 px-3 py-2 shadow-sm ring-1 ring-black/5">
            <Image
              src="/ebc-logo.png"
              alt="Eaglewise Business Consultancy"
              width={1587}
              height={414}
              className="h-[50px] w-auto object-contain"
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-white/80">{cfg.footerBlurb}</p>
          <Link
            href={cfg.footerCtaHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D9A562] transition hover:text-[#EFC07A]"
          >
            {cfg.footerCtaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Column 2 — Navigation, fades up — amber-rose stripe */}
        <motion.div
          className="card-stripe-amber-rose relative overflow-hidden rounded-2xl pt-2"
          custom={{ y: 24 }}
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A562]">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/90">
            <li>
              <Link
                href={cfg.homeHref}
                className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-[#D9A562]"
              >
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                Home
              </Link>
            </li>
            {cfg.navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-[#D9A562]"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 — Contact, slides from right — emerald-teal stripe */}
        <motion.div
          className="card-stripe-emerald-teal relative overflow-hidden rounded-2xl pt-2"
          custom={{ x: 60 }}
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.36 }}
        >
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A562]">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li className="group flex items-center gap-3">
              <Globe className="h-4 w-4 shrink-0 text-[#C9873B] transition group-hover:scale-110 group-hover:text-accent-teal" />
              <span>Location: {companyInfo.location}</span>
            </li>
            <li className="group flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#C9873B] transition group-hover:scale-110 group-hover:text-accent-teal" />
              <a href={`tel:${companyInfo.phoneTel}`} className="transition hover:text-[#D9A562]">
                Phone: {companyInfo.phone}
              </a>
            </li>
            <li className="group flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#C9873B] transition group-hover:scale-110 group-hover:text-accent-purple" />
              <a href={`mailto:${companyInfo.email}`} className="transition hover:text-[#D9A562]">
                Email: {companyInfo.email}
              </a>
            </li>
            <li className="group flex items-center gap-3">
              <Globe className="h-4 w-4 shrink-0 text-[#C9873B] transition group-hover:scale-110 group-hover:text-accent-amber" />
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#D9A562]"
              >
                Website: eaglewisebiz.com
              </a>
            </li>
            <li className="group flex items-center gap-3">
              <LinkedinIcon className="h-4 w-4 shrink-0 text-[#C9873B] transition group-hover:scale-110 group-hover:text-accent-teal" />
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#D9A562]"
              >
                LinkedIn
              </a>
            </li>
            <li className="group flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9873B] transition group-hover:scale-110 group-hover:text-accent-rose" />
              <span>Address: {companyInfo.address}</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright bar */}
      <motion.div
        className="relative z-10 border-t border-white/10 py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="container-shell text-xs tracking-wide text-white/60">
          Copyright {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
