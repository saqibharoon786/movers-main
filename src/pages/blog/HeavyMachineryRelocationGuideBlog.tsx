import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  HEAVY_MACHINERY_RELOCATION_SLUG,
  HEAVY_MACHINERY_RELOCATION_IMAGE,
  HEAVY_MACHINERY_RELOCATION_FAQS,
} from "@/data/heavyMachineryRelocationGuide";
import HeavyMachineryRelocationGuideBody from "@/content/heavyMachineryRelocationGuideBody";

const TITLE = "Complete Guide to Heavy Machinery Relocation in Pakistan 2026";
const DESCRIPTION =
  "The complete 2026 guide to heavy machinery relocation in Pakistan — rigging, permits, safety, costs & common mistakes. Everything manufacturers need to know before moving industrial equipment.";
const KEYWORDS =
  "heavy machinery relocation in pakistan, industrial equipment movers, machinery shifting services, factory equipment relocation, rigging services pakistan, heavy machinery transport, industrial moving company, machinery movers islamabad, machinery movers lahore, machinery movers karachi, plant relocation services, equipment installation services";

const HEAVY_MACHINERY_RELOCATION_CANONICAL = "https://bestintlmovers.com/blog/heavy-machinery-relocation-guide-pakistan-2026/";
const HEAVY_MACHINERY_RELOCATION_PATH = "/blog/heavy-machinery-relocation-guide-pakistan-2026/";
const HEAVY_MACHINERY_RELOCATION_OG_IMAGE = "/images/container.jpg";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Complete Guide to Heavy Machinery Relocation in Pakistan 2026",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  image: HEAVY_MACHINERY_RELOCATION_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": HEAVY_MACHINERY_RELOCATION_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HEAVY_MACHINERY_RELOCATION_FAQS.map((item) => ({
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

export default function HeavyMachineryRelocationGuideBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={HEAVY_MACHINERY_RELOCATION_PATH}
      canonicalUrl={HEAVY_MACHINERY_RELOCATION_CANONICAL}
      h1="Complete Guide to Heavy Machinery Relocation in Pakistan 2026"
      dateLabel="July 10, 2026 · 15 min read"
      breadcrumbCurrent="Heavy Machinery Relocation Guide"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={HEAVY_MACHINERY_RELOCATION_OG_IMAGE}
      ogImageAlt="Heavy machinery relocation and industrial equipment moving illustration"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={HEAVY_MACHINERY_RELOCATION_IMAGE}
          alt="Heavy machinery relocation and industrial equipment moving illustration"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best International Movers & Logistics · Updated: July 2026 · Reading Time: 15 Minutes
      </p>

      <HeavyMachineryRelocationGuideBody />

      <h2>Frequently Asked Questions — Heavy Machinery Relocation in Pakistan</h2>
      {HEAVY_MACHINERY_RELOCATION_FAQS.map((faq) => (
        <div key={faq.question} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.question}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🏭 Planning a Machinery Relocation in 2026?
        </strong>
        Contact Best International Movers & Logistics for a free site survey and transparent quote. We handle rigging, dismantling, transport, and reinstallation for industrial equipment across Pakistan.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Get your free quote today →
        </Link>
      </CtaBox>

      <h2>Final Word — Heavy Machinery Relocation Rewards Preparation</h2>
      <p>
        Heavy machinery relocation is complex, but it becomes manageable when you have the right partner and accurate information. This guide reflects our real experience relocating industrial equipment across Pakistan's manufacturing hubs — the rigging requirements, the permit processes, the safety standards, and the mistakes that cost businesses time and money.
      </p>
      <p>
        Whether you're moving a single CNC machine or relocating an entire production line, the fundamentals remain the same: proper load calculation, permit compliance, documented disassembly, and a genuinely experienced relocation partner. At Best International Movers & Logistics, we've built our entire operation around these principles — and we're ready to put them to work for your next machinery relocation project.
      </p>
      <p className="not-prose text-sm text-muted-foreground">
        From Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar and all Pakistani industrial cities — Best International Movers & Logistics — Pakistan's trusted industrial relocation and logistics partner since 2009.
      </p>
    </BlogArticleShell>
  );
}
