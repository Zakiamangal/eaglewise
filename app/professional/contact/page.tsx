import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { companyInfo } from "@/lib/site";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/linkedin-icon";

export default function ProfessionalContactPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/hero-dubai.jpg"
        imageAlt="Dubai skyline — Eaglewise professional services"
        eyebrow="Contact · Professional Services"
        title="Start a conversation"
        subtitle="Accounting, tax, audit, or advisory—share your context and we will respond with next steps."
      />
      <Section
        id="contact-main"
        className="bg-white"
        eyebrow="Inquiry"
        title="Consultancy and advisory inquiries"
        description="For accounting, tax, audit, and business advisory requests, share your details and our team will respond."
      >
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <article className="eagle-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Send className="h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-xl font-semibold">Send inquiry</h3>
            </div>
            <form className="mt-5 space-y-4">
              <div>
                <label htmlFor="prof-name" className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="prof-name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="prof-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="prof-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="prof-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="prof-message"
                  rows={5}
                  placeholder="Describe your consultancy or advisory requirement"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
              </div>
              <button
                type="button"
                className="rounded-full bg-[#EB8B2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97a22]"
              >
                Submit inquiry
              </button>
              <p className="text-xs text-muted-foreground">
                Form submission backend can be connected in the next phase.
              </p>
            </form>
          </article>

          <article id="company-details" className="eagle-card scroll-mt-36 p-6 md:p-8">
            <h3 className="text-xl font-semibold">Company details</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
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
            <p className="mt-4 rounded-xl bg-surface-alt p-4 text-xs text-muted-foreground">
              Full office address will be added when confirmed.
            </p>
          </article>
        </div>
      </Section>
    </SiteShell>
  );
}
