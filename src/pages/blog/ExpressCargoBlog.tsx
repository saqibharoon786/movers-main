import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  EXPRESS_CARGO_CANONICAL,
  EXPRESS_CARGO_IMAGE,
  EXPRESS_CARGO_OG_IMAGE,
  EXPRESS_CARGO_PATH,
  expressCargoFaqs,
} from "@/data/expressCargoBlog";
import { ExpressCargoBody } from "@/content/expressCargoBody";

const TITLE = "Express Cargo from Pakistan — Fastest International Shipping 2026 | Best Int'l Movers";
const DESCRIPTION =
  "Need express cargo from Pakistan urgently? Best Int'l Movers delivers international express shipments in 24–72 hours from Karachi, Lahore & Islamabad to UK, Canada, UAE, Australia & worldwide. Same-day pickup. 24/7 service. Get a quote now.";
const KEYWORDS =
  "express cargo from pakistan, express cargo service pakistan, urgent cargo from pakistan, same day cargo pakistan, express air cargo pakistan to uk, express shipping from pakistan, fastest cargo from pakistan, express delivery from pakistan to canada, express cargo pakistan to uae, express freight pakistan, 24 hour cargo pakistan, next day delivery pakistan international, express cargo karachi lahore islamabad, fast international shipping pakistan 2026";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Express Cargo from Pakistan — The Complete Guide to Fastest International Shipping (2026)",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  image: EXPRESS_CARGO_OG_IMAGE,
  mainEntityOfPage: { "@type": "WebPage", "@id": EXPRESS_CARGO_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: expressCargoFaqs.map((item) => ({
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

export default function ExpressCargoBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={EXPRESS_CARGO_PATH}
      canonicalUrl={EXPRESS_CARGO_CANONICAL}
      h1="Express Cargo from Pakistan — The Complete Guide to Fastest International Shipping (2026)"
      dateLabel="July 6, 2026 · 14 min read"
      breadcrumbCurrent="Express Cargo from Pakistan"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={EXPRESS_CARGO_OG_IMAGE}
      ogImageAlt="Express cargo from Pakistan illustration"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={EXPRESS_CARGO_IMAGE}
          alt="Express cargo from Pakistan illustration"
          className="w-full rounded-xl border border-border max-h-80 object-cover"
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best Int&apos;l Movers · Updated: July 2026 · Reading Time: 14 Minutes
      </p>

      <ExpressCargoBody />

      <h2>Frequently Asked Questions — Express Cargo from Pakistan</h2>
      {expressCargoFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          📦 Get Your Free Express Cargo Quote — Pakistan to Global Destinations
        </strong>
        24/7 express cargo from Pakistan to UK, Canada, Australia, UAE, Saudi Arabia, USA and worldwide. Same-day pickup. Transparent all-inclusive pricing. Priority customs clearance. Real-time tracking.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Contact us today →
        </Link>
      </CtaBox>

      <h2>Final Word — When Every Hour Counts, Choose Best Int'l Movers</h2>
      <p>
        Express cargo from Pakistan is not just about speed — it is about reliability, transparency, and having a team that answers your call at 2 AM when you have a life-critical shipment that cannot wait. At Best Int'l Movers, we have built our express cargo service around exactly those moments — the urgent visa document, the emergency medicine, the business sample that must reach its destination before your competitor's does.
      </p>
      <p>
        Our 24/7 booking system, same-day pickup in all major Pakistani cities, priority airline partnerships, and licensed customs broker network in the UK, Canada, UAE, and Australia mean that when you book with us, you are booking with confidence that your express shipment will arrive exactly when it needs to.
      </p>
      <p className="not-prose text-sm text-muted-foreground">
        From Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Sialkot and all Pakistani cities — to London, Birmingham, Manchester, Bradford, Leeds, Glasgow (UK), Toronto, Vancouver, Calgary, Edmonton (Canada), Dubai, Abu Dhabi, Sharjah (UAE), Riyadh, Jeddah, Dammam (Saudi Arabia), Sydney, Melbourne, Perth (Australia), and worldwide. Best Int&apos;l Movers — your trusted express cargo partner since 2014.
      </p>
    </BlogArticleShell>
  );
}
