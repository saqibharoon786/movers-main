import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { pageTitles } from "@/seo/pageTitles";
import { LogisticsServicesPakistanBody, logisticsServicesPakistanFaqs } from "@/content/logisticsServicesPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logistics Services Pakistan",
  description: "Integrated logistics services in Pakistan including freight forwarding and transport planning.",
  serviceType: "Logistics and supply chain services",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const LogisticsServicesPakistan = () => (
  <SeoLandingPageLayout
    title={pageTitles.logisticsPakistan}
    description="Logistics services Pakistan for supply chain planning, freight forwarding, and transport solutions with operational reliability."
    keywords="logistics services pakistan, supply chain pakistan, freight forwarding pakistan, transport solutions pakistan"
    urlPath="/logistics-services-pakistan/"
    canonicalUrl="https://bestintlmovers.com/logistics-services-pakistan/"
    h1="Logistics Services Pakistan"
    heroSubtext="Scalable logistics execution with route planning, freight coordination, and controlled delivery performance."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Logistics Services Pakistan" }]}
    heroImageUrl="/images/freight-forwarding.png"
    heroImageAlt="Logistics and freight forwarding operations for supply chain in Pakistan"
    schema={serviceSchema}
    faqs={logisticsServicesPakistanFaqs}
  >
    <LogisticsServicesPakistanBody />
  </SeoLandingPageLayout>
);

export default LogisticsServicesPakistan;
