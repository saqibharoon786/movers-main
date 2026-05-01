import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "home-shifting-rawalpindi",
  icon: Home,
  title: "Home Shifting Rawalpindi – Safe & Affordable Packers & Movers",
  subheading: "Professional Packers & Movers | Fast, Safe & Affordable",
  desc: "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation. Get a FREE quote today – 0300-9130211",
  featuresList: [
    "Professional packing service — High-quality materials for furniture, appliances, and fragile items",
    "Furniture dismantling & reassembly — Beds, wardrobes, dining tables fully handled",
    "Careful loading & unloading — Strategic stacking to prevent damage during transit",
    "Safe transportation — Well-maintained fleet from mini trucks to large cargo vans",
    "Unpacking & room setup — Organized placement by room for easy settling",
    "Secure storage options — Short-term and long-term storage facilities available",
    "Local Rawalpindi expertise — Knowledge of all areas, roads, and housing societies",
    "Transparent pricing — No hidden charges, clear itemised quotes",
    "Insurance coverage — All belongings covered by transit insurance",
    "Trained & verified staff — Background-checked professional moving team"
  ],
  heroImg: "https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&q=80&w=1600",
  countries: [
    "Bahria Town Rawalpindi", "DHA Rawalpindi", "Askari Housing", "Satellite Town", 
    "Saddar Rawalpindi", "Westridge", "Chaklala", "Morgah Town", 
    "Gulraiz Housing Society", "Rawalpindi Cantt", "Pothohar Town", "Adyala Road"
  ],
  faqs: [
    {
      q: "How long does a home shift in Rawalpindi typically take?",
      a: "A 2-bedroom local shift in Rawalpindi is usually completed within 4 to 8 hours, depending on floor level, volume of items, and distance."
    },
    {
      q: "Do you provide shifting services outside Rawalpindi?",
      a: "Yes. We offer intercity shifting services to Islamabad, Lahore, Karachi, Multan, Peshawar, and all major cities across Pakistan."
    },
    {
      q: "Do I need to arrange packing materials myself?",
      a: "No. Our team brings all packing materials — boxes, bubble wrap, stretch film, packing tape — at no additional cost when you book a full packing service."
    },
    {
      q: "Will my fragile items like crockery and electronics be safe?",
      a: "Absolutely. Fragile items receive special double-layer protective packing. Our damage rate is extremely low and all items are covered by transit insurance."
    },
    {
      q: "Is same-day shifting available?",
      a: "Yes, subject to availability. Contact us as early as possible to confirm a same-day booking."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 2 to 3 days in advance, especially for weekend and month-end moves which tend to be busier."
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
        "@id": "https://bestintlmovers.com/home-shifting-rawalpindi#service",
        "name": "Home Shifting Services in Rawalpindi – Professional Packers & Movers",
        "serviceType": "Home Shifting Services",
        "description": "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation.",
        "url": "https://bestintlmovers.com/home-shifting-rawalpindi",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "City", "name": "Rawalpindi" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Home Shifting Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Packing Rawalpindi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Dismantling Rawalpindi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Home Shifting Rawalpindi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Home Moving Rawalpindi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storage Solutions Rawalpindi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Moving Rawalpindi" } }
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
        "name": "Home Shifting Rawalpindi", 
        "item": "https://bestintlmovers.com/home-shifting-rawalpindi" 
      }
    ]
  };
}

const HomeShiftingRawalpindi = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Home Shifting Rawalpindi – Safe & Affordable Packers & Movers",
    description: "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation. Get a FREE quote today – 0300-9130211",
    keywords: "home shifting rawalpindi, packers and movers rawalpindi, house shifting rawalpindi, home shifting services in rawalpindi, movers and packers rawalpindi, home shifting company rawalpindi",
    canonicalUrl: "https://bestintlmovers.com/home-shifting-rawalpindi"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/home-shifting-rawalpindi"
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
              <span className="text-gold text-sm font-medium">Professional Packers & Movers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Home Shifting Rawalpindi – Professional Packers & Movers | Fast, Safe & Affordable
            </h1>
            
            <img 
              src="/images/homeshifting.png" 
              alt="Professional home shifting team in Rawalpindi packing furniture" 
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
                Get Free Home Shifting Quote
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
                Planning to shift your home in Rawalpindi? Moving to a new house is one of the most demanding tasks a family can face — packing furniture, protecting fragile items, arranging transport, and setting everything up in a new place takes time, effort, and careful planning. Doing it all alone often leads to damaged belongings, wasted time, and unnecessary stress.
              </p>

              <p>
                Our <strong className="text-gold">home shifting services in Rawalpindi</strong> are designed to take that burden off your shoulders. From your first call to the final item placed in your new home — our professional team handles everything safely, efficiently, and at a price that fits your budget.
              </p>

              <p>
                Rawalpindi is a city of diverse neighbourhoods — each with its own road layout, traffic patterns, and access conditions. Areas like Saddar, Satellite Town, Bahria Town, Askari, DHA, Westridge, and Chaklala all present unique challenges for moving teams. Narrow streets, busy commercial zones, and restricted vehicle access in certain sectors make home shifting far more complex than it appears.
              </p>

              <p>
                That is exactly why hiring an <strong className="text-gold">experienced home shifting company in Rawalpindi</strong> makes a real difference — a team that knows the city, uses the right vehicles, and has the skills to handle every type of move without damage or delay.
              </p>

              <p>
                For complete{" "}
                <Link to="/packers-and-movers-rawalpindi" className="text-gold hover:underline">
                  packers and movers services
                </Link>
                {" "}in Rawalpindi, our team provides end-to-end solutions including packing, loading, transportation, and unpacking. We also specialize in{" "}
                <Link to="/home-shifting-islamabad" className="text-gold hover:underline">
                  home shifting in Islamabad
                </Link>
                {" "}and intercity moves across Pakistan.
              </p>
            </motion.div>

            {/* H2: Why Home Shifting is Challenging */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Is Home Shifting in Rawalpindi Challenging?
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-6 border border-navy-light">
                <p className="text-foreground leading-relaxed">
                  Rawalpindi is a city of diverse neighbourhoods — each with its own road layout, traffic patterns, and access conditions. Areas like Saddar, Satellite Town, Bahria Town, Askari, DHA, Westridge, and Chaklala all present unique challenges for moving teams. Narrow streets, busy commercial zones, and restricted vehicle access in certain sectors make home shifting far more complex than it appears.
                </p>
                <p className="text-foreground mt-4 leading-relaxed">
                  That is exactly why hiring an <strong className="text-gold">experienced home shifting company in Rawalpindi</strong> makes a real difference — a team that knows the city, uses the right vehicles, and has the skills to handle every type of move without damage or delay.
                </p>
              </div>
            </motion.div>

            {/* H2: Our Home Shifting Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Home Shifting Services in Rawalpindi
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Package, title: "Professional Packing Service", desc: "Our trained packers carefully pack every item using high-quality materials for maximum protection." },
                  { icon: Home, title: "Furniture Dismantling & Reassembly", desc: "Large furniture pieces are professionally dismantled and fully reassembled at your new home." },
                  { icon: Truck, title: "Careful Loading & Unloading", desc: "Every packed item is loaded strategically to prevent shifting or damage during transit." },
                  { icon: ShieldCheck, title: "Safe Transportation", desc: "Well-maintained fleet from mini trucks to large cargo vans for every size of move." },
                  { icon: CheckCircle2, title: "Unpacking & Room Setup", desc: "Items are unpacked and arranged according to your instructions for easy settling." },
                  { icon: Clock, title: "Secure Storage (If Needed)", desc: "Secure short-term and long-term storage facility available if there's a gap between moves." }
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

            {/* H2: Areas We Serve */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Areas We Serve in Rawalpindi
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-8 border border-navy-light">
                <p className="text-foreground mb-6 font-medium text-lg">Our home shifting team operates across all major areas of Rawalpindi, including:</p>
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
                    We also specialise in <strong className="text-gold">Rawalpindi to Islamabad</strong> and <strong className="text-gold">Islamabad to Rawalpindi</strong> shifting — a route our team handles daily with full efficiency.
                  </p>
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
                Home Shifting Charges in Rawalpindi – What to Expect
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground mb-6">
                  One of the first questions most families ask is how much home shifting costs. At Best International Movers, our pricing is fully transparent — no hidden charges, no last-minute surprises.
                </p>
                <p className="text-foreground mb-6 font-medium text-lg">The cost of your move depends on several factors:</p>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Factor</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Home size</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">1-bed, 2-bed, 3-bed apartment or house</td>
                      </tr>
                      <tr className="bg-navy-light/10">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Distance</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Local Rawalpindi or intercity</td>
                      </tr>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Volume of items</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Heavy furniture, appliances, number of rooms</td>
                      </tr>
                      <tr className="bg-navy-light/10">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Floor level</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Ground floor or upper floor (lift or no lift)</td>
                      </tr>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Packing type</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Full packing service or transport only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg p-6 border border-gold/30">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Approximate Price Range:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <span className="text-foreground font-medium">1 Bedroom flat (local Rawalpindi)</span>
                      <span className="text-gold font-bold">Rs. 8,000 – 15,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <span className="text-foreground font-medium">2 Bedroom house (local Rawalpindi)</span>
                      <span className="text-gold font-bold">Rs. 15,000 – 25,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <span className="text-foreground font-medium">3 Bedroom house (local Rawalpindi)</span>
                      <span className="text-gold font-bold">Rs. 25,000 – 45,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <span className="text-foreground font-medium">Rawalpindi to Islamabad shift</span>
                      <span className="text-gold font-bold">Rs. 12,000 – 30,000</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gold/30 backdrop-blur-sm rounded-lg border border-gold/40">
                    <p className="text-foreground font-medium text-lg">
                      <strong className="text-gold">Get a FREE Quote:</strong> Call or WhatsApp us with your current address, new address, and number of rooms — we will provide an exact quote within 30 minutes.
                    </p>
                  </div>
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
                Why Choose Us for Home Shifting in Rawalpindi?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "Trained & Verified Staff", desc: "Every member of our moving team is background-verified and professionally trained." },
                  { icon: CheckCircle2, title: "No Hidden Charges", desc: "The quote you receive is the amount you pay. Full pricing transparency." },
                  { icon: Clock, title: "Punctual & Reliable", desc: "We respect your time. Our team arrives on schedule and completes within agreed timeframe." },
                  { icon: ShieldCheck, title: "Insurance Coverage", desc: "All belongings are covered by transit insurance during the move." },
                  { icon: MapPin, title: "Local Rawalpindi Expertise", desc: "Our team knows every area, road, and housing society in Rawalpindi." },
                  { icon: Package, title: "Complete End-to-End Service", desc: "From the first pack to the final placement — one team, one call." }
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

            {/* H2: Step by Step Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Home Shifting Process – Step by Step
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Free Survey & Quote", desc: "Contact us with your shifting details for clear, itemised quote." },
                  { step: "2", title: "Packing", desc: "Professional packing team arrives and systematically packs every item." },
                  { step: "3", title: "Loading", desc: "Packed items are carefully loaded with strategic stacking." },
                  { step: "4", title: "Transportation", desc: "Safe transportation to your new address with tracking." },
                  { step: "5", title: "Unloading & Placement", desc: "Items are unloaded and placed in correct rooms as per instructions." },
                  { step: "6", title: "Final Check", desc: "Complete walkthrough to ensure everything arrived safely." }
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
                What Our Customers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "We moved from Bahria Town to Askari and the team finished the entire job in under 4 hours. Not a single item was damaged. Excellent service!"
                  </p>
                  <p className="text-foreground font-semibold">— Ali Hassan, Rawalpindi</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "I was hesitant at first but this team made the whole process so easy. I wish I had hired professionals from the start instead of trying to do it myself."
                  </p>
                  <p className="text-foreground font-semibold">— Fatima Malik, Satellite Town</p>
                </div>

                <div className="glass-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "The price they quoted was exactly what I paid — no extras, no surprises. Very professional and trustworthy team. Highly recommended."
                  </p>
                  <p className="text-foreground font-semibold">— Usman Qureshi, DHA Rawalpindi</p>
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
                Frequently Asked Questions – Home Shifting Rawalpindi
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
                Get Your Free Quote – Call Us Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you are moving a single-bedroom flat or a large family home anywhere in Rawalpindi, our team is ready to make your shift smooth, safe, and stress-free.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-foreground">
                  📞 <span className="text-gold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="text-lg text-foreground">
                  🕐 <span>Available: Monday to Saturday | 8:00 AM – 8:00 PM</span>
                </div>
                <div className="text-lg text-foreground">
                  📍 <span>Serving All Areas of Rawalpindi & Islamabad</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Home size={18} />
                  Get Free Home Shifting Quote
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

export default HomeShiftingRawalpindi;
