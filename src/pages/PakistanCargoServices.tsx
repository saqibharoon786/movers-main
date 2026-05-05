import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Anchor, MapPin, Phone, Package, Globe, ShieldCheck, FileCheck, Calculator, Clock, Users, Building, Home } from "lucide-react";
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
        "@id": "https://bestintlmovers.com/pakistan-cargo-services#service",
        "name": "Pakistan Cargo Services – Air & Sea Freight to 100+ Countries",
        "serviceType": "Pakistan Cargo Services",
        "description": "Trusted Pakistan cargo services from Islamabad, Rawalpindi, Lahore & Peshawar. Air freight, sea freight, FCL & LCL worldwide. Free quote – 0300-9130211",
        "url": "https://bestintlmovers.com/pakistan-cargo-services",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", name: "Pakistan" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "priceRange": "3500-180000+",
          "description": "International cargo services from Pakistan to worldwide destinations"
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
        "name": "What is the cheapest way to send cargo internationally from Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LCL sea freight is the most cost-effective method for larger volumes. Consolidated air freight is economical for smaller, time-sensitive shipments. The right option depends on your cargo volume, destination, and required delivery timeline — contact us for a full comparison quote."
        }
      },
      {
        "@type": "Question",
        "name": "How do I send cargo from Pakistan to Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide both air freight (2–4 days) and sea freight (3–5 weeks) from Rawalpindi, Islamabad, Lahore, and Peshawar to Dubai. Contact us with your cargo details for a quote covering both options."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle Pakistan customs clearance for all exports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our licensed customs team manages complete WeBOC export declaration filing, HS code classification, and Pakistan Customs compliance for all shipments. We use our Custom Duty Calculator to pre-screen destination import duties for clients."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track my cargo after it leaves Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide tracking updates at key milestones — cargo collection, export clearance completed, vessel or flight departure, destination port arrival, and final delivery. For sea freight, full container tracking via carrier portals is also available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ship from cities other than Karachi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We collect cargo from Rawalpindi, Islamabad, Lahore, Peshawar, and other major cities. Inland transport to Karachi Port for sea freight and to departure airports for air freight is included in our service."
        }
      },
      {
        "@type": "Question",
        "name": "Is my cargo insured during international transit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard carrier liability is capped well below the actual value of most cargo. We strongly recommend All-Risk cargo insurance — available at 0.3% to 0.8% of declared cargo value — which compensates for the full replacement value of any lost or damaged goods."
        }
      },
      {
        "@type": "Question",
        "name": "Can you ship commercial export goods from Pakistan with LC documentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We support Letter of Credit documentation for export shipments — including the commercial invoice, packing list, bill of lading, certificate of origin, and any additional documents specified in the LC terms."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a Pakistan cargo services quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call or WhatsApp 0300-9130211 with your cargo type, estimated weight and dimensions, origin city in Pakistan, destination country and city, and required timeline. We provide a complete written quotation within a few hours. For international relocations, a free home survey is arranged within 24–48 hours."
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
        "name": "Pakistan Cargo Services", 
        "item": "https://bestintlmovers.com/pakistan-cargo-services" 
      }
    ]
  };
}

const PakistanCargoServices = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Pakistan Cargo Services – Air & Sea Freight to 100+ Countries",
    description: "Trusted Pakistan cargo services from Islamabad, Rawalpindi, Lahore & Peshawar. Air freight, sea freight, FCL & LCL worldwide. Free quote – 0300-9130211",
    keywords: "pakistan cargo services, cargo services pakistan, international cargo pakistan, air cargo pakistan, sea cargo pakistan, freight services pakistan, cargo company pakistan, pakistan to dubai cargo, cargo islamabad, cargo rawalpindi, pakistan cargo to uk, pakistan cargo to canada, pakistan cargo to australia",
    canonicalUrl: "https://bestintlmovers.com/pakistan-cargo-services"
  };

  const airCargoTimes = [
    { destination: "UAE (Dubai, Abu Dhabi, Sharjah)", time: "2 – 4 days" },
    { destination: "Saudi Arabia (Riyadh, Jeddah, Dammam)", time: "3 – 5 days" },
    { destination: "Qatar (Doha) & Kuwait", time: "3 – 5 days" },
    { destination: "United Kingdom (London)", time: "4 – 7 days" },
    { destination: "USA (New York, Houston, LA)", time: "5 – 8 days" },
    { destination: "Canada (Toronto, Vancouver)", time: "5 – 8 days" },
    { destination: "Australia (Sydney, Melbourne)", time: "6 – 10 days" },
    { destination: "Germany & Europe", time: "4 – 7 days" },
    { destination: "Malaysia & Singapore", time: "3 – 6 days" }
  ];

  const seaCargoTimes = [
    { destination: "UAE (Dubai, Jebel Ali)", time: "3 – 5 weeks" },
    { destination: "Saudi Arabia (Jeddah, Dammam)", time: "4 – 6 weeks" },
    { destination: "Qatar & Kuwait", time: "4 – 6 weeks" },
    { destination: "United Kingdom", time: "8 – 11 weeks" },
    { destination: "USA & Canada", time: "10 – 14 weeks" },
    { destination: "Australia & New Zealand", time: "9 – 12 weeks" },
    { destination: "Germany & Northern Europe", time: "8 – 11 weeks" },
    { destination: "Malaysia & Singapore", time: "5 – 8 weeks" }
  ];

  const cargoTypes = [
    { icon: Home, title: "Household Goods & Personal Effects", desc: "Complete household relocations from Pakistan — furniture, appliances, electronics, clothing, artwork with professional export packing" },
    { icon: Package, title: "Commercial & Export Merchandise", desc: "Textiles, garments, leather goods, surgical instruments, sports goods, processed food, rice, marble, handicrafts" },
    { icon: ShieldCheck, title: "Electronics & High-Value Items", desc: "Computers, servers, medical devices, telecommunications equipment with anti-static packing and full insurance" },
    { icon: FileCheck, title: "Documents & Express Parcels", desc: "Urgent documents, legal papers, small commercial samples delivered internationally within 2 to 6 days" },
    { icon: Users, title: "Vehicles", desc: "Cars, SUVs, and motorcycles exported via RORO or enclosed container shipping with full documentation" },
    { icon: Building, title: "Industrial & Project Cargo", desc: "Machinery, industrial equipment, construction materials for overseas installations with specialist handling" }
  ];

  const pricingRates = [
    { route: "Pakistan to Dubai", airRate: "USD 3.5 – 6.0 per kg", seaRate: "USD 35 – 60 per CBM" },
    { route: "Pakistan to UK", airRate: "USD 5.0 – 8.0 per kg", seaRate: "USD 80 – 130 per CBM" },
    { route: "Pakistan to Canada / USA", airRate: "USD 6.0 – 10.0 per kg", seaRate: "USD 120 – 180 per CBM" },
    { route: "Pakistan to Australia", airRate: "USD 6.5 – 10.0 per kg", seaRate: "USD 100 – 160 per CBM" }
  ];

  const customerReviews = [
    { name: "Imran Qureshi", location: "Islamabad → London", review: "Shipped a full 40ft container of household goods from Islamabad to London. Professional packing, customs was completely handled, and delivery at our new address was exactly on schedule 10 weeks later. Exceptional service." },
    { name: "Raza Textile Mills", location: "Lahore → Dubai", review: "We use Best International Movers for regular commercial textile exports from Lahore to Dubai. Reliable documentation, competitive freight rates, and they have never missed a promised sailing date." },
    { name: "Asma Tariq", location: "Rawalpindi → Toronto", review: "Sent personal effects and excess baggage from Rawalpindi to Toronto by air. Collected from our home, cleared Pakistani customs without delay, and delivered in Canada in 6 days. Excellent." },
    { name: "Noman Khan", location: "Peshawar → Riyadh", review: "Used their LCL groupage service for a small commercial shipment from Peshawar to Saudi Arabia. Pricing was transparent, documentation was perfect, and delivery was within the quoted timeline." }
  ];

  const cities = [
    { title: "Rawalpindi & Islamabad", desc: "Our primary base of operations. Daily cargo collection from all sectors of Islamabad and all areas of Rawalpindi including Bahria Town, DHA, Satellite Town, Askari." },
    { title: "Lahore", desc: "Pakistan's commercial and manufacturing hub. We collect from DHA, Bahria Town, Gulberg, Johar Town, Model Town, and all major industrial areas." },
    { title: "Peshawar & KPK", desc: "Cargo collection from Peshawar, covering Hayatabad, Saddar, University Town, and surrounding areas. Afghan Transit Trade cargo coordination available." },
    { title: "Karachi", desc: "As Pakistan's primary port city, Karachi-originating cargo benefits from the shortest inland haulage distance to Karachi Port." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/pakistan-cargo-services"
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
              <span className="text-gold text-sm font-medium">Reliable International Freight from 4 Cities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Pakistan Cargo Services – International Air & Sea Freight Worldwide
            </h1>
            
            <img 
              src="https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Pakistan cargo services - International air and sea freight operations" 
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
                Pakistan's international cargo sector handles millions of shipments every year — families relocating abroad, exporters shipping commercial goods to global markets, businesses sending merchandise to overseas clients, and individuals sending personal effects to relatives living abroad. Behind every successful international shipment from Pakistan is a cargo partner who understands the entire chain — not just the vehicle or vessel, but the packing, the documentation, the customs compliance, the ocean or air freight booking, and the destination delivery.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we provide complete Pakistan cargo services from Rawalpindi, Islamabad, Lahore, and Peshawar — covering air freight, sea freight, FCL and LCL container shipping, door-to-door cargo, express courier, and full customs clearance. Our team manages every stage of your international shipment in-house — from your premises in Pakistan to the final destination address in Dubai, London, Toronto, Sydney, or any of 100+ countries worldwide.
              </p>

              <p>
                15+ years of experience. 15,000+ successful international shipments. One number to call.
              </p>

              <p>
                Our{" "}
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                  Custom Duty Calculator
                </Link>
                {" "}helps estimate import duties at your destination country before your Pakistan cargo shipment departs.
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
                Air Cargo from Pakistan
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Air freight is the fastest method for international cargo from Pakistan — essential for urgent commercial shipments, time-sensitive personal effects, important business documents, pharmaceutical goods, high-value electronics, and any consignment where delivery speed is the priority.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Plane, title: "Islamabad International Airport", desc: "Primary hub for Rawalpindi and Islamabad cargo" },
                  { icon: Plane, title: "Lahore Allama Iqbal International Airport", desc: "Punjab-based commercial exports" },
                  { icon: Plane, title: "Karachi Jinnah International Airport", desc: "High-volume commercial air freight" },
                  { icon: Plane, title: "Peshawar Bacha Khan International Airport", desc: "KPK and northern Pakistan cargo" }
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

              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Air Cargo Transit Times from Pakistan</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Transit Time</th>
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
                Sea Freight from Pakistan — FCL & LCL
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Sea freight via Karachi Port and Port Qasim is the most cost-effective method for moving large volumes of goods internationally from Pakistan. Whether you are shipping a full household, a commercial container of export goods, or a smaller LCL consignment, sea freight delivers maximum value for high-volume international cargo.
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

              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Sea Freight Transit Times from Pakistan (Karachi Port)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Door-to-Door Transit</th>
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
                What We Ship — Pakistan Cargo Categories
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
                Pakistan Cargo Rates — What Affects Your Cost
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
                  These are indicative ranges. Exact rates depend on current market conditions, specific cargo dimensions, and routing. Contact us for a precise written quotation — 0300-9130211.
                </p>
              </div>
            </motion.div>

            {/* Cities We Serve */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Cities We Provide Pakistan Cargo Services From
              </h2>
              <div className="space-y-6">
                {cities.map((city, index) => (
                  <div key={index} className="p-4 bg-navy-light/10 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{city.title}</h3>
                    <p className="text-muted-foreground">{city.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">
                We also arrange cargo collections from Multan, Faisalabad, Sialkot, Gujranwala, Quetta, and other major cities for volume commercial consignments. For complete details on our Islamabad-based cargo operations, see our dedicated{" "}
                <Link to="/international-cargo-islamabad" className="text-gold hover:underline">
                  international cargo service Islamabad
                </Link>
                {" "}page.
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
                Customer Reviews — Pakistan Cargo Services
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
                  Book Pakistan Cargo Services — Get a Free Quote Today
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you are relocating a household internationally, shipping commercial exports, or sending personal effects abroad — our team across Rawalpindi, Islamabad, Lahore, and Peshawar is ready to handle every detail.
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
                  <p>📍 Rawalpindi | Islamabad | Lahore | Peshawar</p>
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
                <Link to="/international-cargo-islamabad" className="text-gold hover:underline">
                  International Cargo Service Islamabad
                </Link>
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                  Custom Duty Calculator
                </Link>
                <Link to="/international-relocation-services-rawalpindi" className="text-gold hover:underline">
                  International Relocation Services Rawalpindi
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

export default PakistanCargoServices;
