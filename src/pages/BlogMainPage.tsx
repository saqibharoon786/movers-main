import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Route, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, Package, Globe, Heart, FileCheck, Calculator, AlertTriangle, MessageCircle, Home, Anchor, Plane, Building, Container, Ship, Truck, Clock, Star, Calendar, User, Tag, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { PACKERS_MOVERS_RAWALPINDI_GUIDE_SLUG } from "@/data/packersMoversRawalpindiGuideBlog";
import { PACKERS_MOVERS_ISLAMABAD_COMPLETE_GUIDE_SLUG } from "@/data/packersMoversIslamabadCompleteGuideBlog";
import {
  BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE,
  BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE_CLASS_CARD,
  BEST_PACKERS_MOVERS_ISLAMABAD_2026_SLUG,
} from "@/data/bestPackersMoversIslamabad2026Blog";
import {
  MOVING_CHECKLIST_PAKISTAN_IMAGE,
  MOVING_CHECKLIST_PAKISTAN_SLUG,
} from "@/data/movingChecklistPakistanBlog";
import {
  CARGO_INSURANCE_INTERNATIONAL_SLUG,
  CARGO_INSURANCE_INTERNATIONAL_IMAGE,
  CARGO_INSURANCE_INTERNATIONAL_IMAGE_CLASS_CARD,
} from "@/data/cargoInsuranceInternationalShipmentsBlog";
import {
  OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_SLUG,
  OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_IMAGE,
  OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_IMAGE_CLASS_CARD,
} from "@/data/officeRelocationKarachiZeroDowntimeBlog";
import {
  DHA_KARACHI_MOVING_GUIDE_SLUG,
  DHA_KARACHI_MOVING_GUIDE_IMAGE,
  DHA_KARACHI_MOVING_GUIDE_IMAGE_CLASS_CARD,
} from "@/data/dhaKarachiMovingGuideSectorBySectorBlog";
import {
  KARACHI_TO_DUBAI_SHIPPING_COST_SLUG,
  KARACHI_TO_DUBAI_SHIPPING_COST_IMAGE,
  KARACHI_TO_DUBAI_SHIPPING_COST_IMAGE_CLASS_CARD,
} from "@/data/karachiToDubaiShippingCost2026Blog";
import {
  CUSTOMS_CLEARANCE_PROCESS_PAKISTAN_SLUG,
  CUSTOMS_CLEARANCE_PROCESS_PAKISTAN_IMAGE,
} from "@/data/customsClearanceProcessPakistanBlog";
import {
  CARGO_CHARGES_PAKISTAN_TO_UK_SLUG,
  CARGO_CHARGES_PAKISTAN_TO_UK_IMAGE,
} from "@/data/cargoChargesPakistanToUKBlog";
import {
  BEST_FREIGHT_FORWARDERS_PAKISTAN_SLUG,
  BEST_FREIGHT_FORWARDERS_PAKISTAN_IMAGE,
} from "@/data/bestFreightForwardersPakistanBlog";
import {
  AIR_FREIGHT_VS_SEA_FREIGHT_PAKISTAN_SLUG,
  AIR_FREIGHT_VS_SEA_FREIGHT_PAKISTAN_IMAGE,
} from "@/data/airFreightVsSeaFreightPakistanBlog";
import {
  INTERNATIONAL_RELOCATION_CHECKLIST_FAMILIES_SLUG,
  INTERNATIONAL_RELOCATION_CHECKLIST_FAMILIES_IMAGE,
} from "@/data/internationalRelocationChecklistFamiliesBlog";
import {
  CAR_SHIPPING_PAKISTAN_UK_SLUG,
  CAR_SHIPPING_PAKISTAN_UK_IMAGE,
} from "@/data/carShippingPakistanUKBlog";
import {
  COMMERCIAL_FREIGHT_FORWARDING_PAKISTAN_UAE_SLUG,
  COMMERCIAL_FREIGHT_FORWARDING_PAKISTAN_UAE_IMAGE,
} from "@/data/commercialFreightForwardingPakistanUAEBlog";
import {
  CUSTOMS_AND_DUTY_PAKISTAN_UK_SLUG,
  CUSTOMS_AND_DUTY_PAKISTAN_UK_IMAGE,
} from "@/data/customsAndDutyPakistanUKBlog";

// All blogs data including the new Cargo Insurance blog
const allBlogs = [
  {
    slug: CUSTOMS_AND_DUTY_PAKISTAN_UK_SLUG,
    img: CUSTOMS_AND_DUTY_PAKISTAN_UK_IMAGE,
    title: "Customs and Duty Pakistan to UK: The Complete 2026 Guide for Individuals and Businesses",
    date: "Jun 22, 2026",
    category: "Customs & Compliance",
    author: "Best International Movers & Logistics",
    readTime: "26 min read",
    excerpt:
      "Complete 2026 guide to customs and duty between Pakistan and the UK — HMRC UKGT, import VAT, WeBOC, Pakistan duty layers, £135 threshold & household goods exemption.",
    content: "Complete customs and duty guide for Pakistan-UK shipments in 2026.",
  },
  {
    slug: COMMERCIAL_FREIGHT_FORWARDING_PAKISTAN_UAE_SLUG,
    img: COMMERCIAL_FREIGHT_FORWARDING_PAKISTAN_UAE_IMAGE,
    title: "Commercial Freight Forwarding Pakistan to UAE: The Complete 2026 Guide for Exporters and Importers",
    date: "Jun 22, 2026",
    category: "Freight Forwarding",
    author: "Best International Movers & Logistics",
    readTime: "24 min read",
    excerpt:
      "Complete 2026 guide to commercial freight forwarding from Pakistan to the UAE — WeBOC, Form E, UAE customs duty & VAT, FCL/LCL, product-specific rules & transit times.",
    content: "Complete commercial freight forwarding guide for Pakistan-UAE corridor in 2026.",
  },
  {
    slug: CAR_SHIPPING_PAKISTAN_UK_SLUG,
    img: CAR_SHIPPING_PAKISTAN_UK_IMAGE,
    title: "Car Shipping Pakistan to UK and UK to Pakistan: The Complete 2026 Guide",
    date: "Jun 22, 2026",
    category: "Vehicle Shipping",
    author: "Best International Movers & Logistics",
    readTime: "22 min read",
    excerpt:
      "Complete 2026 guide to car shipping between Pakistan and the UK — import schemes, RoRo vs container, customs duty, transit times, documentation & common mistakes.",
    content: "Complete car shipping guide for Pakistan-UK corridor in 2026.",
  },
  {
    slug: INTERNATIONAL_RELOCATION_CHECKLIST_FAMILIES_SLUG,
    img: INTERNATIONAL_RELOCATION_CHECKLIST_FAMILIES_IMAGE,
    title: "International Relocation Checklist for Families: The Ultimate 2025–2026 Guide",
    date: "Jun 19, 2026",
    category: "Family Relocation",
    author: "Best International Movers & Logistics",
    readTime: "30 min read",
    excerpt:
      "Complete international relocation checklist for families — visas, schools, shipping, housing, healthcare, finances, kids & pets. Step-by-step from 12 months before to first month after arrival.",
    content: "Ultimate international relocation checklist for families moving abroad in 2025–2026.",
  },
  {
    slug: AIR_FREIGHT_VS_SEA_FREIGHT_PAKISTAN_SLUG,
    img: AIR_FREIGHT_VS_SEA_FREIGHT_PAKISTAN_IMAGE,
    title: "Air Freight vs Sea Freight in Pakistan: Which One Should You Actually Choose?",
    date: "Jun 19, 2026",
    category: "Logistics",
    author: "Best International Movers & Logistics",
    readTime: "18 min read",
    excerpt:
      "Compare air freight vs sea freight in Pakistan — cost, transit time, cargo suitability, customs, seasonal factors & a practical decision framework for importers and exporters.",
    content: "Complete air vs sea freight comparison guide for Pakistan shipments in 2026.",
  },
  {
    slug: BEST_FREIGHT_FORWARDERS_PAKISTAN_SLUG,
    img: BEST_FREIGHT_FORWARDERS_PAKISTAN_IMAGE,
    title: "Best Freight Forwarders in Pakistan: Complete 2025–2026 Guide",
    date: "Jun 19, 2026",
    category: "Freight Forwarding",
    author: "Best International Movers & Logistics",
    readTime: "28 min read",
    excerpt:
      "Complete guide to the best freight forwarders in Pakistan — air & sea freight, customs clearance, Karachi, Lahore, Islamabad, rates, certifications & 15-point checklist.",
    content: "Complete guide to best freight forwarders in Pakistan for air freight, sea freight, and customs clearance.",
  },
  {
    slug: CARGO_CHARGES_PAKISTAN_TO_UK_SLUG,
    img: CARGO_CHARGES_PAKISTAN_TO_UK_IMAGE,
    title: "Cargo Charges from Pakistan to UK: The Complete 2026 Pricing Guide",
    date: "Jun 19, 2026",
    category: "International Shipping",
    author: "Best International Movers & Logistics",
    readTime: "20 min read",
    excerpt:
      "Complete 2026 guide to cargo charges from Pakistan to the UK — air vs sea freight, FCL/LCL rates, surcharges, customs, VAT, transit times & tips to avoid overpaying.",
    content: "Complete cargo charges and pricing guide for Pakistan to UK shipping in 2026.",
  },
  {
    slug: CUSTOMS_CLEARANCE_PROCESS_PAKISTAN_SLUG,
    img: CUSTOMS_CLEARANCE_PROCESS_PAKISTAN_IMAGE,
    title: "Customs Clearance Process in Pakistan: The Complete 2026 Guide for Importers and Exporters",
    date: "Jun 19, 2026",
    category: "Customs & Compliance",
    author: "Best International Movers & Logistics",
    readTime: "22 min read",
    excerpt:
      "Complete 2026 guide to customs clearance in Pakistan — WeBOC, HS codes, duty assessment, Green/Yellow/Red channels, documents, timelines & tips to avoid delays at Karachi Port and Islamabad Airport.",
    content: "Complete customs clearance process guide for importers and exporters in Pakistan.",
  },
  {
    slug: OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_SLUG,
    img: OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_IMAGE,
    title: "Office Relocation Karachi — The Complete Zero Downtime Guide 2026",
    date: "Jun 6, 2026",
    category: "Office Relocation",
    author: "Best International Movers & Logistics",
    readTime: "24 min read",
    excerpt:
      "Complete guide to zero-downtime office relocation in Karachi 2026. Weekend execution, IT-safe packing, server room moving. Free site survey. Call 0300-9130211.",
    content: "Complete zero downtime office relocation guide for Karachi businesses in 2026.",
  },
  {
    slug: KARACHI_TO_DUBAI_SHIPPING_COST_SLUG,
    img: KARACHI_TO_DUBAI_SHIPPING_COST_IMAGE,
    title: "Karachi to Dubai Shipping Cost 2026 — Complete Full Breakdown",
    date: "Jun 6, 2026",
    category: "International Shipping",
    author: "Best International Movers & Logistics",
    readTime: "26 min read",
    excerpt:
      "Complete Karachi to Dubai shipping cost guide 2026. Sea freight, air cargo, household goods. LCL from USD 450, FCL from USD 1,200. Free quote. Call 0300-9130211.",
    content: "Complete Karachi to Dubai shipping cost breakdown for families, expats and businesses in 2026.",
  },
  {
    slug: DHA_KARACHI_MOVING_GUIDE_SLUG,
    img: DHA_KARACHI_MOVING_GUIDE_IMAGE,
    title: "Movers in DHA Karachi — Complete Sector by Sector Moving Guide 2026",
    date: "Jun 6, 2026",
    category: "DHA Karachi",
    author: "Best International Movers & Logistics",
    readTime: "28 min read",
    excerpt:
      "Complete DHA Karachi moving guide 2026. Movers for Phase 1–8, DHA City, all commercial zones. House shifting, office relocation, international. Call 0300-9130211.",
    content: "Complete DHA Karachi sector-by-sector moving guide for all phases in 2026.",
  },
  {
    slug: CARGO_INSURANCE_INTERNATIONAL_SLUG,
    img: CARGO_INSURANCE_INTERNATIONAL_IMAGE,
    title: "Cargo Insurance for International Shipments from Pakistan — Complete Guide 2026",
    date: "Jun 4, 2026",
    category: "Insurance & Protection",
    author: "Best International Movers & Logistics",
    readTime: "15 min read",
    excerpt: "Complete guide to cargo insurance for international shipments from Pakistan. Learn what's covered, costs, coverage levels, claims process and why it's essential for your move.",
    content: "Complete guide to cargo insurance for international shipments from Pakistan.",
  },
  {
    slug: "home-shifting-islamabad",
    linkTo: "/home-shifting-islamabad/",
    img: "/blog/packers-movers-islamabad-truck.jpg",
    title: "Home Shifting in Islamabad 2026 — Complete Guide | Best International Movers",
    date: "Jun 2026",
    category: "Moving Guides",
    author: "Best International Movers & Logistics",
    readTime: "18 min read",
    excerpt: "Planning home shifting in Islamabad? Read our 2026 complete guide covering costs, tips, best packers and movers, checklists, and how to shift safely. Call 0300-9130211.",
    content: "Complete home shifting guide for Islamabad in 2026.",
  },
  {
    slug: MOVING_CHECKLIST_PAKISTAN_SLUG,
    img: MOVING_CHECKLIST_PAKISTAN_IMAGE,
    title: "The Complete Moving Checklist for Pakistan — International Relocation Guide 2026",
    date: "May 2026",
    category: "Moving Guides",
    author: "Best International Movers & Logistics",
    readTime: "11 min read",
    excerpt:
      "Planning to move from Pakistan? Use our complete moving checklist — documents, packing, customs, timelines & tips for stress-free international relocation.",
    content: "Complete moving checklist Pakistan for international relocation in 2026.",
  },
  {
    slug: BEST_PACKERS_MOVERS_ISLAMABAD_2026_SLUG,
    img: BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE,
    title: "Best Packers and Movers in Islamabad — Complete SEO Guide 2026",
    date: "May 19, 2026",
    category: "Moving Guides",
    author: "Best International Movers & Logistics",
    readTime: "25 min read",
    excerpt:
      "Complete 2026 SEO guide to best packers and movers in Islamabad: house shifting, office relocation, pricing, F-7 DHA Bahria coverage, same-day moves & international shipping. Call 0300-9130211.",
    content:
      "Best packers and movers in Islamabad 2026 — pricing, process, areas, FAQs and how to choose a trusted moving company.",
  },
  {
    slug: PACKERS_MOVERS_ISLAMABAD_COMPLETE_GUIDE_SLUG,
    img: "/images/house-shifting-karachi.png",
    title: "Packers and Movers in Islamabad — Complete 2026 Guide for Home, Office & Society Shifting",
    date: "May 15, 2026",
    category: "Moving Guides",
    author: "Best International Movers & Logistics",
    readTime: "20 min read",
    excerpt:
      "Looking for reliable packers and movers in Islamabad? This 2026 guide covers sector-wise logistics, pricing, society rules, and how to choose the best moving company. Call 0300-9130211.",
    content:
      "Complete 2026 guide to packers and movers in Islamabad with sector logistics, costs, checklists, and society shifting tips.",
  },
  {
    slug: PACKERS_MOVERS_RAWALPINDI_GUIDE_SLUG,
    img: "/images/homeshifting.png",
    title: "Packers and Movers in Rawalpindi — Complete 2026 Guide for Stress-Free Home & Office Shifting",
    date: "May 15, 2026",
    category: "Moving Guides",
    author: "Best International Movers & Logistics",
    readTime: "18 min read",
    excerpt:
      "Looking for trusted packers and movers in Rawalpindi? This 2026 guide covers costs, area-wise service, society rules, and how to choose the best moving company. Call 0300-9130211.",
    content: "Complete 2026 guide to packers and movers in Rawalpindi with costs, checklists, and area-specific moving tips.",
  },
  {
    slug: "international-relocation-rawalpindi-complete-guide",
    img: "/images/rwp.png",
    title: "International Relocation from Rawalpindi 2026 — Complete Moving Guide | Best Intl Movers",
    date: "May 11, 2026",
    category: "Relocation Guide",
    author: "Best International Movers & Logistics",
    readTime: "30 min read",
    excerpt: "Planning international relocation from Rawalpindi? This complete 2026 guide covers everything — costs, packing, customs, air vs sea freight, popular destinations & expert tips from Best International Movers.",
    content: "Complete guide to international relocation from Rawalpindi with comprehensive information about moving abroad."
  },
  {
    slug: "cargo-service-islamabad-complete-guide",
    img: "/images/china-to-pakistan-cargo.jpg",
    title: "Cargo Service in Islamabad 2026 — Everything You Need to Know | Best Intl Movers",
    date: "May 11, 2026",
    category: "Cargo Guide",
    author: "Best International Movers & Logistics",
    readTime: "25 min read",
    excerpt: "Looking for a reliable cargo service in Islamabad? This complete 2026 guide covers air cargo, sea cargo, costs, customs, and how to choose the best cargo company in Islamabad.",
    content: "Complete guide to cargo service in Islamabad with comprehensive information about international shipping options."
  },
  {
    slug: "shipping-companies-in-pakistan",
    img: "/images/container.jpg",
    title: "Best Shipping Companies in Pakistan 2026 | International Cargo | Best Intl Movers",
    date: "May 11, 2026",
    category: "Shipping Guide",
    author: "Best International Movers & Logistics",
    readTime: "20 min read",
    excerpt: "Looking for trusted shipping companies in Pakistan? Complete 2026 guide to international cargo shipping from Islamabad, Rawalpindi, Lahore & Karachi to 100+ countries. Get a free quote!",
    content: "Complete guide to shipping companies in Pakistan with rates, routes, and how to choose the best shipping service."
  },
  {
    slug: "international-relocation-services-rawalpindi",
    img: "/images/shipping.png",
    title: "International Relocation Services in Rawalpindi: Everything You Need to Know Before Moving Abroad",
    date: "May 5, 2026",
    category: "Relocation Guide",
    author: "Best International Movers & Logistics",
    readTime: "15 min read",
    excerpt: "Looking for trusted international relocation services in Rawalpindi? Discover how to plan your overseas move, what services to expect, costs, and why Best International Movers is Rawalpindi's top choice for moving abroad.",
    content: "Complete guide to international relocation services in Rawalpindi with detailed information about services, costs, and tips."
  },
  {
    slug: "cargo-insurance-services-pakistan",
    img: "/images/cargo-insurance.jpg",
    title: "Why Cargo Insurance Is the Most Important Thing You're Ignoring When Shipping from Pakistan",
    date: "May 2, 2026",
    category: "Shipping Tips | Insurance & Protection",
    author: "Best International Movers & Logistics",
    readTime: "15 min read",
    excerpt: "Everything you need to know about cargo insurance in Pakistan. Types, costs, claims, and why carrier liability is never enough. Read the complete guide.",
    content: "Complete cargo insurance guide with detailed information about types, costs, claims process, and common mistakes."
  },
  {
    slug: "pet-relocation-from-pakistan-complete-guide",
    img: "/images/pet-relocation.png",
    title: "Pet Relocation from Pakistan 2026 — IATA Certified, Safe & Stress-Free",
    date: "Apr 29, 2026",
    category: "Pet Services",
    author: "Best International Movers",
    readTime: "15 min read",
    excerpt: "Complete guide to pet relocation from Pakistan. IATA crates, vet documents, customs clearance, costs, and trusted routes to UAE, UK, USA & Canada.",
    content: "Complete pet relocation guide with IATA certification requirements and documentation."
  },
  {
    slug: "packers-and-movers-islamabad-guide",
    img: "/images/professional-packing.png",
    title: "Packers and Movers in Islamabad: Complete Guide to Safe & Affordable House Shifting (2026)",
    date: "Apr 2026",
    category: "Moving Guides",
    author: "Best International Movers",
    readTime: "11 min read",
    excerpt: "Planning to shift in Islamabad? Costs, tips, red flags, checklists and how to get a free survey — plus how to choose trusted packers and movers in Islamabad.",
    content: "Complete guide for Islamabad movers with cost analysis and selection tips."
  },
  {
    slug: "tips-for-stress-free-international-move",
    img: "/images/good.png",
    title: "10 Tips for a Stress-Free International Move from Pakistan",
    date: "Apr 1, 2026",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Planning to move internationally from Pakistan? Expert tips on packing, customs, documentation and choosing the right moving company—complete 2026 guide.",
    content: "Expert tips for international moving from Pakistan with documentation guidance."
  },
  {
    slug: "customs-regulations-pakistan-2026",
    img: "/images/nationwide-distribution.png",
    title: "Pakistan Customs Regulations for International Moving 2026",
    date: "Apr 1, 2026",
    category: "Guides",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Export procedures, prohibited items, documentation, and practical tips for smooth Pakistan customs clearance.",
    content: "Complete customs regulations guide for international moving from Pakistan."
  },
  {
    slug: "moving-from-pakistan-to-dubai-guide",
    img: "/images/vehicle-shipping.jpg",
    title: "Moving from Pakistan to Dubai: Complete Guide 2026",
    date: "Apr 1, 2026",
    category: "Guides",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Visa notes, shipping options, UAE customs, costs, and timelines for Dubai relocations from Pakistan.",
    content: "Complete guide for moving from Pakistan to Dubai with all requirements."
  },
  {
    slug: "international-moving-services-pakistan",
    linkTo: "/international-movers-pakistan/",
    img: "/images/dha-movers-karachi.png",
    title: "How to Choose the Best International Moving Company in Pakistan",
    date: "Feb 15, 2024",
    category: "Guides",
    author: "Best International Movers",
    readTime: "7 min read",
    excerpt: "A comprehensive guide to selecting a reliable international moving company in Rawalpindi, Islamabad, Lahore, and Peshawar.",
    content: "Guide to choosing the best international moving company in Pakistan."
  },
  {
    slug: "packing-guide-international-move",
    img: "/images/secure-storage.png",
    title: "Ultimate Packing Guide for International Moving: Protect Your Belongings",
    date: "Feb 1, 2024",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "9 min read",
    excerpt: "Professional packing tips and techniques for protecting your household goods during international shipping.",
    content: "Ultimate packing guide for international moving with professional tips."
  }
];

// Categories for filtering
const categories = [
  "All",
  "Family Relocation",
  "Freight Forwarding",
  "Customs & Compliance",
  "Office Relocation",
  "DHA Karachi",
  "International Shipping",
  "Moving Guides",
  "Moving Tips",
  "Shipping Tips",
  "Logistics",
  "Guides",
  "Pet Services",
  "Insurance & Protection",
  "Relocation Guide",
  "Shipping Guide",
  "Cargo Guide",
];

const BlogMainPage = () => {
  // Primary SEO configuration
  const seoConfig = {
    title: "Blog - Best International Movers & Logistics Pakistan",
    description: "Expert tips, guides, and news about international moving from Pakistan. Get insights on packing, customs, shipping, and relocation.",
    keywords: "moving blog pakistan, international moving tips, packing guide, customs regulations, shipping advice",
    canonicalUrl: "https://bestintlmovers.com/blog/"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component */}
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/blog/"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Blog & Resources</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Latest <span className="text-gold">Insights</span> & Moving Guides
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Expert tips, guides, and news about international moving from Pakistan. Make your relocation journey smoother with our comprehensive resources.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold" size={20} />
                <input 
                  type="text" 
                  placeholder="Search articles, tips, guides..."
                  className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold/50 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="py-8 bg-navy-light/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "All" 
                    ? "bg-gold text-navy-dark" 
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allBlogs.map((blog, idx) => (
              <motion.article 
                key={blog.slug} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={blog.linkTo ?? `/blog/${blog.slug}/`} className="block h-full">
                  <div className="glass-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all h-full">
                    <div className="overflow-hidden">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        loading="lazy"
                        className={`w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ${
                          blog.slug === BEST_PACKERS_MOVERS_ISLAMABAD_2026_SLUG
                            ? BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE_CLASS_CARD
                            : blog.slug === CARGO_INSURANCE_INTERNATIONAL_SLUG
                            ? CARGO_INSURANCE_INTERNATIONAL_IMAGE_CLASS_CARD
                            : blog.slug === OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_SLUG
                            ? OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_IMAGE_CLASS_CARD
                            : blog.slug === DHA_KARACHI_MOVING_GUIDE_SLUG
                            ? DHA_KARACHI_MOVING_GUIDE_IMAGE_CLASS_CARD
                            : blog.slug === KARACHI_TO_DUBAI_SHIPPING_COST_SLUG
                            ? KARACHI_TO_DUBAI_SHIPPING_COST_IMAGE_CLASS_CARD
                            : ""
                        }`}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-3 py-1">
                          <Tag className="text-gold" size={14} />
                          <span className="text-gold text-xs font-medium">{blog.category}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Calendar size={12} />
                          <span>{blog.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <User size={12} />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Clock size={12} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center text-gold font-semibold text-sm">
                        Read More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Subscribe for relocation guides &amp; moving tips
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest moving guides, customs updates, and exclusive tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold/50 transition-all"
              />
              <button className="px-6 py-3 bg-gold text-navy-dark rounded-xl font-semibold hover:bg-gold/90 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default BlogMainPage;
