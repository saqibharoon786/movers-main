import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "movers-and-packers-in-peshawar",
  icon: Package,
  title: "Movers and Packers in Peshawar – Safe & Reliable Shifting",
  subheading: "Professional House Shifting & Relocation Services",
  desc: "Professional movers and packers in Peshawar. Expert house shifting, office relocation & cargo services across KPK. Safe, affordable & on-time. Call 0300-9130211",
  featuresList: [
    "Residential house shifting — Complete home relocation services in Peshawar",
    "Professional packing services — Premium materials for maximum protection",
    "Furniture dismantling & assembly — Beds, wardrobes, dining tables handled",
    "Office relocation services — Minimal business disruption with after-hours options",
    "Intercity moving — Peshawar to Islamabad, Rawalpindi, Lahore, Karachi",
    "International relocation — Air freight, sea freight, customs clearance worldwide",
    "Storage solutions — Secure short-term and long-term storage facilities",
    "Transit insurance — All belongings covered throughout the move",
    "Experienced & verified team — Professional background-checked moving staff",
    "Transparent pricing — Written quotes with no hidden charges"
  ],
  heroImg: "https://bestintlmovers.com/images/peshawar.png",
  countries: [
    "Hayatabad (All Phases)", "University Town", "Saddar", "Cantt",
    "Gulbahar", "Kohat Road", "Warsak Road", "Ring Road",
    "Peshawar City", "Islamabad Highway", "Nowshera Road", "Mardan"
  ],
  faqs: [
    {
      q: "How long does a local house shift in Peshawar take?",
      a: "A standard 2-bedroom local shift in Peshawar is typically completed within 4 to 8 hours, depending on floor level, volume of items, and distance between addresses."
    },
    {
      q: "Do you provide packing materials, or do I need to arrange them?",
      a: "We bring all packing materials — boxes, bubble wrap, stretch film, tape, and foam padding — at no extra cost when you book a full packing service."
    },
    {
      q: "Can you shift from Peshawar to Islamabad or Rawalpindi?",
      a: "Yes. We provide fully managed intercity shifting from Peshawar to Rawalpindi and Islamabad, Lahore, Karachi, and all major cities across Pakistan."
    },
    {
      q: "Are my belongings insured during move?",
      a: "Yes. All items are covered by transit insurance throughout the move. Any damage that occurs during transport is fully compensated."
    },
    {
      q: "Do you handle office relocations in Peshawar?",
      a: "Yes. We specialise in office and commercial shifting with after-hours and weekend options available to minimise disruption to your business."
    },
    {
      q: "Can you arrange international moving from Peshawar?",
      a: "Absolutely. Our international relocation service covers air freight, sea freight, customs clearance, and door-to-door delivery to over 100 countries from KPK."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking 2 to 3 days in advance for local moves, and at least one week ahead for intercity or international relocations."
    }
  ]
};

// Build complete Organization + Service schema - FIXED JSON SYNTAX
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
        "@id": "https://bestintlmovers.com/movers-and-packers-in-peshawar#service",
        "name": "Movers and Packers Services in Peshawar – Professional House Shifting & Relocation",
        "serviceType": "Moving and Packing Services",
        "description": "Professional movers and packers in Peshawar. Expert house shifting, office relocation & cargo services across KPK. Safe, affordable & on-time.",
        "url": "https://bestintlmovers.com/movers-and-packers-in-peshawar",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Place", "name": "Peshawar, KPK and surrounding areas" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Movers and Packers Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Shifting Peshawar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Relocation Peshawar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Moving Peshawar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "International Moving Peshawar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packing Services Peshawar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storage Solutions Peshawar" } }
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
        "name": "Movers and Packers Peshawar", 
        "item": "https://bestintlmovers.com/movers-and-packers-in-peshawar" 
      }
    ]
  };
}

const MoversAndPackersInPeshawar = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Movers and Packers in Peshawar – Safe & Reliable Shifting",
    description: "Professional movers and packers in Peshawar. Expert house shifting, office relocation & cargo services across KPK. Safe, affordable & on-time. Call 0300-9130211",
    keywords: "movers and packers in peshawar, packers movers peshawar, house shifting peshawar, home shifting services peshawar, moving company peshawar, shifting services peshawar, office relocation peshawar, cargo services peshawar",
    canonicalUrl: "https://bestintlmovers.com/movers-and-packers-in-peshawar"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/movers-and-packers-in-peshawar"
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
              Movers and Packers in Peshawar – Professional House Shifting & Relocation Services
            </h1>
            
            <img 
              src="/images/peshawar.png" 
              alt="Professional movers and packers team in Peshawar loading furniture for house shifting" 
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
                Moving to a new home or office in Peshawar is a major undertaking. From packing fragile crockery to dismantling large furniture, transporting through busy city roads, and settling into a completely new space — every step demands time, effort, and expertise. Without a professional team, the risk of damaged belongings, wasted hours, and unnecessary stress is very real.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we provide complete movers and packers services in Peshawar — covering residential house shifting, office relocation, intercity moves, and international relocations from KPK. Our experienced team handles every step with care, so you can focus on your new beginning.
              </p>

              <p>
                Peshawar is one of Pakistan's oldest and most densely populated cities. Navigating areas like Hayatabad, Saddar, University Town, Gulbahar, and Cantt with a fully loaded moving vehicle requires local knowledge and planning. Rush-hour traffic on GT Road, narrow lanes in the old city, and gated community protocols in Hayatabad — these are challenges that an experienced moving team handles as a matter of routine.
              </p>

              <p>
                Attempting a home shift without professional support often results in scratched furniture, broken items, and a move that takes twice as long as expected. Hiring <strong className="text-gold">expert packers and movers in Peshawar</strong> means your belongings are in safe hands from the very first box.
              </p>

              <p>
                For complete{" "}
                <Link to="/home-shifting-rawalpindi" className="text-gold hover:underline">
                  home shifting services
                </Link>
                {" "}in KPK, our team provides end-to-end solutions including packing, loading, transportation, and unpacking. We also specialize in{" "}
                <Link to="/packers-and-movers-islamabad" className="text-gold hover:underline">
                  packers and movers in Islamabad
                </Link>
                {" "}and intercity moves across Pakistan.
              </p>
            </motion.div>

            {/* H2: Why Professional Movers Matter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Professional Movers Matter in Peshawar
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-6 border border-navy-light">
                <p className="text-foreground leading-relaxed">
                  Peshawar is one of Pakistan's oldest and most densely populated cities. Navigating areas like Hayatabad, Saddar, University Town, Gulbahar, and Cantt with a fully loaded moving vehicle requires local knowledge and planning. Rush-hour traffic on GT Road, narrow lanes in the old city, and gated community protocols in Hayatabad — these are challenges that an experienced moving team handles as a matter of routine.
                </p>
                <p className="text-foreground mt-4 leading-relaxed">
                  Attempting a home shift without professional support often results in scratched furniture, broken items, and a move that takes twice as long as expected. Hiring <strong className="text-gold">expert packers and movers in Peshawar</strong> means your belongings are in safe hands from the very first box.
                </p>
              </div>
            </motion.div>

            {/* H2: Our Movers and Packers Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Movers and Packers Services in Peshawar
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Home, title: "Residential House Shifting", desc: "Complete home relocation services from packing to final placement." },
                  { icon: Package, title: "Professional Packing Services", desc: "Premium materials and expert packing for maximum protection." },
                  { icon: Truck, title: "Furniture Dismantling & Assembly", desc: "Large furniture dismantled before loading and reassembled at destination." },
                  { icon: ShieldCheck, title: "Office Relocation Services", desc: "Commercial moving with minimal business disruption." },
                  { icon: MapPin, title: "Intercity Moving", desc: "Peshawar to Islamabad, Rawalpindi, Lahore, Karachi and beyond." },
                  { icon: Globe, title: "International Relocation", desc: "Air freight, sea freight, customs clearance worldwide." },
                  { icon: Building, title: "Storage Solutions", desc: "Secure short-term and long-term storage facilities." },
                  { icon: ShieldCheck, title: "Transit Insurance", desc: "All belongings covered throughout the move." },
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

            {/* H2: Areas We Cover */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Areas We Cover in Peshawar & KPK
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-8 border border-navy-light">
                <p className="text-foreground leading-relaxed mb-6">
                  Our moving services cover all major areas in Peshawar and surrounding KPK regions. We understand local access points, parking constraints, and society protocols in each area:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {serviceData.countries.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                      <MapPin className="text-gold" size={16} />
                      <span className="text-foreground text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gold/20 backdrop-blur-sm rounded-lg border border-gold/30">
                  <p className="text-foreground font-medium text-lg">
                    Moving outside Peshawar? We also serve <strong className="text-gold">Abbottabad, Mardan, Swabi, Charsadda, and Nowshera</strong> with the same professional standards and competitive pricing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Peshawar Moving Costs & Pricing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Peshawar Moving Costs & Pricing
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  Moving costs in Peshawar depend on several factors including volume of goods, floor level, distance, packing requirements, and vehicle type. We provide transparent, written quotations with no hidden charges.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Typical Price Ranges</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-foreground">Studio/1-Bedroom Apartment</span>
                        <span className="text-gold font-bold">PKR 15,000 - 25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">2-Bedroom Apartment</span>
                        <span className="text-gold font-bold">PKR 25,000 - 40,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">3-Bedroom House</span>
                        <span className="text-gold font-bold">PKR 40,000 - 65,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">4+ Bedroom House/Villa</span>
                        <span className="text-gold font-bold">PKR 65,000 - 100,000+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Cost Factors</h3>
                    <div className="space-y-2 text-foreground">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Floor level (higher floors = higher cost)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Parking distance from building</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Volume and weight of items</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Packing requirements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Special items (pianos, safes, etc.)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Distance between locations</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gold/30 backdrop-blur-sm rounded-lg border border-gold/40">
                  <p className="text-foreground font-medium text-lg">
                    <strong className="text-gold">💡 Pro Tip:</strong> Book a free survey for accurate pricing. Our team visits your location, assesses volume and access points, and provides a detailed written quote with no obligations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* H2: Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Choose Best International Movers in Peshawar?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "Experienced & Verified Team", desc: "Every member is professionally trained and background-verified." },
                  { icon: CheckCircle2, title: "Transparent Pricing — No Surprises", desc: "Complete written quote before the move begins." },
                  { icon: Clock, title: "On-Time Arrival & Completion", desc: "We schedule moves with precision and stick to timelines." },
                  { icon: ShieldCheck, title: "Full Transit Insurance", desc: "All items are covered by transit insurance during the move." },
                  { icon: MapPin, title: "Local Knowledge", desc: "Our team knows Peshawar inside out — traffic patterns, building access rules." },
                  { icon: Package, title: "End-to-End Service", desc: "From initial survey to final unpacking, we handle everything." }
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

            {/* H2: Our Moving Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Moving Process — Step by Step
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Free Survey & Quote", desc: "Our team visits your location, assesses volume, checks access points." },
                  { step: "2", title: "Move Planning", desc: "We schedule the move date, assign the right team and vehicle." },
                  { step: "3", title: "Professional Packing", desc: "Our team arrives with all packing materials and packs everything." },
                  { step: "4", title: "Careful Loading", desc: "Items are loaded systematically using proper equipment." },
                  { step: "5", title: "Safe Transportation", desc: "Your belongings are transported using the best route and timing." },
                  { step: "6", title: "Unloading & Placement", desc: "Items are unloaded and placed in designated rooms." }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-4 bg-navy-light/30 rounded-xl border border-navy-light">
                    <div className="text-gold text-2xl font-bold mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                    {idx < 5 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gold/50" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Testimonials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                What Our Peshawar Clients Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Excellent service! The team was professional, punctual, and handled our belongings with great care. Made our house shifting completely stress-free."
                  </p>
                  <p className="text-foreground font-semibold">— Ahmed Khan, Hayatabad</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Moved our office from University Town to a new location. The team worked after hours to minimize disruption. Very impressed with their efficiency."
                  </p>
                  <p className="text-foreground font-semibold">— Sarah Mahmood, University Town</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "International moving from Peshawar to Dubai was handled perfectly. All documentation, customs clearance, and delivery went smoothly. Highly recommend!"
                  </p>
                  <p className="text-foreground font-semibold">— Bilal Hussain, Saddar</p>
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
                Frequently Asked Questions – Movers and Packers Peshawar
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
                Ready to Move in Peshawar?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get a free, no-obligation quote for your move. Our team responds within 2 hours during business hours.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-foreground">
                  📞 <span className="text-gold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="text-lg text-foreground">
                  🕐 <span>Available: Monday to Saturday | 8:00 AM – 8:00 PM</span>
                </div>
                <div className="text-lg text-foreground">
                  📍 <span>Serving All Areas of Peshawar, KPK & Nationwide</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Moving Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Moving Team
                </a>
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

export default MoversAndPackersInPeshawar;
