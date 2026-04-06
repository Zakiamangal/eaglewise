"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSiteMode, modeConfig, type SiteMode } from "@/lib/site";

const modes: SiteMode[] = ["professional", "trading"];

const modeAccents: Record<SiteMode, {
  gradient: string;
  glow: string;
  text: string;
  border: string;
  hoverBg: string;
}> = {
  professional: {
    gradient: "linear-gradient(135deg, var(--accent-teal), var(--accent-purple))",
    glow: "0 0 16px rgba(14, 165, 233, 0.25), 0 0 8px rgba(139, 92, 246, 0.15)",
    text: "text-accent-teal",
    border: "border-accent-teal/30",
    hoverBg: "hover:bg-accent-teal/8",
  },
  trading: {
    gradient: "linear-gradient(135deg, var(--accent-amber), var(--accent-rose))",
    glow: "0 0 16px rgba(245, 158, 11, 0.25), 0 0 8px rgba(244, 63, 94, 0.15)",
    text: "text-accent-amber",
    border: "border-accent-amber/30",
    hoverBg: "hover:bg-accent-amber/8",
  },
};

export function ModeSwitcher() {
  const pathname = usePathname();
  const active = getSiteMode(pathname);

  return (
    <div className="border-b border-border bg-surface">
      <div className="container-shell flex h-9 items-center sm:h-10">
        <nav className="inline-flex h-full items-center gap-1 sm:gap-2" aria-label="Site experience">
          {modes.map((id, index) => {
            const cfg = modeConfig[id];
            const isActive = active === id;
            const accent = modeAccents[id];

            return (
              <Fragment key={id}>
                {index > 0 ? (
                  <span
                    className="mx-1 h-3.5 w-px shrink-0 bg-border/60 sm:mx-2"
                    aria-hidden
                  />
                ) : null}
                <Link
                  href={cfg.homeHref}
                  className={`group relative flex items-center rounded-full px-3 py-1.5 text-[10.5px] font-bold uppercase leading-none tracking-[0.1em] antialiased transition-all duration-300 sm:px-4 sm:py-2 sm:text-[11.5px] sm:tracking-[0.12em] ${
                    isActive
                      ? `border ${accent.border} ${accent.text}`
                      : `border border-transparent text-foreground/70 ${accent.hoverBg} hover:text-foreground hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(7,13,26,0.08)]`
                  }`}
                  style={isActive ? {
                    background: "var(--surface)",
                    boxShadow: accent.glow,
                  } : undefined}
                >
                  {isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-[5px] mx-auto h-[3px] w-3/4 rounded-full sm:h-[3.5px]"
                      style={{ background: accent.gradient }}
                      aria-hidden
                    />
                  )}
                  <span className="relative z-[1]">{cfg.tabLabel}</span>
                </Link>
              </Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
