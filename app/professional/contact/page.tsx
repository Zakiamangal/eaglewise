"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { companyInfo } from "@/lib/site";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/linkedin-icon";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

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

      <section id="contact-main" className="scroll-mt-36 animated-bg py-14 md:py-20">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-8 md:mb-11"
          >
            <motion.p variants={fadeInUp} className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">
              Inquiry
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Consultancy and advisory inquiries
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              For accounting, tax, audit, and business advisory requests, share your details and our team will respond.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="eagle-card gradient-accent p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EB8B2E]/10 text-[#EB8B2E]">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Send inquiry</h3>
              </div>
              <ContactForm formType="professional" />
            </motion.article>

            <div className="flex flex-col gap-6">
              <motion.article
                id="company-details"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="eagle-card scroll-mt-36 p-6 md:p-8"
              >
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
              </motion.article>

              {/* Map/office image card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden rounded-2xl"
              >
                <Image
                  src="/home-office-dubai.jpg"
                  alt="Eaglewise office in Dubai"
                  width={800}
                  height={400}
                  className="h-[200px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
