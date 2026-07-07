import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  EXPORT_SHIPPING_PAKISTAN_CANONICAL,
  EXPORT_SHIPPING_PAKISTAN_IMAGE,
  EXPORT_SHIPPING_PAKISTAN_OG_IMAGE,
  EXPORT_SHIPPING_PAKISTAN_PATH,
  exportShippingPakistanFaqs,
} from "@/data/exportShippingPakistanBlog";
import { ExportShippingPakistanBody } from "@/content/exportShippingPakistanBody";

const TITLE = "Export Shipping from Pakistan — Complete Guide 2026 | Best Int'l Movers";
const DESCRIPTION =
  "Complete guide to export shipping from Pakistan. Covers air freight vs sea freight, WeBOC customs, Form E, export documentation, Incoterms, shipping rates to UAE, UK, USA, Canada, and step-by-step export process.";
const KEYWORDS =
  "export shipping pakistan, export from pakistan, pakistan export process, weboc export pakistan, form e pakistan export, certificate of origin pakistan tdap, air freight export pakistan, sea freight export karachi, export customs clearance pakistan, incoterms pakistan exporters, export documentation pakistan list, freight forwarder karachi exports";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Export Shipping from Pakistan — The Complete 2025–2026 Guide",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  image: EXPORT_SHIPPING_PAKISTAN_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": EXPORT_SHIPPING_PAKISTAN_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: exportShippingPakistanFaqs.map((item) => ({
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

export default function ExportShippingPakistanBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={EXPORT_SHIPPING_PAKISTAN_PATH}
      canonicalUrl={EXPORT_SHIPPING_PAKISTAN_CANONICAL}
      h1="Export Shipping from Pakistan — The Complete 2025–2026 Guide"
      dateLabel="July 6, 2026 · 25 min read"
      breadcrumbCurrent="Export Shipping from Pakistan"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={EXPORT_SHIPPING_PAKISTAN_OG_IMAGE}
      ogImageAlt="Export shipping from Pakistan guide illustration"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={EXPORT_SHIPPING_PAKISTAN_IMAGE}
          alt="Export shipping from Pakistan — air and sea freight"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best Int&apos;l Movers · Updated: July 2026 · Reading Time: 25 Minutes
      </p>

      <ExportShippingPakistanBody />

      <h2>Frequently Asked Questions — Export Shipping from Pakistan</h2>
      {exportShippingPakistanFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          📦 Get Your Free Export Shipping Quote — Pakistan to Global Destinations
        </strong>
        Professional export customs clearance, air freight, sea freight FCL/LCL, complete documentation, competitive rates, and real-time tracking.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Contact us today →
        </Link>
      </CtaBox>

      <h2>Final Word — Your Pakistan Export Deserves Professional Expertise</h2>
      <p>
        Pakistani exporters — from textile manufacturers in Faisalabad to surgical instrument makers in Sialkot, from rice exporters in Punjab to garment factories in Karachi — face complex export procedures, documentation requirements, and freight decisions. The difference between a successful export and a costly mistake often comes down to understanding WeBOC, Form E, Incoterms, and choosing the right freight forwarder.
      </p>
      <p>
        With Best Int&apos;l Movers handling your export shipping from Pakistan, you get accurate documentation guidance, transparent all-in pricing, competitive air and sea freight rates, complete WeBOC customs clearance, and reliable delivery to UAE, UK, USA, Canada, Australia, China, and beyond.
      </p>
      <p className="not-prose text-sm text-muted-foreground">
        From Karachi, Lahore, Islamabad, Faisalabad, Sialkot, Rawalpindi, Multan, Peshawar or anywhere in Pakistan — to Jebel Ali (Dubai), Felixstowe (UK), New York (USA), Toronto (Canada), Shanghai (China), and across the globe. Best Int&apos;l Movers — your trusted export shipping partner since 2014.
      </p>
    </BlogArticleShell>
  );
}
