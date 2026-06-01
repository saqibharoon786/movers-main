import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Warehouse,
  ShieldCheck,
  Thermometer,
  Camera,
  Clock,
  FileText,
  Lock,
  PackageOpen,
  Car,
  Plane,
  Ship,
  Truck,
  Star,
  Award,
  Users,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building,
  Home,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { pageTitles } from "@/seo/pageTitles";

const serviceData = {
  slug: "storage-units-islamabad",
  icon: Warehouse,
  title: "Storage Units in Islamabad & Rawalpindi — Short & Long-Term Self-Storage (2026)",
  subheading: "Secure, Climate-Controlled Self-Storage Solutions",
  desc: "Looking for secure storage units in Islamabad or Rawalpindi? Best International Movers offers climate-controlled, 24/7 monitored self-storage for households, businesses & overseas Pakistanis. Call 0300-9130211 for a free quote.",
  keywords: "storage units in Islamabad, self storage Islamabad, storage units Rawalpindi, secure storage Pakistan, warehouse storage Islamabad, storage for overseas Pakistanis, household storage Islamabad, climate controlled storage Pakistan, furniture storage Islamabad, storage units near me Islamabad, cheap storage units Islamabad",
  
  features: [
    {
      icon: Camera,
      title: "24/7 CCTV Surveillance",
      desc: "HD cameras covering every unit, corridor & entry point for continuous monitoring and absolute security.",
    },
    {
      icon: Thermometer,
      title: "Climate Controlled",
      desc: "Temperature maintained between 18–22°C and humidity regulated year-round to protect sensitive goods.",
    },
    {
      icon: ShieldCheck,
      title: "Insured Storage",
      desc: "All stored items covered against fire, flood & theft under our comprehensive storage insurance policy.",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      desc: "Weekly, monthly, 6-month & annual contracts available to match your exact duration needs.",
    },
    {
      icon: Truck,
      title: "Free Pick-Up",
      desc: "We collect your items from your home or office using GPS-tracked, fully covered secure moving vehicles.",
    },
    {
      icon: FileText,
      title: "Digital Inventory",
      desc: "Full itemized catalogue with photos sent directly to you via WhatsApp or email before storage.",
    },
    {
      icon: Lock,
      title: "24/7 Access Option",
      desc: "Access your unit at any time with a simple prior notice to our facility manager.",
    },
    {
      icon: ShieldCheck,
      title: "Pest Control",
      desc: "Monthly professional pest treatment in all units to keep your belongings clean and safe.",
    },
    {
      icon: PackageOpen,
      title: "Sealed Packaging",
      desc: "Professional wrapping in shrink wrap, bubble wrap, custom cartons & moving blankets included.",
    },
    {
      icon: Award,
      title: "Transparent Pricing",
      desc: "No hidden fees, surprise surcharges, or in/out handling costs. Fixed monthly rates guaranteed.",
    },
  ],

  pricing: [
    { type: "Small Unit", size: "50 sq ft", rate: "PKR 8,000–12,000", bestFor: "1 room goods, boxes, luggage" },
    { type: "Medium Unit", size: "100 sq ft", rate: "PKR 15,000–22,000", bestFor: "2 BHK apartment contents" },
    { type: "Large Unit", size: "200 sq ft", rate: "PKR 28,000–40,000", bestFor: "3–4 BHK full home furniture" },
    { type: "XL / Commercial", size: "400+ sq ft", rate: "PKR 55,000+", bestFor: "Office inventory, retail stock" },
    { type: "Vehicle Bay", size: "1 car space", rate: "PKR 10,000–18,000", bestFor: "Cars, SUVs, motorbikes" },
  ],

  faqs: [
    {
      q: "How much does a storage unit cost in Islamabad?",
      a: "Storage unit prices in Islamabad range from PKR 8,000 to PKR 55,000+ per month depending on unit size, duration, and whether climate control is required. We offer the most competitive rates in Rawalpindi and Islamabad with no hidden charges."
    },
    {
      q: "Is my stuff safe in your storage facility?",
      a: "Absolutely. Our facility has 24/7 HD CCTV surveillance, professional security guards, alarm systems, and all stored items are covered by our storage insurance policy. In 15 years of operation, we have maintained a perfect safety record."
    },
    {
      q: "Can I access my storage unit at any time?",
      a: "Yes — access is available with 24 hours advance notice. We can arrange emergency same-day access for urgent situations. We also provide quarterly physical inspection visits accompanied by our staff."
    },
    {
      q: "Do you offer pick-up and delivery for storage items?",
      a: "Yes, this is one of our most valued services. Our team picks up your items from anywhere in Islamabad or Rawalpindi, stores them safely, and delivers them back to you when needed. This is a complete door-to-door storage solution."
    },
    {
      q: "How long can I store my belongings?",
      a: "There is no minimum or maximum. We have clients who store for 2 weeks and others who store for 3+ years. Long-term contracts (6 months+) receive discounted rates. Overseas Pakistani clients often use our storage for 1–2 years."
    },
    {
      q: "Do you store vehicles in Islamabad?",
      a: "Yes. We have dedicated indoor vehicle storage bays for cars, motorcycles, and SUVs. Your vehicle is stored under cover with regular battery maintenance and tyre checks included in the monthly fee."
    },
    {
      q: "Can you ship my stored items internationally later?",
      a: "Yes — this is a major advantage of using Best International Movers for storage. When you are ready, we can pack, document, and ship your stored items directly to your destination overseas via sea freight or air freight. One company, complete service."
    },
    {
      q: "Do you provide packing materials?",
      a: "Yes. We bring all packing materials to your home — boxes, bubble wrap, shrink wrap, foam sheets, and blankets. Professional packing by our team is included in the storage package for full-service bookings."
    }
  ]
};

// ─── Schema Markup Builders ──────────────────────────────────────────────────

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bestintlmovers.com/#localbusiness",
    "name": "Best International Movers & Logistics Storage Islamabad",
    "image": "https://bestintlmovers.com/images/secure-storage.png",
    "telephone": "+923009130211",
    "email": "info@bestintlmovers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Blue Area, Jinnah Avenue",
      "addressLocality": "Islamabad",
      "addressRegion": "ICT",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  };
}

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bestintlmovers.com/storage-units-islamabad#service",
    "name": "Secure Storage Units in Islamabad & Rawalpindi",
    "serviceType": "Self Storage & Warehousing",
    "description": serviceData.desc,
    "provider": {
      "@type": "Organization",
      "name": "Best International Movers & Logistics",
      "url": "https://bestintlmovers.com",
      "logo": "https://bestintlmovers.com/logo.webp"
    },
    "areaServed": [
      { "@type": "Place", "name": "Islamabad" },
      { "@type": "Place", "name": "Rawalpindi" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Storage Services Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Household & Residential Storage" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office & Commercial Storage" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Storage" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Climate-Controlled Storage" } }
      ]
    }
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

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
        "name": "Storage Units Islamabad",
        "item": "https://bestintlmovers.com/storage-units-islamabad"
      }
    ]
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

const StorageUnitsIslamabad = () => {
  const seoConfig = {
    title: pageTitles.storageUnitsIslamabad,
    description: serviceData.desc,
    keywords: serviceData.keywords,
    canonicalUrl: "https://bestintlmovers.com/storage-units-islamabad"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/storage-units-islamabad"
        schema={[
          buildLocalBusinessSchema(),
          buildServiceSchema(),
          buildFAQSchema(),
          buildBreadcrumbSchema()
        ]}
      />

      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.1),transparent_40%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Breadcrumb Nav */}
            <nav className="text-xs text-white/60 mb-6 flex items-center justify-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold">Storage Units Islamabad</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-gold/20">
              <Warehouse className="text-gold shrink-0" size={18} />
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">Premium Self-Storage 2026</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-tight text-white mb-6">
              Secure Storage Units in Islamabad & Rawalpindi
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Short & Long-Term Climate-Controlled Self-Storage for Households, Businesses, & Overseas Pakistanis.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03009130211"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-bold hover:bg-gold/90 transition-all transform hover:scale-105 shadow-lg shadow-gold/20 text-base"
              >
                <Phone size={18} />
                Call 0300-9130211
              </a>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold hover:bg-gold hover:text-navy-dark transition-all text-base"
              >
                <MessageCircle size={18} />
                WhatsApp for Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content & Copy */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Visual Demo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <img
                src="/images/secure-storage.png"
                alt="Secure Climate-Controlled Storage Units in Islamabad"
                className="w-full h-auto object-cover rounded-2xl shadow-xl border border-border"
              />
            </motion.div>

            {/* Intro Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-16 space-y-6"
            >
              <p className="text-xl font-medium text-foreground">
                Whether you are moving abroad, renovating your home, downsizing your office, or simply running out of space, Best International Movers & Logistics provides premium storage units in Islamabad and Rawalpindi designed to keep your belongings 100% safe, dry, and fully accessible whenever you need them.
              </p>
              <p>
                With over 15 years of experience in international relocation and logistics, we understand that storage is not just about space — it is about trust, security, and peace of mind. Our climate-controlled, CCTV-monitored, and insured storage facilities serve thousands of households, businesses, and overseas Pakistanis across Rawalpindi, Islamabad, Bahria Town, DHA, F-Sectors, and G-Sectors.
              </p>
            </motion.div>

            {/* Why Do You Need a Storage Unit Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-16 bg-gradient-to-r from-navy-light/10 to-transparent"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-gold shrink-0" size={28} />
                Why Do You Need a Storage Unit in Islamabad?
              </h2>
              <p className="mb-6">
                Islamabad and Rawalpindi are fast-growing twin cities. Between property transitions, overseas relocations, office expansions, and seasonal moves, the need for professional storage solutions has never been higher. Here are the most common reasons our clients use our storage units:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Moving abroad (UAE, UK, Canada, USA) and need a safe place for household goods",
                  "Home renovation or construction — furniture needs temporary storage",
                  "Downsizing from a larger home to a smaller apartment",
                  "Office relocation or business expansion requiring document and equipment storage",
                  "Students going abroad needing belongings stored safely",
                  "Overseas Pakistanis returning and needing interim storage before settling",
                  "Seasonal storage for air conditioners, heaters, outdoor furniture",
                  "E-commerce businesses needing affordable warehousing in Islamabad",
                  "Divorce or inheritance situations requiring neutral, third-party storage",
                  "Disaster recovery or emergency temporary storage needs"
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 text-center">
                Our Storage Unit Services in Islamabad & Rawalpindi
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                We provide tailored, comprehensive storage plans structured to match commercial, residential, and high-value cargo requirements perfectly.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Service 1 */}
                <div className="glass-card rounded-xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Home className="text-gold" size={20} />
                      1. Household & Residential Storage
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our most popular service — perfect for families relocating overseas or between homes. We store furniture, appliances, clothing, kitchenware, electronics, and personal belongings in sealed, climate-controlled units. Every item is professionally wrapped, catalogued, and stored securely.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li>• Suitable for 1 BHK, 2 BHK, 3 BHK, and full villa contents</li>
                      <li>• Available from 1 month to 3+ years</li>
                      <li>• Free pick-up and drop-off service available across twin cities</li>
                      <li>• Itemized inventory list provided for every single item</li>
                    </ul>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="glass-card rounded-xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Building className="text-gold" size={20} />
                      2. Office & Commercial Storage
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Businesses in Islamabad's Blue Area, F-6, F-7, F-8, G-9, G-10, and DHA Phase 2 trust us for professional commercial storage. We handle office furniture, file archives, IT equipment, retail inventory, and confidential documents with maximum care.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li>• Secure document archiving with organized retrieval systems</li>
                      <li>• IT equipment storage in anti-static, humidity-controlled environments</li>
                      <li>• Retail overflow and e-commerce inventory warehousing</li>
                      <li>• Dedicated corporate account managers for swift logistics</li>
                    </ul>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="glass-card rounded-xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Car className="text-gold" size={20} />
                      3. Vehicle Storage
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Going abroad for months? Do not leave your car out in the street. Our indoor vehicle storage units in Rawalpindi keep your car, motorcycle, or SUV safely parked, covered, and maintained while you are away.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li>• Indoor, fully covered vehicle storage bays</li>
                      <li>• Regular battery and tyre checks included</li>
                      <li>• 24/7 security camera coverage and physical guards</li>
                    </ul>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="glass-card rounded-xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Thermometer className="text-gold" size={20} />
                      4. Climate-Controlled Storage
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pakistan's extreme summer heat and monsoon humidity can destroy electronics, wooden furniture, artwork, and clothing. Our climate-controlled storage units in Islamabad maintain consistent temperature (18–22°C) year-round.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li>• Ideal for: electronics, antiques, artwork, musical instruments, documents</li>
                      <li>• Temperature maintained strictly between 18–22°C year-round</li>
                      <li>• Humidity sensors and dehumidifiers active in every unit</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service 5 & 6 Short/Long */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-navy-light/10 border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
                    <Clock size={16} className="text-gold" />
                    Short-Term Storage (1–4 Weeks)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Need storage for just a few weeks during a move or renovation? We offer flexible short-term storage contracts with no hidden fees. Perfect for house shifting gaps.
                  </p>
                </div>
                <div className="bg-navy-light/10 border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-gold" />
                    Long-Term Storage (3 Months to 3+ Years)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Overseas Pakistanis and expats choose our long-term storage because they know their belongings are safe for years. Discounted rates for 6 and 12-month contracts with free quarterly inspection reports.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Locations We Serve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-16 bg-navy-dark/5"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 text-center">
                Storage Units Near You — Twin City Locations We Serve
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Our secure storage pick-up and delivery network covers all major areas of Islamabad and Rawalpindi:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border border-border p-5 rounded-xl">
                  <h3 className="font-bold text-gold mb-3 flex items-center gap-1.5">
                    <MapPin size={18} />
                    Islamabad Sectors Covered
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• F-6, F-7, F-8, F-10, F-11 Islamabad storage</li>
                    <li>• G-9, G-10, G-11, G-13, G-14 storage units</li>
                    <li>• E-7, E-11 storage Islamabad</li>
                    <li>• I-8, I-10, I-14 storage facilities</li>
                    <li>• DHA Phase 1 & 2 Islamabad storage</li>
                    <li>• Bahria Enclave Islamabad</li>
                    <li>• Bani Gala & Chak Shahzad storage</li>
                    <li>• PWD, Media Town, Gulberg Greens</li>
                  </ul>
                </div>
                <div className="bg-background border border-border p-5 rounded-xl">
                  <h3 className="font-bold text-gold mb-3 flex items-center gap-1.5">
                    <MapPin size={18} />
                    Rawalpindi Areas Covered
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bahria Town Rawalpindi — Phase 1 to Phase 8</li>
                    <li>• DHA Rawalpindi — Phase 1, 2, 5, 6</li>
                    <li>• Satellite Town, Gulraiz Housing, Askari</li>
                    <li>• Saddar, Chaklala, Airport Road storage</li>
                    <li>• Murree Road, Peshawar Road corridor</li>
                    <li>• Chakri Road, Adyala Road storage</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Our Storage Units — Key Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 text-center">
                Why Choose Our Storage Units? — Key Features
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Pakistan's premium and safest storage experience with state-of-the-art security features.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {serviceData.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <feature.icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-16 bg-navy-dark/10"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 text-center">
                Storage Unit Prices in Islamabad — 2026 Rate Guide
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                We offer transparent, competitive pricing with no surprise fees. Below is our general pricing guide:
              </p>
              <div className="overflow-x-auto border border-border rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-navy-light/20 border-b border-border">
                      <th className="p-4 text-gold font-bold text-sm">Storage Type</th>
                      <th className="p-4 text-gold font-bold text-sm">Unit Size</th>
                      <th className="p-4 text-gold font-bold text-sm">Monthly Rate (PKR)</th>
                      <th className="p-4 text-gold font-bold text-sm">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceData.pricing.map((row, idx) => (
                      <tr key={idx} className="border-b border-border last:border-0 hover:bg-navy-light/10 transition-colors">
                        <td className="p-4 text-foreground font-semibold text-sm">{row.type}</td>
                        <td className="p-4 text-muted-foreground text-sm">{row.size}</td>
                        <td className="p-4 text-gold font-bold text-sm">{row.rate}</td>
                        <td className="p-4 text-muted-foreground text-sm">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic text-center">
                * Prices vary based on duration, item type, and climate-control requirements. Call 0300-9130211 or WhatsApp for a free custom quote within 1 hour.
              </p>
            </motion.div>

            {/* Storage for Overseas Pakistanis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8 mb-16"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="text-gold" size={26} />
                Storage for Overseas Pakistanis — Store Before You Fly
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you are relocating to the UAE, UK, Canada, USA, Australia, or Saudi Arabia, you cannot take everything with you. Our storage units in Islamabad are the perfect solution for overseas Pakistanis who want to:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">• <span>Store furniture and household goods while renting abroad initially.</span></li>
                <li className="flex items-start gap-2">• <span>Keep vehicles safely parked and maintained during long stays abroad.</span></li>
                <li className="flex items-start gap-2">• <span>Preserve family heirlooms, electronics, and valuables in a secure facility.</span></li>
                <li className="flex items-start gap-2">• <span>Have belongings ready for shipment when they decide to ship later.</span></li>
                <li className="flex items-start gap-2">• <span>Return to Pakistan and find everything exactly as they left it.</span></li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-gold/20 pt-4">
                We work closely with our international moving team — so when you are ready to ship your stored items overseas, we handle the entire process: packing, customs documentation, sea freight or air freight, and door-to-door delivery.
              </p>
            </motion.div>

            {/* How Our Storage Process Works Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                How Our Storage Process Works — Step by Step
              </h2>
              <div className="relative border-l-2 border-gold/40 pl-6 ml-4 space-y-8">
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-background flex items-center justify-center text-[10px] font-bold text-navy-dark">1</span>
                  <h3 className="font-bold text-foreground text-base mb-1">Step 1: Free Consultation & Assessment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Call or WhatsApp us at 0300-9130211. Tell us what you need stored, for how long, and from which area in Islamabad or Rawalpindi. We give you an instant quote over the phone — no obligation.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-background flex items-center justify-center text-[10px] font-bold text-navy-dark">2</span>
                  <h3 className="font-bold text-foreground text-base mb-1">Step 2: Professional Packing at Your Home</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our trained team arrives at your home with premium packing materials — shrink wrap, bubble wrap, custom cartons, and moving blankets. Every item is carefully wrapped, labelled, and loaded.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-background flex items-center justify-center text-[10px] font-bold text-navy-dark">3</span>
                  <h3 className="font-bold text-foreground text-base mb-1">Step 3: Transportation to Our Facility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your items are transported in our GPS-tracked, covered vehicles directly to our secure storage facility. We provide you with a complete digital inventory list with photos.
                  </p>
                </div>
                {/* Step 4 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-background flex items-center justify-center text-[10px] font-bold text-navy-dark">4</span>
                  <h3 className="font-bold text-foreground text-base mb-1">Step 4: Secure Storage</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your belongings are stored in a clean, dry, climate-controlled unit with 24/7 CCTV monitoring, alarm systems, and professional security guards. You receive monthly condition reports.
                  </p>
                </div>
                {/* Step 5 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-background flex items-center justify-center text-[10px] font-bold text-navy-dark">5</span>
                  <h3 className="font-bold text-foreground text-base mb-1">Step 5: Retrieval & Delivery</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When you need your items back, simply call or WhatsApp us with 24 hours notice. We deliver everything back to your address in Islamabad, Rawalpindi, or wherever you need — intact and clean.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interactive FAQs Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — Storage Units Islamabad
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0 last:pb-0">
                    <h3 className="font-display font-semibold text-foreground text-base mb-2 flex items-start gap-2">
                      <Star size={16} className="text-gold mt-1 shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials Review Slider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                What Our Storage Clients Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-5 border border-border flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="text-gold fill-current" size={14} />)}
                    </div>
                    <p className="text-xs text-muted-foreground italic leading-relaxed mb-4">
                      "I stored my entire 3-bedroom house contents with Best International Movers when I moved to Dubai. For 14 months, I did not worry once. When I came back, everything was perfect — not a single scratch. Highly recommend their storage in Islamabad."
                    </p>
                  </div>
                  <p className="text-xs font-bold text-foreground">— Usman Tariq, F-7 Islamabad</p>
                </div>
                <div className="glass-card rounded-xl p-5 border border-border flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="text-gold fill-current" size={14} />)}
                    </div>
                    <p className="text-xs text-muted-foreground italic leading-relaxed mb-4">
                      "We were relocating our Blue Area office and needed emergency storage for furniture and files. Best International Movers arranged everything within 24 hours. Professional, fast, and surprisingly affordable."
                    </p>
                  </div>
                  <p className="text-xs font-bold text-foreground">— Zara Hussain, Corporate Client, Blue Area</p>
                </div>
                <div className="glass-card rounded-xl p-5 border border-border flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="text-gold fill-current" size={14} />)}
                    </div>
                    <p className="text-xs text-muted-foreground italic leading-relaxed mb-4">
                      "I went to Canada for 8 months and stored my Corolla with their vehicle storage service in Rawalpindi. The car was returned to me in perfect condition with a freshly charged battery. Excellent service."
                    </p>
                  </div>
                  <p className="text-xs font-bold text-foreground">— Bilal Ahmed, Bahria Town Rawalpindi</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Links & Internal Linking Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-16 bg-navy-light/5"
            >
              <h3 className="font-bold text-foreground text-lg mb-4">Useful Links & Resources</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <Link to="/services/secure-storage-services" className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors">
                  <ArrowRight size={14} className="text-gold" /> Secure Storage Service Page
                </Link>
                <Link to="/services/international-moving-services" className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors">
                  <ArrowRight size={14} className="text-gold" /> International Moving Services
                </Link>
                <Link to="/pakistan-to-dubai-movers" className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors">
                  <ArrowRight size={14} className="text-gold" /> Movers from Pakistan to Dubai
                </Link>
                <Link to="/cargo-service-islamabad" className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors">
                  <ArrowRight size={14} className="text-gold" /> Cargo Services in Islamabad
                </Link>
                <Link to="/movers-rawalpindi" className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors">
                  <ArrowRight size={14} className="text-gold" /> Movers in Rawalpindi
                </Link>
                <Link to="/custom-duty-calculator" className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors">
                  <ArrowRight size={14} className="text-gold" /> Pakistan Custom Duty Calculator
                </Link>
              </div>
            </motion.div>

            {/* Page Bottom CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gold/5 border border-gold/20 rounded-3xl p-8 sm:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4">
                Get a Free Storage Quote Today — Islamabad & Rawalpindi
              </h2>
              <p className="text-muted-foreground mb-8 text-sm sm:text-base max-w-xl mx-auto">
                Stop worrying about your belongings. Whether you need storage for a week or three years, Best International Movers & Logistics has the right solution for you — professional, insured, climate-controlled, and affordable.
              </p>
              <div className="space-y-4 mb-8">
                <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                  <Phone className="text-gold" size={24} />
                  <a href="tel:03009130211" className="hover:text-gold transition-colors">0300-9130211</a>
                </div>
                <div className="text-sm text-muted-foreground">
                  Email: <a href="mailto:info@bestintlmovers.com" className="text-gold hover:underline">info@bestintlmovers.com</a>
                </div>
                <div className="text-xs text-muted-foreground">
                  Hours: Monday–Saturday 8:00 AM – 8:00 PM | Sunday: Emergency Only
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gold text-navy-dark px-8 py-3.5 rounded-lg font-bold hover:bg-gold/90 transition-all transform hover:scale-105 shadow-md shadow-gold/15"
                >
                  Request Call Back
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold text-gold px-8 py-3.5 rounded-lg font-bold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  WhatsApp Now
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

export default StorageUnitsIslamabad;
