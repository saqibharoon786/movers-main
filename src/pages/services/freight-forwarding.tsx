import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "freight-forwarding",
  icon: Route,
  title: "Freight Forwarding Services in Pakistan",
  subheading: "Sea, Air & Road — FCL to Last Mile",
  desc: "Pakistan's trusted freight forwarding company — sea, air & road freight, customs clearance, warehousing & door-to-door delivery. FCL, LCL & DG cargo. Get a free quote!",
  featuresList: [
    "Sea freight forwarding — FCL & LCL via Karachi & Port Qasim with top global carriers",
    "Air freight forwarding — DG certified, time-critical cargo with major international airlines",
    "Road freight corridors — domestic Pakistan + cross-border Afghanistan, Iran & Central Asia",
    "Full customs clearance & export/import documentation — Bills of Lading, AWBs, COOs",
    "All Incoterms supported — EXW, FCA, FOB, CFR, CIF, DAP, DDP and more",
    "Warehousing, consolidation & distribution — LCL groupage and cargo deconsolidation",
    "Real-time shipment tracking & proactive exception management",
    "Special equipment handling — OOG, flat rack, reefer, and hazardous cargo",
    "Letter of Credit (LC) documentation and bank-compliant freight paperwork",
    "Dedicated freight coordinator assigned to every shipment for end-to-end accountability"
  ],
  heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "China", "Singapore", "Afghanistan", "Iran"
  ],
  faqs: [
    {
      q: "What is the difference between a freight forwarder and a shipping agent?",
      a: "A freight forwarder manages your entire logistics chain — booking cargo space, preparing export documents, arranging customs clearance, and coordinating last-mile delivery. A shipping agent, on the other hand, represents the vessel or airline at a specific port and handles vessel operations. Freight forwarders provide a far broader and more complete service, often working alongside shipping agents to execute your shipment from origin to destination."
    },
    {
      q: "How do I get a freight forwarding quote from Pakistan?",
      a: "Simply share your cargo details — origin city, destination country, commodity type, weight, volume (CBM), and any special requirements such as temperature control or hazardous classification. Our freight team provides a detailed all-in quotation including ocean or air freight, local charges, customs clearance fees, and estimated transit time within 24 hours."
    },
    {
      q: "What Incoterms do you support for freight forwarding?",
      a: "We handle shipments under all 11 standard Incoterms 2020 rules — including EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, and DDP. Our trade consultants advise on the most commercially favorable terms for your specific trade lane, helping you minimize cost, risk, and liability at every point in the supply chain."
    },
    {
      q: "What is the difference between FCL and LCL freight?",
      a: "FCL (Full Container Load) means your cargo occupies an entire shipping container — ideal for large volumes, offering faster transit and lower per-unit cost. LCL (Less than Container Load) means your cargo is consolidated with other shippers' goods in a shared container — perfect for smaller shipments. We handle both FCL and LCL from Karachi and Port Qasim to destinations worldwide.",
      hasLink: true,
      linkTo: "/container-shipping-pakistan",
      linkText: "container shipping Pakistan",
      linkSentence: "Learn more about ",
      linkEnding: " options for your cargo."
    },
    {
      q: "Do you handle dangerous goods (DG) freight forwarding?",
      a: "Yes. Our team is certified to handle DG (dangerous goods) cargo by both sea and air, in full compliance with IMDG (sea) and IATA DGR (air) regulations. We manage proper classification, packing, labeling, and documentation for all classes of hazardous materials — including chemicals, batteries, flammables, and industrial gases."
    },
    {
      q: "How long does international freight forwarding from Pakistan take?",
      a: "Transit times vary by mode and destination. Sea freight from Karachi to Dubai takes 5–8 days; to UK 20–28 days; to Canada/USA 30–40 days. Air freight is significantly faster — typically 3–7 days to most destinations. We provide estimated transit times with every quotation and offer expedited options for urgent cargo."
    },
    {
      q: "Can you handle freight forwarding for oversized or project cargo?",
      a: "Absolutely. We specialize in project cargo, OOG (Out of Gauge), heavy lift, and breakbulk shipments using flat rack, open top, and special equipment containers. Our project freight team provides detailed stowage plans, permits, and escorts for oversized industrial equipment, machinery, and infrastructure components."
    },
    {
      q: "Do you offer door-to-door freight forwarding from Pakistan?",
      a: "Yes. Our door-to-door freight service covers the complete journey — from pickup at your factory, warehouse, or home in Pakistan to final delivery at your buyer's or receiver's address anywhere in the world. This includes export documentation, origin charges, sea or air freight, destination customs clearance, and last-mile delivery.",
      hasLink: true,
      linkTo: "/door-to-door-cargo-pakistan",
      linkText: "door to door cargo Pakistan",
      linkSentence: "Explore our full ",
      linkEnding: " service for hassle-free shipping."
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
        "@id": "https://bestintlmovers.com/services/freight-forwarding#service",
        "name": "Freight Forwarding Services in Pakistan | Best International Movers",
        "serviceType": "Freight Forwarding",
        "description": "Pakistan's trusted freight forwarding — sea, air & road freight, FCL, LCL, DG cargo, customs clearance & door-to-door delivery.",
        "url": "https://bestintlmovers.com/services/freight-forwarding",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Freight Forwarding Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FCL Sea Freight Forwarding Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LCL Consolidation Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Freight Forwarding Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Road Freight Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DG Cargo Forwarding Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door to Door Freight Pakistan" } }
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
        "name": "Freight Forwarding",
        "item": "https://bestintlmovers.com/services/freight-forwarding" 
      }
    ]
  };
}

const FreightForwardingService = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Freight Forwarding Services in Pakistan | Best International Movers",
    description: "Pakistan's trusted freight forwarding company — sea, air & road freight, customs clearance, warehousing & door-to-door delivery. FCL, LCL & DG cargo. Get a free quote!",
    keywords: "freight forwarding Pakistan, freight forwarding company Pakistan, international freight forwarder Pakistan, sea freight forwarding Pakistan, air freight forwarding Pakistan, FCL LCL freight Pakistan, customs clearance freight forwarder, freight forwarding Islamabad, freight forwarding Lahore, road freight Pakistan, DG cargo Pakistan, freight quotation Pakistan, Incoterms Pakistan, door to door freight Pakistan",
    canonicalUrl: "https://bestintlmovers.com/services/freight-forwarding"
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
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/services/freight-forwarding"
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
              <Route className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Global Logistics Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              International Freight Forwarding Services in Pakistan — Sea, Air & Road, FCL to Last Mile
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
                Get Free Freight Forwarding Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Freight Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description with 16 Internal Links - Direct JSX */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                As one of Pakistan's most experienced{" "}
                <Link to="/logistics-services-pakistan" className="text-gold hover:underline">
                  logistics and freight forwarding companies
                </Link>
                {", Best International Movers & Logistics manages the complete international logistics chain for your cargo — from origin pickup and export documentation to "}
                <Link to="/services/customs-clearance" className="text-gold hover:underline">
                  customs clearance Pakistan
                </Link>
                {" and final delivery at your destination. Whether you are an importer, exporter, trading company, or individual shipper, our freight forwarding team ensures your goods move efficiently, cost-effectively, and on time — every time."}
              </p>

              <p>
                We offer full-spectrum freight forwarding across all major transport modes. Our{" "}
                <Link to="/services/sea-freight" className="text-gold hover:underline">
                  sea freight services
                </Link>
                {" cover both FCL (Full Container Load) and LCL (Less than Container Load) shipments via Karachi and Port Qasim — working with global carriers including Maersk, MSC, and Hapag-Lloyd. For urgent consignments, our "}
                <Link to="/services/air-freight" className="text-gold hover:underline">
                  air freight forwarding
                </Link>
                {" team coordinates with Emirates SkyCargo, DHL, and other major airlines to move your cargo fast, including DG (dangerous goods) certified shipments."}
              </p>

              <p>
                Our freight forwarding operations cover all major Pakistani cities — including{" "}
                <Link to="/freight-forwarding-islamabad" className="text-gold hover:underline">
                  freight forwarding Islamabad
                </Link>
                {", "}
                <Link to="/cargo-service-rawalpindi" className="text-gold hover:underline">
                  Rawalpindi
                </Link>
                {", "}
                <Link to="/movers-lahore" className="text-gold hover:underline">
                  Lahore
                </Link>
                {", Karachi, and "}
                <Link to="/movers-and-packers-in-peshawar" className="text-gold hover:underline">
                  Peshawar
                </Link>
                {" — as well as cross-border road freight corridors to Afghanistan, Iran, and Central Asia. We also offer "}
                <Link to="/goods-transportation-pakistan" className="text-gold hover:underline">
                  domestic goods transportation across Pakistan
                </Link>
                {" with full tracking and proof of delivery."}
              </p>

              <p>
                Every shipment we handle includes complete documentation support — Bills of Lading, Airway Bills, Certificates of Origin, Packing Lists, and all export/import permits. We support all standard Incoterms including EXW, FOB, CIF, DAP, and DDP. Need to estimate your import costs? Use our free{" "}
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                  Pakistan customs duty calculator
                </Link>
                {". For popular international shipping routes, we specialize in "}
                <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline">
                  Pakistan to Dubai freight
                </Link>
                {", "}
                <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">
                  Pakistan to UK
                </Link>
                {", "}
                <Link to="/pakistan-to-canada-movers" className="text-gold hover:underline">
                  Pakistan to Canada
                </Link>
                {", and "}
                <Link to="/pakistan-to-usa-movers" className="text-gold hover:underline">
                  Pakistan to USA
                </Link>
                {" — all with competitive all-in freight rates."}
              </p>

              <p>
                Not sure whether to ship by sea or air? Our detailed{" "}
                <Link to="/blog/air-freight-vs-sea-freight-pakistan" className="text-gold hover:underline">
                  air freight vs sea freight comparison guide
                </Link>
                {" breaks down cost, transit time, and risk — helping you make the smartest decision for your cargo. For a full picture of international shipping costs, read our "}
                <Link to="/blog/international-shipping-cost-pakistan" className="text-gold hover:underline">
                  international shipping cost guide for Pakistan
                </Link>
                {"."}
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
                Why Choose Best International Movers for Freight Forwarding?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: "Global Carrier Network", desc: "Partners with Maersk, MSC, DHL & Emirates SkyCargo" },
                  { icon: Award, title: "15+ Years Experience", desc: "Thousands of successful shipments worldwide" },
                  { icon: Users, title: "Dedicated Freight Coordinator", desc: "End-to-end accountability for every shipment" }
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

            {/* H2: Complete Freight Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Complete Freight Forwarding Process — Step by Step
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "Consultation", desc: "Free assessment & freight planning" },
                  { step: "2", title: "Booking & Docs", desc: "Space booking & export documentation" },
                  { step: "3", title: "Customs Clearance", desc: "Export/import customs clearance" },
                  { step: "4", title: "Last Mile Delivery", desc: "Final delivery & proof of delivery" }
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

            {/* H2: Freight Forwarding Services We Offer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Freight Forwarding Services We Offer
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
                Countries We Provide Freight Forwarding To
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
                Frequently Asked Questions About Freight Forwarding in Pakistan
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
                Ready to Move Your Cargo? Get a Free Freight Quote Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From FCL containers to single parcels — Best International Movers handles every shipment with speed, precision, and full documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Freight Forwarding Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Freight Team
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

export default FreightForwardingService;