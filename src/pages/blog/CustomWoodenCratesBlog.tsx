import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import CustomWoodenCratesBlogBody from "@/content/customWoodenCratesBlogBody";
import {
  CUSTOM_WOODEN_CRATES_CANONICAL,
  CUSTOM_WOODEN_CRATES_FAQS,
  CUSTOM_WOODEN_CRATES_IMAGE,
  CUSTOM_WOODEN_CRATES_OG_IMAGE,
  CUSTOM_WOODEN_CRATES_PATH,
} from "@/data/customWoodenCratesBlog";

const TITLE =
  "Benefits of Custom Wooden Crates for International Shipping | Best Int'l Movers";
const DESCRIPTION =
  "Discover the top 15 benefits of custom wooden crates for international shipping. Expert guide covering ISPM 15 compliance, heavy cargo protection, moisture resistance & cost savings. Pakistan's trusted wooden crating specialists.";
const KEYWORDS =
  "custom wooden crates, wooden crating services pakistan, ISPM 15 export crates, international shipping crates, export packing pakistan, custom crating services, wooden crate benefits, heavy machinery crating, moisture resistant packaging, cargo damage prevention, export packaging standards, freight management pakistan";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Benefits of Custom Wooden Crates for International Shipping (Complete Guide 2026)",
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
  image: CUSTOM_WOODEN_CRATES_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": CUSTOM_WOODEN_CRATES_CANONICAL },
  keywords:
    "custom wooden crates, wooden crating services, ISPM 15, export packing pakistan, international shipping crates",
  articleSection: "Export Packaging Guide",
  wordCount: "4200",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CUSTOM_WOODEN_CRATES_FAQS.map((item) => ({
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

export default function CustomWoodenCratesBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={CUSTOM_WOODEN_CRATES_PATH}
      canonicalUrl={CUSTOM_WOODEN_CRATES_CANONICAL}
      h1="Benefits of Custom Wooden Crates for International Shipping (Complete Guide 2026)"
      dateLabel="July 19, 2026 · 18 min read"
      breadcrumbCurrent="Custom Wooden Crates Guide"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={CUSTOM_WOODEN_CRATES_OG_IMAGE}
      ogImageAlt="Custom wooden crate for international shipping and export packing"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={CUSTOM_WOODEN_CRATES_IMAGE}
          alt="Custom wooden crate manufacturing for international shipping from Pakistan"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best International Movers & Logistics · Updated: July 2026 · 15+ Years Experience · 5,000+ Shipments · 100+
        Countries
      </p>

      <CustomWoodenCratesBlogBody />

      <h2>20 Frequently Asked Questions — Custom Wooden Crates for International Shipping</h2>
      <p className="text-muted-foreground">
        Definitive answers from Pakistan&apos;s leading export packing specialists with 15+ years of wooden crating
        experience.
      </p>
      {CUSTOM_WOODEN_CRATES_FAQS.map((faq) => (
        <div key={faq.question} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.question}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">📦 Export Packing Services Pakistan — Complete Cargo Protection</strong>
        Beyond wooden crating, Best International Movers & Logistics provides comprehensive{" "}
        <Link to="/services/professional-packing-services/" className="text-gold hover:underline font-medium">
          export packing services
        </Link>{" "}
        — container stuffing supervision, cargo lashing, fumigation coordination, and complete documentation across
        Karachi, Lahore, Islamabad, Faisalabad, and Sialkot.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Request a free quote →
        </Link>
      </CtaBox>

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">🪵 Need ISPM 15 Certified Wooden Crates?</strong>
        Protect your next export shipment with engineered custom crates from Pakistan&apos;s trusted crating specialists.{" "}
        <Link to="/services/wooden-crating-services/" className="text-gold hover:underline font-medium">
          Wooden crating services
        </Link>{" "}
        and{" "}
        <Link to="/services/custom-crating-services/" className="text-gold hover:underline font-medium">
          custom crating services
        </Link>{" "}
        available nationwide.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Get your free crate quote today →
        </Link>
      </CtaBox>
    </BlogArticleShell>
  );
}
