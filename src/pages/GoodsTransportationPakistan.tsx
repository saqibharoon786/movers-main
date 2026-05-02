import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "goods-transportation-pakistan",
  icon: Truck,
  title: "Goods Transportation Pakistan – Reliable Nationwide Road Freight & Cargo Services",
  subheading: "Reliable Road Freight & Cargo Services Nationwide",
  desc: "Reliable goods transportation across Pakistan. Door-to-door road freight from Rawalpindi, Islamabad, Lahore, Karachi & Peshawar. Get a FREE quote – 0300-9130211",
  featuresList: [
    "Intercity Road Freight – All Major Cities",
    "Household Goods Transportation – Complete home shifting between cities",
    "Commercial & Business Cargo – Retail merchandise, industrial goods, construction materials",
    "Heavy Equipment & Machinery Transport – Specialized vehicles for oversized cargo",
    "Express Goods Delivery – Same-day and next-day priority services",
    "Warehousing & Distribution – Complete supply chain solutions",
    "Last-Mile Delivery – E-commerce and retail delivery networks",
    "GPS-Tracked Fleet – Real-time tracking for all consignments",
    "Transit Insurance – Full coverage for all goods during transport",
    "Transparent Pricing – Written quotes with no hidden charges"
  ],
  heroImg: "https://bestintlmovers.com/images/goods-transportation.jpg",
  cities: [
    "Rawalpindi", "Islamabad", "Lahore", "Karachi", "Peshawar", "Multan",
    "Faisalabad", "Sialkot", "Gujranwala", "Bahawalpur", "Quetta", "Abbottabad"
  ],
  faqs: [
    {
      q: "What is the transit time for goods transportation from Islamabad to Karachi?",
      a: "Standard road freight from Islamabad to Karachi takes approximately 2 to 3 days by truck. Express services can complete this route in 24 to 36 hours."
    },
    {
      q: "Do you provide goods transportation from Rawalpindi to all cities in Pakistan?",
      a: "Yes. We provide intercity goods transportation from Rawalpindi and Islamabad to all major cities — including Lahore, Karachi, Peshawar, Multan, Faisalabad, Sialkot, Quetta, and Bahawalpur."
    },
    {
      q: "Is my cargo insured during transportation?",
      a: "Yes. All consignments are covered by transit insurance throughout the journey. Any damage or loss during transportation is fully compensated."
    },
    {
      q: "Can you transport fragile items like crockery, glass, and electronics?",
      a: "Yes. We provide professional packing using bubble wrap, foam padding, and reinforced cartons for all fragile goods. Our loading team uses careful stacking techniques to prevent damage during transit."
    },
    {
      q: "Do you offer partial load (LTL) services, or only full truck loads?",
      a: "We offer both FTL (Full Truck Load) and LTL (Less than Truck Load) services. For smaller consignments, we consolidate with other cargo on the same route — reducing your cost while maintaining the same service standards."
    },
    {
      q: "Do you provide goods transportation for household items between cities?",
      a: "Yes. Our household goods transportation service is available between all cities. This includes professional packing, careful loading, intercity transport, and unloading at your new address."
    },
    {
      q: "Can you handle heavy machinery or oversized cargo?",
      a: "Yes. Our heavy transport team provides specialised low-bed trailer, flatbed, and heavy haulage services for industrial machinery, equipment, and oversized loads with route surveys and engineering support."
    },
    {
      q: "How do I book goods transportation with Best International Movers?",
      a: "Simply call or WhatsApp us on 0300-9130211 with your cargo details, pickup location, destination, and required date. Our team will provide a quote and confirm your booking within the hour."
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
        "@id": "https://bestintlmovers.com/goods-transportation-pakistan#service",
        "name": "Goods Transportation Pakistan – Reliable Nationwide Road Freight & Cargo Services",
        "serviceType": "Road Freight and Cargo Transportation",
        "description": "Reliable goods transportation across Pakistan. Door-to-door road freight from Rawalpindi, Islamabad, Lahore, Karachi & Peshawar.",
        "url": "https://bestintlmovers.com/goods-transportation-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Place", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Goods Transportation Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Road Freight" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Household Goods Transportation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial & Business Cargo" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heavy Equipment Transport" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Express Goods Delivery" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehousing & Distribution" } }
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
        "name": "Goods Transportation Pakistan", 
        "item": "https://bestintlmovers.com/goods-transportation-pakistan" 
      }
    ]
  };
}

const GoodsTransportationPakistan = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Goods Transportation Pakistan – Nationwide Road Freight Service",
    description: "Reliable goods transportation across Pakistan. Door-to-door road freight from Rawalpindi, Islamabad, Lahore, Karachi & Peshawar. Get a FREE quote – 0300-9130211",
    keywords: "goods transportation pakistan, goods transport service pakistan, road freight pakistan, cargo transportation pakistan, truck service pakistan, goods transport islamabad, goods transport rawalpindi, domestic freight pakistan",
    canonicalUrl: "https://bestintlmovers.com/goods-transportation-pakistan"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/goods-transportation-pakistan"
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
              <Truck className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Nationwide Road Freight Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Goods Transportation in Pakistan – Reliable Nationwide Road Freight & Cargo Services
            </h1>
            
            <img 
              src="/images/good.png" 
              alt="Goods Transportation Pakistan - Reliable Road Freight & Cargo Services" 
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
                Get Free Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Transport Team
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
                Moving goods from one city to another in Pakistan — whether it is household items, commercial cargo, industrial equipment, or retail merchandise — requires a transportation partner you can trust with your timeline, your budget, and the safety of your consignment.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we provide professional goods transportation services across Pakistan — connecting Rawalpindi, Islamabad, Lahore, Karachi, Peshawar, Multan, Faisalabad, and all major cities with reliable, on-time road freight solutions. From a single-room shipment to a full truckload of commercial goods, our fleet and team are equipped to handle every scale of domestic cargo movement.
              </p>

              <p>
                Pakistan's road freight network is one of the largest in Asia — spanning over 260,000 kilometres of roads connecting cities, industrial zones, and border crossings. However, navigating this network efficiently requires local knowledge, the right vehicle for the right cargo, and a team experienced in managing long-distance freight without damage or delay.
              </p>

              <p>
                Common problems businesses and individuals face when using unverified transporters include damaged goods due to improper loading and stacking, delays caused by poor route planning or vehicle breakdowns, hidden charges added after delivery, no accountability when items go missing or arrive damaged, and lack of documentation — no consignment notes, no proof of delivery.
              </p>

              <p>
                A professional goods transportation company eliminates these risks through trained staff, well-maintained vehicles, proper packing materials, written contracts, and transit insurance on every consignment. For complete{" "}
                <Link to="/home-shifting-rawalpindi" className="text-gold hover:underline">
                  home shifting services
                </Link>
                {" "}and{" "}
                <Link to="/packers-and-movers-in-rawalpindi" className="text-gold hover:underline">
                  packers and movers in Rawalpindi
                </Link>
                {" "}we provide comprehensive solutions for all your transportation needs.
              </p>
            </motion.div>

            {/* H2: Why Professional Goods Transportation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Goods Transportation in Pakistan Requires a Professional Approach
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-6 border border-navy-light">
                <p className="text-foreground leading-relaxed">
                  Pakistan's road freight network is one of the largest in Asia — spanning over 260,000 kilometres of roads connecting cities, industrial zones, and border crossings. However, navigating this network efficiently requires local knowledge, the right vehicle for the right cargo, and a team experienced in managing long-distance freight without damage or delay.
                </p>
                <p className="text-foreground mt-4 leading-relaxed">
                  Common problems businesses and individuals face when using unverified transporters include damaged goods due to improper loading and stacking, delays caused by poor route planning or vehicle breakdowns, hidden charges added after delivery, no accountability when items go missing or arrive damaged, and lack of documentation — no consignment notes, no proof of delivery.
                </p>
                <p className="text-foreground mt-4 leading-relaxed">
                  A professional goods transportation company eliminates these risks through trained staff, well-maintained vehicles, proper packing materials, written contracts, and transit insurance on every consignment.
                </p>
              </div>
            </motion.div>

            {/* H2: Our Goods Transportation Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Our Goods Transportation Services in Pakistan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Route, title: "Intercity Road Freight", desc: "All major cities with FTL and LTL services." },
                  { icon: Home, title: "Household Goods Transportation", desc: "Complete home shifting between cities." },
                  { icon: Package, title: "Commercial & Business Cargo", desc: "Retail, industrial, and construction goods." },
                  { icon: Truck, title: "Heavy Equipment Transport", desc: "Specialized vehicles for oversized cargo." },
                  { icon: Clock, title: "Express Goods Delivery", desc: "Same-day and next-day priority services." },
                  { icon: Building, title: "Warehousing & Distribution", desc: "Complete supply chain solutions." },
                  { icon: MapPin, title: "Last-Mile Delivery", desc: "E-commerce and retail delivery networks." },
                  { icon: Globe, title: "GPS-Tracked Fleet", desc: "Real-time tracking for all consignments." },
                  { icon: ShieldCheck, title: "Transit Insurance", desc: "Full coverage for all goods during transport." },
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

            {/* H2: Fleet & Vehicles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Fleet & Vehicles – The Right Vehicle for Every Cargo
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-4 text-gold font-semibold">Vehicle Type</th>
                        <th className="pb-4 text-gold font-semibold">Capacity</th>
                        <th className="pb-4 text-gold font-semibold">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-4 text-foreground font-medium">Mazda / Mini Truck</td>
                        <td className="py-4 text-muted-foreground">500 kg – 1,500 kg</td>
                        <td className="py-4 text-muted-foreground">Small household moves, retail cargo</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 text-foreground font-medium">Shehzore</td>
                        <td className="py-4 text-muted-foreground">1,000 kg – 2,000 kg</td>
                        <td className="py-4 text-muted-foreground">Medium household shifts, shop inventory</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 text-foreground font-medium">Hino / Medium Truck</td>
                        <td className="py-4 text-muted-foreground">3,000 kg – 5,000 kg</td>
                        <td className="py-4 text-muted-foreground">Office relocations, bulk retail goods</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 text-foreground font-medium">Container Truck (20ft)</td>
                        <td className="py-4 text-muted-foreground">5,000 kg – 10,000 kg</td>
                        <td className="py-4 text-muted-foreground">Large commercial shipments, factory goods</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 text-foreground font-medium">Flatbed / Low-Bed Trailer</td>
                        <td className="py-4 text-muted-foreground">20,000 kg+</td>
                        <td className="py-4 text-muted-foreground">Heavy machinery, construction equipment</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-foreground font-medium">Refrigerated Van</td>
                        <td className="py-4 text-muted-foreground">1,000 kg – 5,000 kg</td>
                        <td className="py-4 text-muted-foreground">Perishable goods, pharmaceuticals</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground mt-6 leading-relaxed">
                  Every vehicle in our fleet is regularly maintained, comprehensively insured, and operated by experienced, licensed drivers familiar with inter-city routes across Pakistan.
                </p>
              </div>
            </motion.div>

            {/* H2: Cities We Serve */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Goods Transportation — Cities We Serve
              </h2>
              <div className="bg-gradient-to-r from-navy-light/30 to-navy-light/20 rounded-xl p-8 border border-navy-light">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Rawalpindi & Islamabad</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As our primary base of operations, we provide the most frequent and comprehensive goods transportation services from Rawalpindi and Islamabad to all cities in Pakistan. Multiple daily departures to Lahore, weekly departures to Karachi, and regular services to Peshawar, Multan, and Faisalabad.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Lahore</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pakistan's second-largest city and commercial hub. We provide full FTL and LTL services from Lahore to Karachi, Islamabad, Peshawar, Multan, Sialkot, Gujranwala, and Faisalabad.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Karachi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pakistan's industrial and port capital. Goods transported from Karachi include exports cleared from Karachi Port, FMCG products, electronics, and textiles destined for upcountry markets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Peshawar & KPK</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We provide regular goods transportation from Peshawar to Islamabad, Rawalpindi, Lahore, and other cities — covering residential, commercial, and cross-border trade goods.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Multan, Faisalabad & Other Cities</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our network covers all Tier-2 cities in Pakistan including Multan, Faisalabad, Sialkot, Gujranwala, Bahawalpur, Quetta, and Abbottabad — ensuring your goods reach any destination across the country.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* H2: Pricing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Pricing – Goods Transportation Rates in Pakistan
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Estimated Rate Ranges</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-foreground">Rawalpindi/Islamabad → Lahore (Mazda)</span>
                        <span className="text-gold font-bold">Rs. 6,000 – 12,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Rawalpindi/Islamabad → Lahore (Full Truck)</span>
                        <span className="text-gold font-bold">Rs. 35,000 – 60,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Rawalpindi/Islamabad → Karachi (Full Truck)</span>
                        <span className="text-gold font-bold">Rs. 80,000 – 140,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Lahore → Karachi (Full Truck)</span>
                        <span className="text-gold font-bold">Rs. 75,000 – 130,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">Islamabad → Peshawar (Mazda)</span>
                        <span className="text-gold font-bold">Rs. 5,000 – 10,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Pricing Factors</h3>
                    <div className="space-y-2 text-foreground">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Route / Distance (Short haul vs long haul)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Cargo weight & volume (Per kilogram or per CBM)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Vehicle type required (Mazda, Hino, container truck)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Nature of goods (Standard, fragile, hazardous)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Packing requirement (Self-packed vs professionally packed)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span>Delivery urgency (Standard vs express service)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gold/30 backdrop-blur-sm rounded-lg border border-gold/40">
                  <p className="text-foreground font-medium text-lg">
                    <strong className="text-gold">💡 Get an exact quote in 30 minutes</strong> — call or WhatsApp us with your details and we will provide a clear, itemised price with no hidden charges.
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
                Why Choose Best International Movers for Goods Transportation?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Globe, title: "Nationwide Coverage", desc: "From Karachi to Gilgit, Peshawar to Gwadar — our network covers entire Pakistan." },
                  { icon: Users, title: "Verified & Trained Drivers", desc: "Licensed, route-experienced drivers trained in cargo handling protocols." },
                  { icon: CheckCircle2, title: "No Hidden Charges", desc: "Transparent quotes with fuel surcharges, toll charges included upfront." },
                  { icon: MapPin, title: "GPS-Tracked Fleet", desc: "All vehicles equipped with GPS tracking for real-time location updates." },
                  { icon: ShieldCheck, title: "Transit Insurance Included", desc: "Full transit insurance on every consignment — your goods are protected." },
                  { icon: Clock, title: "Flexible Scheduling", desc: "Fixed departure schedules and flexible pickup times including weekends." }
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

            {/* H2: FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions – Goods Transportation Pakistan
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
                Book Goods Transportation Across Pakistan – Get Your Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you are moving household goods between cities, shipping commercial cargo to a retail network, or transporting industrial equipment to a new facility — our team is ready to deliver.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold text-foreground">
                  📞 <span className="text-gold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="text-lg text-foreground">
                  🕐 <span>Available: Monday to Saturday | 8:00 AM – 8:00 PM</span>
                </div>
                <div className="text-lg text-foreground">
                  📍 <span>Offices: Rawalpindi | Islamabad | Lahore | Peshawar</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Truck size={18} />
                  Get Free Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Transport Team
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
                      <p className="text-muted-foreground text-sm">Complete residential moving services</p>
                      <div className="mt-2 flex items-center text-gold font-semibold text-sm">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/packers-and-movers-in-rawalpindi" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Package className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Packers & Movers Rawalpindi</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Professional packing and moving services</p>
                      <div className="mt-2 flex items-center text-gold font-semibold text-sm">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/container-shipping-pakistan" className="group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                      <div className="flex items-center mb-2">
                        <Container className="text-gold mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-foreground">Container Shipping Pakistan</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">FCL & LCL sea freight services worldwide</p>
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

export default GoodsTransportationPakistan;
