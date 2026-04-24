import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Plane, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  Package,
  Clock,
  Globe,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "air-freight",
  icon: Plane,
  title: "Air Freight Services in Pakistan",
  subheading: "Fast, Reliable & Time-Critical Delivery",
  desc: "Express air freight from Pakistan to worldwide destinations. 2-3 day delivery to UAE, real-time tracking, customs handling. Get your urgent air freight quote today!",
  featuresList: [
    "Express 2-3 day delivery to UAE & Middle East destinations",
    "Personal effects, urgent household moves & business documents",
    "Pharmaceuticals & temperature-controlled cargo solutions",
    "Electronics & high-value items with comprehensive insurance",
    "E-commerce & time-sensitive international delivery services",
    "AWB tracking with real-time WhatsApp milestone updates",
    "All major Pakistani airports: Islamabad (ISB), Lahore (LHE), Karachi (KHI)",
    "Partnership with Emirates SkyCargo, Qatar Airways, Turkish Cargo & PIA"
  ],
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "Singapore", "Hong Kong"
  ],
  heroImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920",
  faqs: [
    {
      q: "How fast is air freight from Pakistan to the UAE?",
      a: "Many UAE lanes move in about 2-3 business days depending on flight space and documentation readiness."
    },
    {
      q: "Is there a minimum shipment size?",
      a: "No minimum — even a single carton can move by air when airline piece rules are met."
    },
    {
      q: "How do I track my air shipment?",
      a: "We share AWB-based tracking and proactive WhatsApp updates during business hours."
    }
  ],
  related: ["sea-freight", "customs-clearance"]
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

const AirFreightService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Services Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, air cargo Pakistan, international air freight, urgent shipping Pakistan`,
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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Fast Air Freight Services?</h2>
              <p className="text-muted-foreground mb-6">Get a free quote for your urgent shipment today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Air Freight Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Air Freight Team
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

export default AirFreightService;
