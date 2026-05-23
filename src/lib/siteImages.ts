/** Self-hosted images under /public/images — no external Pexels/Unsplash URLs. */
export const SITE_ORIGIN = "https://bestintlmovers.com";

export const siteImagePaths = {
  heroHome: "/images/hero-home.jpg",
  internationalMoving: "/images/international-moving.jpg",
  container: "/images/container.jpg",
  seaFreight: "/images/sea-freight.jpg",
  airFreight: "/images/air-freight.jpg",
  shipping: "/images/shipping.png",
  professionalPacking: "/images/professional-packing.png",
  homeshifting: "/images/homeshifting.png",
  secureStorage: "/images/secure-storage.png",
  vehicleShipping: "/images/vehicle-shipping.jpg",
  cargoInsurance: "/images/cargo-insurance.jpg",
  customs: "/images/custom.png",
  petRelocation: "/images/pet-relocation.png",
  petBlog: "/images/pet-blog.png",
  peshawar: "/images/peshawar.png",
  rawalpindi: "/images/rwp.png",
  goodsTransport: "/images/good.png",
  packingMaterials: "/images/packing-materials.jpg",
  freightForwarding: "/images/freight-forwarding.png",
  nationwide: "/images/nationwide-distribution.png",
  chinaCargo: "/images/china-to-pakistan-cargo.jpg",
  blogIslamabadHero: "/blog/packers-movers-islamabad-hero.jpg",
  blogIslamabadTruck: "/blog/packers-movers-islamabad-truck.jpg",
} as const;

export type SiteImagePath = (typeof siteImagePaths)[keyof typeof siteImagePaths];

/** Absolute URL for Open Graph / JSON-LD */
export const siteImageUrl = (path: SiteImagePath | string) =>
  path.startsWith("http") ? path : `${SITE_ORIGIN}${path}`;

/** Homepage hero slider */
export const heroSlides = [
  {
    src: siteImagePaths.heroHome,
    alt: "Professional international home relocation",
    label: "Door-to-Door Moving",
  },
  {
    src: siteImagePaths.professionalPacking,
    alt: "Movers loading truck with packed boxes",
    label: "Expert Packing Team",
  },
  {
    src: siteImagePaths.packingMaterials,
    alt: "Cardboard boxes and packing materials",
    label: "Export-Grade Packing",
  },
  {
    src: siteImagePaths.homeshifting,
    alt: "House shifting and furniture wrapping",
    label: "House Shifting",
  },
  {
    src: siteImagePaths.blogIslamabadTruck,
    alt: "Moving truck on city street",
    label: "Nationwide Transport",
  },
  {
    src: siteImagePaths.container,
    alt: "International sea freight containers",
    label: "Sea Freight & Cargo",
  },
] as const;

export const siteImages = {
  heroHome: siteImagePaths.heroHome,
  cargoInsurance: siteImagePaths.cargoInsurance,
  petBlog: siteImagePaths.petBlog,
  petRelocation: siteImagePaths.petRelocation,
  peshawar: siteImagePaths.peshawar,
  rawalpindi: siteImagePaths.rawalpindi,
  homeshifting: siteImagePaths.homeshifting,
  shipping: siteImagePaths.shipping,
  container: siteImagePaths.container,
  goodsTransportation: siteImagePaths.goodsTransport,
  gallery: [
    {
      img: siteImagePaths.professionalPacking,
      title: "Lahore to Dubai — Family Home Relocation",
      location: "DHA Phase 6, Lahore → UAE",
    },
    {
      img: siteImagePaths.internationalMoving,
      title: "Islamabad to UK — Corporate Office Move",
      location: "Blue Area, Islamabad → United Kingdom",
    },
    {
      img: siteImagePaths.peshawar,
      title: "Peshawar to Saudi Arabia — Family Relocation",
      location: "Hayatabad, Peshawar → KSA",
    },
    {
      img: siteImagePaths.rawalpindi,
      title: "Rawalpindi to Canada — Student Belongings Shipment",
      location: "Bahria Town, Rawalpindi → Canada",
    },
    {
      img: siteImagePaths.container,
      title: "Karachi Port — FCL Container Dispatch to Jebel Ali",
      location: "Karachi → Dubai (sea freight)",
    },
    {
      img: siteImagePaths.goodsTransport,
      title: "Islamabad to Karachi — Multi-Vehicle Transport",
      location: "Twin-city / long-haul Pakistan",
    },
  ],
  galleryFallback: siteImagePaths.container,
} as const;
