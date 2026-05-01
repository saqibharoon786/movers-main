import React from 'react';
import { Link } from 'react-router-dom';
import SeoLandingPageLayout from '../components/marketing/SeoLandingPageLayout';
import { Calculator, AlertTriangle, Phone, MessageCircle, ArrowRight, CheckCircle, Info, Package, Truck, Shield, FileText, Users, Globe, DollarSign, Home, Anchor, Plane, Building } from 'lucide-react';

const CustomDutyCalculator = () => {
  // Schema markup for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bestintlmovers.com/custom-duty-calculator",
        "name": "Best International Movers & Logistics - Custom Duty Calculator",
        "description": "Calculate custom duty & import taxes in Pakistan easily. Complete guide to FBR customs duty rates, HS codes, and import charges.",
        "url": "https://bestintlmovers.com/custom-duty-calculator",
        "telephone": "+92-300-9130211",
        "email": "info@bestintlmovers.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rawalpindi",
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
        "serviceType": "Custom Duty Calculator Services"
      },
      {
        "@type": "Service",
        "@id": "https://bestintlmovers.com/custom-duty-calculator#service",
        "name": "Custom Duty Calculator Pakistan",
        "description": "Complete guide to customs duty calculation, import taxes, and clearance services in Pakistan.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://bestintlmovers.com/custom-duty-calculator"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Pakistan and international import destinations"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/custom-duty-calculator#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I calculate import duty in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Apply the applicable CD%, ACD%, RD%, ST (18%), and WHT (5.5% for NTN holders) on the CIF value of your goods. The total of all these charges is your import cost. Our team can calculate the exact amount for your specific shipment."
            }
          },
          {
            "@type": "Question",
            "name": "What is CIF value in Pakistan customs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CIF stands for Cost + Insurance + Freight. It is the declared value of your goods including their purchase price, insurance cost, and freight charges to the Pakistani port. Customs duty is calculated on this total CIF value."
            }
          },
          {
            "@type": "Question",
            "name": "Can I import used household goods duty-free to Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Returning overseas Pakistanis can import used household goods at concessional rates under specific conditions. Fresh imports of used goods are subject to standard duty rates."
            }
          },
          {
            "@type": "Question",
            "name": "How much custom duty is applicable on a mobile phone in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mobile phone duty in Pakistan ranges from Rs. 1,000 to Rs. 44,000 per device depending on the value. Phones must also be registered with PTA through the DIRBS system."
            }
          },
          {
            "@type": "Question",
            "name": "How long does customs clearance take in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With complete and correct documentation, customs clearance at Karachi Port typically takes 2 to 5 working days. Air freight clearance at Islamabad Airport is usually completed within 1 to 3 working days."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bestintlmovers.com/custom-duty-calculator#breadcrumb",
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
            "name": "Custom Duty Calculator",
            "item": "https://bestintlmovers.com/custom-duty-calculator"
          }
        ]
      }
    ]
  };

  // FAQ data
  const faqs = [
    {
      q: "How do I calculate import duty in Pakistan?",
      a: "Apply the applicable CD%, ACD%, RD%, ST (18%), and WHT (5.5% for NTN holders) on the CIF value of your goods. The total of all these charges is your import cost. Our team can calculate the exact amount for your specific shipment."
    },
    {
      q: "What is CIF value in Pakistan customs?",
      a: "CIF stands for Cost + Insurance + Freight. It is the declared value of your goods including their purchase price, insurance cost, and freight charges to the Pakistani port. Customs duty is calculated on this total CIF value."
    },
    {
      q: "Can I import used household goods duty-free to Pakistan?",
      a: "Returning overseas Pakistanis can import used household goods at concessional rates under specific conditions. Fresh imports of used goods are subject to standard duty rates."
    },
    {
      q: "How much custom duty is applicable on a mobile phone in Pakistan?",
      a: "Mobile phone duty in Pakistan ranges from Rs. 1,000 to Rs. 44,000 per device depending on the value. Phones must also be registered with PTA through the DIRBS system."
    },
    {
      q: "How long does customs clearance take in Pakistan?",
      a: "With complete and correct documentation, customs clearance at Karachi Port typically takes 2 to 5 working days. Air freight clearance at Islamabad Airport is usually completed within 1 to 3 working days."
    },
    {
      q: "Do I need a customs agent to clear my shipment in Pakistan?",
      a: "Technically no, but practically yes. Pakistan's customs process is complex and time-sensitive. A licensed customs agent prevents costly errors and delays."
    },
    {
      q: "What is the difference between customs duty and sales tax on imports?",
      a: "Customs duty is the import tariff applied by Pakistan Customs on the CIF value. Sales tax is an additional 18% levy applied on the CIF value plus customs duty — it is collected at import stage on behalf of FBR."
    }
  ];

  return (
    <SeoLandingPageLayout
      visualSkin="default"
      title="Custom Duty Calculator Pakistan – Import Tax & Duty Guide"
      description="Calculate custom duty & import taxes in Pakistan easily. Complete guide to FBR customs duty rates, HS codes, and import charges. Free calculator – 0300-9130211"
      keywords="custom duty calculator pakistan, pakistan import duty calculator, customs duty pakistan, import tax calculator pakistan, fbr custom duty, duty calculator pakistan"
      urlPath="/custom-duty-calculator"
      h1="Custom Duty Calculator Pakistan – Import Duty & Tax Guide 2025"
      heroSubtext="Calculate custom duty & import taxes in Pakistan easily. Complete guide to FBR customs duty rates, HS codes, and import charges. Free calculator – 0300-9130211"
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Custom Duty Calculator" }]}
      heroImageUrl="/images/shipping.png"
      heroImageAlt="Custom Duty Calculator Pakistan - Import Tax & Duty Guide"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="Frequently Asked Questions – Custom Duty Calculator Pakistan"
    >

      {/* Hero Image */}
      <div className="my-8">
        <img src="/images/shipping.png" alt="Custom Duty Calculator Pakistan" className="w-full rounded-xl shadow-2xl" />
      </div>

      {/* Introduction */}
      <div className="my-8">
        <p className="text-foreground leading-relaxed mb-4">
          Importing goods into Pakistan involves multiple layers of duties and taxes that significantly affect the total landed cost of any shipment. Whether you are importing personal belongings, commercial goods, a vehicle, or household items from abroad, understanding the applicable customs duty in Pakistan is essential before your shipment arrives.
        </p>
        <p className="text-foreground leading-relaxed">
          This page provides a complete guide to how Pakistan's custom duty system works, what charges apply to different categories of goods, and how to estimate your total import costs — so there are no surprises when your shipment reaches Karachi Port or Islamabad Airport.
        </p>
      </div>

      {/* How Custom Duty Works */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">How Custom Duty Works in Pakistan</h2>
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 border border-red-500">
          <p className="text-white leading-relaxed mb-4">
            Pakistan's customs duty framework is administered by the <strong className="text-yellow-300">Federal Board of Revenue (FBR)</strong> under the Pakistan Customs Act. Every imported item is classified under a specific <strong className="text-yellow-300">HS Code (Harmonised System Code)</strong> — an internationally standardised product classification system — and duty rates are applied based on this classification.
          </p>
          <p className="text-white leading-relaxed">
            When goods arrive at a Pakistani port or airport, the following charges typically apply:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[
            { icon: DollarSign, title: "Customs Duty (CD)", desc: "Base import tariff on CIF value. Rates vary from 0% to 100%." },
            { icon: Calculator, title: "Additional Customs Duty (ACD)", desc: "Additional levy on top of customs duty. Rates: 1%, 2%, or 7%." },
            { icon: AlertTriangle, title: "Regulatory Duty (RD)", desc: "Applied to certain categories. Can be up to 100% for luxury items." },
            { icon: Package, title: "Sales Tax on Imports (ST)", desc: "Standard rate 18% of CIF value plus customs duty." },
            { icon: FileText, title: "Income Tax on Imports (WHT)", desc: "5.5% for NTN holders, 8% for unregistered importers." },
            { icon: Shield, title: "Additional Sales Tax", desc: "Additional 3% for non-filers or specific categories." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl shadow-xl p-6 border border-yellow-400">
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-yellow-50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculation Formula */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Custom Duty Calculation Formula – Pakistan</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white leading-relaxed mb-6">
            The basic formula for calculating total import cost in Pakistan is:
          </p>
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-6 border border-yellow-400 mb-6">
            <p className="text-white font-bold text-xl text-center">
              Total Import Cost = CIF Value + Customs Duty + Additional Customs Duty + Regulatory Duty + Sales Tax + Withholding Tax
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4">Example Calculation:</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600 rounded-lg">
              <thead>
                <tr className="bg-red-600">
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Item</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">CIF Value (PKR)</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">CD (20%)</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">ST (18%)</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">WHT (5.5%)</th>
                  <th className="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Electronics</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 100,000</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 20,000</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 21,600</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 7,590</td>
                  <td className="border border-gray-600 px-4 py-3 font-semibold text-yellow-300">~Rs. 149,190</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Clothing</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 50,000</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 10,000</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 10,800</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 3,795</td>
                  <td className="border border-gray-600 px-4 py-3 font-semibold text-yellow-300">~Rs. 74,595</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Furniture</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 200,000</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 40,000</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 43,200</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Rs. 15,180</td>
                  <td className="border border-gray-600 px-4 py-3 font-semibold text-yellow-300">~Rs. 298,380</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            *Note: These are illustrative figures. Actual rates depend on the specific HS code and prevailing FBR notifications.
          </p>
        </div>
      </section>

      {/* Duty Rates by Category */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Custom Duty Rates by Product Category – Pakistan 2025</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-xl p-6 border border-red-400">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Household & Personal Goods</h3>
            </div>
            <p className="text-red-50 leading-relaxed">
              Individuals relocating to Pakistan from abroad are entitled to duty relief on used personal and household items under <strong className="text-yellow-300">Baggage Rules</strong>. New items are subject to full duty rates.
            </p>
            <div className="mt-4 space-y-2 text-red-100">
              <div>• Used household furniture: 35–50% CD</div>
              <div>• Used personal electronics (laptops, phones): 0–10% CD (subject to FBR limits)</div>
              <div>• New appliances: 20–35% CD + full taxes</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl shadow-xl p-6 border border-yellow-400">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Vehicles</h3>
            </div>
            <p className="text-yellow-50 leading-relaxed">
              Vehicle import duty in Pakistan is among the highest in the region:
            </p>
            <div className="mt-4 space-y-2 text-yellow-100">
              <div>• Cars up to 1000cc: 50–75% CD + RD + taxes</div>
              <div>• Cars 1001cc to 1800cc: 75–100% CD + RD + taxes</div>
              <div>• Cars above 1800cc: 100%+ CD + full taxes</div>
              <div>• Electric vehicles: Reduced rates under Government of Pakistan EV policy</div>
            </div>
            <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <p className="text-white">
                For accurate vehicle import calculations, contact our team or use our{" "}
                <Link to="/services/international-moving" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">
                  international cargo services
                </Link>
                {" "}for complete import assistance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-xl p-6 border border-red-400">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Electronics & Mobile Phones</h3>
              </div>
              <div className="space-y-2 text-red-100">
                <div>• Mobile phones (registered under PTA): Rs. 1,000 – Rs. 44,000 fixed duty</div>
                <div>• Laptops & tablets: 0% CD under FBR exemption (personal use, one unit)</div>
                <div>• Commercial electronics: 10–25% CD + full taxes</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl shadow-xl p-6 border border-yellow-400">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Clothing & Textiles</h3>
              </div>
              <div className="space-y-2 text-yellow-100">
                <div>• 20–35% CD on most clothing categories</div>
                <div>• High rates apply to items competing with domestic textile industry</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-xl p-6 border border-red-400">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Food Items</h3>
              </div>
              <div className="space-y-2 text-red-100">
                <div>• Fresh produce: 10–20% CD</div>
                <div>• Packaged foods: 15–35% CD</div>
                <div>• Baby formula and essential foods: Reduced or zero rates</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl shadow-xl p-6 border border-yellow-400">
              <div className="flex items-center mb-4">
                <Info className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">How to Find HS Codes</h3>
              </div>
              <div className="space-y-2 text-yellow-100">
                <div>• Visit FBR Pakistan Customs Tariff portal</div>
                <div>• Search by product description or category</div>
                <div>• Note the 8-digit HS Code</div>
                <div>• Check applicable rates in current tariff schedule</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duty-Free Allowances */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Duty-Free Allowances for Travellers to Pakistan</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white leading-relaxed mb-6">
            Pakistan allows certain duty-free allowances for travellers arriving from abroad:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Personal effects", desc: "Worn clothing, personal items: Fully exempt" },
              { title: "Mobile phone", desc: "One per person: Exempt if registered on DIRBS" },
              { title: "Gifts", desc: "Up to PKR 10,000: Exempt" },
              { title: "Foreign currency", desc: "Up to USD 10,000 without declaration" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <CheckCircle className="w-6 h-6 text-yellow-300 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-red-600/20 backdrop-blur-sm rounded-lg border border-red-400">
            <p className="text-white font-medium">
              Items exceeding these thresholds are subject to full customs duty at the applicable rate.
            </p>
          </div>
        </div>
      </section>

      {/* Overseas Pakistanis */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Customs Duty for Overseas Pakistanis (Returning Nationals)</h2>
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-6 border border-yellow-500">
          <p className="text-white leading-relaxed mb-4">
            Overseas Pakistanis (OPs) returning to settle in Pakistan are entitled to <strong className="text-red-300">concessional duty rates</strong> on:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              "Used household goods and personal effects",
              "One vehicle (subject to specific conditions)",
              "Electronics and appliances within specified limits"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white leading-relaxed">
            The applicable concession depends on the duration of stay abroad and valid documentation. Our team can assist with the complete OP import process — from overseas packing to customs clearance in Pakistan. Learn more about our{" "}
            <Link to="/services/international-moving" className="text-red-300 hover:text-red-200 underline font-semibold">
              international moving services from Pakistan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How We Help */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">How We Help with Customs Clearance in Pakistan</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white leading-relaxed mb-6">
            Navigating Pakistan's customs process without professional help often results in delays, additional storage charges, and sometimes penalties for incorrect declarations. Best International Movers & Logistics provides complete customs clearance services at:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Globe, title: "Karachi Port", desc: "All sea freight imports" },
              { icon: Anchor, title: "Port Qasim", desc: "Container shipments" },
              { icon: Plane, title: "Islamabad Airport", desc: "Air freight clearance" },
              { icon: Building, title: "Lahore Airport", desc: "Punjab-based imports" },
              { icon: Truck, title: "Torkham & Wagah", desc: "Land freight clearance" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <item.icon className="w-6 h-6 text-yellow-300 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-600/20 backdrop-blur-sm rounded-lg border border-blue-400">
            <p className="text-white font-medium">
              Our licensed customs agents handle all documentation, duty payment coordination, and physical examination facilitation — ensuring your shipment clears quickly and at the correct duty rate.
            </p>
          </div>
          <div className="mt-4 p-4 bg-yellow-600/20 backdrop-blur-sm rounded-lg border border-yellow-400">
            <p className="text-white font-medium">
              For{" "}
              <Link to="/container-shipping-pakistan" className="text-red-300 hover:text-red-200 underline font-semibold">
                container shipping to Pakistan
              </Link>
              {" "}or any air freight import, contact our team for a complete customs clearance quote.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Common Customs Issues and How to Avoid Them</h2>
        <div className="space-y-4">
          {[
            {
              title: "Under-Declaration of Value",
              desc: "Declaring a lower value to reduce duty is illegal under Pakistan Customs Act and can result in confiscation, heavy fines, and blacklisting.",
              solution: "Always declare the correct CIF value."
            },
            {
              title: "Incorrect HS Code Classification",
              desc: "Using the wrong HS code — even unintentionally — can delay clearance.",
              solution: "Always verify the correct code with a licensed customs agent."
            },
            {
              title: "Missing Documentation",
              desc: "Ensure your commercial invoice, packing list, bill of lading, and certificate of origin are complete and accurate.",
              solution: "Prepare all documents before shipment departs."
            },
            {
              title: "Restricted & Prohibited Items",
              desc: "Certain items cannot be imported into Pakistan without special permits.",
              solution: "Check the Pakistan Customs restricted goods list before shipping."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 border border-red-400">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-red-50 mb-3">{item.desc}</p>
                  <div className="p-3 bg-yellow-600/20 backdrop-blur-sm rounded-lg border border-yellow-400">
                    <p className="text-yellow-300 font-medium">💡 Solution: {item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Help with Your Import – Contact Us Today</h2>
          <p className="text-xl mb-8">
            Whether you need customs duty calculation, import documentation, or complete door-to-door cargo services, our team is ready to assist.
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
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
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

      {/* Related Pages */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl p-8 border border-red-500">
          <h2 className="text-2xl font-bold text-white mb-6">Related Services</h2>
          <p className="text-white mb-8 text-lg">Explore our other services for complete import and logistics solutions:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/top-shipping-companies-in-pakistan" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Globe className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Top Shipping Companies Pakistan</h3>
                </div>
                <p className="text-white/90 text-sm">Complete guide to shipping companies</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/container-shipping-pakistan" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Package className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Container Shipping Pakistan</h3>
                </div>
                <p className="text-white/90 text-sm">FCL and LCL container services</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/international-moving" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Truck className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">International Moving</h3>
                </div>
                <p className="text-white/90 text-sm">Overseas relocation services</p>
                <div className="mt-2 flex items-center text-yellow-300 font-semibold text-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/goods-transportation-pakistan" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-2">
                  <Truck className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Goods Transportation</h3>
                </div>
                <p className="text-white/90 text-sm">Domestic freight services</p>
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

export default CustomDutyCalculator;
