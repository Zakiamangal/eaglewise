import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { khanNaseriImages, khanNaseriLinkedInUrl } from "@/lib/khan-naseri-trading";

export function KhanNaseriShowcase() {
  return (
    <section
      id="khan-naseri-showcase"
      className="scroll-mt-36 bg-gradient-to-b from-neutral-50/90 to-white py-16 md:py-24"
    >
      <div className="container-shell">
        <div className="mb-10 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9873B] md:text-xs">
            Regional partner · Afghanistan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Khan Naseri Trading Company — in-market brands & distribution
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Our corporate profile routes UAE-sourced goods through{" "}
            <strong className="font-semibold text-foreground">Khan Naseri Trading Company</strong> for wholesale
            distribution across all 34 provinces of Afghanistan. Their team operates import and export trading, acts as
            a distribution agent for brands such as{" "}
            <strong className="font-semibold text-foreground">Forvil Cosmetics</strong> and{" "}
            <strong className="font-semibold text-foreground">Herbal Bio Amla</strong>, and promotes the same supplier
            lines we reference — including <strong className="font-semibold text-foreground">KERA LOOK</strong> (Beauty
            Vision), <strong className="font-semibold text-foreground">Efolia</strong>, and{" "}
            <strong className="font-semibold text-foreground">My Perfume</strong> / fragrance lines — with wholesale
            and retail availability and nationwide delivery in Afghanistan.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Base:</span> Kabul, Afghanistan · International trade &
            development · Photos below are from the partner&apos;s public LinkedIn presence for reference.
          </p>
          <Link
            href={khanNaseriLinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9873B] transition hover:underline"
          >
            View Khan Naseri Trading Company on LinkedIn
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {khanNaseriImages.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(7,13,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,13,26,0.1)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="eager"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="px-3 py-2.5 text-xs font-medium leading-snug text-muted-foreground md:text-[13px]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground md:text-sm">
          For orders or partner enquiries in Afghanistan, use the contact details published by Khan Naseri Trading
          Company on their official channels. For Eaglewise UAE trading or sourcing, use{" "}
          <Link href="/trading/contact" className="font-semibold text-[#C9873B] underline-offset-2 hover:underline">
            our trading contact form
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
