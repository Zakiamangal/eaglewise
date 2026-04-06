import type { ReactNode } from "react";
import { ModeSwitcher } from "@/components/mode-switcher";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <div className="sticky top-0 z-40">
        <ModeSwitcher />
        {/* Breathing room between utility bar and main nav (Capital-style) */}
        <div className="h-[3px] shrink-0 bg-surface md:h-1" aria-hidden />
        <SiteHeader />
      </div>
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <ThemeToggle />
    </>
  );
}
