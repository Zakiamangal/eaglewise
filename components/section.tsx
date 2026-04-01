import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Section wrapper — e.g. bg-white for stripe under hero */
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-36 py-14 md:py-20 ${className ?? ""}`}>
      <div className="container-shell">
        <div className="mb-8 md:mb-11">
          {eyebrow ? (
            <div className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">
                {eyebrow}
              </p>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-[#EB8B2E]/50" />
            </div>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
