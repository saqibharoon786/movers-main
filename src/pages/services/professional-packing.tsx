import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Package,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  Star,
  ShieldCheck,
  Truck,
  Clock,
  Home,
  Layers,
  PackageOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

// ─── Page Data ───────────────────────────────────────────────────────────────

const serviceData = {
  slug: "professional-packing-services",
  icon: Package,
  title: "Professional Packing",

  // Meta (155 chars max)
  desc: "Pakistan mein professional packing service — trained packers, eco-friendly materials, custom crating. Rawalpindi, Islamabad, Lahore, Peshawar mein ghar aakar packing karte hain.",

  keywords:
    "professional packing services Pakistan, packers and movers Pakistan, packing service Islamabad, packing service Lahore, packing service Rawalpindi, packing service Peshawar, house shifting packing Pakistan, international moving packing Pakistan, furniture packing Pakistan, fragile items packing",

  heroImg:
    "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920",

  // ── Intro ────────────────────────────────────────────────────────────────
  intro: `Pakistan se baadesh samaan bhejne ka sabse mushkil aur zaroorat-mand qadam hota hai — sahi aur mahir tareeqe se packing karna. Galat packing ki wajah se cargo damage, insurance claims reject hona, ya customs mein masail ho sakte hain. Best International Movers & Logistics ke trained professional packers 15 saalon se Rawalpindi, Islamabad, Lahore aur Peshawar mein ghar aakar world-class packing service dete hain — taake aapka har qeemti saman port se destination tak bilkul mehfooz pahuche.`,

  // ── Main SEO Content Sections ────────────────────────────────────────────
  mainContent: [
    {
      heading: "Professional Packing Service Kyun Zaroori Hai?",
      body: `Jab aap internationally shift karte hain — chahe Pakistan se Dubai ho, UK ho, Canada ho ya Australia — toh aapka samaan sea freight ya air freight ka lambi safar karta hai. Is safar mein cargo kai bar uthaya, rakha, aur transfer kiya jata hai. Agar packing professional nahi hai toh electronics tootte hain, furniture kharab hota hai, aur naadeen items damage ho jaate hain.

Hamare professional packers internationally proven materials — double-wall corrugated boxes, acid-free tissue, high-density foam, aur custom wooden crates — istemal karte hain. Har item ko label kiya jata hai aur detailed inventory list banai jaati hai taake delivery ke waqt aapko pata ho ke aapka sab kuch poora hai.`,
    },
    {
      heading: "Hamare Packers Kya Karte Hain — Step by Step",
      body: `Pehle hamare expert aapke ghar ka free survey karte hain aur items dekh kar accurate quote dete hain. Phir packing ke din hamare trained packers apna saman le kar aate hain — aapko kuch bhi khareedna nahi hota. Har item ko individually wrap kiya jata hai. Qeemti aur naazuk cheezein — jaise artwork, mirrors, antiques — ke liye custom wooden crates banai jaati hain. Furniture disassemble kiya jata hai aur reassemble ki guarantee di jaati hai.

Destination par hamare last mile delivery team unpacking bhi krti hai aur sab kuch sahi jagah rakh deti hai — aapko bas ghar mein dakhil hona hota hai.`,
    },
    {
      heading: "Furniture Packing — Bade Aur Bhari Items Ka Khayal",
      body: `Sofa, almari, dining table, beds — bhari furniture ko shift karna ek skill hai. Hamari team pehle furniture carefully disassemble karti hai, har part ko foam blankets aur stretch film se wrap karti hai, aur secure crates ya cartons mein pack karti hai. Container loading ke waqt furniture ko bracing aur strapping se secure kiya jata hai taake sea freight ke dauraan bhi koi movement na ho.`,
    },
    {
      heading: "Electronics & Appliances Ki Safe Packing",
      body: `LED TVs, laptops, home theatre systems, refrigerators, washing machines — electronics ka original box best hota hai, lekin agar wo nahi hai toh hamare packers custom-sized anti-static foam inserts aur double-wall boxes istemal karte hain. Appliances mein compressor ko secure kiya jata hai aur fragile indicators laga diye jaate hain. Har item ka serial number inventory mein note kiya jata hai.`,
    },
    {
      heading: "Qeemti Aur Naazuk Items — Artwork, Antiques, China",
      body: `Paintings, sculptures, antique furniture, crystal, porcelain — yeh items sirf expert hands se pack hone chahiye. Hum foam corners, glassine layers, aur custom-made export crates istemal karte hain. Har crate par orientation arrows aur fragile handling notes lage hote hain. Agar aap aisi qeemti cheezein bhej rahe hain toh hamare international moving insurance option bhi dekhein.`,
    },
  ],

  // ── Feature Cards ────────────────────────────────────────────────────────
  features: [
    {
      icon: Layers,
      title: "Eco-Friendly Packing Materials",
      desc: "Acid-free tissue, recyclable corrugated boxes, aur biodegradable foam — environment-friendly aur items ke liye safe.",
    },
    {
      icon: PackageOpen,
      title: "Custom Crating — Naazuk Items Ke Liye",
      desc: "Artwork, mirrors, antiques, aur electronics ke liye custom-sized wooden crates — zero damage guarantee.",
    },
    {
      icon: Home,
      title: "Wardrobe Boxes — Kapron Ki Safe Packing",
      desc: "Hanging wardrobe boxes mein kapre seedhe rakhe jaate hain — iron karne ki zaroorat nahi, wrinkle-free delivery.",
    },
    {
      icon: Truck,
      title: "Furniture Disassembly & Reassembly",
      desc: "Bhari furniture ko professionally disassemble aur destination par reassemble karte hain — har screw safe.",
    },
    {
      icon: CheckCircle2,
      title: "Labeling & Detailed Inventory System",
      desc: "Har box label hai, har item list mein hai — delivery ke waqt har cheez verify ki ja sakti hai.",
    },
    {
      icon: Clock,
      title: "Unpacking Service At Destination",
      desc: "Naye ghar mein hamare team sab kuch unpack aur sahi jagah rakh deti hai — settling-in bilkul asaan.",
    },
    {
      icon: ShieldCheck,
      title: "Partial Packing Option",
      desc: "Sirf kitchen, electronics ya naazuk items packing karwa sakte hain — baki khud pack karein. Flexible options.",
    },
    {
      icon: Package,
      title: "All Packing Materials Hum Laate Hain",
      desc: "Aapko kuch bhi khareedna nahi — specialized boxes, bubble wrap, tape, crates — sab kuch hamare paas hai.",
    },
  ],

  // ── FAQs ────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Kya packing materials aap laate hain ya humein khareedne hote hain?",
      a: "Haan, hamare packers sab kuch khud laate hain — specialized boxes, bubble wrap, foam, tape, crates, wardrobe boxes. Aapko kuch bhi arrange nahi karna. Agar aap materials alag se khareedna chahte hain toh hamare Packing Materials Supply section dekhein.",
    },
    {
      q: "Ek 2-3 bedroom ghar pack hone mein kitna waqt lagta hai?",
      a: "Standard 2-3 bedroom house 1-2 din mein completely pack ho jata hai. Bari ya zyada items ki soorat mein time badh sakta hai. Hamare team home survey ke baad exact timeline dete hain.",
    },
    {
      q: "Kya destination par unpacking bhi karte hain?",
      a: "Bilkul. Hamare last mile delivery team naye ghar mein sab kuch unpack karti hai, sahi jagah rakhti hai, aur empty boxes bhi le jaati hai. Yeh service hamare international moving packages mein shamil hai.",
    },
    {
      q: "Artwork, mirrors aur antiques kaise pack kiye jaate hain?",
      a: "Foam corners, glassine layers, aur custom-sized export wooden crates istemal kiye jaate hain. Har crate par orientation arrows aur fragile handling notes lage hote hain taake loaders ko pata ho kaise uthana hai.",
    },
    {
      q: "Kya sirf kuch rooms ya items ki packing karwa sakte hain?",
      a: "Haan, partial packing common option hai. Aksar clients kapre khud pack karte hain lekin kitchen glassware aur electronics ke liye professionals chahte hain. Scope pehle writing mein decide hota hai taake pricing transparent rahe.",
    },
    {
      q: "Kya packing insured hoti hai?",
      a: "Haan, hamare professional packing ke saath cargo insurance available hai. Transit ke dauraan kisi bhi damage ka compensation milta hai. Insurance details ke liye hamare team se consult karein.",
    },
    {
      q: "Pakistan se Dubai, UK ya Canada bhejne ke liye packing alag hoti hai?",
      a: "Haan. International routes ke liye stronger materials aur export-compliant crating zaroori hoti hai. Wooden crates ke liye ISPM-15 certification bhi lagti hai. Hamare packers destination ke hisaab se sahi materials istemal karte hain.",
    },
    {
      q: "Rawalpindi, Islamabad, Lahore aur Peshawar mein service available hai?",
      a: "Haan, hum tamam major cities mein ghar aakar packing service dete hain — Rawalpindi, Islamabad, Lahore, aur Peshawar. Home survey ke liye abhi contact karein.",
    },
  ],

  // ── All verified internal links ─────────────────────────────────────────
  relatedServices: [
    { label: "International Moving Pakistan", href: "/services/international-moving" },
    { label: "Secure Storage Solutions", href: "/services/secure-storage" },
    { label: "Packing Materials Supply", href: "/services/packing-materials" },
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
    { label: "10 Tips for Stress-Free International Move 2025", href: "/blog/tips-for-stress-free-international-move" },
    { label: "Air Freight vs Sea Freight from Pakistan", href: "/blog/air-freight-vs-sea-freight-pakistan" },
    { label: "International Shipping Cost from Pakistan", href: "/blog/international-shipping-cost-pakistan/" },
  ],
};

// ─── Schema ──────────────────────────────────────────────────────────────────

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Packing Services Pakistan — Best International Movers & Logistics",
    description: serviceData.desc,
    url: "https://bestintlmovers.com/services/professional-packing-services",
    provider: {
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
      name: "Packing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Packing Service Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Packing Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electronics Packing Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fragile Items Custom Crating Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unpacking Service at Destination" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
      bestRating: "5",
    },
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

const ProfessionalPackingService = () => {
  const serviceSeo = {
    title:
      "Professional Packing Services Pakistan | House Shifting | Best International Movers",
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

            {/* ── Breadcrumb ── */}
            <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold">Professional Packing</span>
            </nav>



            {/* ── H1 ── */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <serviceData.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Professional Packing Services
              </h1>
            </div>

            <img 
              src="/images/professional-packing.png" 
              alt="Professional Packing Services" 
              className="w-full h-auto object-cover rounded-2xl mb-10 shadow-lg border-2 border-border"
            />

            {/* ── Intro Para ── */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {serviceData.intro}
            </p>

            {/* ── MAIN SEO CONTENT ── */}
            <div className="space-y-8 mb-12">

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[0].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jab aap internationally shift karte hain — chahe Pakistan se Dubai, UK, Canada ya
                  Australia — toh aapka samaan{" "}
                  <Link to="/services/sea-freight" className="text-gold hover:underline font-medium">
                    sea freight
                  </Link>{" "}
                  ya air freight ka lambi safar karta hai. Hamare professional packers internationally
                  proven materials istemal karte hain — double-wall corrugated boxes, acid-free
                  tissue, high-density foam, aur custom wooden crates. Har item label kiya jata hai
                  aur detailed inventory list banai jaati hai.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[1].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pehle hamare expert aapke ghar ka free home survey karte hain aur items dekh kar
                  accurate quote dete hain. Phir packing ke din hamare trained packers apna saman le
                  kar aate hain. Har item individually wrap kiya jata hai. Qeemti items ke liye
                  custom wooden crates banai jaati hain. Furniture disassemble kiya jata hai.
                  Destination par hamare last mile delivery team unpacking bhi krti hai.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[2].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sofa, almari, dining table, beds — bhari furniture ko shift karna ek skill hai.
                  Hamari team pehle furniture carefully disassemble karti hai, har part ko foam
                  blankets aur stretch film se wrap karti hai. Container loading ke waqt furniture ko
                  bracing aur strapping se secure kiya jata hai taake sea freight ke dauraan bhi koi
                  movement na ho. Agar aap samaan temporary store karna chahte hain toh hamare{" "}
                  <Link to="/services/secure-storage" className="text-gold hover:underline font-medium">
                    secure storage facility
                  </Link>{" "}
                  bhi available hai.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[3].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  LED TVs, laptops, home theatre systems, refrigerators, washing machines —
                  electronics ka original box best hota hai, lekin agar wo nahi hai toh hamare
                  packers custom-sized anti-static foam inserts aur double-wall boxes istemal karte
                  hain. Appliances mein compressor secure kiya jata hai. Har item ka serial number
                  inventory mein note hota hai. Packing ke saath hamare premium packing materials bhi
                  alag se available hain.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[4].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Paintings, sculptures, antique furniture, crystal, porcelain — yeh items sirf
                  expert hands se pack hone chahiye. Hum foam corners, glassine layers, aur
                  custom-made export crates istemal karte hain. Har crate par orientation arrows aur
                  fragile handling notes lage hote hain. International move ke liye customs clearance
                  aur hamare custom duty calculator se bhi madad lein.
                </p>
              </div>
            </div>

            {/* ── FEATURES GRID ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Hamare Professional Packing Service Ki Khasiyaat
              </h2>
              <p className="text-muted-foreground mb-6">
                Hamare 5,000+ satisfied clients ka trust — yeh hamare kaam ka sabse bada saboot hai.
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
                Best International Movers Ki Packing Service Kyun Chunen?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pakistan mein bahut sari moving companies hain lekin professional packing ka matlab
                sirf boxes mein cheezein daalna nahi hai. Hamare packers internationally trained hain
                — wo jaante hain ke har destination ki alag requirements hoti hain. UAE ki customs
                alag hai, UK ke regulations alag hain, aur Canada ke bhi. Hamari packing har jagah ke
                liye comply karti hai.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hamare international moving service ke saath professional packing combine karne se
                aapko complete door-to-door solution milta hai — survey se le kar naye ghar mein
                unpacking tak. Yahi wajah hai ke 15 saalon mein hum ne 5,000+ families ka bharosa
                jeeta hai.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hamare packing process ke baare mein detail jaanne ke liye hamare moving process page
                dekhein ya FAQ check karein.
              </p>
            </div>

            {/* ── FAQ ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Professional Packing Ke Baare Mein Aksar Pooche Jane Wale Sawaal
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0 last:pb-0">
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-start gap-2">
                      <Star size={16} className="text-gold mt-1 flex-shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground pl-6">
                      {index === 0 ? (
                        <>
                          Haan, hamare packers sab kuch khud laate hain — specialized boxes, bubble wrap,
                          foam, tape, crates, wardrobe boxes. Agar aap materials alag se khareedna chahte
                          hain toh hamare{" "}
                          <Link
                            to="/services/packing-materials"
                            className="text-gold hover:underline font-medium"
                          >
                            Packing Materials Supply
                          </Link>{" "}
                          section dekhein.
                        </>
                      ) : index === 2 ? (
                        <>
                          Bilkul. Hamare{" "}
                          <Link
                            to="/services/last-mile-delivery"
                            className="text-gold hover:underline font-medium"
                          >
                            last mile delivery team
                          </Link>{" "}
                          naye ghar mein sab kuch unpack karti hai, sahi jagah rakhti hai, aur empty
                          boxes bhi le jaati hai. Yeh service hamare international moving packages mein
                          shamil hai.
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
                Related Services — Mukammal Moving Solution
              </h2>
              <p className="text-muted-foreground mb-6">
                Professional packing ke saath in services ko combine karein aur apna international
                move completely hassle-free banayein.
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
                Pakistan Mein Hamare Packing Service Areas
              </h2>
              <p className="text-muted-foreground mb-6">
                Hum Rawalpindi, Islamabad, Lahore, aur Peshawar mein ghar aakar professional packing
                karte hain. Apne sheher ke liye yahan click karein:
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
                Hum Yahan Pack Karke Bhejte Hain — International Destinations
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
                Packing Ke Baare Mein Helpful Guides
              </h2>
              <p className="text-muted-foreground mb-5">
                Apna move aur behtar plan karne ke liye hamare{" "}
                <Link to="/blog" className="text-gold hover:underline font-medium">
                  moving blog
                </Link>{" "}
                ke yeh articles zaroor parhen:
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
                Professional Packing Service Chahiye?
              </h2>
              <p className="text-muted-foreground mb-2">
                Abhi hamare expert se free home survey schedule karein — quote bilkul free hai.
              </p>
              <p className="text-muted-foreground mb-8 text-sm">
                Rawalpindi | Islamabad | Lahore | Peshawar — Ghar Aakar Service
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
                Hamare{" "}
                <Link to="/about-us" className="text-gold hover:underline">
                  About Us
                </Link>{" "}
                page par aur jaankari hasil karein ya{" "}
                <Link to="/faq" className="text-gold hover:underline">
                  FAQ
                </Link>{" "}
                dekhein.
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

export default ProfessionalPackingService;