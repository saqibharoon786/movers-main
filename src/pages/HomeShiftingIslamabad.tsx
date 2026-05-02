import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "home-shifting-islamabad",
  icon: Home,
  title: "Home Shifting Islamabad – Professional House Relocation Services",
  subheading: "Professional & Reliable Movers",
  desc: "Expert home shifting services in Islamabad. Professional packers & movers covering all F, G, E, I sectors, DHA & Bahria Town. FREE quote – 0300-9130211",
  featuresList: [
    "Full House Shifting Service – Complete residential relocation from start to finish",
    "Professional Packing Service – Export-grade materials for maximum protection",
    "Furniture Dismantling & Reassembly – Beds, wardrobes, dining tables handled",
    "Office & Commercial Shifting – Minimal business disruption with after-hours options",
    "Islamabad to Rawalpindi Shifting – Twin city specialists with daily service",
    "Intercity Shifting from Islamabad – Islamabad to Lahore, Karachi, Peshawar, Multan",
    "International Moving from Islamabad – Door-to-door relocation to 100+ countries",
    "Secure Storage in Islamabad – Climate-controlled storage facilities",
    "Transit Insurance – Full coverage for all belongings during transport",
    "Experienced & Verified Team – Professional background-checked moving staff",
    "Transparent Pricing – Written quotes with no hidden charges",
    "All Sectors Coverage – F, G, E, I series plus all major housing societies"
  ],
  heroImg: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600",
  cities: [
    "F-5, F-6, F-7, F-8, F-10, F-11, F-12, F-13, F-14",
    "G-6, G-7, G-8, G-9, G-10, G-11, G-13, G-14, G-15, G-16",
    "E-7, E-11", "I-8, I-9, I-10, I-11, I-14, I-15, I-16",
    "DHA Islamabad", "Bahria Town Islamabad", "Park View City"
  ],
  faqs: [
    {
      q: "How much does home shifting cost in Islamabad?",
      a: "Charges range from Rs. 12,000 for a studio apartment to Rs. 150,000+ for a large villa with full packing. The exact cost depends on home size, distance, floor level, and packing scope. Contact us for a free, itemised quote."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend 3 to 5 days for standard sector shifts. For large houses and month-end dates — the busiest periods — book at least one week ahead. Same-day shifting is available subject to availability."
    },
    {
      q: "Do you cover all sectors in Islamabad?",
      a: "Yes. We cover all CDA sectors — F, G, E, I series — plus all major housing societies including Bahria Town, DHA, Park View City, Gulberg, Capital Smart City, B-17, and PWD."
    },
    {
      q: "Can you shift from Islamabad to Rawalpindi on the same day?",
      a: "Yes. Islamabad to Rawalpindi is a same-day shift for any home size. For full details and Rawalpindi-specific pricing visit our home shifting Rawalpindi page."
    },
    {
      q: "Do you provide packing materials?",
      a: "Yes. All packing materials — boxes, bubble wrap, stretch film, furniture blankets, tape, and foam padding — are included in the full packing service."
    },
    {
      q: "Are my goods insured?",
      a: "Yes. All consignments are covered by transit insurance from pickup to delivery. Any damage during the move is fully compensated."
    },
    {
      q: "Can you handle international moving from Islamabad?",
      a: "Absolutely. Our international moving service covers door-to-door relocation from Islamabad to 100+ countries — UAE, UK, Canada, USA, Australia — with sea freight, air freight, customs clearance, and destination delivery."
    },
    {
      q: "Do you shift offices after hours in Islamabad?",
      a: "Yes. After-hours and weekend office shifting is available to minimise business disruption. Our commercial team is experienced in overnight corporate relocations."
    },
    {
      q: "Can you move a piano or heavy gym equipment?",
      a: "Yes. We handle specialist items — pianos, gym equipment, heavy safes, and antiques — with appropriate equipment and crew, quoted separately."
    }
  ]
};

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
        "@id": "https://bestintlmovers.com/home-shifting-islamabad#service",
        "name": "Home Shifting Islamabad – Professional House Relocation Services",
        "serviceType": "Moving and Packing Services",
        "description": "Expert home shifting services in Islamabad. Professional packers & movers covering all F, G, E, I sectors, DHA & Bahria Town.",
        "url": "https://bestintlmovers.com/home-shifting-islamabad",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Place", "name": "Islamabad, Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Home Shifting Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full House Shifting Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Packing Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Shifting Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Islamabad to Rawalpindi Shifting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Moving Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "International Moving Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storage Solutions Islamabad" } }
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
        "name": "Home Shifting Islamabad", 
        "item": "https://bestintlmovers.com/home-shifting-islamabad" 
      }
    ]
  };
}

const HomeShiftingIslamabad = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Home Shifting Islamabad – Professional & Reliable Movers",
    description: "Expert home shifting services in Islamabad. Professional packers & movers covering all F, G, E, I sectors, DHA & Bahria Town. FREE quote – 0300-9130211",
    keywords: "home shifting islamabad, home shifting services islamabad, house shifting islamabad, packers and movers islamabad, house shifting services islamabad, movers islamabad",
    canonicalUrl: "https://bestintlmovers.com/home-shifting-islamabad"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/home-shifting-islamabad"
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
              <Home className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Professional House Relocation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Home Shifting Islamabad – Professional House Relocation Services
            </h1>
            
            <img 
              src={serviceData.heroImg} 
              alt="Family home shifting with professional movers in Islamabad" 
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
                Get Free Moving Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Moving Team
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
                Moving to a new home in Islamabad should feel like a fresh start — not a logistical nightmare. But the reality of home shifting in Pakistan's capital is more complex than most families anticipate. Booking the right vehicle, navigating CDA sector access rules, managing building security protocols in DHA and Bahria Town, coordinating lift bookings in high-rise apartments, and ensuring that years of household belongings arrive at the new address without a single scratch — it takes a team that knows exactly what it is doing.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we have been providing professional home shifting services in Islamabad for over 15 years. From compact studio apartments in G-11 to large family homes in F-7, corporate villas in E-7, and gated community houses in Bahria Town — our trained team handles every detail of your move with precision, care, and full transparency from start to finish.
              </p>

              <p>
                One call. One team. Complete home shifting in Islamabad — done right.
              </p>
            </motion.div>

            {/* H2: Why Home Shifting in Islamabad Is Uniquely Challenging */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Home Shifting in Islamabad Is Uniquely Challenging
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-6 border border-navy-light">
                <p className="text-foreground leading-relaxed mb-6">
                  Islamabad is a planned city — but that planning creates its own set of moving challenges that casual movers consistently underestimate.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">CDA Sector Access Restrictions</h3>
                    <p className="text-foreground leading-relaxed">
                      Many sectors in Islamabad have specific vehicle access rules and timings — particularly during peak hours on the Margalla Road corridor, main boulevards of F-6, F-7, and G-6, and the Ring Road junctions. A moving team unfamiliar with these restrictions can face delays that stretch a planned 6-hour shift into an entire day.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Gated Community Protocols</h3>
                    <p className="text-foreground leading-relaxed">
                      DHA Islamabad, Bahria Town, Gulberg Greens, and other gated communities have their own security and vehicle entry procedures. Moving vehicles require advance registration and coordination with community security staff. Our team handles this routinely — it is part of our standard pre-move planning.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">High-Rise Apartment Lifts</h3>
                    <p className="text-foreground leading-relaxed">
                      Islamabad's growing apartment market — Park View City, Gulberg Residencia towers, apartments in G-11, F-11 — often have single service lifts with specific booking windows for large moves. Without advance coordination, you could find yourself waiting hours for lift access. We book lift slots as part of our move planning process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Narrow Service Lanes</h3>
                    <p className="text-foreground leading-relaxed">
                      Inside sectors like I-8, G-9, and I-10, service lane access for large vehicles can be tight. Our team surveys the route in advance for larger moves to confirm vehicle sizing and access.
                    </p>
                  </div>
                </div>
                
                <p className="text-foreground mt-6 leading-relaxed">
                  These are not minor details — they are the difference between a smooth 5-hour shift and a chaotic 12-hour ordeal. Experience in Islamabad's specific moving environment is what separates us from generic movers.
                </p>
              </div>
            </motion.div>

            {/* H2: Our Complete Home Shifting Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Complete Home Shifting Services in Islamabad
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Home, title: "Full House Shifting Service", desc: "Complete residential relocation from start to finish." },
                  { icon: Package, title: "Professional Packing Service", desc: "Export-grade materials selected specifically for each item type." },
                  { icon: Truck, title: "Furniture Dismantling & Reassembly", desc: "Large furniture pieces professionally dismantled and reassembled." },
                  { icon: Building, title: "Office & Commercial Shifting", desc: "Minimal operational disruption with after-hours options." },
                  { icon: MapPin, title: "Islamabad to Rawalpindi Shifting", desc: "Twin city specialists with daily service and full coordination." },
                  { icon: Globe, title: "Intercity Shifting from Islamabad", desc: "Islamabad to Lahore, Karachi, Peshawar, Multan, Faisalabad." },
                  { icon: Plane, title: "International Moving from Islamabad", desc: "Door-to-door relocation to 100+ countries worldwide." },
                  { icon: Building, title: "Secure Storage in Islamabad", desc: "Climate-controlled storage with 24/7 monitoring." },
                  { icon: ShieldCheck, title: "Transit Insurance", desc: "Full coverage for all belongings during transport." },
                  { icon: Users, title: "Experienced & Verified Team", desc: "Professional background-checked moving staff." },
                  { icon: CheckCircle2, title: "Transparent Pricing", desc: "Written quotes with no hidden charges." },
                  { icon: MapPin, title: "All Sectors Coverage", desc: "F, G, E, I series plus all major housing societies." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <item.icon className="text-gold mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: All Sectors and Areas We Cover */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                All Sectors and Areas We Cover in Islamabad
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-8 border border-navy-light">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">F Sectors — Upscale Residential</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• F-5, F-6, F-7, F-8, F-10, F-11, F-12, F-13, F-14</li>
                      <li>• F-11 Markaz, F-7 Markaz area apartments and offices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">G Sectors — Mixed Residential</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• G-6, G-7, G-8, G-9, G-10, G-11, G-13, G-14, G-15, G-16</li>
                      <li>• G-8 Markaz, G-9 commercial zone</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">E Sectors — Embassy and Premium</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• E-7, E-11 — All streets and blocks</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">I Sectors — Mid-Range Residential</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• I-8, I-9, I-10, I-11, I-14, I-15, I-16</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Major Housing Societies</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Bahria Town Islamabad / Rawalpindi — Phase 1 through Phase 8</li>
                      <li>• DHA Islamabad — Phase 1, 2, 3</li>
                      <li>• Park View City, Gulberg Islamabad, Capital Smart City</li>
                      <li>• B-17 Multi Gardens, PWD Housing Society, CBr Town</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Commercial Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Blue Area — All office towers</li>
                      <li>• Jinnah Super Market area</li>
                      <li>• Centaurus and surrounding high-rises</li>
                      <li>• F-6 Super Market area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* H2: Home Shifting Charges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Home Shifting Charges in Islamabad — Full Transparent Pricing
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  The quote you receive from us is the amount you pay — no additions at delivery, no surprise fuel surcharges, no last-minute labour fees.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Estimated Local Home Shifting Charges in Islamabad (2025)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-gold font-semibold">Home Type</th>
                            <th className="pb-3 text-gold font-semibold">Estimated Cost (Full Service)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">Studio / 1-bedroom apartment</td>
                            <td className="py-3 text-gold font-bold">Rs. 12,000 – 20,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">2-bedroom apartment</td>
                            <td className="py-3 text-gold font-bold">Rs. 20,000 – 35,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">3-bedroom house (10 Marla)</td>
                            <td className="py-3 text-gold font-bold">Rs. 35,000 – 55,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">4-bedroom house (1 Kanal)</td>
                            <td className="py-3 text-gold font-bold">Rs. 55,000 – 90,000</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-foreground">Large villa / diplomatic residence</td>
                            <td className="py-3 text-gold font-bold">Rs. 80,000 – 150,000+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Islamabad to Rawalpindi Shifting Estimates</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-gold font-semibold">Home Type</th>
                            <th className="pb-3 text-gold font-semibold">Estimated Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">1-2 bedroom</td>
                            <td className="py-3 text-gold font-bold">Rs. 12,000 – 25,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">3-bedroom house</td>
                            <td className="py-3 text-gold font-bold">Rs. 25,000 – 45,000</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-foreground">Large house / full office</td>
                            <td className="py-3 text-gold font-bold">Rs. 45,000 – 80,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gold/30 backdrop-blur-sm rounded-lg border border-gold/40">
                  <p className="text-foreground font-medium text-lg">
                    <strong className="text-gold">Get your exact quote in 30 minutes</strong> — call or WhatsApp <strong className="text-gold">0300-9130211</strong> with your current sector, new address, home size, and preferred date.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Our Home Shifting Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Home Shifting Process — Step by Step
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "Contact for Free Quote", desc: "Call or WhatsApp with pickup sector, destination, home size, and preferred date." },
                  { step: "2", title: "Free Home Survey", desc: "For 3-bedroom homes and larger, in-home survey and complete written quote." },
                  { step: "3", title: "Pre-Move Planning", desc: "Vehicle size, crew count, route, lift booking, and entry coordination planned." },
                  { step: "4", title: "Professional Packing", desc: "Team arrives with all materials, packs, labels, and inventories every item." },
                  { step: "5", title: "Careful Loading", desc: "Professional stacking — heavy pieces first, fragile items secured, furniture wrapped." },
                  { step: "6", title: "Transportation", desc: "GPS-monitored vehicles for intercity moves with updates throughout journey." },
                  { step: "7", title: "Unloading, Unpacking & Setup", desc: "Items unpacked room by room, furniture reassembled, appliances positioned." },
                  { step: "8", title: "Final Walkthrough", desc: "Confirm every item is safely arrived and in place before signing off." }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-4 bg-navy-light/30 rounded-xl border border-navy-light">
                    <div className="text-gold text-2xl font-bold mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                    {idx < 7 && (
                      <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gold/50" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Why Choose Best International Movers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Choose Best International Movers in Islamabad?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "15+ Years of Islamabad Experience", desc: "We have been shifting homes across Islamabad's sectors since before many current housing societies were built." },
                  { icon: Globe, title: "Full International Moving Capability", desc: "Unlike local-only movers, we are a complete international moving company for overseas relocations." },
                  { icon: CheckCircle2, title: "Transparent Written Quotes", desc: "Every quote is itemised and complete. Packing materials, labour, transport — all included." },
                  { icon: ShieldCheck, title: "Transit Insurance on Every Move", desc: "All goods are covered by transit insurance throughout the shift with full compensation." },
                  { icon: Users, title: "Verified, Trained Staff", desc: "Our Islamabad moving team is professionally trained, background-verified, and experienced." },
                  { icon: Heart, title: "No Hidden Charges", desc: "What we quote is what you pay. Always." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <item.icon className="text-gold mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Customer Reviews */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Customer Reviews — Home Shifting Islamabad
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "We shifted from F-7/2 to DHA Phase 2 — complete 1 Kanal house. The team was punctual, worked systematically, and not a single item was damaged. Pricing was exactly as quoted."
                  </p>
                  <p className="text-foreground font-semibold">— Dr. Tariq Mehmood, F-7 Islamabad</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Moved our 3-bedroom apartment in G-11 to Bahria Town Phase 7. The team handled the lift coordination, packed everything brilliantly, and reassembled all furniture perfectly. Highly professional."
                  </p>
                  <p className="text-foreground font-semibold">— Sana Mirza, G-11 Islamabad</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Best International Movers handled our office relocation from Blue Area to Gulberg. 20 workstations, server room, and all executive furniture — completed overnight. We were fully operational the next morning."
                  </p>
                  <p className="text-foreground font-semibold">— Kamran Abbasi, Blue Area Islamabad</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Used their service for shifting from Islamabad to Lahore. Professional packing, on-time delivery, everything arrived perfectly. Will definitely use again."
                  </p>
                  <p className="text-foreground font-semibold">— Nadia Farooq, E-11 Islamabad</p>
                </div>
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
                Frequently Asked Questions — Home Shifting Islamabad
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
                Book Your Home Shifting in Islamabad — Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you are shifting a flat in G-11, a family home in F-7, an office in Blue Area, or planning an international relocation — our team is ready.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-foreground">
                  📞 <span className="text-gold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="text-lg text-foreground">
                  🕐 <span>Monday to Saturday | 8:00 AM – 8:00 PM</span>
                </div>
                <div className="text-lg text-foreground">
                  📍 <span>Serving All Sectors of Islamabad, Rawalpindi & Nationwide</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Home size={18} />
                  Get Free Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us Now
                </a>
              </div>
            </motion.div>

            {/* Related Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-8 border border-navy-light">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Related Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link to="/home-shifting-rawalpindi" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Home className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Home Shifting Rawalpindi</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Professional house shifting services in Rawalpindi</p>
                      <div className="mt-2 flex items-center text-gold font-semibold text-sm">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/goods-transportation-pakistan" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Truck className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Goods Transportation Pakistan</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Reliable road freight services nationwide</p>
                      <div className="mt-2 flex items-center text-gold font-semibold text-sm">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/services/international-moving" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Globe className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">International Moving from Pakistan</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Door-to-door relocation worldwide</p>
                      <div className="mt-2 flex items-center text-gold font-semibold text-sm">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/movers-islamabad" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Package className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Movers Islamabad</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Complete moving solutions in Islamabad</p>
                      <div className="mt-2 flex items-center text-gold font-semibold text-sm">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
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

export default HomeShiftingIslamabad;
