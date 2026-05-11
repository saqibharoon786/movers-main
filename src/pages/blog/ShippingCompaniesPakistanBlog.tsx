import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star, Calendar, User, Tag, Search, TrendingUp, FileText, Award as AwardIcon, Car } from "lucide-react";
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
        "@id": "https://bestintlmovers.com/blog/shipping-companies-in-pakistan#article",
        "headline": "Best Shipping Companies in Pakistan 2025 | International Cargo | Best Intl Movers",
        "description": "Looking for trusted shipping companies in Pakistan? Best International Movers offers international cargo shipping from Islamabad, Rawalpindi, Lahore & Karachi to 100+ countries. Get a free quote!",
        "url": "https://bestintlmovers.com/blog/shipping-companies-in-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "author": {
          "@type": "Organization",
          "name": "Best International Movers & Logistics"
        },
        "datePublished": "2025-05-11",
        "dateModified": "2025-05-11",
        "mainEntityOfPage": "https://bestintlmovers.com/blog/shipping-companies-in-pakistan"
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
        "name": "How do I get a shipping quote from Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us via phone, WhatsApp, or our website contact form. Share your cargo details (what you are shipping, where it is going, your timeline) and we will provide a detailed written quote within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "How long does shipping from Pakistan to Dubai take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sea freight from Karachi to Dubai (Jebel Ali) takes 7–12 days. Air freight takes 1–2 days."
        }
      },
      {
        "@type": "Question",
        "name": "Can I ship a car from Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide vehicle shipping via RoRo (Roll-on Roll-off) vessels and enclosed container shipping. Required documents include the original log book, CNIC, proof of purchase, and CPLC clearance."
        }
      }
    ]
  };
}

const ShippingCompaniesPakistanBlog = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Best Shipping Companies in Pakistan 2025 | International Cargo | Best Intl Movers",
    description: "Looking for trusted shipping companies in Pakistan? Best International Movers offers international cargo shipping from Islamabad, Rawalpindi, Lahore & Karachi to 100+ countries. Get a free quote!",
    keywords: "shipping companies in pakistan, best shipping company pakistan, international shipping pakistan, cargo shipping pakistan, shipping company islamabad, shipping company rawalpindi, shipping company karachi, international cargo pakistan",
    canonicalUrl: "https://bestintlmovers.com/blog/shipping-companies-in-pakistan"
  };

  const shippingServices = [
    {
      icon: Home,
      title: "International Moving & Relocation",
      description: "Complete door-to-door relocation for families and individuals moving permanently or temporarily to another country.",
      features: ["Professional packing", "All documentation", "Export & import customs", "Final delivery at new home"]
    },
    {
      icon: Package,
      title: "International Cargo Shipping",
      description: "Shipping of commercial goods, business samples, gifts, parcels, and other cargo from Pakistan to international destinations.",
      features: ["Air freight (1-5 days)", "Sea freight (7-38 days)", "Commercial cargo", "Gifts & parcels"]
    },
    {
      icon: Car,
      title: "Vehicle Shipping",
      description: "Export of cars, motorcycles, and other vehicles from Pakistan.",
      features: ["RoRo vessels", "Enclosed container shipping", "Complete documentation", "Customs clearance"]
    },
    {
      icon: Truck,
      title: "Freight Forwarding",
      description: "Coordination of complex multi-modal shipments across different transport methods.",
      features: ["Multi-modal transport", "Road to port transport", "International coordination", "Last-mile delivery"]
    }
  ];

  const destinations = [
    {
      name: "UAE (Dubai, Abu Dhabi, Sharjah)",
      seaTime: "7–12 days",
      airTime: "1–2 days",
      description: "Most popular international shipping route from Pakistan with weekly sailings and daily air connections."
    },
    {
      name: "UK",
      seaTime: "25–30 days",
      airTime: "2–3 days",
      description: "Regular sea freight to Felixstowe and air freight to Heathrow with UK customs clearance included."
    },
    {
      name: "USA",
      seaTime: "28–35 days",
      airTime: "3–5 days",
      description: "Sea freight to LA, New York, Houston with US CBP clearance and delivery to all US states."
    },
    {
      name: "Canada",
      seaTime: "30–38 days",
      airTime: "3–5 days",
      description: "Sea freight to Vancouver and Montreal with full CBSA clearance across all provinces."
    },
    {
      name: "Australia",
      seaTime: "18–25 days",
      airTime: "3–4 days",
      description: "Sea freight to Melbourne, Sydney, Brisbane with Australian Border Force clearance."
    },
    {
      name: "Saudi Arabia, Qatar & Kuwait",
      seaTime: "10–15 days",
      airTime: "2–3 days",
      description: "Frequent sea and air services to Jeddah, Riyadh, Dammam, Doha, and Kuwait City."
    }
  ];

  const airFreightRates = [
    { destination: "UAE (Dubai)", rate: "$2.50–$4.50/kg", minimum: "$120" },
    { destination: "Saudi Arabia", rate: "$2.80–$5.00/kg", minimum: "$130" },
    { destination: "UK (London)", rate: "$4.00–$7.00/kg", minimum: "$180" },
    { destination: "USA", rate: "$5.00–$9.00/kg", minimum: "$220" },
    { destination: "Canada", rate: "$5.00–$8.50/kg", minimum: "$200" },
    { destination: "Australia", rate: "$4.50–$8.00/kg", minimum: "$200" }
  ];

  const seaFreightLCRates = [
    { destination: "UAE (Jebel Ali)", rate: "$60–$110/CBM", minimum: "1 CBM" },
    { destination: "Saudi Arabia (Jeddah)", rate: "$70–$120/CBM", minimum: "1 CBM" },
    { destination: "UK (Felixstowe)", rate: "$90–$160/CBM", minimum: "1 CBM" },
    { destination: "USA", rate: "$110–$200/CBM", minimum: "1 CBM" },
    { destination: "Canada", rate: "$120–$210/CBM", minimum: "1 CBM" },
    { destination: "Australia", rate: "$100–$180/CBM", minimum: "1 CBM" }
  ];

  const faqs = [
    {
      q: "How do I get a shipping quote from Pakistan?",
      a: "Contact us via phone, WhatsApp, or our website contact form. Share your cargo details (what you are shipping, where it is going, your timeline) and we will provide a detailed written quote within 24 hours."
    },
    {
      q: "How long does shipping from Pakistan to Dubai take?",
      a: "Sea freight from Karachi to Dubai (Jebel Ali) takes 7–12 days. Air freight takes 1–2 days."
    },
    {
      q: "Can I ship a car from Pakistan?",
      a: "Yes. We provide vehicle shipping via RoRo (Roll-on Roll-off) vessels and enclosed container shipping. Required documents include the original log book, CNIC, proof of purchase, and CPLC clearance."
    },
    {
      q: "What is the cheapest way to ship from Pakistan internationally?",
      a: "LCL sea freight is the most economical option for small to medium shipments. For large households, FCL sea freight (full container) offers the best value. Air freight is faster but significantly more expensive."
    },
    {
      q: "Do you handle customs at the destination country?",
      a: "Yes. Through our partner network in 100+ countries, we manage import customs clearance at the destination as part of our complete door-to-door service."
    },
    {
      q: "Is my shipment insured?",
      a: "Yes. We strongly recommend and arrange comprehensive cargo insurance for all international shipments. The insurance covers loss, theft, and damage throughout the entire transit journey."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/blog/shipping-companies-in-pakistan"
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
              <Ship className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Complete 2025 Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Best Shipping Companies in Pakistan — Complete <span className="text-gold">2025 Guide</span>
            </h1>
            
            <img 
              src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Best Shipping Companies in Pakistan - International Cargo Services" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Finding a reliable shipping company in Pakistan is not as simple as it sounds. This comprehensive 2025 guide by Best International Movers & Logistics — one of Pakistan's most trusted international shipping companies with 15+ years of experience — tells you everything you need to know about choosing the right shipping company in Pakistan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free Shipping Quote
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
                Finding a reliable <strong className="text-gold">shipping company in Pakistan</strong> is not as simple as it sounds. With dozens of companies claiming to offer international shipping services, how do you know which one will actually deliver your goods safely, on time, and without hidden charges?
              </p>

              <p>
                This comprehensive 2025 guide by <strong className="text-gold">Best International Movers & Logistics</strong> — one of Pakistan's most trusted international shipping companies with <strong className="text-gold">15+ years of experience</strong> and over <strong className="text-gold">5,000 successful shipments</strong> — tells you everything you need to know about choosing the right shipping company in Pakistan.
              </p>
            </motion.div>

            {/* What Do Shipping Companies Do */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                What Do Shipping Companies in Pakistan Actually Do?
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  A professional shipping company in Pakistan manages the entire process of moving your goods from Pakistan to any destination abroad. This includes:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong className="text-gold">Collection & Packing</strong> — picking up your goods from your home or office and professionally packing them for international transit</li>
                  <li>• <strong className="text-gold">Export Documentation</strong> — preparing all paperwork required by Pakistan Customs and FBR</li>
                  <li>• <strong className="text-gold">Freight Booking</strong> — booking space on the best airline or shipping line for your cargo</li>
                  <li>• <strong className="text-gold">Customs Clearance</strong> — clearing your goods through Pakistan Customs (export) and destination customs (import)</li>
                  <li>• <strong className="text-gold">International Transit</strong> — managing your cargo throughout its journey by air or sea</li>
                  <li>• <strong className="text-gold">Last-Mile Delivery</strong> — delivering your goods to your new address at the destination</li>
                </ul>
                <p className="mt-4">
                  Not all companies that call themselves "shipping companies in Pakistan" offer all of these services. Many are simply freight brokers who only book cargo space but leave you to handle documentation, customs, and delivery on your own. Always confirm the full scope of services before booking.
                </p>
              </div>
            </motion.div>

            {/* Types of Shipping Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Types of Shipping Services Available in Pakistan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {shippingServices.map((service, idx) => (
                  <div key={service.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>
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
                ))}
              </div>
            </motion.div>

            {/* How to Choose the Best Shipping Company */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                How to Choose the Best Shipping Company in Pakistan
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Check Their Experience", desc: "How many years have they been operating? International shipping involves complex regulations, documentation requirements, and logistics networks that only come with real experience. Beware of new companies with no track record." },
                  { title: "Verify Their Licenses", desc: "Legitimate shipping companies in Pakistan should hold: Pakistan Customs licensed clearing agent registration, PIFFA membership, and SECP registration." },
                  { title: "Ask for References", desc: "Any reputable shipping company should be able to provide testimonials and references from past clients who relocated to your specific destination country." },
                  { title: "Confirm Door-to-Door Service", desc: "Many companies quote attractive rates but only for port-to-port service. Confirm whether the quote includes packing, export customs, sea/air freight, import customs at destination, and last-mile delivery." },
                  { title: "Insist on a Written Binding Quote", desc: "A professional shipping company provides a detailed written quotation listing all charges — freight, packing, origin handling, destination handling, customs fees, and delivery. Hidden charges after the fact are a major red flag." },
                  { title: "Confirm Cargo Insurance", desc: "Your goods must be insured during international transit. Confirm that the company offers comprehensive cargo insurance and clearly explain the claims process." },
                  { title: "Check Their Tracking Capabilities", desc: "Professional shipping companies provide real-time tracking of your shipment so you always know where your goods are during transit." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Shipping Routes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Shipping Routes — Top International Destinations from Pakistan
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Pakistan has strong shipping connections to all major international regions. Here are the most popular routes we serve:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinations.map((dest, idx) => (
                  <div key={dest.name} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{dest.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div>⚓ Sea: {dest.seaTime}</div>
                      <div>✈️ Air: {dest.airTime}</div>
                    </div>
                    <p className="text-muted-foreground text-sm">{dest.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Air Freight Rates */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Shipping Costs from Pakistan — What to Expect in 2025
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Air Freight Rates from Pakistan (2025 Estimates)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Per kg Rate</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Minimum Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      {airFreightRates.map((rate, index) => (
                        <tr key={rate.destination} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.destination}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.rate}</td>
                          <td className="border border-border px-4 py-3 text-muted-foreground">{rate.minimum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  *Air freight is charged on chargeable weight = greater of actual weight or volumetric weight (L×W×H cm ÷ 6000)*
                </p>
              </div>

              {/* Sea Freight LCL Rates */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Sea Freight LCL Rates from Pakistan (2025 Estimates)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Per CBM Rate</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Minimum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seaFreightLCRates.map((rate, index) => (
                        <tr key={rate.destination} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.destination}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.rate}</td>
                          <td className="border border-border px-4 py-3 text-muted-foreground">{rate.minimum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-muted-foreground text-center">
                *All rates are estimates and exclude origin packing, customs fees, and destination delivery. Contact us for a precise quote.*
              </p>
            </motion.div>

            {/* Why Best International Movers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Best International Movers is Among the Best Shipping Companies in Pakistan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "15+ Years of Experience", desc: "Since 2009, we have successfully handled thousands of international shipments from Pakistan with deep expertise in Pakistani export regulations and destination import requirements." },
                  { icon: Home, title: "Complete Door-to-Door Service", desc: "Unlike freight brokers that only handle part of the journey, we manage your shipment from the moment our packers arrive at your door in Pakistan to the moment your goods are placed in your new home abroad." },
                  { icon: Package, title: "Professional Packing", desc: "Our professional packing service uses double-wall cartons, bubble wrap, foam padding, furniture blankets, stretch wrap, and wooden crating for maximum protection." },
                  { icon: FileCheck, title: "Expert Customs Clearance", desc: "Our licensed customs agents handle all Pakistan export documentation and coordinate import clearance at your destination through our global partner network." },
                  { icon: ShieldCheck, title: "Fully Insured Cargo", desc: "Every shipment is covered by comprehensive international cargo insurance. You are protected against loss or damage throughout the entire transit." },
                  { icon: TrendingUp, title: "Real-Time Tracking", desc: "Track your shipment 24/7 using your unique tracking number. Never wonder where your goods are." },
                  { icon: Calculator, title: "Transparent Pricing", desc: "We provide a complete written quotation with every charge listed upfront. No surprises. No hidden fees." },
                  { icon: Globe, title: "Global Agent Network", desc: "Through our partnerships with licensed agents in 100+ countries, we provide seamless last-mile delivery at your destination." }
                ].map((item, idx) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
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
                Frequently Asked Questions — Shipping Companies Pakistan
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
                Get a Free Quote from One of Pakistan's Best Shipping Companies
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to ship internationally from Pakistan? Contact Best International Movers & Logistics for a free, no-obligation quote:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Get Your Free Shipping Quote
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

export default ShippingCompaniesPakistanBlog;
