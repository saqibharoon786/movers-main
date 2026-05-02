import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const blogData = {
  slug: "cargo-insurance-services-pakistan",
  title: "Why Cargo Insurance Is the Most Important Thing You're Ignoring When Shipping from Pakistan",
  metaTitle: "Cargo Insurance Pakistan – Complete Guide 2025 | Best Intl Movers",
  metaDescription: "Everything you need to know about cargo insurance in Pakistan. Types, costs, claims, and why carrier liability is never enough. Read the full guide by Best Intl Movers.",
  author: "Best International Movers & Logistics",
  category: "Shipping Tips | Insurance & Protection",
  publishDate: "May 2, 2026",
  readTime: "15 min read",
  primaryKeyword: "Cargo Insurance Services Pakistan",
  secondaryKeywords: ["Transit Insurance Pakistan", "Marine Cargo Insurance Pakistan", "Shipping Insurance Pakistan", "Freight Insurance Pakistan", "Cargo Insurance International Shipping"],
  wordCount: "2,000+ words",
  heroImg: "https://bestintlmovers.com/images/cargo-insurance.jpg"
};

// Related blogs for the cards section
const relatedBlogs = [
  {
    title: "International Moving Services from Pakistan",
    excerpt: "Complete door-to-door relocation services across 100+ countries with expert handling.",
    slug: "international-moving-services-pakistan",
    category: "International Moving",
    readTime: "12 min read",
    date: "April 28, 2026"
  },
  {
    title: "Professional Packing Service Guide",
    excerpt: "Premium packing materials and white-glove service for your most precious belongings.",
    slug: "professional-packing-service-guide",
    category: "Packing Tips",
    readTime: "8 min read",
    date: "April 25, 2026"
  },
  {
    title: "Goods Transportation Across Pakistan",
    excerpt: "Reliable road freight services connecting all major cities with GPS tracking.",
    slug: "goods-transportation-pakistan",
    category: "Domestic Shipping",
    readTime: "10 min read",
    date: "April 22, 2026"
  },
  {
    title: "Air vs Sea Freight: Complete Comparison",
    excerpt: "Detailed comparison of air and sea freight options for international shipping from Pakistan.",
    slug: "air-vs-sea-freight-pakistan",
    category: "Shipping Tips",
    readTime: "14 min read",
    date: "April 18, 2026"
  },
  {
    title: "How to Choose Packers and Movers",
    excerpt: "Complete guide to selecting the right moving company for your relocation needs.",
    slug: "how-to-choose-packers-movers",
    category: "Moving Tips",
    readTime: "9 min read",
    date: "April 15, 2026"
  },
  {
    title: "Moving Cost Calculator Pakistan",
    excerpt: "Calculate your moving costs with our comprehensive guide and pricing insights.",
    slug: "moving-cost-calculator-pakistan",
    category: "Cost Guide",
    readTime: "11 min read",
    date: "April 12, 2026"
  }
];

// Build Article Schema for SEO
function buildArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blogData.title,
    "description": blogData.metaDescription,
    "author": {
      "@type": "Organization",
      "name": blogData.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Best International Movers & Logistics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestintlmovers.com/logo.png"
      }
    },
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02",
    "image": blogData.heroImg,
    "url": `https://bestintlmovers.com/blog/${blogData.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bestintlmovers.com/blog/${blogData.slug}`
    },
    "articleSection": "Shipping Tips",
    "wordCount": blogData.wordCount
  };
}

// Build FAQ Schema for rich results
function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is cargo insurance mandatory for shipping from Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is not legally required, but it is strongly recommended for any shipment of significant value. Without it, your only protection is the carrier's limited contractual liability — which is almost never sufficient."
        }
      },
      {
        "@type": "Question",
        "name": "Does cargo insurance cover my goods during storage at the port or warehouse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our All-Risk policies provide warehouse-to-warehouse coverage — from packing at origin through all storage periods and transit to final delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What if my goods are damaged during the packing process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Risk coverage typically begins from the moment packing starts on the day of collection. Any damage occurring during professional packing is covered."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get cargo insurance for a single domestic shipment within Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide voyage-specific (single-trip) transit insurance for domestic shipments — you do not need a standing policy for a one-off consignment."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly is a cargo insurance claim paid out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple, well-documented claims are typically settled within 2 to 4 weeks of the surveyor's report. Complex claims involving large values or disputed circumstances may take longer."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need to make a cargo insurance claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will need your insurance certificate, commercial invoice or packing list, bill of lading or airway bill, delivery receipt noting the damage, photographs of the damage, and the surveyor's report. Our team assists with preparing all of this."
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
        "name": "Blog", 
        "item": "https://bestintlmovers.com/blog" 
      },
      { 
        "@type": "ListItem", 
        "position": 3,
        "name": "Cargo Insurance Pakistan", 
        "item": "https://bestintlmovers.com/blog/cargo-insurance-services-pakistan" 
      }
    ]
  };
}

const CargoInsuranceServicesPakistanBlog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={blogData.metaTitle}
        description={blogData.metaDescription}
        keywords={`${blogData.primaryKeyword}, ${blogData.secondaryKeywords.join(', ')}`}
        urlPath={`/blog/${blogData.slug}`}
        schema={[buildArticleSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Tag className="text-gold" size={16} />
                <span className="text-gold text-sm font-medium">{blogData.category}</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-light/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="text-gold" size={16} />
                <span className="text-gold text-sm font-medium">{blogData.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {blogData.title}
            </h1>
            
            <img 
              src="/images/cargo-insurance.jpg" 
              alt="Cargo Insurance Services Pakistan - Complete Guide" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <div className="flex items-center justify-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{blogData.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blogData.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck size={16} />
                <span>{blogData.wordCount}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-6 mb-12"
            >
              <p className="text-lg font-semibold text-foreground">
                Picture this: You have spent months planning your move from Rawalpindi to Dubai. Your entire household — furniture collected over years, your children's belongings, your appliances, your irreplaceable personal items — is packed into a 20-foot container and loaded at Karachi Port. Three weeks later, you receive a call. Your container was water-damaged during a storm in the Arabian Sea. Clothes, electronics, wooden furniture — ruined.
              </p>

              <p>
                You call the shipping line expecting full compensation. They tell you their liability is capped at USD 500 per package under the Hague-Visby Rules. Your goods were worth PKR 4,000,000. The shipping line owes you approximately USD 3,000.
              </p>

              <p>
                This scenario plays out for Pakistani families and businesses every single year. And almost every time, the reason for the financial loss is the same — no cargo insurance.
              </p>

              <p>
                If you are moving internationally from Pakistan, shipping commercial goods abroad, or even transporting household items between cities domestically, cargo insurance is not a luxury. It is the single most important financial protection in your entire logistics chain.
              </p>

              <p>
                This guide covers everything you need to know.
              </p>
            </motion.div>

            {/* H2: The Fundamental Problem */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                The Fundamental Problem: Carrier Liability Is Almost Worthless
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Before we explain what cargo insurance is, it is essential to understand what it replaces — and why carrier liability alone is dangerously insufficient.
                </p>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Sea Freight Carriers</h3>
                  <p>
                    International sea freight is governed by the <strong className="text-gold">Hague-Visby Rules</strong> — an international maritime convention that limits a carrier's liability to <strong className="text-gold">SDR 666.67 per package</strong> or <strong className="text-gold">SDR 2 per kilogram</strong>, whichever is higher. In practical terms, this means a shipping line's maximum liability for a standard container of household goods is often less than USD 5,000 — regardless of the actual value of the contents.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Air Freight Carriers</h3>
                  <p>
                    The <strong className="text-gold">Montreal Convention</strong> governs international air freight and limits airline liability to <strong className="text-gold">19 SDR per kilogram</strong>. For a 500 kg air freight shipment worth PKR 2,000,000, the airline owes you approximately USD 13,000 — a fraction of the actual value.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Road Freight in Pakistan</h3>
                  <p>
                    Domestic road freight carriers in Pakistan operate under consignment note terms that typically cap liability at a fixed nominal amount per consignment. In practice, recovering meaningful compensation from a road carrier after an accident is extremely difficult.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-6 border border-navy-light">
                  <p className="text-foreground font-semibold text-lg">
                    <strong className="text-gold">The conclusion is unavoidable:</strong> Carrier liability exists to protect carriers, not cargo owners. Cargo insurance exists to protect you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: What Is Cargo Insurance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                What Is Cargo Insurance? A Clear Definition
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Cargo insurance — also called transit insurance, freight insurance, or marine cargo insurance — is a financial protection policy that compensates the cargo owner for the actual declared value of goods that are lost, stolen, or damaged during transit.
                </p>

                <p>
                  Unlike carrier liability, which is capped by international convention at a fraction of cargo value, cargo insurance pays out based on what your goods are actually worth — the full invoice value or replacement value you declare when taking out the policy.
                </p>

                <p>
                  It covers goods moving by sea, air, road, or any combination of these — from the moment they leave the origin premises until they are delivered to the final destination.
                </p>
              </div>
            </motion.div>

            {/* H2: Types of Cargo Insurance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Types of Cargo Insurance — Which One Do You Need?
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Not all cargo insurance policies are the same. Understanding the three main types helps you choose the right level of protection for your specific shipment.
                </p>

                <div className="space-y-8">
                  <div className="glass-card rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">1. All-Risk Coverage — The Gold Standard</h3>
                    <p className="mb-4">
                      All-Risk cargo insurance is the most comprehensive policy available. It covers your goods against <strong className="text-gold">all causes of physical loss or damage</strong> during transit, except for specific named exclusions clearly stated in the policy.
                    </p>
                    
                    <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-4 border border-gold/30 mb-4">
                      <h4 className="font-semibold text-foreground mb-2">What All-Risk covers:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Accidental physical damage during handling, loading, and unloading</li>
                        <li>Water damage — including sea water ingress into containers</li>
                        <li>Fire and explosion at any point during transit</li>
                        <li>Theft, pilferage, and non-delivery</li>
                        <li>Total loss due to vessel sinking, grounding, or collision</li>
                        <li>Aircraft accidents and emergency landings</li>
                        <li>Road accidents, vehicle overturning, and collisions</li>
                        <li>Natural disasters occurring during transit — earthquakes, floods, storms</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                      <h4 className="font-semibold text-foreground mb-2">What All-Risk does NOT cover:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Inherent vice — natural deterioration or self-damage of goods</li>
                        <li>Deliberate damage caused by the cargo owner</li>
                        <li>Improper or insufficient packing by the shipper</li>
                        <li>War, strikes, and civil unrest (available as an optional add-on rider)</li>
                      </ul>
                    </div>
                    
                    <p className="mt-4">
                      <strong className="text-gold">Our recommendation:</strong> All-Risk is the right choice for household goods, electronics, furniture, fragile items, high-value commercial goods, and any shipment where the contents have significant financial or sentimental value. If you are planning an <Link to="/services/international-moving" className="text-gold hover:underline">international move from Pakistan</Link>, All-Risk coverage should be considered non-negotiable.
                    </p>
                  </div>

                  <div className="glass-card rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">2. Total Loss Only (TLO) — Basic Protection at Lower Cost</h3>
                    <p>
                      TLO insurance pays out only when your entire shipment is completely and irretrievably lost — for example, if the vessel sinks, the aircraft crashes, or the truck is completely destroyed and no goods are recoverable.
                    </p>
                    <p>
                      Partial damage — a broken television, water-damaged furniture, scratched items — is not covered under TLO.
                    </p>
                    <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-4 border border-gold/30 mt-4">
                      <p><strong className="text-foreground">When TLO makes sense:</strong> Low-value bulk commodities, construction materials, and cargo where the individual item value is low but a total loss would still be financially significant.</p>
                      <p><strong className="text-foreground">When TLO does not make sense:</strong> Household goods, electronics, fragile cargo, and any shipment where partial damage is likely or financially impactful.</p>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">3. Named Perils Insurance — Middle Ground</h3>
                    <p>
                      Named Perils policies cover your cargo against a specific list of risks stated in the policy — typically fire, sinking, stranding, collision, and theft. Any risk not on the named list is not covered.
                    </p>
                    <p>
                      This option sits between TLO and All-Risk in terms of both coverage and cost. It suits standard commercial cargo on well-established, lower-risk routes where the shipper is confident about the most likely risks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* H2: Premium Calculation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                How Cargo Insurance Premiums Are Calculated in Pakistan
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  One of the most common questions is: how much does cargo insurance actually cost?
                </p>

                <p>
                  The premium is calculated as a <strong className="text-gold">percentage of your declared cargo value</strong>, and the rate varies based on several factors:
                </p>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="pb-3 text-gold font-semibold">Factor</th>
                          <th className="pb-3 text-gold font-semibold">Effect on Premium Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-3 text-foreground">Type of coverage chosen</td>
                          <td className="py-3 text-muted-foreground">All-Risk &gt; Named Perils &gt; TLO</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 text-foreground">Nature of goods</td>
                          <td className="py-3 text-muted-foreground">Electronics, fragile items = higher rate</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 text-foreground">Shipping route</td>
                          <td className="py-3 text-muted-foreground">Long-haul, high-risk routes = higher rate</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 text-foreground">Mode of transport</td>
                          <td className="py-3 text-muted-foreground">Sea, air, road = different base rates</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 text-foreground">Quality of packing</td>
                          <td className="py-3 text-muted-foreground">Professional packing = lower rate</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-foreground">Claims history of shipper</td>
                          <td className="py-3 text-muted-foreground">Clean record = lower rate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Typical premium ranges in Pakistan (2025):</h3>
                  <ul className="space-y-2">
                    <li><strong className="text-gold">All-Risk sea freight (household goods):</strong> 0.3% – 0.8% of cargo value</li>
                    <li><strong className="text-gold">All-Risk air freight:</strong> 0.2% – 0.5% of cargo value</li>
                    <li><strong className="text-gold">All-Risk domestic road freight:</strong> 0.1% – 0.3% of cargo value</li>
                    <li><strong className="text-gold">Named Perils coverage:</strong> 0.1% – 0.3% of cargo value</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-6 border border-gold/20">
                  <h3 className="text-xl font-semibold text-foreground mb-4">A Real-World Example</h3>
                  <p>
                    A family moving from Islamabad to London ships a 20-foot container with household goods declared at PKR 5,000,000.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>All-Risk premium at 0.5% = <strong className="text-gold">PKR 25,000</strong></li>
                    <li>This protects PKR 5,000,000 of goods for PKR 25,000</li>
                    <li>That is 0.5% of the total cargo value — for complete protection throughout a 25-day sea voyage</li>
                  </ul>
                  <p className="mt-4">
                    Put another way: for less than the cost of a single piece of furniture, you protect everything in the container. The decision, when framed this way, becomes straightforward.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Claims Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                What the Claims Process Looks Like — Step by Step
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Many people avoid cargo insurance not because of the cost, but because they assume making a claim is complicated and unlikely to succeed. In practice, a well-documented claim with a professional moving company is a straightforward process.
                </p>

                <div className="space-y-4">
                  {[
                    { step: "1", title: "Pre-shipment inventory and photos", desc: "Before any goods are packed, our team creates a complete photographic and written inventory of every item. This is your baseline documentation — proof of the condition and existence of every piece before it left your hands." },
                    { step: "2", title: "Damage is discovered at delivery", desc: "When goods arrive at the destination and damage is found, you note it on the delivery receipt immediately. Never sign a clean delivery note if damage is visible." },
                    { step: "3", title: "Notify within the policy timeframe", desc: "Most cargo insurance policies require notification of loss or damage within 3 to 7 days of delivery. Our team files this notification on your behalf, ensuring you do not miss the window." },
                    { step: "4", title: "Surveyor assessment", desc: "The insurer appoints a cargo surveyor to inspect and assess the damage. Our pre-shipment photos and inventory are submitted as supporting documentation." },
                    { step: "5", title: "Claim settlement", desc: "Once the surveyor's report is accepted, the insurer settles the claim based on the declared value. You receive compensation for the actual value of the damaged or lost goods." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 p-6 glass-card rounded-xl border border-border">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-gold/20 to-gold/10 text-gold rounded-full flex items-center justify-center font-bold text-xl border-2 border-gold/30">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-4 border border-gold/30">
                  <p className="text-foreground font-medium">
                    The key to a successful claim is documentation — and professional packing with a complete inventory makes this straightforward.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Common Mistakes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                The 5 Biggest Cargo Insurance Mistakes Pakistani Shippers Make
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                {[
                  {
                    title: "Assuming the shipping line will cover everything",
                    desc: "As outlined above, carrier liability is capped at a fraction of cargo value. This assumption has cost Pakistani families and businesses millions of rupees in unrecovered losses."
                  },
                  {
                    title: "Under-declaring cargo value to save on premium",
                    desc: "Declaring PKR 1,000,000 for goods worth PKR 3,000,000 saves a few thousand rupees in premium — but leaves a PKR 2,000,000 gap in coverage. Always declare the full replacement value."
                  },
                  {
                    title: "Packing goods yourself without professional support",
                    desc: "Insurers can — and do — reject claims if goods were improperly packed by the shipper. Professional packing by a qualified moving company both protects your goods and protects your insurance coverage. Our <Link to=\"/services/professional-packing\" className=\"text-gold hover:underline\">professional packing service</Link> uses export-grade materials that meet insurance underwriter standards."
                  },
                  {
                    title: "Not photographing goods before packing",
                    desc: "Without pre-shipment documentation, it is very difficult to prove the pre-existing condition of goods when making a damage claim. A photographic inventory takes one hour and saves enormous complications later."
                  },
                  {
                    title: "Missing the claim notification deadline",
                    desc: "Cargo insurance policies have strict timeframes for notifying the insurer of damage or loss. Missing this window — even by one or two days — can invalidate your claim entirely. Working with a logistics provider who manages this on your behalf eliminates this risk."
                  }
                ].map((mistake, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Mistake {idx + 1}: {mistake.title}
                    </h3>
                    <p>{mistake.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Domestic Insurance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Cargo Insurance for Domestic Shipments Within Pakistan
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Cargo insurance is not only for international shipping. Domestic shipments within Pakistan — furniture moved between cities, commercial goods transported by truck, equipment relocated between facilities — face real risks too.
                </p>

                <p>
                  Road accidents in Pakistan are a significant cause of cargo damage. Vehicle overturning, collisions, and fire are not hypothetical risks on Pakistan's highways. For any high-value domestic consignment, transit insurance is a worthwhile investment.
                </p>

                <p>
                  For all domestic movements through our <Link to="/goods-transportation-pakistan" className="text-gold hover:underline">goods transportation network across Pakistan</Link>, we recommend All-Risk coverage on consignments exceeding PKR 200,000 in value.
                </p>
              </div>
            </motion.div>

            {/* H2: Professional Packing and Insurance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Why Professional Packing and Insurance Go Together
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  There is a direct relationship between packing quality and insurance coverage. Insurers assess packing standards when evaluating claims — and policies can be voided or claims reduced if goods were not packed to a reasonable standard.
                </p>

                <p>
                  When you book a full packing service with Best International Movers & Logistics:
                </p>

                <ul className="space-y-2">
                  <li>Every item is packed using export-grade materials</li>
                  <li>Fragile items receive double-layer protective wrapping</li>
                  <li>All boxes are labelled and recorded in a written inventory</li>
                  <li>Photographs are taken at every stage of packing</li>
                  <li>Packing meets the standards required by marine cargo insurance underwriters</li>
                </ul>

                <p>
                  This means your goods are not only better protected physically — your insurance coverage is also on a stronger footing if you ever need to make a claim.
                </p>
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
                Frequently Asked Questions — Cargo Insurance Pakistan
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is cargo insurance mandatory for shipping from Pakistan?",
                    a: "It is not legally required, but it is strongly recommended for any shipment of significant value. Without it, your only protection is the carrier's limited contractual liability — which is almost never sufficient."
                  },
                  {
                    q: "Does cargo insurance cover my goods during storage at the port or warehouse?",
                    a: "Yes. Our All-Risk policies provide warehouse-to-warehouse coverage — from packing at origin through all storage periods and transit to final delivery."
                  },
                  {
                    q: "What if my goods are damaged during the packing process?",
                    a: "All-Risk coverage typically begins from the moment packing starts on the day of collection. Any damage occurring during professional packing is covered."
                  },
                  {
                    q: "Can I get cargo insurance for a single domestic shipment within Pakistan?",
                    a: "Yes. We provide voyage-specific (single-trip) transit insurance for domestic shipments — you do not need a standing policy for a one-off consignment."
                  },
                  {
                    q: "How quickly is a cargo insurance claim paid out?",
                    a: "Simple, well-documented claims are typically settled within 2 to 4 weeks of the surveyor's report. Complex claims involving large values or disputed circumstances may take longer."
                  },
                  {
                    q: "What documents do I need to make a cargo insurance claim?",
                    a: "You will need your insurance certificate, commercial invoice or packing list, bill of lading or airway bill, delivery receipt noting the damage, photographs of the damage, and the surveyor's report. Our team assists with preparing all of this."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
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
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20 mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Protect Your Shipment — Get Cargo Insurance with Your Move
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you are moving your family internationally, shipping commercial goods to export markets, or transporting household items between cities in Pakistan — cargo insurance gives you the financial security to ship with confidence.
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                At Best International Movers & Logistics, cargo insurance is available as a seamless part of every shipment we handle. One team, one call, complete protection.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-foreground">
                  📞 <span className="text-gold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="text-lg text-foreground">
                  🕐 <span>Monday to Saturday | 8:00 AM – 8:00 PM</span>
                </div>
                <div className="text-lg text-foreground">
                  📍 <span>Rawalpindi | Islamabad | Lahore | Peshawar</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <ShieldCheck size={18} />
                  Get Free Quote with Insurance
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

            {/* Related Reading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Related Reading</h2>
              <div className="space-y-4">
                <Link to="/services/international-moving" className="group block p-4 glass-card rounded-xl border border-border hover:border-gold/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">International Moving Services from Pakistan</h3>
                      <p className="text-muted-foreground text-sm mt-1">Complete door-to-door relocation services across 100+ countries</p>
                    </div>
                    <ArrowRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </Link>
                
                <Link to="/services/professional-packing" className="group block p-4 glass-card rounded-xl border border-border hover:border-gold/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">Professional Packing Service</h3>
                      <p className="text-muted-foreground text-sm mt-1">Premium packing materials and white-glove service</p>
                    </div>
                    <ArrowRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </Link>
                
                <Link to="/goods-transportation-pakistan" className="group block p-4 glass-card rounded-xl border border-border hover:border-gold/30 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">Goods Transportation Across Pakistan</h3>
                      <p className="text-muted-foreground text-sm mt-1">Reliable road freight services connecting all major cities</p>
                    </div>
                    <ArrowRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">More Articles & Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of moving and shipping guides to make your relocation journey smoother.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {relatedBlogs.map((blog, idx) => (
              <Link key={idx} to={`/blog/${blog.slug}`} className="group block">
                <div className="glass-card rounded-xl border border-border hover:border-gold/30 transition-all h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="text-gold" size={16} />
                      <span className="text-gold text-sm font-medium">{blog.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-gold font-semibold text-sm">
                      Read More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CargoInsuranceServicesPakistanBlog;
