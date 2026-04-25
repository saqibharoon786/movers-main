import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Warehouse,
  ArrowRight,
  MapPin,
  Phone,
  Star,
  ShieldCheck,
  Thermometer,
  Camera,
  Clock,
  FileText,
  Lock,
  PackageOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

// ─── Page Data ───────────────────────────────────────────────────────────────

const serviceData = {
  slug: "secure-storage-services",
  icon: Warehouse,
  title: "Secure Storage",

  desc: "Pakistan mein climate-controlled, 24/7 monitored secure storage facility — short aur long-term warehousing Rawalpindi, Islamabad, Lahore, Peshawar. Moving ke dauraan ya baad mein samaan bilkul safe.",

  keywords:
    "secure storage Pakistan, warehouse storage Pakistan, climate controlled storage Pakistan, storage facility Islamabad, storage facility Rawalpindi, storage facility Lahore, storage Peshawar, short term storage Pakistan, long term warehousing Pakistan, self storage Pakistan, furniture storage Pakistan, moving storage Pakistan",

  heroImg:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920",

  intro: `International move ke dauraan ya phir visa, property ya kisi bhi wajah se delay ho jaye — aapko ek safe, clean aur secure jagah chahiye hoti hai jahan aapka qeemti samaan mehfooz rahe. Best International Movers & Logistics ki state-of-the-art storage facilities Rawalpindi, Islamabad, Lahore aur Peshawar mein available hain — climate control, 24/7 CCTV, aur full insurance ke saath. Chahe aapko hafte bhar ka storage chahiye ya saalon ka — hamari facility hamesha tayar hai.`,

  mainContent: [
    {
      heading: "Pakistan Mein Secure Storage Ki Zaroorat Kab Hoti Hai?",
      body: `Pakistan se baahar shift karte waqt aksar aisa hota hai ke visa processing mein waqt lag jata hai, naya ghar abhi ready nahi hota, ya property handover mein delay ho jata hai. Aisi soorat mein ghar ka saman aadhe hawa mein rehta hai — na yahan rakh sakte hain na wahan bhej sakte hain. Hamare secure storage solution mein aap apna packed samaan safely rakh sakte hain jab tak aapka move confirm na ho jaye.

Iske alawa kai log Pakistan mein apna ghar sell ya kiraye par de kar baadesh shift karte hain — aur kuch qeemti furniture ya items wahan nahi le ja sakte. Aise logon ke liye hamare long-term warehousing options bilkul perfect hain.`,
    },
    {
      heading: "Climate-Controlled Storage — Aapka Samaan Har Mausam Mein Safe",
      body: `Pakistan mein garmiyon ka mausam furniture, leather, electronics aur artwork ke liye bahut nuqsandeh ho sakta hai. Zyada garmi aur namee wood ko warp karti hai, leather ko phat-ti hai, aur electronics ke sensitive components ko damage karti hai. Hamare climate-controlled warehouses mein temperature aur humidity dono controlled hote hain — 365 din, 24 ghante. Agar aapka storage period 2 hafte se zyada hai — khaas taur par garmion mein — toh climate control lazmi hai.`,
    },
    {
      heading: "24/7 CCTV Monitoring aur Maximum Security",
      body: `Hamare tamam storage facilities mein multi-layer security hai. HD CCTV cameras har corner cover karte hain aur footage continuously record hoti hai. Restricted access system hai — sirf authorized personnel hi andar ja sakte hain. Fire suppression system installed hai. Raat ko bhi security guards on duty rehte hain. Aapka samaan hamare paas utna hi safe hai jitna aapke apne ghar mein — balke zyada, kyunke hamare paas dedicated security infrastructure hai.`,
    },
    {
      heading: "Short-Term vs Long-Term Storage — Aapke Liye Sahi Option",
      body: `Hamare paas dono options available hain. Short-term storage weekly ya monthly basis par available hai — khaas taur par un logon ke liye jo move ke dauraan temporary storage chahte hain. Long-term warehousing yearly plans ke saath available hai — businesses aur individuals dono ke liye. Pricing CBM ya pallet positions ke basis par hoti hai aur written quote mein in/out fees clearly likhi hoti hain — koi hidden charges nahi.`,
    },
    {
      heading: "Business Warehousing — E-Commerce aur Corporate Clients Ke Liye",
      body: `Sirf individuals hi nahi — hamare paas e-commerce sellers, importers, aur corporate clients ke liye bhi dedicated warehousing solutions hain. Inventory management system ke zariye aapko real-time update milti hai ke aapka stock kahan hai aur kitna hai. Import duty calculate karne ke liye hamare Custom Duty Calculator se bhi madad le sakte hain. Agar aap regularly Pakistan se baadesh samaan bhejte hain toh hamare sea freight ya air freight services ke saath warehousing combine karna sabse cost-effective solution hai.`,
    },
  ],

  features: [
    {
      icon: Thermometer,
      title: "Climate-Controlled Warehouses",
      desc: "Temperature aur humidity controlled environment — furniture, leather, electronics, artwork, aur documents ke liye perfect.",
    },
    {
      icon: Camera,
      title: "24/7 CCTV Surveillance",
      desc: "HD cameras har corner par, continuous recording, aur raat ko security guards — aapka samaan hamesha monitored.",
    },
    {
      icon: Clock,
      title: "Short & Long-Term Options",
      desc: "Weekly, monthly, ya yearly plans — aapki zaroorat ke hisaab se flexible storage duration available hai.",
    },
    {
      icon: FileText,
      title: "Inventory Management System",
      desc: "Har item ka digital record — kya rakkha hai, kab rakkha, aur kahan — sab kuch organized aur traceable.",
    },
    {
      icon: PackageOpen,
      title: "Easy Access Scheduling",
      desc: "24 ghante pehle notice par aap apna samaan access kar sakte hain — convenient aur flexible.",
    },
    {
      icon: ShieldCheck,
      title: "Full Insurance Coverage",
      desc: "Stored items par fire, theft, aur damage ke khilaf full insurance — complete peace of mind.",
    },
    {
      icon: Lock,
      title: "Restricted Access & Fire Suppression",
      desc: "Sirf authorized personnel ki entry, multi-lock system, aur automatic fire suppression system installed.",
    },
    {
      icon: Warehouse,
      title: "Business & E-Commerce Warehousing",
      desc: "Corporate clients aur e-commerce sellers ke liye dedicated pallet positions aur inventory tracking.",
    },
  ],

  faqs: [
    {
      q: "Kitne waqt tak storage kar sakte hain?",
      a: "Hum dono short-term (weekly/monthly) aur long-term (yearly) storage solutions offer karte hain. Koi minimum ya maximum duration ki pabandi nahi — aapki zaroorat ke hisaab se plan banate hain.",
    },
    {
      q: "Kya stored items insured hain?",
      a: "Haan, hamare facility mein rakha gaya tamam samaan fire, theft, aur damage ke khilaf fully insured hai. Insurance details written agreement mein clearly mention hoti hain.",
    },
    {
      q: "Kya main apna samaan storage ke dauraan access kar sakta hoon?",
      a: "Haan, 24 ghante pehle facility manager ko inform karein aur aap apna samaan access kar sakte hain. Scheduled access system hai taake aapka samaan organized rahe.",
    },
    {
      q: "Climate-controlled storage kiske liye zaroori hai?",
      a: "Wood furniture, leather sofas, electronics, documents, artwork, aur antiques ke liye climate control lazmi hai — khaas taur par agar storage period 2 hafte se zyada ho ya garmion mein ho. Pakistan ki garmi aur namee in items ko seriously damage kar sakti hai.",
    },
    {
      q: "Storage pricing kaise hoti hai?",
      a: "Pricing CBM (cubic meter) ya pallet positions, duration, aur handling frequency ke hisaab se hoti hai. Written quote mein in/out fees clearly likhi jaati hain — koi hidden charges nahi. Free quote ke liye abhi contact karein.",
    },
    {
      q: "Kya moving ke saath storage combine ho sakta hai?",
      a: "Bilkul — hamare international moving, professional packing, aur storage services ko combine karna sabse popular option hai. Aapka samaan pack hoga, store hoga, aur jab ready ho jayen toh ship kar diya jaye ga.",
    },
    {
      q: "Business warehousing ke liye kya options hain?",
      a: "E-commerce sellers, importers, aur corporate clients ke liye dedicated pallet positions aur real-time inventory management available hai. Sea freight ya air freight ke saath combine karke end-to-end logistics solution milta hai.",
    },
    {
      q: "Rawalpindi, Islamabad, Lahore aur Peshawar mein storage available hai?",
      a: "Haan, hamare storage facilities Pakistan ke tamam major cities mein available hain. Apne sheher ke facility ke baare mein jaankari ke liye hamare team se contact karein.",
    },
  ],

  relatedServices: [
    { label: "Professional Packing Service", href: "/services/professional-packing" },
    { label: "International Moving Pakistan", href: "/services/international-moving" },
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
    { label: "10 Tips for Stress-Free International Move 2025", href: "/blog/tips-for-stress-free-international-move" },
    { label: "Air Freight vs Sea Freight from Pakistan", href: "/blog/air-freight-vs-sea-freight-pakistan" },
    { label: "Pakistan Customs Import Regulations 2025 Guide", href: "/blog/customs-regulations-guide-pakistan" },
    { label: "International Shipping Cost from Pakistan", href: "/blog/international-shipping-cost-pakistan/" },
    { label: "Packing Tips for House Shifting Pakistan", href: "/blog/packing-tips-house-shifting/" },
  ],
};

// ─── Schema ──────────────────────────────────────────────────────────────────

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Secure Storage Pakistan — Best International Movers & Logistics",
    serviceType: "Warehousing & Storage",
    description: serviceData.desc,
    url: "https://bestintlmovers.com/services/secure-storage-services",
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
      name: "Storage Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Short Term Storage Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Long Term Warehousing Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Climate Controlled Storage Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Warehousing Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Storage Pakistan" } },
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

const SecureStorageService = () => {
  const serviceSeo = {
    title:
      "Secure Storage Pakistan | Climate-Controlled Warehouse | Best International Movers",
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
              <span className="text-gold">Secure Storage</span>
            </nav>



            {/* ── H1 ── */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <serviceData.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Secure-Storage Services
              </h1>
            </div>

            <img 
              src="/images/secure-storage.png" 
              alt="Secure-Storage Services" 
              className="w-full h-auto object-cover rounded-2xl mb-10 shadow-lg border-2 border-border"
            />

            {/* ── Intro ── */}
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
                  Pakistan se baahar shift karte waqt — chahe Pakistan se Dubai, UK, ya Canada — visa
                  processing ya property handover mein delay ho sakti hai. Aise mein aapka packed
                  samaan hamare secure facility mein safely reh sakta hai. Agar aap ghar sell ya
                  kiraye par de rahe hain aur kuch items temporarily store karne hain, ya
                  internationally shift karne ke baad bhi kuch cheezein Pakistan mein rakhni hain —
                  hamare long-term warehousing options bilkul perfect hain. Hamare{" "}
                  <Link to="/services/professional-packing" className="text-gold hover:underline font-medium">
                    professional packing service
                  </Link>{" "}
                  ke saath storage combine karna sabse popular aur cost-effective option hai.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[1].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pakistan mein garmiyon ka mausam furniture, leather, electronics aur artwork ke
                  liye bahut nuqsandeh ho sakta hai. Zyada garmi aur namee wood ko warp karti hai,
                  leather ko phat-ti hai, aur electronics ke sensitive components ko damage karti
                  hai. Hamare climate-controlled warehouses mein temperature aur humidity dono
                  controlled hote hain — 365 din, 24 ghante. Agar aapka samaan pehle se professionally
                  packed hai toh climate control ke saath stored hone par yeh bilkul perfect condition
                  mein rehta hai.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[2].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hamare tamam storage facilities mein multi-layer security hai. HD CCTV cameras har
                  corner cover karte hain aur footage continuously record hoti hai. Restricted access
                  system hai — sirf authorized personnel hi andar ja sakte hain. Fire suppression
                  system installed hai. Raat ko bhi security guards on duty rehte hain. Aapka samaan
                  hamare paas utna hi safe hai jitna aapke apne ghar mein — balke zyada. Hamare 15
                  saalon ke tajurbe mein koi bhi incident nahi hua — yeh hamare security system ki
                  sabse badi daleel hai.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[3].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hamare paas dono options available hain. Short-term storage weekly ya monthly basis
                  par available hai — khaas taur par un logon ke liye jo{" "}
                  <Link to="/services/international-moving" className="text-gold hover:underline font-medium">
                    international move
                  </Link>{" "}
                  ke dauraan temporary storage chahte hain. Long-term warehousing yearly plans ke
                  saath available hai. Pricing CBM ya pallet positions ke basis par hoti hai aur
                  written quote mein in/out fees clearly likhi hoti hain — koi hidden charges nahi.
                  Free quote ke liye abhi contact karein.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {serviceData.mainContent[4].heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  E-commerce sellers, importers, aur corporate clients ke liye dedicated warehousing
                  solutions hain. Inventory management system ke zariye real-time update milti hai.
                  Import duty calculate karne ke liye hamare Custom Duty Calculator se bhi madad le
                  sakte hain. Agar aap regularly Pakistan se baadesh samaan bhejte hain toh hamare
                  sea freight ya air freight services ke saath warehousing combine karna sabse
                  cost-effective solution hai. Delivery ke liye hamare last mile delivery service
                  bhi available hai.
                </p>
              </div>
            </div>

            {/* ── FEATURES GRID ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Hamare Secure Storage Ki Khasiyaat
              </h2>
              <p className="text-muted-foreground mb-6">
                Pakistan mein sirf Best International Movers ke paas itna complete aur secure
                warehousing infrastructure hai — 5,000+ satisfied clients ka bharosa hamare saath hai.
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

            {/* ── WHY CHOOSE US ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Hamari Storage Facility Kyun Chunen?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pakistan mein bahut sare general warehouses hain lekin un mein climate control nahi
                hoti, insurance nahi hoti, aur professional inventory system nahi hota. Hamare
                facility mein har cheez documented hai — aap kabhi bhi jaanch sakte hain ke aapka
                samaan kahan hai aur kis haal mein hai. Yeh transparency hi hamare 15 saalon ke
                safar ka raaz hai.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hamare storage service ko professional packing aur international moving ke saath
                combine karne par aapko complete door-to-door solution milta hai — packing se le kar
                storage, aur storage se le kar final delivery tak. Hamare moving process mein storage
                integration ka poora detail maujood hai.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Agar aap packing materials alag se chahte hain toh hamare packing materials supply
                service bhi available hai — ISPM-15 certified crates aur export-grade packaging ke saath.
              </p>
            </div>

            {/* ── FAQ ── */}
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Secure Storage Ke Baare Mein Aksar Pooche Jane Wale Sawaal
              </h2>
              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0 last:pb-0">
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-start gap-2">
                      <Star size={16} className="text-gold mt-1 flex-shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground pl-6">
                      {index === 5 ? (
                        <>
                          Bilkul — hamare{" "}
                          <Link
                            to="/services/international-moving"
                            className="text-gold hover:underline font-medium"
                          >
                            international moving
                          </Link>
                          ,{" "}
                          <Link
                            to="/services/professional-packing"
                            className="text-gold hover:underline font-medium"
                          >
                            professional packing
                          </Link>
                          , aur storage services ko combine karna sabse popular option hai. Aapka
                          samaan pack hoga, store hoga, aur jab ready ho jayen toh ship kar diya
                          jaye ga.
                        </>
                      ) : index === 6 ? (
                        <>
                          E-commerce sellers, importers, aur corporate clients ke liye dedicated
                          pallet positions aur real-time inventory management available hai.{" "}
                          <Link
                            to="/services/sea-freight"
                            className="text-gold hover:underline font-medium"
                          >
                            Sea freight
                          </Link>{" "}
                          ya{" "}
                          <Link
                            to="/services/air-freight"
                            className="text-gold hover:underline font-medium"
                          >
                            air freight
                          </Link>{" "}
                          ke saath combine karke end-to-end logistics solution milta hai.
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
                Related Services — Complete Moving & Logistics Solution
              </h2>
              <p className="text-muted-foreground mb-6">
                Secure storage ke saath yeh services combine karein aur apna move bilkul tension-free
                banayein.
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
                Pakistan Mein Hamare Storage Service Areas
              </h2>
              <p className="text-muted-foreground mb-6">
                Hamare secure storage facilities Rawalpindi, Islamabad, Lahore aur Peshawar mein
                available hain. Apne sheher ke liye click karein:
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
                Yahan Se Shift Ho Rahe Hain? Hamare Destination Pages Dekhein
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
                Helpful Moving & Storage Guides
              </h2>
              <p className="text-muted-foreground mb-5">
                Apna international move better plan karne ke liye hamare{" "}
                <Link to="/blog" className="text-gold hover:underline font-medium">
                  moving blog
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
                Secure Storage Ki Zaroorat Hai?
              </h2>
              <p className="text-muted-foreground mb-2">
                Aaj hi free quote lein — climate-controlled, insured storage Pakistan mein.
              </p>
              <p className="text-muted-foreground mb-8 text-sm">
                Rawalpindi | Islamabad | Lahore | Peshawar — Short & Long Term Available
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
                <Link to="/faq" className="text-gold hover:underline">
                  FAQ
                </Link>{" "}
                dekhein ya{" "}
                <Link to="/process" className="text-gold hover:underline">
                  moving process
                </Link>{" "}
                samjhein — puri detail maujood hai.
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

export default SecureStorageService;