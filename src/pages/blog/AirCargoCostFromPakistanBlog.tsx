import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  AIR_CARGO_COST_FROM_PAKISTAN_CANONICAL,
  AIR_CARGO_COST_FROM_PAKISTAN_IMAGE,
  AIR_CARGO_COST_FROM_PAKISTAN_OG_IMAGE,
  AIR_CARGO_COST_FROM_PAKISTAN_PATH,
  airCargoCostFromPakistanFaqs,
} from "@/data/airCargoCostFromPakistanBlog";
import { AirCargoCostFromPakistanBody } from "@/content/airCargoCostFromPakistanBody";

const TITLE = "Air Cargo Cost from Pakistan 2025 — Complete Rate Guide (UK, Canada, Australia, UAE) | Best Int'l Movers";
const DESCRIPTION =
  "How much does air cargo cost from Pakistan in 2025? Get a transparent guide covering rates to the UK, Canada, Australia, UAE, Saudi Arabia, and USA, plus chargeable weight, hidden surcharges, and money-saving tips.";
const KEYWORDS =
  "air cargo cost from Pakistan, air cargo rates from Pakistan, air freight cost Pakistan to UK, air cargo price Pakistan to Canada, air cargo cost calculator Pakistan";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Air Cargo Cost from Pakistan 2025 — The Complete Rate Guide",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  image: AIR_CARGO_COST_FROM_PAKISTAN_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": AIR_CARGO_COST_FROM_PAKISTAN_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: airCargoCostFromPakistanFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AirCargoCostFromPakistanBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={AIR_CARGO_COST_FROM_PAKISTAN_PATH}
      canonicalUrl={AIR_CARGO_COST_FROM_PAKISTAN_CANONICAL}
      h1="Air Cargo Cost from Pakistan 2025 — The Complete Rate Guide for UK, Canada, Australia & UAE"
      dateLabel="July 6, 2026"
      breadcrumbCurrent="Air Cargo Cost from Pakistan"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={AIR_CARGO_COST_FROM_PAKISTAN_OG_IMAGE}
      ogImageAlt="Air cargo cost from Pakistan 2025 guide"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={AIR_CARGO_COST_FROM_PAKISTAN_IMAGE}
          alt="Air cargo cost guide from Pakistan with international shipping route illustration"
          className="w-full rounded-xl object-cover max-h-80 border border-border"
          loading="eager"
        />
      </figure>

      <AirCargoCostFromPakistanBody />
    </BlogArticleShell>
  );
}
