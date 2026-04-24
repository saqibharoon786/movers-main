import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, Ship, Truck, Plane, Globe, Package, Warehouse, Car, FileCheck, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, ChevronDown, PawPrint, Shield, Boxes } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const allServices = [
  {
    slug: "freight-forwarding",
    icon: Route,
    title: "International Freight Forwarding",
    desc: "Sea, air & land logistics with customs clearance and end-to-end coordination.",
    longDesc:
      "As one of Pakistan's trusted freight forwarding companies, we manage the entire logistics chain for your international and domestic shipments. From booking space on vessels and aircraft to handling customs clearance and last-mile delivery, our experienced freight forwarding team ensures your goods move efficiently, cost-effectively, and on time.",
    features: [
      "Sea freight forwarding (FCL & LCL) and special equipment",
      "Air freight forwarding with major carriers and DG support",
      "Road freight corridors (domestic + cross-border)",
      "Customs clearance and documentation support",
      "Warehousing, consolidation, and distribution add-ons",
      "Shipment tracking and proactive coordination",
    ],
    heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
    faqs: [
      {
        q: "What is the difference between a freight forwarder and a shipping agent?",
        a: "A freight forwarder manages the entire logistics process — booking, documentation, customs, and delivery. A shipping agent represents the vessel or airline at a port. Freight forwarders often work with shipping agents but provide a broader range of services.",
      },
      {
        q: "How do I get a freight forwarding quote?",
        a: "Share your cargo details — origin, destination, commodity, weight, volume, and any special requirements. We'll provide a detailed freight quotation including all-in rates, transit time, and service options.",
      },
      {
        q: "What Incoterms do you support?",
        a: "We handle shipments under all standard Incoterms — EXW, FCA, FOB, CFR, CIF, DAP, DDP, and others. We advise on the most commercially favorable terms for your trade.",
      },
    ],
    related: ["sea-freight", "air-freight", "customs-clearance"],
  },
  {
    slug: "china-to-pakistan-cargo",
    icon: Ship,
    title: "Door-to-Door Cargo Services (China to Pakistan)",
    desc: "Fast, reliable and cost-effective shipping from China to Pakistan via sea, air, CPEC and express.",
    longDesc:
      "Pakistan is one of China's most important trading partners, and the China-Pakistan Economic Corridor (CPEC) has revolutionized trade between the two nations. Whether you are importing electronics, machinery, textiles, raw materials, or consumer goods from China, our specialized China to Pakistan cargo service provides the fastest routes, lowest rates, and most reliable delivery options available.",
    features: [
      "Door-to-door service from any Chinese city to Pakistan",
      "Sea freight (FCL/LCL) to Karachi / Port Qasim",
      "Air freight to KHI/LHE/ISB with economy & express options",
      "CPEC land route via Khunjerab / Karakoram Highway",
      "Customs clearance and compliance support in Pakistan",
      "WeChat + WhatsApp coordination with China agents",
    ],
    heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
    faqs: [
      {
        q: "What is the cheapest way to ship cargo from China to Pakistan?",
        a: "For large volumes (above 1 CBM), LCL sea freight is usually the most economical. For very small volumes, consolidated express services or postal channels may be cheaper. We compare all options and recommend the best solution for your specific cargo.",
      },
      {
        q: "Can I ship lithium batteries from China to Pakistan?",
        a: "Lithium batteries are classified as dangerous goods (UN3480/UN3481) and require special handling. They can be shipped by sea (with restrictions) or air (with IATA DG compliance). We handle all required DG documentation and packaging certifications.",
      },
      {
        q: "What are the current import duties on Chinese goods in Pakistan?",
        a: "Import duties vary by HS code and product type, ranging from 0% to 35% plus sales tax and additional customs duties. Pakistan-China Free Trade Agreement (PCFTA) Phase II provides preferential tariff rates on many goods. We calculate accurate landed costs before you finalize your import.",
      },
    ],
    related: ["freight-forwarding", "customs-clearance", "cargo-insurance"],
  },
  {
    slug: "nationwide-distribution",
    icon: Truck,
    title: "Nationwide Distribution Services",
    desc: "Fast, reliable delivery across 300+ cities with B2B, e-commerce, pharma and FMCG distribution.",
    longDesc:
      "Pakistan's vast geography and growing consumer market demand a distribution partner who can deliver reliably from Karachi to Khyber, Lahore to Gwadar. Our nationwide distribution service provides businesses with a comprehensive logistics network covering all major cities, towns, and districts — ensuring your products reach retailers, distributors, and customers efficiently and on time.",
    features: [
      "B2B distribution: manufacturer to retailer",
      "E-commerce last-mile + reverse logistics + COD",
      "Pharma cold chain distribution with temperature logging",
      "FMCG primary and secondary distribution",
      "Warehousing, fulfillment, cross-docking and inventory visibility",
      "Digital POD, route optimization, and reporting",
    ],
    heroImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "Do you cover rural areas and small towns?",
        a: "Yes. Our network covers over 300 cities and towns across Pakistan including second and third-tier cities. For very remote areas, we partner with local agents to ensure comprehensive last-mile reach.",
      },
      {
        q: "What is your cash-on-delivery remittance cycle?",
        a: "We offer COD remittance within 24-48 hours of delivery confirmation for businesses with regular volumes. Standard remittance is within 3-5 business days.",
      },
      {
        q: "Can you handle temperature-sensitive pharmaceuticals?",
        a: "Yes. Our GDP-compliant cold chain distribution includes 2-8°C refrigerated vehicles, temperature loggers, and validated SOPs for vaccine and medicine distribution.",
      },
    ],
    related: ["warehousing", "last-mile-delivery"],
  },
  {
    slug: "packing-materials",
    icon: Boxes,
    title: "Packing Materials & Packaging Supplies",
    desc: "Premium quality packing materials for safe shipping - boxes, bubble wrap, stretch film, pallets and more.",
    longDesc:
      "Proper packing materials are the foundation of safe cargo transport. We supply a complete range of export-grade packaging materials to businesses and individuals across Pakistan. Whether you need corrugated boxes for e-commerce shipping, wooden crates for heavy machinery, or specialized packaging for international exports, we have the materials and expertise to ensure your goods arrive safely.",
    features: [
      "Corrugated boxes (single, double, triple wall)",
      "Bubble wrap and foam packaging materials",
      "Stretch film, tape, and strapping supplies",
      "Wooden pallets and ISPM-15 certified crates",
      "Export packaging with fumigation certificates",
      "Custom printing and branding on packaging",
    ],
    heroImg: "https://images.unsplash.com/photo-1566438487617-ce78ab6bdf36?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "Do you provide packing materials in bulk quantities?",
        a: "Yes, we offer wholesale pricing for bulk orders with volume discounts. Minimum order quantities vary by product type.",
      },
      {
        q: "Are your wooden pallets ISPM-15 certified for export?",
        a: "Yes, all our wooden packaging materials are heat-treated and stamped with ISPM-15 certification for international shipping compliance.",
      },
      {
        q: "Can you customize box sizes and printing?",
        a: "Absolutely. We provide custom die-cut boxes and can print your logo, handling instructions, and branding on all packaging materials.",
      },
    ],
    related: ["professional-packing", "warehousing"],
  },
  {
    slug: "cargo-insurance",
    icon: Shield,
    title: "Cargo Insurance Services",
    desc: "Complete freight protection for sea, air and inland transit with all-risk, named-perils and open cover policies.",
    longDesc:
      "Shipping cargo without proper insurance exposes you to significant financial risk. While carriers offer limited liability, it rarely covers the full value of your goods. Our comprehensive cargo insurance services provide complete protection for your shipments against loss, damage, theft, and other risks during transit. We work with leading insurance underwriters to offer tailored coverage at competitive premiums.",
    features: [
      "All-risk cargo insurance for comprehensive coverage",
      "Named perils insurance for cost-effective protection",
      "Marine open cover policies for regular shippers",
      "Air cargo insurance for time-sensitive shipments",
      "Inland transit insurance for domestic movements",
      "Claims assistance and documentation support",
    ],
    heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "Is cargo insurance mandatory for international shipping?",
        a: "While not legally mandatory, most commercial transactions and Letters of Credit require cargo insurance. It's highly recommended to protect your investment.",
      },
      {
        q: "What's the difference between all-risk and named perils coverage?",
        a: "All-risk covers all physical loss or damage unless specifically excluded. Named perils only covers risks explicitly listed in the policy (fire, sinking, collision, etc.).",
      },
      {
        q: "How are cargo insurance premiums calculated?",
        a: "Premiums are based on cargo value, shipping route, mode of transport, packaging quality, and claims history. Typical rates range from 0.5% to 2% of cargo value.",
      },
    ],
    related: ["freight-forwarding", "sea-freight", "air-freight"],
  },
  {
    slug: "pet-relocation",
    icon: PawPrint,
    title: "Pet Relocation Services",
    desc: "Safe, stress-free pet shipping by air or road with documentation and customs support.",
    longDesc: "Are you planning to <a href=\"/services/international-moving\">move abroad</a> or relocate within Pakistan with your beloved pet? As leading <a href=\"/\">international movers in Pakistan</a>, we provide comprehensive pet relocation services that ensure your furry family member travels safely, comfortably, and legally — whether by <a href=\"/services/air-freight\">air freight</a> or road. We handle everything from veterinary documentation to <a href=\"/services/customs-clearance\">customs clearance</a>, so you can focus on your move while we take care of your pet.",
    features: [
      "IATA-compliant pet travel crates and kennels",
      "Veterinary documentation support (health certificates, vaccinations, microchipping)",
      "Door-to-door pet pickup and delivery across major Pakistani cities",
      "Live animal air freight coordination with major airlines",
      "Real-time tracking and 24/7 pet welfare monitoring",
      "Quarantine management and post-arrival care guidance",
      "Import/export permits for international pet moves",
    ],
    heroImg: "https://images.unsplash.com/photo-1601758228826-054b69a9cc13?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "Which pets can you relocate internationally?",
        a: "We relocate dogs, cats, birds, small mammals, and some exotic pets. Restrictions apply by country and species. Contact us with details about your pet and destination.",
      },
      {
        q: "How far in advance should I book pet relocation?",
        a: "We recommend booking 4-8 weeks in advance for international moves. Some destinations require specific vaccination schedules and quarantine arrangements that need advance planning.",
      },
      {
        q: "Do you provide pet travel crates?",
        a: "Yes, we supply IATA-compliant travel crates sized appropriately for your pet. Crates are included in our service pricing and meet all airline requirements.",
      },
      {
        q: "Can my pet travel in the cabin with me?",
        a: "Small pets under 8kg may travel in-cabin on some airlines. Larger pets must travel as checked baggage or cargo. Regulations vary by airline and route. Our team advises on the best options for your pet.",
      },
      {
        q: "What happens if my pet is denied entry at customs?",
        a: "With proper documentation arranged by our team, denial is extremely rare. However, we have contingency plans including temporary boarding facilities and documentation corrections to resolve any issues quickly.",
      },
    ],
    related: ["international-moving", "air-freight", "customs-clearance"],
  },
  { 
    slug: "international-moving", 
    icon: Globe, 
    title: "International Moving Services", 
    desc: "Trusted international moving services from Pakistan to Dubai, UK, USA, Europe and worldwide. Complete door-to-door relocation with expert packing, shipping, and customs clearance.", 
    longDesc: "Are you planning to relocate from Pakistan to Dubai, UK, USA, Europe, or any other international destination? Welcome to Best International Movers - Pakistan's leading <a href=\"/services/international-moving\">international moving services</a> provider with over 10 years of experience in global relocations. We specialize in comprehensive door-to-door moving solutions that make your international relocation smooth, secure, and completely stress-free.\n\nOur <a href=\"/services/international-moving\">international moving services Pakistan</a> are designed to handle every aspect of your relocation journey. From professional packing and secure loading to customs clearance and final delivery at your new destination, our expert team ensures your belongings reach safely and on time. Whether you're moving your household goods, office equipment, or commercial cargo, we have the expertise and global network to make your international move seamless.\n\n## Complete Door-to-Door International Relocation Solutions\n\nAt Best International Movers, we understand that international relocation is more than just shipping goods - it's about moving lives. That's why our <a href=\"/services/international-moving\">international relocation services</a> are comprehensive and tailored to meet your specific needs. Our end-to-end solutions cover everything from initial consultation to final delivery, ensuring you have peace of mind throughout the moving process.\n\n### Household Goods Relocation Services\n\nMoving your home internationally requires careful planning and expert handling. Our household goods relocation services include professional packing of furniture, appliances, and personal belongings, custom crating for fragile and valuable items, secure loading and containerization, insurance coverage for complete peace of mind, and door-to-door delivery and unpacking at destination.\n\n### Office & Commercial Relocation\n\nFor businesses expanding internationally, our commercial relocation services ensure minimal downtime and smooth transition including office equipment and furniture moving, IT equipment and sensitive electronics handling, document and records management, industrial machinery relocation, project management and coordination, and employee relocation support.\n\n### Specialized Furniture Moving\n\nYour furniture deserves special attention during international moves. Our specialized furniture moving services include custom wooden crating for antique and designer furniture, upholstery protection and wrapping, disassembly and reassembly by trained technicians, climate-controlled shipping for sensitive materials, and artwork and mirror protection with custom crates.\n\nWhen you choose our <a href=\"/services/international-moving\">international moving services Pakistan</a>, you get access to our complete logistics network. We also provide comprehensive <a href=\"/services/cargo-services\">cargo services</a> for all your shipping needs, ensuring every aspect of your move is handled professionally.", 
    features: [
      "Door-to-door service worldwide to 100+ countries",
      "Dedicated move coordinator for personalized service", 
      "Full packing & unpacking with premium materials",
      "Customs clearance included in all packages",
      "Complete insurance coverage options",
      "Real-time shipment tracking & updates",
      "Specialized Dubai, UK, USA moving routes",
      "Professional furniture disassembly & assembly",
      "Secure storage solutions at origin & destination"
    ], 
    heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920", 
    faqs: [
      {
        q: "How much does international moving cost from Pakistan?", 
        a: "The cost of international moving from Pakistan varies based on destination country and city, volume of goods (cubic meters), shipping method (air vs sea cargo), packing services required, customs duties and taxes, and insurance coverage. Typically, sea freight ranges from $2,000-$8,000 for a full container, while air freight ranges from $5,000-$15,000 for a typical household. Contact us for a free, customized quote based on your specific requirements."
      },
      {
        q: "Do you provide packing services for international moves?", 
        a: "Yes, we provide comprehensive <a href=\"/services/professional-packing\">packing services</a> for all international relocations. Our professional packing team uses industry-leading materials and techniques to ensure your belongings are protected during transit. Services include custom crating for valuable items, professional packing of all household goods, inventory management and labeling, fragile item protection, and unpacking services at destination."
      },
      {
        q: "How long does international shipping take from Pakistan?", 
        a: "Shipping times vary by destination and method: Air Cargo takes 5-10 days to most destinations, Sea Cargo takes 20-40 days depending on route, Dubai takes 3-5 days by air, 7-14 days by sea, UK takes 5-7 days by air, 25-35 days by sea, and USA takes 5-10 days by air, 30-45 days by sea. These timelines include transit time plus customs clearance. We provide real-time tracking throughout the process."
      },
      {
        q: "Do you handle customs clearance for international moves?", 
        a: "Yes, we provide complete <a href=\"/services/customs-clearance\">customs clearance</a> support for international relocations. Our services include documentation preparation and filing, duty and tax calculation, import permit processing, regulatory compliance management, coordination with customs authorities, and real-time clearance status updates. Our experienced customs brokers ensure smooth clearance in both origin and destination countries."
      },
      {
        q: "What items cannot be shipped internationally?", 
        a: "Certain items are restricted or prohibited for international shipping: perishable food items, hazardous materials and chemicals, plants and seeds, firearms and weapons, certain medications, alcohol and tobacco in large quantities, and cash and valuable securities. We provide a complete list of restricted items and help you understand regulations for your specific destination."
      },
      {
        q: "Do you provide insurance for international moves?", 
        a: "Yes, we offer comprehensive insurance coverage for all international relocations. Our insurance options include all-risk coverage for complete protection, named-perils coverage for cost-effective protection, high-value item coverage, transit insurance for <a href=\"/services/air-freight\">air</a> and <a href=\"/services/sea-freight\">sea</a> shipments, storage insurance if needed, and claims support and assistance. We recommend adequate insurance coverage for all valuable items during international moves."
      }
    ], 
    related: ["professional-packing", "customs-clearance", "air-freight", "sea-freight", "vehicle-shipping", "secure-storage"] 
  },
  { slug: "professional-packing", icon: Package, title: "Professional Packing", desc: "Premium packing materials and white-glove service for your most precious belongings.", longDesc: "Our professional packing teams use industry-leading materials and techniques to ensure every item is protected during transit. From delicate china and artwork to bulky furniture, our trained packers handle it all with precision and care. We use eco-friendly, acid-free materials and custom crating for high-value items.", features: ["Eco-friendly packing materials", "Custom crating for fragile items", "Wardrobe boxes for clothing", "Furniture disassembly & reassembly", "Labeling & inventory system", "Unpacking service at destination"], heroImg: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920", faqs: [{q:"Do you provide the packing materials?", a:"Yes, we bring all necessary high-quality materials including specialized boxes, bubble wrap, and crating."}, {q:"How long does packing take?", a:"A standard 2-3 bedroom house usually takes 1-2 days to pack completely."}, {q:"Is there an unpacking service?", a:"Absolutely, we also provide unpacking and debris removal services at your new destination."}, {q:"How do you protect artwork and mirrors?", a:"We use foam corners, glassine layers, and export crates sized to the piece. Each crate is labeled with orientation arrows and fragile handling notes for loaders."}, {q:"Can you pack only part of my home?", a:"Yes. Partial packing is common when clients self-pack clothes but want professionals on kitchen glass and electronics. We mark scope in writing so pricing stays transparent."}], related: ["international-moving", "secure-storage"] },
  { slug: "secure-storage", icon: Warehouse, title: "Secure Storage", desc: "Climate-controlled, 24/7 monitored storage facilities for short and long-term needs.", longDesc: "Whether you need temporary storage during your move or long-term warehousing solutions, our state-of-the-art facilities offer complete peace of mind. All locations feature climate control, 24/7 CCTV monitoring, fire suppression systems, and restricted access for maximum security.", features: ["Climate-controlled warehouses", "24/7 CCTV surveillance", "Short & long-term options", "Inventory management", "Easy access scheduling", "Full insurance coverage"], heroImg: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How long can I store my items?", a:"We offer both short-term (weekly/monthly) and long-term (yearly) storage solutions tailored to your needs."}, {q:"Is my storage insured?", a:"Yes, all stored items are fully insured against fire, theft, and damage while in our facility."}, {q:"Can I access my items during storage?", a:"Yes, you can access your belongings with 24 hours prior notice to our facility manager."}, {q:"What items are best suited for climate-controlled storage?", a:"Wood furniture, leather, electronics, documents, and artwork benefit most from stable humidity. We advise climate control whenever storage exceeds a few weeks in peak summer."}, {q:"How is storage priced?", a:"Pricing is based on volume (CBM or pallet positions), duration, and handling frequency. Written quotes list in/out fees so there are no surprises."}], related: ["professional-packing", "international-moving"] },
  { slug: "vehicle-shipping", icon: Car, title: "Vehicle Shipping", desc: "Safe and insured international vehicle transport via enclosed or open carriers.", longDesc: "We provide safe, reliable international vehicle shipping services for cars, motorcycles, and specialty vehicles. Choose between Roll-on/Roll-off (RoRo) or enclosed container transport based on your needs and budget. Every vehicle is fully insured during transit.", features: ["RoRo & container shipping", "Enclosed transport available", "Full transit insurance", "Door-to-port or door-to-door", "All vehicle types accepted", "Customs documentation handled"], heroImg: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Can I pack items in my car?", a:"For safety and customs reasons, it is strictly prohibited to pack personal items inside a vehicle being shipped."}, {q:"Do you pick up from my home?", a:"Yes, we offer door-to-port and door-to-door services depending on your preference."}, {q:"Is my car insured during shipping?", a:"Yes, full coverage transit insurance is included to protect against any unexpected damage."}], related: ["international-moving", "customs-clearance"] },
  { slug: "air-freight", icon: Plane, title: "Air Freight", desc: "Fast international air cargo from Islamabad, Lahore, and Karachi to 100+ countries.", longDesc: "When time matters more than cost, air freight is your answer. Best International Movers offers fast and reliable air freight services from Islamabad (ISB), Lahore (LHE), and Karachi (KHI) airports to destinations worldwide. We work with leading airlines including Emirates SkyCargo, Qatar Airways Cargo, Turkish Cargo, and PIA Cargo to help your shipment move on the earliest practical flight.", features: ["Personal effects & urgent household moves", "Commercial goods, samples & business documents", "Pharmaceuticals & temperature-controlled cargo", "Electronics & high-value items with insurance options", "E-commerce & time-sensitive international delivery", "AWB tracking with WhatsApp milestone updates"], heroImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How fast is air freight from Pakistan to the UAE?", a:"Many UAE lanes move in about 2-3 business days depending on flight space and documentation readiness."}, {q:"Is there a minimum shipment size?", a:"No minimum — even a single carton can move by air when airline piece rules are met."}, {q:"How do I track my air shipment?", a:"We share AWB-based tracking and proactive WhatsApp updates during business hours."}], related: ["sea-freight", "customs-clearance"] },
  { slug: "sea-freight", icon: Ship, title: "Sea Freight", desc: "FCL & LCL ocean freight from Karachi Port and Port Qasim to global destinations.", longDesc: "Sea freight is the most cost-effective way to ship large volumes of goods internationally. At Best International Movers, we offer both Full Container Load (FCL) and Less than Container Load (LCL) sea freight services from Pakistan's major ports — primarily Karachi Port and Port Qasim — to destinations across the globe.", features: ["Direct partnerships with Maersk, MSC, Hapag-Lloyd", "Weekly sailings from Karachi toward Jebel Ali, Felixstowe, Rotterdam, Halifax & more", "In-house customs brokerage for Pakistan export documentation", "Real-time container tracking from origin port to destination", "Climate-controlled storage while awaiting vessel departure", "Door-to-door coordination with transparent quotes"], heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920", faqs: [{q:"What is the difference between FCL and LCL?", a:"FCL means you pay for an entire 20ft or 40ft container — best for full household or office moves. LCL means you share container space and pay by volume (CBM), ideal for partial shipments."}, {q:"How long does sea freight take from Pakistan?", a:"Transit varies by lane and consolidation, but many Dubai-bound services fall in roughly 2-3 weeks for LCL groupage and slightly longer for FCL depending on sailing and destination port."}, {q:"Are port charges included in a door-to-door quote?", a:"When quoted door-to-door, we spell out origin, ocean, and destination handling so you can compare apples to apples — ask for a written scope."}], related: ["air-freight", "customs-clearance"] },
  { slug: "customs-clearance", icon: FileCheck, title: "Customs Clearance", desc: "Expert customs brokerage ensuring smooth border crossings and compliance.", longDesc: "Navigating international customs regulations can be complex. Our licensed customs brokers handle all documentation, duties, taxes, and compliance requirements in both origin and destination countries. We ensure your shipment clears customs quickly and without delays.", features: ["Licensed customs brokers", "Duty & tax calculation", "Import/export documentation", "Regulatory compliance", "Quarantine clearance", "Trade agreement benefits"], heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Do I need to be present for customs clearance?", a:"Generally no, our brokers handle clearance on your behalf with the proper power of attorney."}, {q:"How long does clearance take?", a:"Normally 2-4 days, provided all documentation is accurate and there are no unexpected customs hold-ups."}, {q:"Who pays the duties and taxes?", a:"We calculate and pay destination duties and taxes on your behalf, which are invoiced separately or included in the master quote."}, {q:"Which documents do exporters from Pakistan need most often?", a:"Commercial invoice, packing list, exporter profile, and destination-specific permits for restricted goods. We prepare templates and validate HS codes before submission."}, {q:"Can you coordinate clearance at destination as well?", a:"Yes. We work with vetted agents in major hubs (UAE, UK, North America, GCC) so import clearance aligns with your delivery appointment."}], related: ["international-moving", "sea-freight"] },
  { slug: "last-mile-delivery", icon: Truck, title: "Last Mile Delivery", desc: "Precision delivery and unpacking at your new home, wherever in the world.", longDesc: "The last mile is the most important. Our delivery teams ensure your belongings are carefully transported from port or warehouse to your new home. We handle unpacking, furniture assembly, and placement so you can start enjoying your new space immediately.", features: ["Scheduled delivery windows", "Furniture assembly", "Debris removal", "Appliance installation", "Room-by-room placement", "Post-delivery follow-up"], heroImg: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Will you reassemble my furniture?", a:"Yes, full reassembly of beds, wardrobes, and standard furniture is included in our white-glove service."}, {q:"Do you remove packing debris?", a:"Absolutely, we clear out all empty boxes and packing materials after unpacking on the same day."}, {q:"Is there an extra charge for stairs/elevators?", a:"Normally included, but complex access (like 5th floor no elevator) may require an extra handling fee."}], related: ["professional-packing", "international-moving"] },
];

const locations = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore" },
  { city: "Peshawar", address: "University Road, Peshawar" },
];

function buildServiceSchema(service: (typeof allServices)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — Best International Movers & Logistics`,
    serviceType: service.title,
    description: service.desc,
    url: `https://bestintlmovers.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const ServicesIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.services} urlPath="/services" />
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-8">Our <span className="gold-gradient-text">Services</span></h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Comprehensive logistics and relocation solutions tailored to your needs. From international moving to customs clearance, we handle every aspect of your shipment with expertise and care.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allServices.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/services/${service.slug}`} className="group glass-card rounded-xl p-6 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 block h-full">
                  <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon size={32} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.desc}</p>
                  <div className="flex items-center text-gold font-medium group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={32} className="text-gold" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Fully Insured</h3>
                <p className="text-muted-foreground text-sm">All shipments covered with comprehensive insurance for complete peace of mind</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-gold" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Expert Team</h3>
                <p className="text-muted-foreground text-sm">Experienced professionals handling every aspect of your logistics needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-gold" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">10+ Years Experience</h3>
                <p className="text-muted-foreground text-sm">Proven track record in international logistics and relocations</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Help Choosing the Right Service?</h2>
            <p className="text-muted-foreground mb-6">Our logistics experts are here to help you find the perfect solution for your needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                <Phone size={18} />
                Call Us Now
              </Link>
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-colors">
                <MapPin size={18} />
                Get Free Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesIndex;
