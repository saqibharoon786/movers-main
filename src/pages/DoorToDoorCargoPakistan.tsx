import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Globe, Package, ShieldCheck, Award, Clock, Users, MapPin, Phone, Plane, Anchor, Calculator, CheckCircle2 } from "lucide-react";

const DoorToDoorCargoPakistan = () => {
  // Build comprehensive schema for door to door cargo service
  const buildServiceSchema = () => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
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
        "@id": "https://bestintlmovers.com/door-to-door-cargo-pakistan#service",
        "name": "Door to Door Cargo Pakistan – Complete International Shipping from Your Home to Destination",
        "serviceType": "Door to Door Cargo Service",
        "description": "Complete door to door cargo from Pakistan to UAE, UK, Canada, USA & worldwide. Home pickup, packing, customs & final delivery managed by Best International Movers.",
        "url": "https://bestintlmovers.com/door-to-door-cargo-pakistan",
        "provider": { "@id": "https://bestintlmovers.com/#organization" },
        "areaServed": { "@type": "Country", name: "Pakistan" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "priceRange": "80000-600000+",
          "description": "International door to door cargo services from Pakistan to worldwide destinations"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/door-to-door-cargo-pakistan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What exactly does door to door cargo from Pakistan include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our door to door service covers: free pre-shipment survey, professional export packing at your Pakistan premises, inland transport to Karachi Port or departure airport, Pakistan export customs clearance, international sea or air freight, destination country import clearance, and final delivery to your overseas address. Every stage is managed by our team — nothing is left to chance or outsourced to unknown third parties."
            }
          },
          {
            "@type": "Question",
            "name": "Is door to door cargo from Pakistan available for small shipments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. LCL (Less than Container Load) groupage is available for smaller volumes — even just a few cubic metres. You pay only for the space your cargo occupies in a shared container. Our minimum booking is not a full container, so door to door service is accessible for individual households and small commercial consignments alike."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know my goods are safe during international journey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Three layers of protection work together. First — professional export packing designed for long international transit. Second — All-Risk cargo insurance covering full declared replacement value of your goods from packing through final delivery. Third — milestone tracking updates throughout your journey so you always know where your shipment is."
            }
          },
          {
            "@type": "Question",
            "name": "How long does door to door cargo from Pakistan to Dubai take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Door to door by sea freight to Dubai typically takes 3 to 5 weeks from Rawalpindi or Islamabad. Air freight door to door takes 4 to 7 days. Exact timelines depend on vessel sailing schedules and UAE customs clearance times."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between your door to door service and just booking freight directly with a shipping line?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A shipping line provides ocean transit only — from Karachi Port to destination port. You are responsible for packing, inland transport, export customs, destination clearance, and final delivery. Our door to door service covers all of these stages under one contract, with one team accountable for the complete outcome."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to be present when cargo is delivered at the destination?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For household goods, yes — someone should be present to receive and sign for delivery and check items against the inventory. For commercial cargo, delivery to a depot or warehouse can be arranged where a representative receives on your behalf."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book door to door cargo from Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call or WhatsApp 0300-9130211 with your origin city in Pakistan, destination country and city, type of goods, estimated volume, and required timeline. We arrange a free pre-shipment survey and provide a complete written quotation within one business day."
            }
          }
        ]
      }
    ]
  });

  const destinations = [
    {
      name: "UAE",
      cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
      seaTime: "3-5 weeks",
      airTime: "4-7 days"
    },
    {
      name: "UK",
      cities: ["London", "Birmingham", "Manchester", "Leeds", "Bradford", "Sheffield", "Glasgow", "Edinburgh"],
      seaTime: "8-11 weeks",
      airTime: "5-8 days"
    },
    {
      name: "Canada",
      cities: ["Toronto", "Vancouver", "Calgary", "Ottawa", "Mississauga"],
      seaTime: "10-14 weeks",
      airTime: "6-9 days"
    },
    {
      name: "USA",
      cities: ["New York", "Houston", "Los Angeles", "Dallas", "Chicago", "Atlanta"],
      seaTime: "10-14 weeks",
      airTime: "6-9 days"
    },
    {
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
      seaTime: "9-12 weeks",
      airTime: "7-11 days"
    },
    {
      name: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Makkah"],
      seaTime: "4-6 weeks",
      airTime: "4-7 days"
    }
  ];

  const pricingTiers = [
    {
      size: "Small (LCL, 1–5 CBM)",
      price: "Rs. 80,000 – 180,000",
      description: "Shared container for smaller volumes"
    },
    {
      size: "1–2 bedroom (20ft FCL)",
      price: "Rs. 200,000 – 380,000",
      description: "Full container for small to medium households"
    },
    {
      size: "3–4 bedroom (40ft FCL)",
      price: "Rs. 350,000 – 600,000+",
      description: "Full container for large households"
    }
  ];

  const faq = [
    {
      q: "What exactly does door to door cargo from Pakistan include?",
      a: "Our door to door service covers: free pre-shipment survey, professional export packing at your Pakistan premises, inland transport to Karachi Port or departure airport, Pakistan export customs clearance, international sea or air freight, destination country import clearance, and final delivery to your overseas address. Every stage is managed by our team — nothing is left to chance or outsourced to unknown third parties."
    },
    {
      q: "Is door to door cargo from Pakistan available for small shipments?",
      a: "Yes. LCL (Less than Container Load) groupage is available for smaller volumes — even just a few cubic metres. You pay only for the space your cargo occupies in a shared container. Our minimum booking is not a full container, so door to door service is accessible for individual households and small commercial consignments alike."
    },
    {
      q: "How do I know my goods are safe during international journey?",
      a: "Three layers of protection work together. First — professional export packing designed for long international transit. Second — All-Risk cargo insurance covering full declared replacement value of your goods from packing through final delivery. Third — milestone tracking updates throughout your journey so you always know where your shipment is."
    },
    {
      q: "How long does door to door cargo from Pakistan to Dubai take?",
      a: "Door to door by sea freight to Dubai typically takes 3 to 5 weeks from Rawalpindi or Islamabad. Air freight door to door takes 4 to 7 days. Exact timelines depend on vessel sailing schedules and UAE customs clearance times."
    },
    {
      q: "What is the difference between your door to door service and just booking freight directly with a shipping line?",
      a: "A shipping line provides ocean transit only — from Karachi Port to destination port. You are responsible for packing, inland transport, export customs, destination clearance, and final delivery. Our door to door service covers all of these stages under one contract, with one team accountable for the complete outcome."
    },
    {
      q: "Do I need to be present when cargo is delivered at the destination?",
      a: "For household goods, yes — someone should be present to receive and sign for delivery and check items against the inventory. For commercial cargo, delivery to a depot or warehouse can be arranged where a representative receives on your behalf."
    },
    {
      q: "How do I book door to door cargo from Pakistan?",
      a: "Call or WhatsApp 0300-9130211 with your origin city in Pakistan, destination country and city, type of goods, estimated volume, and required timeline. We arrange a free pre-shipment survey and provide a complete written quotation within one business day."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Door to Door Cargo Pakistan – Home Pickup to World Delivery"
        description="Complete door to door cargo from Pakistan to UAE, UK, Canada, USA & worldwide. Home pickup, packing, customs & final delivery managed. Call 0300-9130211 today."
        keywords="door to door cargo pakistan, door to door shipping pakistan, door to door delivery pakistan, door to door cargo service pakistan, international door to door pakistan, pakistan home pickup cargo, door to door freight pakistan"
        urlPath="/door-to-door-cargo-pakistan"
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
              <Package className="text-gold" size={20} />
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Door to Door Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Door to Door Cargo Pakistan – Complete <span className="text-gold">International Shipping</span> from Your Home to Destination
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Shipping goods internationally from Pakistan involves multiple stages — each handled by a different company, each with their own documentation requirements, and none of them responsible for what happens at handoff between stages. This fragmented approach is why so many international shipments from Pakistan arrive late, arrive damaged, or create unexpected costs that were never in original quote.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-white">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <CheckCircle2 className="text-gold" size={24} />
                <span className="font-semibold">One Company</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Globe className="text-gold" size={24} />
                <span className="font-semibold">One Contract</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <ShieldCheck className="text-gold" size={24} />
                <span className="font-semibold">One Point of Contact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default DoorToDoorCargoPakistan;
