import React from 'react';
import { Link } from 'react-router-dom';
import SeoLandingPageLayout from '../components/marketing/SeoLandingPageLayout';
import { Package, Home, Truck, Shield, CheckCircle, Clock, Users, MapPin, Star, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const MoversAndPackersInPeshawar = () => {
  // Schema markup for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bestintlmovers.com/movers-and-packers-in-peshawar",
        "name": "Best International Movers & Logistics - Peshawar",
        "description": "Professional movers and packers in Peshawar. Expert house shifting, office relocation & cargo services across KPK. Safe, affordable & on-time.",
        "url": "https://bestintlmovers.com/movers-and-packers-in-peshawar",
        "telephone": "+92-300-9130211",
        "email": "info@bestintlmovers.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Peshawar",
          "addressRegion": "KPK",
          "addressCountry": "Pakistan"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0151",
          "longitude": "71.5249"
        },
        "openingHours": "Mo-Sa 08:00-20:00",
        "priceRange": "$$",
        "image": "https://bestintlmovers.com/images/peshawar.png",
        "serviceType": "Moving and Packing Services"
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/movers-and-packers-in-peshawar#service",
        "name": "Movers and Packers Services in Peshawar",
        "description": "Complete residential and commercial moving services in Peshawar including house shifting, office relocation, and international moving.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://bestintlmovers.com/movers-and-packers-in-peshawar"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Peshawar, KPK and surrounding areas"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/movers-and-packers-in-peshawar#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a local house shift in Peshawar take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard 2-bedroom local shift in Peshawar is typically completed within 4 to 8 hours, depending on floor level, volume of items, and distance between addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide packing materials, or do I need to arrange them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We bring all packing materials — boxes, bubble wrap, stretch film, tape, and foam padding — at no extra cost when you book a full packing service."
            }
          },
          {
            "@type": "Question",
            "name": "Can you shift from Peshawar to Islamabad or Rawalpindi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide fully managed intercity shifting from Peshawar to Rawalpindi and Islamabad, Lahore, Karachi, and all major cities across Pakistan."
            }
          },
          {
            "@type": "Question",
            "name": "Are my belongings insured during move?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All items are covered by transit insurance throughout the move. Any damage that occurs during transport is fully compensated."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle office relocations in Peshawar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in office and commercial shifting with after-hours and weekend options available to minimise disruption to your business."
            }
          },
          {
            "@type": "Question",
            "name": "Can you arrange international moving from Peshawar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our international relocation service covers air freight, sea freight, customs clearance, and door-to-door delivery to over 100 countries from KPK."
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking 2 to 3 days in advance for local moves, and at least one week ahead for intercity or international relocations."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bestintlmovers.com/movers-and-packers-in-peshawar#breadcrumb",
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
            "name": "Movers and Packers Peshawar",
            "item": "https://bestintlmovers.com/movers-and-packers-in-peshawar"
          }
        ]
      }
    ]
  };

  // FAQ data
  const faqs = [
    {
      q: "How long does a local house shift in Peshawar take?",
      a: "A standard 2-bedroom local shift in Peshawar is typically completed within 4 to 8 hours, depending on floor level, volume of items, and distance between addresses."
    },
    {
      q: "Do you provide packing materials, or do I need to arrange them?",
      a: "We bring all packing materials — boxes, bubble wrap, stretch film, tape, and foam padding — at no extra cost when you book a full packing service."
    },
    {
      q: "Can you shift from Peshawar to Islamabad or Rawalpindi?",
      a: "Yes. We provide fully managed intercity shifting from Peshawar to Rawalpindi and Islamabad, Lahore, Karachi, and all major cities across Pakistan."
    },
    {
      q: "Are my belongings insured during move?",
      a: "Yes. All items are covered by transit insurance throughout the move. Any damage that occurs during transport is fully compensated."
    },
    {
      q: "Do you handle office relocations in Peshawar?",
      a: "Yes. We specialise in office and commercial shifting with after-hours and weekend options available to minimise disruption to your business."
    },
    {
      q: "Can you arrange international moving from Peshawar?",
      a: "Absolutely. Our international relocation service covers air freight, sea freight, customs clearance, and door-to-door delivery to over 100 countries from KPK."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking 2 to 3 days in advance for local moves, and at least one week ahead for intercity or international relocations."
    }
  ];

  return (
    <SeoLandingPageLayout
      visualSkin="default"
      title="Movers and Packers in Peshawar – Safe & Reliable Shifting"
      description="Professional movers and packers in Peshawar. Expert house shifting, office relocation & cargo services across KPK. Safe, affordable & on-time. Call 0300-9130211"
      keywords="movers and packers in peshawar, packers movers peshawar, house shifting peshawar, home shifting services peshawar, moving company peshawar, shifting services peshawar, office relocation peshawar, cargo services peshawar"
      urlPath="/movers-and-packers-in-peshawar"
      h1="Movers and Packers in Peshawar – Professional House Shifting & Relocation Services"
      heroSubtext="Professional movers and packers in Peshawar. Expert house shifting, office relocation & cargo services across KPK. Safe, affordable & on-time. Call 0300-9130211"
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Movers & Packers Peshawar" }]}
      heroImageUrl="/images/peshawar.png"
      heroImageAlt="Professional movers and packers team in Peshawar loading furniture for house shifting"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="Frequently Asked Questions – Movers and Packers Peshawar"
    >

      
      {/* Introduction */}
      <div className="my-8">
        <p className="text-foreground leading-relaxed mb-4">
          Moving to a new home or office in Peshawar is a major undertaking. From packing fragile crockery to dismantling large furniture, transporting through busy city roads, and settling into a completely new space — every step demands time, effort, and expertise. Without a professional team, the risk of damaged belongings, wasted hours, and unnecessary stress is very real.
        </p>
        <p className="text-foreground leading-relaxed">
          At <strong>Best International Movers & Logistics</strong>, we provide complete movers and packers services in Peshawar — covering residential house shifting, office relocation, intercity moves, and international relocations from KPK. Our experienced team handles every step with care, so you can focus on your new beginning.
        </p>
      </div>

      {/* Why Professional Movers Matter */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Why Professional Movers Matter in Peshawar</h2>
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-6 border border-blue-500">
          <p className="text-white leading-relaxed">
            Peshawar is one of Pakistan's oldest and most densely populated cities. Navigating areas like Hayatabad, Saddar, University Town, Gulbahar, and Cantt with a fully loaded moving vehicle requires local knowledge and planning. Rush-hour traffic on GT Road, narrow lanes in the old city, and gated community protocols in Hayatabad — these are challenges that an experienced moving team handles as a matter of routine.
          </p>
          <p className="text-white mt-4 leading-relaxed">
            Attempting a home shift without professional support often results in scratched furniture, broken items, and a move that takes twice as long as expected. Hiring <strong className="text-yellow-300">expert packers and movers in Peshawar</strong> means your belongings are in safe hands from the very first box.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Movers and Packers Services in Peshawar</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl p-6 border border-green-400">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">1. Residential House Shifting</h3>
            </div>
            <p className="text-green-50">
              Our house shifting service in Peshawar covers everything — full inventory assessment, professional packing, careful loading, safe transport, and organised unpacking at your new home. Whether you are moving a small apartment or a large family house, our team is equipped for every scale of move.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-6 border border-blue-400">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">2. Professional Packing Service</h3>
            </div>
            <p className="text-blue-50">
              We use high-quality packing materials — reinforced cardboard boxes, bubble wrap, stretch film, packing paper, and foam padding — selected based on the type of item being packed. Fragile items like glassware, electronics, and artwork receive double-layer protective wrapping. Every box is labelled clearly by room for easy unpacking.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">3. Furniture Dismantling & Reassembly</h3>
            </div>
            <p className="text-purple-50">
              Large furniture pieces — double beds, wardrobes, bunk beds, dining tables, and modular sofas — are professionally dismantled before the move and fully reassembled at your new location. Our team brings all the tools required, so you do not have to arrange anything.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-xl p-6 border border-orange-400">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">4. Office & Commercial Shifting</h3>
            </div>
            <p className="text-orange-50">
              Relocating a business requires precision and minimal downtime. Our commercial shifting team in Peshawar handles office furniture, IT equipment, files, and server systems with structured planning. We offer after-hours and weekend slots to keep disruption to your operations as low as possible.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-6 border border-teal-400">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">5. Intercity Shifting from Peshawar</h3>
            </div>
            <p className="text-teal-50">
              We provide reliable intercity shifting from Peshawar to all major cities across Pakistan — including{" "}
              <Link to="/packers-and-movers-rawalpindi" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">
                Rawalpindi, Islamabad
              </Link>
              , Lahore, Karachi, and Multan. Long-distance moves are handled with reinforced packing, GPS-tracked vehicles, and direct communication throughout the journey.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-xl p-6 border border-indigo-400">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">6. International Relocation from Peshawar</h3>
            </div>
            <p className="text-indigo-50">
              Planning to move abroad from KPK? Our{" "}
              <Link to="/services/international-moving" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">
                international moving services from Pakistan
              </Link>
              {" "}cover sea freight, air freight, customs clearance, and door-to-door delivery to over 100 countries — including UAE, UK, Canada, Saudi Arabia, and Australia. We manage every document and formality so your overseas move is fully stress-free.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl shadow-xl p-6 border border-cyan-400">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">7. Secure Storage in Peshawar</h3>
            </div>
            <p className="text-cyan-50">
              If there is a gap between your move-out and move-in dates, our secure storage facility keeps your belongings safe until you are ready. Short-term and long-term options are both available with full inventory management.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Areas We Cover in Peshawar</h2>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 border border-blue-400">
          <p className="text-white mb-6 font-medium text-lg">Our moving team operates across all major residential and commercial areas of Peshawar, including:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Hayatabad (All Phases — Phase 1 to Phase 7)",
              "University Town",
              "Saddar Peshawar",
              "Cantt Area",
              "Gulbahar",
              "Gulshan Abad",
              "Dalazak Road",
              "Warsak Road",
              "Pajagi Road",
              "Board Bazaar",
              "Charsadda Road",
              "Nasir Bagh",
              "Regi Model Town",
              "New Shamas Colony"
            ].map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
            <p className="text-white font-medium text-lg">
              We also serve surrounding areas including <strong className="text-yellow-300">Charsadda, Nowshera, Mardan, Abbottabad, and Swat</strong> for intercity moves originating from or arriving in Peshawar.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Movers and Packers Charges in Peshawar – What to Expect</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white mb-6">
            One of the most common questions we receive is about the cost of shifting in Peshawar. Our pricing is fully transparent — the quote you receive is the amount you pay, with no hidden fees.
          </p>
          <p className="text-white mb-6 font-medium text-lg">The final cost depends on several factors:</p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-600 rounded-lg">
              <thead>
                <tr className="bg-blue-600">
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Factor</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Home size</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">1-bed, 2-bed, 3-bed apartment or house</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Distance</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Local Peshawar or intercity</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Volume of items</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Furniture count, appliances, total rooms</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Floor level</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Ground floor or upper floor with/without lift</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Packing scope</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Full packing or transport only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 border border-blue-400">
            <h3 className="text-xl font-semibold text-white mb-4">Estimated Price Range:</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">1 Bedroom flat (local Peshawar)</span>
                <span className="text-yellow-300 font-bold">Rs. 8,000 – 14,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">2 Bedroom house (local Peshawar)</span>
                <span className="text-yellow-300 font-bold">Rs. 14,000 – 25,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">3 Bedroom house (local Peshawar)</span>
                <span className="text-yellow-300 font-bold">Rs. 25,000 – 45,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">Peshawar to Islamabad/Rawalpindi</span>
                <span className="text-yellow-300 font-bold">Rs. 18,000 – 40,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">Peshawar to Lahore/Karachi</span>
                <span className="text-yellow-300 font-bold">Rs. 30,000 – 65,000</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-400">
              <p className="text-white font-medium text-lg">
                <strong className="text-yellow-300">Get a FREE Quote in 30 Minutes:</strong> Call or WhatsApp us with your pickup address, drop address, number of rooms, and move date — our team will provide an accurate, itemised quote promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Best International Movers in Peshawar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-6 border border-blue-400">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Experienced & Verified Team</h3>
            </div>
            <p className="text-blue-100">
              Every member of our Peshawar moving team is professionally trained and background-verified. Your home is treated with full respect and care throughout the process.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl p-6 border border-green-400">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Transparent Pricing — No Surprises</h3>
            </div>
            <p className="text-green-100">
              We provide a complete written quote before the move begins. The amount quoted is the amount you pay. No additions, no last-minute charges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">On-Time Arrival & Completion</h3>
            </div>
            <p className="text-purple-100">
              We schedule moves with precision and stick to agreed timelines. Your shifting date and time is a commitment, not just an estimate.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-xl p-6 border border-orange-400">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Full Transit Insurance</h3>
            </div>
            <p className="text-orange-100">
              All items are covered by transit insurance during the move. In the unlikely event of any damage, you are fully protected.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-6 border border-teal-400">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Local Peshawar Knowledge</h3>
            </div>
            <p className="text-teal-100">
              Our team understands Peshawar's road conditions, traffic patterns, and access requirements across all sectors — from Hayatabad's gated phases to narrow lanes of Saddar. This saves time and prevents avoidable problems on move day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl shadow-xl p-6 border border-cyan-400">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">End-to-End Service</h3>
            </div>
            <p className="text-cyan-100">
              From the first survey call to the final item placed in your new home — one team, one point of contact. No need to coordinate between multiple vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Moving Process – Step by Step</h2>
        <div className="space-y-4">
          {[
            { step: "Step 1", title: "Free Survey & Quote", desc: "Contact us with your shifting details. Our team will assess your requirements and provide a clear, itemised quote with no obligations." },
            { step: "Step 2", title: "Packing", desc: "Our professional packing team arrives on the agreed date and packs every item systematically using quality materials. Fragile items, electronics, and valuables are given priority handling." },
            { step: "Step 3", title: "Loading", desc: "All packed items are carefully loaded into our vehicle with strategic stacking to prevent movement or damage during transit. Heavy pieces go first, fragile items are secured separately." },
            { step: "Step 4", title: "Transportation", desc: "Your belongings are transported to your new address via the safest and most efficient route. You are kept updated throughout." },
            { step: "Step 5", title: "Unloading & Placement", desc: "At your new home or office, every item is unloaded and placed in the designated room as per your instructions." },
            { step: "Step 6", title: "Final Check & Sign-Off", desc: "Once the move is complete, our team conducts a walkthrough to confirm all items have arrived safely and everything is set up to your satisfaction." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">What Our Customers in Peshawar Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl shadow-2xl p-6 border border-blue-500 hover:border-blue-400 transition-all">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-blue-100 italic mb-4 leading-relaxed">
              "We moved from Hayatabad Phase 6 to University Town. The team was on time, worked quickly, and not a single thing was damaged. Very professional service."
            </p>
            <p className="text-white font-semibold text-lg">— Tariq Yousaf, Hayatabad Peshawar</p>
          </div>

          <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl shadow-2xl p-6 border border-purple-500 hover:border-purple-400 transition-all">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-purple-100 italic mb-4 leading-relaxed">
              "Shifted my entire office from Saddar to Gulbahar. They handled all the IT equipment and furniture without any issue. Pricing was exactly as quoted."
            </p>
            <p className="text-white font-semibold text-lg">— Adeel Khan, Saddar Peshawar</p>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl shadow-2xl p-6 border border-green-500 hover:border-green-400 transition-all">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-green-100 italic mb-4 leading-relaxed">
              "The team disassembled and reassembled all our furniture in the new house. Everything was done neatly and faster than I expected."
            </p>
            <p className="text-white font-semibold text-lg">— Nadia Hussain, Cantt Peshawar</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Move in Peshawar – Get a Free Quote Today</h2>
          <p className="text-xl mb-8">
            Whether you are shifting a flat in Hayatabad, relocating an office in Saddar, or planning a move from Peshawar to another city, our team is ready to make it smooth, safe, and stress-free.
          </p>
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              📞 <span className="text-yellow-300">Call / WhatsApp: 0300-9130211</span>
            </div>
            <div className="text-lg">
              🕐 <span>Available: Monday to Saturday | 8:00 AM – 8:00 PM</span>
            </div>
            <div className="text-lg">
              📍 <span>Serving All Areas of Peshawar, KPK & Nationwide</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0300-9130211" 
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all"
            >
              <Phone size={18} />
              GET FREE QUOTE
            </a>
            <a 
              href="https://wa.me/923009130211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
            >
              <MessageCircle size={18} />
              WHATSAPP US NOW
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 border border-purple-500">
          <h2 className="text-2xl font-bold text-white mb-6">Related Moving Services</h2>
          <p className="text-white mb-8 text-lg">Explore our other professional moving services for a complete relocation experience:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/home-shifting-rawalpindi" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Home className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Home Shifting Rawalpindi</h3>
                </div>
                <p className="text-white/90 text-sm">Professional house relocation services in Rawalpindi</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/packers-and-movers-islamabad" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Package className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Packers & Movers Islamabad</h3>
                </div>
                <p className="text-white/90 text-sm">Complete packing and moving solutions in Islamabad</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/international-moving" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Shield className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">International Movers Pakistan</h3>
                </div>
                <p className="text-white/90 text-sm">Relocate internationally from Pakistan</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/cargo-service-peshawar" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Truck className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Cargo Service Peshawar</h3>
                </div>
                <p className="text-white/90 text-sm">Cargo and freight services from Peshawar</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </SeoLandingPageLayout>
  );
};

export default MoversAndPackersInPeshawar;
