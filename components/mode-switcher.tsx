"use client";

import { Fragment } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSiteMode, modeConfig, type SiteMode } from "@/lib/site";

const modes: SiteMode[] = ["professional", "trading"];

/** Capital utility bar: golden-bronze active text + underline */
const TAB_ACCENT = "#B38E66";

export function ModeSwitcher() {
  const pathname = usePathname();
  const active = getSiteMode(pathname);

  return (
    <div className="border-b border-border bg-surface">
      <div className="container-shell flex h-8 items-center sm:h-9">
        <nav className="inline-flex h-full items-center" aria-label="Site experience">
          {modes.map((id, index) => {
            const cfg = modeConfig[id];
            const isActive = active === id;
            const colorStyle: CSSProperties = isActive
              ? { color: TAB_ACCENT }
              : { color: "var(--foreground)" };

            return (
              <Fragment key={id}>
                {index > 0 ? (
                  <span
                    className="mx-3 h-3 w-px shrink-0 bg-border sm:mx-4"
                    aria-hidden
                  />
                ) : null}
                <Link
                  href={cfg.homeHref}
                  style={colorStyle}
                  className={`relative flex h-full items-center px-0.5 text-[11px] font-bold uppercase leading-none tracking-[0.08em] antialiased transition sm:text-[12px] sm:tracking-[0.1em] ${
                    isActive
                      ? "after:absolute after:-bottom-px after:-left-1 after:-right-1 after:z-0 after:h-[3px] after:rounded-[1px] after:bg-[#B38E66] after:content-[''] sm:after:h-[3.5px]"
                      : "hover:opacity-80"
                  } `}
                >
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
