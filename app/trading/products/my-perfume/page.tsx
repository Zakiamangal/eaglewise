import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { myPerfumeImages } from "@/lib/khan-naseri-trading";
import { ArrowLeft } from "lucide-react";

export default function MyPerfumePage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/khan-naseri-trading-co/34.jpg"
          imageAlt="My Perfume — premium fragrance collection"
          imagePositionClassName="object-[center_45%]"
          eyebrow="My Perfume"
          title="Fragrance and perfume products"
          subtitle="Explore our full range of fragrances — from oud and musk classics to modern eau de parfum lines, sourced and distributed through our regional network."
        />

        <Section
          id="perfume-collection"
          className="bg-white"
          eyebrow="Full collection"
          title="My Perfume — all fragrances"
          description="Premium fragrances including Arabiyat, Efolia, Al Faris, Smart Collection, and MPF lines — available for wholesale and retail distribution."
        >
          <div className="mb-8">
            <Link
              href="/trading/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C9873B] transition hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all products
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {myPerfumeImages.map((item) => (
              <figure
                key={item.src}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(7,13,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(7,13,26,0.1)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}
