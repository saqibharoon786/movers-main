import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  PawPrint, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  Package,
  Plane,
  Globe,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "pet-relocation-services",
  icon: PawPrint,
  title: "Pet Relocation Services in Pakistan",
  subheading: "Safe, Stress-Free & IATA-Certified",
  desc: "Trusted pet relocation services across Pakistan & internationally. IATA-certified crates, vet documentation, customs clearance & door-to-door delivery. Get a free quote today!",
  featuresList: [
    "IATA-compliant pet travel crates & kennels — airline approved",
    "Full veterinary documentation: health certificates, vaccinations & microchipping",
    "Door-to-door pet pickup & delivery across Pakistan (Karachi, Lahore, Islamabad)",
    "Live animal air freight coordination with top international airlines",
    "Real-time tracking & 24/7 pet welfare monitoring throughout the journey",
    "Quarantine management & post-arrival care guidance",
    "Import/export permits for hassle-free international pet relocation",
    "Experienced pet handlers trained in animal care & stress-free transport"
  ],
  heroImg: "https://images.unsplash.com/photo-1583337236082-8555968cbc2c?auto=format&fit=crop&q=80&w=1920",
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "Malaysia", "Singapore"
  ],
  faqs: [
    {
      q: "Which pets can you relocate internationally from Pakistan?",
      a: "We specialize in relocating dogs, cats, birds, small mammals, and select exotic pets from Pakistan to destinations worldwide including UAE, UK, USA, Canada, Australia, and the Middle East. Each species and destination has specific import requirements — contact our team with your pet's details for a customized relocation plan."
    },
    {
      q: "How far in advance should I book pet relocation services?",
      a: "We strongly recommend booking at least 4–8 weeks before your move date. International pet relocation requires specific vaccination schedules, microchipping, health certificate timelines, and sometimes quarantine arrangements — all of which need advance planning to avoid last-minute complications.",
      hasLink: true,
      linkTo: "/blog/international-shipping-cost-pakistan",
      linkText: "international shipping cost from Pakistan",
      linkSentence: "For a detailed breakdown of costs, check out our guide on "
    },
    {
      q: "Do you provide IATA-approved pet travel crates?",
      a: "Yes. All our pet travel crates are fully IATA-compliant and sized appropriately for your pet's breed, weight, and airline requirements. Crates are included in our service pricing and meet all international airline standards for live animal transport."
    },
    {
      q: "What documentation is required for international pet travel from Pakistan?",
      a: "Required documents typically include a government-issued veterinary health certificate, up-to-date vaccination records (especially rabies), microchip certificate (ISO 15 digit), import permit from the destination country, and in some cases a CITES permit for exotic species. Our team prepares and verifies all documentation on your behalf.",
      hasLink: true,
      linkTo: "/blog/customs-regulations-guide-pakistan",
      linkText: "Pakistan customs import regulations 2025",
      linkSentence: "For complete customs information, read our "
    },
    {
      q: "Is my pet safe during air freight transport?",
      a: "Absolutely. We partner only with IATA-certified airlines that follow strict live animal transport regulations. Your pet travels in a temperature-controlled, pressurized cargo hold with constant monitoring. Our 24/7 tracking system keeps you updated at every stage of the journey."
    },
    {
      q: "Can my pet travel in the cabin with me?",
      a: "Small pets under 8kg may travel in-cabin on some airlines. Larger pets must travel as checked baggage or cargo. Regulations vary by airline and route. Our team advises on the best options for your pet's comfort and safety."
    },
    {
      q: "What happens if my pet is denied entry at customs?",
      a: "With proper documentation arranged by our team, denial is extremely rare. However, we have contingency plans including temporary boarding facilities and documentation corrections to resolve any issues quickly.",
      hasLink: true,
      linkTo: "/services/secure-storage",
      linkText: "secure storage facilities Pakistan",
      linkSentence: "We also offer "
    }
  ]
};

// Build complete Organization + Service schema - FIXED JSON SYNTAX
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
        "@id": "https://bestintlmovers.com/services/pet-relocation-services#service",
        "name": "Pet Relocation Services in Pakistan | Best International Movers",
        "serviceType": "Pet Relocation",
        "description": "Trusted pet relocation services across Pakistan & internationally. IATA-certified crates, vet documentation, customs clearance & door-to-door delivery.",
        "url": "https://bestintlmovers.com/services/pet-relocation-services",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pet Relocation Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "International Pet Shipping" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Domestic Pet Transport Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IATA Pet Crate Supply" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Veterinary Documentation Assistance" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Customs Clearance" } }
          ]
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
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a.replace(/<[^>]*>/g, '') }
    }))
  };
}

const PetRelocationService = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Pet Relocation Services in Pakistan | Best International Movers",
    description: "Trusted pet relocation services across Pakistan & internationally. IATA-certified crates, vet documentation, customs clearance & door-to-door delivery. Get a free quote today!",
    keywords: "pet relocation services Pakistan, pet shipping Pakistan, animal transport Pakistan, international pet movers, dog cat shipping Pakistan, live animal air freight, pet customs clearance Pakistan, IATA pet crate Pakistan, pet relocation Karachi Lahore, safe pet travel Pakistan, veterinary documentation movers, pet moving company Pakistan",
    canonicalUrl: "https://bestintlmovers.com/services/pet-relocation-services"
  };

  // Helper function to render FAQ answer with optional link
  const renderFAQAnswer = (faq: any) => {
    if (faq.hasLink) {
      return (
        <>
          {faq.a}{" "}
          {faq.linkSentence && <span>{faq.linkSentence}</span>}
          <Link to={faq.linkTo} className="text-gold hover:underline">
            {faq.linkText}
          </Link>
          {faq.linkEnding && <span>{faq.linkEnding}</span>}
        </>
      );
    }
    return <>{faq.a}</>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/services/pet-relocation-services"
        schema={[buildServiceSchema(), buildFAQSchema()]}
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
              <Heart className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">IATA Certified Pet Transport</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Pet Relocation Services in Pakistan — Safe, Stress-Free & IATA-Certified
            </h1>
            
            <img 
              src="/images/pet-relocation.png" 
              alt="Pet Relocation Services in Pakistan" 
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
                Get Free Pet Relocation Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Pet Specialists
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description with Internal Links - Direct JSX (no string) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                Planning to move abroad or relocate within Pakistan with your beloved pet? At
                international movers in Pakistan — Pakistan's most trusted international moving
                services — we offer comprehensive pet relocation services designed to make every journey
                safe, comfortable, and fully compliant with international regulations.
              </p>
              
              <p>
                Whether you're relocating from pet relocation Islamabad, pet movers Lahore, movers
                Rawalpindi, or packers and movers Peshawar, our experienced pet relocation specialists
                manage every detail — from IATA-compliant travel crates and veterinary health
                certificates to{" "}
                <Link to="/services/customs-clearance" className="text-gold hover:underline">customs clearance Pakistan</Link>
                {" and post-arrival guidance."}
              </p>
              
              <p>
                Your pet can travel via{" "}
                <Link to="/services/air-freight" className="text-gold hover:underline">air freight from Pakistan</Link>
                {" on major international airlines, or by road for domestic moves. Our team also coordinates professional packing services and secure storage facilities Pakistan if quarantine or delays require temporary accommodation for your pet."}
              </p>
              
              <p>
                We handle the most popular pet relocation routes including Pakistan to Dubai pet
                shipping, Pakistan to UK pet relocation, Pakistan to Canada movers, and moving to Saudi
                Arabia from Pakistan — ensuring full documentation compliance for each destination
                country's specific regulations.
              </p>
              
              <p>
                With 24/7 real-time tracking and 15+ years of experience, we are Pakistan's go-to choice
                for stress-free international and domestic pet relocation. Not sure whether air or sea
                is right for your shipment? Read our air freight vs sea freight Pakistan guide for full
                details.
              </p>
            </motion.div>

            {/* H2: Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Choose Best International Movers for Pet Relocation?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: "IATA Certified", desc: "Fully compliant crates and procedures" },
                  { icon: Award, title: "15+ Years Experience", desc: "Hundreds of successful pet relocations" },
                  { icon: Users, title: "Expert Pet Handlers", desc: "Trained in animal care & stress-free transport" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-gold" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Complete Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Complete Pet Relocation Process — Step by Step
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "Consultation", desc: "Free assessment & custom plan" },
                  { step: "2", title: "Documentation", desc: "Vet certificates & permits" },
                  { step: "3", title: "IATA Crate Setup", desc: "Airline-approved travel kennel" },
                  { step: "4", title: "Safe Transport", desc: "24/7 monitored journey" }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-6 bg-navy-light/30 rounded-xl border border-navy-light">
                    <div className="text-gold text-3xl font-bold mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                    {idx < 3 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gold/50" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Pet Relocation Services We Offer - ONLY ONE FEATURES SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Pet Relocation Services We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceData.featuresList.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Countries We Ship To */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Countries We Ship Pets To
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {serviceData.countries.map((country, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-navy-light/20 rounded-lg">
                    <Globe className="text-gold" size={16} />
                    <span className="text-foreground text-sm">{country}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions About Pet Relocation in Pakistan
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {renderFAQAnswer(faq)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Ready to Relocate Your Pet Safely?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of Pakistani families who have trusted Best International Movers for stress-free, professional pet relocation — locally and internationally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Pet Relocation Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Pet Specialists
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PetRelocationService;