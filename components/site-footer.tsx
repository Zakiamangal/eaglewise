"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { companyInfo, getSiteMode, modeConfig } from "@/lib/site";

export function SiteFooter() {
  const pathname = usePathname();
  const mode = getSiteMode(pathname);
  const cfg = modeConfig[mode];

  return (
    <footer className="mt-20 bg-secondary text-secondary-foreground">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-3 md:py-20">
        <div className="md:pr-6">
          <div className="inline-flex rounded-xl bg-white/95 px-3 py-2 shadow-sm ring-1 ring-black/5">
            <Image
              src="/ebc-logo.png"
              alt="Eaglewise Business Consultancy"
              width={1587}
              height={414}
              className="h-[50px] w-auto object-contain"
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-secondary-foreground/80">{cfg.footerBlurb}</p>
          <Link
            href={cfg.footerCtaHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#EB8B2E] transition hover:text-[#ff9e45]"
          >
            {cfg.footerCtaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground/75">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/90">
            <li>
              <Link
                href={cfg.homeHref}
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                Home
              </Link>
            </li>
            {cfg.navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 transition hover:text-primary">
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground/75">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/90">
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 shrink-0 text-[#EB8B2E]" />
              <span>Location: {companyInfo.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#EB8B2E]" />
              <a href={`tel:${companyInfo.phoneTel}`} className="transition hover:text-[#EB8B2E]">
                Phone: {companyInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#EB8B2E]" />
              <a href={`mailto:${companyInfo.email}`} className="transition hover:text-[#EB8B2E]">
                Email: {companyInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 shrink-0 text-[#EB8B2E]" />
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#EB8B2E]"
              >
                Website: eaglewisebiz.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LinkedinIcon className="h-4 w-4 shrink-0 text-[#EB8B2E]" />
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#EB8B2E]"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EB8B2E]" />
              <span>Address: {companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/15 py-5">
        <p className="container-shell text-xs tracking-wide text-secondary-foreground/70">
          Copyright {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
