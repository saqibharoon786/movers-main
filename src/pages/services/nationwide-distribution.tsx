import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, Clock, Building, Warehouse, Thermometer, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "nationwide-distribution-services",
  icon: Truck,
  title: "Nationwide Distribution Services in Pakistan",
  subheading: "300+ Cities, B2B to Last Mile",
  desc: "Pakistan's most reliable nationwide distribution — 300+ cities, B2B, e-commerce, pharma cold chain & FMCG. COD, reverse logistics & digital POD. Get a free quote today!",
  featuresList: [
    "B2B distribution — manufacturer to retailer, primary & secondary distribution Pakistan",
    "E-commerce last-mile delivery with COD, reverse logistics & digital proof of delivery (POD)",
    "Pharma cold chain distribution — GDP-compliant, 2–8°C refrigerated vehicles & temp logging",
    "FMCG primary & secondary distribution across 300+ cities and towns in Pakistan",
    "Warehousing, fulfillment & cross-docking with real-time inventory visibility",
    "Route optimization & digital reporting dashboards for full supply chain control",
    "COD remittance within 24–48 hours for high-volume e-commerce sellers",
    "Dedicated distribution hubs in Karachi, Lahore, Islamabad, Rawalpindi & Peshawar",
    "Second & third-tier city coverage — rural areas and remote district delivery",
    "Temperature-controlled storage for pharma, food & sensitive commodity distribution",
    "Cargo insurance available for all high-value distribution consignments",
    "Single-window solution — import, customs clearance & nationwide distribution"
  ],
  heroImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920",
  industries: [
    "FMCG (Food, Beverages, Personal Care)",
    "Pharmaceuticals & Healthcare",
    "E-commerce & Online Retail",
    "Electronics & Appliances",
    "Garments & Textiles",
    "Automotive Parts & Accessories",
    "Industrial Goods & Machinery",
    "Construction Materials"
  ],
  cities: [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", 
    "Peshawar", "Faisalabad", "Multan", "Quetta", 
    "Sialkot", "Gujranwala", "Hyderabad", "Abbottabad",
    "Sukkur", "Bahawalpur", "Sargodha", "Mardan"
  ],
  faqs: [
    {
      q: "Do you cover rural areas and small towns across Pakistan?",
      a: "Yes. Our nationwide distribution network covers over 300 cities, towns, and districts across Pakistan — including second and third-tier cities in Punjab, Sindh, KPK, and Balochistan. For very remote areas beyond our primary route network, we partner with verified local agents to ensure reliable last-mile reach. No matter where your customers or retailers are located — from Gilgit to Gwadar, Muzaffarabad to Dera Ismail Khan — we deliver."
    },
    {
      q: "What is your cash-on-delivery (COD) remittance cycle?",
      a: "We offer COD remittance within 24–48 hours of delivery confirmation for businesses with regular volumes and established accounts. For standard accounts, remittance is processed within 3–5 business days. Our digital COD management system provides real-time visibility into collected amounts, pending remittances, and delivery statuses — keeping your cash flow predictable and your accounts reconciled accurately."
    },
    {
      q: "Can you handle temperature-sensitive pharmaceuticals across Pakistan?",
      a: "Absolutely. Our GDP-compliant cold chain distribution network operates 2–8°C refrigerated vehicles equipped with continuous temperature loggers and validated Standard Operating Procedures (SOPs) for vaccines, medicines, biologics, and temperature-sensitive diagnostics. All pharma distribution staff are trained in cold chain management. We maintain climate-controlled storage facilities in Karachi, Islamabad, and Lahore as staging points for nationwide pharma distribution."
    },
    {
      q: "What is the difference between primary and secondary FMCG distribution?",
      a: "Primary distribution refers to the movement of goods from manufacturer or importer warehouses to regional distribution centers or large wholesalers. Secondary distribution covers the movement from those distribution centers to retailers, kiryana stores, and end points. We handle both primary and secondary FMCG distribution across Pakistan — providing businesses with end-to-end supply chain coverage without needing multiple logistics partners."
    },
    {
      q: "Do you offer reverse logistics and product return management?",
      a: "Yes. Our reverse logistics service manages the full returns cycle for e-commerce businesses — including failed delivery attempts, customer returns, and damaged goods recovery. We provide digital reporting on return reasons, product condition upon return, and restocking status — helping you minimize losses and optimize your forward delivery success rates."
    },
    {
      q: "How does your digital proof of delivery (POD) system work?",
      a: "Our delivery staff use mobile-based POD applications that capture recipient signature, GPS location, timestamp, and delivery photo at the point of delivery. This data is instantly uploaded to our client dashboard — giving you real-time confirmation of every successful delivery. POD data is also used for COD reconciliation, dispute resolution, and delivery performance reporting."
    },
    {
      q: "Can you distribute goods directly from port after customs clearance?",
      a: "Yes. We offer a seamless port-to-retailer distribution solution — combining our customs clearance service at Karachi and Port Qasim with direct nationwide distribution to your retailers, distributors, or customers. This eliminates the need for a separate logistics partner and significantly reduces transit time from import to sale."
    },
    {
      q: "What industries do you serve with nationwide distribution?",
      a: "We serve a wide range of industries including FMCG (food, beverages, personal care), pharmaceuticals, e-commerce, electronics, garments, industrial goods, automotive parts, and construction materials. Each industry has specific distribution requirements — we tailor our fleet, routing, handling procedures, and reporting to match your sector's standards and compliance needs."
    },
    {
      q: "How do I get started with your nationwide distribution service?",
      a: "Getting started is simple. Contact our distribution team via phone or WhatsApp with details about your product type, distribution volume, target cities, and any special handling requirements (cold chain, fragile, etc.). We'll provide a customized distribution plan, pricing, and SLA within 24 hours — along with a free pilot run for qualifying businesses."
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
        "@id": "https://bestintlmovers.com/services/nationwide-distribution-services#service",
        "name": "Nationwide Distribution Services in Pakistan | Best International Movers",
        "serviceType": "Nationwide Distribution",
        "description": "Pakistan's most reliable nationwide distribution — 300+ cities, B2B, e-commerce, pharma cold chain & FMCG. COD, reverse logistics & digital POD.",
        "url": "https://bestintlmovers.com/services/nationwide-distribution-services",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Nationwide Distribution Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Distribution Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Last Mile Delivery Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pharma Cold Chain Distribution Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FMCG Distribution Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "COD Reverse Logistics Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Fulfillment Cross Docking Pakistan" } }
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
        "name": "Nationwide Distribution",
        "item": "https://bestintlmovers.com/services/nationwide-distribution" 
      }
    ]
  };
}

const NationwideDistributionService = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Nationwide Distribution Services in Pakistan | Best Intl Movers",
    description: "Pakistan's most reliable nationwide distribution — 300+ cities, B2B, e-commerce, pharma cold chain & FMCG. COD, reverse logistics & digital POD. Get a free quote today!",
    keywords: "nationwide distribution Pakistan, distribution company Pakistan, B2B distribution Pakistan, e-commerce delivery Pakistan, last mile delivery Pakistan, pharma cold chain distribution Pakistan, FMCG distribution Pakistan, COD delivery Pakistan, reverse logistics Pakistan, logistics network Pakistan, warehouse fulfillment Pakistan, 300 cities delivery Pakistan, cross docking Pakistan, temperature controlled distribution Pakistan, digital POD Pakistan, distribution Islamabad Lahore Karachi",
    canonicalUrl: "https://bestintlmovers.com/services/nationwide-distribution-services"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/services/nationwide-distribution-services"
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
              <Truck className="text-gold" size={16} />
              <span className="text-gold text-sm font-medium">300+ Cities</span>
              <span className="text-white/30">|</span>
              <span className="text-gold text-sm font-medium">COD & Reverse Logistics</span>
              <span className="text-white/30">|</span>
              <span className="text-gold text-sm font-medium">Pharma Cold Chain</span>
              <span className="text-white/30">|</span>
              <span className="text-gold text-sm font-medium">Digital POD</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Nationwide Distribution Services
            </h1>
            
            <img 
              src="/images/nationwide-distribution.png" 
              alt="Nationwide Distribution Services" 
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
                Get Free Distribution Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Distribution Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description with 17 Internal Links - Direct JSX */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                Pakistan's vast geography and rapidly growing consumer market demand a
                distribution partner who can deliver reliably — from Karachi to Khyber,
                Lahore to Gwadar, and every city, town, and district in between. At Best
                International Movers & Logistics, Pakistan's most trusted{" "}
                <Link to="/cargo-services-pakistan" className="text-gold hover:underline">
                  cargo and logistics company
                </Link>
                {` with 15+ years of experience, our nationwide distribution network covers
                300+ cities across all four provinces — providing businesses with fast,
                reliable, and fully trackable delivery from manufacturer to retailer,
                warehouse to doorstep, and seller to end customer.`}
              </p>

              <p>
                Our distribution services are built for every business model. For B2B
                operations, we manage manufacturer-to-retailer and primary-to-secondary
                distribution for FMCG, consumer goods, and industrial products across
                Pakistan's major trade corridors — including Lahore, Islamabad,
                Rawalpindi, Peshawar, Karachi, Faisalabad, and Multan. For e-commerce
                businesses, our{" "}
                <Link to="/services/last-mile-delivery" className="text-gold hover:underline">
                  last-mile delivery
                </Link>
                {` solution includes cash-on-delivery (COD), reverse logistics, and digital
                proof of delivery (POD) — giving you complete visibility and control over
                every order.`}
              </p>

              <p>
                For the pharmaceutical industry, we operate a fully GDP-compliant cold chain
                distribution network with 2–8°C refrigerated vehicles, continuous temperature
                loggers, and validated SOPs for vaccine, medicine, and biologics distribution
                across Pakistan. All pharma shipments are handled by trained staff and
                supported by our climate-controlled warehousing facilities in Karachi,
                Islamabad, and Lahore — ensuring your cold chain remains unbroken from
                origin to last mile. For added peace of mind, every high-value distribution
                consignment can be covered by our comprehensive cargo insurance.
              </p>

              <p>
                Our nationwide distribution infrastructure includes dedicated goods
                transportation fleets operating across Pakistan's national highway network,
                cross-docking facilities for rapid transshipment, and door-to-door cargo
                delivery to even the most remote districts. Our Islamabad cargo hub and
                Rawalpindi distribution center serve the twin cities and KPK corridor,
                while our Lahore and Karachi hubs cover central Punjab and Sindh
                respectively. All routes feature real-time tracking, route optimization,
                and digital reporting dashboards for complete supply chain visibility. For
                seamless import integration, explore our freight forwarding services.
              </p>

              <p>
                Whether you are importing goods from China and need China to Pakistan
                door-to-door delivery followed by nationwide distribution, or require
                customs-cleared cargo to be distributed directly from port to retailers via
                our customs clearance and distribution service — we provide a single,
                seamless solution from arrival to sale. Read our goods transport vs cargo
                services guide to understand which distribution model is right for your
                business.
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
                Why Choose Best International Movers for Nationwide Distribution?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Globe, title: "300+ Cities", desc: "Largest distribution network in Pakistan" },
                  { icon: Thermometer, title: "GDP Cold Chain", desc: "Pharma-grade temperature control" },
                  { icon: DollarSign, title: "24-48hr COD", desc: "Fastest remittance cycle" }
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

            {/* H2: Distribution Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Distribution Solutions We Offer — B2B, E-commerce, Pharma & FMCG
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

            {/* H2: Our Distribution Coverage */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Our Nationwide Distribution Coverage
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {serviceData.cities.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-navy-light/20 rounded-lg">
                    <MapPin className="text-gold" size={16} />
                    <span className="text-foreground text-sm">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">
                + 250+ additional towns and districts across all four provinces
              </p>
            </motion.div>

            {/* H2: Industries We Serve */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {serviceData.industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-navy-light/20 rounded-lg">
                    <Building className="text-gold" size={16} />
                    <span className="text-foreground text-sm">{industry}</span>
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
                Frequently Asked Questions — Distribution Services Pakistan
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {faq.a}
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
                Scale Your Business Across Pakistan — Get a Free Distribution Quote
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From Karachi to Khyber, Lahore to Gwadar — our 300+ city network delivers your products to every retailer, distributor, and customer in Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Distribution Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Distribution Team
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

export default NationwideDistributionService;