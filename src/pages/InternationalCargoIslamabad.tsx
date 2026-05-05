import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Anchor, MapPin, Phone, Package, Globe, ShieldCheck, FileCheck, Calculator, Clock, Users, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

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
        "@id": "https://bestintlmovers.com/international-cargo-islamabad#service",
        "name": "International Cargo Service Islamabad – Air & Sea Freight",
        "serviceType": "International Cargo Service",
        "description": "Professional international cargo service in Islamabad. Air freight, sea freight, FCL & LCL to UAE, UK, USA, Canada & 100+ countries. Call 0300-9130211 for quote.",
        "url": "https://bestintlmovers.com/international-cargo-islamabad",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "City", name: "Islamabad" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "priceRange": "3500-180000+",
          "description": "International cargo services from Islamabad to worldwide destinations"
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cheapest way to send cargo internationally from Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LCL sea freight is the most cost-effective method for large-volume shipments. For smaller consignments, consolidated air freight is cost-efficient. Express courier is fastest but most expensive per kilogram. Contact us for a comparison quote covering all options for your specific shipment."
        }
      },
      {
        "@type": "Question",
        "name": "How long does air cargo from Islamabad take to reach Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Air cargo from Islamabad International Airport to Dubai typically arrives in 2 to 4 days, including customs clearance at both ends."
        }
      },
      {
        "@type": "Question",
        "name": "Do you collect cargo from home in Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide door-to-door collection from any residential or commercial address across all sectors and housing societies in Islamabad and Rawalpindi."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle Pakistan export customs clearance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our licensed customs team handles all WeBOC filing, HS code classification, FBR compliance, and port coordination — both at Islamabad Airport for air cargo and at Karachi Port for sea freight. Use our Custom Duty Calculator to estimate destination import duties."
        }
      },
      {
        "@type": "Question",
        "name": "Is my cargo insured during international transit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard carrier liability is limited by international convention and rarely covers the full value of your goods. We recommend All-Risk cargo insurance on every shipment — available at approximately 0.3% to 0.8% of declared cargo value for complete protection."
        }
      },
      {
        "@type": "Question",
        "name": "Can you ship a car from Islamabad internationally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We manage complete vehicle export from Islamabad — export documentation, inland transport to Karachi, RORO or container shipping, and destination import coordination."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a cargo quote for Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call or WhatsApp 0300-9130211 with your cargo details — type of goods, estimated weight and dimensions, origin address in Islamabad, destination country and city, and required timeline. We provide a full written quotation within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can you send commercial goods and household items in the same container?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In some cases, yes — but mixed commercial and household shipments require careful documentation to avoid customs complications at destination. Our team assesses this during the planning stage."
        }
      }
    ]
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
        "name": "International Cargo Islamabad", 
        "item": "https://bestintlmovers.com/international-cargo-islamabad" 
      }
    ]
  };
}

const InternationalCargoIslamabad = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "International Cargo Service Islamabad – Air & Sea Freight",
    description: "Professional international cargo service in Islamabad. Air freight, sea freight, FCL & LCL to UAE, UK, USA, Canada & 100+ countries. Call 0300-9130211 for quote.",
    keywords: "international cargo service islamabad, cargo service islamabad, air cargo islamabad, sea cargo islamabad, freight service islamabad, cargo company islamabad, international shipping islamabad, freight forwarding islamabad, cargo islamabad to dubai, air freight islamabad",
    canonicalUrl: "https://bestintlmovers.com/international-cargo-islamabad"
  };

  const airCargoTimes = [
    { destination: "UAE (Dubai, Abu Dhabi)", time: "2 – 4 days" },
    { destination: "Saudi Arabia (Riyadh, Jeddah)", time: "3 – 5 days" },
    { destination: "Qatar (Doha)", time: "3 – 5 days" },
    { destination: "United Kingdom (London)", time: "4 – 7 days" },
    { destination: "USA (New York, Houston)", time: "5 – 8 days" },
    { destination: "Canada (Toronto, Vancouver)", time: "5 – 8 days" },
    { destination: "Australia (Sydney, Melbourne)", time: "6 – 10 days" },
    { destination: "Germany & Europe", time: "4 – 7 days" },
    { destination: "Malaysia & Singapore", time: "4 – 7 days" }
  ];

  const seaCargoTimes = [
    { destination: "UAE (Dubai, Jebel Ali)", time: "3 – 5 weeks" },
    { destination: "Saudi Arabia (Jeddah, Dammam)", time: "4 – 6 weeks" },
    { destination: "Qatar & Kuwait", time: "4 – 6 weeks" },
    { destination: "United Kingdom", time: "8 – 11 weeks" },
    { destination: "USA & Canada", time: "10 – 14 weeks" },
    { destination: "Australia", time: "9 – 12 weeks" },
    { destination: "Germany & Europe", time: "8 – 11 weeks" },
    { destination: "Malaysia & Singapore", time: "5 – 8 weeks" }
  ];

  const cargoTypes = [
    { icon: Package, title: "Household Goods & Personal Effects", desc: "Furniture, appliances, electronics, crockery, clothing, artwork for families relocating internationally from Islamabad" },
    { icon: Globe, title: "Commercial Merchandise", desc: "Textiles, surgical instruments, sports goods, leather products, processed food, handicrafts, and all Pakistani export goods" },
    { icon: ShieldCheck, title: "Electronics & High-Value Items", desc: "Computers, servers, telecommunications equipment, medical devices with anti-static packing and full insurance" },
    { icon: Anchor, title: "Industrial & Project Cargo", desc: "Machinery parts, industrial equipment, construction materials for overseas installations with specialist handling" },
    { icon: Users, title: "Excess Baggage & Personal Parcels", desc: "Luggage, personal effects, and parcels sent internationally from Islamabad by air or consolidated sea freight" },
    { icon: Plane, title: "Vehicles", desc: "Cars, SUVs, and motorcycles shipped via RORO or enclosed container with full documentation" }
  ];

  const pricingRates = [
    { route: "Islamabad to Dubai", airRate: "USD 3.5 – 6.0 per kg", seaRate: "USD 35 – 60 per CBM" },
    { route: "Islamabad to UK", airRate: "USD 5.0 – 8.0 per kg", seaRate: "USD 80 – 130 per CBM" },
    { route: "Islamabad to Canada/USA", airRate: "USD 6.0 – 10.0 per kg", seaRate: "USD 120 – 180 per CBM" },
    { route: "Islamabad to Australia", airRate: "USD 6.5 – 10.0 per kg", seaRate: "USD 100 – 160 per CBM" }
  ];

  const customerReviews = [
    { name: "Ahmed Malik", location: "Blue Area Islamabad → Dubai", review: "Sent a commercial shipment from F-7 Islamabad to our Dubai client. Documentation was perfect, delivery was on time, and the rate was competitive. Will use for all future exports." },
    { name: "Sobia Khan", location: "G-11 Islamabad → Toronto", review: "Used their air cargo service to send personal effects from Islamabad to Toronto before our sea freight arrived. Collected from our house in G-11, cleared customs without issue, delivered in 6 days." },
    { name: "Tariq Hussain", location: "DHA Islamabad → London", review: "Shipped a full container of household goods from Islamabad to London. Professional packing at our home in DHA Phase 2, customs was fully managed, and delivery at the London address was exactly on schedule." },
    { name: "Rizwan Ahmed", location: "I-8 Islamabad → Riyadh", review: "We use Best International Movers for regular commercial cargo to Saudi Arabia. Reliable, well-documented, competitive rates. They have never missed a promised timeline." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/international-cargo-islamabad"
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
              <Plane className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Air & Sea Freight to 100+ Countries</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              International Cargo Service Islamabad – Reliable Air & Sea Freight to 100+ Countries
            </h1>
            
            <img 
              src="https://images.pexels.com/photos/259928/pexels-photo-259928.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="International cargo service Islamabad - Air and sea freight operations" 
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
                Get Free Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Long Description with Internal Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                When you need to ship goods internationally from Islamabad — whether it is household items for an overseas move, commercial merchandise for export, urgent documents for a business partner abroad, or excess baggage for a family relocating — the quality and reliability of your cargo service provider determines everything. Wrong partner, wrong outcome.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we provide complete international cargo services from Islamabad — connecting businesses and residents in the capital directly to over 100 countries worldwide through air freight, sea freight, FCL and LCL container shipping, express courier, and door-to-door cargo delivery. Our team manages every stage of the shipment in-house — from your premises in Islamabad to the final destination address abroad.
              </p>

              <p>
                15+ years of experience. 15,000+ successful shipments. One call to get started.
              </p>

              <p>
                Many people assume that sending cargo internationally is straightforward — book a service, hand over the goods, receive them at the destination. In practice, international cargo from Islamabad involves multiple regulated stages that must each be handled correctly: <strong className="text-gold">Pakistan Export Compliance</strong>, <strong className="text-gold">Carrier Selection and Booking</strong>, <strong className="text-gold">Destination Country Import Regulations</strong>, and <strong className="text-gold">Last-Mile Delivery</strong>.
              </p>

              <p>
                Our international cargo service in Islamabad manages all of these stages — a single team, single point of contact, complete accountability from Islamabad to the destination door. Our{" "}
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                  Custom Duty Calculator
                </Link>
                {" "}helps estimate import duties at your destination country.
              </p>
            </motion.div>

            {/* Air Cargo Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Air Cargo from Islamabad International Airport
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Air freight is the fastest method for international cargo from Islamabad — essential for time-sensitive shipments, urgent personal effects, business documents, pharmaceutical goods, electronics, and any cargo where speed matters more than cost.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Plane, title: "Direct Carrier Bookings", desc: "Emirates SkyCargo, Turkish Cargo, Qatar Airways Cargo, Etihad Cargo, PIA Cargo" },
                  { icon: Package, title: "Consolidated Air Freight", desc: "Pay only for the space your cargo occupies in shared shipments" },
                  { icon: Clock, title: "Express Door-to-Door", desc: "Complete service from Islamabad to UAE, UK, USA, Saudi Arabia, Qatar" },
                  { icon: ShieldCheck, title: "Charter Arrangements", desc: "Large-volume urgent consignments with dedicated aircraft" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Air Cargo Transit Times from Islamabad</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Transit Time (Air)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {airCargoTimes.map((route, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">{route.destination}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{route.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Sea Freight Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Sea Freight from Islamabad — FCL & LCL
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                For larger volume shipments where cost efficiency matters more than speed — household goods, commercial merchandise, industrial equipment, construction materials — sea freight via Karachi Port is the most economical option.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Anchor, title: "FCL — Full Container Load", desc: "Exclusive container for your cargo. 20ft, 40ft, or 40ft High Cube options" },
                  { icon: Package, title: "LCL — Less than Container Load", desc: "Share container space, pay only for cubic metres used" },
                  { icon: FileCheck, title: "Complete Documentation", desc: "Bill of Lading, export customs, shipping documentation" },
                  { icon: Globe, title: "Destination Delivery", desc: "Import clearance and final delivery at destination address" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Sea Freight Transit Times from Islamabad (Karachi Port)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Sea Transit Time (Door-to-Door)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seaCargoTimes.map((route, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">{route.destination}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{route.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Types of Cargo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Types of Cargo We Handle from Islamabad
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cargoTypes.map((cargo, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <cargo.icon className="text-gold" size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{cargo.title}</h3>
                    <p className="text-muted-foreground text-sm">{cargo.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing Guide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                International Cargo Rates from Islamabad — Pricing Guide
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Route</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Air Cargo Rate</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Sea Freight LCL Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingRates.map((rate, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.route}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.airRate}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.seaRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4 italic">
                  Note: These are indicative ranges. Actual rates depend on cargo dimensions, current market conditions, and specific routing. Contact us for a precise written quotation — 0300-9130211.
                </p>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Islamabad Areas We Collect Cargo From
              </h2>
              <div className="space-y-4">
                {[
                  { title: "F Sectors", areas: "F-5, F-6, F-7, F-8, F-10, F-11, F-12, F-13, F-14" },
                  { title: "G Sectors", areas: "G-6, G-7, G-8, G-9, G-10, G-11, G-13, G-14, G-15" },
                  { title: "E & I Sectors", areas: "E-7, E-11, I-8, I-9, I-10, I-11, I-14, I-15, I-16" },
                  { title: "Housing Societies", areas: "Bahria Town, DHA Islamabad, Park View City, Gulberg Islamabad, Capital Smart City, B-17, PWD, CBR Town" },
                  { title: "Commercial Areas", areas: "Blue Area, Jinnah Super, F-7 Markaz, G-8 Markaz" }
                ].map((area, index) => (
                  <div key={index} className="p-4 bg-navy-light/10 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-muted-foreground">{area.areas}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">
                We also collect cargo from <strong className="text-gold">Rawalpindi</strong> — all sectors and housing societies — as part of our twin-city operations. See our{" "}
                <Link to="/international-relocation-services-rawalpindi" className="text-gold hover:underline">
                  international relocation services in Rawalpindi
                </Link>
                {" "}page for Rawalpindi-specific information.
              </p>
            </motion.div>

            {/* Customer Reviews */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Customer Reviews — International Cargo Service Islamabad
              </h2>
              <div className="space-y-6">
                {customerReviews.map((review, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6 border border-border">
                    <blockquote className="text-lg italic text-muted-foreground mb-4">"{review.review}"</blockquote>
                    <footer>
                      <cite className="font-semibold text-foreground">{review.name}</cite>
                      <span className="text-muted-foreground ml-2">— {review.location}</span>
                    </footer>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass-card rounded-2xl p-8 border border-border bg-gradient-to-br from-gold/10 to-gold/5">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Get Your International Cargo Quote — Islamabad
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you are shipping a single parcel urgently by air or a full container of household goods by sea — our team is ready to handle every detail.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
                  >
                    <Phone size={18} />
                    Get Free Quote
                  </Link>
                  <a 
                    href="https://wa.me/923009130211" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                  >
                    <MapPin size={18} />
                    WhatsApp Us Now
                  </a>
                </div>
                
                <div className="mt-8 text-muted-foreground">
                  <p className="font-semibold">📞 Call / WhatsApp: 0300-9130211</p>
                  <p>🕐 Monday to Saturday | 8:00 AM – 8:00 PM</p>
                  <p>📍 Islamabad | Rawalpindi | Lahore | Peshawar</p>
                </div>
              </div>
            </motion.div>

            {/* Related Pages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Related Pages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/international-relocation-services-rawalpindi" className="text-gold hover:underline">
                  International Relocation Services Rawalpindi
                </Link>
                <Link to="/container-shipping-pakistan" className="text-gold hover:underline">
                  Container Shipping Pakistan
                </Link>
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                  Custom Duty Calculator
                </Link>
                <Link to="/services/international-moving" className="text-gold hover:underline">
                  International Moving Services
                </Link>
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

export default InternationalCargoIslamabad;
