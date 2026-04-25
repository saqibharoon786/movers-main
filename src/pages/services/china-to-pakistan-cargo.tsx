import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ship, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, Clock, Truck, Plane, Route } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "china-to-pakistan-cargo-services",
  icon: Ship,
  title: "Door-to-Door Cargo Services from China to Pakistan",
  subheading: "Sea, Air, CPEC & Express",
  desc: "Fast & affordable China to Pakistan cargo — sea freight (FCL/LCL), air freight, CPEC land route & express. Customs clearance included. WeChat + WhatsApp support. Get a free quote!",
  featuresList: [
    "Door-to-door cargo from any Chinese city to Pakistan — Islamabad, Lahore, Karachi, Peshawar",
    "Sea freight FCL & LCL from Shanghai, Ningbo, Guangzhou, Shenzhen & Qingdao to Karachi/Port Qasim",
    "Air freight — economy & express options to KHI, LHE & ISB airports",
    "CPEC land route via Khunjerab Pass / Karakoram Highway for bulk & heavy cargo",
    "DG (dangerous goods) certified — lithium batteries, chemicals, UN-classified cargo",
    "Complete customs clearance with PCFTA Phase II duty optimization",
    "Real-time shipment tracking from Chinese port to Pakistan delivery",
    "WeChat + WhatsApp coordination with China-based freight agents",
    "Cargo insurance coverage — loss, damage & theft from origin to destination",
    "Warehousing & storage at Karachi, Islamabad & Lahore on arrival",
    "Professional packing & crating in China before export",
    "All-in freight quotes — no hidden charges, transparent pricing"
  ],
  heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
  cities: [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", 
    "Peshawar", "Faisalabad", "Multan", "Quetta", 
    "Sialkot", "Gujranwala", "Hyderabad", "Abbottabad"
  ],
  faqs: [
    {
      q: "What is the cheapest way to ship cargo from China to Pakistan?",
      a: "For cargo above 1 CBM (cubic meter), LCL (Less than Container Load) sea freight is almost always the most economical option for China to Pakistan shipping. For very high volumes (above 20 CBM), FCL (Full Container Load) offers a significantly lower per-unit cost. For small parcels under 30kg, consolidated express services via DHL, FedEx, or our China express channel may be more cost-effective. We compare all available options and recommend the best solution based on your cargo size, type, and urgency — always with transparent, all-in pricing."
    },
    {
      q: "How long does sea freight from China to Pakistan take?",
      a: "Sea freight transit time from China to Pakistan depends on the origin port and shipping line. From Shanghai or Ningbo to Karachi, typical transit time is 18–25 days. From Guangzhou or Shenzhen, it's slightly shorter at 15–20 days. LCL shipments add 3–5 additional days for consolidation and deconsolidation. Air freight from China to Pakistan takes just 5–7 days, while CPEC road freight via Khunjerab typically takes 10–15 days depending on border processing times."
    },
    {
      q: "What are the current import duties on Chinese goods in Pakistan?",
      a: "Import duties on Chinese goods in Pakistan vary by HS code and product category, ranging from 0% to 35%, plus applicable sales tax (17%) and additional customs duties. Under the Pakistan-China Free Trade Agreement (PCFTA) Phase II, thousands of Chinese product categories enjoy preferential or zero-duty tariff rates. Our customs clearance team calculates your exact landed cost — including duties, taxes, and clearance fees — before you finalize your import decision.",
      hasLink: true,
      linkTo: "/blog/customs-regulations-guide-pakistan",
      linkText: "customs regulations guide Pakistan",
      linkSentence: "For complete customs information, read our ",
      linkEnding: "."
    },
    {
      q: "Can I ship lithium batteries from China to Pakistan?",
      a: "Yes, but lithium batteries are classified as dangerous goods (DG) under UN3480 (standalone) and UN3481 (packed with or contained in equipment) and require special handling. They can be shipped by sea freight with restrictions and specific packing certifications, or by air freight in full compliance with IATA DGR regulations. Our DG-certified team manages all required documentation, packaging specifications, and airline approvals — ensuring safe and compliant delivery to Pakistan."
    },
    {
      q: "What is the CPEC cargo route and how does it work?",
      a: "The CPEC (China-Pakistan Economic Corridor) land route connects China to Pakistan via the Karakoram Highway (KKH) and Khunjerab Pass — the world's highest paved international border crossing at 4,693m. Cargo trucks move from Chinese cities to Kashgar, cross the Khunjerab Pass into Gilgit-Baltistan, and then continue to major Pakistani cities. This route is ideal for bulk, oversized, or heavy machinery that is difficult or expensive to ship by sea or air. Transit time is typically 10–15 days."
    },
    {
      q: "Do I need a customs agent for importing goods from China to Pakistan?",
      a: "Yes. All commercial imports from China into Pakistan require proper customs clearance through Pakistan Customs (FBR). You will need a valid NTN (National Tax Number), an import license for regulated goods, and a complete set of shipping documents including Commercial Invoice, Packing List, Bill of Lading or Airway Bill, and Certificate of Origin. Our licensed customs clearance team handles this entire process on your behalf, ensuring compliance and minimizing clearance delays."
    },
    {
      q: "What Chinese cities do you ship from?",
      a: "We coordinate shipments from all major Chinese manufacturing and trade hubs — including Shanghai, Ningbo, Guangzhou, Shenzhen, Qingdao, Tianjin, Xiamen, Yiwu, and Hangzhou. Our China-based agents work directly with local suppliers and factories on your behalf, handling export customs, container stuffing, and documentation from origin."
    },
    {
      q: "Can you handle oversized machinery and industrial equipment from China?",
      a: "Absolutely. We specialize in project cargo, heavy machinery, and OOG (Out of Gauge) shipments from China to Pakistan — using flat rack, open top, and breakbulk vessels where standard containers are insufficient. We provide detailed stowage and lashing plans, export permits, and customs documentation for all types of industrial equipment, generators, transformers, and manufacturing machinery."
    },
    {
      q: "Is my China to Pakistan cargo insured during transit?",
      a: "Yes. We strongly recommend — and provide — comprehensive cargo insurance for all China to Pakistan shipments, covering loss, theft, and physical damage from the point of origin in China to final delivery in Pakistan. Our all-risk policies are issued by Pakistan's leading insurance underwriters and are Letter of Credit (LC) compliant. Premium rates typically range from 0.5% to 2% of declared cargo value.",
      hasLink: true,
      linkTo: "/services/cargo-insurance",
      linkText: "comprehensive cargo insurance",
      linkSentence: "Learn more about our ",
      linkEnding: " coverage."
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
        "@id": "https://bestintlmovers.com/services/china-to-pakistan-cargo-services#service",
        "name": "China to Pakistan Cargo Service | Door-to-Door | Best International Movers",
        "serviceType": "International Cargo Shipping",
        "description": "Fast & affordable China to Pakistan cargo — sea freight FCL/LCL, air freight, CPEC land route & express. Customs clearance, insurance & door-to-door delivery.",
        "url": "https://bestintlmovers.com/services/china-to-pakistan-cargo-services",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "Pakistan" },
          { "@type": "Country", "name": "China" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "China to Pakistan Cargo Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sea Freight FCL China to Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LCL Consolidation China to Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Freight China to Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CPEC Land Route Cargo Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DG Cargo Lithium Battery Shipping Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door to Door China Pakistan Delivery" } }
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
        "name": "Services", 
        "item": "https://bestintlmovers.com/services" 
      },
      { 
        "@type": "ListItem", 
        "position": 3,
        "name": "China to Pakistan Cargo",
        "item": "https://bestintlmovers.com/services/china-to-pakistan-cargo" 
      }
    ]
  };
}

const ChinaToPakistanCargoService = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "China to Pakistan Cargo Service | Door-to-Door | Best Intl Movers",
    description: "Fast & affordable China to Pakistan cargo — sea freight (FCL/LCL), air freight, CPEC land route & express. Customs clearance included. WeChat + WhatsApp support. Get a free quote!",
    keywords: "China to Pakistan cargo service, China to Pakistan shipping, import from China to Pakistan, China Pakistan freight forwarding, CPEC cargo service, sea freight China to Pakistan, air freight China to Pakistan, FCL LCL China Pakistan, door to door cargo China Pakistan, China to Karachi shipping, China to Islamabad cargo, import duties China goods Pakistan, PCFTA shipping Pakistan, lithium battery shipping Pakistan, China Pakistan express cargo, best China to Pakistan freight company",
    canonicalUrl: "https://bestintlmovers.com/services/china-to-pakistan-cargo-services"
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
      {/* SEO Component with all schemas */}
      <SEO 
        title={`${serviceData.title} | Best International Movers`}
        description={serviceData.desc}
        keywords={`${serviceData.title}, China to Pakistan shipping, import from China, CPEC cargo, sea freight, air freight, door to door cargo`}
        urlPath="/services/china-to-pakistan-cargo-services"
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
            <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Ship className="text-gold" size={16} />
              <span className="text-gold text-sm font-medium">CPEC Certified</span>
              <span className="text-white/30">|</span>
              <span className="text-gold text-sm font-medium">WeChat + WhatsApp Support</span>
              <span className="text-white/30">|</span>
              <span className="text-gold text-sm font-medium">FCL · LCL · Air · Express</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              China to Pakistan Cargo Services
            </h1>
            
            <img 
              src="/images/china-to-pakistan-cargo.jpg" 
              alt="Door-to-Door Cargo Services from China to Pakistan" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {serviceData.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free China to Pakistan Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our China Cargo Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description with 18 Internal Links - Direct JSX */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                Pakistan is one of China's most important trading partners, and the
                China-Pakistan Economic Corridor (CPEC) has transformed cross-border trade
                between the two nations like never before. Whether you are importing
                electronics, machinery, textiles, raw materials, furniture, or consumer
                goods from China, our specialized{" "}
                <Link to="/door-to-door-cargo-pakistan" className="text-gold hover:underline">
                  door-to-door cargo service
                </Link>
                {" from China to Pakistan provides the fastest routes, lowest freight rates, and most reliable delivery — handled end-to-end by Best International Movers & Logistics, Pakistan's most trusted logistics company with 15+ years of experience."}
              </p>

              <p>
                We offer three core shipping modes from China to Pakistan. Our{" "}
                <Link to="/services/sea-freight" className="text-gold hover:underline">
                  sea freight service
                </Link>
                {" handles FCL (Full Container Load) and LCL (Less than Container Load) shipments from major Chinese ports — Shanghai, Ningbo, Guangzhou, Shenzhen, and Qingdao — direct to Karachi and Port Qasim. For urgent shipments, our air freight from China to Pakistan delivers to Karachi (KHI), Lahore (LHE), and Islamabad (ISB) airports with both economy and express options — including DG certified cargo such as lithium batteries and industrial chemicals. For the most cost-effective overland option, our CPEC land route via the Karakoram Highway and Khunjerab Pass is ideal for bulk and heavy cargo from Northern China."}
              </p>

              <p>
                Once your cargo arrives in Pakistan, our expert team handles complete customs
                clearance — including HS code classification, duty calculation under the
                Pakistan-China Free Trade Agreement (PCFTA Phase II), and all import documentation.
                Use our free Pakistan customs duty calculator to estimate your import costs before
                your shipment departs China. We then arrange domestic goods transportation to your
                final destination — whether that's Islamabad, Rawalpindi, Lahore, Peshawar, or any
                other city across Pakistan.
              </p>

              <p>
                Every China to Pakistan shipment we handle is fully protected with our comprehensive
                cargo insurance — covering loss, damage, and theft from Chinese port to your doorstep
                in Pakistan. If your goods require temporary holding upon arrival, we offer secure
                warehousing and storage facilities in Karachi, Islamabad, and Lahore. Our China-based
                agents communicate via WeChat and WhatsApp, ensuring real-time coordination throughout
                your shipment's journey. For additional logistics support, explore our full freight
                forwarding services.
              </p>

              <p>
                Need to understand shipping costs before committing? Read our complete international
                shipping cost guide for Pakistan. Not sure whether air or sea is right for your China
                cargo? Our air freight vs sea freight comparison breaks down cost, transit time, and
                risk by route — helping you choose the smartest option for your specific cargo type
                and urgency.
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
                Why Choose Best International Movers for China to Pakistan Cargo?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: "China-Based Agents", desc: "WeChat + WhatsApp coordination from origin" },
                  { icon: Award, title: "CPEC Specialists", desc: "Expert in land route via Khunjerab Pass" },
                  { icon: Users, title: "PCFTA Duty Experts", desc: "Preferential tariff optimization" }
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

            {/* H2: Shipping Modes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                China to Pakistan Shipping Modes — Which is Right for You?
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: Ship, title: "Sea Freight", desc: "FCL/LCL | 15-25 days | Best for bulk" },
                  { icon: Plane, title: "Air Freight", desc: "Economy/Express | 5-7 days | Best for urgent" },
                  { icon: Route, title: "CPEC Land", desc: "Bulk cargo | 10-15 days | Best for heavy" },
                  { icon: Truck, title: "Express", desc: "Parcels <30kg | 3-5 days | Best for small" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-navy-light/30 rounded-xl text-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="text-gold" size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Services We Offer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our China to Pakistan Cargo Services
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

            {/* H2: Cities We Deliver To */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Cities We Deliver To Across Pakistan
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {serviceData.cities.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-navy-light/20 rounded-lg">
                    <MapPin className="text-gold" size={16} />
                    <span className="text-foreground text-sm">{city}</span>
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
                Frequently Asked Questions — China to Pakistan Shipping
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
                Ready to Import from China? Get Your Free Quote Now
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From single parcels to FCL containers — we move your Chinese cargo to any city in Pakistan with full customs support, insurance & real-time tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free China to Pakistan Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our China Cargo Team
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

export default ChinaToPakistanCargoService;