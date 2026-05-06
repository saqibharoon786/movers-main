import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Globe, Package, ShieldCheck, Award, Clock, Users, MapPin, Phone, Plane, Anchor, Calculator, CheckCircle2 } from "lucide-react";

const DoorToDoorCargoPakistan = () => {
  // Build comprehensive schema for door to door cargo service
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
        "@id": "https://bestintlmovers.com/door-to-door-cargo-pakistan#service",
        "name": "Door to Door Cargo Pakistan – Complete International Shipping from Your Home to Destination",
        "serviceType": "Door to Door Cargo Service",
        "description": "Complete door to door cargo from Pakistan to UAE, UK, Canada, USA & worldwide. Home pickup, packing, customs & final delivery managed by Best International Movers.",
        "url": "https://bestintlmovers.com/door-to-door-cargo-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", name: "Pakistan" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "priceRange": "80000-600000+",
          "description": "International door to door cargo services from Pakistan to worldwide destinations"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/door-to-door-cargo-pakistan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What exactly does door to door cargo from Pakistan include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our door to door service covers: free pre-shipment survey, professional export packing at your Pakistan premises, inland transport to Karachi Port or departure airport, Pakistan export customs clearance, international sea or air freight, destination country import clearance, and final delivery to your overseas address. Every stage is managed by our team — nothing is left to chance or outsourced to unknown third parties."
            }
          },
          {
            "@type": "Question",
            "name": "Is door to door cargo from Pakistan available for small shipments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. LCL (Less than Container Load) groupage is available for smaller volumes — even just a few cubic metres. You pay only for the space your cargo occupies in a shared container. Our minimum booking is not a full container, so door to door service is accessible for individual households and small commercial consignments alike."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know my goods are safe during international journey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Three layers of protection work together. First — professional export packing designed for long international transit. Second — All-Risk cargo insurance covering full declared replacement value of your goods from packing through final delivery. Third — milestone tracking updates throughout your journey so you always know where your shipment is."
            }
          },
          {
            "@type": "Question",
            "name": "How long does door to door cargo from Pakistan to Dubai take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Door to door by sea freight to Dubai typically takes 3 to 5 weeks from Rawalpindi or Islamabad. Air freight door to door takes 4 to 7 days. Exact timelines depend on vessel sailing schedules and UAE customs clearance times."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between your door to door service and just booking freight directly with a shipping line?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A shipping line provides ocean transit only — from Karachi Port to destination port. You are responsible for packing, inland transport, export customs, destination clearance, and final delivery. Our door to door service covers all of these stages under one contract, with one team accountable for the complete outcome."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to be present when cargo is delivered at the destination?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For household goods, yes — someone should be present to receive and sign for delivery and check items against the inventory. For commercial cargo, delivery to a depot or warehouse can be arranged where a representative receives on your behalf."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book door to door cargo from Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call or WhatsApp 0300-9130211 with your origin city in Pakistan, destination country and city, type of goods, estimated volume, and required timeline. We arrange a free pre-shipment survey and provide a complete written quotation within one business day."
            }
          }
        ]
      }
    ]
  });

  const destinations = [
    {
      name: "UAE",
      cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
      seaTime: "3-5 weeks",
      airTime: "4-7 days"
    },
    {
      name: "UK",
      cities: ["London", "Birmingham", "Manchester", "Leeds", "Bradford", "Sheffield", "Glasgow", "Edinburgh"],
      seaTime: "8-11 weeks",
      airTime: "5-8 days"
    },
    {
      name: "Canada",
      cities: ["Toronto", "Vancouver", "Calgary", "Ottawa", "Mississauga"],
      seaTime: "10-14 weeks",
      airTime: "6-9 days"
    },
    {
      name: "USA",
      cities: ["New York", "Houston", "Los Angeles", "Dallas", "Chicago", "Atlanta"],
      seaTime: "10-14 weeks",
      airTime: "6-9 days"
    },
    {
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
      seaTime: "9-12 weeks",
      airTime: "7-11 days"
    },
    {
      name: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Makkah"],
      seaTime: "4-6 weeks",
      airTime: "4-7 days"
    }
  ];

  const pricingTiers = [
    {
      size: "Small (LCL, 1–5 CBM)",
      price: "Rs. 80,000 – 180,000",
      description: "Shared container for smaller volumes"
    },
    {
      size: "1–2 bedroom (20ft FCL)",
      price: "Rs. 200,000 – 380,000",
      description: "Full container for small to medium households"
    },
    {
      size: "3–4 bedroom (40ft FCL)",
      price: "Rs. 350,000 – 600,000+",
      description: "Full container for large households"
    }
  ];

  const faqs = [
    {
      q: "What exactly does door to door cargo from Pakistan include?",
      a: "Our door to door service covers: free pre-shipment survey, professional export packing at your Pakistan premises, inland transport to Karachi Port or departure airport, Pakistan export customs clearance, international sea or air freight, destination country import clearance, and final delivery to your overseas address. Every stage is managed by our team — nothing is left to chance or outsourced to unknown third parties."
    },
    {
      q: "Is door to door cargo from Pakistan available for small shipments?",
      a: "Yes. LCL (Less than Container Load) groupage is available for smaller volumes — even just a few cubic metres. You pay only for the space your cargo occupies in a shared container. Our minimum booking is not a full container, so door to door service is accessible for individual households and small commercial consignments alike."
    },
    {
      q: "How do I know my goods are safe during international journey?",
      a: "Three layers of protection work together. First — professional export packing designed for long international transit. Second — All-Risk cargo insurance covering full declared replacement value of your goods from packing through final delivery. Third — milestone tracking updates throughout your journey so you always know where your shipment is."
    },
    {
      q: "How long does door to door cargo from Pakistan to Dubai take?",
      a: "Door to door by sea freight to Dubai typically takes 3 to 5 weeks from Rawalpindi or Islamabad. Air freight door to door takes 4 to 7 days. Exact timelines depend on vessel sailing schedules and UAE customs clearance times."
    },
    {
      q: "What is the difference between your door to door service and just booking freight directly with a shipping line?",
      a: "A shipping line provides ocean transit only — from Karachi Port to destination port. You are responsible for packing, inland transport, export customs, destination clearance, and final delivery. Our door to door service covers all of these stages under one contract, with one team accountable for the complete outcome."
    },
    {
      q: "Do I need to be present when cargo is delivered at the destination?",
      a: "For household goods, yes — someone should be present to receive and sign for delivery and check items against the inventory. For commercial cargo, delivery to a depot or warehouse can be arranged where a representative receives on your behalf."
    },
    {
      q: "How do I book door to door cargo from Pakistan?",
      a: "Call or WhatsApp 0300-9130211 with your origin city in Pakistan, destination country and city, type of goods, estimated volume, and required timeline. We arrange a free pre-shipment survey and provide a complete written quotation within one business day."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Door to Door Cargo Pakistan – Home Pickup to World Delivery"
        description="Complete door to door cargo from Pakistan to UAE, UK, Canada, USA & worldwide. Home pickup, packing, customs & final delivery managed. Call 0300-9130211 today."
        keywords="door to door cargo pakistan, door to door shipping pakistan, door to door delivery pakistan, door to door cargo service pakistan, international door to door pakistan, pakistan home pickup cargo, door to door freight pakistan"
        urlPath="/door-to-door-cargo-pakistan"
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
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Door to Door Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Door to Door Cargo Pakistan – Complete <span className="text-gold">International Shipping</span> from Your Home to Destination
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Shipping goods internationally from Pakistan involves multiple stages — each handled by a different company, each with their own documentation requirements, and none of them responsible for what happens at the handoff between stages. This fragmented approach is why so many international shipments from Pakistan arrive late, arrive damaged, or create unexpected costs that were never in the original quote.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-white">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <CheckCircle2 className="text-gold" size={24} />
                <span className="font-semibold">One Company</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Globe className="text-gold" size={24} />
                <span className="font-semibold">One Contract</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <ShieldCheck className="text-gold" size={24} />
                <span className="font-semibold">One Point of Contact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What Door to Door Includes */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              What Door to Door Cargo from Pakistan Actually Includes
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many companies use "door to door" loosely — meaning they handle one or two stages and outsource the rest to unknown third parties. Our door to door cargo service from Pakistan is genuinely end-to-end:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Stage 1 — Free Survey & Written Scope",
                description: "Before anything is packed or booked, our team conducts a free pre-shipment survey at your Pakistan premises. We assesses the volume and nature of your goods, identifies fragile or high-value items requiring specialist packing, recommends the appropriate freight mode (air, sea FCL, or sea LCL), and provides a complete written quotation covering every cost component — packing, inland haulage, Pakistan export customs, international freight, insurance, destination import clearance, and final delivery. No grey areas. No additions later."
              },
              {
                icon: Award,
                title: "Stage 2 — Professional Export Packing",
                description: "Our packing team arrives at your home or office with all materials. Every item is packed to international export standard — not local house-shifting standard. The difference matters enormously on a long international journey.",
                details: [
                  "Export-grade double-walled cartons for general household items",
                  "Furniture blankets and stretch film for all wooden and upholstered pieces",
                  "Cell-pack boxes with foam dividers for crockery and glassware",
                  "Anti-static bubble wrap for electronics and screens",
                  "Custom wooden crating for antiques, marble, large mirrors, and artwork",
                  "Moisture-resistant waterproof lining inside containers on long sea routes"
                ]
              },
              {
                icon: Calculator,
                title: "Stage 3 — Pakistan Export Customs Clearance",
                description: "This is where most door to door services fall short. Our licensed customs agents handle every document and declaration for Pakistan export clearance — WeBOC filing, HS code classification, packing list and commercial invoice preparation, and coordination with Pakistan Customs at Karachi Port or Islamabad International Airport. We screen your inventory for restricted items before packing day so there are no holds or examination delays at the port."
              },
              {
                icon: Plane,
                title: "Stage 4 — International Freight — Air or Sea",
                description: "We book your cargo on the most appropriate international carrier for your destination, volume, and timeline.",
                details: [
                  "Sea freight options: FCL (Full Container Load) — 20ft, 40ft, or 40ft High Cube container, exclusively yours",
                  "LCL (Less than Container Load) — shared container, you pay only for your CBM",
                  "Air freight options: Direct air cargo from Islamabad, Lahore, or Karachi airport",
                  "Consolidated air freight for smaller consignments"
                ]
              },
              {
                icon: Clock,
                title: "Stage 5 — Shipment Tracking & Updates",
                description: "You receive milestone updates throughout your shipment's journey — export clearance confirmed, vessel departed Karachi, vessel arrived at destination port, customs cleared, delivery scheduled. For sea freight, full container tracking via carrier portals is provided. You are never left wondering where your goods are."
              },
              {
                icon: Globe,
                title: "Stage 6 — Destination Import Clearance",
                description: "Our verified partner agents at the destination manage import customs clearance, duty assessment and payment coordination, port release, and inland transport to your delivery address. This stage is where unsupported shippers — those who booked freight directly without a door to door service — run into serious problems. Our destination partners operate in 100+ countries with established customs relationships and local logistics networks."
              },
              {
                icon: CheckCircle2,
                title: "Stage 7 — Final Delivery to Your Door",
                description: "Your goods are transported from the destination port to your new address and, where included in your scope, unpacked and arranged room by room. The door to door service is complete only when your goods are inside your new home — not when they reach the destination port."
              }
            ].map((stage, index) => (
              <motion.div 
                key={stage.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <stage.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{stage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                    {stage.details && (
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        {stage.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Guide */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Door to Door Cargo from Pakistan — Destination Guide
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 text-gold">
                  Pakistan to {dest.name} Door to Door
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Cities:</span>
                    <span className="text-foreground font-medium">{dest.cities.join(", ")}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sea freight:</span>
                    <span className="text-foreground font-medium">{dest.seaTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Air freight:</span>
                    <span className="text-foreground font-medium">{dest.airTime}</span>
                  </div>
                </div>
                {index === 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>LCL groupage to Jebel Ali operates weekly from Karachi Port</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>UAE customs documentation and VAT registration requirements managed by our Dubai partner</strong>
                    </p>
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>UK HMRC import clearance and VAT management included</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Used household goods relief applicable for qualifying UK-bound relocations</strong>
                    </p>
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Canadian CBSA import clearance managed by our Toronto and Vancouver partners</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Returning resident relief on used household goods assessed during planning</strong>
                    </p>
                  </div>
                )}
                {index === 3 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>US CBP customs clearance and ISF (Importer Security Filing) managed end-to-end</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Returning resident relief on used household goods assessed during planning</strong>
                    </p>
                  </div>
                )}
                {index === 4 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Australian DAFF biosecurity declarations for household goods managed by our Sydney and Melbourne partners</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Returning resident relief on used household goods assessed during planning</strong>
                    </p>
                  </div>
                )}
                {index === 5 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Saudi Customs and SASO compliance managed by our Riyadh and Jeddah partners</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Returning resident relief on used household goods assessed during planning</strong>
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-center text-muted-foreground mb-4">
              We provide door to door cargo from Pakistan to Germany, Netherlands, Sweden, Norway, Qatar, Kuwait, Bahrain, Oman, Malaysia, Singapore, South Africa, and 80+ additional countries. 
              <Link to="/contact" className="text-gold hover:underline font-medium">Contact us to confirm coverage</Link> for your specific destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Uses Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Who Uses Door to Door Cargo from Pakistan?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Families Relocating Internationally",
                description: "The most common use case. Families moving from Rawalpindi, Islamabad, Lahore, or Peshawar to live abroad permanently or for an extended period need their entire household — furniture, appliances, crockery, clothing, and personal effects — moved safely to their new home. Door to door service eliminates the need to coordinate packing, freight, and delivery separately. For complete details on our international household relocation service, see our international relocation services from Rawalpindi page.",
                link: "/international-relocation-services-rawalpindi",
                linkText: "international household relocation service"
              },
              {
                title: "Overseas Pakistanis Sending Goods Home",
                description: "Overseas Pakistanis living in the UAE, UK, or Canada regularly send goods back to family in Pakistan — furniture, appliances, gifts, and personal effects. Our inbound door to door service manages collection abroad, sea or air freight, Pakistan import customs clearance, and delivery to the family home in Rawalpindi, Islamabad, or Lahore.",
                link: "#",
                linkText: "inbound door to door service"
              },
              {
                title: "Businesses Exporting Commercial Goods",
                description: "Pakistan's exporters — textiles, surgical instruments, leather goods, sports goods, processed food — use door to door cargo to manage the complete export chain without maintaining in-house logistics teams. One contract covers pickup from the factory or warehouse, export documentation, international freight, and delivery to the overseas buyer.",
                link: "#",
                linkText: "complete export chain"
              },
              {
                title: "Individuals Sending Personal Effects Abroad",
                description: "Not every door to door shipment is a full household move. Many individuals use LCL groupage for smaller volumes — a few boxes of personal items, excess baggage, or gifts — shipped door to door without the complexity of managing each stage separately.",
                link: "#",
                linkText: "smaller volumes"
              }
            ].map((useCase, index) => (
              <motion.div 
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{useCase.description}</p>
                    {useCase.link && (
                      <Link 
                        to={useCase.link} 
                        className="inline-flex items-center text-gold hover:underline font-medium"
                      >
                        See our {useCase.linkText} →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Door to Door vs Port to Port — What Is the Real Difference?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many freight companies quote port-to-port rates — from Karachi Port to destination port. This sounds complete but excludes critical stages at both ends.
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Stage</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Port to Port</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Door to Door</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: "Packing at Pakistan home", portToPort: "❌ Not included", doorToDoor: "✅ Included" },
                  { stage: "Inland transport to Karachi", portToPort: "❌ Your responsibility", doorToDoor: "✅ Included" },
                  { stage: "Pakistan export customs", portToPort: "❌ Your responsibility", doorToDoor: "✅ Included" },
                  { stage: "Ocean / air freight", portToPort: "✅ Included", doorToDoor: "✅ Included" },
                  { stage: "Destination port clearance", portToPort: "❌ Not included", doorToDoor: "✅ Included" },
                  { stage: "Inland transport at destination", portToPort: "❌ Not included", doorToDoor: "✅ Included" },
                  { stage: "Final delivery to address", portToPort: "❌ Not included", doorToDoor: "✅ Included" }
                ].map((row, index) => (
                  <tr key={row.stage} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{row.stage}</td>
                    <td className="border border-border px-6 py-4 text-center">{row.portToPort}</td>
                    <td className="border border-border px-6 py-4 text-center font-semibold text-gold">{row.doorToDoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground italic">
              Port-to-port is cheaper on paper — but the costs of arranging each excluded stage separately almost always exceed the difference in price, with the added burden of coordinating multiple vendors with no single party accountable for the complete outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Door to Door Cargo Costs from Pakistan — Pricing Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Door to door cargo costs depend on shipment volume, freight mode, destination country, packing scope, and insurance coverage.
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Move Size</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Estimated Origin Cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, index) => (
                  <tr key={tier.size} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{tier.size}</td>
                    <td className="border border-border px-6 py-4 font-semibold text-gold">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm mb-4">
              <strong>Destination charges</strong> — import duty, clearance, and delivery — are additional and vary by country. 
              <Link to="/custom-duty-calculator" className="text-gold hover:underline font-medium">Full itemised quotation provided after free survey.</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Why Choose Best International Movers for Door to Door Cargo Pakistan?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: ShieldCheck,
                title: "Genuine End-to-End Accountability",
                description: "Every stage — from packing in your Rawalpindi or Islamabad home to final delivery abroad — is managed by one team with one contract. No grey zones between vendors."
              },
              {
                icon: Users,
                title: "Licensed Pakistan Customs Agents",
                description: "Our in-house customs team holds active WeBOC credentials and manages all Pakistan export documentation directly. No third-party customs brokers with no accountability to you."
              },
              {
                icon: Globe,
                title: "Established Carrier Relationships",
                description: "Direct accounts with Maersk, MSC, Hapag-Lloyd, Emirates SkyCargo, and Qatar Airways Cargo — reliable capacity and competitive rates on all major Pakistan export routes."
              },
              {
                icon: Award,
                title: "Verified Destination Partner Network",
                description: "Partner agents in 100+ countries manage import customs clearance, duty assessment and payment coordination, port release, and inland transport to your delivery address. This stage is where unsupported shippers — those who booked freight directly without a door to door service — run into serious problems. Our destination partners operate in 100+ countries with established customs relationships and local logistics networks."
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

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Calculator,
                title: "Complete Transit Insurance",
                description: "All-Risk cargo insurance available on every shipment — full replacement value protection from packing in Pakistan through delivery abroad. See our Pakistan cargo services page for a full breakdown of insurance options."
              },
              {
                icon: CheckCircle2,
                title: "Transparent, Itemised Quotations",
                description: "Every cost component specified in writing before you commit — packing, inland haulage, export customs, freight, insurance, destination clearance, and delivery. No additions after the contract is signed."
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1 }}
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

      {/* Customer Reviews */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Customer Reviews — Door to Door Cargo Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Kamran Mehmood, DHA Rawalpindi → Dubai",
                text: "We used Best International Movers for a complete door to door move from our home in DHA Rawalpindi to Dubai. They packed everything, handled all of the paperwork, and our container arrived in 4 weeks exactly as promised. Not a single item was damaged. Genuinely outstanding service."
              },
              {
                name: "Sara Ahmed, F-7 Islamabad → London",
                text: "Moving from Islamabad to London was something I had been dreading for months. The door to door service meant I just handed everything over — they packed, cleared customs, shipped it, and our agent in London delivered everything to our new flat. Seamless from start to finish."
              },
              {
                name: "Rana Brothers Surgical, Sialkot → Birmingham",
                text: "We export surgical instruments from Sialkot. Best International Movers handles our complete door to door export chain — factory pickup, documentation, sea freight, and delivery to our UK distributor. Reliable, well-documented, and competitive rates."
              },
              {
                name: "Nadia Hussain, Lahore → Toronto",
                text: "Sent personal effects from Lahore to Toronto via their LCL door to door service. Collected from our house, shipped, cleared Canadian customs, and delivered to our apartment in Mississauga in 12 weeks. Clear communication throughout."
              }
            ].map((review, index) => (
              <motion.div 
                key={review.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-muted-foreground text-sm italic">"{review.text}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Door to Door Cargo Pakistan
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
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Book Your Door to Door Cargo from Pakistan — Free Survey Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Whether you are relocating a household internationally, exporting commercial goods, or sending personal effects abroad — our door to door cargo service from Pakistan handles every detail from your door to theirs.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-gold" size={20} />
                  <span className="font-semibold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-gold" size={20} />
                  <span className="font-semibold">Rawalpindi | Islamabad | Lahore | Peshawar</span>
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

      {/* Related Pages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Related Pages
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { to: "/international-relocation-services-rawalpindi", label: "International Relocation Services Rawalpindi" },
              { to: "/pakistan-cargo-services", label: "Pakistan Cargo Services" },
              { to: "/custom-duty-calculator", label: "Custom Duty Calculator" }
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

  const destinations = [
    {
      name: "UAE",
      cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
      seaTime: "3-5 weeks",
      airTime: "4-7 days"
    },
    {
      name: "UK",
      cities: ["London", "Birmingham", "Manchester", "Leeds", "Bradford", "Sheffield", "Glasgow", "Edinburgh"],
      seaTime: "8-11 weeks",
      airTime: "5-8 days"
    },
    {
      name: "Canada",
      cities: ["Toronto", "Vancouver", "Calgary", "Ottawa", "Mississauga"],
      seaTime: "10-14 weeks",
      airTime: "6-9 days"
    },
    {
      name: "USA",
      cities: ["New York", "Houston", "Los Angeles", "Dallas", "Chicago", "Atlanta"],
      seaTime: "10-14 weeks",
      airTime: "6-9 days"
    },
    {
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
      seaTime: "9-12 weeks",
      airTime: "7-11 days"
    },
    {
      name: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Makkah"],
      seaTime: "4-6 weeks",
      airTime: "4-7 days"
    }
  ];

  const pricingTiers = [
    {
      size: "Small (LCL, 1–5 CBM)",
      price: "Rs. 80,000 – 180,000",
      description: "Shared container for smaller volumes"
    },
    {
      size: "1–2 bedroom (20ft FCL)",
      price: "Rs. 200,000 – 380,000",
      description: "Full container for small to medium households"
    },
    {
      size: "3–4 bedroom (40ft FCL)",
      price: "Rs. 350,000 – 600,000+",
      description: "Full container for large households"
    }
  ];

  const faqs = [
    {
      q: "What exactly does door to door cargo from Pakistan include?",
      a: "Our door to door service covers: free pre-shipment survey, professional export packing at your Pakistan premises, inland transport to Karachi Port or departure airport, Pakistan export customs clearance, international sea or air freight, destination country import clearance, and final delivery to your overseas address. Every stage is managed by our team — nothing is left to chance or outsourced to unknown third parties."
    },
    {
      q: "Is door to door cargo from Pakistan available for small shipments?",
      a: "Yes. LCL (Less than Container Load) groupage is available for smaller volumes — even just a few cubic metres. You pay only for the space your cargo occupies in a shared container. Our minimum booking is not a full container, so door to door service is accessible for individual households and small commercial consignments alike."
    },
    {
      q: "Can I ship household goods and commercial samples in the same door to door shipment?",
      a: "Mixing undeclared commercial goods with personal household effects creates serious customs risk at both Pakistan and destination ends. We assess your inventory at the survey stage and advise on the correct declaration approach for mixed shipments — in most cases, separate declarations are the right solution."
    },
    {
      q: "How do I know my goods are safe during international journey?",
      a: "Three layers of protection work together. First — professional export packing designed for long international transit. Second — All-Risk cargo insurance covering full declared replacement value of your goods from packing through final delivery. Third — milestone tracking updates throughout your journey so you always know where your shipment is."
    },
    {
      q: "What is the difference between your door to door service and just booking freight directly with a shipping line?",
      a: "A shipping line provides ocean transit only — from Karachi Port to destination port. You are responsible for packing, inland transport, export customs, destination clearance, and final delivery. Our door to door service covers all of these stages under one contract, with one team accountable for the complete outcome."
    },
    {
      q: "How long does door to door cargo from Pakistan to Dubai take?",
      a: "Door to door by sea freight to Dubai typically takes 3 to 5 weeks from Rawalpindi or Islamabad. Air freight door to door takes 4 to 7 days. Exact timelines depend on vessel sailing schedules and UAE customs clearance times."
    },
    {
      q: "Do I need to be present when cargo is delivered at the destination?",
      a: "For household goods, yes — someone should be present to receive and sign for delivery and check items against the inventory. For commercial cargo, delivery to a depot or warehouse can be arranged where a representative receives on your behalf."
    },
    {
      q: "How do I book door to door cargo from Pakistan?",
      a: "Call or WhatsApp 0300-9130211 with your origin city in Pakistan, destination country and city, type of goods, estimated volume, and required timeline. We arrange a free pre-shipment survey and provide a complete written quotation within one business day."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Door to Door Cargo Pakistan – Home Pickup to World Delivery"
        description="Complete door to door cargo from Pakistan to UAE, UK, Canada, USA & worldwide. Home pickup, packing, customs & final delivery managed. Call 0300-9130211 today."
        keywords="door to door cargo pakistan, door to door shipping pakistan, door to door delivery pakistan, door to door cargo service pakistan, international door to door pakistan, pakistan home pickup cargo, door to door freight pakistan"
        urlPath="/door-to-door-cargo-pakistan"
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
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Door to Door Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Door to Door Cargo Pakistan – Complete <span className="text-gold">International Shipping</span> from Your Home to Destination
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Shipping goods internationally from Pakistan involves multiple stages — each handled by a different company, each with their own documentation requirements, and none of them responsible for what happens at the handoff between stages. This fragmented approach is why so many international shipments from Pakistan arrive late, arrive damaged, or create unexpected costs that were never in the original quote.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-white">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <CheckCircle2 className="text-gold" size={24} />
                <span className="font-semibold">One Company</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Globe className="text-gold" size={24} />
                <span className="font-semibold">One Contract</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <ShieldCheck className="text-gold" size={24} />
                <span className="font-semibold">One Point of Contact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What Door to Door Includes */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              What Door to Door Cargo from Pakistan Actually Includes
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many companies use "door to door" loosely — meaning they handle one or two stages and outsource the rest to unknown third parties. Our door to door cargo service from Pakistan is genuinely end-to-end:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[/* ... */].map((stage, index) => (
              <motion.div 
                key={stage.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                {/* ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Guide */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Door to Door Cargo from Pakistan — Destination Guide
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                {/* ... */}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-center text-muted-foreground mb-4">
              We provide door to door cargo from Pakistan to Germany, Netherlands, Sweden, Norway, Qatar, Kuwait, Bahrain, Oman, Malaysia, Singapore, South Africa, and 80+ additional countries. 
              <Link to="/contact" className="text-gold hover:underline font-medium">Contact us to confirm coverage</Link> for your specific destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Uses Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Who Uses Door to Door Cargo from Pakistan?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[/* ... */].map((useCase, index) => (
              <motion.div 
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                {/* ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Door to Door vs Port to Port — What Is the Real Difference?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many freight companies quote port-to-port rates — from Karachi Port to destination port. This sounds complete but excludes critical stages at both ends.
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Stage</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Port to Port</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Door to Door</th>
                </tr>
              </thead>
              <tbody>
                {[/* ... */].map((row, index) => (
                  <tr key={row.stage} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{row.stage}</td>
                    <td className="border border-border px-6 py-4 text-center">{row.portToPort}</td>
                    <td className="border border-border px-6 py-4 text-center font-semibold text-gold">{row.doorToDoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground italic">
              Port-to-port is cheaper on paper — but the costs of arranging each excluded stage separately almost always exceed the difference in price, with the added burden of coordinating multiple vendors with no single party accountable for the complete outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Door to Door Cargo Costs from Pakistan — Pricing Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Door to door cargo costs depend on shipment volume, freight mode, destination country, packing scope, and insurance coverage.
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Move Size</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Estimated Origin Cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, index) => (
                  <tr key={tier.size} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{tier.size}</td>
                    <td className="border border-border px-6 py-4 font-semibold text-gold">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm mb-4">
              <strong>Destination charges</strong> — import duty, clearance, and delivery — are additional and vary by country. 
              <Link to="/custom-duty-calculator" className="text-gold hover:underline font-medium">Full itemised quotation provided after free survey.</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Why Choose Best International Movers for Door to Door Cargo Pakistan?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[/* ... */].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                {/* ... */}
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[/* ... */].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                {/* ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Customer Reviews — Door to Door Cargo Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[/* ... */].map((review, index) => (
              <motion.div 
                key={review.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                {/* ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Door to Door Cargo Pakistan
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
                {/* ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Book Your Door to Door Cargo from Pakistan — Free Survey Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Whether you are relocating a household internationally, exporting commercial goods, or sending personal effects abroad — our door to door cargo service from Pakistan handles every detail from your door to theirs.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-gold" size={20} />
                  <span className="font-semibold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-gold" size={20} />
                  <span className="font-semibold">Rawalpindi | Islamabad | Lahore | Peshawar</span>
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

      {/* Related Pages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Related Pages
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[/* ... */].map((item) => (
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

export default DoorToDoorCargoPakistan;
