import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Globe, Package, ShieldCheck, Award, Clock, Users, MapPin, Phone, Calculator, CheckCircle2, FileText, AlertCircle, Car } from "lucide-react";

const VehicleImportGuidePakistan = () => {
  // Build comprehensive schema for vehicle import guide
  const buildVehicleImportSchema = () => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://bestintlmovers.com/vehicle-import-guide-pakistan#article",
        "headline": "Vehicle Import Guide Pakistan 2025 – Complete Car Import Rules, Duty & Process",
        "description": "Complete guide to importing a vehicle in Pakistan 2025. FBR duty rates, import schemes, eligibility, documents & step-by-step process. Expert help – 0300-9130211",
        "url": "https://bestintlmovers.com/vehicle-import-guide-pakistan",
        "datePublished": "2025-01-01",
        "dateModified": "2025-01-01",
        "author": {
          "@type": "Organization",
          "name": "Best International Movers & Logistics",
          "url": "https://bestintlmovers.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Best International Movers & Logistics",
          "url": "https://bestintlmovers.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bestintlmovers.com/vehicle-import-guide-pakistan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the maximum age of a car that can be imported to Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under all three personal import schemes (Transfer of Residence, Personal Baggage, and Gift), the maximum age for cars is 3 years from the date of manufacture. Other vehicles such as trucks and buses can be imported up to 5 years old. New vehicles have no age restriction under commercial import."
            }
          },
          {
            "@type": "Question",
            "name": "Can I import a car from Japan to Pakistan if I am an overseas Pakistani?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, subject to eligibility under one of the three personal schemes. The vehicle must not be older than 3 years and you must meet scheme-specific residency or relationship requirements. Duty is calculated on CIF value with applicable depreciation and any hybrid concessions."
            }
          },
          {
            "@type": "Question",
            "name": "How much duty will I pay on a hybrid car import to Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hybrid Electric Vehicles (HEVs) up to 1800cc receive a 50% exemption from applicable duty and taxes. HEVs between 1800cc and 2500cc receive a 25% exemption. The base duty is first calculated for a standard petrol vehicle of the same engine capacity, then the concession is applied."
            }
          },
          {
            "@type": "Question",
            "name": "Can I sell an imported vehicle after bringing it to Pakistan under a personal scheme?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vehicles imported under personal schemes are subject to a lock-in period before they can be sold or transferred. Selling before the lock-in period attracts penalty duty equivalent to the concession received. Confirm the applicable lock-in period with a customs agent for your specific scheme."
            }
          },
          {
            "@type": "Question",
            "name": "How long does vehicle import clearance take at Karachi Port?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With complete and correct documentation, clearance typically takes 5 to 10 working days after vessel arrival. Incomplete documents, customs examination, or duty disputes can extend this to 3 to 6 weeks — during which storage charges accumulate daily."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to be present in Karachi for customs clearance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. A licensed customs agent can manage the entire clearance process on your behalf with a Power of Attorney. You do not need to travel to Karachi — our team handles everything remotely and delivers your vehicle to your city."
            }
          }
        ]
      }
    ]
  });

  const importSchemes = [
    {
      name: "Transfer of Residence (ToR)",
      description: "Available to Pakistani nationals who are permanently returning to Pakistan after living abroad.",
      eligibility: [
        "Must have lived outside Pakistan for a minimum of 700 days in the last three years",
        "Vehicle must be in the importer's name and ownership for a minimum period",
        "Vehicle must not be older than 3 years for cars; 5 years for other vehicles",
        "Motorcycles and scooters can only be imported under this scheme — not under Personal Baggage or Gift"
      ],
      benefit: "Duty and taxes are paid on a concessional basis compared to commercial import rates."
    },
    {
      name: "Personal Baggage",
      description: "Available to Pakistani nationals visiting Pakistan from abroad.",
      eligibility: [
        "Must have been residing abroad for a minimum of 180 days in the last 7 months",
        "Vehicle must not be older than 3 years",
        "Must be in the importer's personal ownership"
      ]
    },
    {
      name: "Gift Scheme",
      description: "Allows a Pakistani national abroad to gift a vehicle to a close family member residing in Pakistan.",
      eligibility: [
        "Eligible recipients: Parents, Siblings, Spouse",
        "Vehicle must not be older than 3 years",
        "Duty and taxes are paid by recipient in Pakistan using foreign remittance",
        "Only one gift vehicle per eligible recipient family member"
      ]
    }
  ];

  const dutyRates = [
    { capacity: "Up to 800cc", duty: "Lower slab — fixed duty under SRO for Asian-made vehicles" },
    { capacity: "801cc – 1000cc", duty: "USD 4,800–8,000 fixed" },
    { capacity: "1001cc – 1300cc", duty: "USD 8,000–13,200 fixed (Asian-made SRO)" },
    { capacity: "1301cc – 1500cc", duty: "USD 13,200–20,000+" },
    { capacity: "1501cc – 1800cc", duty: "USD 20,000–30,000+" },
    { capacity: "Above 1800cc", duty: "Highest slab — ad valorem on CIF + high RD" }
  ];

  const importSteps = [
    {
      step: "Step 1 — Determine Eligibility & Choose Right Scheme",
      description: "Before purchasing a vehicle abroad, confirm which import scheme applies to your situation. Commercial import, Transfer of Residence, Personal Baggage, and Gift each have different eligibility conditions, vehicle age limits, and duty structures."
    },
    {
      step: "Step 2 — Purchase & Arrange Shipping",
      description: "Once eligibility is confirmed, purchase the vehicle in the origin country. Arrange international shipping — either RORO (Roll-on Roll-off) or container shipping (enclosed, more secure, preferred for high-value vehicles)."
    },
    {
      step: "Step 3 — Obtain Pre-Arrival Documentation",
      description: "Before the vessel arrives at Karachi, prepare all required documents — Bill of Lading, vehicle title, passport, and any scheme-specific documentation."
    },
    {
      step: "Step 4 — Port Arrival & Customs Clearance at Karachi",
      description: "When the vessel arrives at Karachi Port or Port Qasim, your customs agent files the Import General Manifest (IGM) and initiates the clearance process."
    },
    {
      step: "Step 5 — Physical Examination",
      description: "Pakistan Customs physically inspects the imported vehicle — verifying the chassis number, engine number, and vehicle description against documentation."
    },
    {
      step: "Step 6 — Duty Payment & Release",
      description: "Once examination is complete and duty is paid, the customs authority issues a Delivery Order for the release of the vehicle from the port."
    },
    {
      step: "Step 7 — Inland Transport to Your City",
      description: "After port release, the vehicle is transported from Karachi to your home city via car carrier or professional driver."
    },
    {
      step: "Step 8 — Excise Registration in Pakistan",
      description: "The final step is registering the imported vehicle with the provincial Excise and Taxation department in your city."
    }
  ];

  const faqs = [
    {
      q: "What is the maximum age of a car that can be imported to Pakistan?",
      a: "Under all three personal import schemes (Transfer of Residence, Personal Baggage, and Gift), the maximum age for cars is 3 years from the date of manufacture. Other vehicles such as trucks and buses can be imported up to 5 years old. New vehicles have no age restriction under commercial import."
    },
    {
      q: "Can I import a car from Japan to Pakistan if I am an overseas Pakistani?",
      a: "Yes, subject to eligibility under one of the three personal schemes. The vehicle must not be older than 3 years and you must meet scheme-specific residency or relationship requirements. Duty is calculated on CIF value with applicable depreciation and any hybrid concessions."
    },
    {
      q: "How much duty will I pay on a hybrid car import to Pakistan?",
      a: "Hybrid Electric Vehicles (HEVs) up to 1800cc receive a 50% exemption from applicable duty and taxes. HEVs between 1800cc and 2500cc receive a 25% exemption. The base duty is first calculated for a standard petrol vehicle of the same engine capacity, then the concession is applied."
    },
    {
      q: "Can I sell an imported vehicle after bringing it to Pakistan under a personal scheme?",
      a: "Vehicles imported under personal schemes are subject to a lock-in period before they can be sold or transferred. Selling before the lock-in period attracts penalty duty equivalent to the concession received. Confirm the applicable lock-in period with a customs agent for your specific scheme."
    },
    {
      q: "How long does vehicle import clearance take at Karachi Port?",
      a: "With complete and correct documentation, clearance typically takes 5 to 10 working days after vessel arrival. Incomplete documents, customs examination, or duty disputes can extend this to 3 to 6 weeks — during which storage charges accumulate daily."
    },
    {
      q: "Do I need to be present in Karachi for customs clearance?",
      a: "No. A licensed customs agent can manage the entire clearance process on your behalf with a Power of Attorney. You do not need to travel to Karachi — our team handles everything remotely and delivers your vehicle to your city."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Vehicle Import Guide Pakistan 2025 – Duty, Rules & Process"
        description="Complete guide to importing a vehicle in Pakistan 2025. FBR duty rates, import schemes, eligibility, documents & step-by-step process. Expert help – 0300-9130211"
        keywords="vehicle import guide pakistan, how to import car in pakistan, car import duty pakistan 2025, import car pakistan, fbr car import pakistan, used car import pakistan, car import rules pakistan, vehicle import duty pakistan, overseas pakistani car import, transfer of residence car pakistan"
        urlPath="/vehicle-import-guide-pakistan"
        schema={buildVehicleImportSchema()}
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
              <Car className="text-gold" size={20} />
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Vehicle Import Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Vehicle Import Guide Pakistan 2025 – Complete <span className="text-gold">Car Import Rules, Duty & Process</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Importing a vehicle into Pakistan — whether you are an overseas Pakistani bringing your car home, a resident importing a new vehicle commercially, or a family receiving a car as a gift from abroad — involves multiple government regulations, specific eligibility conditions, and a duty structure that can significantly affect your total cost.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-white">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <ShieldCheck className="text-gold" size={24} />
                <span className="font-semibold">FBR Approved</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Calculator className="text-gold" size={24} />
                <span className="font-semibold">Duty Calculator</span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <CheckCircle2 className="text-gold" size={24} />
                <span className="font-semibold">Expert Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Who Can Import Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Who Can Import a Vehicle into Pakistan?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Pakistan's Federal Board of Revenue (FBR) allows vehicle import under two broad categories:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Commercial Import — Open to Everyone",
                description: "Any individual or business can import a new vehicle into Pakistan against payment of full applicable duty and taxes under the standard commercial import procedure. There are no eligibility restrictions for new vehicle commercial import — anyone with funds to pay duties can import.",
                note: "Used vehicles, however, cannot be commercially imported by the general public under standard procedures. Used vehicle import is restricted to specific schemes designed for overseas Pakistanis and returning nationals."
              },
              {
                title: "Personal Schemes — For Overseas Pakistanis",
                description: "Three personal import schemes are available exclusively to Pakistani nationals residing abroad or returning to Pakistan. These schemes allow import of used vehicles (with age restrictions) at concessional duty rates compared to standard commercial import.",
                note: "Important eligibility restrictions apply to all personal schemes: Students receiving remittances from Pakistan are not eligible, Non-earning dependants of overseas Pakistanis are not eligible, Anyone who has imported, gifted, or received a vehicle in the past two years is not eligible, Only one vehicle per person per applicable period"
              }
            ].map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                    {category.note && (
                      <div className="mt-4 p-4 bg-navy-light/20 rounded-lg">
                        <AlertCircle className="text-gold mb-2" size={20} />
                        <p className="text-sm text-muted-foreground">{category.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Import Schemes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              The Three Personal Import Schemes — Explained
            </h2>
          </motion.div>

          <div className="space-y-8">
            {importSchemes.map((scheme, index) => (
              <motion.div 
                key={scheme.name}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Scheme {index + 1} — {scheme.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{scheme.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground mb-2">Eligibility conditions:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {scheme.eligibility.map((condition, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {scheme.benefit && (
                      <div className="mt-4 p-4 bg-gold/10 rounded-lg">
                        <p className="text-sm text-foreground font-medium">Key benefit: {scheme.benefit}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duty Structure Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              FBR Vehicle Import Duty Structure — 2025
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Pakistan's customs duty on imported vehicles is calculated on CIF value — Cost + Insurance + Freight — of the vehicle at the time of import. The total duty comprises several components:
            </p>
          </motion.div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Duty Component</th>
                  <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Standard Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { component: "Customs Duty (CD)", rate: "Varies by engine capacity" },
                  { component: "Additional Customs Duty (ACD)", rate: "6% of CIF value" },
                  { component: "Sales Tax (ST)", rate: "17–25% depending on vehicle type" },
                  { component: "Federal Excise Duty (FED)", rate: "Varies by engine capacity" },
                  { component: "Income Tax / Withholding Tax (WHT)", rate: "Up to 6% of assessed value" },
                  { component: "Regulatory Duty (RD)", rate: "Applies to used commercial imports" }
                ].map((row, index) => (
                  <tr key={row.component} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-6 py-4 font-medium text-foreground">{row.component}</td>
                    <td className="border border-border px-6 py-4 text-center">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Duty Rates by Engine Capacity</h3>
            <p className="text-muted-foreground mb-6">
              Pakistan's FBR applies a progressive duty structure — larger engine, higher total duty:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-navy-light/30">
                    <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Engine Capacity</th>
                    <th className="border border-border px-6 py-4 text-left font-semibold text-foreground">Approximate Total Duty Burden</th>
                  </tr>
                </thead>
                <tbody>
                  {dutyRates.map((rate, index) => (
                    <tr key={rate.capacity} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                      <td className="border border-border px-6 py-4 font-medium text-foreground">{rate.capacity}</td>
                      <td className="border border-border px-6 py-4 text-center font-semibold text-gold">{rate.duty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Depreciation Relief on Used Vehicles",
                description: "Used vehicles imported under personal schemes benefit from monthly depreciation that reduces the taxable value:",
                details: [
                  "Cars: 2% per month from January of the year following manufacture, capped at a maximum of 50%",
                  "Trucks and Buses: 2% per month, capped at a maximum of 60%"
                ],
                example: "A 2022 car imported in 2025 has approximately 24–36 months of depreciation applicable — reducing its taxable CIF value by 48–72%, up to 50% cap."
              },
              {
                title: "Hybrid Electric Vehicle (HEV) Duty Concessions",
                description: "Pakistan's government provides significant duty relief for hybrid vehicles to encourage fuel-efficient imports:",
                details: [
                  "HEVs up to 1800cc: 50% exemption from applicable duty and taxes",
                  "HEVs from 1800cc to 2500cc: 25% exemption from applicable duty and taxes"
                ]
              }
            ].map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Calculator className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{section.description}</p>
                    {section.details && (
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.example && (
                      <div className="mt-4 p-4 bg-gold/10 rounded-lg">
                        <p className="text-sm text-foreground"><strong>Example:</strong> {section.example}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gold/10 rounded-lg"
          >
            <h4 className="text-lg font-semibold text-foreground mb-3">Finance Act 2025 Changes</h4>
            <p className="text-muted-foreground mb-4">
              The Finance Act 2025 introduced notable reductions in vehicle import duties:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={16} />
                <span>Regulatory Duty on commercial used vehicle imports revised to 40% under SRO 1898(I)/2025</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={16} />
                <span>Additional Customs Duty reduced across the board — now at 6% for all imported vehicles</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={16} />
                <span>Luxury vehicle duties reduced — 40% reduction in Regulatory Duty on vehicles above 1800cc</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Documents Required for Vehicle Import in Pakistan
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              The documentation requirements vary slightly by import scheme, but the following are required in virtually all cases:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "For all personal scheme imports:",
                documents: [
                  "Valid Pakistani passport (original required at customs clearance)",
                  "CNIC (Computerised National Identity Card)",
                  "Pakistan Origin Card (for overseas Pakistanis with dual nationality)",
                  "Bill of Lading or Airway Bill (original, dated within 120 days of vehicle arrival)",
                  "Vehicle title document / ownership certificate from country of origin",
                  "Bank encashment certificate — proof that duty and taxes are paid from foreign remittance"
                ]
              },
              {
                title: "For Transfer of Residence specifically:",
                documents: [
                  "Documentary evidence of 700+ days of residence abroad (passport stamps, visa, work permit, or residency card)",
                  "Stay Abroad Certificate or equivalent documentation"
                ]
              },
              {
                title: "For Gift Scheme specifically:",
                documents: [
                  "Relationship proof between sender and recipient",
                  "Undertaking letter confirming gift nature of transaction"
                ]
              },
              {
                title: "For all imports:",
                documents: [
                  "FBR import declaration (filed electronically through WeBOC)",
                  "Customs duty payment receipt"
                ]
              }
            ].map((docGroup, index) => (
              <motion.div 
                key={docGroup.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{docGroup.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {docGroup.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gold/30 flex-shrink-0 mt-2" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gold/10 rounded-lg"
          >
            <p className="text-sm text-foreground">
              Our licensed customs team assists with preparation and verification of all documents before your vehicle arrives at Karachi Port — preventing holds and delays at the clearance stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Step-by-Step Vehicle Import Process in Pakistan
            </h2>
          </motion.div>

          <div className="space-y-6">
            {importSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.step}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-Specific Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Vehicle Import from Specific Countries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                country: "Importing a Car from Japan to Pakistan",
                description: "Japan is the most popular source for used vehicle imports to Pakistan — offering well-maintained right-hand drive vehicles at competitive prices. Japanese auction sheets provide vehicle history and condition grades. Transit time by sea from Japan to Karachi is approximately 20 to 30 days."
              },
              {
                country: "Importing a Car from UAE to Pakistan",
                description: "UAE-sourced vehicles are increasingly popular — shorter transit time (approximately 5 to 10 days by sea) and large availability of both new and used vehicles. Left-hand drive vehicles from UAE require conversion to right-hand drive or registration as an exception."
              },
              {
                country: "Importing a Car from UK to Pakistan",
                description: "UK imports offer European specification vehicles with full service history. Transit time approximately 20 to 25 days. UK-sourced vehicles are right-hand drive — no conversion required."
              },
              {
                country: "Importing a Car from USA or Canada to Pakistan",
                description: "US and Canadian vehicles are left-hand drive — conversion to right-hand drive is required or vehicle may only be registered in specific categories. Transit time approximately 28 to 40 days by sea."
              }
            ].map((country, index) => (
              <motion.div 
                key={country.country}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{country.country}</h3>
                    <p className="text-muted-foreground leading-relaxed">{country.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Common Mistakes When Importing a Vehicle to Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Purchasing a vehicle that is too old",
                description: "The 3-year age limit under personal schemes is strictly enforced. A vehicle manufactured more than 3 years before the import date will not clear under Personal Baggage or Gift schemes — and clearing it as a commercial import will attract significantly higher duty."
              },
              {
                title: "Not verifying eligibility before purchase",
                description: "Discovering ineligibility after the vehicle has already shipped is an extremely costly mistake. Verify eligibility with a customs agent before any purchase is made."
              },
              {
                title: "Under-declaring CIF value",
                description: "Pakistan Customs uses international reference databases to verify vehicle values. Under-declaration triggers a revised assessment with potential penalties and delays."
              },
              {
                title: "Missing 120-day Bill of Lading window",
                description: "The Bill of Lading for personal scheme vehicle imports must be dated within 120 days of the vehicle's arrival at Karachi Port. Delays in shipping after purchase can cause the Bill of Lading to expire."
              },
              {
                title: "Not using foreign remittance for duty payment",
                description: "For personal scheme imports, duty must be paid using foreign exchange from a verified remittance source — a local bank transfer is not accepted. The bank encashment certificate is a mandatory document at clearance."
              }
            ].map((mistake, index) => (
              <motion.div 
                key={mistake.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{mistake.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{mistake.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              How We Help — Vehicle Import Support from Best International Movers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "International Vehicle Shipping",
                description: "We arrange container shipping or RORO transport for your vehicle from any source country to Karachi Port. Container shipping is recommended for high-value vehicles — your car is enclosed in a sealed container with zero exposure to weather.",
                link: "/door-to-door-cargo-pakistan",
                linkText: "door-to-door cargo service"
              },
              {
                title: "Pakistan Customs Clearance",
                description: "Our licensed customs agents manage the complete Karachi Port clearance process — WeBOC filing, duty calculation verification, examination coordination, and Delivery Order collection.",
                link: "#",
                linkText: ""
              },
              {
                title: "Inland Delivery to Your City",
                description: "After customs clearance, we arrange transport of your vehicle from Karachi Port to your home city via enclosed car carrier or professional driver.",
                link: "#",
                linkText: ""
              },
              {
                title: "Duty Estimation",
                description: "Before you purchase abroad, use our calculator to estimate total duty and tax burden for your specific vehicle — engine capacity, age, type, and applicable scheme.",
                link: "/custom-duty-calculator",
                linkText: "Custom Duty Calculator"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Package className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    {service.link && (
                      <Link 
                        to={service.link} 
                        className="inline-flex items-center text-gold hover:underline font-medium"
                      >
                        See our {service.linkText} →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Vehicle Import Pakistan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.q}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Q: {faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">A: {faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Book Vehicle Import Support — Free Consultation Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Whether you are importing a car from Japan, UAE, or UK — or need customs clearance support at Karachi Port — our team is ready to assist at every stage.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-gold" size={20} />
                  <span className="font-semibold">Call / WhatsApp: 0300-9130211</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-gold" size={20} />
                  <span className="font-semibold">Rawalpindi | Islamabad | Lahore | Peshawar</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
                >
                  GET FREE CONSULTATION
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  WHATSAPP US NOW
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-navy-light/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Related Pages
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { to: "/custom-duty-calculator", label: "Custom Duty Calculator" },
              { to: "/international-cargo-islamabad", label: "International Cargo Service Islamabad" },
              { to: "/door-to-door-cargo-pakistan", label: "Door to Door Cargo Pakistan" }
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default VehicleImportGuidePakistan;
