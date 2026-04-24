import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ship, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const serviceData = {
  slug: "china-to-pakistan-cargo",
  icon: Ship,
  title: "Door-to-Door Cargo Services (China to Pakistan)",
  desc: "Fast, reliable and cost-effective shipping from China to Pakistan via sea, air, CPEC and express.",
  longDesc: "Pakistan is one of China's most important trading partners, and the China-Pakistan Economic Corridor (CPEC) has revolutionized trade between the two nations. Whether you are importing electronics, machinery, textiles, raw materials, or consumer goods from China, our specialized China to Pakistan cargo service provides the fastest routes, lowest rates, and most reliable delivery options available.",
  features: [
    "Door-to-door service from any Chinese city to Pakistan",
    "Sea freight (FCL/LCL) to Karachi / Port Qasim",
    "Air freight to KHI/LHE/ISB with economy & express options",
    "CPEC land route via Khunjerab / Karakoram Highway",
    "Customs clearance and compliance support in Pakistan",
    "WeChat + WhatsApp coordination with China agents"
  ],
  heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
  faqs: [
    {
      q: "What is the cheapest way to ship cargo from China to Pakistan?",
      a: "For large volumes (above 1 CBM), LCL sea freight is usually the most economical. For very small volumes, consolidated express services or postal channels may be cheaper. We compare all options and recommend the best solution for your specific cargo."
    },
    {
      q: "Can I ship lithium batteries from China to Pakistan?",
      a: "Lithium batteries are classified as dangerous goods (UN3480/UN3481) and require special handling. They can be shipped by sea (with restrictions) or air (with IATA DG compliance). We handle all required DG documentation and packaging certifications."
    },
    {
      q: "What are the current import duties on Chinese goods in Pakistan?",
      a: "Import duties vary by HS code and product type, ranging from 0% to 35% plus sales tax and additional customs duties. Pakistan-China Free Trade Agreement (PCFTA) Phase II provides preferential tariff rates on many goods. We calculate accurate landed costs before you finalize your import."
    }
  ],
  related: ["freight-forwarding", "customs-clearance", "cargo-insurance"]
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

const ChinaToPakistanCargoService = () => {
  const serviceSeo = {
    title: `${serviceData.title} | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, China to Pakistan shipping, import from China, CPEC cargo`,
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
                {serviceData.title}
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{serviceData.longDesc}</p>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Key Features & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceData.features.map((feature, index) => (
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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need China to Pakistan Cargo Services?</h2>
              <p className="text-muted-foreground mb-6">Get reliable shipping from China to Pakistan</p>
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

export default ChinaToPakistanCargoService;
