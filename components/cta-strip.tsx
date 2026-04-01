import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

type CtaStripProps = {
  id?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  fullWidth?: boolean;
  bottomRoundedOnly?: boolean;
};

export function CtaStrip({
  id,
  title,
  description,
  primaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
  imageSrc,
  imageAlt = "CTA visual",
  fullWidth = false,
  bottomRoundedOnly = false,
}: CtaStripProps) {
  const radiusClass = bottomRoundedOnly ? "rounded-b-[52px]" : "rounded-[2rem]";

  return (
    <section id={id} className="scroll-mt-28 py-12 md:py-18">
      <div className={fullWidth ? "" : "container-shell"}>
        <div
          className={`relative overflow-hidden border border-[#EB8B2E]/25 bg-secondary text-secondary-foreground ${radiusClass} ${
            imageSrc ? "grid gap-0 md:min-h-[min(520px,56vh)] md:grid-cols-12" : "px-6 py-10 md:px-10 md:py-12"
          }`}
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#EB8B2E]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-16 h-56 w-56 rounded-full bg-[#EB8B2E]/8 blur-3xl" />

          {imageSrc ? (
            <div className="relative aspect-[5/4] min-h-[280px] w-full md:col-span-7 md:aspect-auto md:min-h-[min(100%,520px)] md:h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent md:hidden" />
            </div>
          ) : null}

          <div
            className={`relative z-10 ${
              imageSrc
                ? "px-6 py-10 md:col-span-5 md:flex md:flex-col md:justify-center md:px-10 md:py-12"
                : ""
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#EB8B2E] w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              Let&apos;s Build Together
            </span>

            <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">{title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-secondary-foreground/80">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="shimmer-btn group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border border-secondary-foreground/30 px-6 py-3 text-sm font-semibold transition hover:bg-secondary-foreground/10"
            >
              {secondaryLabel}
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
