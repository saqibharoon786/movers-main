import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
// const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const ServicesIndex = lazy(() => import("./pages/services/index.tsx"));
const InternationalMovingService = lazy(() => import("./pages/services/international-moving.tsx"));
const AirFreightService = lazy(() => import("./pages/services/air-freight.tsx"));
const AirCargoPakistanToUK = lazy(() => import("./pages/services/air-cargo-pakistan-to-uk.tsx"));
const AirCargoToCanada = lazy(() => import("./pages/services/air-cargo-to-canada.tsx"));
const SeaFreightService = lazy(() => import("./pages/services/sea-freight.tsx"));
const CustomsClearanceService = lazy(() => import("./pages/services/customs-clearance.tsx"));
const ProfessionalPackingService = lazy(() => import("./pages/services/professional-packing.tsx"));
const PetRelocationService = lazy(() => import("./pages/services/pet-relocation.tsx"));
const FreightForwardingService = lazy(() => import("./pages/services/freight-forwarding.tsx"));
const ChinaToPakistanCargoService = lazy(() => import("./pages/services/china-to-pakistan-cargo.tsx"));
const NationwideDistributionService = lazy(() => import("./pages/services/nationwide-distribution.tsx"));
const PackingMaterialsService = lazy(() => import("./pages/services/packing-materials.tsx"));
const CargoInsuranceService = lazy(() => import("./pages/services/cargo-insurance.tsx"));
const SecureStorageService = lazy(() => import("./pages/services/secure-storage.tsx"));
const VehicleShippingService = lazy(() => import("./pages/services/vehicle-shipping.tsx"));
const LastMileDeliveryService = lazy(() => import("./pages/services/last-mile-delivery.tsx"));
const HouseholdGoodsShippingPakistanToUK = lazy(() => import("./pages/services/household-goods-shipping-pakistan-to-uk.tsx"));
const RelocationServicesPakistanToUK = lazy(() => import("./pages/services/relocation-services-pakistan-to-uk.tsx"));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage.tsx"));
const ProcessPage = lazy(() => import("./pages/ProcessPage.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const FaqHubPakistan = lazy(() => import("./pages/FaqHubPakistan.tsx"));
const InternationalMoversPakistan = lazy(() => import("./pages/InternationalMoversPakistan.tsx"));
const CargoServicesPakistan = lazy(() => import("./pages/CargoServicesPakistan.tsx"));
const LogisticsServicesPakistan = lazy(() => import("./pages/LogisticsServicesPakistan.tsx"));
const PackersMoversPakistan = lazy(() => import("./pages/PackersMoversPakistan.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"));
const BlogMainPage = lazy(() => import("./pages/BlogMainPage.tsx"));
const CargoInsuranceServicesPakistanBlog = lazy(() => import("./pages/blog/CargoInsuranceServicesPakistanBlog.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage.tsx"));
const PakistanToDubaiMovers = lazy(() => import("./pages/PakistanToDubaiMovers.tsx"));
const PakistanToUK = lazy(() => import("./pages/PakistanToUK.tsx"));
const PakistanToCanada = lazy(() => import("./pages/PakistanToCanada.tsx"));
const PakistanToUSA = lazy(() => import("./pages/PakistanToUSA.tsx"));
const PakistanToSaudi = lazy(() => import("./pages/PakistanToSaudi.tsx"));
const PakistanToAustralia = lazy(() => import("./pages/PakistanToAustralia.tsx"));
const PakistanToQatar = lazy(() => import("./pages/PakistanToQatar.tsx"));
const PakistanToGermany = lazy(() => import("./pages/PakistanToGermany.tsx"));
const PakistanToMalaysia = lazy(() => import("./pages/PakistanToMalaysia.tsx"));
const MoversIslamabad = lazy(() => import("./pages/MoversIslamabad.tsx"));
const MoversRawalpindi = lazy(() => import("./pages/MoversRawalpindi.tsx"));
const MoversLahore = lazy(() => import("./pages/MoversLahore.tsx"));
const MoversKarachi = lazy(() => import("./pages/MoversKarachi.tsx"));
const MoversMultan = lazy(() => import("./pages/MoversMultan.tsx"));
const CorporateRelocationPakistan = lazy(() => import("./pages/CorporateRelocationPakistan.tsx"));
const PackersAndMoversKarachi = lazy(() => import("./pages/PackersAndMoversKarachi.tsx"));
const OfficeRelocationKarachi = lazy(() => import("./pages/OfficeRelocationKarachi.tsx"));
const DhaKarachiMovers = lazy(() => import("./pages/DhaKarachiMovers.tsx"));
const PackersAndMoversMultan = lazy(() => import("./pages/PackersAndMoversMultan.tsx"));
const CargoServiceKarachi = lazy(() => import("./pages/CargoServiceKarachi.tsx"));
const KarachiToDubaiCargo = lazy(() => import("./pages/KarachiToDubaiCargo.tsx"));
const SeaFreightPakistanToUK = lazy(() => import("./pages/SeaFreightPakistanToUK.tsx"));
const DhaKarachiMovingGuideSectorBySector = lazy(() => import("./pages/DhaKarachiMovingGuideSectorBySector.tsx"));
const MoversAndPackersInPeshawar = lazy(() => import("./pages/MoversAndPackersInPeshawar.tsx"));
const CargoIslamabad = lazy(() => import("./pages/CargoIslamabad.tsx"));
const CargoRawalpindi = lazy(() => import("./pages/CargoRawalpindi.tsx"));
const AirFreightIslamabad = lazy(() => import("./pages/AirFreightIslamabad.tsx"));
const SeaFreightIslamabad = lazy(() => import("./pages/SeaFreightIslamabad.tsx"));
const AirFreightRawalpindi = lazy(() => import("./pages/AirFreightRawalpindi.tsx"));
const SeaFreightRawalpindi = lazy(() => import("./pages/SeaFreightRawalpindi.tsx"));
const CourierIslamabad = lazy(() => import("./pages/CourierIslamabad.tsx"));
const CourierRawalpindi = lazy(() => import("./pages/CourierRawalpindi.tsx"));
const FreightForwardingIslamabad = lazy(() => import("./pages/FreightForwardingIslamabad.tsx"));
const CustomsClearanceIslamabad = lazy(() => import("./pages/CustomsClearanceIslamabad.tsx"));
const ContainerShippingPakistan = lazy(() => import("./pages/ContainerShippingPakistan.tsx"));
const GoodsTransportationPakistan = lazy(() => import("./pages/GoodsTransportationPakistan.tsx"));
const DoorToDoorCargoPakistan = lazy(() => import("./pages/DoorToDoorCargoPakistan.tsx"));
const HouseShiftingIslamabad = lazy(() => import("./pages/HouseShiftingIslamabad.tsx"));
const HouseShiftingRawalpindi = lazy(() => import("./pages/HouseShiftingRawalpindi.tsx"));
const VehicleImportGuidePakistan = lazy(() => import("./pages/VehicleImportGuidePakistan.tsx"));
const PackersMoversIslamabad = lazy(() => import("./pages/PackersMoversIslamabad.tsx"));
const PackersMoversLahore = lazy(() => import("./pages/PackersMoversLahore.tsx"));
const PackersMoversRawalpindi = lazy(() => import("./pages/PackersMoversRawalpindi.tsx"));
const HomeShiftingIslamabad = lazy(() => import("./pages/HomeShiftingIslamabad.tsx"));
const HomeShiftingRawalpindi = lazy(() => import("./pages/HomeShiftingRawalpindi.tsx"));
const HomeShiftingServicesInRawalpindi = lazy(() => import("./pages/HomeShiftingServicesInRawalpindi.tsx"));
const PackersAndMoversInRawalpindi = lazy(() => import("./pages/PackersAndMoversInRawalpindi.tsx"));
const InternationalCargoIslamabad = lazy(() => import("./pages/InternationalCargoIslamabad.tsx"));
const TopShippingCompaniesInPakistan = lazy(() => import("./pages/TopShippingCompaniesInPakistan.tsx"));
const PakistanCargoServices = lazy(() => import("./pages/PakistanCargoServices.tsx"));
const StorageUnitsIslamabad = lazy(() => import("./pages/StorageUnitsIslamabad.tsx"));
const CustomDutyCalculator = lazy(() => import("./pages/CustomDutyCalculator.tsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.tsx"));
const Blog1 = lazy(() => import("./pages/Blog1.tsx"));
const Blog2 = lazy(() => import("./pages/Blog2.tsx"));
const Blog3 = lazy(() => import("./pages/Blog3.tsx"));
const Blog4 = lazy(() => import("./pages/Blog4.tsx"));
const MovingCostPakistanBlog = lazy(() => import("./pages/blog/MovingCostPakistanBlog.tsx"));
const MovingChecklistPakistanBlog = lazy(() => import("./pages/blog/MovingChecklistPakistanBlog.tsx"));
const PackingTipsHouseShiftingBlog = lazy(() => import("./pages/blog/PackingTipsHouseShiftingBlog.tsx"));
const MistakesDuringHouseShiftingBlog = lazy(() => import("./pages/blog/MistakesDuringHouseShiftingBlog.tsx"));
const AirVsSeaFreightPakistanBlog = lazy(() => import("./pages/blog/AirVsSeaFreightPakistanBlog.tsx"));
const HowToChoosePackersMoversBlog = lazy(() => import("./pages/blog/HowToChoosePackersMoversBlog.tsx"));
const BestMoversIslamabadVsLahoreBlog = lazy(() => import("./pages/blog/BestMoversIslamabadVsLahoreBlog.tsx"));
const OfficeRelocationChecklistPakistanBlog = lazy(() => import("./pages/blog/OfficeRelocationChecklistPakistanBlog.tsx"));
const InternationalShippingCostPakistanBlog = lazy(() => import("./pages/blog/InternationalShippingCostPakistanBlog.tsx"));
const GoodsTransportVsCargoServicesBlog = lazy(() => import("./pages/blog/GoodsTransportVsCargoServicesBlog.tsx"));
const PackingFragileItemsGuideBlog = lazy(() => import("./pages/blog/PackingFragileItemsGuideBlog.tsx"));
const CheapMoversTipsPakistanBlog = lazy(() => import("./pages/blog/CheapMoversTipsPakistanBlog.tsx"));
const PackersMoversIslamabadGuideBlog = lazy(() => import("./pages/blog/PackersMoversIslamabadGuideBlog.tsx"));
const PackersMoversIslamabadCompleteGuideBlog = lazy(
  () => import("./pages/blog/PackersMoversIslamabadCompleteGuideBlog.tsx"),
);
const BestPackersMoversIslamabad2026Blog = lazy(
  () => import("./pages/blog/BestPackersMoversIslamabad2026Blog.tsx"),
);
const BestInternationalMoversAndPackersGuide2026Blog = lazy(
  () => import("./pages/blog/BestInternationalMoversAndPackersGuide2026Blog.tsx"),
);
const CargoInsuranceInternationalShipments2026Blog = lazy(
  () => import("./pages/blog/CargoInsuranceInternationalShipments2026Blog.tsx"),
);
const InternationalCargoServiceIslamabad2026 = lazy(() => import("./pages/blog/InternationalCargoServiceIslamabad2026.tsx"));
const OfficeRelocationKarachiZeroDowntimeGuide2026Blog = lazy(
  () => import("./pages/blog/OfficeRelocationKarachiZeroDowntimeGuide2026Blog.tsx"),
);
const DhaKarachiMovingGuideSectorBySectorBlog = lazy(
  () => import("./pages/blog/DhaKarachiMovingGuideSectorBySectorBlog.tsx"),
);
const KarachiToDubaiShippingCost2026Blog = lazy(
  () => import("./pages/blog/KarachiToDubaiShippingCost2026Blog.tsx"),
);
const PackersMoversRawalpindiGuideBlog = lazy(() => import("./pages/blog/PackersMoversRawalpindiGuideBlog.tsx"));
const PetRelocationFromPakistanBlog = lazy(() => import("./pages/blog/PetRelocationFromPakistanBlog.tsx"));
const BlogInternationalRelocationRawalpindi = lazy(() => import("./pages/BlogInternationalRelocationRawalpindi.tsx"));
const InternationalMoversIslamabad = lazy(() => import("./pages/InternationalMoversIslamabad.tsx"));
const InternationalMoversLahore = lazy(() => import("./pages/InternationalMoversLahore.tsx"));
const InternationalRelocationServicesRawalpindi = lazy(() => import("./pages/InternationalRelocationServicesRawalpindi.tsx"));
const InternationalMoversAndPackersPakistan = lazy(() => import("./pages/InternationalMoversAndPackersPakistan.tsx"));
const PartLoadRemovalsPakistan = lazy(() => import("./pages/PartLoadRemovalsPakistan.tsx"));
const CustomClearanceAgencyPakistan = lazy(() => import("./pages/CustomClearanceAgencyPakistan.tsx"));
const ShippingCompaniesPakistanBlog = lazy(() => import("./pages/blog/ShippingCompaniesPakistanBlog.tsx"));
const CargoServiceIslamabadCompleteGuideBlog = lazy(() => import("./pages/blog/CargoServiceIslamabadCompleteGuideBlog.tsx"));
const InternationalRelocationRawalpindiCompleteGuideBlog = lazy(() => import("./pages/blog/InternationalRelocationRawalpindiCompleteGuideBlog.tsx"));
const CustomsClearanceProcessPakistanBlog = lazy(() => import("./pages/blog/CustomsClearanceProcessPakistanBlog.tsx"));
const CargoChargesPakistanToUKBlog = lazy(() => import("./pages/blog/CargoChargesPakistanToUKBlog.tsx"));
const BestFreightForwardersPakistanBlog = lazy(() => import("./pages/blog/BestFreightForwardersPakistanBlog.tsx"));
const AirFreightVsSeaFreightPakistanBlog = lazy(() => import("./pages/blog/AirFreightVsSeaFreightPakistanBlog.tsx"));
const InternationalRelocationChecklistFamiliesBlog = lazy(() => import("./pages/blog/InternationalRelocationChecklistFamiliesBlog.tsx"));
const CarShippingPakistanUKBlog = lazy(() => import("./pages/blog/CarShippingPakistanUKBlog.tsx"));
const CommercialFreightForwardingPakistanUAEBlog = lazy(
  () => import("./pages/blog/CommercialFreightForwardingPakistanUAEBlog.tsx"),
);
const CustomsAndDutyPakistanUKBlog = lazy(() => import("./pages/blog/CustomsAndDutyPakistanUKBlog.tsx"));
const MovingFromPakistanToCanadaGuideBlog = lazy(
  () => import("./pages/blog/MovingFromPakistanToCanadaGuideBlog.tsx"),
);
const CanadaCustomsRulesPersonalEffectsPakistanBlog = lazy(
  () => import("./pages/blog/CanadaCustomsRulesPersonalEffectsPakistanBlog.tsx"),
);
const PackingTipsInternationalMovingToCanadaBlog = lazy(
  () => import("./pages/blog/PackingTipsInternationalMovingToCanadaBlog.tsx"),
);
const FamilyRelocationToUkFromPakistanBlog = lazy(
  () => import("./pages/blog/FamilyRelocationToUkFromPakistanBlog.tsx"),
);
const InternationalShippingProcessGuideBlog = lazy(
  () => import("./pages/blog/InternationalShippingProcessGuideBlog.tsx"),
);
const StudentRelocationToCanadaFromPakistanBlog = lazy(
  () => import("./pages/blog/StudentRelocationToCanadaFromPakistanBlog.tsx"),
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading...</p>
              </div>
            </div>
          }>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/terms-of-service/" element={<TermsOfServicePage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/international-moving-services" element={<Navigate to="/services/international-moving-services/" replace />} />
          <Route path="/services/international-moving-services/" element={<InternationalMovingService />} />
          <Route path="/services/international-moving" element={<Navigate to="/services/international-moving-services/" replace />} />
          <Route path="/services/international-moving/" element={<Navigate to="/services/international-moving-services/" replace />} />
          <Route path="/services/air-freight" element={<Navigate to="/services/air-freight/" replace />} />
          <Route path="/services/air-freight/" element={<AirFreightService />} />
          <Route path="/services/air-cargo-pakistan-to-uk" element={<Navigate to="/services/air-cargo-pakistan-to-uk/" replace />} />
          <Route path="/services/air-cargo-pakistan-to-uk/" element={<AirCargoPakistanToUK />} />
          <Route path="/services/air-cargo-pakistan-to-canada" element={<Navigate to="/services/air-cargo-to-canada/" replace />} />
          <Route path="/services/air-cargo-pakistan-to-canada/" element={<Navigate to="/services/air-cargo-to-canada/" replace />} />
          <Route path="/services/air-cargo-to-canada" element={<Navigate to="/services/air-cargo-to-canada/" replace />} />
          <Route path="/services/air-cargo-to-canada/" element={<AirCargoToCanada />} />
          <Route path="/services/sea-freight-pakistan-to-uk" element={<Navigate to="/sea-freight-pakistan-to-uk/" replace />} />
          <Route path="/services/sea-freight-pakistan-to-uk/" element={<Navigate to="/sea-freight-pakistan-to-uk/" replace />} />
          <Route path="/services/sea-freight-services" element={<Navigate to="/services/sea-freight-services/" replace />} />
          <Route path="/services/sea-freight-services/" element={<SeaFreightService />} />
          <Route path="/services/sea-freight" element={<Navigate to="/services/sea-freight-services/" replace />} />
          <Route path="/services/sea-freight/" element={<Navigate to="/services/sea-freight-services/" replace />} />
          <Route path="/services/customs-clearance" element={<Navigate to="/services/customs-clearance/" replace />} />
          <Route path="/services/customs-clearance/" element={<CustomsClearanceService />} />
          <Route path="/services/professional-packing-services" element={<Navigate to="/services/professional-packing-services/" replace />} />
          <Route path="/services/professional-packing-services/" element={<ProfessionalPackingService />} />
          <Route path="/services/professional-packing" element={<Navigate to="/services/professional-packing-services/" replace />} />
          <Route path="/services/professional-packing/" element={<Navigate to="/services/professional-packing-services/" replace />} />
          <Route path="/services/packing" element={<Navigate to="/services/professional-packing-services/" replace />} />
          <Route path="/services/packing/" element={<Navigate to="/services/professional-packing-services/" replace />} />
          <Route path="/services/pet-relocation-services" element={<Navigate to="/services/pet-relocation-services/" replace />} />
          <Route path="/services/pet-relocation-services/" element={<PetRelocationService />} />
          <Route path="/services/freight-forwarding-services" element={<Navigate to="/services/freight-forwarding-services/" replace />} />
          <Route path="/services/freight-forwarding-services/" element={<FreightForwardingService />} />
          <Route path="/services/china-to-pakistan-cargo-services" element={<Navigate to="/services/china-to-pakistan-cargo-services/" replace />} />
          <Route path="/services/china-to-pakistan-cargo-services/" element={<ChinaToPakistanCargoService />} />
          <Route path="/services/nationwide-distribution-services" element={<Navigate to="/services/nationwide-distribution-services/" replace />} />
          <Route path="/services/nationwide-distribution-services/" element={<NationwideDistributionService />} />
          <Route path="/services/packing-materials-services" element={<Navigate to="/services/packing-materials-services/" replace />} />
          <Route path="/services/packing-materials-services/" element={<PackingMaterialsService />} />
          <Route path="/services/packing-materials" element={<Navigate to="/services/packing-materials-services/" replace />} />
          <Route path="/services/packing-materials/" element={<Navigate to="/services/packing-materials-services/" replace />} />
          <Route path="/services/cargo-insurance-services" element={<Navigate to="/services/cargo-insurance-services/" replace />} />
          <Route path="/services/cargo-insurance-services/" element={<CargoInsuranceService />} />
          <Route path="/services/cargo-insurance" element={<Navigate to="/services/cargo-insurance-services/" replace />} />
          <Route path="/services/cargo-insurance/" element={<Navigate to="/services/cargo-insurance-services/" replace />} />
          <Route path="/services/secure-storage-services" element={<Navigate to="/services/secure-storage-services/" replace />} />
          <Route path="/services/secure-storage-services/" element={<SecureStorageService />} />
          <Route path="/services/secure-storage-services/" element={<Navigate to="/services/secure-storage-services/" replace />} />
          <Route path="/services/secure-storage/" element={<Navigate to="/services/secure-storage-services/" replace />} />
          <Route path="/services/vehicle-shipping-services" element={<Navigate to="/services/vehicle-shipping-services/" replace />} />
          <Route path="/services/vehicle-shipping-services/" element={<VehicleShippingService />} />
          <Route path="/services/vehicle-shipping" element={<Navigate to="/services/vehicle-shipping-services/" replace />} />
          <Route path="/services/vehicle-shipping/" element={<Navigate to="/services/vehicle-shipping-services/" replace />} />
          <Route path="/services/last-mile-delivery" element={<Navigate to="/services/last-mile-delivery/" replace />} />
          <Route path="/services/last-mile-delivery/" element={<LastMileDeliveryService />} />
          <Route path="/services/household-goods-shipping-pakistan-to-uk" element={<Navigate to="/services/household-goods-shipping-pakistan-to-uk/" replace />} />
          <Route path="/services/household-goods-shipping-pakistan-to-uk/" element={<HouseholdGoodsShippingPakistanToUK />} />
          <Route path="/services/relocation-services-pakistan-to-uk" element={<Navigate to="/services/relocation-services-pakistan-to-uk/" replace />} />
          <Route path="/services/relocation-services-pakistan-to-uk/" element={<RelocationServicesPakistanToUK />} />
          {/* <Route path="/services:slug" element={<ServicesPage />} /> */}
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/faqs-packers-movers-pakistan" element={<FaqHubPakistan />} />
          <Route path="/faqs-packers-movers-pakistan/" element={<FaqHubPakistan />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Navigate to="/blog/" replace />} />
          <Route path="/blog/" element={<BlogMainPage />} />
          <Route path="/blog/tips-for-stress-free-international-move" element={<Navigate to="/blog/tips-for-stress-free-international-move/" replace />} />
          <Route path="/blog/tips-for-stress-free-international-move/" element={<Blog1 />} />
          <Route path="/blog/air-freight-vs-sea-freight-pakistan" element={<Navigate to="/blog/air-freight-vs-sea-freight-pakistan/" replace />} />
          <Route path="/blog/air-freight-vs-sea-freight-pakistan/" element={<AirFreightVsSeaFreightPakistanBlog />} />
          <Route path="/blog/customs-regulations-pakistan-2025" element={<Navigate to="/blog/customs-regulations-pakistan-2026/" replace />} />
          <Route path="/blog/customs-regulations-pakistan-2025/" element={<Navigate to="/blog/customs-regulations-pakistan-2026/" replace />} />
          <Route path="/blog/customs-regulations-pakistan-2026/" element={<Navigate to="/blog/customs-regulations-pakistan-2026/" replace />} />
          <Route path="/blog/customs-regulations-guide-pakistan/" element={<Navigate to="/blog/customs-regulations-pakistan-2026/" replace />} />
          <Route path="/blog/customs-regulations-pakistan-2026" element={<Navigate to="/blog/customs-regulations-pakistan-2026/" replace />} />
          <Route path="/blog/customs-regulations-pakistan-2026/" element={<Blog3 />} />
          <Route path="/blog/moving-from-pakistan-to-dubai-guide" element={<Navigate to="/blog/moving-from-pakistan-to-dubai-guide/" replace />} />
          <Route path="/blog/moving-from-pakistan-to-dubai-guide/" element={<Blog4 />} />
          <Route path="/blog/moving-cost-pakistan" element={<Navigate to="/blog/moving-cost-pakistan/" replace />} />
          <Route path="/blog/moving-cost-pakistan/" element={<MovingCostPakistanBlog />} />
          <Route path="/blog/moving-checklist-pakistan" element={<Navigate to="/blog/moving-checklist-pakistan/" replace />} />
          <Route path="/blog/moving-checklist-pakistan/" element={<MovingChecklistPakistanBlog />} />
          <Route path="/blog/packing-tips-house-shifting" element={<Navigate to="/blog/packing-tips-house-shifting/" replace />} />
          <Route path="/blog/packing-tips-house-shifting/" element={<PackingTipsHouseShiftingBlog />} />
          <Route path="/blog/mistakes-during-house-shifting" element={<Navigate to="/blog/mistakes-during-house-shifting/" replace />} />
          <Route path="/blog/mistakes-during-house-shifting/" element={<MistakesDuringHouseShiftingBlog />} />
          <Route path="/blog/air-vs-sea-freight-pakistan" element={<Navigate to="/blog/air-freight-vs-sea-freight-pakistan/" replace />} />
          <Route path="/blog/air-vs-sea-freight-pakistan/" element={<Navigate to="/blog/air-freight-vs-sea-freight-pakistan/" replace />} />
          <Route path="/blog/how-to-choose-packers-movers" element={<Navigate to="/blog/how-to-choose-packers-movers/" replace />} />
          <Route path="/blog/how-to-choose-packers-movers/" element={<HowToChoosePackersMoversBlog />} />
          <Route path="/blog/best-movers-islamabad-vs-lahore" element={<Navigate to="/blog/best-movers-islamabad-vs-lahore/" replace />} />
          <Route path="/blog/best-movers-islamabad-vs-lahore/" element={<BestMoversIslamabadVsLahoreBlog />} />
          <Route path="/blog/office-relocation-checklist-pakistan" element={<Navigate to="/blog/office-relocation-checklist-pakistan/" replace />} />
          <Route path="/blog/office-relocation-checklist-pakistan/" element={<OfficeRelocationChecklistPakistanBlog />} />
          <Route path="/blog/international-shipping-cost-pakistan" element={<Navigate to="/blog/international-shipping-cost-pakistan/" replace />} />
          <Route path="/blog/international-shipping-cost-pakistan/" element={<InternationalShippingCostPakistanBlog />} />
          <Route path="/blog/goods-transport-vs-cargo-services" element={<Navigate to="/blog/goods-transport-vs-cargo-services/" replace />} />
          <Route path="/blog/goods-transport-vs-cargo-services/" element={<GoodsTransportVsCargoServicesBlog />} />
          <Route path="/blog/packing-fragile-items-guide" element={<Navigate to="/blog/packing-fragile-items-guide/" replace />} />
          <Route path="/blog/packing-fragile-items-guide/" element={<PackingFragileItemsGuideBlog />} />
          <Route path="/blog/cheap-movers-tips-pakistan" element={<Navigate to="/blog/cheap-movers-tips-pakistan/" replace />} />
          <Route path="/blog/cheap-movers-tips-pakistan/" element={<CheapMoversTipsPakistanBlog />} />
          <Route path="/blog/packers-and-movers-islamabad-guide" element={<Navigate to="/blog/packers-and-movers-islamabad-guide/" replace />} />
          <Route path="/blog/packers-and-movers-islamabad-guide/" element={<PackersMoversIslamabadGuideBlog />} />
          <Route
            path="/blog/best-packers-and-movers-islamabad-2026"
            element={<Navigate to="/blog/best-packers-and-movers-islamabad-2026/" replace />}
          />
          <Route
            path="/blog/best-packers-and-movers-islamabad-2026/"
            element={<BestPackersMoversIslamabad2026Blog />}
          />
          <Route
            path="/blog/packers-and-movers-islamabad-complete-guide"
            element={<Navigate to="/blog/packers-and-movers-islamabad-complete-guide/" replace />}
          />
          <Route
            path="/blog/packers-and-movers-islamabad-complete-guide/"
            element={<PackersMoversIslamabadCompleteGuideBlog />}
          />
          <Route
            path="/blog/packers-and-movers-rawalpindi-guide"
            element={<Navigate to="/blog/packers-and-movers-rawalpindi-guide/" replace />}
          />
          <Route path="/blog/packers-and-movers-rawalpindi-guide/" element={<PackersMoversRawalpindiGuideBlog />} />
          <Route path="/blog/pet-relocation-from-pakistan-complete-guide" element={<Navigate to="/blog/pet-relocation-from-pakistan-complete-guide/" replace />} />
          <Route path="/blog/pet-relocation-from-pakistan-complete-guide/" element={<PetRelocationFromPakistanBlog />} />
          <Route path="/blog/cargo-insurance-services-pakistan" element={<Navigate to="/blog/cargo-insurance-services-pakistan/" replace />} />
          <Route path="/blog/cargo-insurance-services-pakistan/" element={<CargoInsuranceServicesPakistanBlog />} />
          <Route path="/blog/international-relocation-services-rawalpindi" element={<Navigate to="/blog/international-relocation-services-rawalpindi/" replace />} />
          <Route path="/blog/international-relocation-services-rawalpindi/" element={<BlogInternationalRelocationRawalpindi />} />
          <Route path="/blog/shipping-companies-in-pakistan" element={<Navigate to="/blog/shipping-companies-in-pakistan/" replace />} />
          <Route path="/blog/shipping-companies-in-pakistan/" element={<ShippingCompaniesPakistanBlog />} />
          <Route path="/blog/cargo-service-islamabad-complete-guide" element={<Navigate to="/blog/cargo-service-islamabad-complete-guide/" replace />} />
          <Route path="/blog/cargo-service-islamabad-complete-guide/" element={<CargoServiceIslamabadCompleteGuideBlog />} />
          <Route path="/blog/international-relocation-rawalpindi-complete-guide" element={<Navigate to="/blog/international-relocation-rawalpindi-complete-guide/" replace />} />
          <Route path="/blog/international-relocation-rawalpindi-complete-guide/" element={<InternationalRelocationRawalpindiCompleteGuideBlog />} />
          <Route path="/blog/customs-clearance-process-pakistan" element={<Navigate to="/blog/customs-clearance-process-pakistan/" replace />} />
          <Route path="/blog/customs-clearance-process-pakistan/" element={<CustomsClearanceProcessPakistanBlog />} />
          <Route path="/blog/cargo-charges-pakistan-to-uk" element={<Navigate to="/blog/cargo-charges-pakistan-to-uk/" replace />} />
          <Route path="/blog/cargo-charges-pakistan-to-uk/" element={<CargoChargesPakistanToUKBlog />} />
          <Route path="/blog/best-freight-forwarders-pakistan" element={<Navigate to="/blog/best-freight-forwarders-pakistan/" replace />} />
          <Route path="/blog/best-freight-forwarders-pakistan/" element={<BestFreightForwardersPakistanBlog />} />
          <Route path="/blog/international-relocation-checklist-families" element={<Navigate to="/blog/international-relocation-checklist-families/" replace />} />
          <Route path="/blog/international-relocation-checklist-families/" element={<InternationalRelocationChecklistFamiliesBlog />} />
          <Route path="/blog/car-shipping-pakistan-uk-2026" element={<Navigate to="/blog/car-shipping-pakistan-uk-2026/" replace />} />
          <Route path="/blog/car-shipping-pakistan-uk-2026/" element={<CarShippingPakistanUKBlog />} />
          <Route
            path="/blog/commercial-freight-forwarding-pakistan-uae-2026"
            element={<Navigate to="/blog/commercial-freight-forwarding-pakistan-uae-2026/" replace />}
          />
          <Route
            path="/blog/commercial-freight-forwarding-pakistan-uae-2026/"
            element={<CommercialFreightForwardingPakistanUAEBlog />}
          />
          <Route
            path="/blog/customs-and-duty-pakistan-uk-2026"
            element={<Navigate to="/blog/customs-and-duty-pakistan-uk-2026/" replace />}
          />
          <Route path="/blog/customs-and-duty-pakistan-uk-2026/" element={<CustomsAndDutyPakistanUKBlog />} />
          <Route
            path="/blog/moving-from-pakistan-to-canada-guide"
            element={<Navigate to="/blog/moving-from-pakistan-to-canada-guide/" replace />}
          />
          <Route path="/blog/moving-from-pakistan-to-canada-guide/" element={<MovingFromPakistanToCanadaGuideBlog />} />
          <Route
            path="/blog/canada-customs-rules-personal-effects-pakistan"
            element={<Navigate to="/blog/canada-customs-rules-personal-effects-pakistan/" replace />}
          />
          <Route
            path="/blog/canada-customs-rules-personal-effects-pakistan/"
            element={<CanadaCustomsRulesPersonalEffectsPakistanBlog />}
          />
          <Route
            path="/blog/packing-tips-international-moving-to-canada"
            element={<Navigate to="/blog/packing-tips-international-moving-to-canada/" replace />}
          />
          <Route
            path="/blog/packing-tips-international-moving-to-canada/"
            element={<PackingTipsInternationalMovingToCanadaBlog />}
          />
          <Route
            path="/blog/family-relocation-to-uk-from-pakistan"
            element={<Navigate to="/blog/family-relocation-to-uk-from-pakistan/" replace />}
          />
          <Route
            path="/blog/family-relocation-to-uk-from-pakistan/"
            element={<FamilyRelocationToUkFromPakistanBlog />}
          />
          <Route
            path="/blog/international-shipping-process-guide"
            element={<Navigate to="/blog/international-shipping-process-guide/" replace />}
          />
          <Route
            path="/blog/international-shipping-process-guide/"
            element={<InternationalShippingProcessGuideBlog />}
          />
          <Route
            path="/blog/student-relocation-to-canada-from-pakistan"
            element={<Navigate to="/blog/student-relocation-to-canada-from-pakistan/" replace />}
          />
          <Route
            path="/blog/student-relocation-to-canada-from-pakistan/"
            element={<StudentRelocationToCanadaFromPakistanBlog />}
          />
          <Route
            path="/blog/international-moving-services-pakistan"
            element={<Navigate to="/international-movers-pakistan/" replace />}
          />
          <Route
            path="/blog/international-moving-services-pakistan/"
            element={<Navigate to="/international-movers-pakistan/" replace />}
          />
          <Route
            path="/blog/professional-packing-service-guide"
            element={<Navigate to="/services/professional-packing-services/" replace />}
          />
          <Route
            path="/blog/professional-packing-service-guide/"
            element={<Navigate to="/services/professional-packing-services/" replace />}
          />
          <Route
            path="/blog/goods-transportation-pakistan"
            element={<Navigate to="/goods-transportation-pakistan/" replace />}
          />
          <Route
            path="/blog/goods-transportation-pakistan/"
            element={<Navigate to="/goods-transportation-pakistan/" replace />}
          />
          <Route
            path="/blog/moving-cost-calculator-pakistan"
            element={<Navigate to="/blog/moving-cost-pakistan/" replace />}
          />
          <Route
            path="/blog/moving-cost-calculator-pakistan/"
            element={<Navigate to="/blog/moving-cost-pakistan/" replace />}
          />
          <Route
            path="/blog/best-international-movers-and-packers-guide-2026"
            element={<Navigate to="/blog/best-international-movers-and-packers-guide-2026/" replace />}
          />
          <Route
            path="/blog/best-international-movers-and-packers-guide-2026/"
            element={<BestInternationalMoversAndPackersGuide2026Blog />}
          />
          <Route
            path="/blog/cargo-insurance-international-shipments-2026"
            element={<Navigate to="/blog/cargo-insurance-international-shipments-2026/" replace />}
          />
          <Route
            path="/blog/cargo-insurance-international-shipments-2026/"
            element={<CargoInsuranceInternationalShipments2026Blog />}
          />
          <Route
            path="/blog/office-relocation-karachi-zero-downtime-guide-2026"
            element={<Navigate to="/blog/office-relocation-karachi-zero-downtime-guide-2026/" replace />}
          />
          <Route
            path="/blog/office-relocation-karachi-zero-downtime-guide-2026/"
            element={<OfficeRelocationKarachiZeroDowntimeGuide2026Blog />}
          />
          <Route
            path="/blog/dha-karachi-moving-guide-sector-by-sector"
            element={<Navigate to="/blog/dha-karachi-moving-guide-sector-by-sector/" replace />}
          />
          <Route
            path="/blog/dha-karachi-moving-guide-sector-by-sector/"
            element={<DhaKarachiMovingGuideSectorBySectorBlog />}
          />
          <Route
            path="/blog/karachi-to-dubai-shipping-cost-2026"
            element={<Navigate to="/blog/karachi-to-dubai-shipping-cost-2026/" replace />}
          />
          <Route
            path="/blog/karachi-to-dubai-shipping-cost-2026/"
            element={<KarachiToDubaiShippingCost2026Blog />}
          />
          <Route
            path="/blog/international-cargo-service-islamabad-2026"
            element={<Navigate to="/blog/international-cargo-service-islamabad-2026/" replace />}
          />
          <Route
            path="/blog/international-cargo-service-islamabad-2026/"
            element={<InternationalCargoServiceIslamabad2026 />}
          />
          <Route path="/blog/:slug" element={<BlogPage />} />

          <Route path="/pakistan-to-dubai-movers" element={<PakistanToDubaiMovers />} />
          <Route path="/pakistan-to-uk-movers" element={<PakistanToUK />} />
          <Route path="/pakistan-to-canada-movers" element={<PakistanToCanada />} />
          <Route path="/pakistan-to-usa-movers" element={<PakistanToUSA />} />
          <Route path="/pakistan-to-saudi-arabia-movers" element={<PakistanToSaudi />} />
          <Route path="/pakistan-to-australia-movers" element={<PakistanToAustralia />} />
          <Route path="/pakistan-to-qatar-movers" element={<PakistanToQatar />} />
          <Route path="/pakistan-to-germany-movers" element={<PakistanToGermany />} />
          <Route path="/pakistan-to-malaysia-movers" element={<PakistanToMalaysia />} />

          <Route path="/movers-islamabad" element={<MoversIslamabad />} />
          <Route path="/movers-rawalpindi" element={<MoversRawalpindi />} />
          <Route path="/movers-rawalpindi/" element={<MoversRawalpindi />} />
          <Route path="/international-relocation-services-rawalpindi" element={<InternationalRelocationServicesRawalpindi />} />
          <Route path="/movers-lahore" element={<MoversLahore />} />
          <Route path="/movers-lahore/" element={<MoversLahore />} />
          <Route path="/movers-karachi" element={<MoversKarachi />} />
          <Route path="/movers-karachi/" element={<MoversKarachi />} />
          <Route path="/dha-karachi-movers" element={<DhaKarachiMovers />} />
          <Route path="/dha-karachi-movers/" element={<DhaKarachiMovers />} />
          <Route path="/dha-karachi-moving-guide-sector-by-sector" element={<DhaKarachiMovingGuideSectorBySector />} />
          <Route path="/dha-karachi-moving-guide-sector-by-sector/" element={<DhaKarachiMovingGuideSectorBySector />} />
          <Route path="/movers-multan" element={<MoversMultan />} />
          <Route path="/movers-multan/" element={<MoversMultan />} />
          <Route path="/corporate-relocation-pakistan" element={<CorporateRelocationPakistan />} />
          <Route path="/corporate-relocation-pakistan/" element={<CorporateRelocationPakistan />} />
          <Route path="/house-shifting-karachi" element={<PackersAndMoversKarachi />} />
          <Route path="/house-shifting-karachi/" element={<PackersAndMoversKarachi />} />
          <Route path="/office-relocation-karachi" element={<OfficeRelocationKarachi />} />
          <Route path="/office-relocation-karachi/" element={<OfficeRelocationKarachi />} />
          <Route path="/packers-and-movers-karachi" element={<PackersAndMoversKarachi />} />
          <Route path="/packers-and-movers-karachi/" element={<PackersAndMoversKarachi />} />
          <Route path="/packers-and-movers-multan" element={<PackersAndMoversMultan />} />
          <Route path="/packers-and-movers-multan/" element={<PackersAndMoversMultan />} />
          <Route path="/cargo-service-karachi" element={<CargoServiceKarachi />} />
          <Route path="/cargo-service-karachi/" element={<CargoServiceKarachi />} />
          <Route path="/karachi-to-dubai-cargo" element={<KarachiToDubaiCargo />} />
          <Route path="/karachi-to-dubai-cargo/" element={<KarachiToDubaiCargo />} />
          <Route path="/sea-freight-pakistan-to-uk" element={<SeaFreightPakistanToUK />} />
          <Route path="/sea-freight-pakistan-to-uk/" element={<SeaFreightPakistanToUK />} />
          <Route path="/movers-and-packers-in-peshawar" element={<MoversAndPackersInPeshawar />} />
          <Route path="/movers-peshawar" element={<Navigate to="/movers-and-packers-in-peshawar" replace />} />
          <Route path="/international-movers-from-islamabad" element={<InternationalMoversIslamabad />} />
          <Route path="/international-movers-in-lahore" element={<InternationalMoversLahore />} />

          <Route path="/cargo-service-islamabad" element={<CargoIslamabad />} />
          <Route path="/cargo-service-islamabad/" element={<CargoIslamabad />} />
          <Route path="/cargo-service-rawalpindi" element={<CargoRawalpindi />} />
          <Route path="/air-freight-islamabad" element={<AirFreightIslamabad />} />
          <Route path="/sea-freight-islamabad" element={<SeaFreightIslamabad />} />
          <Route path="/air-freight-rawalpindi" element={<AirFreightRawalpindi />} />
          <Route path="/sea-freight-rawalpindi" element={<SeaFreightRawalpindi />} />
          <Route path="/international-courier-islamabad" element={<CourierIslamabad />} />
          <Route path="/international-courier-rawalpindi" element={<CourierRawalpindi />} />
          <Route path="/freight-forwarding-islamabad" element={<FreightForwardingIslamabad />} />
          <Route path="/customs-clearance-islamabad" element={<CustomsClearanceIslamabad />} />
          <Route path="/container-shipping-pakistan" element={<ContainerShippingPakistan />} />
          <Route path="/goods-transportation-pakistan" element={<GoodsTransportationPakistan />} />
          <Route path="/door-to-door-cargo-pakistan" element={<DoorToDoorCargoPakistan />} />
          <Route path="/house-shifting-islamabad" element={<HouseShiftingIslamabad />} />
          <Route path="/house-shifting-rawalpindi" element={<HouseShiftingRawalpindi />} />
          <Route path="/vehicle-import-guide-pakistan" element={<VehicleImportGuidePakistan />} />
          <Route path="/packers-and-movers-islamabad" element={<PackersMoversIslamabad />} />
          <Route path="/packers-and-movers-lahore" element={<PackersMoversLahore />} />
          <Route path="/packers-and-movers-in-rawalpindi" element={<Navigate to="/packers-and-movers-rawalpindi/" replace />} />
          <Route path="/packers-and-movers-in-rawalpindi/" element={<Navigate to="/packers-and-movers-rawalpindi/" replace />} />
          <Route path="/packers-and-movers-rawalpindi" element={<Navigate to="/packers-and-movers-rawalpindi/" replace />} />
          <Route path="/home-shifting-islamabad" element={<HomeShiftingIslamabad />} />
          <Route path="/blog/home-shifting-islamabad" element={<Navigate to="/home-shifting-islamabad" replace />} />
          <Route path="/blog/home-shifting-islamabad/" element={<Navigate to="/home-shifting-islamabad" replace />} />
          <Route path="/storage-units-islamabad" element={<StorageUnitsIslamabad />} />
          <Route path="/storage-units-islamabad/" element={<StorageUnitsIslamabad />} />
          <Route path="/home-shifting-rawalpindi" element={<HomeShiftingRawalpindi />} />
          <Route path="/home-shifting-services-in-rawalpindi" element={<HomeShiftingServicesInRawalpindi />} />
          <Route path="/packers-and-movers-rawalpindi/" element={<PackersAndMoversInRawalpindi />} />
          <Route path="/international-cargo-islamabad" element={<InternationalCargoIslamabad />} />
          <Route path="/top-shipping-companies-in-pakistan" element={<TopShippingCompaniesInPakistan />} />
          <Route path="/shipping-companies-pakistan" element={<Navigate to="/top-shipping-companies-in-pakistan" replace />} />
          <Route path="/pakistan-cargo-services" element={<PakistanCargoServices />} />
          <Route path="/custom-duty-calculator" element={<CustomDutyCalculator />} />
          <Route path="/custom-duty-calculator/" element={<CustomDutyCalculator />} />
          <Route path="/international-movers-pakistan" element={<Navigate to="/international-movers-pakistan/" replace />} />
          <Route path="/international-movers-pakistan/" element={<InternationalMoversPakistan />} />
          <Route path="/international-movers-and-packers-pakistan" element={<InternationalMoversAndPackersPakistan />} />
          <Route path="/part-load-removals-to-pakistan" element={<PartLoadRemovalsPakistan />} />
          <Route path="/cargo-services-pakistan" element={<Navigate to="/cargo-services-pakistan/" replace />} />
          <Route path="/cargo-services-pakistan/" element={<CargoServicesPakistan />} />
          <Route path="/logistics-services-pakistan" element={<Navigate to="/logistics-services-pakistan/" replace />} />
          <Route path="/logistics-services-pakistan/" element={<LogisticsServicesPakistan />} />
          <Route path="/packers-and-movers-pakistan" element={<Navigate to="/packers-and-movers-pakistan/" replace />} />
          <Route path="/packers-and-movers-pakistan/" element={<PackersMoversPakistan />} />
          <Route path="/custom-clearance-agency-in-pakistan" element={<CustomClearanceAgencyPakistan />} />

          <Route path="/international-movers-islamabad" element={<Navigate to="/international-movers-from-islamabad/" replace />} />
          <Route path="/international-movers-islamabad/" element={<Navigate to="/international-movers-from-islamabad/" replace />} />
          <Route path="/international-moving" element={<Navigate to="/services/international-moving-services/" replace />} />
          <Route path="/international-moving/" element={<Navigate to="/services/international-moving-services/" replace />} />
          <Route path="/office-relocation-islamabad" element={<Navigate to="/packers-and-movers-islamabad/" replace />} />
          <Route path="/office-relocation-islamabad/" element={<Navigate to="/packers-and-movers-islamabad/" replace />} />
          <Route path="/secure-storage-islamabad" element={<Navigate to="/services/secure-storage-services/" replace />} />
          <Route path="/secure-storage-islamabad/" element={<Navigate to="/services/secure-storage-services/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
