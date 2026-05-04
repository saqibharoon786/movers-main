import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { computeSeoHead, toCanonicalUrl, normalizeSeoPath } from "@/utils/seoHead";
import { useSEO } from "@/hooks/useSEO";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
  urlPath?: string;
  noindex?: boolean;
}

export default function SEO({ title, description, schema, keywords, urlPath, noindex }: SEOProps) {
  const location = useLocation();
  
  // Use explicit urlPath first, then React Router location, then browser pathname
  const currentPath = urlPath || location.pathname || window.location.pathname || "/";
  
  const kw = keywords || title.toLowerCase().replace(/\s*\|\s*/g, ", ");
  const head = useMemo(
    () =>
      computeSeoHead({
        title,
        description,
        keywords: kw,
        urlPath: currentPath,
        noindex,
      }),
    [title, description, kw, currentPath, noindex]
  );

  // Compute canonical directly to ensure it's correct
  const canonicalUrl = useMemo(() => {
    const normalizedPath = normalizeSeoPath(currentPath);
    return toCanonicalUrl(normalizedPath);
  }, [currentPath]);

  useSEO({
    title,
    description,
    schema,
    keywords: kw,
    urlPath: currentPath,
    renderMetaInDom: false, // Use Helmet instead of DOM manipulation to avoid conflicts
  });

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{head.seoTitle}</title>
      <meta name="description" content={head.seoDescription} />
      <meta name="keywords" content={head.keywords} />
      <meta name="robots" content={head.robots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={head.seoTitle} />
      <meta property="og:description" content={head.seoDescription} />
      <meta property="og:image" content={head.selectedOgImage} />
      {head.ogImageAlt ? <meta property="og:image:alt" content={head.ogImageAlt} /> : null}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Best International Movers & Logistics" />
      <meta property="og:locale" content="en_PK" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={head.seoTitle} />
      <meta name="twitter:description" content={head.seoDescription} />
      <meta name="twitter:image" content={head.twitterImage} />
    </Helmet>
  );
}
