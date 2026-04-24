import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Ship, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  Package,
  Anchor,
  Globe,
  Waves
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "sea-freight",
  icon: Ship,
  title: "Sea Freight Services in Pakistan",
  subheading: "Cost-Effective & Reliable Ocean Shipping",
  desc: "Professional sea freight from Karachi Port & Port Qasim to worldwide destinations. FCL & LCL services, real-time tracking, customs handling. Get your sea freight quote today!",
  featuresList: [
    "Full Container Load (FCL) & Less than Container Load (LCL) options",
    "Direct partnerships with Maersk, MSC, Hapag-Lloyd & major shipping lines",
    "Weekly sailings from Karachi to Jebel Ali, Felixstowe, Rotterdam, Halifax",
    "In-house customs brokerage for Pakistan export documentation",
    "Real-time container tracking from origin port to final destination",
    "Climate-controlled storage while awaiting vessel departure",
    "Door-to-door coordination with transparent pricing",
    "Cost-effective solutions for large volumes & commercial cargo"
  ],
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "Netherlands", "Belgium", "China", "Singapore", "Malaysia"
  ],
  heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
  faqs: [
    {
      q: "What is the difference between FCL and LCL?",
      a: "FCL means you pay for an entire 20ft or 40ft container — best for full household or office moves. LCL means you share container space and pay by volume (CBM), ideal for partial shipments."
    },
    {
      q: "How long does sea freight take from Pakistan?",
      a: "Transit varies by lane and consolidation, but many Dubai-bound services fall in roughly 2-3 weeks for LCL groupage and slightly longer for FCL depending on sailing and destination port."
    },
    {
      q: "Are port charges included in a door-to-door quote?",
      a: "When quoted door-to-door, we spell out origin, ocean, and destination handling so you can compare apples to apples — ask for a written scope."
    }
  ],
  related: ["air-freight", "customs-clearance"]
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

const SeaFreightService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Services Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, sea cargo Pakistan, ocean freight Pakistan, FCL LCL shipping`,
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
                {serviceData.title} Services from Pakistan
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

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Sea Freight Services?</h2>
              <p className="text-muted-foreground mb-6">Get a free quote for your ocean shipment today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Sea Freight Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Sea Freight Team
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

export default SeaFreightService;
