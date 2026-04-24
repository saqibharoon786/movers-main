import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, FileCheck, Globe, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "cargo-insurance",
  icon: Shield,
  title: "Cargo Insurance Services in Pakistan",
  subheading: "Complete Protection for Every Shipment",
  desc: "Protect your shipment with comprehensive cargo insurance in Pakistan. All-risk, marine, air & inland transit coverage. Claims support included. Get a free quote today!",
  featuresList: [
    "All-risk cargo insurance — comprehensive protection against all physical loss or damage",
    "Named perils insurance — cost-effective coverage for specific listed risks",
    "Marine open cover policies — ideal for businesses with regular sea freight shipments",
    "Air cargo insurance — fast coverage for time-sensitive international air shipments",
    "Inland transit insurance — full protection for domestic cargo movements within Pakistan",
    "Full claims assistance & documentation support from experienced insurance specialists",
    "Competitive premiums — 0.5% to 2% of cargo value based on route & packaging",
    "Coverage for household goods, commercial cargo, fragile items & high-value shipments",
    "Works with Pakistan's leading insurance underwriters for guaranteed claim settlements",
    "Letter of Credit (LC) compliant insurance certificates issued promptly"
  ],
  heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "China", "Singapore"
  ],
  faqs: [
    {
      q: "Is cargo insurance mandatory for international shipping from Pakistan?",
      a: "While not legally mandatory, cargo insurance is strongly recommended and often required by banks for Letter of Credit (LC) transactions. Most commercial shipments — whether via sea freight or air freight — require proof of insurance before goods are released. Without it, you rely solely on carrier liability, which typically covers only a fraction of your cargo's actual value. Our team helps you obtain the right policy before your shipment departs."
    },
    {
      q: "What is the difference between all-risk and named perils cargo insurance?",
      a: "All-risk cargo insurance covers every type of physical loss or damage to your goods unless a specific risk is explicitly excluded in the policy — offering the broadest possible protection. Named perils insurance, on the other hand, only covers risks that are explicitly listed in the policy, such as fire, sinking, collision, and theft. All-risk is recommended for high-value shipments, while named perils is a cost-effective option for lower-risk, bulk cargo."
    },
    {
      q: "How are cargo insurance premiums calculated in Pakistan?",
      a: "Cargo insurance premiums in Pakistan are calculated based on several factors including the declared cargo value, shipping route and destination, mode of transport (sea, air, or road), quality of packaging, commodity type, and your past claims history. Typical premium rates range from 0.5% to 2% of the total cargo value.",
      hasLink: true,
      linkTo: "/blog/international-shipping-cost-pakistan",
      linkText: "international shipping cost from Pakistan",
      linkSentence: "For a full breakdown of shipping expenses, check out our guide on ",
      linkEnding: " — which directly affects your insurance premium calculation."
    },
    {
      q: "Does cargo insurance cover theft and pilferage?",
      a: "Yes. Our all-risk cargo insurance policies include coverage for theft, pilferage, and non-delivery — common risks on high-value shipments. Named perils policies may or may not include theft depending on the specific policy terms. We always recommend all-risk coverage for electronics, garments, machinery, and any high-value goods in transit."
    },
    {
      q: "What documents are needed to file a cargo insurance claim?",
      a: "To file a cargo insurance claim, you'll typically need: the original insurance certificate, commercial invoice, bill of lading or airway bill, packing list, survey/damage report, and a written claim letter. Our claims assistance team handles all documentation and communicates directly with underwriters to ensure fast and fair claim settlements."
    },
    {
      q: "Do you provide cargo insurance for domestic shipments within Pakistan?",
      a: "Yes. Our inland transit insurance covers domestic cargo movements across all major Pakistani cities including Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, and Faisalabad. Whether you're moving goods by road or rail within Pakistan, we ensure full coverage against loss, damage, and theft throughout the journey."
    },
    {
      q: "Can I get cargo insurance if I'm using my own freight forwarder?",
      a: "Absolutely. Our cargo insurance services are independent of your freight forwarder or shipping line. You can arrange insurance with us regardless of which carrier or logistics provider you use. We issue internationally recognized insurance certificates that are accepted by banks, customs authorities, and overseas consignees worldwide."
    },
    {
      q: "What does marine open cover policy mean for regular shippers?",
      a: "A marine open cover policy is an annual agreement that automatically covers all your sea freight shipments without needing to insure each consignment individually. It's ideal for businesses with regular shipping volumes — offering better premiums, faster processing, and continuous protection.",
      hasLink: true,
      linkTo: "/container-shipping-pakistan",
      linkText: "container shipping Pakistan",
      linkSentence: "This works perfectly for regular ",
      linkEnding: " shipments where goods move frequently."
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
        "@id": "https://bestintlmovers.com/services/cargo-insurance#service",
        "name": "Cargo Insurance Services in Pakistan | Best International Movers",
        "serviceType": "Cargo Insurance",
        "description": "Comprehensive cargo insurance for sea, air & inland shipments from Pakistan. All-risk, named perils & marine open cover with claims support.",
        "url": "https://bestintlmovers.com/services/cargo-insurance",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cargo Insurance Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "All-Risk Cargo Insurance" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marine Open Cover Policy" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Cargo Insurance Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inland Transit Insurance Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cargo Claims Assistance" } }
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

const CargoInsuranceService = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Cargo Insurance Services in Pakistan | Best International Movers",
    description: "Protect your shipment with comprehensive cargo insurance in Pakistan. All-risk, marine, air & inland transit coverage. Claims support included. Get a free quote today!",
    keywords: "cargo insurance Pakistan, shipping insurance Pakistan, marine cargo insurance Pakistan, freight insurance Pakistan, all-risk cargo insurance, goods in transit insurance Pakistan, international cargo insurance, cargo insurance Islamabad, cargo insurance Lahore, sea freight insurance Pakistan, air cargo insurance Pakistan, inland transit insurance, cargo claims assistance Pakistan, shipping loss damage coverage",
    canonicalUrl: "https://bestintlmovers.com/services/cargo-insurance"
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
        urlPath="/services/cargo-insurance"
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
              <Shield className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Comprehensive Freight Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Cargo Insurance Services in Pakistan — Complete Protection for Every Shipment
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {seoConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free Cargo Insurance Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Insurance Specialists
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description with Internal Links - Direct JSX */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                Shipping cargo without proper insurance is a risk no business or family should take. Whether 
                you're sending goods via{" "}
                <Link to="/services/sea-freight" className="text-gold hover:underline">sea freight from Pakistan</Link>
                {", "}
                <Link to="/services/air-freight" className="text-gold hover:underline">air freight</Link>
                {", or through "}
                <Link to="/goods-transportation-pakistan" className="text-gold hover:underline">domestic goods transportation</Link>
                {", standard carrier liability rarely covers the full value of your goods in case of loss, damage, or theft. At "}
                <Link to="/" className="text-gold hover:underline">Best International Movers & Logistics</Link>
                {" — Pakistan's most trusted "}
                <Link to="/logistics-services-pakistan" className="text-gold hover:underline">logistics company in Pakistan</Link>
                {" — we provide comprehensive cargo insurance solutions tailored to your shipment type, value, and destination."}
              </p>

              <p>
                Our cargo insurance services cover{" "}
                <Link to="/cargo-services-pakistan" className="text-gold hover:underline">all types of cargo shipments from Pakistan</Link>
                {" — from household goods and personal effects to commercial consignments, industrial equipment, and fragile valuables. We work with leading insurance underwriters to offer all-risk policies, named perils coverage, and "}
                <Link to="/services/sea-freight" className="text-gold hover:underline">marine open cover for regular sea freight shippers</Link>
                {" — all at competitive premiums with full "}
                <Link to="/services/customs-clearance" className="text-gold hover:underline">customs clearance Pakistan</Link>
                {" claims assistance."}
              </p>

              <p>
                Whether you're moving from{" "}
                <Link to="/cargo-service-islamabad" className="text-gold hover:underline">Islamabad</Link>
                {", "}
                <Link to="/cargo-service-rawalpindi" className="text-gold hover:underline">Rawalpindi</Link>
                {", "}
                <Link to="/movers-lahore" className="text-gold hover:underline">Lahore</Link>
                {", or "}
                <Link to="/movers-and-packers-in-peshawar" className="text-gold hover:underline">Peshawar</Link>
                {" — or shipping to destinations like "}
                <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline">Dubai</Link>
                {", "}
                <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">UK</Link>
                {", "}
                <Link to="/pakistan-to-canada-movers" className="text-gold hover:underline">Canada</Link>
                {", or "}
                <Link to="/pakistan-to-usa-movers" className="text-gold hover:underline">USA</Link>
                {" — our insurance specialists ensure your cargo is fully covered at every stage of the journey. For shipment cost planning, use our "}
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">Pakistan customs duty calculator</Link>
                {"."}
              </p>

              <p>
                Need help understanding customs regulations that affect your coverage? Read our complete{" "}
                <Link to="/blog/customs-regulations-guide-pakistan" className="text-gold hover:underline">
                  Pakistan customs import regulations guide
                </Link>
                {". Comparing shipping modes? Our "}
                <Link to="/blog/air-freight-vs-sea-freight-pakistan" className="text-gold hover:underline">
                  air freight vs sea freight comparison
                </Link>
                {" breaks down cost, speed, and risk — helping you choose the right insurance policy for your shipment."}
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
                Why Choose Best International Movers for Cargo Insurance?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: "Leading Underwriters", desc: "Work with Pakistan's top insurance providers" },
                  { icon: Award, title: "100% Claim Support", desc: "Full assistance from filing to settlement" },
                  { icon: Users, title: "10+ Years Experience", desc: "Thousands of successful insurance placements" }
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

            {/* H2: Features Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Cargo Insurance Coverage We Offer
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

            {/* H2: Countries We Cover */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Countries We Provide Cargo Insurance For
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
                Frequently Asked Questions About Cargo Insurance in Pakistan
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
                Protect Your Cargo Before It Leaves Pakistan
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of Pakistani businesses and families who ship with confidence — fully insured, fully covered, with Best International Movers & Logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Cargo Insurance Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Insurance Specialists
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

export default CargoInsuranceService;