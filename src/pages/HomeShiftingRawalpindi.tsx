import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home, Phone, Mail, MapPin, MessageCircle, Clock, ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { HomeShiftingRawalpindiBody } from "@/content/homeShiftingRawalpindiBody";
import { homeShiftingRawalpindiFaqs } from "@/content/homeShiftingRawalpindiContent";

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bestintlmovers.com/#organization",
        name: "Best International Movers & Logistics",
        url: "https://bestintlmovers.com",
        logo: "https://bestintlmovers.com/logo.png",
        telephone: "+923009130211",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+923009130211",
          contactType: "customer service",
          availableLanguage: ["English", "Urdu"],
        },
        sameAs: [
          "https://www.facebook.com/bestintlmovers",
          "https://www.instagram.com/bestintlmovers",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/home-shifting-rawalpindi#service",
        name: "Home Shifting Services in Rawalpindi – Professional Packers & Movers",
        serviceType: "Home Shifting Services",
        description:
          "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation across Bahria Town, DHA, Saddar, and all Rawalpindi areas.",
        url: "https://bestintlmovers.com/home-shifting-rawalpindi",
        provider: { "@id": "https://bestintlmovers.com/#organization" },
        areaServed: { "@type": "City", name: "Rawalpindi" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home Shifting Services Rawalpindi",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Professional Packing Rawalpindi" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Dismantling Rawalpindi" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apartment Shifting Rawalpindi" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa Relocation Rawalpindi" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocation Rawalpindi" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intercity Home Moving Rawalpindi" } },
          ],
        },
      },
    ],
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeShiftingRawalpindiFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://bestintlmovers.com/services" },
      { "@type": "ListItem", position: 3, name: "Home Shifting Rawalpindi", item: "https://bestintlmovers.com/home-shifting-rawalpindi" },
    ],
  };
}

function buildArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Home Shifting Services in Rawalpindi | Professional Packers & Movers",
    description:
      "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation. Free quote: 0300-9130211.",
    author: { "@type": "Organization", name: "Best International Movers & Logistics" },
    publisher: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      logo: { "@type": "ImageObject", url: "https://bestintlmovers.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://bestintlmovers.com/home-shifting-rawalpindi" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
  };
}

const HomeShiftingRawalpindi = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const seoConfig = {
    title: "Home Shifting Services in Rawalpindi | Professional Packers & Movers",
    description:
      "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation across Bahria Town, DHA, Saddar & more. Free quote: 0300-9130211.",
    keywords:
      "home shifting rawalpindi, home shifting services in rawalpindi, packers and movers rawalpindi, house shifting rawalpindi, movers and packers rawalpindi, home shifting company rawalpindi, furniture moving rawalpindi",
    canonicalUrl: "https://bestintlmovers.com/home-shifting-rawalpindi",
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/home-shifting-rawalpindi"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildArticleSchema(), buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-gold/10 backdrop-blur-md rounded-full px-4 md:px-6 py-2 mb-6 border border-gold/30">
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">10+ Years Experience</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">Fully Insured</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <span className="text-gold text-xs md:text-sm font-semibold tracking-wider uppercase">No Hidden Charges</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Home Shifting Services in Rawalpindi
              <br className="hidden md:inline" />
              <span className="text-gold font-bold"> — Professional Packers & Movers</span>
            </h1>

            <div className="relative max-w-4xl mx-auto mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <img
                src="/images/homeshifting.png"
                alt="Professional home shifting team in Rawalpindi packing furniture"
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Planning a home shift in Rawalpindi? For over a decade we've been Rawalpindi's most trusted home shifting company — safe, efficient, and affordable moves across Bahria Town, DHA, Saddar, and all major areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:03009130211"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-xl font-bold hover:bg-gold/90 transition-all hover:scale-[1.02] shadow-lg shadow-gold/20"
              >
                <Phone size={20} />
                Call: 0300-9130211
              </a>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-navy-dark transition-all hover:scale-[1.02]"
              >
                <MessageCircle size={20} className="text-green-400" />
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 max-w-4xl mx-auto text-left">
              {[
                { label: "Free Survey", value: "In-Home & Written" },
                { label: "Contact", value: "info@bestintlmovers.com" },
                { label: "Coverage", value: "All Rawalpindi Areas" },
                { label: "Pricing", value: "Transparent & Fair" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-white/60 text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-gold font-bold text-sm md:text-base">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <HomeShiftingRawalpindiBody />

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Frequently Asked Questions – Home Shifting in Rawalpindi
                </h2>
                <p className="text-muted-foreground mt-2">
                  Find answers to common questions about moving in Rawalpindi.
                </p>
              </div>

              <div className="space-y-4">
                {homeShiftingRawalpindiFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.q}
                      className="glass-card rounded-2xl border border-border overflow-hidden hover:border-gold/30 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 text-left font-display font-bold text-foreground text-base md:text-lg flex justify-between items-center gap-4 bg-navy-light/5 hover:bg-navy-light/10 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`text-gold transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                          size={20}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-5 border-t border-border/40 text-muted-foreground text-sm md:text-base leading-relaxed bg-background">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-light/10 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-3xl p-8 md:p-12 border border-gold/20 space-y-6"
            >
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 inline-block">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Get Your Free Home Shifting Quote Today
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Whether you're moving a single-bedroom apartment or a large villa, relocating within Rawalpindi or to Islamabad, Best International Movers is ready to make your shift smooth, safe, and stress-free.
              </p>

              <div className="grid gap-4 max-w-md mx-auto text-left py-4 border-y border-border/40 my-6 text-sm md:text-base">
                <div className="flex gap-3 items-center text-foreground">
                  <Phone className="text-gold" size={18} />
                  <span>Call / WhatsApp: <strong>0300-9130211</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <Mail className="text-gold" size={18} />
                  <span>Email: <strong>info@bestintlmovers.com</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <MapPin className="text-gold" size={18} />
                  <span>Serving: <strong>All Areas of Rawalpindi & Islamabad</strong></span>
                </div>
                <div className="flex gap-3 items-center text-foreground">
                  <Clock className="text-gold" size={18} />
                  <span>Available: <strong>Monday–Saturday | 8:00 AM – 8:00 PM</strong></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Home size={18} />
                  Get Free Home Shifting Quote
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Moving Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default HomeShiftingRawalpindi;
