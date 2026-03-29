import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-36 py-16 md:py-20">
      <div className="container-shell">
        <div className="mb-8 md:mb-10">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
