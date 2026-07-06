import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_CANONICAL,
  LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_IMAGE,
  LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_OG_IMAGE,
  LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_PATH,
  lclVsFclSeaFreightPakistanFaqs,
} from "@/data/lclVsFclSeaFreightPakistanBlog";
import { LclVsFclSeaFreightPakistanBody } from "@/content/lclVsFclSeaFreightPakistanBody";

const TITLE = "LCL vs FCL: Complete Sea Freight Guide 2026 | Best Int'l Movers";
const DESCRIPTION =
  "Complete guide to LCL vs FCL sea freight from Pakistan. Covers cost comparison, transit times, when to choose each, CBM calculation, container sizes, and Pakistan routes to UAE, UK, USA, Canada.";
const KEYWORDS =
  "lcl vs fcl pakistan, lcl shipping pakistan, fcl shipping pakistan, less than container load pakistan, full container load pakistan, sea freight pakistan, lcl vs fcl cost comparison, lcl vs fcl karachi to dubai, lcl vs fcl karachi to uk, lcl vs fcl karachi to usa, cbm calculation shipping, container sizes 20ft 40ft, lcl consolidation karachi, fcl booking pakistan";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "LCL vs FCL: Complete Sea Freight Guide for Pakistan Exporters & Importers (2026)",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  image: LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: lclVsFclSeaFreightPakistanFaqs.map((item) => ({
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

export default function LclVsFclSeaFreightPakistanBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_PATH}
      canonicalUrl={LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_CANONICAL}
      h1="LCL vs FCL: Complete Sea Freight Guide for Pakistan Exporters & Importers (2026)"
      dateLabel="July 6, 2026 · 20 min read"
      breadcrumbCurrent="LCL vs FCL Sea Freight Guide"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_OG_IMAGE}
      ogImageAlt="LCL vs FCL sea freight comparison guide from Pakistan"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={LCL_VS_FCL_SEA_FREIGHT_PAKISTAN_IMAGE}
          alt="LCL vs FCL sea freight shipping comparison illustration"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best Int&apos;l Movers · Updated: July 2026 · Reading Time: 20 Minutes
      </p>

      <LclVsFclSeaFreightPakistanBody />

      <h2>Frequently Asked Questions — LCL vs FCL Sea Freight from Pakistan</h2>
      {lclVsFclSeaFreightPakistanFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          📦 Get Your Free LCL & FCL Sea Freight Quote — Pakistan to Global Destinations
        </strong>
        Professional LCL consolidation, FCL container booking, export customs clearance, competitive rates, and real-time tracking.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Contact us today →
        </Link>
      </CtaBox>

      <h2>Final Word — Your Pakistan Sea Freight Deserves Professional Expertise</h2>
      <p>
        Pakistani exporters, importers, and individuals shipping internationally — from textile manufacturers in Faisalabad to household movers in Karachi, from machinery importers in Lahore to traders in Sialkot — face the LCL vs FCL decision daily. The difference between a cost-effective shipment and an expensive mistake often comes down to understanding the break-even point, knowing the hidden charges, and choosing the right freight forwarder.
      </p>
      <p>
        With Best Int&apos;l Movers handling your sea freight from Pakistan, you get accurate CBM calculations, transparent all-in pricing, competitive LCL and FCL rates, complete customs clearance (WeBOC, GD, Form E, Certificate of Origin), and reliable delivery to UAE, UK, USA, Canada, Australia, China, and beyond.
      </p>
      <p className="not-prose text-sm text-muted-foreground">
        From Karachi, Lahore, Islamabad, Sialkot, Faisalabad, Gujranwala, Multan, Peshawar or anywhere in Pakistan — to Jebel Ali (Dubai), Felixstowe (UK), New York (USA), Toronto (Canada), Shanghai (China), and across the globe. Best Int&apos;l Movers — your trusted sea freight partner since 2014.
      </p>
    </BlogArticleShell>
  );
}
