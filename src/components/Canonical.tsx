import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalProps {
  canonical?: string;
  title?: string;
  description?: string;
  noIndex?: boolean;
}

const Canonical: React.FC<CanonicalProps> = ({ 
  canonical, 
  title, 
  description,
  noIndex = false 
}) => {
  const location = useLocation();
  
  // Build canonical URL with proper formatting
  const buildCanonicalUrl = (path: string): string => {
    const baseUrl = 'https://bestintlmovers.com';
    const cleanPath = path.replace(/\/+$/, '') || '/'; // Remove trailing slashes except for root
    return `${baseUrl}${cleanPath}`;
  };

  const finalCanonical = canonical || buildCanonicalUrl(location.pathname);
  
  // Default meta description if not provided
  const defaultDescription = "Pakistan's #1 international moving company. Door-to-door service to UAE, UK, USA, Canada & 100+ countries. 5000+ families moved. Free quote: 0300-9130211";
  const finalDescription = description || defaultDescription;

  // Default title if not provided
  const defaultTitle = "Packers and Movers | Best Intl Movers";
  const finalTitle = title || defaultTitle;

  // Robots meta content
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Basic meta tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsContent} />
      
      {/* Open Graph meta tags for social sharing */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Best International Movers & Logistics" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      
      {/* Additional SEO meta tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Pakistan" />
      <meta name="ICBM" content="33.6844;73.0479" />
      
      {/* Prevent duplicate canonical tags */}
      <meta name="referrer" content="no-referrer-when-downgrade" />
    </Helmet>
  );
};

export default Canonical;