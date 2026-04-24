import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const serviceData = {
  slug: "nationwide-distribution",
  icon: Truck,
  title: "Nationwide Distribution Services",
  desc: "Fast, reliable delivery across 300+ cities with B2B, e-commerce, pharma and FMCG distribution.",
  longDesc: "Pakistan's vast geography and growing consumer market demand a distribution partner who can deliver reliably from Karachi to Khyber, Lahore to Gwadar. Our nationwide distribution service provides businesses with a comprehensive logistics network covering all major cities, towns, and districts — ensuring your products reach retailers, distributors, and customers efficiently and on time.",
  features: [
    "B2B distribution: manufacturer to retailer",
    "E-commerce last-mile + reverse logistics + COD",
    "Pharma cold chain distribution with temperature logging",
    "FMCG primary and secondary distribution",
    "Warehousing, fulfillment, cross-docking and inventory visibility",
    "Digital POD, route optimization, and reporting"
  ],
  heroImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920",
  faqs: [
    {
      q: "Do you cover rural areas and small towns?",
      a: "Yes. Our network covers over 300 cities and towns across Pakistan including second and third-tier cities. For very remote areas, we partner with local agents to ensure comprehensive last-mile reach."
    },
    {
      q: "What is your cash-on-delivery remittance cycle?",
      a: "We offer COD remittance within 24-48 hours of delivery confirmation for businesses with regular volumes. Standard remittance is within 3-5 business days."
    },
    {
      q: "Can you handle temperature-sensitive pharmaceuticals?",
      a: "Yes. Our GDP-compliant cold chain distribution includes 2-8°C refrigerated vehicles, temperature loggers, and validated SOPs for vaccine and medicine distribution."
    }
  ],
  related: ["warehousing", "last-mile-delivery"]
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

const NationwideDistributionService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, distribution Pakistan, logistics network, B2B delivery`,
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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Nationwide Distribution Services?</h2>
              <p className="text-muted-foreground mb-6">Get reliable distribution across Pakistan</p>
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

export default NationwideDistributionService;
