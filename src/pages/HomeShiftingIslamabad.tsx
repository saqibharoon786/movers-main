import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Home, Phone, Mail, Globe, MapPin, CheckCircle2, AlertTriangle, 
  ShieldCheck, Clock, Award, Users, Calendar, FileText, ArrowRight, 
  Building, Truck, Star, Sparkles, MessageCircle, Heart, ChevronDown,
  Info, Shield, Package, Trash2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

// FAQs Data for schemas and display
const faqsData = [
  {
    q: "What does home shifting cost in Islamabad in 2026?",
    a: "Studio/1-bedroom: PKR 15,000–25,000. 2-bedroom: PKR 25,000–40,000. 3-bedroom: PKR 35,000–55,000. 4-bedroom: PKR 50,000–75,000. 5+ bedroom villa: PKR 65,000–95,000. Exact price confirmed after free home survey. Call 0300-9130211."
  },
  {
    q: "Is same-day home shifting available in Islamabad?",
    a: "Yes — book before 10 AM by WhatsApp on 0300-9130211. Send your address, room count and key items. We confirm availability within 30 minutes. Best for studio to 2-bedroom homes."
  },
  {
    q: "Do you cover DHA, Bahria Enclave and Diplomatic Enclave?",
    a: "Yes — all of these plus every F, G, E and I sector, Park Enclave, Naval Anchorage, Gulberg Greens, PWD Housing, Eighteen Islamabad and all other Islamabad areas."
  },
  {
    q: "Do you dismantle and reassemble furniture?",
    a: "Yes — beds, wardrobes, dining tables, TV units, bookshelves and modular furniture all dismantled before loading and fully reassembled at your new Islamabad address. Included in the quote at no extra charge."
  },
  {
    q: "How long does home shifting take in Islamabad?",
    a: "1-2 bedroom: 4–6 hours. 3-bedroom house: 7–10 hours. 4–5 bedroom villa: 1–2 days. High-rise apartments add 1–2 hours for lift coordination depending on floor and access."
  },
  {
    q: "Is my furniture insured during home shifting?",
    a: "Yes — every home shift is fully insured against damage or loss. Complete compensation in the rare event of any damage. Written insurance documentation available on request."
  },
  {
    q: "Do you offer storage if my new home is not ready?",
    a: "Yes — climate-controlled, CCTV-monitored Islamabad storage for short-term (1 week) and long-term (months). Fully insured. Flexible delivery when your new home is ready."
  },
  {
    q: "Can you do intercity home shifting from Islamabad?",
    a: "Yes — Islamabad to Lahore, Karachi, Peshawar, Rawalpindi, Multan, Quetta and all cities. GPS-tracked covered trucks. Call 0300-9130211 for intercity pricing."
  }
];

// Schema builders
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
        "name": "Home Shifting Islamabad – Safe, Professional & Affordable Relocation",
        "serviceType": "Home Shifting Services",
        "description": "Professional home shifting in Islamabad 2026. Studio from PKR 15,000. All sectors: F-7, G-11, DHA, Bahria. Free home survey. Call 0300-9130211.",
        "url": "https://bestintlmovers.com/home-shifting-islamabad",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "City", "name": "Islamabad" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Home Shifting Islamabad Catalog",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Studio & Apartment Shifting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House & Villa Relocation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Same-Day Shifting Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Shifting from Islamabad" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Shifting Storage Facility" } }
          ]
        }
      }
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
    "headline": "Best Home Shifting Service in Islamabad 2026 — Safe, Professional & Affordable",
    "description": "Professional home shifting in Islamabad 2026. Studio from PKR 15,000. All sectors: F-7, G-11, DHA, Bahria. Free home survey. Call 0300-9130211.",
    "author": { "@type": "Organization", "name": "Best International Movers & Logistics" },
    "publisher": {
      "@type": "Organization",
      "name": "Best International Movers & Logistics",
      "logo": { "@type": "ImageObject", "url": "https://bestintlmovers.com/logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://bestintlmovers.com/home-shifting-islamabad" },
    "datePublished": "2026-06-05",
    "dateModified": "2026-06-05"
  };
}

const HomeShiftingIslamabad = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const seoConfig = {
    title: "Home Shifting Islamabad 2026 | Call 0300-9130211",
    description: "Professional home shifting in Islamabad 2026. Studio from PKR 15,000. All sectors: F-7, G-11, DHA, Bahria. Free home survey. Call 0300-9130211.",
    keywords: "home shifting in islamabad, home shifting islamabad 2026, packers and movers islamabad, house shifting islamabad, best movers islamabad, home shifting rates islamabad, movers packers DHA bahria islamabad, intercity home shifting pakistan",
    canonicalUrl: "https://bestintlmovers.com/home-shifting-islamabad"
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* SEO Configuration */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/home-shifting-islamabad"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildArticleSchema(), buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
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
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">15+ Years Experience</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">5,000+ Successful Moves</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">Fully Insured</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Best Home Shifting Service in Islamabad 2026 <br className="hidden md:inline" />
              <span className="text-gold font-bold">— Safe, Professional & Affordable</span>
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
                alt="Safe & Professional Home Shifting in Islamabad 2026" 
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Reliable residential relocation across all sectors of the capital. Professional packing, dismantling, secure transport, and reassembly. Get your free home survey today!
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
                WhatsApp Us
              </a>
            </div>

            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 max-w-4xl mx-auto text-left">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-white/60 text-xs uppercase tracking-wider">Free Survey</p>
                <p className="text-gold font-bold text-sm md:text-base">In-Home & Written</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-white/60 text-xs uppercase tracking-wider">Contact</p>
                <p className="text-gold font-bold text-sm md:text-base">info@bestintlmovers.com</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-white/60 text-xs uppercase tracking-wider">Coverage</p>
                <p className="text-gold font-bold text-sm md:text-base">All ISB Sectors</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-white/60 text-xs uppercase tracking-wider">Pricing</p>
                <p className="text-gold font-bold text-sm md:text-base">No Hidden Charges</p>
              </div>
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
                Introduction — Home Shifting in Islamabad in 2026
              </h2>
              <p>
                Home shifting in Islamabad in 2026 is more in demand than ever before. The capital city is growing rapidly — new sectors opening, housing societies expanding, families upgrading to larger homes, and professionals relocating for government and corporate jobs. Whether you are shifting from F-8 to DHA Phase 2, moving into a new Bahria Enclave apartment, or relocating your family from Islamabad to another city — the process is complex, physically demanding and emotionally stressful when done without professional support.
              </p>
              <p>
                <strong>Best International Movers & Logistics</strong> has been Islamabad's most trusted home shifting company since 2009. With 5,000+ successful relocations across every sector of the capital — from the narrow lanes of F-6 to the gated communities of Diplomatic Enclave — our team has the local knowledge, trained manpower and professional equipment to move your home safely, on time and within budget.
              </p>
              <p>
                This complete 2026 guide covers everything you need to know about home shifting in Islamabad: what it costs, how the process works, how to prepare, which areas we cover, what mistakes to avoid and why choosing the right home shifting company makes all the difference between a smooth move and a nightmare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Price Guide */}
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
                  1. Home Shifting Charges in Islamabad 2026 — Complete Price Guide
                </h2>
                <p className="text-muted-foreground mt-2">
                  Transparent June 2026 pricing guide. All quotes include packing materials, labour, loading, transport, and unloading.
                </p>
              </div>

              {/* Price Table */}
              <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy/80 text-white border-b border-border/25">
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Home Size</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Price Range (PKR)</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">What Is Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Studio / 1 Bedroom</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 15,000 – 25,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Packing + Loading + Transport + Unloading</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">2 Bedroom Apartment</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 25,000 – 40,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Packing + Loading + Transport + Unloading</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">3 Bedroom House</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 35,000 – 55,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Packing + Loading + Transport + Dismantling</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">4 Bedroom House</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 50,000 – 75,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Full Service + Reassembly + Debris Removal</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">5+ Bedroom Villa</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 65,000 – 95,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Full Service + Reassembly + Debris Removal</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors bg-gold/5">
                        <td className="p-4 font-semibold text-foreground">Same-Day Shifting</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 15,000 – 35,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Studio/1-2 bed — booked before 10 AM</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Lahore</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 25,000 – 65,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Covered GPS truck — based on volume</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Karachi</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 40,000 – 85,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Covered GPS truck — based on volume</td>
                      </tr>
                      <tr className="hover:bg-navy-light/20 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Rawalpindi</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 12,000 – 28,000</td>
                        <td className="p-4 text-muted-foreground text-sm">Same-day intercity service available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Price Note Card */}
              <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-xl p-5 flex gap-4 items-start">
                <Info className="text-gold flex-shrink-0 mt-0.5" size={20} />
                <p className="text-foreground text-sm md:text-base leading-relaxed">
                  Prices vary by floor level, lift access, parking distance and fragile items. Exact price confirmed after free home survey. <a href="tel:03009130211" className="text-gold font-bold hover:underline">Call 0300-9130211</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Professional */}
      <section className="py-16 bg-background">
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
                  2. Why Professional Home Shifting in Islamabad Is Worth Every Rupee
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Many Islamabad families attempt DIY home shifting to save money — renting a truck, calling friends and handling the packing themselves. In almost every case, the outcome involves at least one of these: a cracked TV screen, a scratched wardrobe, a broken ceramic piece, a back injury from lifting a heavy bed frame, a truck that arrives late or not at all, or a bill that ends up higher than a professional quote once you add truck rental, packing materials and the time cost of lost work.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Professional home shifting pays for itself through damage prevention, time savings and physical relief. Here is what you actually get when you hire Best International Movers for your Islamabad home shift:
                </p>
              </div>

              {/* List of features */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Trained packing crew", desc: "People who pack homes daily and know exactly how to protect every item category" },
                  { title: "Right materials", desc: "Double-wall export cartons, industrial bubble wrap, foam padding, furniture blankets, wardrobe boxes — brought to your door" },
                  { title: "Systematic labelling", desc: "Every box identified by room and content so unpacking at your new home is organised, not chaotic" },
                  { title: "Safe loading", desc: "Proper weight distribution, tie-down straps, no item touching another without protection between them" },
                  { title: "Furniture dismantling & reassembly", desc: "Beds, wardrobes, dining tables — all taken apart safely and put back together at the new home" },
                  { title: "Full transit insurance", desc: "Every home shift covered; damage means compensation, no arguments" },
                  { title: "Debris removal", desc: "All empty boxes and packing materials removed when done; your new home is move-in ready" },
                  { title: "Follow-up call", desc: "We check in within 24 hours to confirm everything arrived correctly" }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-5 border border-border flex gap-4 items-start hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Process */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  3. Our Home Shifting Process in Islamabad — Step by Step
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Our Islamabad home shifting process is fully integrated with our complete <Link to="/packers-and-movers-islamabad" className="text-gold font-semibold hover:underline">packers and movers service in Islamabad</Link> — meaning you get the same professional team, same quality standards and same written guarantee whether you book through this page or our main Islamabad page.
                </p>
              </div>

              {/* Timeline cards */}
              <div className="space-y-6">
                {[
                  {
                    step: "Step 1",
                    title: "Call or WhatsApp for Free Home Survey",
                    desc: "Contact us at 0300-9130211. Our Islamabad coordinator visits your home within 24 hours — inspects every room, notes fragile and high-value items, checks lift access and parking, measures large furniture pieces and produces a written quotation. Free, no obligation, no pressure."
                  },
                  {
                    step: "Step 2",
                    title: "Written Quote and Date Confirmation",
                    desc: "You receive a detailed written quote covering crew count, truck size, start time, packing scope and total price. Once you confirm, your moving date is locked. A dedicated coordinator is assigned to your job as the single point of contact."
                  },
                  {
                    step: "Step 3",
                    title: "Pre-Move Preparation Advice",
                    desc: "Your coordinator shares a simple preparation checklist: what to keep personally (documents, medicines, valuables), how to prepare appliances (defrost fridge, disconnect washing machine), and what to expect on move day. No surprises."
                  },
                  {
                    step: "Step 4",
                    title: "Professional Packing Day",
                    desc: "Our trained Islamabad team arrives with all materials. Packing is systematic — room by room, item by item. Every box labelled by room name and contents. Fragile items triple-wrapped. Furniture disassembled. Hardware in labelled bags taped to each piece. The kitchen packed last for easy access at the new address."
                  },
                  {
                    step: "Step 5",
                    title: "Safe Loading",
                    desc: "Our loading team uses trolleys, furniture sliders and stair climbers. Floor runners and corner guards go up before anything moves. Loading sequence follows the floor plan of your new home — what goes in first at the new place gets loaded last at the old one. No rushing, no dragging, no dropping."
                  },
                  {
                    step: "Step 6",
                    title: "GPS-Tracked Transport",
                    desc: "Your belongings travel in a maintained, GPS-equipped truck. WhatsApp updates when loaded, en route and arrived. You always know where your home contents are."
                  },
                  {
                    step: "Step 7",
                    title: "Delivery and Placement",
                    desc: "At your new Islamabad address, items placed exactly where you direct. Floor runners protect your new home throughout unloading. No items left in the wrong room."
                  },
                  {
                    step: "Step 8",
                    title: "Furniture Reassembly and Full Unpacking",
                    desc: "Beds reassembled, wardrobes put back together, dining tables set up, sofas repositioned. All boxes unpacked if included in your scope. Every carton, bubble wrap and foam padding removed from your new home. You are move-in ready from day one."
                  }
                ].map((s, index) => (
                  <div key={index} className="flex gap-4 md:gap-6 items-start bg-background p-6 rounded-2xl border border-border shadow-md hover:border-gold/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-bold text-lg border border-gold/20 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-gold text-xs font-bold uppercase tracking-widest">{s.step}</span>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mt-1 mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Sectors Coverage */}
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
                  4. Home Shifting Coverage — All Islamabad Sectors 2026
                </h2>
                <p className="text-muted-foreground mt-2">
                  Our professional home shifting crews cover every block, phase, and sub-sector across Islamabad.
                </p>
              </div>

              {/* Grid layout for sectors */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "F-Sectors",
                    bg: "bg-navy/5",
                    items: ["F-5", "F-6", "F-7", "F-8", "F-9", "F-10", "F-11", "and all sub-sectors"]
                  },
                  {
                    title: "G-Sectors",
                    bg: "bg-navy/5",
                    items: ["G-5", "G-6", "G-7", "G-8", "G-9", "G-10", "G-11", "G-13", "G-14", "G-15", "G-16"]
                  },
                  {
                    title: "E & I Sectors",
                    bg: "bg-navy/5",
                    items: ["E-7", "E-8", "E-11", "I-8", "I-9", "I-10", "I-11", "I-14", "I-15", "I-16"]
                  },
                  {
                    title: "Premium Societies",
                    bg: "bg-gold/5 border-gold/20",
                    items: ["DHA", "Bahria Enclave", "Diplomatic Enclave", "Park Enclave", "Naval Anchorage", "Gulberg Greens", "PWD Housing"]
                  }
                ].map((sec, idx) => (
                  <div key={idx} className={`glass-card rounded-2xl p-6 border border-border flex flex-col ${sec.bg}`}>
                    <h3 className="font-display font-bold text-lg text-foreground mb-4 border-b border-border/30 pb-2 flex items-center justify-between">
                      <span>{sec.title}</span>
                      <MapPin className="text-gold" size={18} />
                    </h3>
                    <ul className="space-y-2 flex-grow">
                      {sec.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Coverage Callout */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 text-center font-semibold text-foreground">
                Not sure if we cover your area? <a href="tel:03009130211" className="text-gold font-bold hover:underline">Call 0300-9130211</a> — if it is in Islamabad, we go there.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: High-Rise Specialist */}
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
                    5. High-Rise Apartment Home Shifting in Islamabad — Specialist Service
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Moving from Centaurus, F-10/F-11, Bahria, or Eighteen? Our dedicated apartment shifting protocols prevent delays.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    title: "Elevator Booking",
                    desc: "Service lifts reserved with building management 48–72 hours before move day. Peak-hour elevator conflicts are the number one cause of high-rise move delays."
                  },
                  {
                    title: "Corridor Width Assessment",
                    desc: "King-size bed frames, large wardrobes and L-shaped sofas often need partial dismantling to navigate tight corridors. We assess this during the survey."
                  },
                  {
                    title: "Floor & Corridor Protection",
                    desc: "Runner mats and corner guards deployed throughout corridors and stairwells before any item moves to protect building common areas."
                  },
                  {
                    title: "Parking & Shuttle Loading",
                    desc: "Where the truck cannot park close, we deploy a shuttle trolley system between the truck and building entrance for seamless transit."
                  },
                  {
                    title: "Security Coordination",
                    desc: "Building security briefed on crew IDs, access passes arranged, and moving windows confirmed with building manager in advance."
                  },
                  {
                    title: "Load Sequencing",
                    desc: "Every item moves in a precise sequence. Getting this wrong means items jamming in the elevator or blocking corridor access. Supervisor-led plan."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-5 border border-border shadow-sm hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300">
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

      {/* Section 6: Packing Guide */}
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
                  6. Home Shifting Packing Guide — Islamabad Expert Tips 2026
                </h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                  Protect your investments. Learn how our professional team prepares your items for transit.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Electronics",
                    subtitle: "TV, Computers, Home Theatre",
                    desc: "Flat-screen TVs travel in custom TV cartons with internal foam moulding — never lying flat, always vertical. Computer CPUs and monitors separated. All cables labelled before disconnection."
                  },
                  {
                    title: "Crockery & Kitchen",
                    subtitle: "Glassware and Kitchen Fragiles",
                    desc: "Every glass and ceramic piece individually tissue-wrapped and bubble-wrapped. Glasses travel upright, plates stacked vertically like records. Marked 'FRAGILE — THIS SIDE UP.'"
                  },
                  {
                    title: "Furniture",
                    subtitle: "What Gets Dismantled",
                    desc: "Beds, wardrobes, dining tables, desks dismantled. Glass table tops/mirrors travel in card sleeves. Screws/bolts go into labelled zip-lock bags taped to the piece. Nothing lost."
                  },
                  {
                    title: "Clothes & Wardrobe",
                    subtitle: "Wrinkle-Free Transport",
                    desc: "Wardrobe boxes allow hanging clothes to travel exactly as they hang. Seasonal clothing and bedding vacuum-compressed. Clean and dry before packing to prevent mould."
                  },
                  {
                    title: "Important Documents",
                    subtitle: "Never in a Moving Carton",
                    desc: "Passports, NICs, property documents, certificates, financial records must travel with you personally in a carry bag. Create a folder before packing day."
                  }
                ].map((guide, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-border flex flex-col justify-between hover:border-gold/30 transition-all duration-300">
                    <div>
                      <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-1">{guide.subtitle}</span>
                      <h3 className="font-display font-bold text-lg text-foreground mb-3">{guide.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{guide.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Mistakes to Avoid */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  7. 5 Home Shifting Mistakes Islamabad Families Make — And How to Avoid Them
                </h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">
                  Relocating can be stressful, but avoiding these common pitfalls will save you time, money, and hassle.
                </p>
              </div>

              {/* Comparison List */}
              <div className="space-y-6">
                {[
                  {
                    id: "Mistake 1",
                    title: "Accepting a Phone Quote Without a Home Survey",
                    desc: "Every home is different. A phone quote based on bedroom count is a guess — and guesses change on move day when the mover sees the actual volume, fragile items, floor level and access challenges. Always insist on a free home survey and a written quotation before committing to any home shifting company in Islamabad."
                  },
                  {
                    id: "Mistake 2",
                    title: "Booking Too Close to Month-End",
                    desc: "The last 3 days of every month are Islamabad's busiest shifting days — rental cycles end, property handovers happen, and every mover in the city is fully booked. Families who call on the 29th for the 31st are regularly told no capacity. Book at least 7 days in advance, 2 weeks for month-end dates."
                  },
                  {
                    id: "Mistake 3",
                    title: "Not Checking Lift and Parking Access in Advance",
                    desc: "Islamabad's apartment buildings — especially in F-10, F-11 and G-11 — have service lift booking requirements and parking restrictions. Families who do not check these in advance find their moving crew standing in the lobby while the lift is occupied. Our team coordinates all of this during pre-move planning."
                  },
                  {
                    id: "Mistake 4",
                    title: "Using Informal Movers for Fragile Items",
                    desc: "Informal truck drivers hired from the roadside do not carry packing materials, do not use furniture blankets and are not trained in safe loading techniques. For electronics, glassware, antiques or imported appliances — the risk of damage is extremely high. Professional movers for fragile items are not a luxury, they are loss prevention."
                  },
                  {
                    id: "Mistake 5",
                    title: "Not Labelling Boxes by Room",
                    desc: "Unlabelled boxes at the new home mean every box goes to a random room, unpacking takes days instead of hours, and family members cannot find essential items. Our systematic room-by-room labelling system means every box goes to the exact right room at the new address from the moment the truck is unloaded."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-2xl border border-border p-6 flex gap-4 items-start shadow-md hover:border-gold/30 transition-all duration-300">
                    <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="text-amber-500 font-bold text-xs uppercase tracking-wider">{item.id}</span>
                      <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Same-Day Shifting */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Clock size={120} />
              </div>
              <div className="relative z-10 space-y-6">
                <span className="bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wider uppercase inline-block">
                  Urgent Relocation
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  8. Same-Day Home Shifting in Islamabad — How It Works
                </h2>
                <p className="text-white/80 leading-relaxed text-base md:text-lg max-w-3xl">
                  Best International Movers offers same-day home shifting in Islamabad subject to availability. This service is designed for urgent situations:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/90"><strong>Book before 10:00 AM</strong> — WhatsApp 0300-9130211 with address, room count, key items</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/90"><strong>30-Minute Confirmation</strong> — We confirm crew and truck availability quickly</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/90"><strong>Studio to 2-Bedrooms</strong> — Ideal sizes for same-day completion</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/90"><strong>3-Bedroom Moves</strong> — Shipped same-day if booked before 9 AM (local moves)</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/90"><strong>No same-day surcharge</strong> — Pricing remains exact as standard shifting</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/90"><strong>Dedicated Coordinator</strong> — Constant WhatsApp status updates throughout the day</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Housing Societies */}
      <section className="py-16 bg-navy-light/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  9. Home Shifting in Islamabad's Major Housing Societies
                </h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">
                  Every housing society has its own gated protocols, security guidelines, and access restrictions. Here is how we manage them.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    society: "DHA Islamabad",
                    desc: "DHA Islamabad has security checkpoints requiring driver CNIC and vehicle registration in advance. Wide roads accommodate large trucks well. Our team pre-submits vehicle and crew details to DHA security before every move, ensuring smooth entry without gate delays."
                  },
                  {
                    society: "Bahria Enclave",
                    desc: "Bahria Enclave has specific truck entry windows managed by society management. Our team coordinates with Bahria Enclave gate office before every move — ensuring your truck enters during the permitted window and your move is not delayed at the gate."
                  },
                  {
                    society: "Diplomatic Enclave",
                    desc: "Diplomatic Enclave home shifting requires advance security clearance, crew ID registration and vehicle approval through the Ministry of Foreign Affairs protocol office. Our team is experienced in this process — we have handled dozens of diplomatic home shifts and manage the paperwork without any burden on our clients."
                  },
                  {
                    society: "Eighteen Islamabad",
                    desc: "Eighteen Islamabad has strict moving protocols, designated service hours and building management approval requirements. Our team coordinates directly with Eighteen Islamabad's facilities management for every move."
                  },
                  {
                    society: "Park Enclave",
                    desc: "Park Enclave has gated access with security registration requirements. Moving trucks require advance approval through the estate office. Our team handles this as standard — your move day starts without delays at the gate."
                  }
                ].map((soc, idx) => (
                  <div key={idx} className="bg-background rounded-2xl p-6 border border-border shadow-sm flex flex-col justify-between hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold"></span>
                        {soc.society}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{soc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Intercity Shifting */}
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
                  10. Islamabad to Other Cities — Intercity Home Shifting 2026
                </h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">
                  Relocating intercity? We provide covered, GPS-tracked fleet vehicles with real-time tracking updates.
                </p>
                <p className="text-muted-foreground text-sm md:text-base mt-2">
                  For families relocating internationally, our complete <Link to="/international-moving" className="text-gold font-semibold hover:underline">international moving service from Islamabad</Link> provides door-to-door relocation to UAE, UK, Canada, Australia and 100+ countries worldwide.
                </p>
              </div>

              {/* Intercity Table */}
              <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white border-b border-border/25">
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Route</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Transit Time</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Price Range</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 text-sm md:text-base">
                      <tr className="hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Lahore</td>
                        <td className="p-4 text-muted-foreground">12–18 hours</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 25,000–65,000</td>
                        <td className="p-4 text-muted-foreground text-xs md:text-sm">Covered truck + GPS</td>
                      </tr>
                      <tr className="hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Karachi</td>
                        <td className="p-4 text-muted-foreground">24–36 hours</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 40,000–85,000</td>
                        <td className="p-4 text-muted-foreground text-xs md:text-sm">Covered truck + GPS</td>
                      </tr>
                      <tr className="hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Peshawar</td>
                        <td className="p-4 text-muted-foreground">4–6 hours</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 18,000–45,000</td>
                        <td className="p-4 text-muted-foreground text-xs md:text-sm">Same-day delivery</td>
                      </tr>
                      <tr className="hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Rawalpindi</td>
                        <td className="p-4 text-muted-foreground">45 min–2 hours</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 12,000–28,000</td>
                        <td className="p-4 text-muted-foreground text-xs md:text-sm">Same-day intercity</td>
                      </tr>
                      <tr className="hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Multan</td>
                        <td className="p-4 text-muted-foreground">8–12 hours</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 22,000–55,000</td>
                        <td className="p-4 text-muted-foreground text-xs md:text-sm">Covered truck + GPS</td>
                      </tr>
                      <tr className="hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Islamabad to Quetta</td>
                        <td className="p-4 text-muted-foreground">14–20 hours</td>
                        <td className="p-4 text-gold font-bold font-mono">PKR 30,000–70,000</td>
                        <td className="p-4 text-muted-foreground text-xs md:text-sm">Covered truck + insurance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 11: Storage Facility */}
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
                    11. Home Shifting + Storage — When Your New Home Is Not Ready
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">
                    Is there a delay in your new tenancy? Store your home items securely in our CCTV-monitored facilities.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                When your new home is not ready on time, our <Link to="/packers-and-movers-islamabad" className="text-gold font-semibold hover:underline">secure storage facility in Islamabad</Link> bridges the gap perfectly:
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                {[
                  { title: "Clear on Time", desc: "We pack and move your home on your vacate date — your old home is cleared on schedule without extensions." },
                  { title: "Secure Facility", desc: "Your belongings go into our climate-controlled, 24/7 CCTV-monitored Islamabad storage facility." },
                  { title: "Flexible Delivery", desc: "When your new home is ready — days, weeks or months later — we deliver and set up everything." },
                  { title: "Fully Insured", desc: "Storage is fully insured, giving you the exact same protection as in transit." },
                  { title: "No Double-Packing", desc: "Goods stay in the same premium cartons in storage. No unpacking and repacking needed." },
                  { title: "Flexible Access", desc: "Get full access to your stored cartons with a simple 24-hour advance notice." }
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

      {/* Section 12: Why Choose Us (Deliverables Table) */}
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
                  12. Why Islamabad Families Choose Best International Movers — 2026
                </h2>
                <p className="text-muted-foreground mt-2">
                  What we promise in writing is exactly what we deliver. No compromise on safety.
                </p>
              </div>

              {/* Deliverables Table */}
              <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white border-b border-border/25">
                        <th className="p-4 font-display font-semibold text-sm md:text-base w-1/3">What We Deliver</th>
                        <th className="p-4 font-display font-semibold text-sm md:text-base w-2/3">What It Means for You</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 text-sm md:text-base">
                      {[
                        { deliver: "Free Home Survey", means: "Written quote — no phone estimates that change on move day" },
                        { deliver: "Background-Verified Staff", means: "Safe, uniformed professionals — not anonymous day labour" },
                        { deliver: "Premium Packing Materials", means: "Double-wall cartons, bubble wrap, wooden crates — not newspaper" },
                        { deliver: "Full Transit Insurance", means: "Every home shift covered — damage compensated with no argument" },
                        { deliver: "Society Coordination", means: "Gate permissions, lift booking, security briefing — all handled" },
                        { deliver: "Furniture Reassembly", means: "Beds, wardrobes, tables — all put back together at new home" },
                        { deliver: "Debris Removal", means: "All packing materials removed — new home immediately liveable" },
                        { deliver: "No Hidden Charges", means: "Written quote = final invoice — not one rupee extra" },
                        { deliver: "WhatsApp Updates", means: "Real-time status from packing to delivery" },
                        { deliver: "Same-Day Available", means: "Book before 10 AM — urgent moves handled same day" },
                        { deliver: "Follow-Up Call", means: "24 hours after delivery — we confirm everything is perfect" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-light/10 transition-colors">
                          <td className="p-4 font-bold text-foreground">{row.deliver}</td>
                          <td className="p-4 text-muted-foreground">{row.means}</td>
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

      {/* Section 13: Reviews */}
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
                  13. What Islamabad Clients Say — Home Shifting Reviews 2026
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  Over 5,000 successful moves in Islamabad. Here is feedback from some of our recent families.
                </p>
              </div>

              {/* Reviews Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Ahmed Raza",
                    route: "F-8 → DHA Islamabad",
                    date: "May 2026",
                    review: "Shifted our 4-bedroom house from F-8/3 to DHA Phase 2 in May 2026. Team of 7 arrived exactly on time, packed everything in 4 hours and had us completely settled in the new house by evening. My wife was especially relieved that her china collection arrived without a single crack. Outstanding professionalism."
                  },
                  {
                    name: "Sana Mahmood",
                    route: "G-11 → Bahria Enclave",
                    date: "April 2026",
                    review: "Moving from G-11 to Bahria Enclave with two kids and 15 years of accumulated household — I was terrified. Best International Movers made it completely manageable. They coordinated the Bahria Enclave gate permit, booked the service lift in our old building, and finished the entire move in one day. Every box was in the right room."
                  },
                  {
                    name: "Bilal Chaudhry",
                    route: "E-11 → F-7 Islamabad",
                    date: "March 2026",
                    review: "Called at 8:30 AM for a same-day shift from E-11 to F-7. Confirmed by 9 AM, team arrived by 11 AM. 2-bedroom apartment fully moved and set up at the new place by 5 PM. Price was exactly what they quoted on the phone."
                  },
                  {
                    name: "Fatima Nawaz",
                    route: "F-10 → Storage → Park Enclave",
                    date: "February 2026",
                    review: "Used their storage facility for 3 weeks between homes. Moved our F-10 house into storage, then delivered to Park Enclave when the renovation finished. Seamless — we did not have to repack anything. Every item in perfect condition after 3 weeks."
                  }
                ].map((rev, idx) => (
                  <div key={idx} className="bg-background border border-border p-6 rounded-2xl shadow-md flex flex-col justify-between hover:border-gold/30 hover:shadow-lg transition-all duration-300">
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

      {/* Section 14: FAQs (Accordion Layout) */}
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
                  14. Frequently Asked Questions — Home Shifting Islamabad 2026
                </h2>
                <p className="text-muted-foreground mt-2">
                  Find fast answers to common questions about moving in the capital.
                </p>
              </div>

              {/* Accordion Component */}
              <div className="space-y-4">
                {faqsData.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className="glass-card rounded-2xl border border-border overflow-hidden hover:border-gold/30 transition-colors"
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

      {/* Book Survey / Bottom CTA */}
      <section className="py-16 bg-navy-light/10 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-3xl p-8 md:p-12 border border-gold/20 space-y-6"
            >
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 inline-block">
                Start Relocating
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Book Free Home Survey — Islamabad 2026
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Contact our blue area office coordinate team to schedule your physical survey. Get an itemised written quotation detailing every single moving cost.
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
                  <span>Website: <strong>bestintlmovers.com/home-shifting-islamabad</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <MapPin className="text-gold" size={18} />
                  <span>Office: <strong>Blue Area, Jinnah Avenue, Islamabad</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <Clock className="text-gold" size={18} />
                  <span>Monday – Saturday | 8:00 AM – 8:00 PM <br className="sm:hidden" />(Sunday Emergency Available)</span>
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

      {/* Footer copyright section */}
      <footer className="py-8 bg-navy text-white/60 border-t border-white/5 text-center text-xs md:text-sm">
        <div className="container mx-auto px-4">
          <p>© June 2026 — Best International Movers & Logistics | Islamabad's #1 Home Shifting Company | bestintlmovers.com</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default HomeShiftingIslamabad;
