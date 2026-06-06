import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Home, Phone, Mail, Globe, MapPin, CheckCircle2, AlertTriangle, 
  ShieldCheck, Clock, Award, Users, Calendar, FileText, ArrowRight, 
  Building, Truck, Star, Sparkles, MessageCircle, Heart, ChevronDown,
  Info, Shield, Package, DollarSign
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

// FAQs Data for schemas and display
const faqsData = [
  {
    q: "How much do movers cost in DHA Karachi in 2026?",
    a: "Studio/1-bedroom from PKR 12,000. 2-bedroom from PKR 22,000. 3-bedroom bungalow PKR 35,000–60,000. 4-bedroom bungalow PKR 55,000–85,000. 5+ bedroom villa PKR 75,000–120,000. Office moves from PKR 25,000. Exact price after free home survey at your DHA address."
  },
  {
    q: "Do you handle DHA gate registration for the truck?",
    a: "Yes — this is our standard pre-move service for every DHA Karachi move. We register the truck vehicle number, driver CNIC and crew IDs with your phase's security management 48–72 hours before move day. Your truck enters DHA without any checkpoint delay."
  },
  {
    q: "Which DHA phases do you cover?",
    a: "All of them — DHA Phase 1, Phase 2, Phase 2 Extension, Phase 3, Phase 4, Phase 5, Phase 6, Phase 7, Phase 8 and all DHA commercial zones. We also cover adjacent areas: Bahria Town Karachi, Clifton, Defence View and Korangi."
  },
  {
    q: "Do you handle high-value items like antiques and marble tables?",
    a: "Yes — we provide custom wooden crating for antiques, artwork and fragile high-value items. Marble surfaces get foam edge guards and corner protectors. Chandeliers are fully disassembled and individually packed. All assessed during the free home survey."
  },
  {
    q: "Is my household contents insured during a DHA move?",
    a: "Yes — every move is fully insured at replacement value. In the rare event of any damage, complete compensation is provided at no extra charge. Written insurance documentation available on request."
  },
  {
    q: "Can you do international moving from DHA Karachi?",
    a: "Yes — door-to-door from your DHA address to UAE, UK, Canada, Saudi Arabia, Australia and 100+ countries. Sea freight from Karachi Port and air freight from Jinnah International Airport. Full customs documentation handled in-house."
  },
  {
    q: "Is same-day moving available in DHA Karachi?",
    a: "Yes — subject to availability and same-day gate registration approval. Call before 10 AM on 0300-9130211 with your phase, address and room count. We confirm within 30 minutes."
  },
  {
    q: "Do you move offices in DHA commercial areas?",
    a: "Yes — all DHA commercial zones covered including Khayaban-e-Ittehad, Bukhari Commercial, Badar Commercial, Rahat Commercial, DHA Tecno City and Phase 8 commercial. Weekend execution available for zero business downtime."
  }
];

// Schema builders
function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Best International Movers & Logistics - DHA Karachi Branch",
    "image": "https://bestintlmovers.com/images/homeshifting.png",
    "@id": "https://bestintlmovers.com/dha-karachi-movers#localbusiness",
    "url": "https://bestintlmovers.com/dha-karachi-movers",
    "telephone": "+923009130211",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DHA Karachi Phases 1-8",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75500",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8322,
      "longitude": 67.0683
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/bestintlmovers",
      "https://www.instagram.com/bestintlmovers"
    ]
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };
}

const DhaKarachiMovers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const seoConfig = {
    title: "Movers in DHA Karachi 2026 | Call 0300-9130211",
    description: "Best movers and packers in DHA Karachi 2026. All phases covered: DHA 1–8. House shifting, office relocation, international moving. Free survey. Call 0300-9130211.",
    keywords: "movers in DHA Karachi, packers and movers DHA Karachi, movers and packers DHA Karachi, house shifting DHA Karachi, office shifting DHA Karachi, international moving Karachi, best movers Karachi 2026, DHA Karachi gate pass, DHA Karachi truck permission",
    canonicalUrl: "https://bestintlmovers.com/dha-karachi-movers/"
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* SEO Configuration */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/dha-karachi-movers"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildLocalBusinessSchema(), buildFAQSchema()]}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-5xl mx-auto text-center"
          >
            {/* Trust Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-gold/10 backdrop-blur-md rounded-full px-4 md:px-6 py-2 mb-6 border border-gold/30">
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">DHA 1-8 Phases Covered</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">Fully Insured</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">Free Home Survey</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Best Movers and Packers in DHA Karachi 2026 <br className="hidden md:inline" />
              <span className="text-gold font-bold">— All Phases Covered, Fully Insured, Free Home Survey</span>
            </h1>

            {/* Publication details */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-white/60 text-xs md:text-sm mb-8">
              <span>Published: <strong>June 5, 2026</strong></span>
              <span className="hidden sm:inline">|</span>
              <span>Updated: <strong>June 5, 2026</strong></span>
              <span className="hidden sm:inline">|</span>
              <span className="text-gold">Best International Movers & Logistics</span>
            </div>
            
            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src="/images/homeshifting.png" 
                alt="Movers and Packers in DHA Karachi 2026" 
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              {seoConfig.description}
            </p>
            
            {/* Contact Details / CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:03009130211" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-xl font-bold hover:bg-gold/90 transition-all hover:scale-[1.02] shadow-lg shadow-gold/20"
              >
                <Phone size={20} />
                Call: 0300-9130211
              </a>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-navy-dark transition-all hover:scale-[1.02]"
              >
                <MessageCircle size={20} className="text-green-400" />
                WhatsApp: 0300-9130211
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Introduction — Why DHA Karachi Needs Specialist Movers in 2026
              </h2>
              <p>
                DHA Karachi is not just another Karachi neighbourhood. It is Pakistan's largest and most prestigious Defence Housing Authority — stretching across 8 phases, covering thousands of bungalows, street apartments, high-rise towers, commercial plazas and gated community zones. With an estimated 500,000+ residents across all phases, DHA Karachi generates more home shifting, office relocation and international moving demand than any other single locality in the country.
              </p>
              <p>
                Yet moving in DHA Karachi is not straightforward. Every phase has its own security protocols, truck entry timings, gate registration requirements and access procedures. DHA Phase 1 has narrow original-scheme lanes that large trucks cannot navigate without coordination. DHA Phase 6 has strict vehicle entry rules at checkpoints that change seasonally. DHA Phase 8 has ongoing construction zones that affect truck routing. Bahria Town Karachi — adjacent to DHA — has its own entirely separate gate protocols. None of this is intuitive for a mover who does not work in DHA regularly.
              </p>
              <p>
                <strong>Best International Movers & Logistics</strong> has been the preferred moving partner for DHA Karachi residents since 2009. We have completed hundreds of moves across every phase of DHA Karachi — we know every gate procedure, every checkpoint requirement, every building access rule and every phase-specific challenge. When you hire us for your DHA Karachi move, you are hiring a team that has already solved every problem your move will present before the truck even arrives at your door.
              </p>
              <p>
                This complete 2026 guide covers everything you need to know about moving in DHA Karachi: charges per phase, the moving process, phase-by-phase access knowledge, what to expect, how to prepare and why the right mover makes all the difference in DHA's managed community environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Pricing Guide */}
      <section className="py-16 bg-navy-light/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  1. Movers and Packers Charges in DHA Karachi — 2026 Price Guide
                </h2>
                <p className="text-muted-foreground mt-2">
                  DHA Karachi home shifting costs depend on your phase, property type, number of rooms, and distance.
                </p>
              </div>

              {/* Price Table */}
              <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy/80 text-white border-b border-border/25">
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Move Type</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Price Range (PKR)</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">What Is Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Studio / 1 Bedroom (DHA)</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 12,000 – 25,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Packing + Loading + Transport + Unloading</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">2 Bedroom Street Apartment</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 22,000 – 40,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Packing + Loading + Transport + Unloading</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">3 Bedroom Bungalow</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 35,000 – 60,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Full Pack + Dismantling + Transport + Reassembly</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">4 Bedroom Bungalow</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 55,000 – 85,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Full Service + Reassembly + Debris Removal</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">5+ Bedroom Villa (DHA)</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 75,000 – 120,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Full Service + Reassembly + Debris Removal</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors bg-gold/5">
                        <td className="p-4 font-semibold text-foreground">Within DHA (same phase)</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 12,000 – 35,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Short distance — same-day completion</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">DHA to Clifton</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 15,000 – 45,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Cross-neighbourhood — all included</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">DHA to Gulshan / PECHS</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 18,000 – 55,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Full city cross — all included</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">DHA to Islamabad</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 40,000 – 85,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Intercity covered GPS truck</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">DHA to Lahore</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 35,000 – 75,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Intercity covered GPS truck</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors bg-navy-light/10">
                        <td className="p-4 font-semibold text-foreground">Office Shifting DHA</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 25,000 – 120,000+</td>
                        <td className="p-4 text-muted-foreground text-sm">IT-safe + weekend execution available</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">International (Sea Freight)</td>
                        <td className="p-4 text-gold font-bold font-mono">From USD 450</td>
                        <td className="p-4 text-muted-foreground text-sm">Door-to-door + customs clearance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Price Note Card */}
              <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-xl p-5 flex gap-4 items-start">
                <Info className="text-gold flex-shrink-0 mt-0.5" size={20} />
                <p className="text-foreground text-sm md:text-base leading-relaxed">
                  Exact price confirmed after free home survey at your DHA address. No hidden charges — ever. <a href="tel:03009130211" className="text-gold font-bold hover:underline">Call 0300-9130211</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Phase-by-Phase Moving Guide */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  2. DHA Karachi — Phase by Phase Moving Guide 2026
                </h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">
                  This is what separates Best International Movers from every competitor: we know DHA Karachi phase by phase.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    phase: "DHA Phase 1 — Movers and Packers",
                    desc: "DHA Phase 1 is the oldest and most established part of DHA Karachi. Original scheme lanes in Phase 1 are narrower than later phases — large trucks must be carefully routed through specific entry lanes. Many Phase 1 bungalows have mature garden trees that affect truck parking. Gate registration at Phase 1 checkpoints requires driver CNIC and vehicle registration plate submission in advance. Our team handles all Phase 1 gate coordination as standard. Phase 1 bungalows are typically single-storey, which makes furniture loading easier — but older construction means tighter doorways for large wardrobes and king-size bed frames."
                  },
                  {
                    phase: "DHA Phase 2 — Movers and Packers",
                    desc: "Phase 2 is among DHA Karachi's most desirable residential zones. Wide roads, good truck access and reliable security checkpoint procedures make Phase 2 one of the smoother DHA phases for moving logistics. Phase 2 Ext (Extension) has additional checkpoint procedures — our team registers vehicle details with Phase 2 Ext security management 48 hours before every move in this zone."
                  },
                  {
                    phase: "DHA Phase 3 — Movers and Packers",
                    desc: "DHA Phase 3 includes a mix of residential bungalows and commercial areas along Khayaban-e-Ittehad. Commercial area truck access during business hours is restricted — we plan Phase 3 commercial moves for early morning or evening windows. Residential Phase 3 bungalows have good access with wide roads. Phase 3 is particularly popular for cross-phase moves — many families move from Phase 3 to Phase 6 or Phase 8 as families grow. Our team handles this regularly."
                  },
                  {
                    phase: "DHA Phase 4 — Movers and Packers",
                    desc: "Phase 4 includes established high-value bungalows and some of Karachi's most premium residential addresses. Truck access is well-managed, security is professional and gate procedures are consistent. Phase 4 moves often involve higher-value household goods — antiques, artwork, imported furniture, chandeliers — that require custom wooden crating. Our packing team is experienced with luxury item handling in Phase 4."
                  },
                  {
                    phase: "DHA Phase 5 — Movers and Packers",
                    desc: "DHA Phase 5 is one of the most densely populated phases with a significant apartment and street apartment stock alongside bungalows. Street apartments in Phase 5 often have no service lift — stair carry for upper floors is standard. Our team brings extra crew for Phase 5 apartment moves to ensure efficient stair carry without rushing or dropping. Khayaban-e-Badar and Khayaban-e-Rahat in Phase 5 have good main road truck access."
                  },
                  {
                    phase: "DHA Phase 6 — Movers and Packers",
                    desc: "DHA Phase 6 is Karachi's most modern and rapidly growing DHA phase. Wide roads, modern construction and professional gate management make Phase 6 one of the best phases for moving logistics. Phase 6 has a growing high-rise apartment sector alongside traditional bungalows — our elevator coordination protocols apply for all Phase 6 tower moves. Phase 6 is currently one of our highest-volume moving areas in DHA Karachi, with families moving in from across the city to new properties."
                  },
                  {
                    phase: "DHA Phase 7 — Movers and Packers",
                    desc: "Phase 7 is developing rapidly in 2026 with significant new construction activity. Truck routing through Phase 7 requires awareness of active construction zones. Our team plans Phase 7 move routes during the pre-move survey to avoid construction delays on move day. Phase 7 is attracting many first-time DHA buyers moving from other Karachi areas — cross-city moves from Gulshan, North Nazimabad and PECHS to Phase 7 are among our most frequent DHA routes."
                  },
                  {
                    phase: "DHA Phase 8 — Movers and Packers",
                    desc: "DHA Phase 8 is the newest and most expansive phase. In 2026, Phase 8 still has active development across multiple sub-sectors (Al-Murtaza, Ext, Ittehad, Creek Vista). Road quality varies by sub-sector. Gate procedures at Phase 8 are among DHA Karachi's most thorough — advance vehicle registration, crew ID submission and move-day confirmation with Phase 8 security management are all required. Our team manages Phase 8 security coordination as a standard pre-move task."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border shadow-sm flex flex-col justify-between hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                        {item.phase}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: step by step process */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  3. Our DHA Karachi Moving Process — Step by Step
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Our DHA Karachi moving process is fully integrated with our complete <Link to="/packers-and-movers-karachi" className="text-gold font-semibold hover:underline">packers and movers service in Karachi</Link> — every DHA move follows the same 8-step professional process that has delivered 5,000+ damage-free relocations since 2009.
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="space-y-6">
                {[
                  {
                    title: "Step 1 — Free Home Survey at Your DHA Address (Within 24 Hours)",
                    desc: "Call or WhatsApp 0300-9130211. Our DHA Karachi surveyor visits within 24 hours — inspects every room, photographs fragile and high-value items, checks gate access procedures for your specific phase, confirms parking availability outside your bungalow or apartment, and produces a detailed written quotation. Free, no obligation."
                  },
                  {
                    title: "Step 2 — DHA Security Pre-Coordination",
                    desc: "Once your move is booked, our coordinator contacts your phase's gate security management to register our truck's vehicle registration, driver CNIC and crew ID list. This is done 48–72 hours before move day — so your truck enters DHA without any checkpoint delay on the day."
                  },
                  {
                    title: "Step 3 — Written Quote and Date Lock",
                    desc: "You receive a written quote with crew count, truck size, start time, packing scope and final price. Confirmed = locked. No changes on move day."
                  },
                  {
                    title: "Step 4 — Professional Packing at Your DHA Home",
                    desc: "Trained packers arrive with all materials: double-wall export cartons, industrial bubble wrap, foam padding, furniture blankets, wardrobe boxes, stretch wrap and wooden crates for fragile or high-value items. Packing is systematic — room by room, every box labelled by room and content. Furniture dismantled where needed. Hardware in labelled zip-lock bags taped to each piece."
                  },
                  {
                    title: "Step 5 — Safe Loading — DHA-Specific Sequence",
                    desc: "Loading follows the floor plan of your new DHA address — what goes in first at the new place loads last at the old one. Floor runners and corner guards protect your DHA home throughout. Tie-down straps secure all items in the truck. No rushing, no dragging, no improvisation."
                  },
                  {
                    title: "Step 6 — GPS-Tracked Transport Through DHA",
                    desc: "Your truck moves through DHA with GPS tracking active. WhatsApp updates at departure, gate entry at new phase and arrival. If your move is cross-phase — say Phase 4 to Phase 8 — our driver navigates the most efficient DHA route and our coordinator manages gate entry at the destination phase simultaneously."
                  },
                  {
                    title: "Step 7 — Delivery, Placement and Reassembly",
                    desc: "At your new DHA address, every item placed exactly where you direct. Furniture reassembled — beds, wardrobes, dining tables, TV units. Floor runners protect your new home throughout unloading."
                  },
                  {
                    title: "Step 8 — Unpacking, Cleanup and Follow-Up",
                    desc: "All boxes unpacked if included in your scope. Every carton, bubble wrap and foam padding removed. Follow-up call within 24 hours to confirm everything arrived correctly."
                  }
                ].map((s, index) => (
                  <div key={index} className="flex gap-4 md:gap-6 items-start bg-background p-6 rounded-2xl border border-border shadow-md hover:border-gold/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-bold text-lg border border-gold/20 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: 6 Challenges Only Specialists Solve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  4. What Makes DHA Karachi Moving Different — 6 Challenges Only Specialists Solve
                </h2>
                <p className="text-muted-foreground mt-2">
                  DHA Karachi requires deep local expertise. Here are the hurdles we handle routinely.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "DHA Gate Security Registration",
                    desc: "Every DHA phase has security checkpoints. Trucks without pre-registered driver CNIC and vehicle plate are turned away — no exceptions. Families who book informal movers regularly face their truck being refused entry. Our team handles gate registration as standard."
                  },
                  {
                    title: "Phase-Specific Truck Entry Windows",
                    desc: "Several DHA phases restrict truck entry to specific hours — typically early morning before 8 AM or after 4 PM to avoid resident traffic. We schedule all DHA moves around these entry windows."
                  },
                  {
                    title: "Narrow Lanes in Older Phases",
                    desc: "DHA Phase 1, Phase 2 and parts of Phase 3 have older original-scheme lane widths that do not accommodate large trucks. Our fleet includes medium-size trucks narrow enough to navigate older DHA lane widths safely."
                  },
                  {
                    title: "High-Value Household Contents",
                    desc: "DHA Karachi residents typically have higher-value goods: imported furniture, antiques, artwork, large chandeliers, marble dining tables, and high-end electronics. These require custom wooden crating and special carrying gear."
                  },
                  {
                    title: "Lift Availability in Apartment Towers",
                    desc: "DHA's growing tower stock has service lift booking requirements. Buildings manage elevator access carefully to avoid resident disruption. We coordinate service lift bookings with building management."
                  },
                  {
                    title: "Same-Day Approval for Urgent Moves",
                    desc: "For same-day DHA moves, gate security registration needs to happen the same morning. Our team has established relationships with security management offices for swift approvals."
                  }
                ].map((challenge, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border flex flex-col justify-between hover:border-gold/30 transition-all duration-300">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: House Shifting — What We Pack and How */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border pb-4">
                <Package className="text-gold flex-shrink-0" size={36} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    5. DHA Karachi House Shifting — What We Pack and How
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Specialized packing procedures for premium items to prevent damage.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    title: "Imported and High-Value Electronics",
                    desc: "Flat-screen TVs 55 inches and above travel in custom TV cartons with internal foam moulding. Home theatre systems are packed component by component in individual padded cartons. Devices are photographed before disconnection for exact setup."
                  },
                  {
                    title: "Antiques, Artwork and Decorative Items",
                    desc: "DHA Karachi homes frequently contain antique furniture, original artworks and imported decorative pieces. Custom wooden crates are built for items over a certain size or value. Artwork is wrapped in acid-free tissue before foam padding."
                  },
                  {
                    title: "Marble Dining Tables and Stone Surfaces",
                    desc: "Marble dining tables, granite countertops, and stone decorative items require special care. We wrap all marble surfaces in foam edge guards before furniture blankets. They travel on non-slip mats in the truck with no weight above them."
                  },
                  {
                    title: "Chandeliers and Ceiling Fixtures",
                    desc: "Large chandeliers require disassembly before moving. Our team disassembles, bags all fittings and crystals individually, packs in custom cartons with foam padding, and reassembles at the new address. (We do not move installed chandeliers)."
                  },
                  {
                    title: "Kitchen — Appliances and Fragiles",
                    desc: "Kitchen contents typically include high-value imported appliances (Bosch, Siemens, LG, Samsung) and quality crockery. Appliances are cleaned, defrosted (fridges minimum 24 hours before move), and packed in padded cartons. Glasses packed upright."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-5 border border-border shadow-sm hover:border-gold/30 transition-all duration-300">
                    <h3 className="font-bold text-foreground text-base md:text-lg mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold"></span>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: DHA Karachi to International */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  6. DHA Karachi to International — When Your Move Goes Abroad
                </h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">
                  For DHA Karachi families relocating internationally — to Dubai, London, Toronto, Riyadh or any worldwide destination — our <Link to="/cargo-service-karachi" className="text-gold font-semibold hover:underline">international moving service from Karachi Port</Link> provides seamless door-to-door relocation from your DHA bungalow to your new home abroad.
                </p>
                <p className="text-muted-foreground text-sm md:text-base mt-2">
                  DHA Karachi to international is a two-phase process. Phase 1: professional packing at your DHA address using export-standard materials rated for long ocean voyages. Phase 2: sea freight container booking from Karachi Port, export customs clearance, ocean transit, destination import customs and last-mile delivery. We manage both phases under one roof.
                </p>
              </div>

              {/* International Shipping Table */}
              <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white border-b border-border/25">
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Destination</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Sea Freight Transit</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Air Freight</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">From (USD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 text-sm md:text-base">
                      {[
                        { dest: "Dubai, UAE", sea: "10–15 days", air: "2–3 days", price: "USD 450" },
                        { dest: "Abu Dhabi / Sharjah", sea: "10–15 days", air: "2–3 days", price: "USD 450" },
                        { dest: "Riyadh, Saudi Arabia", sea: "12–18 days", air: "2–4 days", price: "USD 380" },
                        { dest: "London, UK", sea: "22–28 days", air: "3–5 days", price: "USD 850" },
                        { dest: "Toronto, Canada", sea: "35–42 days", air: "4–6 days", price: "USD 1,100" },
                        { dest: "Sydney, Australia", sea: "18–25 days", air: "5–7 days", price: "USD 950" },
                        { dest: "Doha, Qatar", sea: "12–16 days", air: "2–3 days", price: "USD 400" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-light/10 transition-colors">
                          <td className="p-4 font-semibold text-foreground">{row.dest}</td>
                          <td className="p-4 text-muted-foreground">{row.sea}</td>
                          <td className="p-4 text-muted-foreground">{row.air}</td>
                          <td className="p-4 text-gold font-bold font-mono">From {row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Office Shifting */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border pb-4">
                <Building className="text-gold flex-shrink-0" size={36} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    7. Office Shifting in DHA Karachi — Corporate Relocation 2026
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Zero-downtime corporate moves across DHA's commercial strip lanes.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Our <Link to="/office-relocation-karachi" className="text-gold font-semibold hover:underline">office relocation service in Karachi</Link> applies the same zero-downtime corporate methodology to DHA office moves — weekend execution, IT-safe packing, colour-coded floor plans, dedicated project manager and go-live testing before we leave your new DHA office.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">DHA Commercial Zones We Cover:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Khayaban-e-Ittehad commercial strip (Phase 3 & 5)",
                    "Khayaban-e-Shahbaz (Phase 5 & 6)",
                    "Bukhari Commercial (Phase 6)",
                    "DHA Phase 6 commercial boulevard",
                    "Badar Commercial (Phase 5)",
                    "Rahat Commercial (Phase 6)",
                    "Sehar Commercial (Phase 7)",
                    "Creek Vista commercial (Phase 8)",
                    "DHA Tecno City (Phase 2 Ext)"
                  ].map((zone, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border shadow-sm text-sm font-semibold">
                      <MapPin className="text-gold flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{zone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed bg-background p-4 rounded-xl border border-border/50">
                For DHA office moves, we add one critical step to our standard process: DHA commercial vehicle entry coordination. Commercial truck entry in DHA's business zones has its own set of timing and permit requirements separate from residential gate procedures. Our team manages all of this — you focus on your business, we handle the move.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Shifting Checklist */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  8. DHA Karachi Moving Checklist — 8 Weeks to Move Day
                </h2>
                <p className="text-muted-foreground mt-2">
                  Follow this simple week-by-week checklist to ensure everything goes smoothly.
                </p>
              </div>

              {/* Checklist Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { time: "8 Weeks Before", action: "Book your mover — DHA move dates fill early. Get free survey and written quote." },
                  { time: "6 Weeks Before", action: "Declutter — donate or sell items you will not move. Less volume = lower cost." },
                  { time: "4 Weeks Before", action: "Notify PTCL/ISP for internet transfer. Sort important documents for personal carry." },
                  { time: "3 Weeks Before", action: "Confirm DHA gate registration details with your moving company for both addresses." },
                  { time: "2 Weeks Before", action: "Pre-pack non-essential items. Defrost second fridge. Dispose of hazardous items." },
                  { time: "1 Week Before", action: "Confirm move day crew count, truck size and start time with coordinator." },
                  { time: "48 Hours Before", action: "Mover submits vehicle/crew details to DHA gate security for both phases." },
                  { time: "Move Day", action: "Relax — our team handles everything from packing to placement." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-navy-light/10 border border-border p-5 rounded-xl shadow-sm hover:border-gold/20 transition-all flex gap-4">
                    <span className="text-gold font-bold text-sm uppercase tracking-wider shrink-0 mt-0.5 w-28">{item.time}</span>
                    <p className="text-muted-foreground text-sm md:text-base">{item.action}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Why Choose Us */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  9. Why DHA Karachi Residents Choose Best International Movers — 2026
                </h2>
                <p className="text-muted-foreground mt-2">
                  DHA families have high standards. Here is how we deliver value on every move.
                </p>
              </div>

              {/* Value Table */}
              <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white border-b border-border/25">
                        <th className="p-4 font-display font-semibold text-sm md:text-base w-1/3">What We Deliver</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base w-2/3">Why It Matters in DHA Karachi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 text-sm md:text-base">
                      {[
                        { del: "DHA Gate Pre-Registration", mat: "Your truck enters without delay — every phase, every time" },
                        { del: "Free Home Survey", mat: "Written quote — no phone estimates, no move-day surprises" },
                        { del: "Phase-by-Phase Knowledge", mat: "We know DHA Phase 1 to Phase 8 — protocols, routes, access" },
                        { del: "High-Value Item Specialists", mat: "Antiques, marble, chandeliers, imported electronics — all handled" },
                        { del: "Custom Wooden Crating", mat: "Built on-site for your most fragile or valuable DHA items" },
                        { del: "Background-Verified Staff", mat: "CNIC-checked, uniformed professionals in your DHA home" },
                        { del: "Full Transit Insurance", mat: "Every DHA move covered at full replacement value" },
                        { del: "No Hidden Charges", mat: "Written quote = final invoice — not one rupee more" },
                        { del: "Weekend Service", mat: "Available Friday–Sunday for urgent or preferred timing" },
                        { del: "WhatsApp Updates", mat: "Gate entry confirmation, loading done, en route, arrived" },
                        { del: "Same-Day DHA Moves", mat: "Subject to availability — call before 10 AM" },
                        { del: "International Connection", mat: "DHA to Dubai, London, Toronto — all handled in-house" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-light/20 transition-colors">
                          <td className="p-4 font-bold text-foreground">{row.del}</td>
                          <td className="p-4 text-muted-foreground">{row.mat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Common Mistakes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  10. Common DHA Karachi Moving Mistakes — And How We Prevent Them
                </h2>
                <p className="text-muted-foreground mt-2">
                  Avoid the major pitfalls that set back relocations in Defence Housing Authority.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Mistake 1 — Hiring a Mover Who Does Not Know DHA Gate Procedures",
                    desc: "The most expensive DHA Karachi moving mistake: your truck gets turned away at the checkpoint because the mover did not pre-register the vehicle. Your crew is paid and standing by. Your landlord is waiting for keys. Your new home is ready. And your truck is outside the gate. This costs hours — sometimes the entire moving day. Our gate pre-registration process eliminates this completely."
                  },
                  {
                    title: "Mistake 2 — Underestimating Volume in DHA Bungalows",
                    desc: "DHA bungalows are larger than standard Karachi apartments. A 4-bedroom DHA bungalow with a full basement often contains significantly more volume than an equivalent-sized apartment elsewhere. Movers who quote for a \"4-bedroom\" without surveying the property consistently underquote — and then add charges on move day when they see the actual volume. Our free home survey eliminates this."
                  },
                  {
                    title: "Mistake 3 — Not Planning for Construction in Newer Phases",
                    desc: "DHA Phase 7 and Phase 8 have active construction in 2026. Roads that are clear today may have construction equipment blocking them on move day. Our pre-move route planning identifies alternative truck routes to your DHA address before move day — so construction never stops your move."
                  },
                  {
                    title: "Mistake 4 — Using Generic Packing for High-Value DHA Contents",
                    desc: "A standard mover packs a marble dining table the same way they pack a plastic garden table — a single layer of bubble wrap and a furniture blanket. A marble table needs foam edge guards, corner protectors, a padded furniture blanket and careful positioning in the truck with no weight above it. In DHA Karachi, where high-value household contents are the norm, specialist packing is not optional."
                  },
                  {
                    title: "Mistake 5 — Scheduling Month-End DHA Moves Without Advance Booking",
                    desc: "Month-end in DHA Karachi — the 28th through 31st of every month — sees gate traffic spike dramatically as rental cycles end and property handovers happen. Gate security is busier, entry queues are longer and truck windows may be restricted. Book your DHA move at least 10 days in advance. For month-end dates, 2–3 weeks is recommended."
                  }
                ].map((m, idx) => (
                  <div key={idx} className="bg-navy-light/10 border border-border p-6 rounded-2xl flex gap-4 items-start shadow-sm hover:border-gold/25 transition-all">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-foreground text-base md:text-lg mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 11: Temporary Storage */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border pb-4">
                <ShieldCheck className="text-gold flex-shrink-0" size={36} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    11. DHA Karachi Storage — When You Need Temporary Space
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Secure climate-controlled storage solutions in Karachi.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Best International Movers offers secure storage solutions for DHA Karachi residents between homes, during renovation or when international shipments are delayed:
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                {[
                  { title: "Climate-controlled warehouse", desc: "Humidity and temperature managed for wooden furniture, electronics and textiles." },
                  { title: "24/7 CCTV monitoring", desc: "Complete security throughout the storage period." },
                  { title: "Full transit insurance", desc: "Your DHA belongings fully covered in storage." },
                  { title: "Flexible terms", desc: "Weekly, monthly or long-term options." },
                  { title: "No double-packing", desc: "Goods packed for your DHA move stay in the same cartons in storage." },
                  { title: "Delivery coordination", desc: "When your new DHA address is ready, we deliver and set up." }
                ].map((point, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-5 border border-border shadow-sm hover:border-gold/30 transition-all duration-300">
                    <h3 className="font-bold text-foreground mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 12: Client Reviews */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  12. DHA Karachi Client Reviews — June 2026
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  Trusted by families and corporations across Defence Housing Authority.
                </p>
              </div>

              {/* Reviews Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Nadia Hussain",
                    route: "DHA Phase 4 → Phase 8",
                    date: "May 2026",
                    review: "Moved from DHA Phase 4 to Phase 8 in May 2026. Best International Movers handled the gate registrations at both phases, packed our 5-bedroom bungalow including 3 antique pieces and a large chandelier, and had everything set up at Phase 8 the same day. Not one item damaged. These are the real specialists for DHA Karachi moving."
                  },
                  {
                    name: "Hassan Rauf",
                    route: "DHA Phase 3 → Phase 6 Office",
                    date: "April 2026",
                    review: "Office shifting from Khayaban-e-Ittehad Phase 3 to Bukhari Commercial Phase 6 over a weekend. 20 workstations, server and all office furniture moved Friday evening, fully operational Monday morning. DHA commercial vehicle permits handled by their coordinator — I did not have to do anything."
                  },
                  {
                    name: "Zara Ahmed",
                    route: "DHA Phase 6 → Dubai, UAE",
                    date: "March 2026",
                    review: "Moved from DHA Phase 6 Karachi to Dubai for my husband's job. Best International Movers packed our 3-bedroom home in export crates, handled Karachi Port customs and our container arrived in Jebel Ali in 13 days. Every item perfect. Extraordinary service for DHA to international move."
                  },
                  {
                    name: "Bilal Chaudhry",
                    route: "DHA Phase 5 → Phase 2",
                    date: "February 2026",
                    review: "Called for same-day DHA Phase 5 shift at 9 AM. They confirmed by 9:30 AM, coordinated Phase 5 gate registration by 10 AM, team arrived by 11 AM. 2-bedroom apartment done by 4 PM. Price exactly as quoted. Unbelievable how smooth it was."
                  }
                ].map((rev, idx) => (
                  <div key={idx} className="bg-navy-light/10 border border-border p-6 rounded-2xl shadow-md flex flex-col justify-between hover:border-gold/30 transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-gold fill-gold" size={16} />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        "{rev.review}"
                      </p>
                    </div>
                    <div className="border-t border-border/40 mt-4 pt-3 flex justify-between items-center text-xs md:text-sm">
                      <div>
                        <strong className="text-foreground block">{rev.name}</strong>
                        <span className="text-muted-foreground text-xs">{rev.route}</span>
                      </div>
                      <span className="text-gold font-semibold">{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 13: FAQ Section (Accordion layout) */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  13. Frequently Asked Questions — DHA Karachi Movers 2026
                </h2>
                <p className="text-muted-foreground mt-2">
                  Common questions from DHA residents regarding relocations.
                </p>
              </div>

              {/* FAQ Accordions */}
              <div className="space-y-4">
                {faqsData.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className="bg-background rounded-2xl border border-border overflow-hidden hover:border-gold/30 transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-5 text-left font-display font-bold text-foreground text-base md:text-lg flex justify-between items-center gap-4 bg-navy-light/5 hover:bg-navy-light/10 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown 
                          className={`text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                          size={20} 
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-5 border-t border-border/40 text-muted-foreground text-sm md:text-base leading-relaxed bg-background">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background text-center border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-3xl p-8 md:p-12 border border-gold/20 space-y-6"
            >
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 inline-block">
                Start Your Move
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Book Your Free DHA Karachi Home Survey — June 2026
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Contact our customer support team to coordinate your physical inspection. Get an itemised written quote. No hidden fees. Fully insured. DHA gate permissions handled.
              </p>

              <div className="grid gap-4 max-w-md mx-auto text-left py-4 border-y border-border/40 my-6 text-sm md:text-base">
                <div className="flex gap-3 items-center text-foreground">
                  <Phone className="text-gold" size={18} />
                  <span>Call / WhatsApp: <strong>0300-9130211</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <Mail className="text-gold" size={18} />
                  <span>Email: <strong>info@bestintlmovers.com</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <Globe className="text-gold" size={18} />
                  <span>Website: <strong>bestintlmovers.com/dha-karachi-movers</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <MapPin className="text-gold" size={18} />
                  <span>Serving: <strong>DHA Phase 1, 2, 3, 4, 5, 6, 7, 8 — All Zones</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <Clock className="text-gold" size={18} />
                  <span>Monday – Saturday | 8:00 AM – 8:00 PM <br className="sm:hidden" />(Sunday Emergency Service Available)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:03009130211" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3.5 rounded-xl font-bold hover:bg-gold/90 transition-all hover:scale-[1.02] shadow-lg shadow-gold/20"
                >
                  <Phone size={18} />
                  Call 0300-9130211
                </a>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3.5 rounded-xl font-bold hover:bg-gold hover:text-navy-dark transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <footer className="py-8 bg-navy text-white/60 border-t border-white/5 text-center text-xs md:text-sm">
        <div className="container mx-auto px-4">
          <p>© June 2026 — Best International Movers & Logistics | DHA Karachi's Most Trusted Moving Company | bestintlmovers.com</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default DhaKarachiMovers;
