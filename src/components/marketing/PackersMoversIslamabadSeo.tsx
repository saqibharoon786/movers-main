import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  Globe,
  Home,
  Landmark,
  MessageCircle,
  Package,
  Phone,
  Star,
  Truck,
  Warehouse,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const WA = "https://wa.me/923009130211";
const PHONE_DISPLAY = "0300-9130211";
const CONTACT_EMAIL = "info@bestintlmovers.com";
const PATH = "/packers-and-movers-islamabad/";
const SITE_PAGE = "https://bestintlmovers.com/packers-and-movers-islamabad/";

const SEO_TITLE = "Packers and Movers in Islamabad | Best International Movers & Logistics";
const SEO_DESCRIPTION =
  "Top packers and movers in Islamabad offering professional home shifting, office relocation & international moving. Serving F-6, F-7, G-11, DHA, Bahria Town & all sectors. Call 0300-9130211 for free quote!";
const SEO_KEYWORDS =
  "packers and movers islamabad, movers and packers islamabad, house shifting islamabad, home shifting islamabad, office relocation islamabad, moving company islamabad";

const stats = [
  { label: "5,000+", sub: "Happy Families" },
  { label: "15+", sub: "Years Experience" },
  { label: "All ISB", sub: "Sectors Covered" },
  { label: "Same Day", sub: "Available" },
];

const serviceCards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Home,
    title: "House Shifting Islamabad",
    description:
      "Complete home shifting service covering all Islamabad sectors. We pack, load, transport and unpack everything safely. Studio to 5+ bedroom homes handled with equal care.",
  },
  {
    icon: Building2,
    title: "Office Relocation Islamabad",
    description:
      "Minimal downtime office moves in Islamabad. We shift your computers, furniture, documents and equipment safely with proper labeling and organized reinstallation.",
  },
  {
    icon: Package,
    title: "Professional Packing Service",
    description:
      "Expert packing using double-wall boxes, bubble wrap, foam padding and custom crates. We handle fragile items, antiques, TVs, artwork and valuables with extra care.",
  },
  {
    icon: Globe,
    title: "International Moving Islamabad",
    description:
      "Door-to-door international relocation from Islamabad to UAE, UK, USA, Canada, Saudi Arabia and 100+ countries. Sea freight and air freight both available.",
  },
  {
    icon: Truck,
    title: "Cargo & Freight Services",
    description:
      "Air cargo and sea freight from Islamabad to worldwide destinations. FCL and LCL options. Customs clearance handled completely by our team.",
  },
  {
    icon: Warehouse,
    title: "Storage & Warehousing",
    description:
      "Secure, climate-controlled storage facilities in Islamabad. Short and long-term options available. 24/7 CCTV monitored. Fully insured.",
  },
  {
    icon: Car,
    title: "Vehicle Transport Islamabad",
    description:
      "Safe and insured vehicle transport within Pakistan and international vehicle shipping to UAE, UK, Canada and worldwide.",
  },
  {
    icon: Landmark,
    title: "Diplomatic & Embassy Moves",
    description:
      "Specialized moving services for diplomatic staff, embassy personnel and UN officials in Islamabad with full protocol compliance.",
  },
];

const areaBlocks: { heading: string; text: string }[] = [
  {
    heading: "F-Sectors",
    text:
      "F-5 | F-6 | F-7 | F-8 | F-9 | F-10 | F-11 | F-6/3 | F-7/1 | F-7/2 | F-7/3 | F-7/4 | F-8/1 | F-8/2 | F-8/3",
  },
  {
    heading: "G-Sectors",
    text: "G-5 | G-6 | G-7 | G-8 | G-9 | G-10 | G-11 | G-13 | G-14 | G-15 | G-16",
  },
  {
    heading: "Premium Areas",
    text:
      "DHA Islamabad | Bahria Enclave | Diplomatic Enclave | Blue Area | Margalla Hills | Park Enclave | Naval Anchorage | Gulberg Greens | PWD Housing Society",
  },
  {
    heading: "E-Sectors & I-Sectors",
    text: "E-7 | E-8 | E-11 | I-8 | I-9 | I-10 | I-11 | I-14 | I-15 | I-16",
  },
];

const whyPoints: { title: string; body: string }[] = [
  {
    title: "15+ Years Experience in Islamabad",
    body: "We know Islamabad like the back of our hand. Every sector, every society, every high-rise — our team navigates it all efficiently saving you time and stress.",
  },
  {
    title: "Trained & Verified Staff",
    body: "All our packers and movers in Islamabad are background verified, professionally trained and supervised by experienced coordinators. Your belongings are in safe hands.",
  },
  {
    title: "Premium Packing Materials",
    body: "We use only high-quality packing materials — double-wall corrugated boxes, industrial bubble wrap, foam padding, stretch wrap and custom wooden crates for fragile items.",
  },
  {
    title: "Fully Insured Moves",
    body: "Every home shift and office move in Islamabad is fully insured. In the rare case of damage, we cover it completely. Zero stress for you.",
  },
  {
    title: "GPS Tracked Transport",
    body: "Track your belongings in real-time during transport. Our fleet of well-maintained trucks are GPS equipped for complete transparency.",
  },
  {
    title: "Transparent Pricing",
    body: "No hidden charges. No surprises. We give you a detailed written quote after free home survey. What we quote is what you pay — nothing more.",
  },
  {
    title: "Same Day Shifting Available",
    body: "Need urgent shifting in Islamabad? We offer same-day service with advance booking before 10 AM. Call 0300-9130211 now.",
  },
  {
    title: "Complete Service Under One Roof",
    body: "Packing, loading, transport, unloading, unpacking and debris removal — all done by us. You just sit back and relax.",
  },
];

const pricingRows: { label: string; range: string; includes: string }[] = [
  {
    label: "Studio / 1 Bedroom",
    range: "PKR 15,000 – 25,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "2 Bedroom",
    range: "PKR 25,000 – 40,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "3 Bedroom",
    range: "PKR 35,000 – 55,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "4–5 Bedroom",
    range: "PKR 50,000 – 80,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "Office (Small)",
    range: "PKR 20,000 – 40,000",
    includes: "IT Equipment + Furniture + Documents",
  },
  {
    label: "Office (Large)",
    range: "PKR 40,000 – 100,000+",
    includes: "Custom quote after survey",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Free Home Survey",
    body: "Call us or WhatsApp. We visit your home in Islamabad for a free survey. Our expert assesses all items and gives you an accurate written quote — no obligations.",
  },
  {
    title: "Booking Confirmation",
    body: "Confirm your moving date. We block the date for you and send a professional team to your location on the agreed day and time.",
  },
  {
    title: "Professional Packing",
    body: "Our trained packers arrive with all materials. Every item is carefully wrapped, labeled and packed systematically for easy unpacking at destination.",
  },
  {
    title: "Safe Loading",
    body: "Our experienced loading team uses proper equipment and techniques to load your belongings without any damage. Fragile items handled with special care.",
  },
  {
    title: "GPS Tracked Transport",
    body: "Your belongings are transported in our well-maintained trucks with GPS tracking. You can monitor progress via our WhatsApp updates.",
  },
  {
    title: "Delivery & Unloading",
    body: "Professional unloading at your new Islamabad address or any other city. Items placed exactly where you want them.",
  },
  {
    title: "Unpacking & Setup",
    body: "We unpack all boxes, set up furniture and remove all packing debris. Your new home is ready to live in immediately.",
  },
  {
    title: "Follow-Up",
    body: "We call you 24 hours after the move to ensure everything is perfect. Your satisfaction is our guarantee.",
  },
];

const testimonials = [
  {
    name: "Ali Hassan",
    meta: "House Shift — F-8 to DHA Islamabad",
    quote:
      "Best packers and movers in Islamabad without doubt! They shifted our 3-bedroom house from F-8 to DHA in just one day. Not a single item was damaged. The team was super professional and on time. Highly recommend to everyone in Islamabad!",
  },
  {
    name: "Zara Ahmed",
    meta: "Office Relocation — Blue Area Islamabad",
    quote:
      "We hired them for office relocation in Blue Area Islamabad. They packed over 50 computers, all furniture and files perfectly. Zero downtime for our business. Amazing service at very reasonable rates!",
  },
  {
    name: "Muhammad Tariq",
    meta: "House Shift — G-11 to Bahria Enclave",
    quote:
      "Moved from G-11 to Bahria Enclave. The team was punctual, careful with fragile items and very affordable. They even helped us with unpacking and setup. Will use again for sure!",
  },
  {
    name: "Fatima Sheikh",
    meta: "International Move — Islamabad to Dubai",
    quote:
      "Excellent international moving service from Islamabad to Dubai. They handled all customs clearance, sea freight and door delivery in Dubai. Everything arrived safely in 14 days. Outstanding service!",
  },
  {
    name: "James Wilson",
    meta: "Diplomatic Move — Islamabad",
    quote:
      "Used for shifting from Diplomatic Enclave to F-7. The team understood protocol requirements perfectly. Very professional, discreet and efficient. Strongly recommended for diplomatic community moves!",
  },
];

// ✅ FIXED: Long Guide Content with NO self-referencing links
// Only 2 links to /home-shifting-islamabad (max limit)
const LongGuideContent = () => {
  return (
    <>
      <p className="text-sm md:text-base leading-relaxed mb-4">
        If you are comparing professional moving services for the first time, start with scope—not slogans. 
        A professional move should define what is packed, what is dismantled, how many crew members attend, 
        which truck size is used, and whether unpacking and debris removal are included. When those items are vague, 
        you will almost always see last-minute add-ons or rushed packing that increases damage risk. Our survey-first 
        approach exists specifically to prevent that outcome: we look at corridors, elevator timing, parking distance, 
        and fragile inventory before we commit a crew count and a price band that we can honour.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Moving companies often compete on the lowest headline number, but the lowest headline rarely includes the same 
        service depth. Ask whether wardrobe cartons are included, whether mattress bags are used, whether bubble wrap 
        is unlimited or capped, and whether night shifts carry a surcharge.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Residential moves differ materially by building type. A ground-floor villa with driveway access is not the same 
        as a twelfth-floor apartment with a single service lift. The second scenario needs more labour minutes, better 
        sequencing of heavy items, and sometimes a smaller first-load shuttle. We plan those details in writing so your 
        move day does not become an improvised experiment with your dining table on a tight landing.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Families with children or elderly members benefit from calmer pacing: earlier start times, clearer room priorities, 
        and labelled 'open first' boxes that stay outside the sealed moving inventory. We coach clients on what to keep 
        personally so those items never disappear into a generic carton.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Corporate moves should protect revenue. That means labelled IT lanes, padded monitor handling, secure file cartons, 
        and optional after-hours execution. We coordinate with your IT focal person so dismantling and reassembly follow 
        your internal policies. If you are also shipping assets abroad, we align packing standards early so you do not 
        repack twice for export compliance.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        International segments layered onto a local move require inventory discipline. Our{" "}
        <Link to="/international-moving" className="text-gold font-semibold hover:underline">
          international moving services
        </Link>{" "}
        integrate with cargo workflows so timelines do not fight each other.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Insurance and liability conversations matter. 'Fully insured' should point to a written option with clear limits. 
        We explain coverage in plain language during quotation so you can decide whether to upgrade protection for 
        high-value art or imported appliances.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Packing materials quality is not cosmetic. Double-wall cartons resist edge crush; stretch film stabilizes drawers; 
        foam corners reduce pressure on glass. When clients ask why premium movers cost more, the answer is material volume 
        plus trained labour hours—not a mysterious brand tax.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Same-day shifting is achievable when inventory is modest and booking happens early. If you need urgent service, 
        send photos and a room-by-room list before 10 AM so we can confirm truck and crew availability realistically.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        High-rise moves demand elevator discipline and floor protection in corridors. Our teams carry runner mats and 
        corner guards. Clients should expect supervisors who speak calmly under pressure—because panic on a landing is 
        how scuffs happen. We train for steady movement, not rushed heroics that cost you at{" "}
        <Link to="/home-shifting-islamabad" className="text-gold font-semibold hover:underline">
          delivery time
        </Link>.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Diplomatic moves require discretion and clear communication with security posts. If you represent an embassy, 
        mention it during booking so we assign experienced crews.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Intercity relocation adds route risk: overnight fog, weighbridge delays, and seasonal traffic. Long-distance 
        moves include secure loading patterns and driver rest compliance. We structure handoffs so you always know 
        where the truck is.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Storage bridges solve real life: your new flat is not ready or your shipment arrived early. Our{" "}
        <Link to="/secure-storage-islamabad" className="text-gold font-semibold hover:underline">
          secure storage facilities
        </Link>{" "}
        are climate-controlled and CCTV monitored. We connect storage timelines with your move plan.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        Before signing any contract, verify crew identity and written scope. Professional movers will document 
        high-value items separately. If a vendor refuses written scope, treat that as a red flag regardless of price.
      </p>

      <p className="text-sm md:text-base leading-relaxed mb-4">
        After delivery, run inventory checks while the crew lead is present. A professional relocation partner wants 
        closure as much as you do: clean debris removal and a follow-up call the next day.
      </p>
    </>
  );
};

// ✅ FIXED: Schema using @graph structure with CORRECT email
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": `${SITE_PAGE}#movingcompany`,
      name: "Best International Movers & Logistics - Islamabad",
      url: SITE_PAGE,
      telephone: "+923009130211",
      email: CONTACT_EMAIL,
      description: SEO_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blue Area, Jinnah Avenue",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      areaServed: [
        "F-6 Islamabad",
        "F-7 Islamabad",
        "F-8 Islamabad",
        "F-10 Islamabad",
        "G-11 Islamabad",
        "DHA Islamabad",
        "Bahria Town Islamabad",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "247",
        reviewCount: "247",
      },
      priceRange: "$$",
      paymentAccepted: "Cash, Bank Transfer, Credit Card",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_PAGE}#localbusiness`,
      name: "Best International Movers & Logistics - Islamabad",
      url: SITE_PAGE,
      telephone: "+923009130211",
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blue Area, Jinnah Avenue",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "247",
        reviewCount: "247",
      },
    },
  ],
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What are the charges for packers and movers in Islamabad?",
    a: "Charges start from PKR 15,000 for a studio or 1-bedroom home and go up to PKR 80,000+ for large homes or offices. The exact cost depends on number of items, distance, floors and packing requirements. We provide a free detailed quote after home survey with no hidden charges.",
  },
  {
    q: "Do you cover all sectors of Islamabad?",
    a: "Yes, we provide services in all sectors including F-6, F-7, F-8, F-10, F-11, G-9, G-10, G-11, G-13, DHA, Bahria Enclave, Blue Area, Diplomatic Enclave, E-7, E-11, I-8, I-10, Park Enclave and all other areas.",
  },
  {
    q: "How long does house shifting take in Islamabad?",
    a: "A standard 2-3 bedroom house shift takes 6-10 hours with our professional team of 4-6 packers and movers. Larger homes may require 1-2 days.",
  },
  {
    q: "Do you offer same day shifting in Islamabad?",
    a: "Yes, we offer same-day shifting with advance notice before 10 AM. Our team is always on standby for urgent moves.",
  },
  {
    q: "Is my furniture insured during shifting?",
    a: "Yes, all home shifts and office moves are fully insured against damage or loss during transit. In the rare case of any damage, we cover it completely at no extra cost.",
  },
  {
    q: "Do you dismantle and reassemble furniture?",
    a: "Yes, our team professionally dismantles all furniture including beds, wardrobes, sofas and dining tables for safe transport and reassembles everything at your new location.",
  },
  {
    q: "Do you provide packing boxes and materials?",
    a: "Yes, we bring all packing materials to your home — double-wall boxes, bubble wrap, foam padding, packing tape, stretch wrap, wardrobe boxes and furniture covers.",
  },
  {
    q: "Can you move to another city from Islamabad?",
    a: "Yes, we provide intercity moving from Islamabad to Rawalpindi, Lahore, Peshawar, Karachi, Multan and all cities across Pakistan. We also offer international moving to UAE, UK, USA, Canada and 100+ countries.",
  },
  {
    q: "How do I book packers and movers in Islamabad?",
    a: "Simply call 0300-9130211 or WhatsApp us. We will arrange a free home survey within 24 hours, provide a detailed written quote and confirm your moving date.",
  },
  {
    q: "Do you work on weekends in Islamabad?",
    a: "Yes, we operate Monday through Saturday 8 AM to 8 PM. Sunday emergency service is also available.",
  },
  {
    q: "Can you handle high-rise apartment moves in Islamabad?",
    a: "Yes, we specialize in high-rise apartment shifts. Our team is experienced with elevator coordination, narrow corridors and multi-floor moves in all major apartment complexes.",
  },
  {
    q: "Do you offer international moving from Islamabad?",
    a: "Yes, we provide complete international moving services to UAE, UK, USA, Canada, Saudi Arabia, Australia and 100+ countries via sea freight and air freight with door-to-door delivery and customs clearance.",
  },
];

const faqSchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const PackersMoversIslamabadSeo = () => {
  useSEO({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    urlPath: PATH,
    schema: [schemaMarkup, faqSchemaMarkup],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb className="mb-8" items={[{ label: "Packers and Movers Islamabad" }]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold text-xs md:text-sm font-semibold tracking-wide uppercase">
              Islamabad&apos;s #1 Rated Moving Company
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              Packers and Movers in Islamabad
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional relocation specialists offering safe{" "}
              <Link to="/home-shifting-islamabad" className="text-gold font-semibold hover:underline">
                residential moving services
              </Link>
              ,{" "}
              <Link to="/office-relocation-islamabad" className="text-gold font-semibold hover:underline">
                corporate relocation solutions
              </Link>
              {" "}and{" "}
              <Link to="/international-moving" className="text-gold font-semibold hover:underline">
                worldwide shipping
              </Link>
              . All Islamabad sectors covered. Call{" "}
              <a className="text-gold font-semibold hover:underline" href="tel:03009130211">
                {PHONE_DISPLAY}
              </a>{" "}
              for a free survey.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-3xl mx-auto text-left">
              {stats.map((s) => (
                <div
                  key={s.sub}
                  className="flex gap-2 items-start rounded-xl border border-gold/20 bg-navy-mid/50 px-3 py-3 md:px-4 md:py-4"
                >
                  <Check className="text-gold shrink-0 mt-0.5" size={18} aria-hidden />
                  <div>
                    <p className="text-sm md:text-base font-display font-bold text-foreground leading-tight">{s.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold"
              >
                Get Free Quote <ArrowRight size={18} aria-hidden />
              </Link>
              <a
                href="tel:03009130211"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/40 bg-navy-mid font-bold text-foreground"
              >
                <Phone size={18} className="text-gold" aria-hidden />
                Call Now: {PHONE_DISPLAY}
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border font-bold"
              >
                <MessageCircle size={18} className="text-gold" aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 container mx-auto px-4 max-w-4xl space-y-16 md:space-y-24 text-muted-foreground leading-relaxed">
        {/* Introduction Section */}
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-5">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Best Packers and Movers in Islamabad
          </h2>
          <p>
            Looking for reliable relocation services? Our company is Islamabad&apos;s most trusted moving partner with 15+ years 
            of experience and 5,000+ successful moves. We provide complete{" "}
            <Link to="/home-shifting-islamabad" className="text-gold font-semibold hover:underline">
              home relocation services
            </Link>
            ,{" "}
            <Link to="/office-relocation-islamabad" className="text-gold font-semibold hover:underline">
              office moving solutions
            </Link>
            , and{" "}
            <Link to="/international-moving" className="text-gold font-semibold hover:underline">
              overseas shipping
            </Link>{" "}
            across all sectors.
          </p>
          <p>
            Our professional team handles everything from careful packing to safe delivery. We also offer specialized 
            <Link to="/cargo-service-islamabad" className="text-gold font-semibold hover:underline">
              {" "}logistics and freight services
            </Link>
            {" "}and{" "}
            <Link to="/secure-storage-islamabad" className="text-gold font-semibold hover:underline">
              climate-controlled warehousing
            </Link>
            . For urgent shipments, check our{" "}
            <Link to="/air-freight-islamabad" className="text-gold font-semibold hover:underline">
              express air freight
            </Link>{" "}
            options.
          </p>
          <p>
            Need services in nearby cities? We also provide{" "}
            <Link to="/movers-rawalpindi" className="text-gold font-semibold hover:underline">
              moving solutions in Rawalpindi
            </Link>
            {" "}and{" "}
            <Link to="/packers-and-movers-lahore" className="text-gold font-semibold hover:underline">
              professional packers in Lahore
            </Link>
            . For Dubai relocations, visit our{" "}
            <Link to="/pakistan-to-dubai-movers" className="text-gold font-semibold hover:underline">
              UAE moving specialists
            </Link>{" "}
            page.
          </p>
          <p>
            For any inquiries, email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold font-semibold hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or call {PHONE_DISPLAY}.
          </p>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 py-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
            Get Free Quote <ArrowRight size={18} aria-hidden />
          </Link>
          <a href="tel:03009130211" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/40 bg-navy-mid font-bold text-foreground">
            <Phone size={18} className="text-gold" aria-hidden />
            Call Now
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border font-bold">
            <MessageCircle size={18} className="text-gold" aria-hidden />
            WhatsApp
          </a>
        </div>

        {/* Complete Guide Section */}
        <section className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Complete Guide: Hiring Professional Movers
          </h2>
          <LongGuideContent />
        </section>

        {/* Service Coverage Areas */}
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-5">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Service Coverage Areas</h2>
          <p>
            Our teams cover every corner of the capital. For service in Rawalpindi, see{" "}
            <Link to="/movers-rawalpindi" className="text-gold font-semibold hover:underline">our Rawalpindi division</Link>.
          </p>
          <div className="space-y-6">
            {areaBlocks.map((block) => (
              <div key={block.heading}>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{block.heading}</h3>
                <p className="text-sm md:text-base bg-navy-mid/40 rounded-lg border border-border px-4 py-3">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 text-sm md:text-base">
            <strong className="text-foreground">Pickup and delivery</strong> available from{" "}
            <strong className="text-foreground">ALL areas of Islamabad</strong>. Call{" "}
            <a className="text-gold font-semibold hover:underline" href="tel:03009130211">{PHONE_DISPLAY}</a>{" "}
            to confirm your specific location.
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Why Customers Trust Our Services
          </h2>
          {whyPoints.map((point, i) => (
            <div key={point.title} className="space-y-2">
              <h3 className="text-base md:text-lg font-display font-semibold text-foreground flex gap-2 items-start">
                <Check className="text-gold shrink-0 mt-1" size={20} />
                <span>{i + 1}. {point.title}</span>
              </h3>
              <p className="pl-0 md:pl-8 text-sm md:text-base">{point.body}</p>
            </div>
          ))}
        </section>

        {/* Services Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            Moving Services in Islamabad
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-6">
            Complete moving solutions for homes, offices and international relocations. 
            From <Link to="/home-shifting-islamabad" className="text-gold font-semibold hover:underline">residential moves</Link> to{" "}
            <Link to="/international-moving" className="text-gold font-semibold hover:underline">global shipping</Link>, we handle it all.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {serviceCards.map(({ icon: Icon, title, description }) => (
              <article key={title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/25 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-gold/15 p-2 text-gold">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
          <p className="text-center text-sm mt-4">
            Need specialized logistics? Explore our{" "}
            <Link to="/cargo-service-islamabad" className="text-gold font-semibold hover:underline">cargo services</Link>,{" "}
            <Link to="/air-freight-islamabad" className="text-gold font-semibold hover:underline">air freight</Link>, and{" "}
            <Link to="/secure-storage-islamabad" className="text-gold font-semibold hover:underline">storage solutions</Link>.
          </p>
        </section>

        {/* Pricing Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Packers and Movers Charges in Islamabad 2025
          </h2>
          <p>
            Transparent pricing with no hidden charges. For international moves, see our{" "}
            <Link to="/international-moving" className="text-gold font-semibold hover:underline">international moving rates</Link>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-left min-w-[520px]">
              <thead className="bg-navy-mid/70 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Move type</th>
                  <th className="px-4 py-3 font-semibold">Typical range</th>
                  <th className="px-4 py-3 font-semibold">Includes</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                    <td className="px-4 py-3 text-gold whitespace-nowrap">{row.range}</td>
                    <td className="px-4 py-3">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm">
            <p className="font-semibold text-foreground">Note: Prices vary based on distance, number of items, floors, and packing requirements.</p>
            <p className="mt-2">
              <strong className="text-foreground">Get exact quote:</strong> Call{" "}
              <a className="text-gold hover:underline" href="tel:03009130211">{PHONE_DISPLAY}</a>{" "}
              or email{" "}
              <a className="text-gold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </section>

        {/* Moving Process */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            Our Home Shifting Process
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            A repeatable process separates amateur labour from professional{" "}
            <Link to="/home-shifting-islamabad" className="text-gold font-semibold hover:underline">home shifting</Link> execution.
          </p>
          <ol className="space-y-5 list-decimal pl-5 md:pl-6">
            {processSteps.map((step) => (
              <li key={step.title}>
                <strong className="text-foreground">{step.title}.</strong> {step.body}
              </li>
            ))}
          </ol>
        </section>

        {/* Testimonials */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            What Our Islamabad Clients Say
          </h2>
          <div className="space-y-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="glass-card rounded-xl p-6 border border-border">
                <div className="flex gap-1 text-gold mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-foreground/95 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-gold">{t.name}</span>
                  <span className="text-muted-foreground"> — {t.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card rounded-xl p-5 md:p-6 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2 text-base">{f.q}</h3>
                <p className="text-sm md:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-5 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Get a Free Quote</h2>
          <p className="max-w-2xl mx-auto">
            Call {PHONE_DISPLAY} or email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold font-semibold hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            to get a free survey and exact moving cost.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:03009130211" className="inline-flex items-center justify-center px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
              Call Now: {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/40 font-bold">
              Email Us
            </a>
          </div>
        </section>

        {/* Final Booking Section */}
        <section className="text-center glass-card rounded-3xl p-10 md:p-14 border border-gold/20 space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Book Packers and Movers in Islamabad Today
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Get a free no-obligation quote from Islamabad&apos;s most trusted moving company. 
            Also serving <Link to="/movers-rawalpindi" className="text-gold hover:underline">Rawalpindi</Link> and{" "}
            <Link to="/packers-and-movers-lahore" className="text-gold hover:underline">Lahore</Link>.
          </p>
          <div className="text-sm md:text-base space-y-2 text-left max-w-md mx-auto border border-border rounded-xl p-5 bg-navy-mid/40">
            <p><span className="text-foreground font-semibold">Call:</span> <a className="text-gold hover:underline" href="tel:03009130211">{PHONE_DISPLAY}</a></p>
            <p><span className="text-foreground font-semibold">WhatsApp:</span> <a className="text-gold hover:underline" href={WA} target="_blank" rel="noopener noreferrer nofollow">{PHONE_DISPLAY}</a></p>
            <p><span className="text-foreground font-semibold">Email:</span> <a className="text-gold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <p><span className="text-foreground font-semibold">Hours:</span> Mon–Sat 8:00 AM – 8:00 PM</p>
            <p><span className="text-foreground font-semibold">Office:</span> Blue Area, Jinnah Avenue, Islamabad</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a href={WA} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border border-border bg-navy-mid font-bold">
              <MessageCircle size={18} className="text-gold" />
              WhatsApp Now
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border border-gold/30 font-bold">
              Email Us
            </a>
          </div>
        </section>
      </main>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PackersMoversIslamabadSeo;