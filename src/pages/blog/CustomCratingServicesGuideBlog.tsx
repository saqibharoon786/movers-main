import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import CustomCratingServicesGuideBlogBody from "@/content/customCratingServicesGuideBlogBody";
import {
  CUSTOM_CRATING_SERVICES_GUIDE_CANONICAL,
  CUSTOM_CRATING_SERVICES_GUIDE_FAQS,
  CUSTOM_CRATING_SERVICES_GUIDE_IMAGE,
  CUSTOM_CRATING_SERVICES_GUIDE_OG_IMAGE,
  CUSTOM_CRATING_SERVICES_GUIDE_PATH,
} from "@/data/customCratingServicesGuideBlog";

const TITLE = "Complete Guide to Custom Crating Services | Best International Movers";
const DESCRIPTION =
  "Discover everything about custom crating services in Pakistan — types, materials, ISPM-15 compliance, costs, and expert tips for safe international shipping. Updated 2026.";
const KEYWORDS =
  "custom crating services, custom crating services pakistan, ISPM-15 compliance pakistan, wooden crates export, export packing pakistan, custom crate design, industrial crating pakistan, marble export crating, machinery crating pakistan, export packaging engineer, heat treated wooden crates, cargo protection solutions";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Complete Guide to Custom Crating Services (2026)",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bestintlmovers.com/logo.png",
    },
  },
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  image: CUSTOM_CRATING_SERVICES_GUIDE_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": CUSTOM_CRATING_SERVICES_GUIDE_CANONICAL },
  keywords:
    "custom crating services, ISPM-15 Pakistan, wooden crates export, export packing Pakistan",
  articleSection: "Export Packaging, Logistics, Custom Crating",
  wordCount: "4800",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CUSTOM_CRATING_SERVICES_GUIDE_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function CtaBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border-2 border-orange-500/50 bg-orange-500/5 p-6 my-8 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

export default function CustomCratingServicesGuideBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={CUSTOM_CRATING_SERVICES_GUIDE_PATH}
      canonicalUrl={CUSTOM_CRATING_SERVICES_GUIDE_CANONICAL}
      h1="Complete Guide to Custom Crating Services (2026)"
      dateLabel="July 19, 2026 · 18 min read"
      breadcrumbCurrent="Custom Crating Services Guide"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={CUSTOM_CRATING_SERVICES_GUIDE_OG_IMAGE}
      ogImageAlt="Custom crating services and export packing from Pakistan"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={CUSTOM_CRATING_SERVICES_GUIDE_IMAGE}
          alt="Custom crating services engineered wooden export crates Pakistan"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-2">
        Everything Pakistani Businesses Need to Know About Custom Crates, ISPM-15 Compliance, Export Packing & Cargo
        Protection
      </p>
      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best International Movers & Logistics · 15+ Years Experience · 5,000+ Successful Shipments · 100+ Countries
        Served
      </p>

      <CustomCratingServicesGuideBlogBody />

      <h2>20 Frequently Asked Questions — Custom Crating Services</h2>
      {CUSTOM_CRATING_SERVICES_GUIDE_FAQS.map((faq) => (
        <div key={faq.question} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.question}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">📦 Start Your Custom Crating Journey — FREE Consultation</strong>
        Ready to protect your cargo with professional custom crating from Pakistan? Explore our{" "}
        <Link to="/services/custom-crating-services/" className="text-gold hover:underline font-medium">
          custom crating services
        </Link>
        ,{" "}
        <Link to="/services/wooden-crating-services/" className="text-gold hover:underline font-medium">
          wooden crating services
        </Link>
        , and{" "}
        <Link to="/services/professional-packing-services/" className="text-gold hover:underline font-medium">
          export packing services
        </Link>
        .{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Request your free quote today →
        </Link>
      </CtaBox>

      <p className="not-prose text-sm text-muted-foreground">
        Related reading:{" "}
        <Link
          to="/blog/benefits-of-custom-wooden-crates-for-international-shipping/"
          className="text-gold hover:underline"
        >
          Benefits of Custom Wooden Crates for International Shipping
        </Link>
        {" · "}
        <Link to="/blog/export-shipping-pakistan/" className="text-gold hover:underline">
          Export Shipping from Pakistan Guide
        </Link>
        {" · "}
        <Link to="/blog/lcl-vs-fcl-sea-freight-pakistan/" className="text-gold hover:underline">
          LCL vs FCL Sea Freight Guide
        </Link>
      </p>
    </BlogArticleShell>
  );
}
