import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { DoorToDoorCargoPakistanBody, doorToDoorCargoPakistanFaqs } from "@/content/doorToDoorCargoPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Door to Door Cargo Pakistan",
  description:
    "Complete door to door cargo from Pakistan to UAE, UK, Canada, USA and worldwide. Home pickup, packing, customs and final delivery managed by Best International Movers.",
  url: "https://bestintlmovers.com/door-to-door-cargo-pakistan",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const DoorToDoorCargoPakistan = () => {
  return (
    <SeoLandingPageLayout
      title="Door to Door Cargo Pakistan – Home Pickup to World Delivery"
      description="Complete door to door cargo from Pakistan to UAE, UK, Canada, USA & worldwide. Home pickup, packing, customs & final delivery managed. Call 0300-9130211 today."
      keywords="door to door cargo pakistan, door to door shipping pakistan, door to door delivery pakistan, door to door cargo service pakistan, international door to door pakistan, pakistan home pickup cargo, door to door freight pakistan"
      urlPath="/door-to-door-cargo-pakistan"
      h1="Door to Door Cargo Pakistan — Complete International Shipping from Your Home to Destination"
      heroSubtext="One company, one contract, one coordinator — pickup at your Pakistan address, export clearance, sea or air freight, import coordination, and delivery at your overseas door."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Door to Door Cargo Pakistan" }]}
      heroImageUrl="/images/freight-forwarding.png"
      heroImageAlt="Door to door cargo service from Pakistan — home pickup to international delivery"
      schema={serviceSchema}
      faqs={doorToDoorCargoPakistanFaqs}
      faqSectionTitle="Door-to-door cargo — frequently asked questions"
    >
      <DoorToDoorCargoPakistanBody />
    </SeoLandingPageLayout>
  );
};

export default DoorToDoorCargoPakistan;
