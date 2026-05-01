import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "container-shipping-pakistan",
  icon: Container,
  title: "Container Shipping Pakistan – FCL & LCL Sea Freight Services Worldwide",
  subheading: "FCL & LCL Sea Freight Worldwide",
  desc: "Professional container shipping from Pakistan to UAE, UK, Canada, USA & worldwide. FCL & LCL sea freight with customs clearance. Get a free quote – 0300-9130211",
  featuresList: [
    "FCL (Full Container Load) — 20ft, 40ft, 40ft High Cube containers from Karachi & Port Qasim",
    "LCL (Less than Container Load) — Cost-effective consolidation for smaller shipments",
    "Export packing & container loading — Professional export-grade packing materials",
    "Complete customs clearance — Export documentation, Bills of Lading, Certificates of Origin",
    "Door-to-port & port-to-door services — Full inland transportation management",
    "Real-time container tracking — Monitor your shipment throughout the voyage",
    "Transit insurance coverage — Comprehensive insurance for all container shipments",
    "Destination agent network — 100+ countries with local delivery partners",
    "Vehicle shipping in containers — Secure enclosed vehicle transport worldwide",
    "Commercial & household goods — Complete solutions for businesses and individuals"
  ],
  heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "China", "Singapore", "Afghanistan", "Iran"
  ],
  faqs: [
    {
      q: "What is the cheapest way to ship goods from Pakistan internationally?",
      a: "LCL sea freight is the most economical option for small volumes (under 10 CBM). For larger shipments, FCL sea freight offers the best value per cubic metre."
    },
    {
      q: "How long does container shipping from Pakistan to the UK take?",
      a: "Karachi to UK sea transit is approximately 20 to 25 days, plus 2 to 5 days for customs clearance at each end."
    },
    {
      q: "Can I ship my car in a container from Pakistan?",
      a: "Yes. Vehicles are commonly shipped in 20ft containers from Pakistan. We manage the full process including export clearance, shipping, and destination import."
    },
    {
      q: "What documents are required for container shipping from Pakistan?",
      a: "Commercial invoice, packing list, bill of lading, certificate of origin, and any product-specific export permits. Our team prepares all documentation."
    },
    {
      q: "How do I calculate import duty on my container shipment?",
      a: "Use our Pakistan customs duty calculator to estimate applicable import duties at the destination. Our team can also prepare a detailed landed cost breakdown."
    },
    {
      q: "Do you offer door-to-door container shipping from Pakistan?",
      a: "Yes. We manage the complete process — from packing at your premises in Rawalpindi, Islamabad, Lahore, or Peshawar, to delivery at your new address anywhere in the world."
    },
    {
      q: "What is the difference between FCL and LCL container shipping?",
      a: "FCL (Full Container Load) means you book the entire container exclusively for your shipment. LCL (Less than Container Load) means your goods share space in a container with other shippers' cargo."
    },
    {
      q: "How much does it cost to ship a 20ft container from Pakistan?",
      a: "Rates vary by destination. Karachi to Dubai: USD 300-600, Karachi to UK: USD 800-1,500, Karachi to Canada: USD 1,200-2,200. Contact us for current rates."
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
        "@id": "https://bestintlmovers.com/container-shipping-pakistan#service",
        "name": "Container Shipping Pakistan – FCL & LCL Sea Freight Worldwide",
        "serviceType": "Container Shipping Services",
        "description": "Professional container shipping from Pakistan to UAE, UK, Canada, USA & worldwide. FCL & LCL sea freight with customs clearance.",
        "url": "https://bestintlmovers.com/container-shipping-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Container Shipping Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FCL Container Shipping Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LCL Container Shipping Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "20ft Container Shipping Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "40ft Container Shipping Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Container Shipping Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door to Door Container Shipping Pakistan" } }
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
        "name": "Container Shipping Pakistan", 
        "item": "https://bestintlmovers.com/container-shipping-pakistan" 
      }
    ]
  };
}

const ContainerShippingPakistan = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Container Shipping Pakistan – FCL & LCL Sea Freight Worldwide",
    description: "Professional container shipping from Pakistan to UAE, UK, Canada, USA & worldwide. FCL & LCL sea freight with customs clearance. Get a free quote – 0300-9130211",
    keywords: "container shipping pakistan, FCL shipping pakistan, LCL shipping pakistan, sea freight pakistan, container shipping from karachi, ocean freight pakistan",
    canonicalUrl: "https://bestintlmovers.com/container-shipping-pakistan"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/container-shipping-pakistan"
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
              <Container className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">FCL & LCL Sea Freight Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Container Shipping Pakistan – FCL & LCL Sea Freight to Worldwide Destinations
            </h1>
            
            <img 
              src="/images/container.jpg" 
              alt="Container Shipping Pakistan - FCL & LCL Sea Freight Services" 
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
                Get Free Container Shipping Quote
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Shipping Team
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
                Container shipping remains the most cost-effective method for transporting large volumes of goods internationally from Pakistan. Whether you are a business exporting commercial products, an overseas Pakistani shipping household belongings, or an individual relocating abroad with a full household, sea freight via container is the most economical choice for non-urgent, high-volume shipments.
              </p>

              <p>
                At <strong className="text-gold">Best International Movers & Logistics</strong>, we provide complete container shipping services from Pakistan — including FCL (Full Container Load), LCL (Less than Container Load), customs clearance, documentation, and door-to-door delivery to over 100 countries worldwide.
              </p>

              <p>
                Container shipping involves transporting goods in standardised steel containers aboard cargo vessels. Containers are loaded at the origin port, sealed, shipped by sea, and unloaded at the destination port. This method is widely used for international trade and household relocations because it offers cost efficiency, security, flexibility, and global reach.
              </p>

              <p>
                We provide container shipping from Pakistan to all major global destinations including UAE, UK, Canada, USA, Saudi Arabia, Australia, and Germany. Our{" "}
                <Link to="/services/freight-forwarding-services" className="text-gold hover:underline">
                  freight forwarding services
                </Link>
                {" "}ensure complete logistics management from origin to destination.
              </p>

              <p>
                Use our free{" "}
                <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                  custom duty calculator
                </Link>
                {" "}to estimate import duties at your destination. For complete international relocation services, explore our{" "}
                <Link to="/services/international-moving" className="text-gold hover:underline">
                  international moving services
                </Link>
                {" "}from Pakistan.
              </p>
            </motion.div>

            {/* H2: FCL vs LCL */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                FCL vs LCL Container Shipping from Pakistan
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 border border-red-400">
                  <div className="flex items-center mb-4">
                    <Container className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-xl font-semibold text-white">FCL – Full Container Load</h3>
                  </div>
                  <p className="text-red-50 mb-4">
                    You book the entire container exclusively for your shipment. Best for large household moves, full office relocations, or bulk commercial exports.
                  </p>
                  <div className="space-y-2 text-red-100">
                    <div>• Shipment volume exceeds 12-15 CBM</div>
                    <div>• Guaranteed loading and departure dates</div>
                    <div>• Maximum security with sealed container</div>
                    <div>• Lower cost-per-unit at high volumes</div>
                  </div>
                  <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <p className="text-white font-medium">
                      Available: 20ft Standard (25-28 CBM), 40ft Standard (55-58 CBM), 40ft High Cube (68-72 CBM)
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 border border-yellow-400">
                  <div className="flex items-center mb-4">
                    <Package className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-xl font-semibold text-white">LCL – Less than Container Load</h3>
                  </div>
                  <p className="text-yellow-50 mb-4">
                    Your goods share space in a container with other shippers' cargo. Best for smaller volumes that do not justify booking a full container.
                  </p>
                  <div className="space-y-2 text-yellow-100">
                    <div>• Shipment volume under 10-12 CBM</div>
                    <div>• Ship without waiting for full volume</div>
                    <div>• Cost savings for smaller loads</div>
                    <div>• Consolidation at Container Freight Station</div>
                  </div>
                  <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <p className="text-white font-medium">
                      Process: Goods consolidated at CFS, loaded with other cargo, de-consolidated at destination
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* H2: Container Shipping Routes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Container Shipping Routes from Pakistan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { route: "Pakistan to UAE", time: "5-10 days", port: "Jebel Ali" },
                  { route: "Pakistan to UK", time: "20-25 days", port: "Felixstowe" },
                  { route: "Pakistan to Canada", time: "28-35 days", port: "Vancouver" },
                  { route: "Pakistan to USA", time: "28-40 days", port: "Los Angeles" },
                  { route: "Pakistan to Saudi Arabia", time: "8-14 days", port: "Jeddah" },
                  { route: "Pakistan to Australia", time: "25-35 days", port: "Melbourne" }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-4 border border-border">
                    <div className="flex items-center mb-2">
                      <Ship className="text-gold mr-2" size={20} />
                      <h3 className="font-semibold text-foreground">{item.route}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Transit: {item.time} • Port: {item.port}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Container Shipping Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Container Shipping Process – Step by Step
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Free Survey & Quote", desc: "Share shipment details for complete written quote" },
                  { step: "2", title: "Packing & Inventory", desc: "Professional export packing with full inventory" },
                  { step: "3", title: "Container Loading", desc: "FCL direct loading or LCL consolidation" },
                  { step: "4", title: "Export Customs", desc: "All Pakistan export documentation handled" },
                  { step: "5", title: "Sea Freight", desc: "Container loaded and tracked throughout voyage" },
                  { step: "6", title: "Delivery", desc: "Destination customs and final delivery" }
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

            {/* H2: Container Shipping Services We Offer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Container Shipping Services We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceData.featuresList.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Container Shipping Rates */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Container Shipping Rates from Pakistan
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  Container shipping rates from Pakistan depend on several variables including container size, destination, shipping line, season, and additional services.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Route</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">20ft Container (USD)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">40ft Container (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Karachi → Dubai</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">300 - 600</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">500 - 900</td>
                      </tr>
                      <tr className="bg-navy-light/10">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Karachi → UK</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">800 - 1,500</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">1,200 - 2,200</td>
                      </tr>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Karachi → Canada</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">1,200 - 2,200</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">1,800 - 3,200</td>
                      </tr>
                      <tr className="bg-navy-light/10">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Karachi → Australia</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">1,000 - 1,800</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">1,500 - 2,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  *Rates fluctuate based on global shipping market conditions. Contact us for current rates.
                </p>
              </div>
            </motion.div>

            {/* H2: Pakistan's Major Shipping Ports */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Pakistan's Major Shipping Ports
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 border border-red-400">
                  <div className="flex items-center mb-4">
                    <Anchor className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-xl font-semibold text-white">Karachi Port</h3>
                  </div>
                  <p className="text-red-50">
                    Pakistan's largest and busiest seaport, handling approximately 60% of the country's international trade. Connected to all major global shipping lines including Maersk, MSC, CMA CGM, and Hapag-Lloyd.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 border border-yellow-400">
                  <div className="flex items-center mb-4">
                    <Building className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-xl font-semibold text-white">Port Qasim</h3>
                  </div>
                  <p className="text-yellow-50">
                    Pakistan's second major port, located 35km east of Karachi. Handles container cargo, bulk goods, and liquid cargo. Often less congested than Karachi Port.
                  </p>
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
                Frequently Asked Questions – Container Shipping Pakistan
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
                Get a Container Shipping Quote Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From FCL containers to LCL shipments — Best International Movers handles every container with speed, precision, and full documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Container size={18} />
                  Get Free Container Shipping Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Shipping Team
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

export default ContainerShippingPakistan;
