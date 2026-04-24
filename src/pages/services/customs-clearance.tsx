import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileCheck, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const serviceData = {
  slug: "customs-clearance",
  icon: FileCheck,
  title: "Customs Clearance",
  desc: "Expert customs brokerage ensuring smooth border crossings and compliance.",
  longDesc: "Navigating international customs regulations can be complex. Our licensed customs brokers handle all documentation, duties, taxes, and compliance requirements in both origin and destination countries. We ensure your shipment clears customs quickly and without delays.",
  features: [
    "Licensed customs brokers",
    "Duty & tax calculation",
    "Import/export documentation",
    "Regulatory compliance",
    "Quarantine clearance",
    "Trade agreement benefits"
  ],
  heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
  faqs: [
    {
      q: "Do I need to be present for customs clearance?",
      a: "Generally no, our brokers handle clearance on your behalf with the proper power of attorney."
    },
    {
      q: "How long does clearance take?",
      a: "Normally 2-4 days, provided all documentation is accurate and there are no unexpected customs hold-ups."
    },
    {
      q: "Who pays the duties and taxes?",
      a: "We calculate and pay destination duties and taxes on your behalf, which are invoiced separately or included in the master quote."
    },
    {
      q: "Which documents do exporters from Pakistan need most often?",
      a: "Commercial invoice, packing list, exporter profile, and destination-specific permits for restricted goods. We prepare templates and validate HS codes before submission."
    },
    {
      q: "Can you coordinate clearance at destination as well?",
      a: "Yes. We work with vetted agents in major hubs (UAE, UK, North America, GCC) so import clearance aligns with your delivery appointment."
    }
  ],
  related: ["international-moving", "sea-freight"]
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

const CustomsClearanceService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Services Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, customs broker Pakistan, import export clearance, customs documentation`,
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
                {serviceData.title} Services Pakistan
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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Customs Clearance Services?</h2>
              <p className="text-muted-foreground mb-6">Get expert help with your import/export documentation</p>
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

export default CustomsClearanceService;
