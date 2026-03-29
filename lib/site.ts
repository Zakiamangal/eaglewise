export type SiteMode = "professional" | "trading";

export const companyInfo = {
  name: "Eaglewise Business Consultancy LLC-FZ",
  location: "United Arab Emirates",
  established: "March 2025",
  /** Display format */
  phone: "+971 555 953 221",
  /** Use in tel: links (no spaces) */
  phoneTel: "+971555953221",
  email: "ceo@eaglewisebiz.com",
  /** Full postal / office line — client to confirm */
  address: "To be updated",
  website: "https://www.eaglewisebiz.com",
  linkedin: "https://www.linkedin.com/company/eagle-wise-business-consultancy-uae/",
} as const;

export type NavItem = { href: string; label: string };

export type NavMenuItem = { href: string; label: string; description: string };

export const modeConfig = {
  professional: {
    id: "professional" as const,
    label: "Professional Services",
    /** Top utility bar: uppercased in UI via ModeSwitcher */
    tabLabel: "professional services",
    switcherShortLabel: "professional services",
    basePath: "/professional",
    homeHref: "/professional",
    navLinks: [
      { href: "/professional/about", label: "About" },
      { href: "/professional/services", label: "Services" },
      { href: "/professional/testimonials", label: "Testimonials" },
      { href: "/professional/faq", label: "FAQ" },
      { href: "/professional/contact", label: "Contact" },
    ] satisfies NavItem[],
    primaryCta: { label: "Request Consultation", href: "/professional/contact" },
    secondaryCta: { label: "Our Services", href: "/professional/services" },
    footerBlurb:
      "UAE-based professional consultancy focused on accounting, audit, tax, and business advisory for companies in the UAE and beyond.",
    footerCtaLabel: "Start a conversation",
    footerCtaHref: "/professional/contact",
  },
  trading: {
    id: "trading" as const,
    label: "Trading & Partners",
    tabLabel: "trading & partners",
    switcherShortLabel: "trading & partners",
    basePath: "/trading",
    homeHref: "/trading",
    navLinks: [
      { href: "/trading/markets", label: "Markets" },
      { href: "/trading/products", label: "Products" },
      { href: "/trading/partners", label: "Partners" },
      { href: "/trading/faq", label: "FAQ" },
      { href: "/trading/contact", label: "Contact" },
    ] satisfies NavItem[],
    primaryCta: { label: "Partner With Us", href: "/trading/contact" },
    secondaryCta: { label: "Explore Markets", href: "/trading/markets" },
    footerBlurb:
      "UAE-based trading and e-commerce partner connecting suppliers with regional distribution and marketplace growth.",
    footerCtaLabel: "Discuss a partnership",
    footerCtaHref: "/trading/contact",
  },
} as const;

export const navMenusByMode: Record<SiteMode, Record<string, NavMenuItem[]>> = {
  professional: {
    "/professional/about": [
      {
        href: "/professional/about#about-overview",
        label: "Company Overview",
        description: "Who Eaglewise is in the consultancy context.",
      },
      {
        href: "/professional/about#vision-mission",
        label: "Vision & Mission",
        description: "Advisory direction and objectives.",
      },
      {
        href: "/professional/about#ceo-message",
        label: "CEO Message",
        description: "Leadership perspective on professional services.",
      },
      {
        href: "/professional/about#company-values",
        label: "Company Values",
        description: "Integrity, quality, partnership, and innovation.",
      },
    ],
    "/professional/services": [
      {
        href: "/professional/services#professional-services",
        label: "Service Catalogue",
        description: "Financial, tax, and advisory capabilities.",
      },
      {
        href: "/professional/services#how-we-work",
        label: "How We Work",
        description: "Discovery, planning, and ongoing support.",
      },
      {
        href: "/professional/services#request-consultation",
        label: "Request Consultation",
        description: "Jump to the consultation CTA.",
      },
    ],
    "/professional/testimonials": [
      {
        href: "/professional/testimonials#client-feedback",
        label: "Client Feedback",
        description: "Reviews from advisory and consultancy clients.",
      },
      {
        href: "/professional/testimonials#trusted-metrics",
        label: "Trust Metrics",
        description: "Credibility and reach highlights.",
      },
      {
        href: "/professional/testimonials#testimonials-cta",
        label: "Work With Us",
        description: "Start a new engagement discussion.",
      },
    ],
    "/professional/faq": [
      {
        href: "/professional/faq#faq-list",
        label: "FAQ List",
        description: "Common questions about consultancy engagements.",
      },
      {
        href: "/professional/faq#faq-cta",
        label: "Contact for More",
        description: "Speak with our team directly.",
      },
    ],
    "/professional/contact": [
      {
        href: "/professional/contact#contact-main",
        label: "Send Inquiry",
        description: "Consultancy and advisory inquiries.",
      },
      {
        href: "/professional/contact#company-details",
        label: "Company Details",
        description: "Location, phone, email, and address.",
      },
    ],
  },
  trading: {
    "/trading/markets": [
      {
        href: "/trading/markets#markets-overview",
        label: "Markets Overview",
        description: "Trading, wholesale, and channel focus.",
      },
      {
        href: "/trading/markets#regional-network",
        label: "Regional Network",
        description: "Distribution and logistics coverage.",
      },
      {
        href: "/trading/markets#markets-cta",
        label: "Partnership CTA",
        description: "Start a distribution discussion.",
      },
    ],
    "/trading/products": [
      {
        href: "/trading/products#supplier-lines",
        label: "Supplier Lines",
        description: "Beauty, fragrance, and cosmetics partners.",
      },
      {
        href: "/trading/products#ecommerce-channels",
        label: "E-Commerce Channels",
        description: "Amazon, Noon, Shopify presence.",
      },
      {
        href: "/trading/products#products-cta",
        label: "Source With Us",
        description: "Discuss product and channel fit.",
      },
    ],
    "/trading/partners": [
      {
        href: "/trading/partners#partner-overview",
        label: "Partner Model",
        description: "How we collaborate with distributors.",
      },
      {
        href: "/trading/partners#key-partners",
        label: "Key Partners",
        description: "Khan Naseri Trading and network reach.",
      },
      {
        href: "/trading/partners#partners-cta",
        label: "Become a Partner",
        description: "Reach our partnerships team.",
      },
    ],
    "/trading/faq": [
      {
        href: "/trading/faq#faq-list",
        label: "FAQ List",
        description: "Trading, sourcing, and partnership questions.",
      },
      {
        href: "/trading/faq#faq-cta",
        label: "Contact for More",
        description: "Get a tailored answer from our team.",
      },
    ],
    "/trading/contact": [
      {
        href: "/trading/contact#contact-main",
        label: "Send Inquiry",
        description: "Trading and partnership inquiries.",
      },
      {
        href: "/trading/contact#company-details",
        label: "Company Details",
        description: "Location, phone, email, and address.",
      },
    ],
  },
};

export function getSiteMode(pathname: string | null): SiteMode {
  if (!pathname) return "professional";
  if (pathname === "/trading" || pathname.startsWith("/trading/")) return "trading";
  return "professional";
}

/** @deprecated Use modeConfig[mode].navLinks */
export const navLinks = modeConfig.professional.navLinks;
