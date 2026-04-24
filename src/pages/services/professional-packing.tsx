import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const serviceData = {
  slug: "professional-packing",
  icon: Package,
  title: "Professional Packing",
  desc: "Premium packing materials and white-glove service for your most precious belongings.",
  longDesc: "Our professional packing teams use industry-leading materials and techniques to ensure every item is protected during transit. From delicate china and artwork to bulky furniture, our trained packers handle it all with precision and care. We use eco-friendly, acid-free materials and custom crating for high-value items.",
  features: [
    "Eco-friendly packing materials",
    "Custom crating for fragile items",
    "Wardrobe boxes for clothing",
    "Furniture disassembly & reassembly",
    "Labeling & inventory system",
    "Unpacking service at destination"
  ],
  heroImg: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920",
  faqs: [
    {
      q: "Do you provide the packing materials?",
      a: "Yes, we bring all necessary high-quality materials including specialized boxes, bubble wrap, and crating."
    },
    {
      q: "How long does packing take?",
      a: "A standard 2-3 bedroom house usually takes 1-2 days to pack completely."
    },
    {
      q: "Is there an unpacking service?",
      a: "Absolutely, we also provide unpacking and debris removal services at your new destination."
    },
    {
      q: "How do you protect artwork and mirrors?",
      a: "We use foam corners, glassine layers, and export crates sized to the piece. Each crate is labeled with orientation arrows and fragile handling notes for loaders."
    },
    {
      q: "Can you pack only part of my home?",
      a: "Yes. Partial packing is common when clients self-pack clothes but want professionals on kitchen glass and electronics. We mark scope in writing so pricing stays transparent."
    }
  ],
  related: ["international-moving", "secure-storage"]
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

const ProfessionalPackingService = () => {
  const serviceSeo = {
    title: `${serviceData.title} Services Pakistan | Best International Movers`,
    description: serviceData.desc,
    keywords: `${serviceData.title}, packing services Pakistan, professional packers, moving boxes`,
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
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Professional Packing Services?</h2>
              <p className="text-muted-foreground mb-6">Get expert packing for your valuable belongings</p>
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

export default ProfessionalPackingService;
