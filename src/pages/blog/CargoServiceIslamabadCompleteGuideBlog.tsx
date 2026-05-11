import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star, Calendar, User, Tag, Search, TrendingUp, FileText, Award as AwardIcon, Car, Package as PackageIcon } from "lucide-react";
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
        "@type": "Article",
        "@id": "https://bestintlmovers.com/blog/cargo-service-islamabad-complete-guide#article",
        "headline": "Cargo Service in Islamabad 2026 — Everything You Need to Know | Best Intl Movers",
        "description": "Looking for a reliable cargo service in Islamabad? This complete 2026 guide covers air cargo, sea cargo, costs, customs, and how to choose the best cargo company in Islamabad.",
        "url": "https://bestintlmovers.com/blog/cargo-service-islamabad-complete-guide",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "author": {
          "@type": "Organization",
          "name": "Best International Movers & Logistics"
        },
        "datePublished": "2026-05-11",
        "dateModified": "2026-05-11",
        "mainEntityOfPage": "https://bestintlmovers.com/blog/cargo-service-islamabad-complete-guide"
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
        "name": "Which is better for Islamabad cargo — air or sea?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your volume and timeline. For small urgent shipments (under 200 kg, needed within 5 days), air cargo is best. For large household moves (5+ CBM), sea cargo saves you 60–80% compared to air."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate how much my cargo will cost from Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us with your cargo details (list of items, approximate dimensions, destination) and we will calculate exact chargeable weight (air) or CBM (sea) and provide a full written quote within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can you collect cargo from all areas of Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we collect from all F, G, H, I, and E sector addresses, all major housing schemes (DHA, Bahria Enclave, Capital Smart City), and all commercial areas including Blue Area."
        }
      }
    ]
  };
}

const CargoServiceIslamabadCompleteGuideBlog = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Cargo Service in Islamabad 2026 — Everything You Need to Know | Best Intl Movers",
    description: "Looking for a reliable cargo service in Islamabad? This complete 2026 guide covers air cargo, sea cargo, costs, customs, and how to choose the best cargo company in Islamabad.",
    keywords: "cargo service islamabad, international cargo islamabad, cargo company islamabad, air cargo islamabad, sea cargo islamabad, cargo islamabad to dubai, cargo islamabad to uk, best cargo service islamabad",
    canonicalUrl: "https://bestintlmovers.com/blog/cargo-service-islamabad-complete-guide"
  };

  const cargoServices = [
    {
      icon: Plane,
      title: "Air Cargo Service in Islamabad",
      description: "Fastest international shipping method from Islamabad International Airport (IIAL)",
      features: ["1-5 days delivery", "Small to medium shipments", "High-value items", "Urgent business cargo"],
      whenToUse: "You need your goods delivered within 1–5 days, shipment under 300-500 kg, high-value items, urgent business cargo"
    },
    {
      icon: Ship,
      title: "Sea Cargo Service from Islamabad",
      description: "Most economical option for larger shipments via Karachi Port or Port Qasim",
      features: ["LCL and FCL options", "Large household moves", "Commercial cargo", "Best cost-per-kg rate"],
      whenToUse: "Moving a full apartment/home, shipment exceeds 500 kg/5 CBM, have 3-6 weeks before delivery, want best cost"
    },
    {
      icon: Package,
      title: "Express Parcel & Document Cargo",
      description: "Urgent documents, legal papers, business samples, or small gift parcels",
      features: ["1-3 day delivery", "Documents & samples", "Small gift parcels", "University applications"],
      whenToUse: "University documents, legal agreements, business samples, small gift parcels abroad"
    }
  ];

  const airCargoTransitTimes = [
    { destination: "Dubai / Abu Dhabi", time: "1–2 days" },
    { destination: "Saudi Arabia / Qatar", time: "1–3 days" },
    { destination: "UK (London)", time: "2–3 days" },
    { destination: "USA / Canada", time: "3–5 days" },
    { destination: "Australia", time: "3–4 days" },
    { destination: "Germany / France", time: "2–4 days" }
  ];

  const seaCargoTransitTimes = [
    { destination: "Dubai (Jebel Ali)", time: "12–20 days" },
    { destination: "Saudi Arabia (Jeddah)", time: "16–24 days" },
    { destination: "UK (Felixstowe)", time: "34–42 days" },
    { destination: "USA (East/West Coast)", time: "37–47 days" },
    { destination: "Canada", time: "40–52 days" },
    { destination: "Australia", time: "27–37 days" }
  ];

  const airCargoRates = [
    { shipment: "2 suitcases + boxes", weight: "50 kg", dubai: "PKR 18,000–28,000", uk: "PKR 50,000–80,000", usa: "PKR 80,000–130,000" },
    { shipment: "Studio apartment", weight: "150 kg", dubai: "PKR 45,000–75,000", uk: "PKR 130,000–200,000", usa: "PKR 200,000–320,000" },
    { shipment: "1-bedroom home", weight: "300 kg", dubai: "PKR 85,000–140,000", uk: "PKR 250,000–380,000", usa: "PKR 380,000–600,000" }
  ];

  const seaCargoRates = [
    { volume: "1–3 CBM", dubai: "PKR 30,000–60,000", uk: "PKR 80,000–150,000", usa: "PKR 120,000–200,000" },
    { volume: "5–8 CBM", dubai: "PKR 80,000–140,000", uk: "PKR 180,000–300,000", usa: "PKR 280,000–450,000" },
    { volume: "10–15 CBM", dubai: "PKR 150,000–260,000", uk: "PKR 300,000–500,000", usa: "PKR 450,000–750,000" },
    { volume: "20ft FCL", dubai: "PKR 90,000–160,000", uk: "PKR 170,000–280,000", usa: "PKR 200,000–350,000" }
  ];

  const processSteps = [
    { step: "1", title: "Free Consultation", desc: "Contact us by phone or WhatsApp. Tell us what you need to ship, where it is going, and your timeline. We give you an instant estimate and book a cargo assessment." },
    { step: "2", title: "Cargo Assessment & Exact Quote", desc: "For household moves, we conduct a free home survey at your Islamabad address. For commercial cargo, you share item dimensions and weights. We prepare a complete written quotation — no hidden charges." },
    { step: "3", title: "Professional Packing", desc: "Our packing team arrives at your address and professionally packs all items using international-grade materials. Every carton is labelled and an inventory list prepared for customs." },
    { step: "4", title: "Cargo Collection", desc: "Packed goods are collected from your Islamabad address and transported to our depot. From there they go to Islamabad Airport (air cargo) or are consolidated and sent to Karachi Port (sea cargo)." },
    { step: "5", title: "Customs Export Clearance", desc: "Our licensed customs agents file your Goods Declaration on FBR WEBOC, prepare all export documents, and clear your cargo through Pakistan Customs. No customs office visits required from you." },
    { step: "6", title: "International Transit", desc: "Your cargo departs Pakistan. We provide a tracking number so you can monitor the journey in real time." },
    { step: "7", title: "Destination Customs Clearance & Delivery", desc: "Our partner agents at the destination handle import clearance and coordinate final delivery to your address abroad. True door-to-door service." }
  ];

  const faqs = [
    {
      q: "Which is better for Islamabad cargo — air or sea?",
      a: "It depends on your volume and timeline. For small urgent shipments (under 200 kg, needed within 5 days), air cargo is best. For large household moves (5+ CBM), sea cargo saves you 60–80% compared to air."
    },
    {
      q: "How do I calculate how much my cargo will cost from Islamabad?",
      a: "Contact us with your cargo details (list of items, approximate dimensions, destination) and we will calculate exact chargeable weight (air) or CBM (sea) and provide a full written quote within 24 hours."
    },
    {
      q: "Can you collect cargo from all areas of Islamabad?",
      a: "Yes — we collect from all F, G, H, I, and E sector addresses, all major housing schemes (DHA, Bahria Enclave, Capital Smart City), and all commercial areas including Blue Area."
    },
    {
      q: "Is there a minimum cargo size for your international service from Islamabad?",
      a: "No minimum. We handle a single carton via express air cargo up to a full 40ft container by sea."
    },
    {
      q: "Can I track my cargo after it leaves Islamabad?",
      a: "Yes. You receive a tracking reference once your cargo departs — Airway Bill number for air cargo, container and Bill of Lading number for sea cargo. Track in real time 24/7."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/blog/cargo-service-islamabad-complete-guide"
        schema={[buildServiceSchema(), buildFAQSchema()]}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Truck className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Complete 2026 Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Cargo Service in Islamabad — Your Complete <span className="text-gold">2026 Guide</span> to International Shipping
            </h1>
            
            <img 
              src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Cargo Service in Islamabad - International Shipping" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              If you are based in Islamabad and need to send goods abroad — whether you are relocating your entire home, shipping commercial products to a foreign buyer, or simply sending personal items to family overseas — you need a reliable cargo service in Islamabad that handles everything from pickup to final delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free Cargo Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                But with so many options available, how do you know which cargo company to trust? How much will it cost? How long will it take? What documents do you need?
              </p>

              <p>
                This complete 2026 guide answers every question you have about using an international cargo service in Islamabad — written by the expert team at <strong className="text-gold">Best International Movers & Logistics</strong>, one of the twin cities' most experienced international cargo and relocation companies.
              </p>
            </motion.div>

            {/* Why Islamabad Needs Cargo Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Islamabad Residents Need International Cargo Services
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  Islamabad is home to a highly mobile population. Thousands of residents — government employees, diplomats, corporate professionals, students, and families — relocate internationally every year. Beyond relocations, Pakistan's capital is also home to a growing number of exporters, e-commerce sellers, and businesses that regularly ship goods to international markets.
                </p>
                <p className="mb-4">
                  The need for a professional, reliable <strong className="text-gold">cargo service in Islamabad</strong> has never been greater. Whether you are:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• A family moving permanently to Dubai, London, or Toronto</li>
                  <li>• A professional temporarily relocated to the Middle East</li>
                  <li>• A business owner exporting goods to Europe or the USA</li>
                  <li>• A student sending belongings ahead to a UK university</li>
                  <li>• An overseas Pakistani sending a gift parcel to family back home</li>
                </ul>
                <p className="mt-4">
                  ...you need a cargo partner who understands Islamabad's logistics, knows Pakistani customs regulations inside out, and has the international network to deliver your goods safely anywhere in the world.
                </p>
              </div>
            </motion.div>

            {/* Types of Cargo Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Types of Cargo Services Available in Islamabad
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Not all cargo services in Islamabad are the same. Understanding the different types helps you choose the right one for your needs.
              </p>
              <div className="space-y-6">
                {cargoServices.map((service, idx) => (
                  <div key={service.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="text-gold" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="bg-navy-light/20 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-foreground mb-2">When to Choose {service.title.split(" in ")[0]}:</h4>
                          <p className="text-muted-foreground text-sm">{service.whenToUse}</p>
                        </div>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Air Cargo Transit Times */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Air Cargo Transit Times from Islamabad</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Transit Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {airCargoTransitTimes.map((item, index) => (
                      <tr key={item.destination} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">{item.destination}</td>
                        <td className="border border-border px-4 py-3 font-semibold text-gold">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Air cargo from Islamabad is handled through our partnerships with Emirates SkyCargo, Qatar Airways Cargo, Turkish Cargo, and other leading airlines. We manage all documentation including the Airway Bill (AWB), FBR export declaration, and destination customs clearance.
              </p>
            </motion.div>

            {/* Sea Cargo Transit Times */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Sea Cargo Transit Times from Islamabad (door-to-door including road leg)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Total Transit Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seaCargoTransitTimes.map((item, index) => (
                      <tr key={item.destination} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">{item.destination}</td>
                        <td className="border border-border px-4 py-3 font-semibold text-gold">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                For larger shipments — complete household goods, furniture, or bulk commercial cargo — sea freight is by far the most economical option. Goods are collected from your Islamabad address, transported by road to Karachi Port or Port Qasim (approximately 1,400 km), and loaded onto container vessels.
              </p>
            </motion.div>

            {/* Cost Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                How Much Does Cargo Service in Islamabad Cost?
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  This is the question everyone asks first. The honest answer is: <strong className="text-gold">it depends on several factors</strong>. Here is a transparent breakdown of how international cargo from Islamabad is priced.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Air Cargo Pricing</h3>
                <p className="mb-4">
                  Air cargo is priced on <strong className="text-gold">chargeable weight</strong> — the greater of:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li>• <strong className="text-gold">Actual weight</strong> (in kg), OR</li>
                  <li>• <strong className="text-gold">Volumetric weight</strong> = (Length × Width × Height in cm) ÷ 6,000</li>
                </ul>
                <p className="mb-4">
                  For example, a large but light box measuring 80×60×60 cm weighing 10 kg has a volumetric weight of 48 kg — and you pay for 48 kg, not 10 kg.
                </p>
              </div>

              {/* Air Cargo Rates Table */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Estimated Air Cargo Rates from Islamabad (2026):</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Shipment</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Approx. Weight</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Dubai Cost</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK Cost</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">USA Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {airCargoRates.map((rate, index) => (
                        <tr key={rate.shipment} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.shipment}</td>
                          <td className="border border-border px-4 py-3 text-muted-foreground">{rate.weight}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.dubai}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.uk}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.usa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sea Cargo Pricing */}
              <div className="text-muted-foreground leading-relaxed mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Sea Cargo Pricing (LCL)</h3>
                <p className="mb-4">
                  Sea cargo LCL is priced per <strong className="text-gold">CBM (Cubic Meter)</strong>. As a rough guide:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li>• A standard sofa ≈ 1.5 CBM</li>
                  <li>• A single bed with mattress ≈ 1.2 CBM</li>
                  <li>• A dining table + 6 chairs ≈ 2 CBM</li>
                  <li>• 10 standard moving cartons ≈ 1 CBM</li>
                </ul>
              </div>

              {/* Sea Cargo Rates Table */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Estimated Sea Cargo LCL Rates from Islamabad (2026):</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Volume</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Dubai Cost</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK Cost</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">USA Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seaCargoRates.map((rate, index) => (
                        <tr key={rate.volume} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.volume}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.dubai}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.uk}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.usa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                *All figures are estimates. Actual costs depend on exact dimensions, weight, destination port, surcharges, and season. Contact us for an exact quote.*
              </p>
            </motion.div>

            {/* Step-by-Step Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Step-by-Step: How Cargo Service Works in Islamabad
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Here is exactly what happens when you book international cargo service with Best International Movers from Islamabad:
              </p>
              <div className="space-y-4">
                {processSteps.map((step, idx) => (
                  <div key={step.step} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What You Can Ship */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                What Can You Ship Internationally from Islamabad?
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Personal & Household", items: "Furniture, sofas, beds, wardrobes, kitchen appliances, electronics, clothing, books, children's toys, artwork, carpets, and decorative items." },
                  { title: "Commercial Goods", items: "Textiles, garments, handicrafts, dried fruits, food products (where permitted), IT equipment, machinery parts, and industrial goods." },
                  { title: "Vehicles", items: "Cars and motorcycles via our dedicated vehicle shipping service — road transport to Karachi port, then RoRo or container shipping." },
                  { title: "Documents & Samples", items: "Urgent business documents, legal papers, product samples, and small gift parcels via our express service." }
                ].map((category, idx) => (
                  <div key={category.title} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <PackageIcon className="text-gold" size={16} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{category.title}</h3>
                      <p className="text-muted-foreground">{category.items}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What You Cannot Ship */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                What You Cannot Ship Internationally from Islamabad
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  Pakistan Customs prohibits the export of certain items. Do not attempt to ship:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Narcotics or controlled substances</li>
                  <li>• Weapons, ammunition, or explosive materials</li>
                  <li>• Pakistani antiquities and archaeological artifacts (without NOC)</li>
                  <li>• Wildlife products from endangered species</li>
                  <li>• Counterfeit goods or pirated media</li>
                  <li>• Hazardous chemicals or flammable materials</li>
                  <li>• Foreign currency above declared limits</li>
                </ul>
                <p className="mt-4">
                  At the destination, each country has additional restrictions. Our team advises you on destination-specific prohibitions before your cargo is prepared.
                </p>
              </div>
            </motion.div>

            {/* Tips for Best Service */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Tips for Getting the Best Cargo Service in Islamabad
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Book Early", desc: "Cargo space — especially air freight during peak seasons (Ramadan, Eid, summer) — fills up fast. Book at least 2–4 weeks in advance for sea freight and 1–2 weeks for air freight." },
                  { title: "Provide Accurate Cargo Details", desc: "Inaccurate dimensions or weights lead to rate adjustments after the fact. Always get your cargo professionally measured and weighed, or let us do it during the free survey." },
                  { title: "Always Insure Your Cargo", desc: "Cargo insurance costs just 1–2% of your goods' value. It is the most important protection you can have for an international shipment. Never ship without it." },
                  { title: "Verify Door-to-Door Coverage", desc: "Some cargo companies quote port-to-port rates that exclude destination customs, delivery, and handling. Always confirm exactly what is and is not included in your quote." },
                  { title: "Choose Experience Over Cheapest Price", desc: "The cheapest quote often means corners are cut — on packing quality, documentation accuracy, or destination service. A shipment delayed at destination customs for weeks due to documentation errors will cost you far more than you saved on the freight rate." }
                ].map((tip, idx) => (
                  <div key={tip.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                        <p className="text-muted-foreground">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — Cargo Service Islamabad
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={faq.q} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Book Your Cargo Service in Islamabad Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to ship internationally from Islamabad? Best International Movers & Logistics is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Get a Free Cargo Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Team
                </a>
              </div>
              <div className="mt-6 text-muted-foreground">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>0300-9130211</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Mon-Sat 8AM-8PM</span>
                  </div>
                </div>
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

export default CargoServiceIslamabadCompleteGuideBlog;
