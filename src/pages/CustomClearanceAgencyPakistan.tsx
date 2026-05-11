import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { FileText, ShieldCheck, Award, Clock, Users, MapPin, Phone, Calculator, CheckCircle2, Package, TrendingUp, AlertCircle } from "lucide-react";

const CustomClearanceAgencyPakistan = () => {
  const buildServiceSchema = () => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bestintlmovers.com/#organization",
        "name": "Best International Movers & Logistics",
        "url": "https://bestintlmovers.com",
        "telephone": "+923009130211",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923009130211",
          "contactType": "customer service",
          "availableLanguage": ["English", "Urdu"]
        }
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/custom-clearance-agency-in-pakistan#service",
        "name": "Custom Clearance Agency in Pakistan | Expert Customs Brokers | Best Intl Movers",
        "serviceType": "Custom Clearance Service",
        "description": "Best International Movers is a licensed custom clearance agency in Pakistan. We handle import & export customs clearance in Islamabad, Rawalpindi, Karachi & Lahore. Fast, legal & hassle-free!",
        "url": "https://bestintlmovers.com/custom-clearance-agency-in-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/custom-clearance-agency-in-pakistan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does customs clearance take in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For standard shipments with complete documentation, export clearance typically takes 1–3 business days. Import clearance takes 2–5 business days. Shipments selected for physical examination may take longer."
            }
          },
          {
            "@type": "Question",
            "name": "What is WEBOC in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WEBOC (Web-Based One Customs) is Pakistan's electronic customs management system operated by FBR. All import and export declarations must be filed on WEBOC by licensed customs agents."
            }
          },
          {
            "@type": "Question",
            "name": "Can overseas Pakistanis bring their household goods duty-free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under the Transfer of Residence (TR) facility, overseas Pakistanis who have lived abroad for at least 2 years can import their used personal and household goods at reduced or zero duty. Our team specializes in processing TR applications."
            }
          }
        ]
      }
    ]
  });

  const services = [
    {
      icon: Package,
      title: "Export Customs Clearance Pakistan",
      description: "Complete export clearance services for all goods leaving Pakistan",
      features: [
        "Export documents preparation",
        "HS code classification",
        "FBR WEBOC filing",
        "Export GD submission",
        "SRO benefits coordination"
      ]
    },
    {
      icon: FileText,
      title: "Import Customs Clearance Pakistan",
      description: "Professional import clearance for goods arriving in Pakistan",
      features: [
        "Import GD filing on WEBOC",
        "Duty assessment",
        "Valuation disputes resolution",
        "Anti-Dumping Duty advisory",
        "Delivery Order processing"
      ]
    },
    {
      icon: Users,
      title: "Personal Effects (Overseas Pakistanis)",
      description: "Specialized customs clearance for returning overseas Pakistanis",
      features: [
        "Transfer of Residence facility",
        "Duty exemptions eligibility",
        "Form-B preparation",
        "Baggage Rules application",
        "Reduced duty imports"
      ]
    },
    {
      icon: Clock,
      title: "Temporary Import & Duty Drawback",
      description: "Special customs services for temporary imports and duty recovery",
      features: [
        "ATA Carnet processing",
        "Temporary import bonds",
        "Duty drawback claims",
        "Export duty recovery",
        "Re-export coordination"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Document Review",
      description: "Review shipping documents for accuracy and completeness before filing"
    },
    {
      number: "2",
      title: "HS Code Classification",
      description: "Correct classification under Pakistan Customs Tariff using proper HS codes"
    },
    {
      number: "3",
      title: "Duty Calculation",
      description: "Calculate all applicable duties and taxes before clearance begins"
    },
    {
      number: "4",
      title: "WEBOC Filing",
      description: "File Goods Declaration on Pakistan's FBR WEBOC system"
    },
    {
      number: "5",
      title: "Customs Examination",
      description: "Supervise physical examination if required by customs authorities"
    },
    {
      number: "6",
      title: "Duty Payment & Release",
      description: "Coordinate duty payment and obtain cargo release from port/airport"
    }
  ];

  const ports = [
    {
      name: "Karachi Port & Port Qasim",
      description: "Pakistan's largest seaports handling 95% of international trade"
    },
    {
      name: "Islamabad Dry Port (IICT)",
      description: "Key clearance point for Capital Territory and surrounding regions"
    },
    {
      name: "Lahore Dry Port (KICT / PICTL)",
      description: "Serving Punjab's massive industrial and commercial sector"
    },
    {
      name: "Peshawar Customs",
      description: "Specialized in Afghan Transit Trade (ATT) documentation"
    },
    {
      name: "Sialkot Dry Port",
      description: "Premier export hub for surgical instruments and sports goods"
    }
  ];

  const dutyRates = [
    { type: "Customs Duty", rate: "0% – 30%" },
    { type: "Sales Tax on Import", rate: "17%" },
    { type: "Additional Customs Duty (ACD)", rate: "2% – 7%" },
    { type: "Regulatory Duty (RD)", rate: "0% – 100%" },
    { type: "Withholding Tax (WHT)", rate: "5% – 6%" }
  ];

  const faqs = [
    {
      q: "How long does customs clearance take in Pakistan?",
      a: "For standard shipments with complete documentation, export clearance typically takes 1–3 business days. Import clearance takes 2–5 business days. Shipments selected for physical examination may take longer."
    },
    {
      q: "What is WEBOC in Pakistan?",
      a: "WEBOC (Web-Based One Customs) is Pakistan's electronic customs management system operated by FBR. All import and export declarations must be filed on WEBOC by licensed customs agents."
    },
    {
      q: "Can overseas Pakistanis bring their household goods duty-free?",
      a: "Yes, under the Transfer of Residence (TR) facility, overseas Pakistanis who have lived abroad for at least 2 years can import their used personal and household goods at reduced or zero duty. Our team specializes in processing TR applications."
    },
    {
      q: "Do I need an NTN for customs clearance in Pakistan?",
      a: "NTN is required for commercial imports. For personal effects and household goods, CNIC is usually sufficient."
    },
    {
      q: "What happens if my goods are held by Pakistan Customs?",
      a: "Our team will immediately communicate with the relevant customs authority, identify the reason for the hold, and resolve it as quickly as possible through additional documentation, duty payment, or formal appeals."
    },
    {
      q: "Can you clear goods at Pakistani airports?",
      a: "Yes. We handle air cargo customs clearance at Islamabad International Airport, Karachi Jinnah Airport, Lahore Allama Iqbal Airport, and Peshawar Airport."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom Clearance Agency in Pakistan | Expert Customs Brokers | Best Intl Movers"
        description="Best International Movers is a licensed custom clearance agency in Pakistan. We handle import & export customs clearance in Islamabad, Rawalpindi, Karachi & Lahore. Fast, legal & hassle-free!"
        keywords="custom clearance agency in pakistan, customs clearance pakistan, customs broker pakistan, customs agent islamabad, customs clearance rawalpindi, import export customs pakistan, customs brokerage pakistan"
        urlPath="/custom-clearance-agency-in-pakistan"
        schema={buildServiceSchema()}
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FileText className="text-gold" size={20} />
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Customs Brokerage Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Custom Clearance Agency in Pakistan — Expert <span className="text-gold">Customs Brokerage</span> Services
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Navigating Pakistani customs can be one of the most stressful parts of any international shipment. Our licensed customs agents handle everything — so you don't have to worry about a single form.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-white mb-8">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <CheckCircle2 className="text-gold" size={24} />
                <span className="font-semibold">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <ShieldCheck className="text-gold" size={24} />
                <span className="font-semibold">Licensed by FBR</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Award className="text-gold" size={24} />
                <span className="font-semibold">100% Legal Compliance</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                GET FREE QUOTE
              </Link>
              <a 
                href="https://wa.me/923009130211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                WHATSAPP US NOW
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is Custom Clearance */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              What Is a Custom Clearance Agency?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              A custom clearance agency is a licensed professional that acts on your behalf to process paperwork and formalities required to move goods across international borders through Pakistan's FBR WEBOC system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: AlertCircle, title: "Prevent Delays", desc: "Avoid costly port holds and shipment delays" },
              { icon: ShieldCheck, title: "Legal Compliance", desc: "Ensure full compliance with FBR regulations" },
              { icon: Calculator, title: "Cost Savings", desc: "Identify duty exemptions and concessions" },
              { icon: FileText, title: "Documentation", desc: "Handle all customs paperwork correctly" },
              { icon: TrendingUp, title: "HS Code Classification", desc: "Correct tariff classification to avoid penalties" },
              { icon: Award, title: "Expert Representation", desc: "Professional representation with customs authorities" }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Our Custom Clearance Services in Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              How We Handle Custom Clearance in Pakistan — Our Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports Coverage */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Customs Clearance at All Major Ports in Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ports.map((port, index) => (
              <motion.div 
                key={port.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{port.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{port.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duty Rates */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Customs Duty Rates in Pakistan — What to Expect
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Duty Type</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Typical Rate</th>
                </tr>
              </thead>
              <tbody>
                {dutyRates.map((rate, index) => (
                  <tr key={rate.type} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{rate.type}</td>
                    <td className="border border-border px-6 py-4 font-semibold text-gold">{rate.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link 
              to="/custom-duty-calculator" 
              className="inline-flex items-center text-gold hover:underline font-medium"
            >
              Use our Pakistan Custom Duty Calculator →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Custom Clearance Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.q}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Q: {faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">A: {faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Contact Our Custom Clearance Experts Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop worrying about paperwork, HS codes, and customs delays. Our licensed customs brokers are ready to handle everything for you.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-gold" size={20} />
                  <span className="font-semibold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Clock className="text-gold" size={20} />
                  <span className="font-semibold">Monday – Saturday, 8:00 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
                >
                  GET FREE QUOTE
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  WHATSAPP US NOW
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Related Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { to: "/freight-forwarding-in-pakistan", label: "Freight Forwarding in Pakistan" },
              { to: "/services/international-moving", label: "International Moving Services" },
              { to: "/services/air-freight", label: "Air Freight Services Pakistan" },
              { to: "/custom-duty-calculator", label: "Custom Duty Calculator" },
              { to: "/door-to-door-cargo-pakistan", label: "Door to Door Cargo Pakistan" },
              { to: "/services/vehicle-shipping", label: "Vehicle Shipping Service" }
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CustomClearanceAgencyPakistan;
