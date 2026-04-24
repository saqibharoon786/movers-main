import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const serviceData = {
  slug: "packing-materials",
  icon: Boxes,
  title: "Packing Materials Supply",
  desc: "Premium packing materials and packaging supplies for safe shipping and exports across Pakistan.",
  longDesc: "Proper packing materials are the foundation of safe cargo transport. We supply a complete range of export-grade packaging materials to businesses and individuals across Pakistan. Whether you need corrugated boxes for e-commerce shipping, wooden crates for heavy machinery, or specialized packaging for international exports, we have the materials and expertise to ensure your goods arrive safely.",
  features: [
    "Corrugated boxes (single, double, triple wall)",
    "Bubble wrap and foam packaging materials",
    "Stretch film, tape, and strapping supplies",
    "Wooden pallets and ISPM-15 certified crates",
    "Export packaging with fumigation certificates",
    "Custom printing and branding on packaging"
  ],
  heroImg: "https://images.unsplash.com/photo-1566438487617-ce78ab6bdf36?auto=format&fit=crop&q=80&w=1920",
  faqs: [
    {
      q: "Do you provide packing materials in bulk quantities?",
      a: "Yes, we offer wholesale pricing for bulk orders with volume discounts. Minimum order quantities vary by product type."
    },
    {
      q: "Are your wooden pallets ISPM-15 certified for export?",
      a: "Yes, all our wooden packaging materials are heat-treated and stamped with ISPM-15 certification for international shipping compliance."
    },
    {
      q: "Can you customize box sizes and printing?",
      a: "Absolutely. We provide custom die-cut boxes and can print your logo, handling instructions, and branding on all packaging materials."
    }
  ],
  related: ["professional-packing", "warehousing"]
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

const PackingMaterialsService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, packing materials Pakistan, packaging supplies, export packaging`,
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
                {serviceData.title} Pakistan
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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Packing Materials?</h2>
              <p className="text-muted-foreground mb-6">Get premium packaging supplies for safe shipping</p>
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

export default PackingMaterialsService;
