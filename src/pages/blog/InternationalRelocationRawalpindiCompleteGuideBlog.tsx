import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star, Calendar, User, Tag, Search, TrendingUp, FileText, Award as AwardIcon, Car, Package as PackageIcon, CheckSquare, List } from "lucide-react";
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
        "@id": "https://bestintlmovers.com/blog/international-relocation-rawalpindi-complete-guide#article",
        "headline": "International Relocation from Rawalpindi 2025 — Complete Moving Guide | Best Intl Movers",
        "description": "Planning international relocation from Rawalpindi? This complete 2025 guide covers everything — costs, packing, customs, air vs sea freight, popular destinations & expert tips from Best International Movers.",
        "url": "https://bestintlmovers.com/blog/international-relocation-rawalpindi-complete-guide",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "author": {
          "@type": "Organization",
          "name": "Best International Movers & Logistics"
        },
        "datePublished": "2025-05-11",
        "dateModified": "2025-05-11",
        "mainEntityOfPage": "https://bestintlmovers.com/blog/international-relocation-rawalpindi-complete-guide"
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
        "name": "How far in advance should I book international relocation from Rawalpindi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 8–10 weeks before your planned moving date. For popular peak seasons (May–August and pre-Eid periods), 12 weeks is advisable."
        }
      },
      {
        "@type": "Question",
        "name": "Can you do a home survey in Rawalpindi before giving a quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We conduct free home surveys throughout Rawalpindi and Islamabad — all sectors and housing schemes. The survey typically takes 1–2 hours and results in a detailed, accurate written quotation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle the customs clearance at my destination country?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Through our partner agents in 100+ countries, we coordinate complete import customs clearance at your destination as part of our door-to-door service."
        }
      }
    ]
  };
}

const InternationalRelocationRawalpindiCompleteGuideBlog = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "International Relocation from Rawalpindi 2025 — Complete Moving Guide | Best Intl Movers",
    description: "Planning international relocation from Rawalpindi? This complete 2025 guide covers everything — costs, packing, customs, air vs sea freight, popular destinations & expert tips from Best International Movers.",
    keywords: "international relocation rawalpindi, international relocation services rawalpindi, movers rawalpindi, packers and movers rawalpindi, moving company rawalpindi, rawalpindi to dubai movers, rawalpindi to uk movers, international moving rawalpindi, relocation rawalpindi islamabad",
    canonicalUrl: "https://bestintlmovers.com/blog/international-relocation-rawalpindi-complete-guide"
  };

  const phases = [
    {
      title: "Phase 1 — Planning (8–12 Weeks Before Moving)",
      steps: [
        "Choose your international moving company",
        "Decide what to move",
        "Choose your shipping method (Air vs Sea)",
        "Sort out visas and immigration"
      ]
    },
    {
      title: "Phase 2 — Preparation (4–6 Weeks Before Moving)",
      steps: [
        "Professional home survey",
        "Gather your documents",
        "Arrange cargo insurance",
        "Notify relevant parties"
      ]
    },
    {
      title: "Phase 3 — Packing and Dispatch (Moving Week)",
      steps: [
        "Professional packing",
        "Cargo collection and export clearance",
        "Transit begins"
      ]
    },
    {
      title: "Phase 4 — Arrival and Delivery",
      steps: [
        "Destination customs clearance",
        "Last-mile delivery"
      ]
    }
  ];

  const airFreightRates = [
    { home: "Studio / 1 room", weight: "100–150 kg", dubai: "PKR 35,000–60,000", uk: "PKR 100,000–170,000", canada: "PKR 160,000–260,000" },
    { home: "2-bedroom", weight: "400–600 kg", dubai: "PKR 120,000–210,000", uk: "PKR 340,000–560,000", canada: "PKR 540,000–880,000" },
    { home: "3-bedroom", weight: "800–1,200 kg", dubai: "PKR 240,000–420,000", uk: "PKR 680,000–1,100,000", canada: "PKR 1,000,000+" }
  ];

  const seaFreightRates = [
    { home: "Small apartment", volume: "3–6 CBM", dubai: "PKR 50,000–100,000", uk: "PKR 120,000–220,000", canada: "PKR 180,000–320,000" },
    { home: "2-bedroom home", volume: "8–14 CBM", dubai: "PKR 100,000–200,000", uk: "PKR 220,000–400,000", canada: "PKR 320,000–580,000" },
    { home: "3-bedroom home", volume: "15–25 CBM", dubai: "PKR 180,000–340,000", uk: "PKR 370,000–650,000", canada: "PKR 540,000–950,000" },
    { home: "Full 20ft container", volume: "~25–28 CBM", dubai: "PKR 90,000–160,000", uk: "PKR 170,000–280,000", canada: "PKR 220,000–380,000" }
  ];

  const destinations = [
    {
      name: "Rawalpindi to Dubai — The #1 Route",
      description: "Dubai is by far the most popular international relocation destination for Rawalpindi families. A large Pakistani community, no language barrier, strong job market, and family-friendly environment make Dubai an obvious choice.",
      features: ["Professional packing at your Rawalpindi home", "Road transport to Karachi Port", "Weekly sea freight sailings to Jebel Ali Port (7–12 days sea transit)", "UAE Customs clearance (personal effects are generally duty-free with UAE residence visa)", "Last-mile delivery to your Dubai / Sharjah / Abu Dhabi address"],
      time: "Door-to-door total time: 14–22 days (sea freight) | 3–5 days (air freight)"
    },
    {
      name: "Rawalpindi to UK",
      description: "The UK is a major destination for Rawalpindi families — especially those with existing family members already settled there, and students attending British universities.",
      features: ["UK Transfer of Residence (ToR) Relief available", "HMRC ToR01 duty relief for permanent relocations", "Complete customs documentation", "Delivery across England, Scotland, and Wales"],
      time: "Door-to-door total time: 35–44 days (sea freight) | 4–6 days (air freight)"
    },
    {
      name: "Rawalpindi to Canada",
      description: "Canada has become an increasingly popular destination for Rawalpindi families through various immigration programs including Express Entry, Provincial Nominee Programs (PNP), and family sponsorship.",
      features: ["CBSA Import Process with BSF186 form", "Clearance at Vancouver or Montreal ports", "Complete documentation preparation", "Delivery across all Canadian provinces"],
      time: "Door-to-door total time: 42–55 days (sea freight) | 5–7 days (air freight)"
    },
    {
      name: "Rawalpindi to Saudi Arabia, Qatar & Kuwait",
      description: "The Gulf region remains a major destination for Rawalpindi professionals — particularly in construction, oil & gas, healthcare, and education sectors.",
      features: ["Frequent sea and air services", "Jeddah, Riyadh, Dammam, Doha, and Kuwait City destinations", "Full customs clearance at destination", "Professional relocation support"],
      time: "Door-to-door total time: 14–24 days (sea freight) | 3–5 days (air freight)"
    }
  ];

  const movingCompanyCriteria = [
    { title: "Local Presence", desc: "Choose a company with an actual office in Rawalpindi or Islamabad — not just a call center or broker. Local presence means faster response times, physical accountability, and teams who know the area." },
    { title: "Verified Experience", desc: "Look for companies with at least 5–10 years of experience in international relocation. International moves involve complex regulations and logistics that only come with real track record." },
    { title: "Licensed Customs Agents", desc: "Your moving company's customs agents must be licensed by Pakistan Customs (FBR). Unlicensed clearance agents can expose you to serious legal and financial risk." },
    { title: "Comprehensive Written Quote", desc: "A professional mover provides a complete written quotation listing every charge — freight, packing, origin handling, inland transport to Karachi, destination handling, customs fees, and delivery. Beware of quotes that seem very low — they typically exclude critical services." },
    { title: "Cargo Insurance", desc: "Insist on full cargo insurance. Any company that discourages or does not offer insurance is a red flag." },
    { title: "Real Client References", desc: "Ask for references from clients who relocated to your specific destination. A trustworthy company welcomes this request." }
  ];

  const commonMistakes = [
    { title: "Leaving it Too Late", desc: "International relocation requires coordination across customs, carriers, ports, and destination agents. Book your mover at least 6–10 weeks before your planned move date. Last-minute bookings result in higher rates and rushed documentation." },
    { title: "Going with the Cheapest Quote", desc: "The cheapest quote almost always means corners are cut — thin packing materials, inexperienced customs agents, or excluded services that surprise you at billing. Compare what is actually included, not just the headline price." },
    { title: "Not Insuring Your Cargo", desc: "International transit is long. Sea journeys take weeks. Multiple handling points introduce risk. Cargo insurance costs 1–2% of your goods' value — an absolute bargain compared to the cost of uninsured damage or loss." },
    { title: "Incorrect Documentation", desc: "Missing documents, wrong HS codes, or incomplete customs declarations can hold your shipment at the destination port for weeks — incurring daily storage charges (demurrage) that can quickly exceed your entire shipping cost." },
    { title: "Shipping Prohibited Items", desc: "Some items that are perfectly legal in Pakistan are prohibited at the destination. Always get a prohibited items advisory for your specific destination before packing." }
  ];

  const checklist = [
    {
      timeframe: "10–12 Weeks Before:",
      items: [
        "Research and shortlist international moving companies in Rawalpindi",
        "Confirm visa/immigration status for destination country",
        "Begin decluttering — sell, donate, or discard items not worth shipping"
      ]
    },
    {
      timeframe: "6–8 Weeks Before:",
      items: [
        "Book your chosen moving company and confirm dates",
        "Arrange cargo insurance",
        "Start gathering original documents",
        "Notify bank, school, employer, utilities"
      ]
    },
    {
      timeframe: "3–4 Weeks Before:",
      items: [
        "Professional home survey completed",
        "Binding written quote confirmed",
        "Vehicle shipping arranged if needed",
        "Transfer of Residence application submitted (if applicable)"
      ]
    },
    {
      timeframe: "Moving Week:",
      items: [
        "Professional packing completed",
        "Cargo collected and dispatched",
        "Tracking number received",
        "Travel arrangements confirmed"
      ]
    },
    {
      timeframe: "After Arrival:",
      items: [
        "Monitor shipment tracking",
        "Prepare for destination customs clearance",
        "Coordinate last-mile delivery to new home",
        "Settle in!"
      ]
    }
  ];

  const faqs = [
    {
      q: "How far in advance should I book international relocation from Rawalpindi?",
      a: "We recommend booking 8–10 weeks before your planned moving date. For popular peak seasons (May–August and pre-Eid periods), 12 weeks is advisable."
    },
    {
      q: "Can you do a home survey in Rawalpindi before giving a quote?",
      a: "Yes. We conduct free home surveys throughout Rawalpindi and Islamabad — all sectors and housing schemes. The survey typically takes 1–2 hours and results in a detailed, accurate written quotation."
    },
    {
      q: "What happens to my goods during the road journey from Rawalpindi to Karachi?",
      a: "Your packed goods are loaded into our sealed cargo trucks and transported directly to Karachi Port under our supervision. Goods are covered by insurance throughout the road transit as well as the sea journey."
    },
    {
      q: "Do you handle the customs clearance at my destination country?",
      a: "Yes. Through our partner agents in 100+ countries, we coordinate complete import customs clearance at your destination as part of our door-to-door service."
    },
    {
      q: "Can I store my goods in Rawalpindi before shipping?",
      a: "Yes. We offer secure, climate-controlled storage at our Rawalpindi facility for clients whose shipping date does not align with their move-out date. Short-term and long-term storage is available."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/blog/international-relocation-rawalpindi-complete-guide"
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
              <Home className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Complete 2025 Moving Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              International Relocation from Rawalpindi — Complete <span className="text-gold">2025 Moving Guide</span>
            </h1>
            
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="International Relocation from Rawalpindi - Complete Moving Guide" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Thinking about moving abroad from Rawalpindi? Whether you are relocating to Dubai for a new job, joining family in the UK, starting a new life in Canada, or heading to Australia — the process of moving your home internationally can feel like an enormous challenge.
            </p>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              It doesn't have to be. This complete 2025 guide by Best International Movers & Logistics — Rawalpindi's most experienced international relocation company — walks you through everything you need to know about moving internationally from Rawalpindi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Book Free Home Survey
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
            {/* Why Rawalpindi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Rawalpindi is One of Pakistan's Most International Cities
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Rawalpindi sits at the heart of Pakistan's most internationally connected region. The twin cities of Rawalpindi and Islamabad together form a metropolitan area that sends thousands of families, professionals, and students abroad every year.
                </p>
                <p>
                  Several factors make Rawalpindi a major origin point for international relocations:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: "Military Families", desc: "Rawalpindi is home to GHQ and a massive military community. Officers and civilian staff regularly relocate internationally for postings, training, and retirement." },
                    { title: "Government and Diplomatic Staff", desc: "Proximity to Islamabad means many government employees and diplomatic community members are based in Rawalpindi and relocate internationally as part of their careers." },
                    { title: "Corporate Professionals", desc: "The twin cities host numerous multinational companies and corporate offices whose employees receive overseas postings regularly." },
                    { title: "Students", desc: "Thousands of Rawalpindi students relocate to UK, USA, Canada, and Australia annually for higher education." },
                    { title: "Overseas Worker Families", desc: "Large numbers of Rawalpindi families have members working in the UAE, Saudi Arabia, Qatar, and Kuwait and regularly need to relocate household goods." }
                  ].map((factor, idx) => (
                    <div key={factor.title} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="text-gold" size={16} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{factor.title}</h3>
                        <p className="text-muted-foreground">{factor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  All of these groups need professional, reliable <strong className="text-gold">international relocation services in Rawalpindi</strong> — and that is exactly what Best International Movers has been providing for over 15 years.
                </p>
              </div>
            </motion.div>

            {/* How International Relocation Works */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                How International Relocation from Rawalpindi Works
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                International relocation from Rawalpindi follows a clear process. Understanding each step helps you plan effectively and avoid surprises.
              </p>
              <div className="space-y-6">
                {phases.map((phase, idx) => (
                  <div key={phase.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.steps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cost Guide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                International Relocation Costs from Rawalpindi — 2025 Guide
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-6">
                <p>
                  The cost of international relocation from Rawalpindi depends on several factors: your destination, the volume of goods, your chosen shipping method, and any special requirements (vehicle shipping, custom crating, storage).
                </p>
                <p>
                  Here is a practical cost guide for 2025:
                </p>
              </div>

              {/* Air Freight Rates */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Air Freight from Rawalpindi/Islamabad</h3>
                <p className="text-muted-foreground mb-4">
                  Air cargo departs from <strong className="text-gold">Islamabad International Airport (IIAL)</strong> which is conveniently accessible from Rawalpindi via Islamabad Expressway.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Home Size</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Approx. Weight</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Dubai (Air)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK (Air)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Canada (Air)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {airFreightRates.map((rate, index) => (
                        <tr key={rate.home} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.home}</td>
                          <td className="border border-border px-4 py-3 text-muted-foreground">{rate.weight}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.dubai}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.uk}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.canada}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sea Freight Rates */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Sea Freight from Rawalpindi</h3>
                <p className="text-muted-foreground mb-4">
                  Sea cargo travels by road from Rawalpindi to Karachi Port (approximately 18–24 hours road transit), then by container vessel.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Home Size</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Volume (CBM)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Dubai (Sea)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK (Sea)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Canada (Sea)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seaFreightRates.map((rate, index) => (
                        <tr key={rate.home} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                          <td className="border border-border px-4 py-3 font-medium text-foreground">{rate.home}</td>
                          <td className="border border-border px-4 py-3 text-muted-foreground">{rate.volume}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.dubai}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.uk}</td>
                          <td className="border border-border px-4 py-3 font-semibold text-gold">{rate.canada}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-muted-foreground text-sm mt-4 space-y-1">
                  <p>*Note: Sea freight FCL (full container) becomes cheaper per CBM than LCL once your volume exceeds 12–15 CBM.</p>
                  <p>*All estimates are 2025 ranges and exclude vehicle shipping, special crating, and destination port fees. Contact us for an exact quote.</p>
                </div>
              </div>
            </motion.div>

            {/* Popular Destinations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Most Popular Relocation Destinations from Rawalpindi
              </h2>
              <div className="space-y-6">
                {destinations.map((dest, idx) => (
                  <div key={dest.name} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{dest.name}</h3>
                    <p className="text-muted-foreground mb-4">{dest.description}</p>
                    <ul className="space-y-2 mb-4">
                      {dest.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-navy-light/20 rounded-lg p-3">
                      <p className="text-gold font-semibold text-sm">{dest.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Choosing Right Moving Company */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Choosing the Right International Moving Company in Rawalpindi
              </h2>
              <p className="text-muted-foreground mb-6">
                This is arguably the most important decision in your entire relocation. Here is what to look for:
              </p>
              <div className="space-y-4">
                {movingCompanyCriteria.map((criteria, idx) => (
                  <div key={criteria.title} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{criteria.title}</h3>
                      <p className="text-muted-foreground">{criteria.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                <p className="text-foreground">
                  At <strong className="text-gold">Best International Movers</strong>, we meet every one of these criteria. Our office is based in Rawalpindi, we have 15+ years of experience, fully licensed customs agents, transparent pricing, and thousands of satisfied client references.
                </p>
              </div>
            </motion.div>

            {/* Vehicle Relocation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Vehicle Relocation from Rawalpindi
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  Many Rawalpindi families want to take their car or motorcycle when relocating internationally. We handle complete vehicle shipping from Rawalpindi:
                </p>
                <ol className="space-y-2 ml-6">
                  <li>1. Vehicle collected from your Rawalpindi address</li>
                  <li>2. CPLC clearance certificate obtained</li>
                  <li>3. All export documents prepared (log book, CNIC, proof of ownership)</li>
                  <li>4. Vehicle transported to Karachi Port</li>
                  <li>5. Loaded on RoRo vessel (most affordable) or inside a container with household goods</li>
                  <li>6. Shipped to destination port</li>
                  <li>7. Destination customs clearance and local delivery arranged</li>
                </ol>
              </div>
              <div className="bg-navy-light/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Popular vehicle shipping routes from Rawalpindi:</h4>
                <div className="space-y-1 text-muted-foreground">
                  <div>• Rawalpindi to Dubai: 15–20 days (RoRo)</div>
                  <div>• Rawalpindi to UK: 30–38 days</div>
                  <div>• Rawalpindi to Canada: 35–45 days</div>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Common Mistakes to Avoid When Relocating from Rawalpindi
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                After 15 years and thousands of relocations, we have seen every mistake in the book. Here are the most common — and how to avoid them:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {commonMistakes.map((mistake, idx) => (
                  <div key={mistake.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="text-gold mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{mistake.title}</h3>
                        <p className="text-muted-foreground">{mistake.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Checklist */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                International Relocation Checklist — Rawalpindi Families
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Use this practical checklist to stay on track:
              </p>
              <div className="space-y-6">
                {checklist.map((section, idx) => (
                  <div key={section.timeframe} className="border-l-4 border-gold pl-4">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{section.timeframe}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckSquare className="text-gold mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                Frequently Asked Questions — International Relocation Rawalpindi
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
                Start Your International Relocation from Rawalpindi Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Thousands of Rawalpindi families have trusted Best International Movers & Logistics with their most precious possessions. With our Rawalpindi office, 15+ years of experience, licensed customs team, and global partner network — we are ready to make your international move as smooth and stress-free as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Book Your Free Home Survey Today
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

export default InternationalRelocationRawalpindiCompleteGuideBlog;
