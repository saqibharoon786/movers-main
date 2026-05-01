import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { Link } from "react-router-dom";
import { Package, Shield, Clock, Users, CheckCircle, Truck, Home, MapPin, Phone, MessageCircle, Star, ArrowRight } from "lucide-react";

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
      "description": "Professional home shifting services in Rawalpindi - Safe, Fast & Affordable packers and movers for stress-free house relocation."
    },
    {
      "@type": "Service",
      "@id": "https://bestintlmovers.com/home-shifting-rawalpindi#service",
      "name": "Home Shifting Services in Rawalpindi",
      "serviceType": "Home Shifting Services",
      "description": "Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation.",
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
          "name": "How long does a home shift in Rawalpindi typically take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 2-bedroom local shift in Rawalpindi is usually completed within 4 to 8 hours, depending on floor level, volume of items, and distance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide shifting services outside Rawalpindi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer intercity shifting services to Islamabad, Lahore, Karachi, Multan, Peshawar, and all major cities across Pakistan."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to arrange packing materials myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Our team brings all packing materials — boxes, bubble wrap, stretch film, packing tape — at no additional cost when you book a full packing service."
          }
        },
        {
          "@type": "Question",
          "name": "Will my fragile items like crockery and electronics be safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Fragile items receive special double-layer protective packing. Our damage rate is extremely low and all items are covered by transit insurance."
          }
        },
        {
          "@type": "Question",
          "name": "Is same-day shifting available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, subject to availability. Contact us as early as possible to confirm a same-day booking."
          }
        },
        {
          "@type": "Question",
          "name": "How far in advance should I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend booking at least 2 to 3 days in advance, especially for weekend and month-end moves which tend to be busier."
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
    q: "How long does a home shift in Rawalpindi typically take?",
    a: "A 2-bedroom local shift in Rawalpindi is usually completed within 4 to 8 hours, depending on floor level, volume of items, and distance."
  },
  {
    q: "Do you provide shifting services outside Rawalpindi?",
    a: "Yes. We offer intercity shifting services to Islamabad, Lahore, Karachi, Multan, Peshawar, and all major cities across Pakistan."
  },
  {
    q: "Do I need to arrange packing materials myself?",
    a: "No. Our team brings all packing materials — boxes, bubble wrap, stretch film, packing tape — at no additional cost when you book a full packing service."
  },
  {
    q: "Will my fragile items like crockery and electronics be safe?",
    a: "Absolutely. Fragile items receive special double-layer protective packing. Our damage rate is extremely low and all items are covered by transit insurance."
  },
  {
    q: "Is same-day shifting available?",
    a: "Yes, subject to availability. Contact us as early as possible to confirm a same-day booking."
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2 to 3 days in advance, especially for weekend and month-end moves which tend to be busier."
  }
];

const HomeShiftingRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      title="Home Shifting Rawalpindi – Safe & Affordable Packers & Movers"
      description="Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation. Get a FREE quote today – 0300-9130211"
      keywords="home shifting rawalpindi, packers and movers rawalpindi, house shifting rawalpindi, home shifting services in rawalpindi, movers and packers rawalpindi, home shifting company rawalpindi"
      urlPath="/home-shifting-rawalpindi"
      h1="Home Shifting Rawalpindi – Professional Packers & Movers | Fast, Safe & Affordable"
      heroSubtext="Professional home shifting services in Rawalpindi. Expert packers & movers for safe, fast & stress-free house relocation. Get a FREE quote today – 0300-9130211"
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Home Shifting Rawalpindi" }]}
      heroImageUrl="https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&q=80&w=1600"
      heroImageAlt="Professional home shifting team in Rawalpindi packing furniture"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="Frequently Asked Questions – Home Shifting Rawalpindi"
    >
      {/* Hero Image */}
      <div className="my-8">
        <img src="/images/homeshifting.png" alt="Home Shifting Services in Rawalpindi" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <p>
          Planning to shift your home in Rawalpindi? Moving to a new house is one of the most demanding tasks a family can face — packing furniture, protecting fragile items, arranging transport, and setting everything up in a new place takes time, effort, and careful planning. Doing it all alone often leads to damaged belongings, wasted time, and unnecessary stress.
        </p>
        <p>
          Our <strong>home shifting services in Rawalpindi</strong> are designed to take that burden off your shoulders. From your first call to the final item placed in your new home — our professional team handles everything safely, efficiently, and at a price that fits your budget.
        </p>
      </div>

      {/* Why Home Shifting is Challenging */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Why Is Home Shifting in Rawalpindi Challenging?</h2>
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-6 border border-blue-500">
          <p className="text-white leading-relaxed">
            Rawalpindi is a city of diverse neighbourhoods — each with its own road layout, traffic patterns, and access conditions. Areas like Saddar, Satellite Town, Bahria Town, Askari, DHA, Westridge, and Chaklala all present unique challenges for moving teams. Narrow streets, busy commercial zones, and restricted vehicle access in certain sectors make home shifting far more complex than it appears.
          </p>
          <p className="text-white mt-4 leading-relaxed">
            That is exactly why hiring an <strong className="text-yellow-300">experienced home shifting company in Rawalpindi</strong> makes a real difference — a team that knows the city, uses the right vehicles, and has the skills to handle every type of move without damage or delay.
          </p>
        </div>
      </section>

      {/* Related Services - Middle of Content */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 border border-purple-500">
          <h2 className="text-2xl font-bold text-white mb-6">Related Moving Services</h2>
          <p className="text-white mb-8 text-lg">Explore our other professional moving services for a complete relocation experience:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/packers-and-movers-rawalpindi" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold text-white">Packers & Movers</h3>
                </div>
                <p className="text-white/90">Complete packing and moving solutions for homes and offices in Rawalpindi.</p>
                <div className="mt-4 flex items-center text-yellow-300 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/home-shifting-islamabad" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold text-white">Home Shifting Islamabad</h3>
                </div>
                <p className="text-white/90">Professional home relocation services across all sectors of Islamabad.</p>
                <div className="mt-4 flex items-center text-yellow-300 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/international-movers-pakistan" className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold text-white">International Moving</h3>
                </div>
                <p className="text-white/90">Relocate internationally from Pakistan to 100+ countries worldwide.</p>
                <div className="mt-4 flex items-center text-yellow-300 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Cards */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Home Shifting Services in Rawalpindi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-xl p-6 border border-blue-300 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Professional Packing Service</h3>
            </div>
            <p className="text-blue-50">
              Our trained packers carefully pack every item in your home — sofas, beds, wardrobes, refrigerators, televisions, crockery, and fragile décor. We use high-quality bubble wrap, stretch film, packing paper, and reinforced cardboard boxes. Fragile and sensitive items receive extra layers of protective packing to ensure they arrive in perfect condition.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-xl p-6 border border-indigo-300 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Furniture Dismantling & Reassembly</h3>
            </div>
            <p className="text-indigo-50">
              Large furniture pieces — double beds, wardrobes, dining tables, and bunk beds — are professionally dismantled by our team before the move and fully reassembled at your new home. You do not need any tools or extra help.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-xl p-6 border border-purple-300 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Careful Loading & Unloading</h3>
            </div>
            <p className="text-purple-50">
              Every packed item is loaded into our vehicles with care. Our team stacks items strategically to prevent shifting or damage during transit. At your new home, unloading is carried out room by room in an organised, step-by-step manner.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-xl p-6 border border-teal-300 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Safe Transportation</h3>
            </div>
            <p className="text-teal-50">
              We operate a fleet of well-maintained vehicles — from mini trucks to large cargo vans — suited for every size of move. Whether you are shifting locally within Rawalpindi or relocating to another city such as Islamabad, Lahore, or Karachi, our experienced drivers ensure your belongings reach safely and on time.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-xl p-6 border border-green-300 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Unpacking & Room Setup</h3>
            </div>
            <p className="text-green-50">
              Once your belongings arrive at the new home, our team unpacks and arranges everything according to your instructions. Items are labelled by room during packing — kitchen, bedroom, living room — so unpacking is fast and organised.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-xl p-6 border border-orange-300 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Secure Storage (If Needed)</h3>
            </div>
            <p className="text-orange-50">
              If there is a gap between your move-out and move-in dates, our secure short-term and long-term storage facility is available to keep your belongings safe until you are ready.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Areas We Serve in Rawalpindi</h2>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 border border-blue-400">
          <p className="text-white mb-6 font-medium text-lg">Our home shifting team operates across all major areas of Rawalpindi, including:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Bahria Town Rawalpindi (Phase 1 to Phase 8)",
              "DHA Rawalpindi",
              "Askari Housing (Askari 1, 2, 3, 4, 11, 14)",
              "Satellite Town",
              "Saddar Rawalpindi",
              "Westridge",
              "Chaklala",
              "Morgah Town",
              "Gulraiz Housing Society",
              "Rawalpindi Cantt",
              "Pothohar Town",
              "Adyala Road Area",
              "Rawat & Surrounding Areas"
            ].map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
            <p className="text-white font-medium text-lg">
              We also specialise in <strong className="text-yellow-300">Rawalpindi to Islamabad</strong> and <strong className="text-yellow-300">Islamabad to Rawalpindi</strong> shifting — a route our team handles daily with full efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Home Shifting Charges in Rawalpindi – What to Expect</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
          <p className="text-white mb-6">
            One of the first questions most families ask is how much home shifting costs. At Best International Movers, our pricing is fully transparent — no hidden charges, no last-minute surprises.
          </p>
          <p className="text-white mb-6 font-medium text-lg">The cost of your move depends on several factors:</p>
          
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
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Local Rawalpindi or intercity</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Volume of items</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Heavy furniture, appliances, number of rooms</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Floor level</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Ground floor or upper floor (lift or no lift)</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white">Packing type</td>
                  <td className="border border-gray-600 px-4 py-3 text-gray-200">Full packing service or transport only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 border border-blue-400">
            <h3 className="text-xl font-semibold text-white mb-4">Approximate Price Range:</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">1 Bedroom flat (local Rawalpindi)</span>
                <span className="text-yellow-300 font-bold">Rs. 8,000 – 15,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">2 Bedroom house (local Rawalpindi)</span>
                <span className="text-yellow-300 font-bold">Rs. 15,000 – 25,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">3 Bedroom house (local Rawalpindi)</span>
                <span className="text-yellow-300 font-bold">Rs. 25,000 – 45,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <span className="text-white font-medium">Rawalpindi to Islamabad shift</span>
                <span className="text-yellow-300 font-bold">Rs. 12,000 – 30,000</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-400">
              <p className="text-white font-medium text-lg">
                <strong className="text-yellow-300">Get a FREE Quote:</strong> Call or WhatsApp us with your current address, new address, and number of rooms — we will provide an exact quote within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us for Home Shifting in Rawalpindi?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-6 border border-blue-400">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Trained & Verified Staff</h3>
            </div>
            <p className="text-blue-100">
              Every member of our moving team is background-verified and professionally trained. You can trust that the people handling your belongings inside your home are reliable and responsible.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl p-6 border border-green-400">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">No Hidden Charges</h3>
            </div>
            <p className="text-green-100">
              The quote you receive is the amount you pay. We maintain full pricing transparency from the very first call.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-xl p-6 border border-purple-400">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Punctual & Reliable</h3>
            </div>
            <p className="text-purple-100">
              We respect your time. Our team arrives on schedule and completes your move within the agreed timeframe — no delays, no excuses.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-xl p-6 border border-orange-400">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Insurance Coverage</h3>
            </div>
            <p className="text-orange-100">
              All belongings are covered by transit insurance during the move. In the unlikely event of any damage, you are fully protected.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl shadow-xl p-6 border border-cyan-400">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Local Rawalpindi Expertise</h3>
            </div>
            <p className="text-cyan-100">
              Our team knows every area, road, and housing society in Rawalpindi. This local knowledge directly translates to faster, smoother, and safer shifts for our clients.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-6 border border-teal-400">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Complete End-to-End Service</h3>
            </div>
            <p className="text-teal-100">
              From the first pack to the final placement — one team, one call. No need to coordinate multiple vendors or worry about any stage of the move.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Home Shifting Process – Step by Step</h2>
        <div className="space-y-4">
          {[
            { step: "Step 1", title: "Free Survey & Quote", desc: "Contact us with your shifting details. Our team will assess your requirements and provide a clear, itemised quote." },
            { step: "Step 2", title: "Packing", desc: "Our professional packing team arrives on the agreed date and systematically packs every item in your home using quality materials." },
            { step: "Step 3", title: "Loading", desc: "Packed items are carefully loaded into our vehicle. Heavy furniture goes first, fragile items are secured separately." },
            { step: "Step 4", title: "Transportation", desc: "Your belongings are transported safely to your new address. You can track progress throughout the journey." },
            { step: "Step 5", title: "Unloading & Placement", desc: "At your new home, every item is unloaded and placed in the correct room as per your instructions." },
            { step: "Step 6", title: "Final Check", desc: "Once the move is complete, our team conducts a final walkthrough to confirm everything has arrived safely and is set up to your satisfaction." }
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
        <h2 className="text-3xl font-bold text-foreground mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl shadow-2xl p-6 border border-blue-500 hover:border-blue-400 transition-all">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-blue-100 italic mb-4 leading-relaxed">
              "We moved from Bahria Town to Askari and the team finished the entire job in under 4 hours. Not a single item was damaged. Excellent service!"
            </p>
            <p className="text-white font-semibold text-lg">— Ali Hassan, Rawalpindi</p>
          </div>

          <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl shadow-2xl p-6 border border-purple-500 hover:border-purple-400 transition-all">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-purple-100 italic mb-4 leading-relaxed">
              "I was hesitant at first but this team made the whole process so easy. I wish I had hired professionals from the start instead of trying to do it myself."
            </p>
            <p className="text-white font-semibold text-lg">— Fatima Malik, Satellite Town</p>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl shadow-2xl p-6 border border-green-500 hover:border-green-400 transition-all">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-green-100 italic mb-4 leading-relaxed">
              "The price they quoted was exactly what I paid — no extras, no surprises. Very professional and trustworthy team. Highly recommended."
            </p>
            <p className="text-white font-semibold text-lg">— Usman Qureshi, DHA Rawalpindi</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Quote – Call Us Today</h2>
          <p className="text-xl mb-8">
            Whether you are moving a single-bedroom flat or a large family home anywhere in Rawalpindi, our team is ready to make your shift smooth, safe, and stress-free.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="text-xl font-semibold">Call / WhatsApp: 0300-9130211</span>
            </div>
            <div className="text-xl">|</div>
            <div className="text-lg">
              Available: Monday to Saturday | 8:00 AM – 8:00 PM
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              GET FREE QUOTE
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:0300-9130211" 
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WHATSAPP US NOW
            </a>
          </div>
          
          <p className="mt-6 text-lg">
            📍 Serving All Areas of Rawalpindi & Islamabad
          </p>
        </div>
      </section>

    </SeoLandingPageLayout>
  );
};

export default HomeShiftingRawalpindi;
