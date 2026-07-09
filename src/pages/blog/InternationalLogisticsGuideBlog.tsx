import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  INTERNATIONAL_LOGISTICS_CANONICAL,
  INTERNATIONAL_LOGISTICS_IMAGE,
  INTERNATIONAL_LOGISTICS_OG_IMAGE,
  INTERNATIONAL_LOGISTICS_PATH,
  internationalLogisticsFaqs,
} from "@/data/internationalLogisticsGuide";
import { InternationalLogisticsGuideBody } from "@/content/internationalLogisticsGuideBody";

const TITLE = "International Logistics Guide 2026 | Complete Freight & Shipping Guide";
const DESCRIPTION =
  "Complete international logistics guide for Pakistani businesses — freight modes, customs documentation, Incoterms, costs & common mistakes. Everything you need to ship globally in 2026.";
const KEYWORDS =
  "international logistics guide, international shipping from pakistan, freight modes, customs documentation, incoterms, air freight vs sea freight, export documentation pakistan, import customs clearance, logistics services pakistan, international freight forwarding, shipping from pakistan to world, export guide pakistan 2026";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "International Logistics Guide 2026: How to Ship Cargo from Pakistan to the World",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  image: INTERNATIONAL_LOGISTICS_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": INTERNATIONAL_LOGISTICS_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: internationalLogisticsFaqs.map((item) => ({
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

export default function InternationalLogisticsGuideBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={INTERNATIONAL_LOGISTICS_PATH}
      canonicalUrl={INTERNATIONAL_LOGISTICS_CANONICAL}
      h1="International Logistics Guide 2026: How to Ship Cargo from Pakistan to the World"
      dateLabel="July 9, 2026 · 15 min read"
      breadcrumbCurrent="International Logistics Guide"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={INTERNATIONAL_LOGISTICS_OG_IMAGE}
      ogImageAlt="International logistics and freight shipping illustration"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={INTERNATIONAL_LOGISTICS_IMAGE}
          alt="International logistics and freight shipping illustration"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best International Movers & Logistics · Updated: July 2026 · Reading Time: 15 Minutes
      </p>

      <InternationalLogisticsGuideBody />

      <h2>Frequently Asked Questions — International Logistics Guide</h2>
      {internationalLogisticsFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🌍 Need Help with Your International Shipment?
        </strong>
        Contact Best International Movers & Logistics for a free consultation and transparent quote. We handle freight booking, customs clearance, and end-to-end logistics for shipments from Pakistan to over 100 countries.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Get your free quote today →
        </Link>
      </CtaBox>

      <h2>Final Word — International Logistics Rewards Preparation</h2>
      <p>
        International logistics is complex, but it becomes manageable when you have the right partner and accurate information. This guide reflects our real experience handling shipments from Pakistan to destinations worldwide — the documentation requirements, the customs processes, the freight mode trade-offs, and the mistakes that cost businesses time and money.
      </p>
      <p>
        Whether you're shipping your first export order or managing recurring international freight, the fundamentals remain the same: correct freight mode selection, complete documentation, clear Incoterms, and a trustworthy logistics partner. At Best International Movers & Logistics, we've built our entire operation around these principles — and we're ready to put them to work for your next international shipment.
      </p>
      <p className="not-prose text-sm text-muted-foreground">
        From Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Faisalabad, Sialkot and all Pakistani cities — to UK, Canada, USA, UAE, Saudi Arabia, Germany, Australia and over 100 countries worldwide. Best International Movers & Logistics — Pakistan's trusted international moving and logistics partner since 2009.
      </p>
    </BlogArticleShell>
  );
}
