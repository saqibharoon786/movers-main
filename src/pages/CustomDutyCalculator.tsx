import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const serviceData = {
  slug: "custom-duty-calculator",
  icon: Calculator,
  title: "Custom Duty Calculator Pakistan – Import Tax & Duty Guide",
  subheading: "Calculate Import Duty & Taxes Online",
  desc: "Calculate custom duty & import taxes in Pakistan easily. Complete guide to FBR customs duty rates, HS codes, and import charges. Free calculator – 0300-9130211",
  featuresList: [
    "Customs Duty (CD) calculation on CIF value — rates from 0% to 100%",
    "Additional Customs Duty (ACD) — 1%, 2%, or 7% on selected categories",
    "Regulatory Duty (RD) — up to 100% for luxury or restricted items",
    "Sales Tax on Imports (ST) — 18% of CIF value plus customs duty",
    "Income Tax on Imports (WHT) — 5.5% for NTN holders, 8% for unregistered",
    "Additional Sales Tax — 3% for non-filers or specific categories",
    "HS Code classification assistance for accurate duty rates",
    "Duty-free allowances for travellers and returning overseas Pakistanis",
    "Vehicle import duty calculation with government EV policy rates",
    "Complete customs clearance and documentation support"
  ],
  heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
  countries: [
    "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", 
    "Canada", "Australia", "Saudi Arabia", "Qatar", "Kuwait", 
    "Germany", "France", "Netherlands", "Turkey", "China", "Singapore", "Afghanistan", "Iran"
  ],
  faqs: [
    {
      q: "How do I calculate import duty in Pakistan?",
      a: "Apply the applicable CD%, ACD%, RD%, ST (18%), and WHT (5.5% for NTN holders) on the CIF value of your goods. The total of all these charges is your import cost. Our team can calculate the exact amount for your specific shipment."
    },
    {
      q: "What is CIF value in Pakistan customs?",
      a: "CIF stands for Cost + Insurance + Freight. It is the declared value of your goods including their purchase price, insurance cost, and freight charges to the Pakistani port. Customs duty is calculated on this total CIF value."
    },
    {
      q: "Can I import used household goods duty-free to Pakistan?",
      a: "Returning overseas Pakistanis can import used household goods at concessional rates under specific conditions. Fresh imports of used goods are subject to standard duty rates."
    },
    {
      q: "How much custom duty is applicable on a mobile phone in Pakistan?",
      a: "Mobile phone duty in Pakistan ranges from Rs. 1,000 to Rs. 44,000 per device depending on the value. Phones must also be registered with PTA through the DIRBS system."
    },
    {
      q: "How long does customs clearance take in Pakistan?",
      a: "With complete and correct documentation, customs clearance at Karachi Port typically takes 2 to 5 working days. Air freight clearance at Islamabad Airport is usually completed within 1 to 3 working days."
    },
    {
      q: "Do I need a customs agent to clear my shipment in Pakistan?",
      a: "Technically no, but practically yes. Pakistan's customs process is complex and time-sensitive. A licensed customs agent prevents costly errors and delays."
    },
    {
      q: "What is the difference between customs duty and sales tax on imports?",
      a: "Customs duty is the import tariff applied by Pakistan Customs on the CIF value. Sales tax is an additional 18% levy applied on the CIF value plus customs duty — it is collected at import stage on behalf of FBR."
    }
  ]
};

// Build complete Organization + Service schema - FIXED JSON SYNTAX
function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bestintlmovers.com/#organization",
        "name": "Best International Movers & Logistics",
        "url": "https://bestintlmovers.com",
        "logo": "https://bestintlmovers.com/logo.png",
        "telephone": "+923009130211",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923009130211",
          "contactType": "customer service",
          "availableLanguage": ["English", "Urdu"]
        },
        "sameAs": [
          "https://www.facebook.com/bestintlmovers",
          "https://www.instagram.com/bestintlmovers"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/custom-duty-calculator#service",
        "name": "Custom Duty Calculator Pakistan | Best International Movers",
        "serviceType": "Custom Duty Calculator",
        "description": "Calculate custom duty & import taxes in Pakistan easily. Complete guide to FBR customs duty rates, HS codes, and import charges.",
        "url": "https://bestintlmovers.com/custom-duty-calculator",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", "name": "Pakistan" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Custom Duty Calculator Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customs Duty Calculation Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Import Tax Calculator Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HS Code Classification Pakistan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customs Clearance Services Pakistan" } }
          ]
        }
      }
    ]
  };
}

// FAQ Schema for rich results
function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a.replace(/<[^>]*>/g, '') }
    }))
  };
}

// Breadcrumb Schema
function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { 
        "@type": "ListItem", 
        "position": 1,
        "name": "Home", 
        "item": "https://bestintlmovers.com" 
      },
      { 
        "@type": "ListItem", 
        "position": 2,
        "name": "Services", 
        "item": "https://bestintlmovers.com/services" 
      },
      { 
        "@type": "ListItem", 
        "position": 3,
        "name": "Custom Duty Calculator", 
        "item": "https://bestintlmovers.com/custom-duty-calculator" 
      }
    ]
  };
}

const CustomDutyCalculator = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Custom Duty Calculator Pakistan – Import Tax & Duty Guide",
    description: "Calculate custom duty & import taxes in Pakistan easily. Complete guide to FBR customs duty rates, HS codes, and import charges. Free calculator – 0300-9130211",
    keywords: "custom duty calculator pakistan, pakistan import duty calculator, customs duty pakistan, import tax calculator pakistan, fbr custom duty, duty calculator pakistan",
    canonicalUrl: "https://bestintlmovers.com/custom-duty-calculator"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component with all schemas */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/custom-duty-calculator"
        schema={[buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />
      
      <Navbar />
      
      {/* Hero Section with H1 */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Calculator className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Import Tax & Duty Guide 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Custom Duty Calculator Pakistan – Import Duty & Tax Guide 2025
            </h1>
            
            <img 
              src="/images/custom.png" 
              alt="Custom Duty Calculator Pakistan - Import Tax & Duty Guide" 
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {seoConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free Duty Calculation
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MapPin size={18} />
                WhatsApp Our Customs Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Long Description with Internal Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <p>
                Importing goods into Pakistan involves multiple layers of duties and taxes that significantly affect the total landed cost of any shipment. Whether you are importing personal belongings, commercial goods, a vehicle, or household items from abroad, understanding the applicable customs duty in Pakistan is essential before your shipment arrives.
              </p>

              <p>
                This page provides a complete guide to how Pakistan's custom duty system works, what charges apply to different categories of goods, and how to estimate your total import costs — so there are no surprises when your shipment reaches Karachi Port or Islamabad Airport.
              </p>

              <p>
                Pakistan's customs duty framework is administered by the <strong className="text-gold">Federal Board of Revenue (FBR)</strong> under the Pakistan Customs Act. Every imported item is classified under a specific <strong className="text-gold">HS Code (Harmonised System Code)</strong> — an internationally standardised product classification system — and duty rates are applied based on this classification.
              </p>

              <p>
                When goods arrive at a Pakistani port or airport, the following charges typically apply: Customs Duty (CD), Additional Customs Duty (ACD), Regulatory Duty (RD), Sales Tax on Imports (ST), Income Tax on Imports (WHT), and Additional Sales Tax. Our{" "}
                <Link to="/services/customs-clearance" className="text-gold hover:underline">
                  customs clearance team
                </Link>
                {" "}can help you navigate this complex system.
              </p>

              <p>
                The basic formula for calculating total import cost in Pakistan is: Total Import Cost = CIF Value + Customs Duty + Additional Customs Duty + Regulatory Duty + Sales Tax + Withholding Tax. Use our free calculator to estimate your costs, or contact our team for precise calculations.
              </p>
            </motion.div>

            {/* H2: How Custom Duty Works */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                How Custom Duty Works in Pakistan
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Calculator, title: "Customs Duty (CD)", desc: "Base import tariff on CIF value. Rates vary from 0% to 100%." },
                  { icon: AlertTriangle, title: "Additional Customs Duty (ACD)", desc: "Additional levy on top of customs duty. Rates: 1%, 2%, or 7%." },
                  { icon: ShieldCheck, title: "Regulatory Duty (RD)", desc: "Applied to certain categories. Can be up to 100% for luxury items." },
                  { icon: Package, title: "Sales Tax on Imports (ST)", desc: "Standard rate 18% of CIF value plus customs duty." },
                  { icon: FileCheck, title: "Income Tax on Imports (WHT)", desc: "5.5% for NTN holders, 8% for unregistered importers." },
                  { icon: Users, title: "Additional Sales Tax", desc: "Additional 3% for non-filers or specific categories." }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-gold" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Custom Duty Calculation Formula */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Custom Duty Calculation Formula – Pakistan
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  The basic formula for calculating total import cost in Pakistan is:
                </p>
                <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-xl p-6 border border-gold/20 mb-6">
                  <p className="text-foreground font-bold text-xl text-center">
                    Total Import Cost = CIF Value + Customs Duty + Additional Customs Duty + Regulatory Duty + Sales Tax + Withholding Tax
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Example Calculation:</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-navy-light/30">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Item</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">CIF Value (PKR)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">CD (20%)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">ST (18%)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">WHT (5.5%)</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Electronics</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 100,000</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 20,000</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 21,600</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 7,590</td>
                        <td className="border border-border px-4 py-3 font-semibold text-gold">~Rs. 149,190</td>
                      </tr>
                      <tr className="bg-navy-light/10">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Clothing</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 50,000</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 10,000</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 10,800</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 3,795</td>
                        <td className="border border-border px-4 py-3 font-semibold text-gold">~Rs. 74,595</td>
                      </tr>
                      <tr className="bg-navy-light/20">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">Furniture</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 200,000</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 40,000</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 43,200</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">Rs. 15,180</td>
                        <td className="border border-border px-4 py-3 font-semibold text-gold">~Rs. 298,380</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  *Note: These are illustrative figures. Actual rates depend on the specific HS code and prevailing FBR notifications.
                </p>
              </div>
            </motion.div>

            {/* H2: Custom Duty Calculator Services We Offer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Custom Duty Calculator Services We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceData.featuresList.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: Duty Rates by Category */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Custom Duty Rates by Product Category – Pakistan 2025
              </h2>
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Home className="text-gold mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-foreground">Household & Personal Goods</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Individuals relocating to Pakistan from abroad are entitled to duty relief on used personal and household items under <strong className="text-gold">Baggage Rules</strong>. New items are subject to full duty rates.
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <div>• Used household furniture: 35–50% CD</div>
                    <div>• Used personal electronics (laptops, phones): 0–10% CD (subject to FBR limits)</div>
                    <div>• New appliances: 20–35% CD + full taxes</div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Package className="text-gold mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-foreground">Vehicles</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vehicle import duty in Pakistan is among the highest in the region:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <div>• Cars up to 1000cc: 50–75% CD + RD + taxes</div>
                    <div>• Cars 1001cc to 1800cc: 75–100% CD + RD + taxes</div>
                    <div>• Cars above 1800cc: 100%+ CD + full taxes</div>
                    <div>• Electric vehicles: Reduced rates under Government of Pakistan EV policy</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glass-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <Calculator className="text-gold mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-foreground">Electronics & Mobile Phones</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div>• Mobile phones (registered under PTA): Rs. 1,000 – Rs. 44,000 fixed duty</div>
                      <div>• Laptops & tablets: 0% CD under FBR exemption (personal use, one unit)</div>
                      <div>• Commercial electronics: 10–25% CD + full taxes</div>
                    </div>
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <ShieldCheck className="text-gold mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-foreground">Clothing & Textiles</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div>• 20–35% CD on most clothing categories</div>
                      <div>• High rates apply to items competing with domestic textile industry</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* H2: FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions – Custom Duty Calculator Pakistan
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* H2: CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Get Help with Your Import – Contact Us Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need customs duty calculation, import documentation, or complete door-to-door cargo services, our team is ready to assist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Calculator size={18} />
                  Get Free Duty Calculation
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Customs Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CustomDutyCalculator;
