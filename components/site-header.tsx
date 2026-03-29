"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getSiteMode, modeConfig, navMenusByMode } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const mode = getSiteMode(pathname);
  const cfg = modeConfig[mode];
  const navMenus = navMenusByMode[mode];

  return (
    <header className="border-b border-border/70 bg-white">
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-6 py-2">
        <Link href={cfg.homeHref} className="shrink-0 leading-none">
          <Image
            src="/ebc-logo.png"
            alt="Eaglewise Business Consultancy"
            width={1587}
            height={414}
            className="h-[44px] w-auto max-w-[190px] object-contain md:h-[52px]"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 lg:flex">
          {cfg.navLinks.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const menuItems = navMenus[item.href] ?? [];

            if (menuItems.length > 0) {
              return (
                <div key={item.href} className="group relative py-2">
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap leading-none rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "!bg-[#EB8B2E]/10 !text-[#EB8B2E] font-semibold backdrop-blur border border-[#EB8B2E]/25"
                        : "text-foreground/85 hover:bg-surface-alt hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>

                  <div className="absolute inset-x-0 top-full h-5" />

                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-2 rounded-[1.6rem] border border-border/60 bg-surface/95 p-6 opacity-0 shadow-[0_16px_40px_rgba(7,13,26,0.12)] backdrop-blur-sm transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xl font-semibold text-foreground">{item.label}</p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#EB8B2E]"
                      >
                        View all
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid gap-2">
                      {menuItems.map((menuItem) => (
                        <Link
                          key={`${item.href}-${menuItem.href}-${menuItem.label}`}
                          href={menuItem.href}
                          className="rounded-xl px-3 py-3 transition hover:bg-surface-alt"
                        >
                          <p className="text-sm font-semibold text-foreground">{menuItem.label}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{menuItem.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap leading-none rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "!bg-[#EB8B2E]/10 !text-[#EB8B2E] font-semibold backdrop-blur border border-[#EB8B2E]/25"
                    : "text-foreground/85 hover:bg-surface-alt hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cfg.secondaryCta.href}
            className="hidden rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-alt md:inline-flex"
          >
            {cfg.secondaryCta.label}
          </Link>
          <Link
            href={cfg.primaryCta.href}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
          >
            {cfg.primaryCta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
