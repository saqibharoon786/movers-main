import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  COMMERCIAL_CARGO_GUIDE_PAKISTAN_CANONICAL,
  COMMERCIAL_CARGO_GUIDE_PAKISTAN_IMAGE,
  COMMERCIAL_CARGO_GUIDE_PAKISTAN_OG_IMAGE,
  COMMERCIAL_CARGO_GUIDE_PAKISTAN_PATH,
  commercialCargoGuidePakistanFaqs,
} from "@/data/commercialCargoGuidePakistanBlog";
import { CommercialCargoGuidePakistanBody } from "@/content/commercialCargoGuidePakistanBody";

const TITLE = "Commercial Cargo from Pakistan — The Complete Export Shipping Guide 2026 | Best Int'l Movers";
const DESCRIPTION =
  "Complete guide to shipping commercial cargo from Pakistan internationally. Covers export documentation, HS codes, customs clearance, freight options (air & sea), Incoterms, duties, and how to choose the right freight forwarder.";
const KEYWORDS =
  "commercial cargo from pakistan, commercial cargo services pakistan, how to ship commercial goods from pakistan, export cargo pakistan, international commercial shipping pakistan, exporting goods from pakistan guide";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Commercial Cargo from Pakistan — The Complete Export Shipping Guide for Pakistani Businesses (2026)",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  image: COMMERCIAL_CARGO_GUIDE_PAKISTAN_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": COMMERCIAL_CARGO_GUIDE_PAKISTAN_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: commercialCargoGuidePakistanFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function CtaBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border-2 border-orange-500/50 bg-orange-500/5 p-6 my-8 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

export default function CommercialCargoGuidePakistanBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={COMMERCIAL_CARGO_GUIDE_PAKISTAN_PATH}
      canonicalUrl={COMMERCIAL_CARGO_GUIDE_PAKISTAN_CANONICAL}
      h1="Commercial Cargo from Pakistan — The Complete Export Shipping Guide for Pakistani Businesses (2026)"
      dateLabel="July 6, 2026 · 16 min read"
      breadcrumbCurrent="Commercial Cargo from Pakistan"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={COMMERCIAL_CARGO_GUIDE_PAKISTAN_OG_IMAGE}
      ogImageAlt="Commercial cargo export guide from Pakistan"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={COMMERCIAL_CARGO_GUIDE_PAKISTAN_IMAGE}
          alt="Commercial cargo loading and international export shipping guide illustration"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best Int&apos;l Movers · Updated: July 2026 · Reading Time: 16 Minutes
      </p>

      <CommercialCargoGuidePakistanBody />

      <h2>Frequently Asked Questions — Commercial Cargo from Pakistan</h2>
      {commercialCargoGuidePakistanFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          📦 Get Your Free Commercial Cargo Shipping Quote — Pakistan to Global Destinations
        </strong>
        Professional export documentation, HS code classification, customs clearance, air & sea freight, and door delivery.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Contact us today →
        </Link>
      </CtaBox>

      <h2>Final Word — Your Pakistani Exports Deserve Professional Logistics</h2>
      <p>
        Pakistani businesses — from Sialkot sports manufacturers to Faisalabad textile producers, from Karachi leather exporters to Gujranwala surgical instrument makers — compete in global markets. The difference between a successful export and a delayed shipment often comes down to logistics expertise.
      </p>
      <p>
        With Best Int&apos;l Movers handling your commercial cargo export, you get Pakistan Customs WeBOC expertise, correct HS code classification, complete documentation preparation, competitive freight rates, and reliable delivery to UK, USA, Canada, Australia, UAE, and beyond.
      </p>
      <p className="not-prose text-sm text-muted-foreground">
        From Karachi, Lahore, Islamabad, Sialkot, Faisalabad, Gujranwala, Multan, Peshawar or anywhere in Pakistan — to London, Manchester, Birmingham, New York, Toronto, Sydney, Dubai, and across the globe. Best Int&apos;l Movers — shipping Pakistani commercial cargo worldwide since 2014.
      </p>
    </BlogArticleShell>
  );
}
