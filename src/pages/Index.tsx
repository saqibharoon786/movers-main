import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import IndustriesSection from "@/components/IndustriesSection";
import PartnersSection from "@/components/PartnersSection";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";

const homepageMovingCompanyLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Best International Movers & Logistics",
  url: "https://bestintlmovers.com",
  telephone: "+92-300-9130211",
  email: "info@bestintlmovers.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  openingHours: "Mo-Sa 08:00-20:00",
  areaServed: ["Pakistan", "UAE", "UK", "USA", "Canada", "Saudi Arabia", "Australia", "Qatar", "Germany", "Malaysia"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
  },
  serviceType: "International Moving Services",
  description: "Pakistan's #1 international moving company. Door-to-door service to UAE, UK, USA, Canada & 100+ countries. 5000+ families moved.",
  priceRange: "$$$",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  languagesSpoken: ["English", "Urdu", "Arabic"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "International Moving",
          description: "Complete international relocation services"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Local Moving",
          description: "Professional local and intercity moving services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Air Freight",
          description: "Fast and reliable air freight services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sea Freight", 
          description: "Cost-effective sea freight shipping"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Shipping",
          description: "Safe vehicle transport services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storage Solutions",
          description: "Secure storage facilities"
        }
      }
    ]
  }
};

// FAQ Schema for homepage
const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does international moving cost from Pakistan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "International moving costs from Pakistan vary based on destination, volume, and shipping method. Air freight is faster but more expensive, while sea freight is cost-effective for larger shipments. Contact us for a free quote tailored to your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "Which countries do you serve from Pakistan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve 100+ countries worldwide including UAE, UK, USA, Canada, Australia, Saudi Arabia, Qatar, Germany, Malaysia and more. Our global network ensures seamless relocations to any destination."
      }
    },
    {
      "@type": "Question",
      "name": "How long does international moving take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transit times vary: Air freight typically takes 3-7 days, while sea freight takes 4-8 weeks depending on destination. We provide accurate timelines and real-time tracking for all shipments."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide packing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide professional packing services using export-grade materials. Our trained packers ensure maximum protection for your belongings during international transit."
      }
    },
    {
      "@type": "Question",
      "name": "Is my cargo insured during transit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all shipments are covered by comprehensive transit insurance. We offer different insurance options based on the value and nature of your belongings."
      }
    }
  ]
};

// Review Schema
const homepageReviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "MovingCompany",
    "name": "Best International Movers & Logistics",
    "address": "Rawalpindi, Punjab, Pakistan"
  },
  "ratingValue": "4.9",
  "reviewCount": "5000",
  "bestRating": "5",
  "worstRating": "1"
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.home} urlPath="/" schema={[homepageMovingCompanyLd, homepageFAQSchema, homepageReviewSchema]} />
      <Navbar />
      <HeroSection />
      <StatsCounterSection />

      {/* SEO Content Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Best International Movers & Logistics has been Pakistan's most reliable moving partner for over 15 years. We have successfully relocated 5,000+ families and businesses across 100+ countries with zero compromise on safety, speed, or service. From professional packing in Pakistan to customs clearance and final delivery at your new home — we handle everything so you don't have to. We serve Rawalpindi, Islamabad, Lahore, and Peshawar with sea freight, air freight, packing, storage, vehicle shipping, and customs clearance.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/custom-duty-calculator" className="rounded-md border border-gold/30 px-3 py-2 text-gold hover:bg-gold/10">
              Calculate Pakistan Import Duty
            </Link>
            <Link to="/movers-lahore" className="rounded-md border border-border px-3 py-2 hover:border-gold/40 hover:text-gold">
              Packers and Movers Lahore
            </Link>
            <Link to="/movers-and-packers-in-peshawar" className="rounded-md border border-border px-3 py-2 hover:border-gold/40 hover:text-gold">
              Peshawar Moving Services
            </Link>
            <Link to="/about-us" className="rounded-md border border-border px-3 py-2 hover:border-gold/40 hover:text-gold">
              About Our Company
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-navy-light/40 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-6">
            High-Demand Moving Routes & Tools
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <Link to="/pakistan-to-dubai-movers" className="glass-card rounded-xl p-4 border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Pakistan to Dubai Movers
            </Link>
            <Link to="/pakistan-to-uk-movers" className="glass-card rounded-xl p-4 border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Pakistan to UK Movers
            </Link>
            <Link to="/pakistan-to-canada-movers" className="glass-card rounded-xl p-4 border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Pakistan to Canada Movers
            </Link>
            <Link to="/custom-duty-calculator" className="glass-card rounded-xl p-4 border border-gold/30 text-gold hover:bg-gold/10 transition-colors">
              Duty Estimator for Imported Goods
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <GlobalReachSection />
      <TestimonialsSection />
      <GallerySection />
      <IndustriesSection />
      <BlogSection />
      <CTABanner />
      <FAQSection />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
