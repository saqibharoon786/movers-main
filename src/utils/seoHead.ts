import { siteImagePaths, siteImageUrl } from "@/lib/siteImages";

const SITE_URL = "https://bestintlmovers.com";
export const SEO_SITE_URL = SITE_URL;

const DEFAULT_SOCIAL_IMAGE = siteImageUrl(siteImagePaths.heroHome);

const normalizeOgImage = (image?: string) => {
  if (!image) return DEFAULT_SOCIAL_IMAGE;
  if (image.startsWith("http")) return image;
  return siteImageUrl(image.startsWith("/") ? image : `/${image}`);
};

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const pathToLabel = (path: string) => {
  const trimmed = path.replace(/^\/|\/$/g, "");
  if (!trimmed) return "Pakistan";
  const segments = trimmed.split("/").filter(Boolean);
  const last = segments[segments.length - 1].replace(/-/g, " ");
  return toTitleCase(last);
};

/** Google SERP display limit — keep titles at or below 60 characters. */
export const SEO_TITLE_MAX = 60;

const clip = (value: string, max: number) => {
  const trimmed = value.trim();
  if (trimmed.length <= max) return trimmed;
  const slice = trimmed.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > max * 0.6 ? slice.slice(0, lastSpace) : slice;
  return cut.trimEnd();
};

/** Normalize any page title for `<title>` and Open Graph (always ≤ SEO_TITLE_MAX). */
export const formatSeoTitle = (title: string, urlPath?: string | null) => {
  const normalizedPath = resolveCanonicalPath(urlPath) ?? "/";
  const routeLabel = pathToLabel(normalizedPath);
  const isBlogPath = normalizedPath.startsWith("/blog/");
  const isFullSeoTitle = title.includes("|");
  const titleHasRoute = title.toLowerCase().includes(routeLabel.toLowerCase());
  const base =
    isFullSeoTitle || titleHasRoute || normalizedPath === "/" || isBlogPath
      ? title
      : `${title} | ${routeLabel}`;
  return clip(base, SEO_TITLE_MAX);
};

const looksLikeAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

/**
 * Normalized path with leading slash and trailing slash on all non-root paths.
 * Removes query/hash and collapses duplicate slashes.
 * Returns undefined when input is missing/invalid.
 */
export const normalizeSeoPath = (path?: string | null): string | undefined => {
  if (typeof path !== "string") return undefined;
  const trimmed = path.trim();
  if (!trimmed) return undefined;

  let candidate = trimmed;

  if (looksLikeAbsoluteUrl(trimmed)) {
    try {
      candidate = new URL(trimmed).pathname || "/";
    } catch {
      return undefined;
    }
  }

  const withoutHash = candidate.split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  const collapsed = withoutQuery.replace(/\/{2,}/g, "/");
  const withLeading = collapsed.startsWith("/") ? collapsed : `/${collapsed}`;

  if (withLeading === "/") return "/";

  const noTrailing = withLeading.replace(/\/+$/, "");
  return `${noTrailing}/`;
};

/** Legacy short service paths → preferred canonical slug (no trailing slash keys). */
const CANONICAL_PATH_ALIASES: Record<string, string> = {
  "/services/vehicle-shipping": "/services/vehicle-shipping-services",
  "/services/professional-packing": "/services/professional-packing-services",
  "/services/packing-materials": "/services/packing-materials-services",
  "/services/packing": "/services/professional-packing-services",
  "/services/cargo-insurance": "/services/cargo-insurance-services",
  "/services/sea-freight": "/services/sea-freight-services",
  "/services/international-moving": "/services/international-moving-services",
  "/services/secure-storage-services/": "/services/secure-storage-services",
  "/international-moving": "/services/international-moving-services",
  "/international-movers-islamabad": "/international-movers-from-islamabad",
  "/office-relocation-islamabad": "/packers-and-movers-islamabad",
  "/secure-storage-islamabad": "/services/secure-storage-services",
  "/blog/home-shifting-islamabad": "/home-shifting-islamabad",
  "/blog/customs-regulations-pakistan-2026/": "/blog/customs-regulations-pakistan-2026",
  "/blog/international-moving-services-pakistan": "/international-movers-pakistan",
  "/blog/customs-regulations-pakistan-2025": "/blog/customs-regulations-pakistan-2026",
};

/** Build `/services/.../` path using canonical slug aliases. */
export const resolveServicePath = (segment: string): string => {
  const cleaned = segment.replace(/^\/+|\/+$/g, "");
  const path = `/services/${cleaned}`;
  return resolveCanonicalPath(path) ?? normalizeSeoPath(path) ?? path;
};

/**
 * Resolves the preferred canonical path (aliases + trailing slash policy).
 */
export const resolveCanonicalPath = (path?: string | null): string | undefined => {
  const normalized = normalizeSeoPath(path);
  if (!normalized) return undefined;

  const key = stripTrailingSlashForCompare(normalized);
  const alias = CANONICAL_PATH_ALIASES[key];
  if (alias) return normalizeSeoPath(alias);

  return normalized;
};

/** Same path ignoring trailing slash (for comparing router vs address bar). */
export const stripTrailingSlashForCompare = (path: string): string => {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
};

/** Canonical URL: https://bestintlmovers.com (no www), trailing slash on inner pages. */
export const toCanonicalUrl = (path?: string | null) => {
  const normalizedPath = resolveCanonicalPath(path);
  if (!normalizedPath) return undefined;
  if (normalizedPath === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${normalizedPath}`;
};

/** Normalize an absolute canonical override to the site URL + path policy. */
export const normalizeCanonicalUrl = (url?: string | null) => {
  const trimmed = url?.trim();
  if (!trimmed) return undefined;
  if (!looksLikeAbsoluteUrl(trimmed)) return toCanonicalUrl(trimmed);
  try {
    return toCanonicalUrl(new URL(trimmed).pathname);
  } catch {
    return undefined;
  }
};

export type ComputeSeoHeadInput = {
  title: string;
  description: string;
  keywords: string;
  /** Preferred path for canonical (e.g. `/contact`). Falls back to `pathnameFallback` or `/`. */
  urlPath?: string;
  pathnameFallback?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterImage?: string;
  noindex?: boolean;
};

export function computeSeoHead(input: ComputeSeoHeadInput) {
  const canonicalPath =
    resolveCanonicalPath(input.urlPath) ?? resolveCanonicalPath(input.pathnameFallback);
  const normalizedPath = canonicalPath ?? "/";
  const routeLabel = pathToLabel(normalizedPath);

  const seoTitle = formatSeoTitle(input.title, normalizedPath);

  const cta = "Call or WhatsApp 0300-9130211.";
  const descriptionHasRoute = input.description.toLowerCase().includes(routeLabel.toLowerCase());
  const descriptionWithRoute =
    normalizedPath === "/" || descriptionHasRoute
      ? input.description
      : `${input.description} ${routeLabel} relocation support in Pakistan.`;
  const descriptionWithCta = descriptionWithRoute.includes("0300-9130211")
    ? descriptionWithRoute
    : `${descriptionWithRoute} ${cta}`;
  const seoDescription = clip(descriptionWithCta, 160);

  const fullUrl = toCanonicalUrl(canonicalPath);
  const selectedOgImage = normalizeOgImage(input.ogImage);
  const robots = input.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

  return {
    seoTitle,
    seoDescription,
    fullUrl,
    normalizedPath,
    selectedOgImage,
    twitterImage: input.twitterImage || selectedOgImage,
    robots,
    keywords: input.keywords,
    ogImageAlt: input.ogImageAlt,
  };
}
