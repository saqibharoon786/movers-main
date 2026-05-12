import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useResolvedPath } from "react-router-dom";
import { computeSeoHead, toCanonicalUrl, normalizeSeoPath, alignSeoPathWithBrowser } from "@/utils/seoHead";
import { useSEO } from "@/hooks/useSEO";
import { notifyPrerenderReady } from "@/utils/prerender";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
  urlPath?: string;
  /** Absolute canonical URL override (use when server forces trailing-slash redirects on specific routes). */
  canonicalUrl?: string;
  noindex?: boolean;
}

export default function SEO({ title, description, schema, keywords, urlPath, canonicalUrl, noindex }: SEOProps) {
  const location = useLocation();
  const resolvedPath = useResolvedPath(".");

  const effectivePath = useMemo(() => {
    const explicitPath = normalizeSeoPath(urlPath);
    let candidate: string | undefined;
    if (explicitPath) candidate = explicitPath;
    else {
      const resolvedRoutePath = normalizeSeoPath(resolvedPath.pathname);
      const liveLocationPath = normalizeSeoPath(location.pathname);

      // Prevent transient "/" from overriding non-home routes.
      if (resolvedRoutePath && resolvedRoutePath !== "/") candidate = resolvedRoutePath;
      else if (liveLocationPath && liveLocationPath !== "/") candidate = liveLocationPath;
      else if (resolvedRoutePath === "/" && liveLocationPath === "/") candidate = "/";
      else candidate = resolvedRoutePath ?? liveLocationPath;
    }

    const aligned = alignSeoPathWithBrowser(candidate) ?? candidate;
    return aligned ?? "/";
  }, [urlPath, resolvedPath.pathname, location.pathname]);

  const kw = keywords || title.toLowerCase().replace(/\s*\|\s*/g, ", ");
  const head = useMemo(
    () =>
      computeSeoHead({
        title,
        description,
        keywords: kw,
        urlPath: effectivePath,
        noindex,
      }),
    [title, description, kw, effectivePath, noindex]
  );

  const finalCanonicalUrl = useMemo(() => {
    const trimmed = canonicalUrl?.trim();
    if (!trimmed) return head.fullUrl;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return head.fullUrl;
  }, [canonicalUrl, head.fullUrl]);

  // Only use useSEO for JSON-LD schema (set renderMetaInDom to false)
  useSEO({
    title,
    description,
    schema,
    keywords: kw,
    urlPath: effectivePath,
    renderMetaInDom: false,
  });

  useEffect(() => {
    notifyPrerenderReady();
  }, [head.fullUrl, head.seoTitle, head.seoDescription]);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{head.seoTitle}</title>
      <meta name="description" content={head.seoDescription} />
      <meta name="keywords" content={head.keywords} />
      <meta name="robots" content={head.robots} />
      {finalCanonicalUrl ? <link rel="canonical" href={finalCanonicalUrl} /> : null}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={finalCanonicalUrl ?? head.fullUrl ?? toCanonicalUrl(effectivePath) ?? "https://bestintlmovers.com/"}
      />
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
