"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { getSiteMode, modeConfig, navMenusByMode } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const mode = getSiteMode(pathname);
  const cfg = modeConfig[mode];
  const navMenus = navMenusByMode[mode];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** Which top-level nav href has its submenu open in the mobile drawer (accordion). */
  const [mobileExpandedHref, setMobileExpandedHref] = useState<string | null>(null);

  useEffect(() => {
    // Close overlay when the URL changes (e.g. browser back) without requiring a link click.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- drawer must reset on navigation
    setMobileOpen(false);
    setMobileExpandedHref(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // check initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpandedHref(null);
  };

  const toggleMobileSubmenu = (href: string) => {
    setMobileExpandedHref((current) => (current === href ? null : href));
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-border/70 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-white"}`}>
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-3 py-2">
        <Link href={cfg.homeHref} className="min-w-0 shrink leading-none">
          <Image
            src="/ebc-logo.png"
            alt="Eaglewise Business Consultancy"
            width={1587}
            height={414}
            className="h-[40px] w-auto max-w-[min(160px,42vw)] object-contain sm:h-[44px] sm:max-w-[190px] md:h-[52px]"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 lg:flex" aria-label="Main">
          {cfg.navLinks.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const menuItems = navMenus[item.href] ?? [];

            if (menuItems.length > 0) {
              return (
                <div key={item.href} className="group relative py-2">
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium leading-none transition ${
                      isActive
                        ? "!border-[#EB8B2E]/25 !bg-[#EB8B2E]/10 !font-semibold !text-[#EB8B2E] backdrop-blur"
                        : "border-transparent text-foreground/85 hover:bg-surface-alt hover:text-foreground"
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
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium leading-none transition ${
                  isActive
                    ? "!border-[#EB8B2E]/25 !bg-[#EB8B2E]/10 !font-semibold !text-[#EB8B2E] backdrop-blur"
                    : "border-transparent text-foreground/85 hover:bg-surface-alt hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={cfg.secondaryCta.href}
            className="hidden rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-alt md:inline-flex"
          >
            {cfg.secondaryCta.label}
          </Link>
          <Link
            href={cfg.primaryCta.href}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-95 lg:inline-flex lg:items-center lg:justify-center"
          >
            {cfg.primaryCta.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:bg-surface-alt lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-[0_0_40px_rgba(7,13,26,0.15)]">
            <div className="flex items-center justify-between border-b border-border/80 px-4 py-4">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#EB8B2E]">Menu</p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-surface-alt"
                aria-label="Close menu"
                onClick={closeMobile}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              id="mobile-navigation"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4"
              aria-label="Main"
            >
              <div className="flex flex-col gap-1">
                {cfg.navLinks.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  const menuItems = navMenus[item.href] ?? [];
                  const hasSubmenu = menuItems.length > 0;
                  const expanded = mobileExpandedHref === item.href;

                  return (
                    <div key={item.href} className="border-b border-border/60 py-2 last:border-b-0">
                      {hasSubmenu ? (
                        <>
                          <div className="flex min-h-[44px] items-stretch gap-1">
                            <Link
                              href={item.href}
                              onClick={closeMobile}
                              className={`flex flex-1 items-center py-2 text-base font-semibold tracking-tight ${
                                isActive ? "text-[#EB8B2E]" : "text-foreground"
                              }`}
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              className="inline-flex w-11 shrink-0 items-center justify-center rounded-lg text-foreground transition hover:bg-surface-alt"
                              aria-expanded={expanded}
                              aria-controls={`mobile-submenu-${item.href.replace(/\//g, "-")}`}
                              id={`mobile-menu-trigger-${item.href.replace(/\//g, "-")}`}
                              aria-label={expanded ? `Collapse ${item.label} submenu` : `Expand ${item.label} submenu`}
                              onClick={() => toggleMobileSubmenu(item.href)}
                            >
                              <ChevronDown
                                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                                  expanded ? "rotate-180" : ""
                                }`}
                                aria-hidden
                              />
                            </button>
                          </div>
                          {expanded ? (
                            <div
                              id={`mobile-submenu-${item.href.replace(/\//g, "-")}`}
                              role="region"
                              aria-labelledby={`mobile-menu-trigger-${item.href.replace(/\//g, "-")}`}
                              className="mt-1 flex flex-col gap-2 border-l-2 border-[#EB8B2E]/25 pl-3"
                            >
                              {menuItems.map((menuItem) => (
                                <Link
                                  key={`${item.href}-${menuItem.href}-${menuItem.label}`}
                                  href={menuItem.href}
                                  onClick={closeMobile}
                                  className="block rounded-lg py-2 pl-2 pr-1 transition hover:bg-surface-alt"
                                >
                                  <span className="text-sm font-medium text-foreground">{menuItem.label}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                    {menuItem.description}
                                  </span>
                                </Link>
                              ))}
                              <Link
                                href={item.href}
                                onClick={closeMobile}
                                className="inline-flex items-center gap-1 py-2 pl-2 text-sm font-semibold text-[#EB8B2E]"
                              >
                                View all {item.label}
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          ) : null}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className={`flex min-h-[44px] items-center py-2 text-base font-semibold tracking-tight ${
                            isActive ? "text-[#EB8B2E]" : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-border/80 bg-neutral-50/80 p-4">
              <Link
                href={cfg.secondaryCta.href}
                onClick={closeMobile}
                className="mb-3 flex w-full items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-alt"
              >
                {cfg.secondaryCta.label}
              </Link>
              <Link
                href={cfg.primaryCta.href}
                onClick={closeMobile}
                className="flex w-full items-center justify-center rounded-full bg-[#EB8B2E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d97a22]"
              >
                {cfg.primaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
