import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Car, 
  ArrowRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  Package,
  Plane,
  Globe,
  Wrench
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "vehicle-shipping-services",
  icon: Car,
  title: "Vehicle Shipping Services in Pakistan",
  subheading: "Safe, Insured & Door-to-Door Delivery",
  desc: "Professional vehicle shipping from Pakistan to worldwide destinations. RoRo & container transport, full insurance coverage, customs handling. Get your free vehicle shipping quote today!",
  featuresList: [
    "Roll-on/Roll-off (RoRo) & container shipping options",
    "Enclosed transport available for luxury & classic vehicles",
    "Full transit insurance coverage for complete peace of mind",
    "Door-to-port & door-to-door delivery services across Pakistan",
    "All vehicle types: cars, motorcycles, SUVs, trucks & specialty vehicles",
    "Complete customs documentation & clearance handling",
    "Real-time vehicle tracking from pickup to delivery",
    "Experienced vehicle handlers with specialized equipment"
  ],
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "Japan", "South Korea", "Singapore", "Malaysia", "Thailand"
  ],
  heroImg: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920",
  faqs: [
    {
      q: "Can I pack items in my car?",
      a: "For safety and customs reasons, it is strictly prohibited to pack personal items inside a vehicle being shipped."
    },
    {
      q: "Do you pick up from my home?",
      a: "Yes, we offer door-to-port and door-to-door services depending on your preference."
    },
    {
      q: "Is my car insured during shipping?",
      a: "Yes, full coverage transit insurance is included to protect against any unexpected damage."
    }
  ],
  related: ["international-moving", "customs-clearance"]
};

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceData.title} — Best International Movers & Logistics`,
    serviceType: serviceData.title,
    description: serviceData.desc,
    url: `https://bestintlmovers.com/services/vehicle-shipping-services`,
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const VehicleShippingService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, car shipping Pakistan, vehicle transport, international car shipping`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath={`/services/${serviceData.slug}`} schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>
            

            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <serviceData.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Vehicle-Shipping Services
              </h1>
            </div>

            <img 
              src="/images/vehicle-shipping.jpg" 
              alt="Vehicle-Shipping Services" 
              className="w-full h-auto object-cover rounded-2xl mb-10 shadow-lg border-2 border-border"
            />

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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Vehicle Shipping Services?</h2>
              <p className="text-muted-foreground mb-6">Get safe and reliable vehicle transport</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Vehicle Shipping Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Vehicle Experts
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

export default VehicleShippingService;
