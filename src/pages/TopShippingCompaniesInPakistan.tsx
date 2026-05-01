import React from 'react';
import { Link } from 'react-router-dom';
import SeoLandingPageLayout from '../components/marketing/SeoLandingPageLayout';
import { Package, Ship, Plane, Globe2, ShieldCheck, Clock, MapPin, Users, CheckCircle, ArrowRight, Phone, MessageCircle, Anchor, Truck, Building } from 'lucide-react';

const TopShippingCompaniesInPakistan = () => {
  // Schema markup for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bestintlmovers.com/top-shipping-companies-in-pakistan",
        "name": "Best International Movers & Logistics - Pakistan",
        "description": "Top shipping companies in Pakistan for air freight, sea freight & cargo services. Compare providers & find reliable logistics solutions.",
        "url": "https://bestintlmovers.com/top-shipping-companies-in-pakistan",
        "telephone": "+92-300-9130211",
        "email": "info@bestintlmovers.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Islamabad",
          "addressRegion": "Punjab",
          "addressCountry": "Pakistan"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.6844",
          "longitude": "73.0479"
        },
        "openingHours": "Mo-Sa 08:00-20:00",
        "priceRange": "$$",
        "image": "https://bestintlmovers.com/images/shipping.png",
        "serviceType": "Shipping and Logistics Services"
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/top-shipping-companies-in-pakistan#service",
        "name": "Top Shipping Companies in Pakistan",
        "description": "Complete guide to shipping companies in Pakistan including air freight, sea freight, customs clearance, and logistics services.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://bestintlmovers.com/top-shipping-companies-in-pakistan"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Pakistan and International"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/top-shipping-companies-in-pakistan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the most reliable shipping company in Pakistan for international moves?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Best International Movers & Logistics is among the most trusted providers for complete door-to-door international relocation from Pakistan, with 15+ years of experience and coverage to 100+ countries."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a shipping company and a freight forwarder in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A shipping company operates its own vessels or aircraft. A freight forwarder acts as an intermediary — booking space with carriers, handling customs documentation, and coordinating end-to-end logistics. Most businesses in Pakistan work with freight forwarders."
            }
          },
          {
            "@type": "Question",
            "name": "How long does sea freight from Pakistan to the UK take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sea freight from Karachi Port to the UK typically takes 20 to 28 days, depending on the shipping line, port of destination, and customs clearance time."
            }
          },
          {
            "@type": "Question",
            "name": "Do shipping companies in Pakistan handle customs clearance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most full-service freight forwarders and moving companies in Pakistan offer in-house customs clearance. Use our Custom Duty Calculator to estimate applicable duties before shipping."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for international shipping from Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard documents include a commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and any applicable export permits. Your shipping company will guide you through the full documentation process."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bestintlmovers.com/top-shipping-companies-in-pakistan#breadcrumb",
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
            "name": "Top Shipping Companies Pakistan",
            "item": "https://bestintlmovers.com/top-shipping-companies-in-pakistan"
          }
        ]
      }
    ]
  };

  // FAQ data
  const faqs = [
    {
      q: "Which is the most reliable shipping company in Pakistan for international moves?",
      a: "Best International Movers & Logistics is among the most trusted providers for complete door-to-door international relocation from Pakistan, with 15+ years of experience and coverage to 100+ countries."
    },
    {
      q: "What is the difference between a shipping company and a freight forwarder in Pakistan?",
      a: "A shipping company operates its own vessels or aircraft. A freight forwarder acts as an intermediary — booking space with carriers, handling customs documentation, and coordinating end-to-end logistics. Most businesses in Pakistan work with freight forwarders."
    },
    {
      q: "How long does sea freight from Pakistan to the UK take?",
      a: "Sea freight from Karachi Port to the UK typically takes 20 to 28 days, depending on the shipping line, port of destination, and customs clearance time."
    },
    {
      q: "Do shipping companies in Pakistan handle customs clearance?",
      a: "Most full-service freight forwarders and moving companies in Pakistan offer in-house customs clearance. Use our Custom Duty Calculator to estimate applicable duties before shipping."
    },
    {
      q: "What documents are required for international shipping from Pakistan?",
      a: "Standard documents include a commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and any applicable export permits. Your shipping company will guide you through the full documentation process."
    }
  ];

  return (
    <SeoLandingPageLayout
      visualSkin="default"
      title="Top Shipping Companies in Pakistan – 2025 Complete Guide"
      description="Discover the top shipping companies in Pakistan for air freight, sea freight & cargo services. Compare providers & find reliable logistics solutions. Call 0300-9130211"
      keywords="top shipping companies in pakistan, best shipping companies pakistan, freight companies pakistan, logistics companies pakistan, international shipping pakistan, cargo companies pakistan"
      urlPath="/top-shipping-companies-in-pakistan"
      h1="Top Shipping Companies in Pakistan – 2025 Complete Guide"
      heroSubtext="Discover the top shipping companies in Pakistan for air freight, sea freight & cargo services. Compare providers & find reliable logistics solutions. Call 0300-9130211"
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Top Shipping Companies Pakistan" }]}
      heroImageUrl="/images/shipping.png"
      heroImageAlt="Top shipping companies in Pakistan for international cargo and logistics services"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="Frequently Asked Questions – Shipping Companies in Pakistan"
    >

      {/* Hero Image */}
      <div className="my-8">
        <img src="/images/shipping.png" alt="Top Shipping Companies in Pakistan" className="w-full rounded-xl shadow-2xl" />
      </div>

      {/* Introduction */}
      <div className="my-8">
        <p className="text-foreground leading-relaxed mb-4">
          Choosing the right shipping company in Pakistan can make or break your logistics experience. Whether you are a business exporting goods internationally, an importer clearing shipments at Karachi Port, or an individual relocating overseas, the quality and reliability of your freight partner directly affects your costs, timelines, and peace of mind.
        </p>
        <p className="text-foreground leading-relaxed">
          Pakistan's logistics sector has grown significantly in recent years — driven by CPEC infrastructure development, expanding e-commerce, and increasing international trade volumes. With dozens of shipping companies operating across Islamabad, Rawalpindi, Karachi, Lahore, and Peshawar, selecting the right one requires a clear understanding of what each provider offers.
        </p>
        <p className="text-foreground leading-relaxed mt-4">
          This guide covers the top shipping companies in Pakistan, the services they provide, and the key factors to consider when making your choice.
        </p>
      </div>

      {/* What Do Shipping Companies Do */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">What Do Shipping Companies in Pakistan Do?</h2>
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-6 border border-blue-500">
          <p className="text-white leading-relaxed mb-4">
            Shipping companies in Pakistan provide a range of freight and logistics services, including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Plane, title: "Air Freight", desc: "Fast international cargo via air for time-sensitive shipments" },
              { icon: Ship, title: "Sea Freight", desc: "Cost-effective ocean shipping via FCL and LCL" },
              { icon: Truck, title: "Goods Transportation", desc: "Domestic road freight across Pakistan" },
              { icon: ShieldCheck, title: "Customs Clearance", desc: "Import and export documentation and regulatory compliance" },
              { icon: Building, title: "Warehousing & Storage", desc: "Short and long-term goods storage" },
              { icon: Package, title: "Door-to-Door Cargo", desc: "End-to-end pickup and delivery services" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <item.icon className="w-6 h-6 text-white mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white mt-4 leading-relaxed">
            The best shipping companies in Pakistan offer a combination of these services under one roof, providing businesses and individuals with a single point of contact for all their logistics needs.
          </p>
        </div>
      </section>

      {/* Key Factors to Consider */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Key Factors to Consider When Choosing a Shipping Company in Pakistan</h2>
        <p className="text-foreground leading-relaxed mb-6">
          Before selecting a freight or logistics provider, evaluate the following:
        </p>
        <div className="space-y-6">
          {[
            { title: "Service Range", desc: "Does the company offer air freight, sea freight, customs clearance, and domestic transportation — or only one or two services? A full-service provider eliminates the need to coordinate with multiple vendors." },
            { title: "Experience & Track Record", desc: "Companies with 10+ years of experience in Pakistan's logistics sector have established carrier relationships, customs expertise, and problem-solving capability that newer entrants cannot match." },
            { title: "Global Network", desc: "For international shipments, your logistics partner must have verified agents and partner networks in destination countries. Without a strong global network, your shipment may get stuck at the destination end." },
            { title: "Customs Expertise", desc: "Pakistan's customs regulations for both import and export are complex. A shipping company with in-house customs clearance agents saves you time, reduces penalties, and ensures compliance with FBR and Pakistan Customs Authority requirements." },
            { title: "Transparent Pricing", desc: "Hidden charges are a common problem in Pakistan's freight industry. Look for companies that provide written, itemised quotations covering all costs — freight charges, documentation fees, handling, and customs duties." },
            { title: "Insurance Coverage", desc: "Reputable shipping companies offer transit insurance on all shipments. This protects your goods against loss or damage during transportation." },
            { title: "Real-Time Tracking", desc: "Modern logistics providers offer GPS tracking and shipment status updates so you always know where your cargo is." }
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
        <div className="mt-6 p-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-400">
          <p className="text-white font-medium text-lg">
            <strong className="text-yellow-300">💡 Pro Tip:</strong> Use our{" "}
            <Link to="/custom-duty-calculator" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">
              Custom Duty Calculator
            </Link>
            {" "}to estimate import duties before shipping.
          </p>
        </div>
      </section>

      {/* Top International Shipping Companies */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Top International Shipping Companies in Pakistan</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-6 border border-blue-400">
            <div className="flex items-center mb-4">
              <Globe2 className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Best International Movers & Logistics</h3>
            </div>
            <p className="text-blue-50 leading-relaxed">
              One of Pakistan's most trusted names for international relocation and cargo services, Best International Movers & Logistics provides complete door-to-door shipping to over 100 countries from Rawalpindi, Islamabad, Lahore, and Peshawar. Services include air freight, sea freight, customs clearance, vehicle shipping, and professional packing. With 15+ years of experience and a global partner network, they are a leading choice for both households and businesses moving overseas.
            </p>
            <div className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-white">Services:</strong>
                  <p className="text-blue-100">International Moving, Air Freight, Sea Freight, Customs Clearance, Goods Transportation, Storage</p>
                </div>
                <div>
                  <strong className="text-white">Coverage:</strong>
                  <p className="text-blue-100">Rawalpindi, Islamabad, Lahore, Peshawar, Karachi → Worldwide</p>
                </div>
                <div>
                  <strong className="text-white">Contact:</strong>
                  <p className="text-blue-100">0300-9130211</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl p-6 border border-green-400">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">National Logistics Corporation (NLC)</h3>
              </div>
              <p className="text-green-50 leading-relaxed">
                A government-backed logistics provider headquartered in Rawalpindi, NLC specialises in road freight transportation, warehousing, and customs facilitation. It has a large nationwide fleet and is particularly strong in bulk goods transport and government contracts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
              <div className="flex items-center mb-4">
                <Ship className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Pakistan National Shipping Corporation (PNSC)</h3>
              </div>
              <p className="text-purple-50 leading-relaxed">
                PNSC is Pakistan's state-owned shipping line, providing ocean freight services between Pakistani ports and international destinations. It handles bulk cargo, containerised goods, and liquid cargo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-xl p-6 border border-orange-400">
              <div className="flex items-center mb-4">
                <Anchor className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Maersk Pakistan</h3>
              </div>
              <p className="text-orange-50 leading-relaxed">
                The local arm of global shipping giant Maersk, offering sea freight, container shipping, and supply chain solutions. Maersk Pakistan operates through Karachi Port and Port Qasim and is ideal for high-volume commercial importers and exporters.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-6 border border-teal-400">
              <div className="flex items-center mb-4">
                <Plane className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">DHL Pakistan</h3>
              </div>
              <p className="text-teal-50 leading-relaxed">
                DHL provides express international courier, air freight, and e-commerce logistics across Pakistan. It is one of the most widely used services for urgent international document and parcel shipments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-xl p-6 border border-indigo-400">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Pacewell Cargo</h3>
              </div>
              <p className="text-indigo-50 leading-relaxed">
                Headquartered in Islamabad and Sialkot, Pacewell offers air freight, sea freight, and customs clearance services. They are known for their real-time tracking, competitive rates, and personalised solutions for small and medium-sized shipments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl shadow-xl p-6 border border-cyan-400">
              <div className="flex items-center mb-4">
                <Truck className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Pakistan Cargo Services (PCS)</h3>
              </div>
              <p className="text-cyan-50 leading-relaxed">
                Based in Sialkot with eight branch offices across Pakistan, PCS has over 38 years of experience in international freight. They are recognised for transparent pricing, on-time delivery, and a strong global agent network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Shipping */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Domestic Shipping & Goods Transportation in Pakistan</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white leading-relaxed mb-6">
            For businesses and individuals requiring goods transportation within Pakistan, several providers operate nationwide truck and freight networks. Key services include:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              "Road freight via Mazda, Shehzore, Hino, and container trucks",
              "Intercity goods transport between all major cities",
              "Door-to-door delivery for household items, commercial goods, and industrial equipment"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <Truck className="w-6 h-6 text-white" />
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-600/20 backdrop-blur-sm rounded-lg border border-blue-400">
            <p className="text-white font-medium text-lg">
              Our{" "}
              <Link to="/goods-transportation-pakistan" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">
                goods transportation services across Pakistan
              </Link>
              {" "}cover all major cities including Islamabad, Rawalpindi, Lahore, Karachi, Multan, Peshawar, and Faisalabad — with professional packing and on-time delivery guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* International Shipping Routes */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">International Shipping Routes from Pakistan</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white mb-6 font-medium text-lg">Pakistan's top shipping companies serve the following high-demand international routes:</p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-600 rounded-lg">
              <thead>
                <tr className="bg-blue-600">
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Destination</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Preferred Method</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Transit Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">UAE (Dubai, Sharjah, Abu Dhabi)</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 2-4 days / Sea: 12-18 days</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">United Kingdom</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 3-5 days / Sea: 20-28 days</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Canada</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 4-6 days / Sea: 25-35 days</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">USA</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 4-7 days / Sea: 28-40 days</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Saudi Arabia</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 2-4 days / Sea: 10-16 days</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Australia</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 5-8 days / Sea: 25-35 days</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Qatar & Kuwait</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 2-3 days</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Germany & Europe</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air or Sea</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Air: 4-6 days / Sea: 22-30 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-blue-600/20 backdrop-blur-sm rounded-lg border border-blue-400">
            <p className="text-white font-medium text-lg">
              For{" "}
              <Link to="/container-shipping-pakistan" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">
                container shipping from Pakistan
              </Link>
              {" "}to any of these destinations, we provide FCL and LCL options with full documentation, customs clearance, and destination delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Major Ports & Cargo Hubs */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Pakistan's Major Ports & Cargo Hubs</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-6 border border-blue-400">
            <div className="flex items-center mb-4">
              <Ship className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Karachi Port</h3>
            </div>
            <p className="text-blue-50 leading-relaxed">
              Pakistan's primary seaport and the largest cargo gateway in the country. Most international sea freight — both import and export — passes through Karachi Port.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-6 border border-teal-400">
            <div className="flex items-center mb-4">
              <Anchor className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Port Qasim</h3>
            </div>
            <p className="text-teal-50 leading-relaxed">
              Pakistan's second major seaport, located near Karachi. It handles container cargo, bulk goods, and liquid cargo and is increasingly used as an alternative to Karachi Port.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
              <div className="flex items-center mb-4">
                <Plane className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Islamabad International Airport (IIA)</h3>
              </div>
              <p className="text-purple-50 leading-relaxed">
                The main hub for air freight originating from Rawalpindi and Islamabad. Connected to global carriers including Emirates SkyCargo, Turkish Cargo, and Qatar Airways Cargo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-xl p-6 border border-orange-400">
              <div className="flex items-center mb-4">
                <Globe2 className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Lahore Allama Iqbal International Airport</h3>
              </div>
              <p className="text-orange-50 leading-relaxed">
                A key air cargo hub for Punjab-based exporters and importers, with direct connections to Gulf and European destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">How to Choose the Right Shipping Company for Your Needs</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600 rounded-lg">
              <thead>
                <tr className="bg-blue-600">
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Requirement</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Recommended Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Urgent international parcel</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Express air freight (DHL, FedEx)</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Large household move overseas</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">International moving company</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Bulk commercial export</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">FCL container sea freight</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Small international shipment</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">LCL sea freight or air freight</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Domestic road freight</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Goods transportation service</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Import with customs clearance</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Full-service freight forwarder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Shipping Quote Today</h2>
          <p className="text-xl mb-8">
            Whether you need air freight, sea freight, container shipping, or complete international relocation services from Pakistan, Best International Movers & Logistics is ready to assist.
          </p>
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              📞 <span className="text-yellow-300">Call / WhatsApp: 0300-9130211</span>
            </div>
            <div className="text-lg">
              🕐 <span>Available: Monday to Saturday | 8:00 AM – 8:00 PM</span>
            </div>
            <div className="text-lg">
              📍 <span>Offices: Rawalpindi | Islamabad | Lahore | Peshawar</span>
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
          <h2 className="text-2xl font-bold text-white mb-6">Related Shipping Services</h2>
          <p className="text-white mb-8 text-lg">Explore our other professional shipping and logistics services:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/container-shipping-pakistan" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Ship className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Container Shipping Pakistan</h3>
                </div>
                <p className="text-white/90 text-sm">FCL and LCL container services</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/custom-duty-calculator" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <ShieldCheck className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Custom Duty Calculator</h3>
                </div>
                <p className="text-white/90 text-sm">Calculate import duties online</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/goods-transportation-pakistan" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Truck className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Goods Transportation Pakistan</h3>
                </div>
                <p className="text-white/90 text-sm">Domestic freight services</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/international-moving" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Globe2 className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">International Movers Pakistan</h3>
                </div>
                <p className="text-white/90 text-sm">Overseas relocation services</p>
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

export default TopShippingCompaniesInPakistan;
