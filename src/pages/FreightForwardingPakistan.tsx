import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Globe, Package, ShieldCheck, Award, Clock, Users, MapPin, Phone, Plane, Anchor, Calculator, CheckCircle2, Truck, FileText, TrendingUp } from "lucide-react";

const FreightForwardingPakistan = () => {
  // Build comprehensive schema for freight forwarding service
  const buildServiceSchema = () => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
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
        "@id": "https://bestintlmovers.com/freight-forwarding-in-pakistan#service",
        "name": "Freight Forwarding in Pakistan | Best Freight Forwarders | Best Intl Movers",
        "serviceType": "Freight Forwarding Service",
        "description": "Looking for reliable freight forwarding in Pakistan? Best International Movers offers air, sea & road freight forwarding from Islamabad, Rawalpindi & Lahore to 100+ countries. Get a free quote today!",
        "url": "https://bestintlmovers.com/freight-forwarding-in-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", name: "Pakistan" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "priceRange": "50000-500000+",
          "description": "Freight forwarding services from Pakistan to worldwide destinations including air, sea, and road freight"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/freight-forwarding-in-pakistan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does freight forwarding from Pakistan take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the mode of transport. Air freight takes 1–5 days, sea freight takes 7–38 days depending on the destination."
            }
          },
          {
            "@type": "Question",
            "name": "Is cargo insurance mandatory for freight forwarding in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is not legally mandatory, but we strongly recommend it. International shipping carries risks including damage, theft, and port delays. Insurance gives you full protection."
            }
          },
          {
            "@type": "Question",
            "name": "Can I track my freight shipment from Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide a real-time tracking number once your cargo is dispatched. You can monitor your shipment 24/7 through our online system."
            }
          },
          {
            "@type": "Question",
            "name": "What items are prohibited from shipping from Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prohibited items include weapons, narcotics, counterfeit goods, hazardous chemicals, and any item banned by Pakistani export laws or the destination country's import laws."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle customs clearance at the destination?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through our global partner network, we handle import customs clearance at the destination as part of our door-to-door service."
            }
          },
          {
            "@type": "Question",
            "name": "Can you ship a small parcel or do you only handle large cargo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle shipments of all sizes — from a single box of personal items to full 40-foot container loads."
            }
          }
        ]
      }
    ]
  });

  const freightTypes = [
    {
      icon: Plane,
      title: "Air Freight Forwarding",
      description: "Fastest method for time-sensitive cargo",
      features: [
        "1-5 days delivery worldwide",
        "Ideal for high-value goods",
        "Perfect for perishable items",
        "Real-time tracking available"
      ],
      destinations: ["UAE: 1-2 days", "UK: 2-3 days", "USA: 3-5 days", "Canada: 3-5 days"]
    },
    {
      icon: Anchor,
      title: "Sea Freight Forwarding",
      description: "Most cost-effective for large shipments",
      features: [
        "FCL & LCL options available",
        "Perfect for household goods",
        "Vehicle shipping available",
        "Port of Karachi & Qasim"
      ],
      destinations: ["UAE: 7-12 days", "UK: 25-30 days", "USA: 28-35 days", "Canada: 30-38 days"]
    },
    {
      icon: Truck,
      title: "Road Freight Forwarding",
      description: "Practical option for neighboring countries",
      features: [
        "Afghanistan & Iran routes",
        "Central Asian connections",
        "Commercial cargo specialist",
        "Cost-effective overland"
      ],
      destinations: ["Afghanistan", "Iran (transit)", "Central Asia", "Trade goods"]
    },
    {
      icon: Globe,
      title: "Multimodal Freight",
      description: "Combined transport solutions",
      features: [
        "Road + Sea + Air combinations",
        "Flexible routing options",
        "Optimized cost & time balance",
        "Complete coordination"
      ],
      destinations: ["Complex routes", "Remote locations", "Special requirements", "Custom solutions"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Free Consultation & Quote",
      description: "Contact us with your cargo details and get a transparent, no-obligation quote with no hidden charges."
    },
    {
      number: "2", 
      title: "Cargo Pickup & Packing",
      description: "Our team arrives at your location in Islamabad, Rawalpindi, Lahore or Peshawar for professional packing."
    },
    {
      number: "3",
      title: "Export Documentation",
      description: "We prepare all required documents including Commercial Invoice, Packing List, Bill of Lading, and certificates."
    },
    {
      number: "4",
      title: "Pakistan Customs Clearance",
      description: "Our experienced brokers handle the entire export clearance process with Pakistan Customs (FBR)."
    },
    {
      number: "5",
      title: "International Transit",
      description: "Your cargo is loaded on the selected carrier and begins its journey with real-time tracking updates."
    },
    {
      number: "6",
      title: "Destination Customs & Delivery",
      description: "Our global agents handle import clearance and deliver to your final address abroad."
    }
  ];

  const pricingTable = [
    {
      service: "Air Freight to UAE",
      small: "$180–$350",
      medium: "$700–$1,200",
      large: "N/A"
    },
    {
      service: "Sea Freight to UAE", 
      small: "$120–$250",
      medium: "$380–$650",
      large: "$800–$1,400"
    },
    {
      service: "Air Freight to UK",
      small: "$300–$550",
      medium: "$1,100–$1,800", 
      large: "N/A"
    },
    {
      service: "Sea Freight to UK",
      small: "$250–$450",
      medium: "$650–$1,100",
      large: "$1,400–$2,200"
    },
    {
      service: "Air Freight to USA",
      small: "$350–$650",
      medium: "$1,300–$2,200",
      large: "N/A"
    },
    {
      service: "Sea Freight to USA",
      small: "$350–$600",
      medium: "$900–$1,500",
      large: "$1,800–$2,800"
    }
  ];

  const cities = [
    { name: "Islamabad", description: "Main office serving capital region with daily pickups" },
    { name: "Rawalpindi", description: "Complete coverage of Rawalpindi and twin cities" },
    { name: "Lahore", description: "Serving Punjab's commercial capital with dedicated agents" },
    { name: "Karachi", description: "Direct port operations at Karachi and Port Qasim" },
    { name: "Peshawar", description: "Serving KPK businesses and households" },
    { name: "Faisalabad", description: "Serving textile and industrial exporters" }
  ];

  const faqs = [
    {
      q: "How long does freight forwarding from Pakistan take?",
      a: "It depends on the mode of transport. Air freight takes 1–5 days, sea freight takes 7–38 days depending on the destination."
    },
    {
      q: "Is cargo insurance mandatory for freight forwarding in Pakistan?",
      a: "It is not legally mandatory, but we strongly recommend it. International shipping carries risks including damage, theft, and port delays. Insurance gives you full protection."
    },
    {
      q: "Can I track my freight shipment from Pakistan?",
      a: "Yes. We provide a real-time tracking number once your cargo is dispatched. You can monitor your shipment 24/7 through our online system."
    },
    {
      q: "What items are prohibited from shipping from Pakistan?",
      a: "Prohibited items include weapons, narcotics, counterfeit goods, hazardous chemicals, and any item banned by Pakistani export laws or the destination country's import laws."
    },
    {
      q: "Do you handle customs clearance at the destination?",
      a: "Yes. Through our global partner network, we handle import customs clearance at the destination as part of our door-to-door service."
    },
    {
      q: "Can you ship a small parcel or do you only handle large cargo?",
      a: "We handle shipments of all sizes — from a single box of personal items to full 40-foot container loads."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Freight Forwarding in Pakistan | Best Freight Forwarders | Best Intl Movers"
        description="Looking for reliable freight forwarding in Pakistan? Best International Movers offers air, sea & road freight forwarding from Islamabad, Rawalpindi & Lahore to 100+ countries. Get a free quote today!"
        keywords="freight forwarding in pakistan, freight forwarders pakistan, freight forwarding company pakistan, cargo freight pakistan, international freight pakistan, freight forwarding islamabad, freight forwarding rawalpindi"
        urlPath="/freight-forwarding-in-pakistan"
        schema={buildServiceSchema()}
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="text-gold" size={20} />
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Freight Forwarding Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Freight Forwarding in Pakistan — Complete Guide to <span className="text-gold">International Cargo Shipping</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Are you looking for trusted freight forwarding in Pakistan? Whether you need to ship household goods, commercial cargo, or industrial equipment overseas, choosing the right freight forwarding company in Pakistan can make the difference between a smooth shipment and a costly nightmare.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-white mb-8">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <CheckCircle2 className="text-gold" size={24} />
                <span className="font-semibold">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Users className="text-gold" size={24} />
                <span className="font-semibold">5,000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Globe className="text-gold" size={24} />
                <span className="font-semibold">100+ Countries</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                GET FREE QUOTE
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                WHATSAPP US NOW
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is Freight Forwarding */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              What Is Freight Forwarding?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Freight forwarding is the process of organizing and managing the shipment of goods from one country to another on behalf of a person or company. A freight forwarder acts as an expert middleman who coordinates every step of the shipping process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Documentation", desc: "Export permits, packing lists, bills of lading, certificates of origin" },
              { icon: ShieldCheck, title: "Customs Clearance", desc: "Both Pakistan export and destination country import clearance" },
              { icon: TrendingUp, title: "Carrier Selection", desc: "Choosing the best airline, shipping line, or road carrier" },
              { icon: Award, title: "Cargo Insurance", desc: "Protecting your goods against damage or loss in transit" },
              { icon: Package, title: "Warehousing", desc: "Temporary storage before or after the main transit" },
              { icon: Truck, title: "Last-Mile Delivery", desc: "Final delivery to your home or office at the destination" }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Freight Forwarding */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Types of Freight Forwarding Services in Pakistan
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We offer comprehensive freight forwarding solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {freightTypes.map((type, index) => (
              <motion.div 
                key={type.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <type.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Transit Times:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {type.destinations.map((dest, idx) => (
                      <div key={idx}>{dest}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              The Freight Forwarding Process — Step by Step
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Understanding how freight forwarding works in Pakistan will help you plan your shipment better
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Freight Forwarding Costs in Pakistan — What to Expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Rough estimates for 2025 (contact us for exact quotes)
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Service</th>
                  <th className="border border-border px-6 py-4 text-center font-semibold text-foreground">Small (100 kg)</th>
                  <th className="border border-border px-6 py-4 text-center font-semibold text-foreground">Medium (500 kg)</th>
                  <th className="border border-border px-6 py-4 text-center font-semibold text-foreground">Large (FCL 20ft)</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, index) => (
                  <tr key={row.service} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{row.service}</td>
                    <td className="border border-border px-6 py-4 text-center font-semibold text-gold">{row.small}</td>
                    <td className="border border-border px-6 py-4 text-center font-semibold text-gold">{row.medium}</td>
                    <td className="border border-border px-6 py-4 text-center font-semibold text-gold">{row.large}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground italic">
              *Note: These are estimated ranges. Contact us for an exact quote based on your specific shipment.*
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Why Choose Best International Movers for Freight Forwarding in Pakistan?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "15+ Years of Experience",
                description: "Operating since 2009 with deep expertise in Pakistani export regulations and international customs requirements."
              },
              {
                icon: ShieldCheck,
                title: "Door-to-Door Service",
                description: "From our team arriving at your door in Rawalpindi to delivering your goods at your new address abroad — we handle everything."
              },
              {
                icon: Award,
                title: "Fully Insured Cargo",
                description: "All shipments are covered by comprehensive cargo insurance, giving you complete peace of mind."
              },
              {
                icon: Calculator,
                title: "Transparent Pricing",
                description: "No hidden fees, no surprise charges. You get a complete breakdown of all costs upfront before you commit."
              },
              {
                icon: TrendingUp,
                title: "Real-Time Tracking",
                description: "Track your shipment at every stage using our online tracking system with 24/7 updates."
              },
              {
                icon: Users,
                title: "Global Agent Network",
                description: "Trusted partner agents in 100+ countries handle the destination side with the same care and professionalism."
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Freight Forwarding from Major Cities in Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <motion.div 
                key={city.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{city.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{city.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Freight Forwarding Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.q}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Q: {faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">A: {faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Get a Free Freight Forwarding Quote Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ready to ship your cargo from Pakistan? Contact Best International Movers & Logistics today for a free, no-obligation quote.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-gold" size={20} />
                  <span className="font-semibold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-gold" size={20} />
                  <span className="font-semibold">Monday – Saturday, 8:00 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
                >
                  GET FREE QUOTE
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  WHATSAPP US NOW
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Related Services You May Need
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { to: "/services/customs-clearance", label: "Custom Clearance Services in Pakistan" },
              { to: "/services/international-moving", label: "International Moving Services" },
              { to: "/services/air-freight", label: "Air Freight Services Pakistan" },
              { to: "/services/vehicle-shipping", label: "Vehicle Shipping Service" },
              { to: "/custom-duty-calculator", label: "Custom Duty Calculator" },
              { to: "/door-to-door-cargo-pakistan", label: "Door to Door Cargo Pakistan" }
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default FreightForwardingPakistan;
