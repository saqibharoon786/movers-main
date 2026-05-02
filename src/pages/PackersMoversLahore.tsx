import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "packers-and-movers-lahore",
  icon: Package,
  title: "Packers and Movers in Lahore – Professional House & Office Shifting Services",
  subheading: "Safe, Fast & Affordable",
  desc: "Professional packers and movers in Lahore for house & office shifting. Serving DHA, Bahria Town, Gulberg, Johar Town & all areas. FREE quote – 0300-9130211",
  featuresList: [
    "House Shifting in Lahore – Complete residential relocation services",
    "Professional Packing Service – Export-grade materials for maximum protection",
    "Furniture Dismantling & Reassembly – Beds, wardrobes, dining tables handled",
    "Office and Commercial Shifting – Minimal business disruption with after-hours options",
    "Intercity Shifting from Lahore – Lahore to Islamabad, Karachi, Peshawar, Multan",
    "International Moving from Lahore – Door-to-door relocation to 100+ countries",
    "Secure Storage in Lahore – Climate-controlled storage facilities",
    "Transit Insurance – Full coverage for all belongings during transport",
    "Experienced & Verified Team – Professional background-checked moving staff",
    "Transparent Pricing – Written quotes with no hidden charges"
  ],
  heroImg: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
  cities: [
    "DHA Lahore", "Bahria Town Lahore", "Askari Housing", "Lake City", "Wapda Town",
    "Valencia Town", "Gulberg", "Model Town", "Garden Town", "Johar Town",
    "Faisal Town", "Iqbal Town", "Township", "Lahore Cantt", "Shadman"
  ],
  faqs: [
    {
      q: "How much do packers and movers charge in Lahore?",
      a: "Local shifting charges in Lahore range from Rs. 12,000 for a 1-bedroom flat to Rs. 85,000+ for a large bungalow with full packing. The exact cost depends on home size, distance, floor level, and packing requirements. Contact us for a free quote specific to your move."
    },
    {
      q: "How many days in advance should I book packers and movers in Lahore?",
      a: "We recommend booking at least 2 to 3 days in advance for local Lahore shifts, and 5 to 7 days ahead for intercity moves. Month-end and weekend dates fill up quickly — earlier is always better."
    },
    {
      q: "Do you provide packing materials, or do I need to arrange them?",
      a: "We bring all packing materials — boxes, bubble wrap, stretch film, furniture blankets, tape, and foam padding — at no extra cost when you book a full packing service."
    },
    {
      q: "Can you shift from Lahore to another country?",
      a: "Yes. Our international moving services cover door-to-door relocation from Lahore to 100+ countries — including UAE, UK, Canada, USA, Australia, and Saudi Arabia — with full sea or air freight, customs clearance, and destination delivery."
    },
    {
      q: "Is my furniture safe during the move?",
      a: "All furniture is wrapped in protective blankets and stretch film before loading. Large pieces are dismantled to prevent damage. All consignments are covered by transit insurance."
    },
    {
      q: "Do you offer same-day shifting in Lahore?",
      a: "Subject to availability, same-day shifts can be arranged within Lahore. Contact us early in the morning to check same-day availability."
    },
    {
      q: "Can you move a piano or other special items in Lahore?",
      a: "Yes. We have experience moving pianos, heavy safes, antiques, and oversized items requiring special equipment. These are quoted separately based on the specific requirements."
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
        "@id": "https://bestintlmovers.com/packers-and-movers-lahore#service",
        "name": "Packers and Movers in Lahore – Professional House & Office Shifting Services",
        "serviceType": "Moving and Packing Services",
        "description": "Professional packers and movers in Lahore for house & office shifting. Serving DHA, Bahria Town, Gulberg, Johar Town & all areas.",
        "url": "https://bestintlmovers.com/packers-and-movers-lahore",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Place", "name": "Lahore, Punjab, Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Packers and Movers Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Shifting Lahore" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Shifting Lahore" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Packing Lahore" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Moving Lahore" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "International Moving Lahore" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storage Solutions Lahore" } }
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
        "name": "Packers and Movers Lahore", 
        "item": "https://bestintlmovers.com/packers-and-movers-lahore" 
      }
    ]
  };
}

const PackersMoversLahore = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Packers and Movers in Lahore – Safe, Fast & Affordable",
    description: "Professional packers and movers in Lahore for house & office shifting. Serving DHA, Bahria Town, Gulberg, Johar Town & all areas. FREE quote – 0300-9130211",
    keywords: "packers and movers in lahore, movers and packers lahore, house shifting lahore, home shifting services lahore, moving company lahore, packers movers lahore charges, best packers movers lahore",
    canonicalUrl: "https://bestintlmovers.com/packers-and-movers-lahore"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/packers-and-movers-lahore"
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
              <Package className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Professional Moving Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Packers and Movers in Lahore – Professional House Shifting & Relocation Services
            </h1>
            
            <img 
              src={serviceData.heroImg} 
              alt="Professional movers handling furniture and cartons in Lahore" 
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
                Lahore is Pakistan's most dynamic city — growing faster, moving more, and relocating more families and businesses every single year. Whether you are shifting your home from DHA to Bahria Town, relocating your office from Gulberg to Johar Town, or moving your entire household to another city or country, finding reliable <strong className="text-gold">packers and movers in Lahore</strong> who can handle every detail professionally is what separates a smooth move from a stressful one.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we bring 15+ years of professional moving experience to every shift in Lahore. From single-bedroom apartments to large family homes and corporate offices — our trained team handles packing, loading, transportation, and unpacking with complete care, transparent pricing, and zero damage tolerance.
              </p>

              <p>
                Lahore is a city of contrasts — wide, modern boulevards in DHA and Bahria Town sit alongside the narrow, congested streets of Gulberg Main Boulevard during rush hour, the tight lanes of Model Town's interior blocks, and the high-rise residential towers of central Lahore where lift availability and floor access create their own set of challenges.
              </p>

              <p>
                An experienced <strong className="text-gold">moving company in Lahore</strong> understands these dynamics. The right vehicle for a DHA Phase 6 bungalow move is completely different from what you need for a fifth-floor apartment shift in Johar Town. Route planning, timing, and crew size all depend on area-specific knowledge that only comes from years of operating across the city.
              </p>

              <p>
                This is exactly what our Lahore team brings to every job — local expertise combined with the professional systems of a full-scale international moving company.
              </p>
            </motion.div>

            {/* H2: Why Home Shifting in Lahore */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Home Shifting in Lahore Is More Complex Than It Looks
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-6 border border-navy-light">
                <p className="text-foreground leading-relaxed">
                  Lahore is a city of contrasts — wide, modern boulevards in DHA and Bahria Town sit alongside the narrow, congested streets of Gulberg Main Boulevard during rush hour, the tight lanes of Model Town's interior blocks, and the high-rise residential towers of central Lahore where lift availability and floor access create their own set of challenges.
                </p>
                <p className="text-foreground mt-4 leading-relaxed">
                  An experienced moving company in Lahore understands these dynamics. The right vehicle for a DHA Phase 6 bungalow move is completely different from what you need for a fifth-floor apartment shift in Johar Town. Route planning, timing, and crew size all depend on area-specific knowledge that only comes from years of operating across the city.
                </p>
                <p className="text-foreground mt-4 leading-relaxed">
                  This is exactly what our Lahore team brings to every job — local expertise combined with the professional systems of a full-scale international moving company.
                </p>
              </div>
            </motion.div>

            {/* H2: Our Complete Packers and Movers Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Complete Packers and Movers Services in Lahore
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Home, title: "House Shifting in Lahore", desc: "Complete residential relocation services from start to finish." },
                  { icon: Package, title: "Professional Packing Service", desc: "Export-grade materials selected specifically for each item type." },
                  { icon: Truck, title: "Furniture Dismantling & Reassembly", desc: "Large furniture pieces professionally dismantled and reassembled." },
                  { icon: Building, title: "Office and Commercial Shifting", desc: "Minimal operational downtime with after-hours options." },
                  { icon: MapPin, title: "Intercity Shifting from Lahore", desc: "Lahore to Islamabad, Karachi, Peshawar, Multan, Faisalabad." },
                  { icon: Globe, title: "International Moving from Lahore", desc: "Door-to-door relocation to 100+ countries worldwide." },
                  { icon: Building, title: "Secure Storage in Lahore", desc: "Climate-controlled storage with 24/7 monitoring." },
                  { icon: ShieldCheck, title: "Transit Insurance", desc: "Full coverage for all belongings during transport." },
                  { icon: Users, title: "Experienced & Verified Team", desc: "Professional background-checked moving staff." },
                  { icon: CheckCircle2, title: "Transparent Pricing", desc: "Written quotes with no hidden charges." }
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

            {/* H2: Areas We Cover in Lahore */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Areas We Cover in Lahore
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-8 border border-navy-light">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Premium Residential Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• DHA Lahore — Phase 1 through Phase 11</li>
                      <li>• Bahria Town Lahore — All sectors</li>
                      <li>• Askari Housing — Askari 10, 11</li>
                      <li>• Lake City</li>
                      <li>• Wapda Town</li>
                      <li>• Valencia Town</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Central Lahore Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Gulberg — All blocks (1 through 5)</li>
                      <li>• Model Town — All blocks</li>
                      <li>• Garden Town</li>
                      <li>• Johar Town — All phases</li>
                      <li>• Faisal Town</li>
                      <li>• Iqbal Town</li>
                      <li>• Township</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Other Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lahore Cantt</li>
                      <li>• Shadman</li>
                      <li>• Samanabad</li>
                      <li>• Allama Iqbal Town</li>
                      <li>• Raiwind Road</li>
                      <li>• Bedian Road</li>
                      <li>• Ferozepur Road</li>
                    </ul>
                  </div>
                </div>
                <p className="text-foreground mt-6 leading-relaxed">
                  No matter which area of Lahore you are moving from or to — our team knows the routes, access conditions, and logistics requirements.
                </p>
              </div>
            </motion.div>

            {/* H2: Packers and Movers Charges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Packers and Movers Charges in Lahore — Transparent Pricing
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  One of the most searched questions in Lahore's moving market is: <strong className="text-gold">"Packers and movers Lahore charges kitni hain?"</strong> We believe in full transparency — no hidden costs, no surprise additions on delivery day.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Estimated Local Shifting Charges in Lahore (2025)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-gold font-semibold">Home Size</th>
                            <th className="pb-3 text-gold font-semibold">Estimated Cost (Full Service)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">1 Bedroom flat / apartment</td>
                            <td className="py-3 text-gold font-bold">Rs. 12,000 – 22,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">2 Bedroom house</td>
                            <td className="py-3 text-gold font-bold">Rs. 20,000 – 35,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">3 Bedroom house</td>
                            <td className="py-3 text-gold font-bold">Rs. 32,000 – 55,000</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-foreground">4 Bedroom bungalow</td>
                            <td className="py-3 text-gold font-bold">Rs. 50,000 – 85,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Intercity Shifting from Lahore (Estimated)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-gold font-semibold">Route</th>
                            <th className="pb-3 text-gold font-semibold">Estimated Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">Lahore → Islamabad / Rawalpindi</td>
                            <td className="py-3 text-gold font-bold">Rs. 20,000 – 45,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">Lahore → Karachi</td>
                            <td className="py-3 text-gold font-bold">Rs. 65,000 – 120,000</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 text-foreground">Lahore → Peshawar</td>
                            <td className="py-3 text-gold font-bold">Rs. 25,000 – 50,000</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-foreground">Lahore → Multan</td>
                            <td className="py-3 text-gold font-bold">Rs. 18,000 – 35,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gold/30 backdrop-blur-sm rounded-lg border border-gold/40">
                  <p className="text-foreground font-medium text-lg">
                    <strong className="text-gold">Important:</strong> These are estimated ranges. Your exact quote depends on a proper survey of your belongings. Call us for a <strong className="text-gold">free, no-obligation quote within 30 minutes</strong> — 0300-9130211.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Moving Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                How Our Moving Process Works in Lahore
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "Call or WhatsApp for Free Quote", desc: "Share pickup address, destination, rooms, and move date." },
                  { step: "2", title: "Free Home Survey", desc: "In-home or video survey for precise written quote." },
                  { step: "3", title: "Packing Day", desc: "Professional packers arrive with all materials." },
                  { step: "4", title: "Loading", desc: "Proper stacking techniques with protection." },
                  { step: "5", title: "Transportation", desc: "Efficient route planning and GPS tracking." },
                  { step: "6", title: "Unloading, Unpacking & Setup", desc: "Room-by-room arrangement and furniture assembly." },
                  { step: "7", title: "Final Walkthrough", desc: "Complete check and sign-off on satisfaction." }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-4 bg-navy-light/30 rounded-xl border border-navy-light">
                    <div className="text-gold text-2xl font-bold mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                    {idx < 6 && (
                      <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gold/50" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: What Makes Us Different */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                What Makes Us Different from Other Packers and Movers in Lahore
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "International Moving Capability", desc: "Full-service international moving from Lahore to 100+ countries." },
                  { icon: CheckCircle2, title: "Transparent Written Quotes", desc: "Itemised quotes with no hidden costs or surprises." },
                  { icon: ShieldCheck, title: "Full Transit Insurance", desc: "Every consignment covered by comprehensive insurance." },
                  { icon: Users, title: "Professionally Trained Packers", desc: "Trained in professional moving techniques, not casual labour." },
                  { icon: Star, title: "Real Reviews, Real Accountability", desc: "5,000+ successful relocations with verifiable results." },
                  { icon: Award, title: "15+ Years Experience", desc: "Established company with proven track record." }
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
                Customer Reviews — Packers and Movers Lahore
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "We shifted our 3-bedroom house in DHA Phase 5 to Bahria Town. The team was professional, on time, and every single item arrived without damage. Pricing was exactly as quoted."
                  </p>
                  <p className="text-foreground font-semibold">— Zara Ahmed, DHA Lahore</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Moved our entire office from Gulberg to Johar Town in a single day. They handled IT equipment carefully, all furniture was reassembled perfectly. Zero disruption to our operations."
                  </p>
                  <p className="text-foreground font-semibold">— Imran Malik, Gulberg Lahore</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "We used Best International Movers for our shift from Lahore to Islamabad. Everything was packed professionally, delivered on time, and unpacked at the new house. Highly recommended."
                  </p>
                  <p className="text-foreground font-semibold">— Nadia Hussain, Model Town Lahore</p>
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
                Frequently Asked Questions — Packers and Movers in Lahore
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
                Book Your Move in Lahore — Get a Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you are shifting a flat in Johar Town, relocating a house in DHA, moving an office in Gulberg, or planning an international relocation from Lahore — our team is ready to make it smooth, safe, and stress-free.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-foreground">
                  📞 <span className="text-gold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="text-lg text-foreground">
                  🕐 <span>Monday to Saturday | 8:00 AM – 8:00 PM</span>
                </div>
                <div className="text-lg text-foreground">
                  📍 <span>Serving All Areas of Lahore & Intercity Pakistan</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
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
                  <Link to="/movers-and-packers-in-peshawar" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Package className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Movers and Packers in Peshawar</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Professional moving services in Peshawar</p>
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
                  
                  <Link to="/services/secure-storage" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Building className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Secure Storage Pakistan</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Climate-controlled storage facilities</p>
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

export default PackersMoversLahore;
