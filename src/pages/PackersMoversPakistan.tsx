import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import {
  PackersMoversPakistanBody,
  packersMoversPakistanFaqs,
} from "@/content/packersMoversPakistanBody";

const PAGE_PATH = "/packers-and-movers/";
const CANONICAL = "https://bestintlmovers.com/packers-and-movers/";

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bestintlmovers.com/#organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
    logo: "https://bestintlmovers.com/images/logo.png",
    sameAs: [
      "https://www.facebook.com/bestintlmovers",
      "https://www.instagram.com/bestintlmovers",
      "https://www.linkedin.com/company/bestintlmovers",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-300-9130211",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    foundingDate: "2009",
  };
}

function buildMovingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://bestintlmovers.com/#movingcompany",
    name: "Best International Movers & Logistics",
    image: "https://bestintlmovers.com/images/packers-and-movers-pakistan-hero.jpg",
    url: CANONICAL,
    telephone: "+92-300-9130211",
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressCountry: "Pakistan" },
    areaServed: [
      "Islamabad",
      "Rawalpindi",
      "Lahore",
      "Karachi",
      "Faisalabad",
      "Multan",
      "Sialkot",
      "Peshawar",
      "Quetta",
      "Hyderabad",
      "Gujranwala",
      "Bahawalpur",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "512",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bestintlmovers.com/#localbusiness",
    name: "Best International Movers & Logistics",
    image: "https://bestintlmovers.com/images/packers-and-movers-pakistan-hero.jpg",
    url: "https://bestintlmovers.com",
    telephone: "+92-300-9130211",
    address: { "@type": "PostalAddress", addressCountry: "Pakistan" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL}#service`,
    serviceType: "Packers and Movers",
    name: "Packers and Movers in Pakistan",
    description:
      "Professional packers and movers services including house shifting, office relocation, industrial relocation, and international moving across Pakistan and 100+ countries.",
    url: CANONICAL,
    provider: { "@id": "https://bestintlmovers.com/#organization" },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com/" },
      { "@type": "ListItem", position: 2, name: "Packers and Movers", item: CANONICAL },
    ],
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: packersMoversPakistanFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function buildReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": "https://bestintlmovers.com/#organization" },
    author: { "@type": "Person", name: "Verified Customer" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody:
      "Excellent international relocation experience from Karachi to Dubai. Professional packing and on-time delivery.",
  };
}

function buildWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${CANONICAL}#webpage`,
    url: CANONICAL,
    name: "Packers and Movers in Pakistan | Best International Movers & Logistics",
    description:
      "Professional Packers and Movers for house shifting, office relocation, and international moving across Pakistan. 15+ years experience, 5000+ successful moves, 100+ countries served.",
    inLanguage: "en-PK",
    about: { "@id": "https://bestintlmovers.com/#organization" },
  };
}

const serviceSeo = {
  title: "Packers and Movers Pakistan | House, Office & International Moving Experts",
  description:
    "Looking for professional Packers and Movers in Pakistan? Best International Movers & Logistics offers house shifting, office relocation & international moving with 15+ years experience, 5000+ moves & 24/7 support. Get a free quote today.",
  keywords:
    "packers and movers, movers and packers, best packers and movers, house shifting Pakistan, office relocation, international packers and movers, moving company Pakistan, packing services Pakistan, door to door moving, cargo insurance Pakistan, wooden crating, freight management Pakistan, house shifting Karachi, house shifting Lahore, house shifting Islamabad",
};

const PackersMoversPakistan = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath={PAGE_PATH}
        canonicalUrl={CANONICAL}
        ogTitle="Packers and Movers in Pakistan | Best International Movers & Logistics"
        ogDescription="Professional Packers and Movers for house shifting, office relocation, and international moving across Pakistan. 15+ years experience, 5000+ successful moves, 100+ countries served."
        ogImage="https://bestintlmovers.com/images/packers-and-movers-pakistan-hero.jpg"
        ogImageAlt="Professional packers and movers loading truck in Pakistan"
        schema={[
          buildOrganizationSchema(),
          buildMovingCompanySchema(),
          buildLocalBusinessSchema(),
          buildServiceSchema(),
          buildBreadcrumbSchema(),
          buildFAQSchema(),
          buildReviewSchema(),
          buildWebPageSchema(),
        ]}
      />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">
              ← All Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Package size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Packers and Movers in Pakistan — Trusted by 5,000+ Families & Businesses for Safe, On-Time Relocation
                </h1>
                <p className="text-muted-foreground mt-1">
                  House Shifting, Office Relocation & International Moving | 15+ Years Experience
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">House Shifting</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Office Relocation</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">International Moving</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Industrial Relocation</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">GPS Tracked</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Insured</span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
              >
                Get a Free Moving Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+923009130211"
                className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold font-semibold px-6 py-3 rounded-lg hover:bg-gold/10 transition-colors"
              >
                <Phone size={18} />
                Call Now: 24/7 Support
              </a>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-navy-mid text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid/80 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>

            <PackersMoversPakistanBody />

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {packersMoversPakistanFaqs.map((faq, index) => (
                  <div key={faq.q} className={index < packersMoversPakistanFaqs.length - 1 ? "border-b border-border pb-6" : ""}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {index + 1}. {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg"
              >
                Get Your Free Moving Quote Today
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PackersMoversPakistan;
