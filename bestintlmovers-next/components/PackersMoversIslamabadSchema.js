export default function PackersMoversIslamabadSchema() {
  const movingCompanySchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Best International Movers & Logistics",
    "telephone": "+923009130211",
    "url": "https://bestintlmovers.com/packers-and-movers-islamabad",
    "description": "Best packers and movers in Islamabad offering professional home shifting, office relocation and international moving services across all sectors.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Blue Area, Jinnah Avenue",
      "addressLocality": "Islamabad",
      "addressRegion": "Islamabad Capital Territory",
      "addressCountry": "PK"
    },
    "priceRange": "PKR 15,000 - PKR 80,000",
    "openingHours": "Mo-Sa 08:00-20:00",
    "areaServed": [
      "Islamabad", "F-7", "F-8", "G-11", "DHA Islamabad",
      "Bahria Enclave", "Diplomatic Enclave", "Park Enclave"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Moving Services Islamabad",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "House Shifting Islamabad"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Relocation Islamabad"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "International Moving Islamabad"}}
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What do packers and movers charge in Islamabad in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Charges start from PKR 15,000 for a studio or 1-bedroom home and go up to PKR 80,000+ for a 4–5 bedroom villa. Call 0300-9130211 for a free written quote."
        }
      },
      {
        "@type": "Question",
        "name": "Is same-day shifting available in Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — book before 10:00 AM on the day of your move. WhatsApp 0300-9130211 with your address and room count."
        }
      },
      {
        "@type": "Question",
        "name": "Do you cover DHA, Bahria Enclave and Diplomatic Enclave?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — all of Islamabad is covered including DHA, Bahria Enclave, Diplomatic Enclave, Park Enclave, Naval Anchorage and all F, G, E and I sectors."
        }
      },
      {
        "@type": "Question",
        "name": "Is my furniture insured during the move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every move is fully insured against damage or loss. Complete compensation provided at no extra cost in the rare event of damage."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a house shift take in Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 2–3 bedroom home typically takes 6–10 hours with a team of 4–6 packers. Same-day completion is possible for smaller homes booked before 10:00 AM."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do international moves from Islamabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — door-to-door international moving from Islamabad to UAE, UK, USA, Canada, Saudi Arabia, Australia and 100+ countries. Call 0300-9130211."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movingCompanySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
