import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Package, 
  Warehouse, 
  Car, 
  Plane, 
  Ship, 
  FileCheck, 
  Truck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  Home,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "international-moving",
  icon: Globe,
  title: "International Moving Services in Pakistan",
  subheading: "Complete Door-to-Door Global Relocation",
  desc: "Trusted international moving from Pakistan to 100+ countries. Dubai, UK, USA, Europe. Expert packing, shipping, customs & insurance. Get your free moving quote today!",
  featuresList: [
    "Door-to-door service worldwide to 100+ countries & destinations",
    "Dedicated move coordinator for personalized relocation service",
    "Full packing & unpacking with premium materials & techniques",
    "Complete customs clearance included in all moving packages",
    "Comprehensive insurance coverage for complete peace of mind",
    "Real-time shipment tracking & milestone updates via WhatsApp",
    "Specialized Dubai, UK, USA, Canada & Australia moving routes",
    "Professional furniture disassembly & assembly at destination",
    "Secure storage solutions at both origin & destination countries"
  ],
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "Malaysia", "Singapore"
  ],
  heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
  faqs: [
    {
      q: "How much does international moving cost from Pakistan?",
      a: "The cost of international moving from Pakistan varies based on destination country and city, volume of goods (cubic meters), shipping method (air vs sea cargo), packing services required, customs duties and taxes, and insurance coverage. Typically, sea freight ranges from $2,000-$8,000 for a full container, while air freight ranges from $5,000-$15,000 for a typical household. Contact us for a free, customized quote based on your specific requirements."
    },
    {
      q: "Do you provide packing services for international moves?",
      a: "Yes, we provide comprehensive <a href=\"/services/packing\">packing services</a> for all international relocations. Our professional packing team uses industry-leading materials and techniques to ensure your belongings are protected during transit. Services include custom crating for valuable items, professional packing of all household goods, inventory management and labeling, fragile item protection, and unpacking services at destination."
    },
    {
      q: "How long does international shipping take from Pakistan?",
      a: "Shipping times vary by destination and method: Air Cargo takes 5-10 days to most destinations, Sea Cargo takes 20-40 days depending on route, Dubai takes 3-5 days by air, 7-14 days by sea, UK takes 5-7 days by air, 25-35 days by sea, and USA takes 5-10 days by air, 30-45 days by sea. These timelines include transit time plus customs clearance. We provide real-time tracking throughout the process."
    },
    {
      q: "Do you handle customs clearance for international moves?",
      a: "Yes, we provide complete <a href=\"/services/customs-clearance\">customs clearance</a> support for international relocations. Our services include documentation preparation and filing, duty and tax calculation, import permit processing, regulatory compliance management, coordination with customs authorities, and real-time clearance status updates. Our experienced customs brokers ensure smooth clearance in both origin and destination countries."
    },
    {
      q: "What items cannot be shipped internationally?",
      a: "Certain items are restricted or prohibited for international shipping: perishable food items, hazardous materials and chemicals, plants and seeds, firearms and weapons, certain medications, alcohol and tobacco in large quantities, and cash and valuable securities. We provide a complete list of restricted items and help you understand regulations for your specific destination."
    },
    {
      q: "Do you provide insurance for international moves?",
      a: "Yes, we offer comprehensive insurance coverage for all international relocations. Our insurance options include all-risk coverage for complete protection, named-perils coverage for cost-effective protection, high-value item coverage, transit insurance for <a href=\"/services/air-freight\">air</a> and <a href=\"/services/sea-freight\">sea</a> shipments, storage insurance if needed, and claims support and assistance. We recommend adequate insurance coverage for all valuable items during international moves."
    }
  ],
  related: ["professional-packing", "customs-clearance", "air-freight", "sea-freight", "vehicle-shipping", "secure-storage"]
};

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceData.title} — Best International Movers & Logistics`,
    serviceType: serviceData.title,
    description: serviceData.desc,
    url: `https://bestintlmovers.com/services/${serviceData.slug}`,
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const InternationalMovingService = () => {
  const serviceSeo = {
    title: `${serviceData.title} in Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, international moving Pakistan, best international movers, overseas relocation Pakistan`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath={`/services/${serviceData.slug}`} schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>
            
            <picture>
              <source srcSet={`${serviceData.heroImg}&fm=webp`} type="image/webp" />
              <img src={serviceData.heroImg} alt={serviceData.title} fetchPriority="high" loading="eager" width="1280" height="600" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-10 shadow-lg" />
            </picture>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <serviceData.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                {serviceData.title} in Pakistan
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{serviceData.desc}</p>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Key Features & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceData.featuresList.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 mb-10">
              <div className="glass-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">🌍 Global Destinations We Serve - Expert International Moving Routes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With our extensive global network, we provide international moving services to all major destinations worldwide. Our specialized routes ensure efficient and cost-effective relocations to popular destinations from Pakistan.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🇦🇪 Dubai Moving Service - Pakistan to UAE Relocation</h3>
                    <p className="text-muted-foreground mb-4">
                      Moving from Pakistan to Dubai is one of our most popular routes. Our specialized <a href="/services/dubai-moving">Dubai Moving Service</a> includes direct sea and air freight options to Dubai, Abu Dhabi, and Sharjah, expert handling of UAE customs regulations and documentation, temporary storage solutions in Dubai if needed, coordination with local partners for smooth delivery, and competitive rates for Pakistan to Dubai relocations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🇬🇧 UK Moving Service - Pakistan to United Kingdom Relocation</h3>
                    <p className="text-muted-foreground mb-4">
                      Our <a href="/services/uk-moving">UK Moving Service</a> specializes in relocations from Pakistan to England, Scotland, Wales, and Northern Ireland. We offer full compliance with UK customs and import regulations, direct container shipping to major UK ports (Felixstowe, Southampton), air freight options for urgent shipments to London and other cities, expert handling of UK-specific requirements and paperwork, and storage solutions in the UK if needed.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🇺🇸 USA Moving Service - Pakistan to United States Relocation</h3>
                    <p className="text-muted-foreground mb-4">
                      Our <a href="/services/usa-moving">USA Moving Service</a> covers all 50 states, with expertise in moving from Pakistan to major cities like New York, Los Angeles, Chicago, and Houston. Services include compliance with US customs and CDC regulations, direct shipping to major US ports (New York, Los Angeles, Houston), air freight options for time-sensitive moves, expert handling of US import requirements, and coordination with local movers for final delivery.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🇪🇺 Europe Moving Services - Complete European Relocation</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide comprehensive moving services to all European countries, including Germany, France, Italy, Spain, and the Netherlands. Our European relocation services feature expert knowledge of EU customs regulations, direct shipping to major European ports, multi-country coordination for complex European moves, specialized handling for European Union requirements, and storage solutions across Europe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">📦 Professional Packing Services - Secure Your International Move</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Proper packing is the foundation of a successful international move. At Best International Movers, we provide world-class <a href="/services/packing">packing services</a> that ensure your belongings remain safe during transit, regardless of distance or mode of transportation.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">🛡️ Premium Packing Materials & Techniques</h3>
                    <p className="text-muted-foreground mb-4">
                      Our packing experts use industry-leading materials and techniques to protect your valuables: double-wall corrugated boxes for extra strength, custom wooden crates for fragile and high-value items, bubble wrap and foam padding for delicate items, acid-free paper for artwork and documents, climate-controlled packaging for sensitive electronics, and anti-static materials for electronic equipment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">🏷️ Inventory Management & Labeling System</h3>
                    <p className="text-muted-foreground mb-4">
                      Our systematic approach to packing includes detailed inventory creation with digital photos, color-coded labeling for room-wise organization, QR code tracking for individual items, condition reports for valuable items, and custom packing lists for customs clearance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">✈️🚢 Flexible Shipping Options - Air & Sea Cargo Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We understand that different relocations have different requirements. That's why we offer flexible shipping options tailored to your timeline, budget, and cargo volume.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">✈️ Air Cargo Services - Fast International Moving</h3>
                    <p className="text-muted-foreground mb-4">
                      When speed is your priority, our <a href="/services/air-freight">air cargo services</a> provide the fastest international moving solution with transit time of 5-10 days to most international destinations, direct flights from Islamabad, Lahore, and Karachi airports, priority handling for urgent shipments, real-time tracking and updates, secure air freight containers and pallets, and door-to-airport and airport-to-door services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🚢 Sea Cargo Services - Cost-Effective International Moving</h3>
                    <p className="text-muted-foreground mb-4">
                      For larger shipments and budget-conscious relocations, our <a href="/services/sea-freight">sea cargo services</a> offer the most economical solution with transit time of 20-40 days depending on destination, Full Container Load (FCL) for exclusive use, Less than Container Load (LCL) for shared space, direct sailings from Karachi Port to global destinations, secure container loading and lashing, and real-time vessel tracking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">⭐ Why Choose Best International Movers - Your Trusted Relocation Partner</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🏆 10+ Years of Global Logistics Experience</h3>
                    <p className="text-muted-foreground mb-4">
                      With over a decade of experience in international relocations, we have the expertise to handle complex moves efficiently. Our team understands the intricacies of international shipping, customs regulations, and cross-border logistics.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">👥 Professional Packing & Handling Team</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team of trained professionals includes certified packing specialists, experienced movers and handlers, customs clearance experts, international logistics coordinators, and customer service representatives.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">💰 Affordable & Transparent Pricing</h3>
                    <p className="text-muted-foreground mb-4">
                      We offer competitive rates with no hidden charges: all-inclusive pricing with detailed quotes, volume discounts for large shipments, flexible payment options, price match guarantee for comparable services, and free, no-obligation consultations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-3">🚀 Fast Customs Clearance Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Our <a href="/services/customs-clearance">customs clearance</a> services include pre-shipment documentation preparation, duty and tax calculation, import permit processing, regulatory compliance management, and real-time clearance status updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">🔄 Our International Moving Process - Step-by-Step Relocation Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">📞 Step 1: Free Consultation & Quotation</strong>
                    <p className="mt-2">
                      Initial consultation to understand your moving needs, detailed assessment of volume and requirements, multiple shipping options and timelines, transparent, all-inclusive pricing, and customized moving plan development.
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-foreground">📦 Step 2: Professional Packing & Inventory</strong>
                    <p className="mt-2">
                      On-site packing by trained professionals, detailed inventory creation with photos, custom crating for valuable items, proper labeling and documentation, and quality assurance checks.
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-foreground">🚚 Step 3: Secure Loading & Shipment</strong>
                    <p className="mt-2">
                      Professional loading techniques and equipment, secure containerization and lashing, documentation for customs clearance, insurance coverage activation, and shipment dispatch and tracking initiation.
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-foreground">🛃 Step 4: Customs Clearance Assistance</strong>
                    <p className="mt-2">
                      Pre-arrival documentation preparation, duty and tax payment processing, regulatory compliance management, inspection coordination if required, and final clearance confirmation.
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-foreground">🏡 Step 5: Final Delivery & Setup</strong>
                    <p className="mt-2">
                      Delivery coordination at destination, unpacking and placement services, furniture assembly and setup, debris removal and cleanup, and post-move support and follow-up.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">🔗 Complete Logistics Solutions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We also offer comprehensive <a href="/services/cargo-services">cargo services</a> for all your shipping needs, ensuring every aspect of your move is handled professionally. Our integrated solutions include vehicle shipping, <a href="/services/secure-storage">secure storage</a> options, and specialized handling for high-value items.
                </p>
                
                <div className="glass-card rounded-xl p-6 text-muted-foreground border border-gold/20">
                  <p>
                    We also offer <Link to="/services/professional-packing" className="text-gold hover:underline">professional packing services</Link> and <Link to="/services/customs-clearance" className="text-gold hover:underline">customs clearance assistance</Link> for your international move.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Ready to Move Internationally?</h2>
              <p className="text-muted-foreground mb-6">Get a free, no-obligation quote for your international move today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                  <Phone size={18} />
                  Get Free Quote
                </Link>
                <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-colors">
                  <MapPin size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default InternationalMovingService;
