import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Boxes,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  Star,
  Package,
  ShieldCheck,
  Truck,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

// ─── Page Data ────────────────────────────────────────────────────────────────

const serviceData = {
  slug: "packing-materials-services",
  icon: Boxes,
  title: "Packing Materials Supply",

  // Meta description (155 chars max)
  desc: "Pakistan mein best export-grade packing materials — corrugated boxes, bubble wrap, ISPM-15 wooden crates, aur fumigated export packaging. Rawalpindi, Islamabad, Lahore, Peshawar delivery available.",

  keywords:
    "packing materials Pakistan, packaging supplies Pakistan, corrugated boxes Pakistan, bubble wrap Pakistan, ISPM-15 wooden crates, export packaging Pakistan, packing boxes Islamabad, packing materials Lahore, packing materials Rawalpindi",

  heroImg:
    "https://images.unsplash.com/photo-1566438487617-ce78ab6bdf36?auto=format&fit=crop&q=80&w=1920",

  // ── Main SEO Content ────────────────────────────────────────────────────────

  intro: `Pakistan mein international shipping ke liye sab se zaroori cheez hai — sahi aur mazboot packing materials. Chahe aap Dubai, UK, Canada, USA ya kisi bhi mulk mein samaan bhej rahe hon, aapke cargo ki safety packing ki quality par depend karti hai. Best International Movers & Logistics Pakistan ka ek bharosa-mand naam hai jo 15 saalon se Rawalpindi, Islamabad, Lahore aur Peshawar mein export-grade packaging materials supply kar raha hai.`,

  mainContent: [
    {
      heading: "Pakistan Mein Export-Grade Packing Materials Kyun Zaroori Hain?",
      body: `Jab aap Pakistan se baahar samaan bhejte hain — khawaah sea freight ho ya air freight — toh customs, port handling aur long-distance transport ke dauraan aapka cargo kai bar uthaya aur rakha jata hai. Is process mein ordinary packing materials ka samaan protect karna mushkil ho jata hai.

Hamare export-grade packing materials international shipping standards ke mutabiq tayar kiye jaate hain. ISPM-15 certified wooden crates, double-wall corrugated boxes, aur anti-moisture stretch film — yeh sab milkar aapke samaan ko port se final delivery tak 100% safe rakhte hain. Agar aap professional packing service bhi chahte hain toh hamari experienced team ghar aakar puri packing kar deti hai.`,
    },
    {
      heading: "Hamare Packing Materials Ki Range",
      body: `Hum ek complete packaging solution provide karte hain — small parcel se leke heavy industrial equipment tak. Hamari supply mein corrugated boxes (single, double, aur triple wall), bubble wrap, foam rolls, stretch film, packing tape, aur wooden pallets sab shamil hain. Bulk orders par wholesale pricing milti hai aur custom printed boxes bhi available hain.`,
    },
    {
      heading: "ISPM-15 Certified Wooden Crates — Export Ke Liye Lazmi",
      body: `Agar aap UAE, UK, Canada, Australia ya kisi bhi developed country mein wooden packaging ke saath samaan bhej rahe hain toh ISPM-15 certification lazmi hai. Hamare tamam wooden pallets aur crates heat-treated hain aur internationally recognized ISPM-15 stamp ke saath aate hain. Is certificate ke baghair customs clearance mein serious problems aa sakti hain — isliye hamari packaging internationally compliant hai.`,
    },
    {
      heading: "Fumigated Export Packaging — Customs Compliance Guaranteed",
      body: `Food items, agricultural products ya sensitive cargo ke saath fumigation certificate bhi zaroori hoti hai. Hum fumigated packaging supplies aur certificate dono provide karte hain taake aapka shipment customs par bina kisi rote ke clear ho jaye. Customs clearance ke baare mein mazeed jaankari ke liye hamari Customs Clearance Service page dekhein.`,
    },
    {
      heading: "Custom Printed Boxes — Apna Brand Showcase Karein",
      body: `E-commerce sellers aur businesses ke liye hum custom die-cut boxes banaate hain jis par aapka logo, brand name, handling instructions, aur contact details print kiye ja sakte hain. Minimum order quantity ke saath yeh service available hai. Yeh option khaas taur par un logon ke liye hai jo Pakistan se baadesh mein online business chalate hain.`,
    },
  ],

  features: [
    {
      icon: Package,
      title: "Corrugated Boxes — Single, Double, Triple Wall",
      desc: "E-commerce, household shifting, aur heavy industrial items ke liye available. Bulk orders par special rate.",
    },
    {
      icon: ShieldCheck,
      title: "Bubble Wrap & Foam Padding",
      desc: "Electronics, glassware, antiques, aur fragile items ko safely pack karne ke liye high-density bubble wrap aur foam.",
    },
    {
      icon: Boxes,
      title: "Stretch Film, Tape & Strapping",
      desc: "Pallets aur boxes ko secure bundle karne ke liye industrial-grade stretch film, BOPP tape, aur PP strapping.",
    },
    {
      icon: FileText,
      title: "ISPM-15 Certified Wooden Crates & Pallets",
      desc: "Heat-treated aur internationally certified wooden packaging. UAE, UK, Canada, Australia — sab ke liye compliant.",
    },
    {
      icon: ShieldCheck,
      title: "Fumigated Export Packaging + Certificate",
      desc: "Customs compliance ke liye fumigated packaging aur official certificate — delay-free clearance guaranteed.",
    },
    {
      icon: Truck,
      title: "Custom Printed Boxes & Branding",
      desc: "Aapka logo, tagline, aur handling instructions ke saath custom die-cut boxes — e-commerce aur businesses ke liye.",
    },
  ],

  faqs: [
    {
      q: "Kya aap bulk quantity mein packing materials supply karte hain?",
      a: "Haan, hum bulk aur wholesale orders accept karte hain. Volume ke hisaab se discount milta hai. Minimum order quantity product type par vary karti hai. Bulk inquiry ke liye hamse WhatsApp ya contact form ke zariye raabta karein.",
    },
    {
      q: "Kya aapke wooden pallets ISPM-15 certified hain?",
      a: "Bilkul. Hamare tamam wooden packaging materials — pallets aur crates — heat-treated aur ISPM-15 certified hain jo UAE, UK, Canada, USA, Australia sab ke shipping regulations ke mutabiq hain.",
    },
    {
      q: "Kya custom size aur printed boxes banaate hain?",
      a: "Haan, hum custom die-cut boxes provide karte hain aur uspar aapka logo, brand name, aur handling instructions print kar sakte hain — minimum order ke saath.",
    },
    {
      q: "Fumigation certificate kab zaroori hoti hai?",
      a: "Wooden packaging ke saath international export ke liye fumigation certificate zaroori hai — khaas taur par UAE, UK, Canada bhejne ke waqt. Hum packaging ke saath yeh certificate provide karte hain.",
    },
    {
      q: "Kya aap sirf materials dete hain ya packing service bhi?",
      a: "Dono options available hain. Aap sirf materials khareed sakte hain ya hamare professional packers ko hire kar sakte hain jo ghar aakar puri packing karein. Details ke liye hamari Professional Packing Service dekhein.",
    },
    {
      q: "Kya Rawalpindi, Islamabad, Lahore aur Peshawar mein delivery available hai?",
      a: "Haan, hum Pakistan ke tamam major cities mein packing materials deliver karte hain — Rawalpindi, Islamabad, Lahore, aur Peshawar. Delivery charges aur timeline ke liye raabta karein.",
    },
  ],

  relatedServices: [
    { label: "Professional Packing Service", href: "/services/professional-packing" },
    { label: "Secure Storage Solutions", href: "/services/secure-storage" },
    { label: "International Moving", href: "/services/international-moving" },
    { label: "Customs Clearance Pakistan", href: "/services/customs-clearance" },
    { label: "Sea Freight Pakistan", href: "/services/sea-freight" },
    { label: "Air Freight Pakistan", href: "/services/air-freight" },
    { label: "Last Mile Delivery", href: "/services/last-mile-delivery" },
    { label: "Vehicle Shipping Pakistan", href: "/services/vehicle-shipping" },
  ],

  cities: [
    { label: "Movers Rawalpindi", href: "/movers-rawalpindi" },
    { label: "Movers Islamabad", href: "/movers-islamabad" },
    { label: "Movers Lahore", href: "/movers-lahore" },
    { label: "Movers & Packers Peshawar", href: "/movers-and-packers-in-peshawar" },
    { label: "Packers & Movers Islamabad", href: "/packers-and-movers-islamabad" },
    { label: "Packers & Movers Lahore", href: "/packers-and-movers-lahore" },
    { label: "Packers & Movers Rawalpindi", href: "/packers-and-movers-rawalpindi" },
    { label: "Home Shifting Islamabad", href: "/home-shifting-islamabad" },
  ],

  destinations: [
    { label: "Pakistan to Dubai Movers", href: "/pakistan-to-dubai-movers" },
    { label: "Pakistan to UK Movers", href: "/pakistan-to-uk-movers" },
    { label: "Pakistan to Canada Movers", href: "/pakistan-to-canada-movers" },
    { label: "Pakistan to USA Movers", href: "/pakistan-to-usa-movers" },
    { label: "Pakistan to Saudi Arabia Movers", href: "/pakistan-to-saudi-arabia-movers" },
    { label: "Pakistan to Australia Movers", href: "/pakistan-to-australia-movers" },
    { label: "Pakistan to Qatar Movers", href: "/pakistan-to-qatar-movers" },
    { label: "Pakistan to Germany Movers", href: "/pakistan-to-germany-movers" },
  ],

  blogLinks: [
    { label: "Packing Tips for House Shifting Pakistan", href: "/blog/packing-tips-house-shifting/" },
    { label: "How to Pack Fragile Items for International Shipping", href: "/blog/packing-fragile-items-guide/" },
    { label: "Air Freight vs Sea Freight from Pakistan", href: "/blog/air-freight-vs-sea-freight-pakistan" },
    { label: "International Shipping Cost from Pakistan", href: "/blog/international-shipping-cost-pakistan/" },
    { label: "Pakistan Customs Import Regulations 2025 Guide", href: "/blog/customs-regulations-guide-pakistan" },
  ],
};

// ─── Schema ───────────────────────────────────────────────────────────────────

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Packing Materials Supply Pakistan — Best International Movers & Logistics",
    serviceType: "Packaging Supply",
    description: serviceData.desc,
    "@id": "https://bestintlmovers.com/services/packing-materials-services#service",
    url: "https://bestintlmovers.com/services/packing-materials-services",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
      email: "info@bestintlmovers.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
        addressLocality: "Rawalpindi, Islamabad, Lahore, Peshawar",
      },
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Packaging Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Corrugated Boxes Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "ISPM-15 Wooden Crates Export Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bubble Wrap Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fumigated Export Packaging Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Printed Boxes Pakistan" } },
      ],
    },
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

const PackingMaterialsService = () => {
  const serviceSeo = {
    title: "Packing Materials Supply Pakistan | Export Packaging | Best International Movers",
    description: serviceData.desc,
    keywords: serviceData.keywords,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath={`/services/${serviceData.slug}`}
        schema={buildServiceSchema()}
      />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold">Packing Materials</span>
            </nav>

            {/* Hero Image */}


            {/* Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <serviceData.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Packing Materials Services
              </h1>
            </div>

            <img 
              src="/images/packing-materials.jpg" 
              alt="Packing Materials Services" 
              className="w-full h-auto object-cover rounded-2xl mb-10 shadow-lg border-2 border-border"
            />

            {/* Intro Para */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {serviceData.intro}
            </p>

            {/* ── MAIN SEO CONTENT ── */}
            <div className="space-y-8 mb-12">
              {serviceData.mainContent.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  {/* Inject inline internal links into specific sections */}
                  {i === 0 && (
                    <>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Jab aap Pakistan se baahar samaan bhejte hain — khawaah sea freight ho ya air
                        freight — toh customs, port handling aur long-distance transport ke dauraan
                        aapka cargo kai bar uthaya aur rakha jata hai. Is process mein ordinary packing
                        materials ka samaan protect karna mushkil ho jata hai.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Hamare export-grade packing materials international shipping standards ke mutabiq
                        tayar kiye jaate hain. ISPM-15 certified wooden crates, double-wall corrugated
                        boxes, aur anti-moisture stretch film — yeh sab milkar aapke samaan ko port se
                        final delivery tak 100% safe rakhte hain. Agar aap{" "}
                        <Link
                          to="/services/professional-packing"
                          className="text-gold hover:underline font-medium"
                        >
                          professional packing service
                        </Link>
                        {" bhi chahte hain toh hamari experienced team ghar aakar puri packing kar deti hai."}
                      </p>
                    </>
                  )}
                  {i === 1 && (
                    <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  )}
                  {i === 2 && (
                    <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  )}
                  {i === 3 && (
                    <p className="text-muted-foreground leading-relaxed">
                      Hum fumigated packaging supplies aur certificate dono provide karte hain taake
                      aapka shipment customs par bina kisi ruke clear ho jaye.{" "}
                      <Link
                        to="/services/customs-clearance"
                        className="text-gold hover:underline font-medium"
                      >
                        Customs Clearance Service
                      </Link>{" "}
                      ke baare mein mazeed jaankari ke liye yahan click karein. Hamare Custom Duty
                      Calculator se bhi apna duty estimate karein.
                    </p>
                  )}
                  {i === 4 && (
                    <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  )}
                </div>
              ))}
            </div>

            {/* ── FEATURES GRID ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Hamare Packing Materials — Key Features & Benefits
              </h2>
              <p className="text-muted-foreground mb-6">
                Pakistan ke top packers and movers ke sath hum export-quality packaging guarantee karte hain.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {serviceData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{feature.title}</p>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── WHY CHOOSE US (SEO content block) ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Best International Movers Se Packing Materials Kyun Lein?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hamare paas 15 saalon ka tajurba hai Pakistan se international shipping mein. Hum
                jaante hain ke har mulk ki alag packaging requirements hoti hain — isliye hum aapko
                sirf material nahi dete, balki sahi material dete hain. Hamare 5,000+ satisfied
                clients ka trust hamare kaam ka sabse bada saboot hai.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Agar aap Pakistan se Dubai, UK, ya Canada samaan bhej rahe hain toh hamare packaging
                materials wo sab requirements poori karte hain jo destination country ki customs
                demand karti hain. Ek galat packing se aapka shipment rok liya ja sakta hai — isliye
                professional packaging mein invest karna zaroori hai.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hamare secure storage facilities bhi available hain agar aapko apna samaan temporarily
                store karna ho — packed aur safe condition mein.
              </p>
            </div>

            {/* ── FAQ ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Packing Materials ke Baare Mein Aksar Pooche Jane Wale Sawaal
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0 last:pb-0">
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-start gap-2">
                      <Star size={16} className="text-gold mt-1 flex-shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground pl-6">
                      {index === 4 ? (
                        <>
                          Dono options available hain. Aap sirf materials khareed sakte hain ya hamare
                          professional packers ko hire kar sakte hain.{" "}
                          <Link
                            to="/services/professional-packing"
                            className="text-gold hover:underline font-medium"
                          >
                            Professional Packing Service
                          </Link>{" "}
                          ke baare mein yahan dekhein.
                        </>
                      ) : (
                        faq.a
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RELATED SERVICES ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Related Services — Mukammal Shipping Solution
              </h2>
              <p className="text-muted-foreground mb-6">
                Packing materials ke saath in services ka istemal kar ke apna international shipment
                completely secure aur hassle-free banayein.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceData.relatedServices.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center gap-2 text-foreground hover:text-gold transition-colors text-sm group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-gold group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── CITY SERVICE AREAS ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Pakistan Mein Hamare Service Areas
              </h2>
              <p className="text-muted-foreground mb-6">
                Hum Rawalpindi, Islamabad, Lahore, aur Peshawar se export-grade packing materials
                supply aur deliver karte hain. Apne sheher ke liye click karein:
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceData.cities.map((city) => (
                  <Link
                    key={city.href}
                    to={city.href}
                    className="inline-flex items-center gap-1 border border-border text-foreground px-4 py-2 rounded-lg text-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    <MapPin size={13} />
                    {city.label}
                  </Link>
                ))}
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                International Destinations — Hum Yahan Bhejte Hain
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {serviceData.destinations.map((dest) => (
                  <Link
                    key={dest.href}
                    to={dest.href}
                    className="flex items-center gap-2 text-foreground hover:text-gold transition-colors text-sm group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-gold group-hover:translate-x-1 transition-transform"
                    />
                    {dest.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── BLOG RESOURCES ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Helpful Guides — Packing Aur Shipping ke Baare Mein
              </h2>
              <p className="text-muted-foreground mb-5">
                Packing materials sahi istemal karna seekhein — hamara{" "}
                <Link to="/blog" className="text-gold hover:underline font-medium">
                  moving & logistics blog
                </Link>{" "}
                zaroor parhen:
              </p>
              <div className="space-y-3">
                {serviceData.blogLinks.map((post) => (
                  <Link
                    key={post.href}
                    to={post.href}
                    className="flex items-center gap-2 text-foreground hover:text-gold transition-colors text-sm group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-gold group-hover:translate-x-1 transition-transform"
                    />
                    {post.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="text-center bg-gold/5 border border-gold/20 rounded-2xl p-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                Packing Materials Ki Zaroorat Hai?
              </h2>
              <p className="text-muted-foreground mb-2">
                Pakistan mein export-grade packaging supplies ke liye abhi rabta karein.
              </p>
              <p className="text-muted-foreground mb-8 text-sm">
                Rawalpindi | Islamabad | Lahore | Peshawar — Delivery Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-7 py-3.5 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                >
                  <Phone size={18} />
                  Free Quote Lein
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-7 py-3.5 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-colors"
                >
                  <MapPin size={18} />
                  WhatsApp Karein
                </a>
              </div>
              <p className="text-muted-foreground text-xs mt-6">
                Hamare saath{" "}
                <Link to="/process" className="text-gold hover:underline">
                  moving process
                </Link>{" "}
                ke baare mein janein ya{" "}
                <Link to="/faq" className="text-gold hover:underline">
                  FAQ
                </Link>{" "}
                check karein.
              </p>
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