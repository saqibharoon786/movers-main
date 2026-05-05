import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import {
  internationalRelocationServicesRawalpindiFaqs,
} from "@/content/internationalRelocationServicesRawalpindiBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Relocation Services in Rawalpindi",
  description:
    "Complete overseas moving solutions from Rawalpindi. Professional packing, sea & air freight, customs clearance & door-to-door delivery to 100+ countries worldwide. Call 0300-9130211",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
  serviceType: "International Relocation Services",
  offers: {
    "@type": "Offer",
    priceCurrency: "PKR",
    priceRange: "80000-600000+",
    description: "International relocation services from Rawalpindi to worldwide destinations"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: internationalRelocationServicesRawalpindiFaqs.map(faq => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a
    }
  }))
};

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { InternationalRelocationServicesRawalpindiBody } from "@/content/internationalRelocationServicesRawalpindiBody";

// Build complete Organization + Service schema
function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bestintlmovers.com/#organization",
        "name": "Best International Movers & Logistics",
        "url": "https://bestintlmovers.com",
        "logo": "https://bestintlmovers.com/logo.png",
        "telephone": "+923009130211",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923009130211",
          "contactType": "customer service",
          "availableLanguage": ["English", "Urdu"]
        },
        "sameAs": [
          "https://www.facebook.com/bestintlmovers",
          "https://www.instagram.com/bestintlmovers"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/international-relocation-services-rawalpindi#service",
        "name": "International Relocation Services in Rawalpindi | Best International Movers",
        "serviceType": "International Relocation Services",
        "description": "Complete overseas moving solutions from Rawalpindi. Professional packing, sea & air freight, customs clearance & door-to-door delivery to 100+ countries worldwide. Call 0300-9130211",
        "url": "https://bestintlmovers.com/international-relocation-services-rawalpindi",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "City", name: "Rawalpindi" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "priceRange": "80000-600000+",
          "description": "International relocation services from Rawalpindi to worldwide destinations"
        }
      }
    ]
  };
}

// FAQ Schema for rich results
function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": internationalRelocationServicesRawalpindiFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a.replace(/<[^>]*>/g, '') }
    }))
  };
}

// Breadcrumb Schema
function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { 
        "@type": "ListItem", 
        "position": 1,
        "name": "Home", 
        "item": "https://bestintlmovers.com" 
      },
      { 
        "@type": "ListItem", 
        "position": 2,
        "name": "Movers Rawalpindi", 
        "item": "https://bestintlmovers.com/movers-rawalpindi" 
      },
      { 
        "@type": "ListItem", 
        "position": 3,
        "name": "International Relocation Services", 
        "item": "https://bestintlmovers.com/international-relocation-services-rawalpindi" 
      }
    ]
  };
}

const InternationalRelocationServicesRawalpindi = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "International Relocation Services Rawalpindi – Door-to-Door Moving",
    description: "Complete international relocation from Rawalpindi. Expert packing, sea & air freight, customs clearance & door-to-door delivery to 100+ countries. Call 0300-9130211",
    keywords: "international relocation services rawalpindi, international movers rawalpindi, overseas relocation rawalpindi, moving abroad rawalpindi, international shifting rawalpindi, relocation company rawalpindi",
    canonicalUrl: "https://bestintlmovers.com/international-relocation-services-rawalpindi"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/international-relocation-services-rawalpindi"
        schema={[buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />
      
      <Navbar />
      
      {/* Hero Section with H1 */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Complete Overseas Moving Solutions 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              International Relocation Services in Rawalpindi – Complete Overseas Moving Solutions
            </h1>
            
            <img 
              src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Professional export packing and international relocation services in Rawalpindi" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {seoConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free Survey & Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <InternationalRelocationServicesRawalpindiBody />
      
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default InternationalRelocationServicesRawalpindi;

