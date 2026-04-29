import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { Link } from "react-router-dom";
import { Shield, Users, Clock, Award, Package } from "lucide-react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bestintlmovers.com/#localbusiness",
      "name": "Best International Movers & Logistics",
      "url": "https://bestintlmovers.com",
      "telephone": "+923009130211",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rawalpindi",
        "addressRegion": "Punjab",
        "addressCountry": "PK",
      },
      "areaServed": {
        "@type": "City",
        "name": "Rawalpindi"
      },
      "description": "Home Shifting Services in Rawalpindi - Safe, Fast & Hassle-Free moving solutions for residential relocations."
    },
    {
      "@type": "Service",
      "@id": "https://bestintlmovers.com/home-shifting-rawalpindi#service",
      "name": "Home Shifting Services in Rawalpindi",
      "serviceType": "Home Shifting Services",
      "description": "Looking for reliable home shifting services in Rawalpindi? Best International Movers covers Bahria Town, DHA, Cantt, Askari & more. Free survey. Call 0300-9130211.",
      "url": "https://bestintlmovers.com/home-shifting-rawalpindi",
      "provider": { "@id": "https://bestintlmovers.com/#localbusiness" },
      "areaServed": { "@type": "City", "name": "Rawalpindi" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://bestintlmovers.com/home-shifting-rawalpindi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does home shifting in Rawalpindi cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on the size of your home, distance, and services required. A 2-bedroom apartment typically costs between PKR 15,000 to PKR 35,000. Contact us for a free survey and exact quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide packing materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All packing materials — boxes, bubble wrap, foam, stretch film, and tape — are included in your shifting package at no extra charge."
          }
        },
        {
          "@type": "Question",
          "name": "Is the service available in Cantt and Saddar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly operate in Rawalpindi Cantt and Saddar, including all secure residential zones. Our crew carries proper identification."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical home shift take in Rawalpindi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard 3-bedroom house move takes 6 to 10 hours from packing to final unpacking at the destination."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer storage if my new home is not ready?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer short-term and long-term secure storage solutions at our climate-controlled facility in Rawalpindi."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle office relocations in Rawalpindi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our team handles office furniture, IT equipment, and sensitive documents with full care. Ask about our corporate packages."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bestintlmovers.com/home-shifting-rawalpindi#breadcrumb",
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
          "name": "Home Shifting Rawalpindi",
          "item": "https://bestintlmovers.com/home-shifting-rawalpindi"
        }
      ]
    }
  ]
};

const faqs = [
  {
    q: "How much does home shifting in Rawalpindi cost?",
    a: "Cost depends on the size of your home, distance, and services required. A 2-bedroom apartment typically costs between PKR 15,000 to PKR 35,000. Contact us for a free survey and exact quote."
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes. All packing materials — boxes, bubble wrap, foam, stretch film, and tape — are included in your shifting package at no extra charge."
  },
  {
    q: "Is the service available in Cantt and Saddar?",
    a: "Yes. We regularly operate in Rawalpindi Cantt and Saddar, including all secure residential zones. Our crew carries proper identification."
  },
  {
    q: "How long does a typical home shift take in Rawalpindi?",
    a: "A standard 3-bedroom house move takes 6 to 10 hours from packing to final unpacking at the destination."
  },
  {
    q: "Do you offer storage if my new home is not ready?",
    a: "Yes. We offer short-term and long-term secure storage solutions at our climate-controlled facility in Rawalpindi."
  },
  {
    q: "Can you handle office relocations in Rawalpindi?",
    a: "Absolutely. Our team handles office furniture, IT equipment, and sensitive documents with full care. Ask about our corporate packages."
  }
];

const HomeShiftingRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      title="Home Shifting Services in Rawalpindi | Trusted Local Movers | Best Intl Movers"
      description="Looking for reliable home shifting services in Rawalpindi? Best International Movers covers Bahria Town, DHA, Cantt, Askari & more. Free survey. Call 0300-9130211."
      keywords="home shifting services Rawalpindi, home relocation Rawalpindi, house shifting Rawalpindi, movers Rawalpindi, packers and movers Rawalpindi, local movers Rawalpindi, Bahria Town movers, DHA Rawalpindi shifting"
      urlPath="/home-shifting-rawalpindi"
      h1="Home Shifting Services in Rawalpindi — Safe, Fast & Hassle-Free"
      heroSubtext="Rawalpindi's most trusted home shifting company. From Bahria Town to Askari Sectors — we pack, move, and unpack everything with care. 15+ years. 5,000+ families served."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Home Shifting Rawalpindi" }]}
      heroImageUrl="https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&q=80&w=1600"
      heroImageAlt="Home shifting crew carrying packed boxes in Rawalpindi apartment building"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="Frequently Asked Questions — Home Shifting Services in Rawalpindi"
    >
      {/* Hero Image */}
      <div className="my-8">
        <img src="/images/homeshifting.png" alt="Home Shifting Services in Rawalpindi" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Section 1 — Introduction */}
      <h2>Why Rawalpindi Families Trust Us for Home Shifting</h2>
      <p>
        Shifting your home in Rawalpindi is no small task. Between navigating busy roads of Saddar, managing tight staircases in Satellite Town apartments, and safely dismantling furniture in DHA villas — every move comes with its own set of challenges.
      </p>
      <p>
        At Best International Movers & Logistics, we have been handling home shifting in Rawalpindi for over 15 years. Our dedicated local crews know every sector, every society, and every road in the twin cities. Whether you are moving within Rawalpindi or relocating to Islamabad, we handle everything from professional packing to final unpacking — so you do not have to lift a finger.
      </p>
      <p>
        We are not just a cargo company. We are a complete home shifting solution trusted by 5,000+ families across Pakistan.
      </p>

      {/* Section 2 — Coverage */}
      <h2>Areas We Cover in Rawalpindi</h2>
      <p>
        Our shifting teams operate 6 days a week across all major Rawalpindi locations:
      </p>
      <ul>
        <li><strong>Bahria Town & DHA</strong> — Both Islamabad and Rawalpindi sides, all phases covered.</li>
        <li><strong>Askari Sectors</strong> — Askari 1 through Askari 14, handled with full security compliance.</li>
        <li><strong>Westridge, Cantt & Saddar</strong> — Secure zone relocations with proper documentation support.</li>
        <li><strong>Satellite Town & Shamsabad</strong> — High-volume residential areas served daily.</li>
        <li><strong>PWD, Gulraiz & Chaklala</strong> — Full coverage including surrounding streets and housing schemes.</li>
        <li><strong>Adyala Road & Murree Road</strong> — All residential colonies and housing schemes along these routes.</li>
      </ul>
      <p>
        Not sure if we cover your area? Call us on 0300-9130211 for instant confirmation.
      </p>

      {/* Section 3 — What We Do */}
      <h2>Complete Home Shifting Services in Rawalpindi</h2>
      <p>
        We do not just move boxes. Here is what is included in every home shift:
      </p>
      <ul>
        <li><strong>Professional Packing</strong> — Bubble wrap, foam padding, and double-wall cartons for fragile items, crockery, electronics, and artwork. Nothing moves until it is packed properly.</li>
        <li><strong>Furniture Dismantling & Assembly</strong> — Grand wardrobes, beds, dining tables, and modular kitchens — our carpenters dismantle and reassemble everything at your new home.</li>
        <li><strong>Appliance Handling</strong> — Air conditioners, refrigerators, washing machines — handled by trained staff with proper tools.</li>
        <li><strong>Safe Loading & Transport</strong> — Dedicated covered trucks with padded interiors. No sharing of vehicles. Your belongings arrive exactly as they left.</li>
        <li><strong>Unpacking & Placement</strong> — We do not just drop boxes. Our team unpacks and places furniture in your new home exactly where you want it.</li>
        <li><strong>Post-Move Debris Removal</strong> — We clear all packing material before we leave.</li>
      </ul>

      {/* Section 4 — Why Choose Us */}
      <h2>What Makes Us Different</h2>
      <ul>
        <li><strong>15+ Years of Local Experience</strong> — We know Rawalpindi's roads, traffic patterns, and building layouts better than anyone.</li>
        <li><strong>Trained & Verified Staff</strong> — Every crew member is background-checked, uniformed, and trained in proper lifting and packing techniques.</li>
        <li><strong>Fully Insured Moves</strong> — Your goods are covered during transit. In the rare event of damage, we take full responsibility.</li>
        <li><strong>Transparent Pricing</strong> — No hidden charges. You receive a full written quote before the move begins.</li>
        <li><strong>Free Home Survey</strong> — Our team visits your home, assesses the volume, and gives you an accurate quote — completely free.</li>
        <li><strong>Same-Day & Emergency Moves</strong> — Available on short notice for urgent relocations within Rawalpindi.</li>
      </ul>

      {/* Section 5 — Internal Linking Block */}
      <h2>You May Also Need</h2>
      <p>
        If you are planning a move beyond Rawalpindi, we offer a full range of related services:
      </p>
      <ul>
        <li>Moving to Lahore? Explore our <Link to="/packers-and-movers-lahore" className="text-blue-600 hover:underline font-semibold">Packers and Movers in Lahore</Link> — same trusted team, same standards.</li>
        <li>Moving to Peshawar? Visit our <Link to="/movers-and-packers-peshawar" className="text-blue-600 hover:underline font-semibold">Movers and Packers in Peshawar</Link> page for coverage details.</li>
        <li>Planning to shift to Islamabad? Our <Link to="/home-shifting-islamabad" className="text-blue-600 hover:underline font-semibold">Home Shifting Islamabad</Link> service covers all sectors of the capital.</li>
        <li>Relocating internationally? Learn about our <Link to="/services/international-moving" className="text-blue-600 hover:underline font-semibold">International Moving Services</Link> — we move families to UAE, UK, Canada, USA, and 100+ countries.</li>
        <li>Need to ship your vehicle? Check our <Link to="/vehicle-shipping" className="text-blue-600 hover:underline font-semibold">Vehicle Shipping Service</Link> — local and international vehicle transport handled professionally.</li>
        <li>Unsure about customs? Use our free <Link to="/custom-duty-calculator" className="text-blue-600 hover:underline font-semibold">Custom Duty Calculator</Link> to estimate import charges before your shipment.</li>
        <li>Want to learn more before deciding? Read our <Link to="/moving-cost-guide-pakistan" className="text-blue-600 hover:underline font-semibold">Moving Cost Guide for Pakistan</Link> or browse our <Link to="/packing-tips-house-shifting" className="text-blue-600 hover:underline font-semibold">Packing Tips for House Shifting</Link>.</li>
      </ul>

      {/* Section 7 — CTA / Closing */}
      <h2>Ready to Move? Let's Talk.</h2>
      <p>
        Getting started takes less than 2 minutes. Fill out our form or call us directly — our team will schedule a free home survey at your convenience.
      </p>
      <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/10 rounded-lg p-6 border border-blue-600/30 text-center mt-4">
        <div className="space-y-3">
          <div className="text-2xl font-bold text-foreground">
            Call / WhatsApp: <span className="text-blue-600">0300-9130211</span>
          </div>
          <div className="text-lg text-foreground">
            Email: <span className="text-blue-600">info@bestintlmovers.com</span>
          </div>
          <p className="text-sm text-muted-foreground">Hours: Monday to Saturday, 8:00 AM – 8:00 PM</p>
          <p className="text-sm text-muted-foreground">Serving Rawalpindi, Islamabad, Lahore, and Peshawar — Pakistan's most trusted home shifting company.</p>
          <div className="mt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600/90 transition-all"
            >
              <Package size={18} />
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </SeoLandingPageLayout>
  );
};

export default HomeShiftingRawalpindi;
