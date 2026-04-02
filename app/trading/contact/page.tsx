import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { companyInfo } from "@/lib/site";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/linkedin-icon";

export default function TradingContactPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/hero-handshake-style.jpg"
          imageAlt="Business partners shaking hands in a professional setting"
          imagePositionClassName="object-[center_30%] sm:object-[center_25%]"
          eyebrow="Contact · Trading & Partnership"
          title="Business inquiries & partnerships"
          subtitle="For trading, sourcing, distribution, and marketplace discussions, contact us through the form or our official channels."
        />
        <Section
          id="contact-main"
          className="bg-white"
          eyebrow="Inquiry"
          title="Trading and partnership contact"
          description="Share your company profile, product categories, volumes, and target markets. Our team will respond regarding fit and next steps."
        >
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
            <article className="eagle-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Send className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">Send inquiry</h3>
              </div>
              <ContactForm formType="trading" />
            </article>

            <article id="company-details" className="eagle-card scroll-mt-36 p-6 md:p-8">
              <h3 className="text-xl font-bold tracking-tight">Company details</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <Globe className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">Company:</span> {companyInfo.name}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">Location:</span> {companyInfo.location}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">Phone:</span>{" "}
                      <a href={`tel:${companyInfo.phoneTel}`} className="text-[#EB8B2E] underline-offset-2 hover:underline">
                        {companyInfo.phone}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">Email:</span>{" "}
                      <a href={`mailto:${companyInfo.email}`} className="text-[#EB8B2E] underline-offset-2 hover:underline">
                        {companyInfo.email}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">Address:</span> {companyInfo.address}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <Globe className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">Website:</span>{" "}
                      <a
                        href={companyInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#EB8B2E] underline-offset-2 hover:underline"
                      >
                        eaglewisebiz.com
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                      <LinkedinIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">LinkedIn:</span>{" "}
                      <a
                        href={companyInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#EB8B2E] underline-offset-2 hover:underline"
                      >
                        Eagle Wise Business Consultancy (UAE)
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}
