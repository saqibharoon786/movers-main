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

      {/* Hero Image Section */}
      <div className="my-8">
        <img src="/images/peshawar.png" alt="Movers and Packers in Peshawar" className="w-full rounded-xl shadow-2xl" />
      </div>

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
              <h3 className="text-xl font-semibold text-white">2. Professional Packing Services</h3>
            </div>
            <p className="text-blue-50">
              We use premium packing materials — bubble wrap, stretch film, sturdy cartons, and custom crates for fragile items. Our team packs room by room, labels everything clearly, and creates an inventory list so nothing gets misplaced during the move.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">3. Furniture Dismantling & Assembly</h3>
            </div>
            <p className="text-purple-50">
              Large furniture pieces like beds, wardrobes, and dining tables are dismantled before loading and reassembled at your new location. We keep all screws and fittings organised in labelled bags for quick and accurate reassembly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-xl p-6 border border-orange-400">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">4. Office Relocation Services</h3>
            </div>
            <p className="text-orange-50">
              We specialise in commercial moving with minimal business disruption. Weekend and after-hours moves are available, ensuring your operations resume quickly at the new location. We handle computers, servers, furniture, and confidential documents with care.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-6 border border-teal-400">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">5. Intercity Moving</h3>
            </div>
            <p className="text-teal-50">
              Moving from Peshawar to Islamabad, Rawalpindi, Lahore, Karachi, or any other city? Our intercity moving service covers the entire process with proper vehicle allocation, route planning, and timely delivery to your destination.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-xl p-6 border border-indigo-400">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">6. International Relocation</h3>
            </div>
            <p className="text-indigo-50">
              From Peshawar to anywhere in the world — our international moving service handles air freight, sea freight, customs clearance, documentation, and door-to-door delivery. We manage the complete process so you can focus on settling into your new country.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl shadow-xl p-6 border border-cyan-400">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">7. Storage Solutions</h3>
            </div>
            <p className="text-cyan-50">
              Need temporary storage? We offer secure short-term and long-term storage options for your household goods, office equipment, or vehicles. Our storage facilities are climate-controlled and monitored 24/7 for complete security.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Areas We Cover in Peshawar & KPK</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white leading-relaxed mb-6">
            Our moving services cover all major areas in Peshawar and surrounding KPK regions. We understand local access points, parking constraints, and society protocols in each area:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              "Hayatabad (All Phases)", "University Town", "Saddar", "Cantt",
              "Gulbahar", "Kohat Road", "Warsak Road", "Ring Road",
              "Peshawar City", "Islamabad Highway", "Nowshera Road", "Mardan"
            ].map((area, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-600/20 backdrop-blur-sm rounded-lg border border-blue-400">
            <p className="text-white font-medium">
              Moving outside Peshawar? We also serve <strong>Abbottabad, Mardan, Swabi, Charsadda, and Nowshera</strong> with the same professional standards and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Peshawar Moving Costs & Pricing</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white leading-relaxed mb-6">
            Moving costs in Peshawar depend on several factors including volume of goods, floor level, distance, packing requirements, and vehicle type. We provide transparent, written quotations with no hidden charges.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-400">
              <h3 className="text-xl font-semibold text-white mb-4">Typical Price Ranges</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-100">Studio/1-Bedroom Apartment</span>
                  <span className="text-yellow-300 font-bold">PKR 15,000 - 25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">2-Bedroom Apartment</span>
                  <span className="text-yellow-300 font-bold">PKR 25,000 - 40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">3-Bedroom House</span>
                  <span className="text-yellow-300 font-bold">PKR 40,000 - 65,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">4+ Bedroom House/Villa</span>
                  <span className="text-yellow-300 font-bold">PKR 65,000 - 100,000+</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600/20 backdrop-blur-sm rounded-lg p-6 border border-green-400">
              <h3 className="text-xl font-semibold text-white mb-4">Cost Factors</h3>
              <div className="space-y-2 text-green-100">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Floor level (higher floors = higher cost)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Parking distance from building</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Volume and weight of items</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Packing requirements</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Special items (pianos, safes, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span>Distance between locations</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-400">
            <p className="text-white font-medium">
              <strong className="text-yellow-300">💡 Pro Tip:</strong> Book a free survey for accurate pricing. Our team visits your location, assesses volume and access points, and provides a detailed written quote with no obligations.
            </p>
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
              <h3 className="text-xl font-semibold text-white">Local Knowledge</h3>
            </div>
            <p className="text-teal-100">
              Our team knows Peshawar inside out — traffic patterns, building access rules, society protocols, and the best routes for moving trucks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-xl p-6 border border-indigo-400">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">End-to-End Service</h3>
            </div>
            <p className="text-indigo-100">
              From initial survey to final unpacking, we handle everything. You don't need to coordinate with multiple vendors or worry about any step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Process */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Moving Process — Step by Step</h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "Free Survey & Quote", desc: "Our team visits your location, assesses volume, checks access points, and provides a detailed written quote." },
            { step: "2", title: "Move Planning", desc: "We schedule the move date, assign the right team and vehicle, and plan the packing sequence." },
            { step: "3", title: "Professional Packing", desc: "Our team arrives with all packing materials and packs everything room by room with proper labeling." },
            { step: "4", title: "Careful Loading", desc: "Items are loaded systematically using proper equipment and techniques to prevent damage." },
            { step: "5", title: "Safe Transportation", desc: "Your belongings are transported to the new location using the most suitable route and timing." },
            { step: "6", title: "Unloading & Placement", desc: "Items are unloaded and placed in designated rooms as per the labeling for easy unpacking." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
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
        <h2 className="text-3xl font-bold text-foreground mb-8">What Our Peshawar Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-6 border border-blue-400">
            <div className="flex items-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <p className="text-blue-50 italic mb-4">
              "Excellent service! The team was professional, punctual, and handled our belongings with great care. Made our house shifting completely stress-free."
            </p>
            <p className="text-white font-semibold">— Ahmed Khan, Hayatabad</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl p-6 border border-green-400">
            <div className="flex items-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <p className="text-green-50 italic mb-4">
              "Moved our office from University Town to a new location. The team worked after hours to minimize disruption. Very impressed with their efficiency."
            </p>
            <p className="text-white font-semibold">— Sarah Mahmood, University Town</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
            <div className="flex items-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <p className="text-purple-50 italic mb-4">
              "International moving from Peshawar to Dubai was handled perfectly. All documentation, customs clearance, and delivery went smoothly. Highly recommend!"
            </p>
            <p className="text-white font-semibold">— Bilal Hussain, Saddar</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move in Peshawar?</h2>
          <p className="text-xl mb-8">
            Get a free, no-obligation quote for your move. Our team responds within 2 hours during business hours.
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
                <p className="text-white/90 text-sm">Complete moving solutions in Islamabad</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/international-moving" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Package className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">International Moving</h3>
                </div>
                <p className="text-white/90 text-sm">Overseas relocation services worldwide</p>
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
                <p className="text-white/90 text-sm">Freight and cargo transportation</p>
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
