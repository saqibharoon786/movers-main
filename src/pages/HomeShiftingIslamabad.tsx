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
  heroImg: "/blog/packers-movers-islamabad-truck.jpg",
  cities: [
    "F-5, F-6, F-7, F-8, F-10, F-11, F-12, F-13, F-14",
    "G-6, G-7, G-8, G-9, G-10, G-11, G-13, G-14, G-15, G-16",
    "E-7, E-11", "I-8, I-9, I-10, I-11, I-14, I-15, I-16",
    "DHA Islamabad", "Bahria Town Islamabad", "Park View City"
  ],
  faqs: [
    {
      q: "How much does home shifting cost in Islamabad in 2026?",
      a: "For a standard 2-bedroom home, local shifting within Islamabad costs approximately PKR 18,000–30,000. For Islamabad to Rawalpindi, expect PKR 22,000–38,000. Costs vary based on floors, packing requirements, distance, and season."
    },
    {
      q: "How many days in advance should I book home shifting in Islamabad?",
      a: "For regular periods, 1–2 weeks advance booking is ideal. During peak seasons such as May–August, Eid, and year-end, book 3–4 weeks ahead. Same-day bookings are possible but cost more and quality cannot be guaranteed."
    },
    {
      q: "Do movers in Islamabad provide packing materials?",
      a: "Professional movers like Best International Movers bring all packing materials — boxes, bubble wrap, stretch film, and moving blankets. This is included in full-service packages. Always confirm packing materials are included before booking."
    },
    {
      q: "Is it safe to use packers and movers in Islamabad?",
      a: "Yes — with the right company. Check Google reviews, ask for written quotes, confirm insurance coverage, and ensure they have a physical office. Avoid WhatsApp-only operations with no verifiable address."
    },
    {
      q: "Can you shift home furniture on the same day in Islamabad?",
      a: "Yes, for small to medium homes, same-day shifting is possible if the team starts early (8–9 AM). Large 4–5 bedroom homes may require two days, especially if packing is included. Always discuss timeline expectations upfront."
    },
    {
      q: "What is the best time of year for home shifting in Islamabad?",
      a: "October to December and February to April are the ideal months — mild weather, lower demand, and better availability of professional teams. Avoid July–September (monsoon) and peak Eid periods."
    },
    {
      q: "Do you offer home shifting services in all areas of Islamabad?",
      a: "Yes. Best International Movers covers all of Islamabad including F-6, F-7, F-8, F-10, F-11, G-9, G-10, G-11, G-13, E-7, E-11, DHA, Bahria Enclave, Bani Gala, and all I-sectors. We also serve major areas of Rawalpindi."
    },
    {
      q: "What if something gets damaged during home shifting?",
      a: "With Best International Movers, all moves are covered by transit insurance. Any damage is documented, assessed, and compensated according to the declared value of the item."
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

function buildArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Home Shifting in Islamabad 2026 — Complete Guide | Best International Movers",
    "description": "Planning home shifting in Islamabad? Read our 2026 complete guide covering costs, tips, best packers and movers, checklists, and how to shift safely.",
    "author": { "@type": "Organization", "name": "Best International Movers & Logistics" },
    "publisher": {
      "@type": "Organization",
      "name": "Best International Movers & Logistics",
      "logo": { "@type": "ImageObject", "url": "https://bestintlmovers.com/logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://bestintlmovers.com/home-shifting-islamabad" },
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-01"
  };
}

const HomeShiftingIslamabad = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Home Shifting in Islamabad 2026 — Complete Guide | Best International Movers",
    description: "Planning home shifting in Islamabad? Read our 2026 complete guide covering costs, tips, best packers and movers, checklists, and how to shift safely. Call 0300-9130211.",
    keywords: "home shifting in Islamabad, home shifting Islamabad cost, house shifting services Islamabad, packers and movers Islamabad, home shifting checklist Pakistan, best movers Islamabad 2026, shifting from Islamabad to Rawalpindi, house shifting tips Pakistan, affordable home shifting Islamabad",
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
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildArticleSchema(), buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
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
              Home Shifting in Islamabad 2026 — The Complete Guide You Actually Need
            </h1>
            
            <img 
              src={serviceData.heroImg} 
              alt="professional home shifting Islamabad packers and movers truck" 
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
                Home shifting in Islamabad sounds simple until you are actually doing it. Whether you are moving within F-sectors, relocating from DHA to Bahria Town, shifting from Islamabad to Rawalpindi, or planning a full move abroad — the process involves careful planning, the right team, and a lot of smart decisions.
              </p>

              <p>
                In this 2026 complete guide, we explain what home shifting in Islamabad really involves, share the latest cost breakdown, provide a full moving checklist, and help you choose the best packers and movers in Islamabad with confidence.
              </p>

              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>What home shifting in Islamabad really involves</li>
                <li>Complete cost breakdown for 2026</li>
                <li>Step-by-step moving checklist</li>
                <li>How to choose the right packers and movers</li>
                <li>Common mistakes that cost people money</li>
                <li>Shifting from Islamabad to Rawalpindi tips</li>
                <li>FAQ answered by our 15-year experts</li>
              </ul>

              <p>
                For professional packing, see our <Link to="/services/professional-packing" className="text-gold hover:underline">professional packing services</Link>. For trusted movers in the capital, visit our <Link to="/packers-and-movers-islamabad" className="text-gold hover:underline">packers and movers Islamabad</Link> page.
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

            {/* H2: Home Shifting Cost */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Home Shifting Cost in Islamabad 2026 — Complete Breakdown
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  The number one question people ask is: how much does home shifting cost in Islamabad? The honest answer is: it depends. Here is a transparent breakdown of what to expect in 2026.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 text-gold font-semibold">Home Size</th>
                        <th className="pb-3 text-gold font-semibold">Local Shift (within Islamabad)</th>
                        <th className="pb-3 text-gold font-semibold">Islamabad ↔ Rawalpindi</th>
                        <th className="pb-3 text-gold font-semibold">Islamabad → Lahore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 text-foreground">1 Room / Studio</td>
                        <td className="py-3 text-gold font-bold">PKR 8,000–15,000</td>
                        <td className="py-3 text-gold font-bold">PKR 10,000–18,000</td>
                        <td className="py-3 text-gold font-bold">PKR 25,000+</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 text-foreground">2 Bedroom Apartment</td>
                        <td className="py-3 text-gold font-bold">PKR 18,000–30,000</td>
                        <td className="py-3 text-gold font-bold">PKR 22,000–38,000</td>
                        <td className="py-3 text-gold font-bold">PKR 45,000+</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 text-foreground">3 Bedroom House</td>
                        <td className="py-3 text-gold font-bold">PKR 30,000–50,000</td>
                        <td className="py-3 text-gold font-bold">PKR 35,000–60,000</td>
                        <td className="py-3 text-gold font-bold">PKR 70,000+</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 text-foreground">4–5 Bedroom Villa</td>
                        <td className="py-3 text-gold font-bold">PKR 55,000–90,000</td>
                        <td className="py-3 text-gold font-bold">PKR 65,000–100,000</td>
                        <td className="py-3 text-gold font-bold">PKR 120,000+</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-foreground">Full Office (small)</td>
                        <td className="py-3 text-gold font-bold">PKR 40,000–70,000</td>
                        <td className="py-3 text-gold font-bold">PKR 50,000–80,000</td>
                        <td className="py-3 text-gold font-bold">PKR 90,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">What Affects Home Shifting Prices in Islamabad?</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Number of floors — above ground floor with no lift adds PKR 2,000–5,000 per floor.</li>
                      <li>Packing service — professional packing adds PKR 3,000–15,000 depending on fragile items.</li>
                      <li>Distance — within the same sector vs. F-6 to Bahria Town are very different.</li>
                      <li>Time of year — Eid, summer, and year-end are peak periods.</li>
                      <li>Heavy items — pianos, safes, imported gym equipment incur extra charges.</li>
                      <li>Short-notice bookings — less than 48 hours typically add 15–25%.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Price Notes for 2026</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Seasonal demand influences the final cost. Summer and Eid periods are usually 10–20% more expensive because professional teams and trucks book up quickly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Always get a written, itemised quote before confirming. Any company that refuses to give a written quote is a red flag. Hidden charges appear at the end of the move.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gold/30 backdrop-blur-sm rounded-lg border border-gold/40">
                  <p className="text-foreground font-medium text-lg">
                    <strong className="text-gold">Pro Tip:</strong> Keep your move details ready and ask for a written quote that includes packing, labour, fuel, and insurance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Home Shifting Checklist */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Home Shifting Checklist — 4 Weeks Before Your Move
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  The biggest mistake people make is starting too late. Here is the week-by-week checklist that our professional moving coordinators use for home shifting in Islamabad.
                </p>
                <div className="grid gap-6">
                  <div className="bg-navy-light/30 rounded-xl p-6 border border-navy-light">
                    <h3 className="text-xl font-semibold text-foreground mb-4">4 Weeks Before — Planning Phase</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Decide your exact moving date — avoid Eid week, Ramadan, and monsoon season if possible.</li>
                      <li>Book your packers and movers — good teams get booked 2–3 weeks in advance.</li>
                      <li>Start decluttering — sell, donate, or dispose of what you do not need.</li>
                      <li>Measure your new home's doors and rooms — ensure large furniture fits.</li>
                      <li>Notify your landlord and prepare your security deposit paperwork.</li>
                      <li>Collect boxes and packing supplies if you plan to pack some items yourself.</li>
                    </ul>
                  </div>
                  <div className="bg-navy-light/30 rounded-xl p-6 border border-navy-light">
                    <h3 className="text-xl font-semibold text-foreground mb-4">2 Weeks Before — Preparation Phase</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Confirm the moving company booking with a written agreement.</li>
                      <li>Pack non-essential items first: books, décor, seasonal clothes, extra kitchenware.</li>
                      <li>Label every box with room name, brief contents, and FRAGILE if needed.</li>
                      <li>Take photos of your current home for security deposit disputes.</li>
                      <li>Notify utility companies like <a href="https://www.iesco.com.pk/" target="_blank" rel="noreferrer" className="text-gold hover:underline">IESCO</a> and update your address with <a href="https://www.nadra.gov.pk/" target="_blank" rel="noreferrer" className="text-gold hover:underline">NADRA</a>.</li>
                      <li>Update your bank accounts, vehicle registration, school records, and internet provider details.</li>
                      <li>Arrange babysitting or pet care for moving day.</li>
                    </ul>
                  </div>
                  <div className="bg-navy-light/30 rounded-xl p-6 border border-navy-light">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Moving Week — Execution Phase</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Confirm the team arrival time — usually 8–9 AM for morning shifts.</li>
                      <li>Pack a first-night bag with essentials before boxes are loaded.</li>
                      <li>Charge all power banks and keep chargers accessible.</li>
                      <li>Defrost the refrigerator 24 hours before moving day.</li>
                      <li>Drain the washing machine completely.</li>
                      <li>Dismantle beds, wardrobes, and large furniture the evening before if possible.</li>
                      <li>Keep important documents with you personally.</li>
                    </ul>
                  </div>
                  <div className="bg-navy-light/30 rounded-xl p-6 border border-navy-light">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Moving Day — The Day Itself</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Be present during loading — do not leave the team unsupervised.</li>
                      <li>Cross-check your inventory list as items are loaded.</li>
                      <li>Do a final walkthrough of the old home: check every room, closet, and bathroom.</li>
                      <li>Photograph any existing damage at the new property before unloading.</li>
                      <li>Direct movers room by room — tell them exactly where each piece goes.</li>
                      <li>Inspect every item after unloading and note any damage immediately.</li>
                      <li>Pay only after the job is fully complete and you are satisfied.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-foreground mt-6 font-semibold">
                  Pro Tip: Keep a small cash amount ready on moving day for tips, tea, or any unexpected small expense. Movers appreciate it and it keeps the team motivated.
                </p>
              </div>
            </motion.div>

            {/* H2: Choosing Packers and Movers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                How to Choose Packers and Movers in Islamabad — 7 Things to Check
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Islamabad has dozens of moving companies advertising online, but not all of them are reliable. Here is exactly how to tell the professional ones from the bad ones.
                  </p>
                  <ol className="list-decimal list-inside space-y-4">
                    <li>
                      <strong>They give a written quote.</strong> Any legitimate home shifting company in Islamabad will visit your home or do a video survey and provide an itemised quote. If the quote is only verbal, that is a red flag.
                    </li>
                    <li>
                      <strong>They have verifiable reviews.</strong> Check Google Maps reviews, not only website testimonials. Look for recent feedback from the last 6 months.
                    </li>
                    <li>
                      <strong>Their team is trained, not random labour.</strong> Professional movers know packing techniques, furniture dismantling, and safe handling. Ask if their crew is permanent staff or contracted.
                    </li>
                    <li>
                      <strong>They use quality packing materials.</strong> Bubble wrap, stretch film, moving blankets, and corner protectors are the marks of a professional operation.
                    </li>
                    <li>
                      <strong>They have insurance coverage.</strong> Accidents happen, and your mover should be able to confirm transit insurance in writing.
                    </li>
                    <li>
                      <strong>They have a physical office.</strong> A verifiable address and phone number are accountability signals. WhatsApp-only operations with no address are risky.
                    </li>
                    <li>
                      <strong>They have clear payment terms.</strong> Avoid companies demanding full payment upfront. Standard practice is 30–50% advance and the remainder on successful delivery.
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* H2: Islamabad to Rawalpindi Tips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Home Shifting from Islamabad to Rawalpindi — Special Tips
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                  <li>Many Rawalpindi areas like Saddar, Raja Bazaar, and old city markets have narrow streets, so smaller vehicles may be needed.</li>
                  <li>Bahria Town Rawalpindi entry gates require vehicle registration and prior coordination with security.</li>
                  <li>DHA Rawalpindi Phase 1–5 also requires advance gate passes for moving trucks.</li>
                  <li>Early morning moves (before 8 AM) avoid peak traffic on GT Road and Murree Road corridors.</li>
                  <li>The Airport Road and Chakala interchange can cause 45–90 minute delays during rush hours.</li>
                  <li>If moving to an upper floor in Rawalpindi with no lift, inform the company in advance for manpower planning.</li>
                </ul>
                <p className="text-foreground mt-6">
                  Best International Movers & Logistics serves all areas of both cities — including Bahria Town, DHA, Satellite Town, Gulraiz Housing, Askari, and all F, G, I, and H sectors in Islamabad.
                </p>
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

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-navy-light/20 rounded-2xl p-8 border border-border"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                About the Author
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Best International Movers & Logistics has been Islamabad's trusted home shifting partner for over 15 years, serving 5,000+ families across Islamabad, Rawalpindi, Lahore, and Peshawar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines local city knowledge, export-quality packing, transparent pricing, and transit insurance to make home shifting in Islamabad safe, predictable, and stress-free.
              </p>
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
