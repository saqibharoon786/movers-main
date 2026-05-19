/** Shared image URLs — reliable CDN links for hero, gallery, and service pages. */
const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=80`;

/** Pexels requires the full slug filename for reliable loading. */
const pexels = (id: number, slug: string, w = 1920) =>
  `https://images.pexels.com/photos/${id}/${slug}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Homepage hero slider — movers, packing, trucks (navy + gold overlay). */
export const heroSlides = [
  {
    src: unsplash("1600585154340-be6161a56a0c"),
    alt: "Professional international home relocation",
    label: "Door-to-Door Moving",
  },
  {
    src: pexels(4246128, "pexels-photo-4246128"),
    alt: "Movers loading truck with packed boxes",
    label: "Expert Packing Team",
  },
  {
    src: pexels(4483610, "pexels-photo-4483610"),
    alt: "Cardboard boxes and packing materials",
    label: "Export-Grade Packing",
  },
  {
    src: unsplash("1596075780750-81249df16d19"),
    alt: "House shifting and furniture wrapping",
    label: "House Shifting",
  },
  {
    src: pexels(4246120, "pexels-photo-4246120"),
    alt: "Moving truck on city street",
    label: "Nationwide Transport",
  },
  {
    src: pexels(163726, "belgium-antwerp-shipping-container-163726"),
    alt: "International sea freight containers",
    label: "Sea Freight & Cargo",
  },
] as const;

export const siteImages = {
  /** Modern home at dusk — homepage hero fallback */
  heroHome: heroSlides[0].src,
  cargoInsurance: unsplash("1454165804606-c3d57bc86b40", 1200),
  petBlog: unsplash("1601758228826-054b69a9cc13", 1200),
  petRelocation: unsplash("1601758228826-054b69a9cc13"),
  peshawar: pexels(1115804, "pexels-photo-1115804", 1600),
  rawalpindi: pexels(4246120, "pexels-photo-4246120", 1600),
  homeshifting: unsplash("1596075780750-81249df16d19", 1600),
  shipping: pexels(163726, "belgium-antwerp-shipping-container-163726", 1600),
  container: pexels(163726, "belgium-antwerp-shipping-container-163726", 1600),
  goodsTransportation: pexels(2199293, "pexels-photo-2199293", 1600),
  gallery: [
    {
      img: pexels(4246128, "pexels-photo-4246128", 800),
      title: "Lahore to Dubai — Family Home Relocation",
      location: "DHA Phase 6, Lahore → UAE",
    },
    {
      img: pexels(7688336, "pexels-photo-7688336", 800),
      title: "Islamabad to UK — Corporate Office Move",
      location: "Blue Area, Islamabad → United Kingdom",
    },
    {
      img: pexels(4483610, "pexels-photo-4483610", 800),
      title: "Peshawar to Saudi Arabia — Family Relocation",
      location: "Hayatabad, Peshawar → KSA",
    },
    {
      img: pexels(4246120, "pexels-photo-4246120", 800),
      title: "Rawalpindi to Canada — Student Belongings Shipment",
      location: "Bahria Town, Rawalpindi → Canada",
    },
    {
      img: pexels(163726, "belgium-antwerp-shipping-container-163726", 800),
      title: "Karachi Port — FCL Container Dispatch to Jebel Ali",
      location: "Karachi → Dubai (sea freight)",
    },
    {
      img: pexels(2199293, "pexels-photo-2199293", 800),
      title: "Islamabad to Karachi — Multi-Vehicle Transport",
      location: "Twin-city / long-haul Pakistan",
    },
  ],
  galleryFallback: pexels(163726, "belgium-antwerp-shipping-container-163726", 800),
} as const;
